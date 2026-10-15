#!/usr/bin/env node
/**
 * Render the 1200x630 social share image for every help page and upload it to R2.
 *
 *   npm run og                    # render + upload new or changed images only
 *   npm run og -- --force         # re-render + re-upload everything (after a design change)
 *   npm run og -- --no-upload     # render into .og-cache/ to look at, touch nothing remote
 *
 * Needs Playwright's Chromium and a logged-in wrangler. Images live in the R2 bucket
 * dosya-help-og (served by worker/index.mjs at /og/...), never in git. The committed
 * src/data/og-images.json records which content each uploaded image was drawn from;
 * HelpLayout uses its hash as ?v= so WhatsApp and Slack refetch changed previews.
 * Run this BEFORE deploying the help Worker so new pages never point at a missing image.
 */
import {execFileSync} from 'node:child_process';
import {existsSync,mkdirSync,readFileSync,statSync,writeFileSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {createRequire} from 'node:module';
import {ogEntries} from './og-data.mjs';

const BUCKET='dosya-help-og';
const app=resolve(import.meta.dirname,'..'),repo=resolve(app,'../..');
const outDir=join(app,'.og-cache'),manifestPath=join(app,'src/data/og-images.json');
const force=process.argv.includes('--force'),upload=!process.argv.includes('--no-upload');
const {chromium}=createRequire(join(repo,'package.json'))('playwright');
const wrangler=(...args)=>execFileSync(join(repo,'node_modules/.bin/wrangler'),['r2',...args],{cwd:app,stdio:'inherit'});

const font=file=>`data:font/woff2;base64,${readFileSync(join(repo,'packages/brand/fonts',file)).toString('base64')}`;
const C={bg:'#131313',fg:'#ededed',mut:'#a1a1a1',bd:'#2c2c2c',green:'#22c55e'};
const logo=`<svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true"><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h4.2l2.1 2.6h6.7A2.5 2.5 0 0 1 21 10.1v7.4A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" fill="none" stroke="${C.fg}" stroke-width="2.2" stroke-linejoin="round"/><circle cx="16.6" cy="14.6" r="2.1" fill="${C.green}"/></svg>`;
const template=`<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:G;src:url(${font('space-grotesk-latin.woff2')}) format('woff2');font-weight:300 700}
@font-face{font-family:G;src:url(${font('space-grotesk-latin-ext.woff2')}) format('woff2');font-weight:300 700;unicode-range:U+0100-02AF,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:M;src:url(${font('space-mono-latin.woff2')}) format('woff2')}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;background:${C.bg};color:${C.fg};font-family:G,sans-serif}
.w{position:absolute;inset:64px 72px;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:14px;font:600 30px G}.brand span{font-weight:400;color:${C.mut};border-left:2px solid ${C.bd};padding-left:14px}
.mono{font-family:M,monospace;letter-spacing:.06em}
#eyebrow{margin-top:auto;font-size:22px;color:${C.green};text-transform:uppercase}
#title{line-height:1.04;letter-spacing:-.03em;font-weight:600;margin:20px 0 22px;max-width:1040px;text-wrap:balance}
#title span{white-space:nowrap}
#description{font-size:28px;line-height:1.4;color:${C.mut};max-width:960px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.ft{margin-top:44px;display:flex;justify-content:space-between;gap:32px;font-size:22px;color:${C.mut};border-top:2px solid ${C.bd};padding-top:24px}
#url{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#meta{flex-shrink:0;white-space:nowrap}
#meta::before{content:"";display:inline-block;width:12px;height:12px;border-radius:50%;background:${C.green};margin-right:12px;vertical-align:1px}
</style></head><body><div class="w">
<div class="brand">${logo}dosya<span>Help</span></div>
<div id="eyebrow" class="mono"></div><h1 id="title"></h1><p id="description"></p>
<div class="ft mono"><span id="url"></span><span id="meta"></span></div>
</div></body></html>`;

// Fill the template and pick the largest title size that keeps the card in balance.
function fill(e){
  const set=(id,text)=>{document.getElementById(id).textContent=text;};
  set('eyebrow',e.eyebrow);set('description',e.description);set('url',e.url);set('meta',e.meta);
  const title=document.getElementById('title');
  // Keep hyphenated compounds ("sharing-link") on one line.
  title.replaceChildren(...e.title.split(/(\S+-\S+)/).map(part=>{
    if(!/\S+-\S+/.test(part))return document.createTextNode(part);
    const span=document.createElement('span');span.textContent=part;return span;}));
  const lines=size=>{title.style.fontSize=`${size}px`;return Math.round(title.offsetHeight/(size*1.04));};
  const size=[84,78,72].find(s=>lines(s)<=2)??[68,62,56].find(s=>lines(s)<=3)??52;
  lines(size);
}

const entries=ogEntries(app);
const previous=existsSync(manifestPath)?JSON.parse(readFileSync(manifestPath,'utf8')):{};
const todo=entries.filter(e=>force||previous[e.path]?.hash!==e.hash);
const current=new Set(entries.map(e=>e.file));
const removed=[...new Set(Object.values(previous).map(e=>e.file))].filter(file=>!current.has(file));

if(todo.length){
  const browser=await chromium.launch();
  const page=await browser.newPage({viewport:{width:1200,height:630}});
  await page.setContent(template,{waitUntil:'load'});
  await page.evaluate(()=>document.fonts.ready);
  for(const [i,e] of todo.entries()){
    await page.evaluate(fill,e);
    const file=join(outDir,e.file);
    mkdirSync(dirname(file),{recursive:true});
    await page.screenshot({path:file,type:'jpeg',quality:84});
    // WhatsApp drops link previews whose image is over 300 KB.
    if(statSync(file).size>=300*1024)throw Error(`og: ${e.file} is over 300 KB`);
    if((i+1)%100===0)console.log(`og: rendered ${i+1}/${todo.length}`);
  }
  await browser.close();
}
console.log(`og: ${entries.length} pages, ${todo.length} to upload, ${removed.length} to delete`);
if(!upload){console.log(`og: --no-upload, images are in ${outDir}; R2 and the manifest are unchanged`);process.exit(0);}

if(todo.length){
  const pairs=join(outDir,'upload.json');
  writeFileSync(pairs,JSON.stringify(todo.map(e=>({key:`og/${e.file}`,file:join(outDir,e.file)}))));
  // The Worker sets the response cache headers; R2 only needs the type.
  wrangler('bulk','put',BUCKET,'--remote','-y','--ct','image/jpeg','-f',pairs);
}
for(const file of removed)wrangler('object','delete',`${BUCKET}/og/${file}`,'--remote');

// Written last: if an upload fails, the next run still sees those pages as changed.
writeFileSync(manifestPath,`${JSON.stringify(Object.fromEntries(entries.map(e=>[e.path,{file:e.file,hash:e.hash}])),null,1)}\n`);
console.log('og: R2 and src/data/og-images.json are up to date');
