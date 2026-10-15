import {readFile,readdir,mkdir,writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {auditArticles,normalizeSentence,parseRawArticle} from './audit-content.mjs';

const app=fileURLToPath(new URL('..',import.meta.url));
const reviewDate='2026-10-14';
const evidence='Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.';
const plain=value=>String(value).replace(/\[([^\]]+)\]\([^)]*\)/g,'$1').replace(/<[^>]*>/g,'').replace(/[*_`]/g,'').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const unpunctuate=value=>plain(value).replace(/[.!?]+$/,'');
const lower=value=>value.charAt(0).toLowerCase()+value.slice(1);
const escape=value=>value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const genericVisual=value=>/^(?:Interface map: (?:confirm the account|follow the task)|Workflow map for .+: confirm the context|Four-step (?:interface|workflow) map for)/i.test(plain(value));
// These reused assets are overview/marketing pages or a specific UI sample.
// Their subject must not be inferred from the task on the surrounding page.
const picturedSubjects=new Map([
  ['desktop-app-overview-2026-10-13.webp','Dosya desktop app overview page'],
  ['wordpress-integration-overview-2026-10-13.webp','Dosya WordPress plug-in overview page'],
  ['mobile-app-overview-2026-10-13.webp','Dosya mobile app overview page with iPhone and Android availability cards'],
  ['lightroom-integration-overview-2026-10-13.webp','Lightroom Classic integration title card with a camera aperture illustration'],
  ['developer-api-overview-2026-10-13.webp','Dosya REST API overview page with Get API Key and View SDKs links'],
  ['developer-cli-overview-2026-10-13.webp','Dosya CLI overview page'],
  ['developer-rclone-overview-2026-10-13.webp','Dosya rclone overview page'],
  ['developer-s3-overview-2026-10-13.webp','Dosya S3-compatible access overview page'],
  ['developer-sftp-overview-2026-10-13.webp','Dosya SFTP access overview page'],
  ['developer-webdav-overview-2026-10-13.webp','Dosya WebDAV overview page'],
  ['zapier-integration-overview-2026-10-13.webp','Dosya Zapier integration overview page'],
  ['n8n-integration-overview-2026-10-13.webp','Dosya n8n integration overview page'],
  ['remote-downloads-overview-2026-10-13.webp','Dosya Remote Downloads overview page'],
  ['vault-overview-2026-10-13.webp','Dosya Vault overview page'],
  ['file-request-overview-2026-10-13.webp','Dosya file requests overview page'],
  ['share-links-overview-2026-10-13.webp','Dosya share links overview page'],
  ['api-key-restrictions-2026-10-10.webp','New API key dialog with Protocols, Workspace and expiration controls'],
  ['preview-supported-image-2026-10-12.webp','Campaign overview PNG open in the image viewer with its Details panel'],
  ['app-choice-mobile-availability-2026-10-12.webp','Dosya mobile availability page with iPhone and Android download cards'],
  ['zapier-setup-2026-10-10.webp','Integrations > Zapier setup page with API-key guidance and the Zapier invite button'],
]);
const taskArtifacts=new Map([
  ['extension-capture-visible-page','the visible-page capture'],
  ['extension-confirm-workspace','the browser item in the confirmed workspace'],
  ['extension-destination-missing','the browser item in the recovered destination'],
  ['extension-edit-save-name','the renamed browser item'],
  ['extension-page-permission-denied','the permitted page capture'],
  ['extension-popup-not-opening','the item saved from the extension popup'],
  ['extension-save-confirmation-missing','the first saved browser item'],
  ['extension-save-page-image','the selected webpage image'],
  ['extension-session-expired','the item saved after reconnecting'],
  ['extension-verify-saved-item','the saved browser item'],
  ['download-archive-preparation','the prepared folder or selection archive'],
  ['download-choose-method','the downloaded file or archive'],
  ['download-retry-prepared-archive','the newly prepared archive'],
  ['download-verify-file','the downloaded file'],
  ['upload-estimate-storage','the selected upload file'],
  ['upload-prepare-file-names','the renamed upload file'],
  ['upload-preserve-folder-structure','the uploaded folder tree'],
  ['upload-record-failure-details','the failed transfer file'],
  ['upload-retry-one-item','the retried file'],
  ['upload-test-one-file','the test file'],
]);
// Reviewed exceptions for guides whose second step is not the standard
// selected-object wrapper. These are literal controls in those source guides.
const reviewedTargets=new Map([
  ['connect-cloud-account','the Connect account control'],
  ['import-progress','the import progress card for the active workspace'],
  // Labels verified in apps/web/src/pages/integrations/lightroom.tsx and
  // apps/web/src/pages/integrations/wordpress.tsx respectively.
  ['lightroom-review-connections','the “Your Lightroom connections” table'],
  ['wordpress-copy-detected-warning','the site row marked “Copy detected, check the site”'],
]);
function context(data,body){
  const section=body.match(/^## Steps[^\n]*\n([\s\S]*?)(?=^## |$(?![\s\S]))/m)?.[1]??body;
  let steps=[...section.matchAll(/^\s*\d+\.\s+(.+)$/gm)].map(match=>unpunctuate(match[1]));
  if(!steps.length)steps=[...body.matchAll(/^\s*\d+\.\s+(.+)$/gm)].map(match=>unpunctuate(match[1]));
  const main=body.match(/The main action is to (.*?); the decisive check is/i)?.[1];
  const action=steps.length===4?steps[2]:steps.length>=6?steps[2]:main??steps.find(step=>!/^(?:Open|Locate|Confirm)\b/.test(step));
  const outcome=steps.at(-1)?.replace(/^Confirm that\s+/i,'')??body.match(/^The controlled workflow completes and (.+)\.$/m)?.[1];
  // Read the object already selected by the guide. Never manufacture a noun
  // phrase from its main action: a verb's remainder can be another mutation.
  let target=reviewedTargets.get(data.articleSlug)??body.match(/^[-*]\s+[^\n]*\bthen identify (.+)\.\s*$/m)?.[1]
    ??steps[1]?.match(/^(?:Locate|Select|Choose|Find)\s+(.+?) and (?:verify|check) its name or identifying details$/i)?.[1];
  if(target&&!/^(?:the|a|an|your|this|that|these|those|one|several|some|any|each|every|both|\d+)\b/i.test(target))target=`the ${target}`;
  if(!action)throw Error(`${data.articleId}: no task action available for contextual rewriting`);
  return {title:unpunctuate(data.title),action:unpunctuate(action),outcome:unpunctuate(outcome??action),target:target?unpunctuate(target):null,artifact:taskArtifacts.get(data.articleSlug),steps};
}
function applicableAdvice(copy,title){
  if(/^Install the plug-in only from the official Dosya download/i.test(copy))return /\b(?:install|connect|reconnect|update)\b/i.test(title);
  if(/^Record the current version and sync state before updating/i.test(copy))return /\b(?:update|updates|restart|restarting|uninstall|install|version|launch)\b/i.test(title);
  if(/^Use the current official store listing/i.test(copy))return /\b(?:install|download|update|version)\b/i.test(title);
  if(/^Confirm the active workspace and test destructive duplicate cleanup/i.test(copy))return /\b(?:cleanup|clean|delete)\b/i.test(title);
  if(/^Keep Lightroom open, preserve the exact error/i.test(copy))return /\b(?:publish|gallery)\b/i.test(title);
  return true;
}
function contextualSentence(sentence,ctx){
  const text=unpunctuate(sentence);
  const target=ctx.target,focus=ctx.target,artifact=ctx.artifact??target;
  if(!target&&/^(?:Open .+ and confirm|Open .+ in the current|Return to |The main checks|Start with one harmless|Keep the browser profile|Check the active browser profile|Open the saved result|Keep the source file|Compare the uploaded item|Record the failed item|Use a narrowly scoped|Use a small local|Use a non-confidential mobile|Record the current state)/i.test(text))throw Error(`${ctx.title}: repeated prose needs an explicit selected target; add a reviewed exception instead of inferring from an action`);
  const open=text.match(/^Open (.+?) and confirm the active (account and workspace|workspace)$/i);
  if(open)return `Confirm the ${open[2]} in ${open[1]} when reviewing ${focus}.`;
  const before=text.match(/^Open (.+?) in the current released (?:Dosya )?client$/i);
  if(before)return `Open ${before[1]} and locate ${focus}.`;
  if(/^Return to .+, confirm the active workspace/i.test(text))return `If the required control is missing for ${focus}, check the active workspace, your role and the client version.`;
  if(/^The main checks are the active workspace, folder path/i.test(text))return `Check the workspace, folder path and identity of ${target}.`;
  if(/^The main checks are the active workspace, local path/i.test(text))return `Check the workspace, local path and sync state associated with ${target}.`;
  if(/^The main checks are the credential scope/i.test(text))return `Check credential scope and endpoint access for ${focus}.`;
  if(/^The main checks are the mobile account/i.test(text))return `Check mobile account, workspace and device permissions for ${focus}.`;
  if(/^The main checks are the signed-in account/i.test(text))return `Check the signed-in account and the displayed state of ${focus}.`;
  if(/^Start with one harmless item and compare/i.test(text))return `Test ${target} with disposable data and compare source and destination after refreshing.`;
  if(/^Keep the browser profile,/i.test(text))return `For ${artifact}, keep the browser profile, account, site permission and destination folder visible.`;
  if(/^Check the active browser profile,/i.test(text))return `If ${artifact} is missing or incorrect, check the browser profile, site permission, extension session and destination error.`;
  if(/^Open the saved result in Dosya/i.test(text))return `Compare ${artifact} in Dosya with the original browser content.`;
  if(/^Keep the source file, destination folder/i.test(text))return `Track ${artifact} with its destination, available storage and transfer state.`;
  if(/^Compare the uploaded item/i.test(text))return `Compare ${artifact} with its source by name, size and destination before removing a local copy.`;
  if(/^Record the failed item and its exact transfer message/i.test(text))return `Record the exact transfer error for ${artifact} before retrying; check size, quota and destination.`;
  if(/^Use a narrowly scoped test credential/i.test(text))return `Use a limited test credential for ${focus}; redact secrets from commands, logs and screenshots.`;
  if(/^Use a small local test and distinguish/i.test(text))return `Use ${target} to distinguish device files from cloud files before a broader change.`;
  if(/^Use a non-confidential mobile test/i.test(text))return `Try ${target} with non-confidential data and verify its cloud copy in Files before removing device data.`;
  if(/^Record the current state first/i.test(text))return `Record the state of ${target} first; redact recovery, payment and identity secrets from screenshots.`;
  // Safety notes retain their actual advice without repeating the task action
  // or turning unrelated advice into a new prerequisite.
  return `For “${ctx.title}”, ${lower(text)}.`;
}
const relatedLabels=new Map([
  ['/developers/api-key','API key management'],
  ['/desktop/sync-folder','Desktop sync setup'],
  ['/desktop/desktop-sync-folder','Desktop sync setup'],
  ['/sharing/file-request','File requests'],
  ['/files/file-request','File requests'],
  ['/files/navigate-web-app','Web app navigation'],
  ['/files/navigation','Web app navigation'],
]);

export function rewriteArticle(raw,repeated=new Set(),visualRepeated=repeated){
  const parsed=parseRawArticle('article.md',raw),{data}=parsed;
  if(data.status!=='published')return {raw,changed:false,visualChanges:0,proseChanges:0};
  let body=parsed.body,visualChanges=0,proseChanges=0,ctx;
  const getContext=()=>ctx??=context(data,parsed.body);
  // Figures are transformed as complete regions. Only their accessible copy
  // changes; links, sources, attributes and approved light/dark assets stay exact.
  body=body.replace(/<figure\b[\s\S]*?<\/figure>/gi,figure=>{
    const workflow=/workflow-map|help-workflow/.test(figure)||genericVisual(figure.match(/\balt="([^"]*)"/)?.[1]??'');
    const asset=figure.match(/<img\b[^>]*\bsrc="\/screenshots\/([^"]*)"/)?.[1];
    const subject=picturedSubjects.get(asset)??unpunctuate(figure.match(/\balt="([^"]*)"/)?.[1]??'Reference screenshot');
    let safety='';
    figure=figure.replace(/(<img\b[^>]*\balt=")([^"]*)(")/gi,(all,before,value,after)=>{
      if(!genericVisual(value)&&!visualRepeated.has(normalizeSentence(value)))return all;
      const c=getContext();
      const next=workflow?`Workflow for “${c.title}”: ${lower(c.action)}; ${lower(c.outcome)}.`:`Reference for “${c.title}”: ${subject}.`;
      visualChanges++;return `${before}${escape(next)}${after}`;
    });
    figure=figure.replace(/(<figcaption\b[^>]*>)([\s\S]*?)(<\/figcaption>)/gi,(all,open,value,close)=>{
      const linkAt=value.search(/<a\b/i),copy=(linkAt<0?value:value.slice(0,linkAt)).trim();
      if(!genericVisual(copy)&&!visualRepeated.has(normalizeSentence(copy)))return all;
      const c=getContext();
      const next=workflow?`Workflow for “${c.title}”: ${lower(c.action)}; ${lower(c.outcome)}.`:`Reference for “${c.title}”: ${subject}.`;
      if(!workflow&&applicableAdvice(copy,c.title))safety=`\n\n**Safety note.** ${copy}`;
      visualChanges++;return `${open}${escape(next)}${linkAt<0?'':` ${value.slice(linkAt)}`}${close}`;
    });
    return figure+safety;
  });
  // Protect images and code before examining body lines. Audit segmentation
  // is reused, so rewritten exact sentences have the same normalization.
  const regions=[];
  body=body.replace(/<figure\b[\s\S]*?<\/figure>|```[\s\S]*?```|~~~[\s\S]*?~~~/gi,region=>{const token=`@@DOSYA_COPY_REGION_${regions.length}@@`;regions.push(region);return token;});
  body=body.split('\n').map(line=>{
    if(!line.trim()||line.includes('@@DOSYA_COPY_REGION_'))return line;
    const lead=line.match(/^(\s*(?:#{1,6}|[-+*]|\d+\.)\s+)/)?.[1]??'';
    let copy=line.slice(lead.length);
    // Related link labels count as visible sentences too. Change only labels,
    // retain exact paths and explain their relationship to this task.
    copy=copy.replace(/\[([^\]]+)\](\([^)]*\))/g,(all,label,href)=>{
      if(!repeated.has(normalizeSentence(label)))return all;
      const destination=href.slice(1,-1).replace(/^https:\/\/help\.dosya\.dev/,'').split('#')[0];
      const next=relatedLabels.get(destination)??({
        'Creating and managing an API key':'API key management',
        'Setting up a desktop sync folder':'Desktop sync setup',
        'Receiving files with a file request':'File requests',
        'Finding your way around the web app':'Web app navigation',
      })[plain(label)];
      if(!next)throw Error(`No destination-specific label for ${destination}: ${label}`);
      proseChanges++;return `[${next}]${href}`;
    });
    const sentences=(copy.match(/[\s\S]+?(?:[.!?][*_]*(?=\s|$)|$)/g)??[copy]).map(sentence=>sentence.trim());
    return lead+sentences.map(sentence=>{
      if(!repeated.has(normalizeSentence(sentence)))return sentence;
      proseChanges++;return contextualSentence(sentence,getContext());
    }).join(' ');
  }).join('\n');
  for(let i=0;i<regions.length;i++)body=body.replace(`@@DOSYA_COPY_REGION_${i}@@`,regions[i]);
  if(body===parsed.body)return {raw,changed:false,visualChanges:0,proseChanges:0};
  body=body.replace(/\n+$/,'\n');
  const nextData={...data,revision:data.revision+1,lastReviewed:reviewDate,verification:[data.verification,evidence].filter(Boolean).join(' ')};
  return {raw:`---\n${JSON.stringify(nextData,null,2)}\n---\n${body}`,changed:true,visualChanges,proseChanges,fromRevision:data.revision,toRevision:nextData.revision};
}

export async function runRewrite({apply=false}={}){
  const directory=path.join(app,'src/content/articles'),files=(await readdir(directory)).filter(file=>file.endsWith('.md')).sort();
  const input=await Promise.all(files.map(async file=>({file,raw:await readFile(path.join(directory,file),'utf8')})));
  const before=auditArticles(input.map(({file,raw})=>parseRawArticle(file,raw)));
  const repeated=new Set(before.sharedSentences.map(item=>item.normalized));
  const visualUse=new Map();
  for(const {raw} of input){
    const seen=new Set();
    for(const figure of raw.match(/<figure\b[\s\S]*?<\/figure>/gi)??[]){
      const alt=figure.match(/\balt="([^"]*)"/)?.[1];
      const caption=figure.match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/i)?.[1]?.replace(/<a\b[\s\S]*/i,'').trim();
      for(const value of [alt,caption].filter(Boolean))seen.add(normalizeSentence(value));
    }
    for(const value of seen)visualUse.set(value,(visualUse.get(value)??0)+1);
  }
  const visualRepeated=new Set([...visualUse].filter(([,count])=>count>1).map(([value])=>value));
  const changes=[],output=[];
  for(const {file,raw} of input){
    const result=rewriteArticle(raw,repeated,visualRepeated),parsed=parseRawArticle(file,raw);
    output.push(parseRawArticle(file,result.raw));
    if(!result.changed)continue;
    changes.push({file,articleId:parsed.data.articleId,fromRevision:result.fromRevision,toRevision:result.toRevision,visualChanges:result.visualChanges,proseChanges:result.proseChanges});
  }
  const after=auditArticles(output);
  if(after.sharedSentences.length||after.categorySharedSentences.length)throw Error(`Rewrite leaves ${after.sharedSentences.length} global and ${after.categorySharedSentences.length} category repetition groups. Inspect in dry run before applying.`);
  // Validate the entire catalog before writing any article. A bad recipe must
  // fail safely without a partial migration or an extra revision on retries.
  if(apply)for(const change of changes){
    const original=input.find(item=>item.file===change.file);
    const rewritten=output.find(item=>item.filename===change.file);
    const history=path.join(app,'content-history',`${change.articleId}.en.r${change.fromRevision}.md`);
    if(!existsSync(history))await writeFile(history,original.raw);
    await writeFile(path.join(directory,change.file),`---\n${JSON.stringify(rewritten.data,null,2)}\n---\n${rewritten.body}`);
  }
  const report={mode:apply?'apply':'dry-run',reviewDate,changedGuides:changes.length,visualChanges:changes.reduce((n,c)=>n+c.visualChanges,0),proseChanges:changes.reduce((n,c)=>n+c.proseChanges,0),before:before.summary,after:after.summary,changes};
  await mkdir(path.join(app,'generated'),{recursive:true});
  if(changes.length||!existsSync(path.join(app,'generated/task-copy-rewrite-report.json')))await writeFile(path.join(app,'generated/task-copy-rewrite-report.json'),JSON.stringify(report,null,2)+'\n');
  console.log(`${apply?'Applied':'Dry run'} task copy: ${changes.length} guides, ${report.visualChanges} visual changes, ${report.proseChanges} prose changes; ${after.sharedSentences.length} repetition groups.`);
  return report;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))await runRewrite({apply:process.argv.includes('--apply')});
