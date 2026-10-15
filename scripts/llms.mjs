const ORIGIN='https://help.dosya.dev';

const CATEGORY_ORDER=[
  ['uploading','File uploads and downloads'],
  ['sharing','File sharing and file requests'],
  ['files','Cloud storage and file management'],
  ['account','Account and security'],
  ['workspaces','Workspaces and teams'],
  ['developers','API keys and integrations'],
  ['desktop','Desktop app'],
  ['extension','Browser extension'],
  ['integrations','Integrations'],
  ['troubleshooting','Troubleshooting'],
];

const categoryRank=new Map(CATEGORY_ORDER.map(([id],index)=>[id,index]));
const categoryTitle=new Map(CATEGORY_ORDER);
const canonicalUrl=article=>`${ORIGIN}/${article.category}/${article.articleSlug}`;
const cleanInline=value=>String(value).replace(/\s+/g,' ').trim();
const escapeLabel=value=>cleanInline(value).replace(/([\\[\]])/g,'\\$1');

function publishedArticles(articles){
  return articles.filter(article=>article.status==='published').toSorted((a,b)=>
    (categoryRank.get(a.category)??Number.MAX_SAFE_INTEGER)-(categoryRank.get(b.category)??Number.MAX_SAFE_INTEGER)||
    a.category.localeCompare(b.category,'en')||a.title.localeCompare(b.title,'en')
  );
}

function displayCategory(category){
  return categoryTitle.get(category)??category.split('-').map(word=>word[0]?.toUpperCase()+word.slice(1)).join(' ');
}

export function shiftMarkdownHeadings(body){
  let fenced=false;
  return body.split('\n').map(line=>{
    if(/^\s*(?:```|~~~)/.test(line)){fenced=!fenced;return line;}
    return fenced?line:line.replace(/^(#{1,5})(\s)/,'#$1$2');
  }).join('\n');
}

export function absolutizeHelpLinks(body){
  return body
    .replace(/(\]\()\/(?!\/)/g,`$1${ORIGIN}/`)
    .replace(/\b(href|src)="\/(?!\/)/g,`$1="${ORIGIN}/`);
}

export function renderLlmsIndex(articles){
  const published=publishedArticles(articles);
  const lines=[
    '# Dosya Help Center',
    '',
    '> Official help for Dosya cloud storage, file sharing, apps, integrations, security, automation, and troubleshooting.',
    '',
    `- [Help home](${ORIGIN}/): Browse every help category.`,
    `- [Search](${ORIGIN}/search): Search published Dosya guides.`,
    `- [Full guide text](${ORIGIN}/llms-full.txt): Read the complete text of all ${published.length} published guides.`,
    `- [Mobile app help](${ORIGIN}/mobile): Browse iPhone and Android backup, file, contact, and playback guides.`,
    '- [Dosya website](https://dosya.dev/): Product information, downloads, and company resources.',
  ];
  for(const [category] of CATEGORY_ORDER){
    const matches=published.filter(article=>article.category===category);
    if(!matches.length)continue;
    lines.push('',`## ${displayCategory(category)}`,'');
    for(const article of matches)lines.push(`- [${escapeLabel(article.title)}](${canonicalUrl(article)}): ${cleanInline(article.summary)}`);
  }
  const known=new Set(CATEGORY_ORDER.map(([category])=>category));
  for(const category of [...new Set(published.map(article=>article.category).filter(category=>!known.has(category)))].sort()){
    lines.push('',`## ${displayCategory(category)}`,'');
    for(const article of published.filter(article=>article.category===category))lines.push(`- [${escapeLabel(article.title)}](${canonicalUrl(article)}): ${cleanInline(article.summary)}`);
  }
  return `${lines.join('\n')}\n`;
}

export function renderLlmsFull(articles,llmsIndex=renderLlmsIndex(articles)){
  const lines=[llmsIndex.trimEnd(),'','# Full guide text',''];
  for(const article of publishedArticles(articles)){
    lines.push(
      `## ${cleanInline(article.title)}`,
      '',
      `Source: ${canonicalUrl(article)}`,
      '',
      `Last reviewed: ${article.lastReviewed}`,
      '',
      `> ${cleanInline(article.summary)}`,
      '',
      shiftMarkdownHeadings(absolutizeHelpLinks(article.body)).trim(),
      '',
      '---',
      '',
    );
  }
  return `${lines.join('\n').trimEnd()}\n`;
}
