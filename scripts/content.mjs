import { readFile,writeFile,mkdir,readdir,copyFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { existsSync } from 'node:fs';
import {revisionSql} from './registry.mjs';
import {renderLlmsIndex,renderLlmsFull} from './llms.mjs';
const app=fileURLToPath(new URL('..',import.meta.url)),repo=path.resolve(app,'../..');
// The public help.dosya.dev mirror ships this app alone. There the shared assets
// below are already vendored in public/, and the API/admin copies have no home.
const monorepo=existsSync(path.join(repo,'apps/api/package.json'));
const catalog=[],search=[],seen=new Set(),paths=new Set();
await mkdir(path.join(app,'generated'),{recursive:true});await mkdir(path.join(app,'content-history'),{recursive:true});
for(const f of (await readdir(path.join(app,'src/content/articles'))).filter(f=>f.endsWith('.md')).sort()) {
  const raw=await readFile(path.join(app,'src/content/articles',f),'utf8');
  const match=raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!match)throw Error(`Missing JSON frontmatter: ${f}`);
  const meta=JSON.parse(match[1]); const route=`/${meta.category}/${meta.articleSlug}`;
  if(meta.locale!=='en'||!/^hc-[a-z0-9-]+$/.test(meta.articleId)||!/^\/[a-z-]+\/[a-z0-9-]+$/.test(route)||seen.has(meta.articleId)||paths.has(route))throw Error(`Invalid/duplicate help article: ${f}`);
  seen.add(meta.articleId);paths.add(route);
  const hash=createHash('sha256').update(match[2]).digest('hex');
  const history=path.join(app,'content-history',`${meta.articleId}.en.r${meta.revision}.md`);
  let previous;try{previous=await readFile(history,'utf8');}catch(e){if(e.code!=='ENOENT')throw e;}
  if(previous){const old=previous.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
    if(old[2]!==match[2]||['title','summary','category','articleSlug'].some(k=>JSON.parse(old[1])[k]!==meta[k]))throw Error(`Bump revision before changing ${meta.articleId}; history is immutable.`);
  }else if(meta.status==='published') await writeFile(history,raw);
  catalog.push({...meta,contentHash:hash});
  if(meta.status==='published')search.push({...meta,body:match[2],path:route});
  // Staff previews render Markdown on the admin origin. Ship their referenced
  // images there too, so relative screenshot links and full-size views work.
  if(monorepo)for(const [,name] of match[2].matchAll(/<(?:img|source)[^>]*\bsrc(?:set)?="\/screenshots\/([a-z0-9-]+\.webp)"/g)){
    const destination=path.join(repo,'apps/admin/public/screenshots');
    await mkdir(destination,{recursive:true});
    await copyFile(path.join(app,'public/screenshots',name),path.join(destination,name));
  }
}
for(const a of catalog)for(const id of a.related)if(!seen.has(id))throw Error(`Unknown related article ${id}`);
await writeFile(path.join(app,'generated/catalog.json'),JSON.stringify(catalog,null,2)+'\n');
// The API is mirrored and built as a standalone repository. Vendor only its
// generated metadata, never a cross-app import or private draft body.
if(monorepo)await writeFile(path.join(repo,'apps/api/src/lib/help/catalog.json'),JSON.stringify(catalog,null,2)+'\n');
await mkdir(path.join(app,'public'),{recursive:true});
await writeFile(path.join(app,'public/search-index.json'),JSON.stringify(search)+'\n');
const llmsIndex=renderLlmsIndex(search);
await writeFile(path.join(app,'public/llms.txt'),llmsIndex);
await writeFile(path.join(app,'public/llms-full.txt'),renderLlmsFull(search,llmsIndex));
if(monorepo){
for(const f of (await readdir(path.join(repo,'public/fonts'))).filter(f=>f.endsWith('.woff2'))){
  await mkdir(path.join(app,'public/fonts'),{recursive:true});await copyFile(path.join(repo,'public/fonts',f),path.join(app,'public/fonts',f));
  await mkdir(path.join(repo,'apps/admin/public/fonts'),{recursive:true});await copyFile(path.join(repo,'public/fonts',f),path.join(repo,'apps/admin/public/fonts',f));
}
await copyFile(path.join(repo,'public/favicon.svg'),path.join(app,'public/favicon.svg'));
await mkdir(path.join(app,'public/integrations'),{recursive:true});
for(const name of ['google','onedrive','dropbox','zapier','rclone']){
  await copyFile(path.join(repo,`apps/web/public/${name}-color.svg`),path.join(app,`public/integrations/${name}-color.svg`));
}
}
const versions=new Map(),publishedDates=new Map(catalog.map(a=>[a.articleId,a.lastReviewed]));
for(const f of (await readdir(path.join(app,'content-history'))).filter(f=>f.endsWith('.md'))){const raw=await readFile(path.join(app,'content-history',f),'utf8'),m=raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/),a=JSON.parse(m[1]);versions.set(`${a.articleId}:${a.revision}`,{...a,contentHash:createHash('sha256').update(m[2]).digest('hex')});
  const current=publishedDates.get(a.articleId);if(!current||a.lastReviewed<current)publishedDates.set(a.articleId,a.lastReviewed);
}
for(const a of catalog)versions.set(`${a.articleId}:${a.revision}`,a);
await writeFile(path.join(app,'generated/published-dates.json'),JSON.stringify(Object.fromEntries([...publishedDates].sort(([a],[b])=>a.localeCompare(b,'en'))),null,2)+'\n');
const sql=Array.from(versions.values()).map(revisionSql).join('\n');
// Apply only as a reviewed new migration when content changes; never auto-write production.
await writeFile(path.join(app,'generated/catalog.sql'),`-- Generated help revision registry; review before copying to a new D1 migration.\n${sql}\n`);
console.log(`Help: ${catalog.length} English guides, ${search.length} published.`);
