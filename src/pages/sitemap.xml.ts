import {getCollection} from 'astro:content';
import {articlePath,categories} from '../lib/content';
import {isMobileGuide} from '../lib/mobile-guides';
export async function GET(){const articles=(await getCollection('articles')).filter(a=>a.data.status==='published');
  const latest=(dates:string[])=>dates.reduce((most,date)=>date>most?date:most,'');
  const categoryRoots=Object.keys(categories).flatMap(categoryId=>{
    const guides=articles.filter(article=>article.data.category===categoryId);
    return guides.length?[{path:`/${categoryId}`,lastmod:latest(guides.map(article=>article.data.lastReviewed))}]:[];
  });
  const mobileGuides=articles.filter(isMobileGuide);
  const entries=[
    {path:'/',lastmod:latest(articles.map(a=>a.data.lastReviewed))},
    ...categoryRoots,
    ...(mobileGuides.length?[{path:'/mobile',lastmod:latest(mobileGuides.map(article=>article.data.lastReviewed))}]:[]),
    ...articles.map(a=>({path:articlePath(a.data),lastmod:a.data.lastReviewed})),
  ];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.map(({path,lastmod})=>`<url><loc>https://help.dosya.dev${path}</loc><lastmod>${lastmod}</lastmod></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}});
}
