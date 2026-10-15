// Social share images: which pages get one and what each image says.
// Shared by scripts/og-images.mjs (renders) and test/og-images.test.ts (checks the
// committed images still match the content). Change TEMPLATE_VERSION whenever the
// template's look changes so every image re-renders.
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {join} from 'node:path';

export const TEMPLATE_VERSION='a2';

const parseCategory=(source,name)=>{
  const match=source.match(new RegExp(`${name}(?::\\s*\\w+)?\\s*[:=]\\s*\\{\\s*title:'([^']+)',\\s*summary:'([^']+)'`));
  if(!match)throw Error(`og-data: could not read category ${name}`);
  return {title:match[1],summary:match[2]};
};

export function readCategories(root='.'){
  const source=readFileSync(join(root,'src/lib/content.ts'),'utf8');
  const block=source.slice(source.indexOf('export const categories'),source.indexOf('export function parseArticle'));
  const ids=[...block.matchAll(/^\s{2}(\w+):\{$/gm)].map(match=>match[1]);
  return Object.fromEntries(ids.map(id=>[id,parseCategory(block,id)]));
}

const reviewed=date=>`Reviewed ${new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric',timeZone:'UTC'})}`;
const hashOf=fields=>createHash('sha256').update(JSON.stringify([TEMPLATE_VERSION,fields])).digest('hex').slice(0,10);
const entry=(path,file,fields)=>({path,file,...fields,hash:hashOf(fields)});

/** Every page that gets its own image, keyed by canonical path. Paginated, search and 404 pages fall back. */
export function ogEntries(root='.'){
  const categories=readCategories(root);
  const mobile=parseCategory(readFileSync(join(root,'src/lib/mobile-guides.ts'),'utf8'),'mobileCategory');
  const articles=JSON.parse(readFileSync(join(root,'generated/catalog.json'),'utf8')).filter(a=>a.status==='published'&&a.locale==='en');
  const count=id=>articles.filter(a=>a.category===id).length;
  return [
    entry('/','home.jpg',{eyebrow:'Help Center',title:'Cloud storage, file sharing and upload help',
      description:`${articles.length} step-by-step guides for the web, desktop and mobile apps, integrations and the API.`,
      url:'help.dosya.dev',meta:`${articles.length} guides`}),
    entry('/mobile','mobile.jpg',{eyebrow:'Help Center',title:mobile.title,description:mobile.summary,url:'help.dosya.dev/mobile',meta:'iPhone and Android'}),
    ...Object.entries(categories).map(([id,c])=>entry(`/${id}`,`${id}.jpg`,{eyebrow:'Help Center',title:c.title,description:c.summary,url:`help.dosya.dev/${id}`,meta:`${count(id)} guides`})),
    ...articles.map(a=>entry(`/${a.category}/${a.articleSlug}`,`${a.category}/${a.articleSlug}.jpg`,{
      eyebrow:categories[a.category]?.title??a.category,title:a.title,description:a.summary,
      url:`help.dosya.dev/${a.category}/${a.articleSlug}`,meta:reviewed(a.lastReviewed)})),
  ];
}
