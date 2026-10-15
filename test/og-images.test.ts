import {expect,it} from 'vitest';
import {readFileSync} from 'node:fs';
import {ogEntries} from '../scripts/og-data.mjs';

const manifest=JSON.parse(readFileSync('src/data/og-images.json','utf8')) as Record<string,{file:string;hash:string}>;

it('has an uploaded share image for the home, mobile, category and every published guide page',()=>{
  const entries=ogEntries('.') as {path:string;file:string;hash:string}[];
  const stale=entries.filter(e=>manifest[e.path]?.hash!==e.hash).map(e=>e.path);
  // A guide title, summary, category or review date changed since the images were uploaded:
  // run `npm run og` (renders and uploads to R2) and commit src/data/og-images.json.
  expect(stale,'run npm run og').toEqual([]);
  expect(Object.keys(manifest).sort()).toEqual(entries.map(e=>e.path).sort());
});

it('only serves well-formed image keys from R2 and falls back to the home image',async()=>{
  const {default:worker}=await import('../worker/index.mjs');
  const stored=new Map([['og/home.jpg','home'],['og/sharing/analytics.jpg','analytics']]);
  const env={
    OG:{get:async(key:string)=>stored.has(key)?{body:stored.get(key),httpEtag:`"${key}"`}:null},
    ASSETS:{fetch:async()=>new Response('asset',{status:404})},
  };
  const get=(path:string)=>worker.fetch(new Request(`https://help.dosya.dev${path}`),env);
  const own=await get('/og/sharing/analytics.jpg?v=abc');
  expect(await own.text()).toBe('analytics');
  expect(own.headers.get('Content-Type')).toBe('image/jpeg');
  expect(own.headers.get('Cache-Control')).toBe('public, max-age=604800');
  expect(await (await get('/og/sharing/missing-guide.jpg')).text()).toBe('home');
  // Anything that is not a plain og/*.jpg key goes to the static assets, never to R2.
  expect(await (await get('/og/../secret.jpg')).text()).toBe('asset');
  expect(await (await get('/og/sharing/analytics.png')).text()).toBe('asset');
});
