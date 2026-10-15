import {expect,it} from 'vitest';
import {readFileSync} from 'node:fs';
import {categories} from '../src/lib/content';
import {mobileCategory} from '../src/lib/mobile-guides';

const html=(path:string)=>readFileSync(`dist${path}/index.html`,'utf8');

it('presents the help center as useful cloud storage, file sharing and file upload guidance',()=>{
  const home=html('');
  expect(home).toContain('<title>Cloud Storage, File Sharing &amp; Upload Help | Dosya Help</title>');
  expect(home).toContain('<h1>Cloud storage, file sharing and upload help</h1>');
  expect(home).toContain('href="/uploading">upload files and folders</a>');
  expect(home).toContain('href="/files">organize your cloud storage</a>');
  expect(home).toContain('href="/sharing">share files securely</a>');
  expect(home).toContain('href="https://dosya.dev/">Cloud storage</a>');
  expect(home).toContain('href="https://dosya.dev/resources/share-links/">Secure file sharing</a>');
  expect(home).toContain('href="https://dosya.dev/resources/transfer/">Large file transfer</a>');

  for(const [path,title,phrase] of [
    ['/uploading','File uploads and downloads','Upload files and folders to Dosya cloud storage'],
    ['/sharing','File sharing and file requests','Share files with secure links'],
    ['/files','Cloud storage and file management','Organize cloud storage'],
  ]){
    const page=html(path);
    expect(page).toContain(`<title>${title} | Dosya Help</title>`);
    expect(page).toContain(`<h1>${title}</h1>`);
    expect(page).toContain(phrase);
  }
});

it('publishes search and social metadata plus structured navigation for indexed pages',()=>{
  const home=html('');
  expect(home).toContain('<meta property="og:site_name" content="Dosya Help">');
  expect(home).toContain('<meta property="og:type" content="website">');
  expect(home).toMatch(/<meta property="og:image" content="https:\/\/help\.dosya\.dev\/og\/home\.jpg\?v=[0-9a-f]{10}">/);
  expect(home).toContain('<meta property="og:image:type" content="image/jpeg">');
  expect(home).toContain('<meta property="og:image:width" content="1200">');
  expect(home).toContain('<meta property="og:image:height" content="630">');
  expect(home).toContain('<meta property="og:image:alt" content="Cloud Storage, File Sharing &amp; Upload Help | Dosya Help">');
  expect(home).toContain('<meta name="twitter:card" content="summary_large_image">');
  expect(home).toMatch(/<meta name="twitter:image" content="https:\/\/help\.dosya\.dev\/og\/home\.jpg\?v=[0-9a-f]{10}">/);
  expect(home).toContain('"@type":"WebSite"');
  expect(home).toContain('"alternateName":["Dosya Help Center","help.dosya.dev"]');

  const category=html('/uploading');
  expect(category).toContain('"@type":"BreadcrumbList"');
  expect(category).toContain('"item":"https://help.dosya.dev/uploading"');

  const article=html('/uploading/large-files');
  expect(article).toContain('<meta property="og:type" content="article">');
  expect(article).toContain('<meta property="article:modified_time"');
  expect(article).toMatch(/"datePublished":"\d{4}-\d{2}-\d{2}"/);
  expect(article).toContain('"dateModified":');
  // Each guide shares its own image; paginated listings reuse their category's.
  expect(article).toMatch(/<meta property="og:image" content="https:\/\/help\.dosya\.dev\/og\/uploading\/large-files\.jpg\?v=[0-9a-f]{10}">/);
  expect(html('/uploading/page/2')).toMatch(/og\/uploading\.jpg\?v=/);
  expect(html('/search')).toMatch(/og\/home\.jpg\?v=/);
});

it('gives every first category and mobile page a focused introduction and featured guide links',()=>{
  for(const [id,category] of [...Object.entries(categories),['mobile',mobileCategory] as const]){
    const words=category.intro.trim().split(/\s+/).length;
    expect(words,id).toBeGreaterThanOrEqual(60);
    expect(words,id).toBeLessThanOrEqual(120);
    expect(category.featuredLinks.length,id).toBeGreaterThanOrEqual(3);
    expect(category.featuredLinks.length,id).toBeLessThanOrEqual(5);
    const page=html(`/${id}`);
    expect(page).toContain('class="category-intro"');
    expect(page).toContain(category.intro);
    for(const link of category.featuredLinks){
      expect(page,id).toContain(`href="${link.href}"`);
      expect(page,id).toContain(link.label);
    }
  }
  expect(html('/sharing/page/2')).not.toContain('class="category-intro"');
});

it('gives every sitemap URL an accurate last-modified date',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  expect(sitemap).toContain('<loc>https://help.dosya.dev/mobile</loc>');
  expect(sitemap).not.toMatch(/<loc>[^<]+\/page\/\d+<\/loc>/);
  const urls=[...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(match=>match[1]);
  expect(urls.length).toBeGreaterThan(700);
  for(const url of urls)expect(url).toMatch(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/);
});

it('gives every indexed page distinct search titles and descriptions',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const paths=[...sitemap.matchAll(/<loc>https:\/\/help\.dosya\.dev(.*?)<\/loc>/g)].map(match=>match[1]);
  const byTitle=new Map<string,string[]>();
  const byDescription=new Map<string,string[]>();
  for(const path of paths){
    const page=html(path==='/'?'':path);
    const title=page.match(/<title>(.*?)<\/title>/)?.[1]??'';
    const description=page.match(/<meta name="description" content="([^"]*)"/)?.[1]??'';
    byTitle.set(title,[...(byTitle.get(title)??[]),path]);
    byDescription.set(description,[...(byDescription.get(description)??[]),path]);
  }
  expect([...byTitle.entries()].filter(([,routes])=>routes.length>1)).toEqual([]);
  expect([...byDescription.entries()].filter(([,routes])=>routes.length>1)).toEqual([]);
});
