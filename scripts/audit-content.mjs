import {readFile,readdir,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const app=fileURLToPath(new URL('..',import.meta.url));
const categoryFeaturedLinks=JSON.parse(await readFile(path.join(app,'src/data/category-featured-links.json'),'utf8'));

export const SENTENCE_MIN_WORDS=6;
export const SHARED_SENTENCE_THRESHOLD=6;
export const TITLE_MAX_CHARACTERS=60;
export const SUMMARY_MIN_CHARACTERS=120;
export const SUMMARY_MAX_CHARACTERS=160;
export const NEAR_DUPLICATE_TITLE_THRESHOLD=.8;
export const NEAR_DUPLICATE_SUMMARY_THRESHOLD=.88;

export const TOP_TASK_QUOTAS={
  uploading:12,sharing:15,files:17,account:10,workspaces:8,
  desktop:10,extension:5,integrations:10,developers:8,troubleshooting:5,
};
export const TOP_TASK_TOTAL=Object.values(TOP_TASK_QUOTAS).reduce((sum,n)=>sum+n,0);

const FOUNDATION_IDS=new Set([
  'hc-upload-files','hc-large-upload','hc-upload-states','hc-cancel-upload','hc-download-files','hc-storage-usage',
  'hc-upload-resume-after-network','hc-upload-recover-after-refresh','hc-upload-destination-locked',
  'hc-create-link','hc-folder-link','hc-file-request','hc-request-upload','hc-request-manage','hc-unavailable-link',
  'hc-share-change-password','hc-share-disable-downloads','hc-organize-files','hc-move-rename','hc-search-files',
  'hc-preview-files','hc-restore-deleted','hc-permanent-delete','hc-create-account','hc-profile-settings',
  'hc-password-reset','hc-two-factor','hc-sessions','hc-account-deletion','hc-workspace-create',
  'hc-workspace-invite-links','hc-workspace-roles','hc-workspace-folder-access','hc-desktop-install',
  'hc-desktop-sync-folder','hc-desktop-sync-issues','hc-desktop-sync-control','hc-extension-connect',
  'hc-extension-save','hc-extension-permissions','hc-import-google-drive','hc-import-onedrive','hc-import-dropbox',
  'hc-zapier-connect','hc-webdav-connect','hc-api-key','hc-rest-api-quickstart','hc-cli-install',
  'hc-contact-support','hc-failed-upload','hc-slow-transfer',
]);
const HIGH_INTENT=['upload','download','share','file request','storage','sync','backup','restore','delete','password','security','account','workspace','invite','install','connect','import','search','recover','troubleshoot'];
const GENERIC_SUMMARY='with a controlled test, clear verification, limits, and recovery steps.';
const GENERIC_BODY='This guide follows the current Dosya workflow and identifies the result you should see.';
const DUPLICATE_STOP_WORDS=new Set(['a','an','and','dosya','for','from','help','in','of','on','or','the','to','with']);
const GENERIC_STEP_WORDS=new Set(['account','current','details','item','name','result','select','check','choose','confirm','open','page','screen','view','use','correct','expected']);
const SPECIFIC_TECH_TERMS=/\b(?:api|cli|webdav|sftp|s3|rclone|zapier|n8n|mcp|wordpress|lightroom|webhook|oauth|json|csv|pdf|zip|archive|workspace|folder|file|upload|download|share|link|password|token|key|permission|role|invoice|billing|vault|backup|sync|extension)\b/i;

function stripMarkdown(value){
  return String(value)
    .replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g,' ')
    // Figure children are HTML indentation, not Markdown indented code.
    .replace(/<figure\b[\s\S]*?<\/figure\s*>|^(?: {4}|\t).+$/gmi,block=>
      /^<figure\b/i.test(block)?block.replace(/^[ \t]+/gm,''):' ')
    .replace(/(`+)[\s\S]*?\1/g,' ')
    .replace(/<!--[\s\S]*?-->/g,' ')
    .replace(/<(script|style|pre|code|head|header|nav|footer)\b[^>]*>[\s\S]*?<\/\1\s*>/gi,'\n')
    .replace(/<section\b[^>]*class=["'][^"']*\bshared-article-footer\b[^"']*["'][^>]*>[\s\S]*?<\/section\s*>/gi,'\n')
    .replace(/<img\b[^>]*>/gi,tag=>{
      const alt=tag.match(/\balt\s*=\s*(?:"([^"]*)"|'([^']*)')/i);
      return `\n${alt?.[1]??alt?.[2]??''}\n`;
    })
    .replace(/!\[([^\]]*)\]\([^)]*\)/g,'\n$1\n')
    .replace(/\[([^\]]+)\]\([^)]*\)/g,' $1 ')
    .replace(/<\/(?:p|li|h[1-6]|div|figure|figcaption)\s*>|<(?:figure|figcaption|br|hr)\b[^>]*>/gi,'\n')
    .replace(/<[^>]+>/g,' ')
    .replace(/\b(?:https?|ftp):\/\/[^\s<>"']+/gi,url=>/[.!?]$/.test(url)?url.at(-1):' ')
    .replace(/^\s{0,3}(?:#{1,6}|>|[-+*]|\d+\.)\s+/gm,'')
    .replace(/[*_~`]/g,'')
    .replace(/&(?:nbsp|amp|lt|gt|quot|apos|#\d+|#x[\da-f]+);/gi,entity=>{
      const name=entity.slice(1,-1).toLowerCase();
      if(name.startsWith('#')){
        const code=Number.parseInt(name.slice(name[1]==='x'?2:1),name[1]==='x'?16:10);
        return code<=0x10ffff?String.fromCodePoint(code):' ';
      }
      return {nbsp:' ',amp:'&',lt:'<',gt:'>',quot:'"',apos:"'"}[name];
    });
}
function words(value){return stripMarkdown(value).toLowerCase().match(/[a-z0-9]+(?:['-][a-z0-9]+)*/g)??[];}
function countWords(value){return words(value).length;}
export function normalizeSentence(value){return stripMarkdown(value).toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,' ').trim();}
const normalized=normalizeSentence;
function displaySentence(value){
  return stripMarkdown(value).replace(/\s+/g,' ').replace(/\s+([.,!?;:])/g,'$1').trim();
}
export function proseSentences(body){
  const segments=stripMarkdown(body).split(/(?<=[.!?])\s+|\n+/u);
  return segments.map(raw=>({raw,sentence:displaySentence(raw),normalized:normalized(raw),words:countWords(raw)}))
    .filter(item=>item.normalized&&item.words>=SENTENCE_MIN_WORDS);
}
function screenshots(body){return [...body.matchAll(/(?:src=["']|!\[[^\]]*\]\()([^)"']+\.(?:png|jpe?g|webp|gif|svg))/gi)].map(match=>match[1]);}
function internalLinks(body){
  const found=[];
  for(const match of body.matchAll(/\[[^\]]+\]\((https:\/\/help\.dosya\.dev)?(\/[a-z-]+\/[a-z0-9-]+)(?:#[^)]+)?\)/g))found.push(match[2]);
  for(const match of body.matchAll(/<a\b[^>]*href=["'](https:\/\/help\.dosya\.dev)?(\/[a-z-]+\/[a-z0-9-]+)(?:#[^"']+)?["'][^>]*>/gi))found.push(match[2]);
  return [...new Set(found)];
}
function duplicateTokens(value){return new Set(words(value).filter(word=>!DUPLICATE_STOP_WORDS.has(word)));}
function similarity(a,b){
  const left=duplicateTokens(a),right=duplicateTokens(b);if(!left.size&&!right.size)return 1;
  let common=0;for(const token of left)if(right.has(token))common++;
  return common/(left.size+right.size-common);
}
function duplicateGroups(articles,field,{near=false,threshold=1}={}){
  const parent=articles.map((_,index)=>index);
  const find=index=>parent[index]===index?index:(parent[index]=find(parent[index]));
  const join=(a,b)=>{a=find(a);b=find(b);if(a!==b)parent[b]=a;};
  for(let i=0;i<articles.length;i++)for(let j=i+1;j<articles.length;j++){
    const a=articles[i].data[field],b=articles[j].data[field];
    const same=normalized(a)===normalized(b);
    if(near?(!same&&similarity(a,b)>=threshold):same)join(i,j);
  }
  const groups=new Map();
  for(let i=0;i<articles.length;i++){const key=find(i);groups.set(key,[...(groups.get(key)??[]),articles[i].data.articleId]);}
  return [...groups.values()].filter(group=>group.length>1);
}
function genericSteps(article){
  const taskTokens=new Set([...words(article.data.title),...(article.data.keywords??[]).flatMap(words)].filter(word=>word.length>3&&!GENERIC_STEP_WORDS.has(word)));
  return [...article.body.matchAll(/^\s*\d+\.\s+(.+)$/gm)].map(match=>match[1].trim()).filter(step=>{
    if(/\*\*|`|["“”]|\s>\s|\b[A-Z][A-Za-z]+\s>\s/.test(step))return false;
    if(SPECIFIC_TECH_TERMS.test(step)&&words(step).some(word=>taskTokens.has(word)))return false;
    return !words(step).some(word=>taskTokens.has(word));
  }).map(displaySentence);
}
function median(values){if(!values.length)return 0;const sorted=[...values].sort((a,b)=>a-b),middle=Math.floor(sorted.length/2);return sorted.length%2?sorted[middle]:(sorted[middle-1]+sorted[middle])/2;}
function rounded(value){return Number(value.toFixed(4));}

export function parseRawArticle(filename,raw){
  const match=raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if(!match)throw Error(`Missing JSON frontmatter: ${filename}`);
  const data=JSON.parse(match[1]);
  return {filename,data,body:match[2],wordCount:countWords(match[2]),screenshots:screenshots(match[2])};
}
function taskScore(article){
  const haystack=`${article.data.title} ${article.data.articleSlug} ${article.data.keywords?.join(' ')??''}`.toLowerCase();
  let score=FOUNDATION_IDS.has(article.data.articleId)?100:0;
  for(const term of HIGH_INTENT)if(haystack.includes(term))score+=8;
  return score;
}

export function categoryInboundArticleIds(articles,featuredLinks=categoryFeaturedLinks){
  const routes=new Map(articles.filter(article=>article.data.status==='published').map(article=>[`/${article.data.category}/${article.data.articleSlug}`,article.data.articleId]));
  return new Set(Object.values(featuredLinks).flat().map(link=>routes.get(link.href)).filter(Boolean));
}

export function auditArticles(input,options={}){
  const articles=input.filter(article=>article.data.status==='published');
  const quotas=options.quotas??TOP_TASK_QUOTAS;
  const priorityTotal=options.priorityTotal??Object.values(quotas).reduce((sum,n)=>sum+n,0);
  const sharedThreshold=options.sharedSentenceThreshold??SHARED_SENTENCE_THRESHOLD;
  const categoryInbound=options.categoryInbound??categoryInboundArticleIds(articles);
  const imageUse=new Map();
  for(const article of articles)for(const image of new Set(article.screenshots))imageUse.set(image,(imageUse.get(image)??0)+1);

  const sentenceUse=new Map();
  const articleSentences=new Map();
  for(const article of articles){
    const sentences=proseSentences(article.body);articleSentences.set(article.data.articleId,sentences);
    const seen=new Set();
    for(const sentence of sentences){
      if(seen.has(sentence.normalized))continue;seen.add(sentence.normalized);
      const entry=sentenceUse.get(sentence.normalized)??{sentence:sentence.sentence,words:sentence.words,articleIds:new Set(),categories:new Map()};
      entry.articleIds.add(article.data.articleId);
      const categoryIds=entry.categories.get(article.data.category)??new Set();
      categoryIds.add(article.data.articleId);entry.categories.set(article.data.category,categoryIds);
      sentenceUse.set(sentence.normalized,entry);
    }
  }
  const sharedKeys=new Set([...sentenceUse].filter(([,entry])=>entry.articleIds.size>=sharedThreshold).map(([key])=>key));
  const sharedSentences=[...sharedKeys].map(key=>{const entry=sentenceUse.get(key);return {sentence:entry.sentence,normalized:key,words:entry.words,guides:entry.articleIds.size,articleIds:[...entry.articleIds].sort()};})
    .sort((a,b)=>b.guides-a.guides||a.sentence.localeCompare(b.sentence,'en'));
  const categorySharedSentences=[...sentenceUse].flatMap(([key,entry])=>[...entry.categories]
    .filter(([,ids])=>ids.size>=sharedThreshold)
    .map(([category,ids])=>({category,sentence:entry.sentence,normalized:key,words:entry.words,guides:ids.size,articleIds:[...ids].sort()})))
    .sort((a,b)=>a.category.localeCompare(b.category,'en')||b.guides-a.guides||a.sentence.localeCompare(b.sentence,'en'));

  const exactTitleGroups=duplicateGroups(articles,'title');
  const nearTitleGroups=duplicateGroups(articles,'title',{near:true,threshold:NEAR_DUPLICATE_TITLE_THRESHOLD});
  const exactSummaryGroups=duplicateGroups(articles,'summary');
  const nearSummaryGroups=duplicateGroups(articles,'summary',{near:true,threshold:NEAR_DUPLICATE_SUMMARY_THRESHOLD});
  const issueIds=(groups)=>new Set(groups.flat());
  const duplicateTitleIds=new Set([...issueIds(exactTitleGroups),...issueIds(nearTitleGroups)]);
  const duplicateSummaryIds=new Set([...issueIds(exactSummaryGroups),...issueIds(nearSummaryGroups)]);
  const routes=new Map(articles.map(article=>[`/${article.data.category}/${article.data.articleSlug}`,article.data.articleId]));
  const inbound=new Map(articles.map(article=>[article.data.articleId,categoryInbound.has(article.data.articleId)?1:0]));
  const linksByArticle=new Map();
  for(const article of articles){
    const links=internalLinks(article.body);linksByArticle.set(article.data.articleId,links);
    for(const link of links){const target=routes.get(link);if(target&&target!==article.data.articleId)inbound.set(target,(inbound.get(target)??0)+1);}
  }

  const guides=articles.map(article=>{
    const sentences=articleSentences.get(article.data.articleId)??[];
    const totalWords=article.wordCount;
    const boilerplateWords=sentences.filter(item=>sharedKeys.has(item.normalized)).reduce((sum,item)=>sum+item.words,0);
    const uniqueWordSet=new Set(sentences.filter(item=>!sharedKeys.has(item.normalized)).flatMap(item=>words(item.sentence)));
    const steps=genericSteps(article);
    const linkCount=linksByArticle.get(article.data.articleId)?.length??0;
    const inboundLinks=inbound.get(article.data.articleId)??0;
    const issues=[];
    if(article.data.summary.toLowerCase().includes(GENERIC_SUMMARY))issues.push('generic-summary');
    if(article.body.includes(GENERIC_BODY))issues.push('generic-body');
    if(!article.screenshots.length)issues.push('missing-screenshot');
    else if(article.screenshots.every(image=>(imageUse.get(image)??0)>10))issues.push('highly-reused-visual');
    if(boilerplateWords)issues.push('shared-boilerplate');
    if(steps.length)issues.push('generic-step');
    if(duplicateTitleIds.has(article.data.articleId))issues.push('duplicate-title');
    if(duplicateSummaryIds.has(article.data.articleId))issues.push('duplicate-summary');
    if(article.data.title.length>TITLE_MAX_CHARACTERS)issues.push('title-over-60');
    if(article.data.summary.length<SUMMARY_MIN_CHARACTERS||article.data.summary.length>SUMMARY_MAX_CHARACTERS)issues.push('summary-outside-120-160');
    if(article.data.keywords?.some(keyword=>normalized(keyword)==='dosya help'))issues.push('generic-keywords');
    if(linkCount<2)issues.push('fewer-than-2-internal-links');
    if(inboundLinks===0)issues.push('orphan');
    return {articleId:article.data.articleId,title:article.data.title,category:article.data.category,path:`/${article.data.category}/${article.data.articleSlug}`,wordCount:article.wordCount,screenshots:article.screenshots.length,uniqueWords:uniqueWordSet.size,boilerplateRatio:rounded(totalWords?boilerplateWords/totalWords:0),genericSteps:steps,inTextInternalLinks:linkCount,inboundLinks,issues};
  });

  const byId=new Map(guides.map(guide=>[guide.articleId,guide]));
  const selected=[];
  for(const [category,quota] of Object.entries(quotas))selected.push(...articles.filter(article=>article.data.category===category).sort((a,b)=>taskScore(b)-taskScore(a)||a.data.title.localeCompare(b.data.title,'en')).slice(0,quota));
  if(selected.length<priorityTotal){const chosen=new Set(selected.map(article=>article.data.articleId));selected.push(...articles.filter(article=>!chosen.has(article.data.articleId)).sort((a,b)=>taskScore(b)-taskScore(a)).slice(0,priorityTotal-selected.length));}
  const priorityGuides=selected.slice(0,priorityTotal).map(article=>byId.get(article.data.articleId));
  const allIssues=guides.flatMap(guide=>guide.issues);
  const uniqueAssets=new Set(articles.flatMap(article=>article.screenshots));
  const ratios=guides.map(guide=>guide.boilerplateRatio);
  return {
    summary:{
      publishedGuides:articles.length,priorityGuides:priorityGuides.length,
      medianBodyWords:median(guides.map(guide=>guide.wordCount)),guidesUnder300Words:guides.filter(guide=>guide.wordCount<300).length,
      guidesUnder400Words:guides.filter(guide=>guide.wordCount<400).length,
      genericSummaries:guides.filter(guide=>guide.issues.includes('generic-summary')).length,
      genericBodies:guides.filter(guide=>guide.issues.includes('generic-body')).length,
      screenshotReferences:articles.reduce((sum,article)=>sum+article.screenshots.length,0),uniqueScreenshotAssets:uniqueAssets.size,
      priorityGuidesNeedingReview:priorityGuides.filter(guide=>guide.issues.length).length,
      sharedSentences:sharedSentences.length,guidesWithSharedBoilerplate:guides.filter(guide=>guide.issues.includes('shared-boilerplate')).length,
      categorySharedSentences:categorySharedSentences.length,
      medianBoilerplateRatio:rounded(median(ratios)),maximumBoilerplateRatio:rounded(Math.max(0,...ratios)),
      genericSteps:guides.reduce((sum,guide)=>sum+guide.genericSteps.length,0),guidesWithGenericSteps:guides.filter(guide=>guide.genericSteps.length).length,
      duplicateTitleGroups:exactTitleGroups.length,nearDuplicateTitleGroups:nearTitleGroups.length,
      duplicateSummaryGroups:exactSummaryGroups.length,nearDuplicateSummaryGroups:nearSummaryGroups.length,
      titlesOver60Characters:guides.filter(guide=>guide.issues.includes('title-over-60')).length,
      summariesOutsideRange:guides.filter(guide=>guide.issues.includes('summary-outside-120-160')).length,
      genericKeywordGuides:guides.filter(guide=>guide.issues.includes('generic-keywords')).length,
      guidesWithFewerThan2InternalLinks:guides.filter(guide=>guide.issues.includes('fewer-than-2-internal-links')).length,
      orphanGuides:guides.filter(guide=>guide.issues.includes('orphan')).length,
      openSignals:Object.fromEntries([...new Set(allIssues)].sort().map(issue=>[issue,allIssues.filter(value=>value===issue).length])),
    },
    thresholds:{sentenceMinimumWords:SENTENCE_MIN_WORDS,sharedSentenceGuides:sharedThreshold,categorySharedSentenceGuides:sharedThreshold,titleMaximumCharacters:TITLE_MAX_CHARACTERS,summaryMinimumCharacters:SUMMARY_MIN_CHARACTERS,summaryMaximumCharacters:SUMMARY_MAX_CHARACTERS,nearDuplicateTitle:NEAR_DUPLICATE_TITLE_THRESHOLD,nearDuplicateSummary:NEAR_DUPLICATE_SUMMARY_THRESHOLD},
    duplicateGroups:{titles:exactTitleGroups,nearTitles:nearTitleGroups,summaries:exactSummaryGroups,nearSummaries:nearSummaryGroups},
    sharedSentences,categorySharedSentences,guides,
    qualityTargets:{taskSpecificVisual:'Use a screenshot of the exact control or result; shared overview images are context only.',troubleshooting:'Name the observed state, likely causes, safe checks, and the expected recovery result.',reviewCadence:'Review priority guides after product changes and inspect questions, poor feedback, and support themes weekly.'},
    priorityGuides,
  };
}

export function auditExitCode(report,{diagnostic=false}={}){
  return !diagnostic&&(report.sharedSentences.length||report.categorySharedSentences.length)?1:0;
}

export async function runAudit(outputPath){
  const directory=path.join(app,'src/content/articles'),articles=[];
  for(const filename of (await readdir(directory)).filter(name=>name.endsWith('.md')).sort())articles.push(parseRawArticle(filename,await readFile(path.join(directory,filename),'utf8')));
  const report=auditArticles(articles);
  const destination=outputPath?path.resolve(app,outputPath):path.join(app,'generated/content-quality-report.json');
  await writeFile(destination,JSON.stringify(report,null,2)+'\n');
  console.log(`Help quality: ${report.summary.sharedSentences} shared sentences across ${report.summary.guidesWithSharedBoilerplate}/${report.summary.publishedGuides} guides; median boilerplate ${Math.round(report.summary.medianBoilerplateRatio*100)}%.`);
  console.log(`Category repetition: ${report.summary.categorySharedSentences} groups; body diagnostics: median ${report.summary.medianBodyWords} words, ${report.summary.guidesUnder300Words} guides under 300 words.`);
  return report;
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const outputIndex=process.argv.indexOf('--output');
  const report=await runAudit(outputIndex>=0?process.argv[outputIndex+1]:undefined);
  const diagnostic=process.argv.includes('--diagnostic');
  process.exitCode=auditExitCode(report,{diagnostic});
  if(process.exitCode)console.error(`Repetition gate failed: sentences of ${SENTENCE_MIN_WORDS}+ words appear in ${SHARED_SENTENCE_THRESHOLD}+ published guides. See sharedSentences and categorySharedSentences in the report.`);
  else if(diagnostic)console.log('Diagnostic mode: repetition violations reported without a failing exit code.');
}
