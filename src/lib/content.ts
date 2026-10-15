import categoryFeaturedLinks from '../data/category-featured-links.json';

export type ArticleMeta = {
  articleId:string;locale:'en';revision:number;title:string;summary:string;
  category:string;articleSlug:string;status:'draft'|'published';lastReviewed:string;
  verification:string;related:string[];keywords:string[];
};
export type FeaturedLink={href:string;label:string};
export type CategoryMeta={title:string;summary:string;intro:string;featuredLinks:FeaturedLink[]};
export const categories:Record<string,CategoryMeta>= {
  uploading:{
    title:'File uploads and downloads',
    summary:'Upload files and folders to Dosya cloud storage, follow transfer progress, recover failed uploads, and download files safely.',
    intro:'Learn how to move files into and out of Dosya cloud storage from the web, desktop, and mobile apps. These guides cover individual files, folders, large transfers, upload progress, download options, transfer limits, and recovery steps when a job stops or fails. Start with the basic upload guide, then use the progress and troubleshooting guides to confirm that every file reached the correct workspace.',
    featuredLinks:categoryFeaturedLinks.uploading,
  },
  sharing:{
    title:'File sharing and file requests',
    summary:'Share files with secure links, manage recipient access, and collect client uploads with file requests.',
    intro:'Use these guides to send files, control who can open them, and collect uploads from clients or teammates. You can create a sharing link, add a password, set access rules, review link activity, or build a file request for incoming work. The troubleshooting guides explain what to check when a recipient cannot open a link or when an expected upload does not appear.',
    featuredLinks:categoryFeaturedLinks.sharing,
  },
  files:{
    title:'Cloud storage and file management',
    summary:'Organize cloud storage, search and preview files, manage versions, and recover deleted items.',
    intro:'Find practical help for organizing and maintaining files in Dosya cloud storage. The guides explain folders, names, search, previews, versions, favorites, moves, copies, storage use, and deleted file recovery. They also show how to confirm that you are working in the intended workspace before changing important content. Begin with organization or search, then open the guide that matches the action you need to complete.',
    featuredLinks:categoryFeaturedLinks.files,
  },
  account:{
    title:'Account and security',
    summary:'Protect your sign-in and review your active sessions.',
    intro:'Manage your Dosya account, sign-in methods, personal settings, and security controls. These guides cover account creation, email verification, password recovery, two-factor authentication, active sessions, profile changes, notifications, storage plans, and account deletion. If you notice activity you do not recognize, follow the suspicious activity guide first. For routine setup, begin with account verification and then add two-factor authentication to protect future sign-ins.',
    featuredLinks:categoryFeaturedLinks.account,
  },
  workspaces:{
    title:'Workspaces and teams',
    summary:'Invite people and manage access to a shared workspace.',
    intro:'Set up a workspace where your team can store, share, and manage files together. The guides cover workspace creation, region selection, invitations, member roles, access policies, ownership, storage settings, and common administration tasks. Use them when adding a teammate, limiting an action, or checking why someone cannot reach shared content. Start by choosing the workspace region, then define roles and policies before inviting the wider team.',
    featuredLinks:categoryFeaturedLinks.workspaces,
  },
  developers:{
    title:'API keys and integrations',
    summary:'Create credentials with the access your tools need.',
    intro:'Build applications and automations that work with files in Dosya. These guides cover API keys, authentication, REST requests, uploads, downloads, sharing links, webhooks, rate limits, errors, and safe credential handling. Each topic focuses on the controls and checks needed for a reliable integration. Begin with the REST API quickstart, create a narrowly scoped key, and add webhooks when your system needs to react to file activity.',
    featuredLinks:categoryFeaturedLinks.developers,
  },
  desktop:{
    title:'Desktop app',
    summary:'Install the app, pair a folder and choose how changes sync.',
    intro:'Install and use the Dosya desktop app to keep local folders connected with cloud storage. The guides explain sign-in, folder pairing, sync modes, status indicators, selective sync, bandwidth controls, conflicts, offline work, updates, and removal. Use the troubleshooting topics when files remain queued or local and cloud copies differ. Start with installation, then choose the sync mode that fits how much local storage you want to use.',
    featuredLinks:categoryFeaturedLinks.desktop,
  },
  extension:{
    title:'Browser extension',
    summary:'Connect Save to dosya and save images, text and screenshots.',
    intro:'Use the Dosya browser extension to save useful content directly to cloud storage while you browse. These guides cover installation, account connection, save folders, images, selected text, screenshots, page files, permissions, status messages, and common browser issues. Start by installing and connecting the extension, then choose a default save folder. If a save action is unavailable, check the permissions guide for the affected site and browser.',
    featuredLinks:categoryFeaturedLinks.extension,
  },
  integrations:{
    title:'Integrations',
    summary:'Connect other tools and automate file workflows.',
    intro:'Connect Dosya with storage tools, automation platforms, and standard file transfer clients. The guides cover Google Drive, Dropbox, OneDrive, S3, WebDAV, rclone, Zapier, Make, n8n, MCP clients, and other supported workflows. Each guide explains the required credentials, destination settings, transfer direction, and a verification step. Choose the service you use, connect it with limited access, and test one file before moving a larger collection.',
    featuredLinks:categoryFeaturedLinks.integrations,
  },
  troubleshooting:{
    title:'Troubleshooting',
    summary:'Find the cause of a problem and what to try next.',
    intro:'Diagnose upload, download, sync, sharing, sign-in, storage, and integration problems in Dosya. The guides begin with the visible symptom, then provide checks that narrow the cause and show how to verify the result. Use the failed upload or slow transfer guides for transfer issues. If the problem continues, collect only the safe details listed in the support guide so the team can investigate without exposing credentials or private files.',
    featuredLinks:categoryFeaturedLinks.troubleshooting,
  },
};
export function parseArticle(raw:string):{data:ArticleMeta;body:string} {
  const match=raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!match)throw Error('Missing JSON frontmatter.');
  const data=JSON.parse(match[1]) as ArticleMeta;
  const date=/^\d{4}-\d{2}-\d{2}$/.test(data.lastReviewed)&&!isNaN(Date.parse(data.lastReviewed));
  if(data.locale!=='en'||!/^hc-[a-z0-9-]+$/.test(data.articleId)||!categories[data.category]||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.articleSlug)||!Number.isSafeInteger(data.revision)||data.revision<1||
    !['draft','published'].includes(data.status)||!date||!data.title?.trim()||!data.summary?.trim()||!data.verification?.trim()||
    !Array.isArray(data.related)||!Array.isArray(data.keywords))throw Error('Invalid English help metadata.');
  return {data,body:match[2]};
}
type SearchableArticle={
  articleId?:string;title:string;summary:string;body?:string;keywords?:string[];status:string;category?:string;
};

const SEARCH_STOP_WORDS=new Set([
  'a','an','and','are','for','from','i','in','is','it','its','my','not','of','on','open','please','the','this','to','with',
]);
const SEARCH_SYNONYMS:Record<string,string[]>={
  hack:['compromise','security','suspicious'],compromise:['hack','security','suspicious'],
  stuck:['blocked','issue','problem','stalled'],work:['error','fail','problem','troubleshoot','unavailable'],
  full:['limit','quota','usage'],miss:['find','lost','search','unavailable'],lost:['miss','recovery','unavailable'],
  lock:['password'],broken:['error','fail','problem','unavailable'],
};
const SEARCH_INTENTS:Array<{phrases:string[];articleId:string}>=[
  {phrases:['account hacked','account compromised'],articleId:'hc-suspicious-activity'},
  {phrases:['desktop sync stuck','desktop sync stalled','sync not working'],articleId:'hc-desktop-sync-issues'},
  {phrases:['storage full','storage quota','out of storage'],articleId:'hc-storage-usage'},
  {phrases:['file missing','lost file','cannot find file'],articleId:'hc-search-files'},
  {phrases:['lost two factor phone','lost 2fa phone','lost authenticator'],articleId:'hc-two-factor-recovery'},
  {phrases:['sharing link not working','share link not working','sharing link broken'],articleId:'hc-unavailable-link'},
  {phrases:['password reset','forgot password'],articleId:'hc-password-reset'},
  {phrases:['folder locked','folder is locked'],articleId:'hc-lock-folder'},
];

function normalizeSearchText(value:string):string {
  return value.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('en')
    .replace(/\b2fa\b/g,'two factor').replace(/[’']/g,'').replace(/[^a-z0-9]+/g,' ').trim();
}
function searchStem(value:string):string {
  if(value.length>5&&value.endsWith('ies'))return `${value.slice(0,-3)}y`;
  if(value.length>5&&value.endsWith('ing'))return value.slice(0,-3);
  if(value.length>4&&value.endsWith('ed'))return value.slice(0,-2);
  if(value.length>4&&value.endsWith('s'))return value.slice(0,-1);
  return value;
}
function searchTokens(value:string):string[] {
  return normalizeSearchText(value).split(' ').filter(Boolean).map(searchStem);
}
function editDistanceAtMostOne(a:string,b:string):boolean {
  if(a===b)return true;if(Math.abs(a.length-b.length)>1)return false;
  let i=0,j=0,differences=0;
  while(i<a.length&&j<b.length){
    if(a[i]===b[j]){i++;j++;continue;}
    if(++differences>1)return false;
    if(a.length>b.length)i++;else if(b.length>a.length)j++;else{i++;j++;}
  }
  return differences+(i<a.length||j<b.length?1:0)<=1;
}
function tokenMatches(field:Set<string>,term:string):boolean {
  if(field.has(term))return true;
  if(term.length<5)return false;
  for(const candidate of field)if(candidate.length>=5&&editDistanceAtMostOne(candidate,term))return true;
  return false;
}
function queryGroups(query:string):string[][] {
  return searchTokens(query).filter(term=>!SEARCH_STOP_WORDS.has(term)).slice(0,12).map(term=>
    [...new Set([term,...(SEARCH_SYNONYMS[term]??[]).map(searchStem)])]
  );
}
function matchingAlternative(field:Set<string>,group:string[]):boolean {
  return group.some(term=>tokenMatches(field,term));
}
function matchesIntentPhrase(groups:string[][],phrase:string):boolean {
  const phraseTerms=queryGroups(phrase).map(group=>group[0]);
  return phraseTerms.every(term=>groups.some(group=>group.some(candidate=>editDistanceAtMostOne(candidate,term))));
}

export function searchArticles<T extends SearchableArticle>(articles:T[],query:string):T[] {
  const normalizedQuery=normalizeSearchText(query),groups=queryGroups(query);if(!groups.length)return [];
  const intent=SEARCH_INTENTS.find(rule=>rule.phrases.some(phrase=>
    normalizedQuery.includes(phrase)||matchesIntentPhrase(groups,phrase)
  ))?.articleId;
  const issueQuery=groups.some(group=>group.some(term=>['blocked','broken','error','fail','hack','lost','miss','problem','stalled','stuck','unavailable','work'].includes(term)));
  const ranked=articles.filter(article=>article.status==='published').map(article=>{
    const titleText=normalizeSearchText(article.title),summaryText=normalizeSearchText(article.summary);
    const keywordText=normalizeSearchText((article.keywords??[]).join(' '));
    const title=new Set(searchTokens(titleText)),summary=new Set(searchTokens(summaryText));
    const keywords=new Set(searchTokens(keywordText));
    let score=0,highCoverage=0;
    const highMatches:boolean[]=[];
    for(const group of groups){
      const titleMatch=matchingAlternative(title,group),keywordMatch=matchingAlternative(keywords,group);
      const summaryMatch=matchingAlternative(summary,group),highMatch=titleMatch||keywordMatch||summaryMatch;
      highMatches.push(highMatch);if(highMatch)highCoverage++;
      score+=titleMatch?28:keywordMatch?18:summaryMatch?10:0;
    }
    const meaningfulQuery=groups.map(group=>group[0]).join(' ');
    if(titleText.includes(meaningfulQuery))score+=70;
    else if(keywordText.includes(meaningfulQuery))score+=45;
    else if(summaryText.includes(meaningfulQuery))score+=25;
    if(intent&&article.articleId===intent)score+=250;
    if(issueQuery&&(/troubleshoot|fix|recover|resolve|respond|diagnos/i.test(article.title)||article.category==='troubleshooting'))score+=14;
    return {article,score,highCoverage,highMatches};
  });
  const highSignal=ranked.filter(result=>result.highCoverage===groups.length||result.article.articleId===intent);
  const matches=highSignal.length?highSignal:ranked.map(result=>{
    const bodyText=normalizeSearchText(result.article.body??'');
    const bodyMatches=groups.map((group,index)=>!result.highMatches[index]&&group.some(term=>bodyText.includes(term)));
    return {...result,score:result.score+bodyMatches.filter(Boolean).length,
      allCoverage:result.highMatches.filter(Boolean).length+bodyMatches.filter(Boolean).length};
  }).filter(result=>result.allCoverage===groups.length||result.article.articleId===intent);
  return matches.sort((a,b)=>b.score-a.score||a.article.title.localeCompare(b.article.title,'en')).map(result=>result.article);
}
export const articlePath=(a:{category:string;articleSlug:string})=>`/${a.category}/${a.articleSlug}`;
