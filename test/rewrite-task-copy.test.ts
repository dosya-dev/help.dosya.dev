import {describe,it,expect} from 'vitest';
import {rewriteArticle} from '../scripts/rewrite-task-copy.mjs';
import {normalizeSentence} from '../scripts/audit-content.mjs';

const repeated='Open the Dosya desktop app and confirm the active account and workspace.';
const body=`## Steps: pause a sync pair

1. ${repeated}
2. Locate the selected sync pair and verify its name or identifying details.
3. Pause the selected pair without deleting its files.
4. Confirm that the pair no longer transfers files.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sync.webp" data-light-href="/screenshots/sync.webp" data-dark-href="/screenshots/sync-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sync-dark.webp" type="image/webp" /><img src="/screenshots/sync.webp" alt="Four-step interface map for pause a sync pair, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/sync.webp" data-light-href="/screenshots/sync.webp" data-dark-href="/screenshots/sync-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Keep the local file until the cloud copy is verified.

\`\`\`text
${repeated}
\`\`\`
`;
const metadata={articleId:'hc-pause-sync',title:'Pause a sync pair',category:'desktop',articleSlug:'pause-sync',status:'published',revision:3,lastReviewed:'2026-10-12',verification:'apps/desktop/src/sync.ts'};
const raw=`---\n${JSON.stringify(metadata,null,2)}\n---\n${body}`;
const violations=new Set([normalizeSentence(repeated)]);

describe('task-specific visual and repeated copy migration',()=>{
  it('describes the actual action and final state in workflow caption and alt',()=>{
    const result=rewriteArticle(raw,violations);
    expect(result.raw).toContain('Pause the selected pair without deleting its files');
    expect(result.raw).toContain('the pair no longer transfers files');
    expect(result.raw).not.toContain('confirm the context, complete the documented action');
    expect(result.raw).not.toContain('from opening the correct control');
    expect(result.raw).not.toContain('Interface map: follow the task');
    expect(result.visualChanges).toBe(2);
  });
  it('preserves exact image links, theme markup and image attributes',()=>{
    const result=rewriteArticle(raw,violations);
    const protectedMarkup=(value:string)=>value.match(/(?:href|src|srcset|data-light-href|data-dark-href|width|height|loading|decoding|media|type|class|data-theme-source)="[^"]*"/g);
    expect(protectedMarkup(result.raw)).toEqual(protectedMarkup(raw));
    expect(result.raw).toContain('<picture class="workflow-map">');
    expect(result.raw).toContain('Open full-size screenshot</a>.');
  });
  it('rewrites repeated prose with the concrete target and preserves code and task copy',()=>{
    const result=rewriteArticle(raw,violations);
    expect(result.raw).toContain('Open the Dosya desktop app');
    expect(result.raw).toContain('selected sync pair');
    expect(result.raw).not.toContain(`1. ${repeated}`);
    expect(result.raw).toContain(`\`\`\`text\n${repeated}\n\`\`\``);
    expect(result.raw).toContain('Keep the local file until the cloud copy is verified.');
  });
  it('bumps changed revisions once and retains source evidence',()=>{
    const result=rewriteArticle(raw,violations);
    expect(JSON.parse(result.raw.match(/^---\n([\s\S]*?)\n---/)![1])).toMatchObject({revision:4,lastReviewed:'2026-10-14'});
    expect(result.raw).toContain('apps/desktop/src/sync.ts');
    expect(result.raw).toContain('apps/help/scripts/rewrite-task-copy.mjs');
    expect(rewriteArticle(result.raw,violations).raw).toBe(result.raw);
    expect(rewriteArticle(result.raw,violations).changed).toBe(false);
  });
  it('leaves specific captions, alt text and unchanged revision untouched',()=>{
    const specific=raw.replace(/<figure[\s\S]*?<\/figure>/,'<figure><img src="/screenshots/pair.webp" alt="The selected sync pair is paused." /><figcaption>The pause control stops this pair while its local files remain.</figcaption></figure>').replace(`1. ${repeated}`,'1. Select the pair named Client photos.');
    expect(rewriteArticle(specific,new Set()).raw).toBe(specific);
  });
  it('rewrites duplicated nonworkflow visual copy without claiming an absent control',()=>{
    const specific=raw.replace(/<figure[\s\S]*?<\/figure>/,'<figure><img src="/screenshots/desktop-overview.webp" alt="Dosya desktop overview with navigation and sync status." /><figcaption>Record the current version and sync state before updating, restarting, or uninstalling. <a href="/screenshots/desktop-overview.webp">Open full-size screenshot</a>.</figcaption></figure>');
    const keys=new Set([normalizeSentence('Dosya desktop overview with navigation and sync status.'),normalizeSentence('Record the current version and sync state before updating, restarting, or uninstalling.')]);
    const result=rewriteArticle(specific,keys);
    expect(result.raw).toContain('navigation and sync status');
    expect(result.raw).toContain('Pause the selected pair');
    expect(result.visualChanges).toBe(2);
  });
  it('rewrites prose after a bold troubleshooting label and retains the label',()=>{
    const advice='Return to the Dosya desktop app, confirm the active workspace, and check that your role and client version support the action.';
    const result=rewriteArticle(raw+`\n**The expected control is missing.** ${advice}\n`,new Set([normalizeSentence(advice)]));
    expect(result.raw).toContain('**The expected control is missing.**');
    expect(result.raw).not.toContain(advice);
    expect(result.raw).toContain('selected sync pair');
  });
  it('keeps a specific Interface map caption rather than treating its prefix as generic',()=>{
    const specific=raw.replace(/<figure[\s\S]*?<\/figure>/,'<figure><img src="/screenshots/backup.webp" alt="Backup settings with Wi-Fi only and Only while charging." /><figcaption>Interface map: automatic backup depends on the selected network and power rules; iPhone adds Upload while locked.</figcaption></figure>');
    expect(rewriteArticle(specific,new Set()).raw).toBe(specific);
  });
  it('describes only pictured restrictions while keeping credential advice outside the figure',()=>{
    const visual='<figure><img src="/screenshots/api-key-restrictions.webp" alt="Credential restriction controls showing permitted protocol and scope." /><figcaption>Use a restricted credential for this technical client.</figcaption></figure>';
    const fixture=`---\n${JSON.stringify({...metadata,title:'Connect an MCP client'})}\n---\n## Steps\n\n1. Open the MCP instructions.\n2. Create a dedicated limited connection.\n3. Enter the documented server address.\n4. Authorize one workspace.\n5. Read one harmless test file.\n6. Disconnect the grant after testing.\n\n${visual}\n`;
    const result=rewriteArticle(fixture,new Set([normalizeSentence('Credential restriction controls showing permitted protocol and scope.'),normalizeSentence('Use a restricted credential for this technical client.')]));
    const figure=result.raw.match(/<figure[\s\S]*?<\/figure>/)![0];
    expect(figure).toContain('permitted protocol and scope');
    expect(figure).not.toContain('dedicated limited connection');
    expect(figure).not.toContain('documented server address');
    expect(result.raw).toContain('**Safety note.**');
    expect(result.raw).toContain('use a restricted credential for this technical client.');
  });
  it('does not turn installation advice into a prerequisite for disconnecting WordPress',()=>{
    const fixture=raw.replace('Pause a sync pair','Disconnect a WordPress site safely').replace(/<figure[\s\S]*?<\/figure>/,'<figure><img src="/screenshots/wordpress.webp" alt="WordPress integration overview for connected sites and backups." /><figcaption>Install the plug-in only from the official Dosya download and connect it through wp-admin.</figcaption></figure>');
    const result=rewriteArticle(fixture,new Set([normalizeSentence('WordPress integration overview for connected sites and backups.'),normalizeSentence('Install the plug-in only from the official Dosya download and connect it through wp-admin.')]));
    expect(result.raw).not.toContain('install the plug-in');
    expect(result.raw).not.toContain('Install the plug-in');
    const figure=result.raw.match(/<figure[\s\S]*?<\/figure>/)![0];
    expect(figure).toContain('connected sites and backups');
    expect(figure).not.toContain('Pause the selected pair');
  });
  it('does not append the existing main action to repeated body checks',()=>{
    const repeatedChecks='The main checks are the active workspace, folder path and target item.';
    const result=rewriteArticle(raw+`\n${repeatedChecks}\n`,new Set([normalizeSentence(repeatedChecks)]));
    const rewrittenChecks=result.raw.split('\n').find((line:string)=>/workspace.*folder path/.test(line))!;
    expect(rewrittenChecks).toContain('selected sync pair');
    expect(rewrittenChecks).not.toContain('Pause the selected pair');
    expect(rewrittenChecks).not.toContain('pause the selected pair');
    expect(rewrittenChecks.split(' ').length).toBeLessThan(20);
  });
  it('keeps related anchors about the destination rather than relabeling them as this task',()=>{
    const fixture=raw+'\n- [Creating and managing an API key](/developers/api-key)\n';
    const result=rewriteArticle(fixture,new Set([normalizeSentence('Creating and managing an API key')]));
    expect(result.raw).toContain('[API key management](/developers/api-key)');
    expect(result.raw).not.toContain('API key: pause a sync pair');
  });
  it('cuts subsequent action clauses out of the control used for contextual checks',()=>{
    const fixture=raw.replace('Pause the selected pair without deleting its files.','Enter the endpoint and restricted credential, then list the permitted folder.');
    const result=rewriteArticle(fixture,violations);
    const first=result.raw.split('\n').find((line:string)=>line.startsWith('1.'))!;
    expect(first).toContain('selected sync pair');
    expect(first).not.toContain('then list');
  });
  it('uses the selected object for a negative action instead of instructing the user to use a blocked address',()=>{
    const fixture=raw.replace('Pause the selected pair without deleting its files.','Replace private addresses with a public HTTPS source.');
    const result=rewriteArticle(fixture,violations);
    const first=result.raw.split('\n').find((line:string)=>line.startsWith('1.'))!;
    expect(first).toContain('selected sync pair');
    expect(first).not.toContain('private addresses');
  });
  it('corrects the pictured subject for a marketing overview with an inaccurate inherited alt',()=>{
    const subject='Desktop navigation with a Details control and sync status.';
    const fixture=raw.replace(/<figure[\s\S]*?<\/figure>/,`<figure><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="${subject}" /><figcaption>Record the current version and sync state before updating, restarting, or uninstalling.</figcaption></figure>`);
    const keys=new Set([normalizeSentence(subject),normalizeSentence('Record the current version and sync state before updating, restarting, or uninstalling.')]);
    const result=rewriteArticle(fixture,keys);
    expect(result.raw).toContain('Dosya desktop app overview page');
    expect(result.raw).not.toContain('Details control');
    expect(result.raw).not.toContain('Record the current version');
  });
  it('does not add duplicate-cleanup or store-install advice to unrelated map controls',()=>{
    for(const advice of ['Confirm the active workspace and test destructive duplicate cleanup with disposable copies.','Use the current official store listing for the device platform.']){
      const fixture=raw.replace('Pause a sync pair','Filter the desktop photo map').replace(/<figure[\s\S]*?<\/figure>/,`<figure><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop overview." /><figcaption>${advice}</figcaption></figure>`);
      const result=rewriteArticle(fixture,new Set([normalizeSentence('Dosya desktop overview.'),normalizeSentence(advice)]));
      expect(result.raw).not.toContain('destructive duplicate cleanup');
      expect(result.raw).not.toContain('official store listing');
    }
  });
  it('compares the saved browser artifact rather than treating a missing confirmation as a file',()=>{
    const comparison='Open the saved result in Dosya and compare it with the selected page, screenshot, or file.';
    const fixture=raw.replace('"articleSlug": "pause-sync"','"articleSlug": "extension-save-confirmation-missing"')+`\n${comparison}\n`;
    const result=rewriteArticle(fixture,new Set([normalizeSentence(comparison)]));
    expect(result.raw).toContain('Compare the first saved browser item in Dosya with the original browser content.');
    expect(result.raw).not.toContain('Compare the saved selected sync pair');
  });
  it('compares an archive file rather than the archive preparation state',()=>{
    const comparison='Compare the uploaded item’s name, size, and destination with the source before removing any local copy.';
    const fixture=raw.replace('"articleSlug": "pause-sync"','"articleSlug": "download-archive-preparation"')+`\n${comparison}\n`;
    const result=rewriteArticle(fixture,new Set([normalizeSentence(comparison)]));
    expect(result.raw).toContain('Compare the prepared folder or selection archive with its source by name, size and destination');
  });
  it.each([
    ['sftp-resume-transfer','incomplete large test transfer','Reconnect and choose the client resume option instead of overwrite when appropriate.'],
    ['s3-download-object','known test object','Copy it to an empty local path and compare size or checksum.'],
    ['webdav-rename-move','disposable remote file and destination folder','Rename the file, move it once, and refresh both folders.'],
    ['s3-fix-signature-time-error','authentication error that cites request time or signature validity','Synchronize the client system clock, recreate the request without reusing an expired signature, and retry one list operation.'],
    ['wordpress-plugin-install','downloaded dosya-backup.zip','In wp-admin open Plugins > Add New > Upload Plugin, select the zip, install, and activate it.'],
    ['mobile-activity-open','Activity screen for the active workspace','Open Activity and let the newest permitted events load.'],
    ['lightroom-publish-network-failure','photos left under New or Modified Photos to Publish','Restore connectivity and publish the remaining photos again without removing completed items.'],
  ])('uses the selected target, never the action fragment, for %s',(slug,target,action)=>{
    const advice='Return to the Dosya desktop app, confirm the active workspace, and check that your role and client version support the action.';
    const fixture=`---\n${JSON.stringify({...metadata,articleSlug:slug})}\n---\n## Before you start\n\n- Open the Dosya desktop app in the current released client.\n- Confirm the active account and workspace, then identify ${target}.\n\n## Steps\n\n1. ${repeated}\n2. Locate ${target} and verify its name or identifying details.\n3. ${action}\n4. Confirm that the result is saved.\n\n**The expected control is missing.** ${advice}\n`;
    const result=rewriteArticle(fixture,new Set([normalizeSentence(repeated),normalizeSentence('Open the Dosya desktop app in the current released client.'),normalizeSentence(advice)]));
    const clauses=result.raw.split('\n').filter((line:string)=>/^(?:- Open |1\.|\*\*The expected)/.test(line)).join('\n');
    expect(clauses).toContain(target);
    expect(clauses).not.toContain(action.replace(/\.$/,''));
    expect(clauses).not.toMatch(/(?:locate|reviewing|access) (?:and|it |wp-admin open|Activity and|connectivity and)/);
    expect(clauses).not.toContain('move it once');
    expect(clauses).not.toContain('recreate the request');
    expect(clauses).not.toContain('publish the remaining photos');
  });
  it('fails instead of inferring an object from an unsupported action-style second step',()=>{
    const fixture=raw.replace('Locate the selected sync pair and verify its name or identifying details.','Reconnect and choose the resume option.');
    expect(()=>rewriteArticle(fixture,violations)).toThrow('explicit selected target');
  });
  it.each([
    ['connect-cloud-account','Select Connect account.','the Connect account control'],
    ['import-progress','Open the import progress card or indicator for the active workspace.','the import progress card for the active workspace'],
  ])('uses a reviewed literal control exception for %s',(slug,second,target)=>{
    const fixture=raw.replace('"articleSlug": "pause-sync"',`"articleSlug": "${slug}"`).replace('Locate the selected sync pair and verify its name or identifying details.',second);
    expect(rewriteArticle(fixture,violations).raw.split('\n').find((line:string)=>line.startsWith('1.'))).toContain(target);
  });
  it.each([
    ['lightroom-review-connections','Your Lightroom connections table','the “Your Lightroom connections” table'],
    ['wordpress-copy-detected-warning','site row marked Copy detected, check the site','the site row marked “Copy detected, check the site”'],
  ])('quotes reviewed UI labels instead of exposing their text as an instruction for %s',(slug,target,expected)=>{
    const fixture=raw.replace('"articleSlug": "pause-sync"',`"articleSlug": "${slug}"`).replace('Locate the selected sync pair and verify its name or identifying details.',`Locate ${target} and verify its name or identifying details.`);
    expect(rewriteArticle(fixture,violations).raw.split('\n').find((line:string)=>line.startsWith('1.'))).toContain(expected);
  });
});
