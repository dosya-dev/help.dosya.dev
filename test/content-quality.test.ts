import {describe,it,expect} from 'vitest';
import {mkdtempSync,mkdirSync,readFileSync,realpathSync,rmSync,writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {auditArticles,auditExitCode,categoryInboundArticleIds,parseRawArticle,proseSentences,TOP_TASK_TOTAL} from '../scripts/audit-content.mjs';

describe('help content quality audit',()=>{
  const catalog=JSON.parse(readFileSync('generated/content-quality-report.json','utf8'));

  it('keeps a stable, cross-product top-task review queue',()=>{
    expect(TOP_TASK_TOTAL).toBe(100);
    expect(catalog.priorityGuides).toHaveLength(100);
    expect(new Set(catalog.priorityGuides.map((guide:any)=>guide.articleId)).size).toBe(100);
    for(const category of ['uploading','sharing','files','account','workspaces','desktop','extension','integrations','developers','troubleshooting']){
      expect(catalog.priorityGuides.some((guide:any)=>guide.category===category),category).toBe(true);
    }
    for(const id of ['hc-upload-files','hc-create-link','hc-file-request','hc-desktop-sync-folder','hc-extension-connect']){
      expect(catalog.priorityGuides.some((guide:any)=>guide.articleId===id),id).toBe(true);
    }
  });

  it('reports thin copy, repeated templates and reused visuals as separate review signals',()=>{
    const fixture=[
      parseRawArticle('a.md',`---
{"articleId":"hc-a","locale":"en","revision":1,"title":"Upload files safely","summary":"Upload files safely with a controlled test, clear verification, limits, and recovery steps.","category":"uploading","articleSlug":"upload-files-safely","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed locally","related":[],"keywords":["upload"]}
---
This guide follows the current Dosya workflow and identifies the result you should see.

<figure class="help-screenshot"><img src="/screenshots/shared.webp" alt="A sufficiently detailed example screenshot" /></figure>`),
      parseRawArticle('b.md',`---
{"articleId":"hc-b","locale":"en","revision":1,"title":"Share files securely","summary":"A detailed guide to sharing files securely with named recipients.","category":"sharing","articleSlug":"share-files-securely","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed locally","related":[],"keywords":["share"]}
---
<figure class="help-screenshot"><img src="/screenshots/shared.webp" alt="A sufficiently detailed example screenshot" /></figure>`),
    ];
    const report=auditArticles(fixture,{priorityTotal:2,quotas:{uploading:1,sharing:1},today:'2026-10-14'});
    expect(report.summary.genericSummaries).toBe(1);
    expect(report.summary.genericBodies).toBe(1);
    expect(report.summary.guidesUnder400Words).toBe(2);
    expect(report.summary.uniqueScreenshotAssets).toBe(1);
    expect(report.priorityGuides[0].issues).toContain('generic-summary');
  });

  it('measures repeated prose after normalizing Markdown and preserves unique words',()=>{
    const repeated='Check the saved result before leaving this page.';
    const fixture=[
      parseRawArticle('a.md',article({id:'hc-a',title:'Upload a tax archive',slug:'upload-tax-archive',body:`Use the **saved result** only after review. ${repeated}\n\nThe checksum remains unique to this archive.`})),
      parseRawArticle('b.md',article({id:'hc-b',title:'Share a client folder',slug:'share-client-folder',category:'sharing',body:'Check the **saved result** before leaving this page.\n\nThe recipient list belongs to this share.'})),
    ];
    const report=auditArticles(fixture,{priorityTotal:2,quotas:{uploading:1,sharing:1},sharedSentenceThreshold:2,categoryInbound:new Set(['hc-a','hc-b'])});
    expect(report.sharedSentences).toEqual([expect.objectContaining({sentence:repeated,guides:2,words:8})]);
    expect(report.guides.find((guide:any)=>guide.articleId==='hc-a')).toMatchObject({
      uniqueWords:expect.any(Number),boilerplateRatio:expect.any(Number),
    });
    expect(report.guides.find((guide:any)=>guide.articleId==='hc-a').issues).toContain('shared-boilerplate');
    expect(report.summary.guidesWithSharedBoilerplate).toBe(2);
    expect(report.summary.medianBoilerplateRatio).toBeGreaterThan(0);
  });

  it('extracts visual copy separately from prose without markup, URLs, code or shared layout',()=>{
    const body=`<header>Shared navigation appears on every help guide.</header>
<main>
Read [the saved transfer status](https://example.test/transfer/result) before continuing.
<figure><a href="https://example.test/full-size.webp"><picture><source srcset="https://example.test/dark.webp" /><img src="https://example.test/light.webp" alt="The upload queue shows six completed transfers." /></picture></a><figcaption>Choose <strong>Resume</strong> to restart the paused transfer. Confirm the file appears in <a href="/files/recent">Recent files</a>.</figcaption></figure>
![The folder picker highlights the selected destination.](https://example.test/folder.webp)
<img alt='The recipient list shows Alex &amp; Morgan together.' src='/recipients.webp' />
Visit https://example.test/a.b?token=private for the current transfer status.
Read the saved status after running \`secret command has six hidden code words\`.
\`\`\`sh
Never count this repeated fenced code sentence.
\`\`\`
<pre><code>Never count this repeated HTML code sentence.</code></pre>
<!-- Never count this repeated HTML comment sentence. -->
<script>Never count this repeated script content sentence.</script>
<style>Never count this repeated style content sentence.</style>
</main>
<section class="shared-article-footer"><p>Use these shared checks when a task needs a second look.</p></section>
<footer>Shared footer content appears on every help guide.</footer>`;
    expect(proseSentences(body).map((item:any)=>item.sentence)).toEqual([
      'Read the saved transfer status before continuing.',
      'The upload queue shows six completed transfers.',
      'Choose Resume to restart the paused transfer.',
      'Confirm the file appears in Recent files.',
      'The folder picker highlights the selected destination.',
      'The recipient list shows Alex & Morgan together.',
      'Visit for the current transfer status.',
      'Read the saved status after running.',
    ]);
  });

  it('reports six published guides repeating a six-word sentence but permits five',()=>{
    const body='Check the saved result before leaving.\n\nOnly five words appear here.';
    const fixture=Array.from({length:6},(_,index)=>parseRawArticle(`${index}.md`,article({id:`hc-${index}`,title:`Transfer ${index}`,slug:`transfer-${index}`,body:index===5?'Check the **saved result** before leaving.\n\nOnly five words appear here.':body})));
    const five=auditArticles(fixture.slice(0,5));
    expect(five.sharedSentences).toEqual([]);
    expect(five.guides.every((guide:any)=>!guide.issues.includes('shared-boilerplate'))).toBe(true);
    const six=auditArticles(fixture);
    expect(six.sharedSentences).toEqual([expect.objectContaining({normalized:'check the saved result before leaving',words:6,guides:6})]);
    expect(six.summary.guidesWithSharedBoilerplate).toBe(6);
    const draft={...fixture[5],data:{...fixture[5].data,status:'draft'}};
    expect(auditArticles([...fixture.slice(0,5),draft]).sharedSentences).toEqual([]);
  });

  it('preserves indented multiline figures while excluding Markdown indented code',()=>{
    const body=`<figure class="help-screenshot">
  <a href="/screenshots/desktop-sync-advanced.webp">
    <img src="/screenshots/desktop-sync-advanced.webp" alt="The sync settings show the selected folder exclusions." width="1200" height="630" />
  </a>
  <figcaption>
    Review the excluded folders before starting the sync.
    <a href="/screenshots/desktop-sync-advanced.webp">Open full-size screenshot</a>.
  </figcaption>
</figure>

    Never count these indented Markdown code words.
    <img src="/code.webp" alt="Never count this image inside Markdown code." />
\tNever count this tab-indented Markdown code sentence.`;
    expect(proseSentences(body).map((item:any)=>item.sentence)).toEqual([
      'The sync settings show the selected folder exclusions.',
      'Review the excluded folders before starting the sync.',
    ]);
    const fixture=Array.from({length:6},(_,index)=>parseRawArticle(`${index}.md`,article({id:`hc-${index}`,title:`Task ${index}`,slug:`task-${index}`,body})));
    expect(auditArticles(fixture).sharedSentences).toEqual([
      expect.objectContaining({normalized:'review the excluded folders before starting the sync',guides:6}),
      expect.objectContaining({normalized:'the sync settings show the selected folder exclusions',guides:6}),
    ]);
  });

  it('attributes visual repetition to the existing category with the six-guide threshold',()=>{
    const fixture=Array.from({length:11},(_,index)=>parseRawArticle(`${index}.md`,article({
      id:`hc-${index}`,title:`Connection ${index}`,slug:`connection-${index}`,category:index<6?'integrations':'developers',
      body:'<figure><img src="/connection.webp" alt="The connection panel shows the saved endpoint." /><figcaption>Verify the saved endpoint before starting transfers.</figcaption></figure>\n\nVerify the saved endpoint before starting transfers.',
    })));
    const report=auditArticles(fixture);
    expect(report.sharedSentences).toHaveLength(2);
    expect(report.sharedSentences.every((sentence:any)=>sentence.guides===11)).toBe(true);
    expect(report.categorySharedSentences).toEqual([
      expect.objectContaining({category:'integrations',normalized:'the connection panel shows the saved endpoint',guides:6,articleIds:['hc-0','hc-1','hc-2','hc-3','hc-4','hc-5']}),
      expect.objectContaining({category:'integrations',normalized:'verify the saved endpoint before starting transfers',guides:6}),
    ]);
    expect(report.summary.categorySharedSentences).toBe(2);
    expect(report.thresholds.categorySharedSentenceGuides).toBe(6);
  });

  it('reports median body words and the strict under-300 boundary as diagnostics',()=>{
    const fixture=[299,300,301].map((length,index)=>parseRawArticle(`${index}.md`,article({id:`hc-${index}`,title:`Task ${index}`,slug:`task-${index}`,body:Array(length).fill(['alpha','bravo','charlie'][index]).join(' ')})));
    const report=auditArticles(fixture);
    expect(report.summary.medianBodyWords).toBe(300);
    expect(report.summary.guidesUnder300Words).toBe(1);
    expect(report.guides.every((guide:any)=>!guide.issues.some((issue:string)=>/^under-\d+-words$/.test(issue)))).toBe(true);
    expect(auditArticles(fixture.slice(0,2)).summary.medianBodyWords).toBe(299.5);
    expect(auditArticles([]).summary).toMatchObject({medianBodyWords:0,guidesUnder300Words:0});
  });

  it('fails the default repetition gate while diagnostic mode still permits reporting',()=>{
    const fixture=Array.from({length:6},(_,index)=>parseRawArticle(`${index}.md`,article({id:`hc-${index}`,title:`Task ${index}`,slug:`task-${index}`,body:'Check the saved result before leaving.'})));
    expect(auditExitCode(auditArticles(fixture))).toBe(1);
    expect(auditExitCode(auditArticles(fixture),{diagnostic:true})).toBe(0);
    expect(auditExitCode(auditArticles(fixture.slice(0,5)))).toBe(0);
    // The category gate remains independently enforced if a global report is filtered.
    expect(auditExitCode({sharedSentences:[],categorySharedSentences:[{category:'uploading',guides:6}]})).toBe(1);
  });

  it('writes CLI reports before failing and limits the bypass to explicit diagnostic mode',()=>{
    const directory=realpathSync(mkdtempSync(path.join(tmpdir(),'help-audit-')));
    try{
      for(const name of ['scripts','src/data','src/content/articles','generated'])mkdirSync(path.join(directory,name),{recursive:true});
      const script=path.join(directory,'scripts/audit-content.mjs');
      writeFileSync(script,readFileSync('scripts/audit-content.mjs'));
      writeFileSync(path.join(directory,'src/data/category-featured-links.json'),'{}');
      for(let index=0;index<6;index++)writeFileSync(path.join(directory,`src/content/articles/${index}.md`),article({id:`hc-${index}`,title:`Task ${index}`,slug:`task-${index}`,body:'Check the saved result before leaving.'}));
      const run=(...args:string[])=>spawnSync(process.execPath,[script,...args],{encoding:'utf8'});
      expect(run().status).toBe(1);
      const report=JSON.parse(readFileSync(path.join(directory,'generated/content-quality-report.json'),'utf8'));
      expect(report.sharedSentences).toEqual([expect.objectContaining({guides:6,normalized:'check the saved result before leaving'})]);
      expect(run('--diagnostic','--output','generated/diagnostic.json').status).toBe(0);
      expect(JSON.parse(readFileSync(path.join(directory,'generated/diagnostic.json'),'utf8')).sharedSentences).toEqual(report.sharedSentences);
      rmSync(path.join(directory,'src/content/articles/5.md'));
      expect(run().status).toBe(0);
    }finally{rmSync(directory,{recursive:true,force:true});}
  });

  it('separates generic numbered steps from steps with real labels and values',()=>{
    const fixture=[parseRawArticle('steps.md',article({id:'hc-steps',title:'Upload a tax archive',slug:'upload-tax-archive',body:`## Steps\n\n1. Select the current account and check its identifying details.\n2. Click **Upload files** and choose \`tax-return.zip\`.\n3. Open Settings > Uploads and read the **Completed** status.`}))];
    const report=auditArticles(fixture,{priorityTotal:1,quotas:{uploading:1},sharedSentenceThreshold:20,categoryInbound:new Set(['hc-steps'])});
    const guide=report.guides[0];
    expect(guide.genericSteps).toEqual(['Select the current account and check its identifying details.']);
    expect(guide.issues).toContain('generic-step');
  });

  it('reports duplicate metadata, length problems, generic keywords and link graph gaps',()=>{
    const sharedSummary='Connect a WebDAV client to compatible cloud storage, test the mounted folder, and confirm that uploads and downloads work correctly.';
    const fixture=[
      parseRawArticle('a.md',article({id:'hc-a',title:'Connect WebDAV to Dosya',slug:'connect-webdav',category:'integrations',summary:sharedSummary,body:'Read [the WebDAV setup guide](/integrations/webdav-client) and [the download reference](/developers/api-download-file).'})),
      parseRawArticle('b.md',article({id:'hc-b',title:'Connect WebDAV with Dosya',slug:'webdav-client',category:'integrations',summary:sharedSummary,body:'A task-specific explanation without internal links.',keywords:['Dosya help']})),
      parseRawArticle('c.md',article({id:'hc-c',title:'A title that is deliberately longer than sixty characters for this audit check',slug:'api-upload-file',category:'developers',summary:'Too short.',body:'Another task-specific explanation without a link.'})),
    ];
    const report=auditArticles(fixture,{priorityTotal:3,quotas:{integrations:2,developers:1},sharedSentenceThreshold:20,categoryInbound:new Set(['hc-a'])});
    expect(report.summary.nearDuplicateTitleGroups).toBe(1);
    expect(report.summary.duplicateSummaryGroups).toBe(1);
    expect(report.summary.titlesOver60Characters).toBe(1);
    expect(report.summary.summariesOutsideRange).toBe(1);
    expect(report.summary.genericKeywordGuides).toBe(1);
    expect(report.summary.guidesWithFewerThan2InternalLinks).toBe(2);
    expect(report.summary.orphanGuides).toBe(1);
    expect(report.guides.find((guide:any)=>guide.articleId==='hc-a')).toMatchObject({inTextInternalLinks:2,inboundLinks:1});
    expect(report.guides.find((guide:any)=>guide.articleId==='hc-b')).toMatchObject({inTextInternalLinks:0,inboundLinks:1});
    expect(report.guides.find((guide:any)=>guide.articleId==='hc-c').issues).toEqual(expect.arrayContaining(['title-over-60','summary-outside-120-160','orphan']));
  });

  it('credits only guides linked from configured first-page category features',()=>{
    const fixture=[
      parseRawArticle('a.md',article({id:'hc-a',title:'Upload a tax archive',slug:'upload-tax-archive',body:'A task-specific explanation without internal links.'})),
      parseRawArticle('b.md',article({id:'hc-b',title:'Share a client folder',slug:'share-client-folder',category:'sharing',body:'Another task-specific explanation without internal links.'})),
    ];
    const categoryInbound=categoryInboundArticleIds(fixture,{uploading:[{href:'/uploading/upload-tax-archive',label:'Upload a tax archive'}]});
    const report=auditArticles(fixture,{priorityTotal:2,quotas:{uploading:1,sharing:1},categoryInbound});
    expect(report.guides.find((guide:any)=>guide.articleId==='hc-a')).toMatchObject({inboundLinks:1});
    expect(report.guides.find((guide:any)=>guide.articleId==='hc-b')).toMatchObject({inboundLinks:0,issues:expect.arrayContaining(['orphan'])});
  });
});

function article({id,title,slug,body,category='uploading',summary='Complete this specific Dosya task using the named controls, verify the resulting state, and resolve the most common failure without exposing private information.',keywords=['specific task']}:{id:string;title:string;slug:string;body:string;category?:string;summary?:string;keywords?:string[]}){
  return `---\n${JSON.stringify({articleId:id,locale:'en',revision:1,title,summary,category,articleSlug:slug,status:'published',lastReviewed:'2026-10-14',verification:'Reviewed against source code.',related:[],keywords})}\n---\n${body}`;
}
