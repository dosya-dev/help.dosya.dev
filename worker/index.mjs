// Share images live in R2 (uploaded by scripts/og-images.mjs), not in the static assets.
// A missing guide image falls back to the home image so a shared link never shows a broken preview.
const OG_KEY=/^og\/[a-z0-9-]+(?:\/[a-z0-9-]+)*\.jpg$/;
async function ogImage(url,request,env){
  const key=url.pathname.slice(1);
  if(!OG_KEY.test(key)||!['GET','HEAD'].includes(request.method)||!env.OG)return null;
  const object=await env.OG.get(key)??await env.OG.get('og/home.jpg');
  if(!object)return null;
  const headers=new Headers({'Content-Type':'image/jpeg','ETag':object.httpEtag,'X-Content-Type-Options':'nosniff',
    // ?v= changes with the image content, so a versioned URL can be cached for a week.
    'Cache-Control':url.searchParams.has('v')?'public, max-age=604800':'public, max-age=3600'});
  return new Response(request.method==='HEAD'?null:object.body,{headers});
}

export default {async fetch(request,env){
  const url=new URL(request.url);
  if(url.pathname.length>1&&url.pathname.endsWith('/')){url.pathname=url.pathname.replace(/\/+$/,'');return Response.redirect(url.href,301);}
  if(url.pathname.startsWith('/og/')){const image=await ogImage(url,request,env);if(image)return image;}
  const response=await env.ASSETS.fetch(request);
  const out=new Response(response.body,response);out.headers.set('X-Content-Type-Options','nosniff');
  out.headers.set('Referrer-Policy','strict-origin-when-cross-origin');
  if(url.pathname==='/search'||response.status===404)out.headers.set('X-Robots-Tag','noindex, follow');
  return out;
}};
