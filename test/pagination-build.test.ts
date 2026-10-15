import {it,expect} from 'vitest';
import {cpSync,mkdirSync,mkdtempSync,readFileSync,rmSync,symlinkSync,writeFileSync,existsSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {dirname,join,resolve} from 'node:path';
import {createRequire} from 'node:module';
import {spawnSync} from 'node:child_process';
import {inMonorepo} from './monorepo';

it.skipIf(!inMonorepo)('builds crawlable category pages without repeats, self-canonical URLs and capped home previews',()=>{
  // Shadow build: synthetic content never touches the working content/catalog.
  const fixture=mkdtempSync(join(tmpdir(),'dosya-help-pagination-'));
  const app=join(fixture,'apps/help'),repo=resolve('../..');
  try{
    mkdirSync(app,{recursive:true});
    for(const file of ['src','public','astro.config.mjs','package.json'])cpSync(file,join(app,file),{recursive:true});
    const config=join(app,'astro.config.mjs');
    writeFileSync(config,readFileSync(config,'utf8').replace("output:'static'","cacheDir:'./.cache', output:'static'"));
    for(const file of ['src/styles','src/components/BrandMark.astro']){
      mkdirSync(dirname(join(fixture,file)),{recursive:true});
      cpSync(join(repo,file),join(fixture,file),{recursive:true});
    }
    symlinkSync(join(repo,'node_modules'),join(fixture,'node_modules'),'dir');
    const content=join(app,'src/content/articles');rmSync(content,{recursive:true});mkdirSync(content);
    for(let i=1;i<=24;i++){
      const id=String(i).padStart(2,'0');
      const data={articleId:`hc-fixture-${id}`,locale:'en',revision:1,title:`TEST FIXTURE guide ${id}`,
        summary:'Synthetic pagination fixture, not a real published product guide.',category:'sharing',
        articleSlug:`fixture-${id}`,status:i===24?'draft':'published',lastReviewed:'2026-10-09',
        verification:'Synthetic test fixture only.',related:[],keywords:['fixture']};
      writeFileSync(join(content,`fixture-${id}.md`),`---\n${JSON.stringify(data)}\n---\nSynthetic fixture only.\n\n## Steps\nTest fixture.\n`);
    }
    const packagePath=createRequire(import.meta.url).resolve('astro/package.json');
    const astro=join(dirname(packagePath),JSON.parse(readFileSync(packagePath,'utf8')).bin.astro);
    const build=spawnSync(process.execPath,[astro,'build'],{cwd:app,encoding:'utf8',env:{...process.env,PUBLIC_HELP_API_URL:''},timeout:30000});
    expect(build.status,build.stdout+build.stderr).toBe(0);
    const output=join(app,'dist');
    expect(existsSync(join(output,'sharing/page/2/index.html'))).toBe(true);
    const first=readFileSync(join(output,'sharing/index.html'),'utf8');
    const second=readFileSync(join(output,'sharing/page/2/index.html'),'utf8');
    const last=readFileSync(join(output,'sharing/page/3/index.html'),'utf8');
    expect(first).toContain('href="/sharing/page/2"');
    expect(second).toContain('href="https://help.dosya.dev/sharing/page/2"');
    expect(second).toContain('href="/sharing"');
    expect(second).toContain('href="/sharing/fixture-11"');
    expect(second).not.toContain('href="/sharing/fixture-01"');
    expect(last).toContain('Showing 21–23 of 23 guides');
    expect(last).not.toContain('href="/sharing/fixture-24"');
    expect(existsSync(join(output,'sharing/page/1/index.html'))).toBe(false);
    expect(existsSync(join(output,'sharing/page/4/index.html'))).toBe(false);
    const home=readFileSync(join(output,'index.html'),'utf8');
    expect((home.match(/class="article-list-link"/g)??[]).length).toBe(3);
    expect(home).toContain('View all 23 guides');
    const sitemap=readFileSync(join(output,'sitemap.xml'),'utf8');
    expect(sitemap).not.toContain('https://help.dosya.dev/sharing/page/2');
    expect(sitemap).toContain('https://help.dosya.dev/sharing');
    expect(sitemap).not.toContain('fixture-24');
  }finally{rmSync(fixture,{recursive:true,force:true});}
},40000);
