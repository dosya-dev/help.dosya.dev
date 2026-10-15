import {mkdir,readFile,readdir,writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {auditArticles,normalizeSentence,parseRawArticle} from './audit-content.mjs';

const app=fileURLToPath(new URL('..',import.meta.url));
const articleDirectory=path.join(app,'src/content/articles');
const historyDirectory=path.join(app,'content-history');
const baselinePath=path.join(app,'generated/content-quality-baseline-2026-10-14.json');
const reportPath=path.join(app,'generated/boilerplate-cleanup-report.json');
const REVIEW_DATE='2026-10-14';
const VERIFICATION='Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.';
const segmenter=new Intl.Segmenter('en',{granularity:'sentence'});

function allowlist(sharedSentences){
  return new Map(sharedSentences.map(item=>{
    const sentence=typeof item==='string'?item:item.sentence;
    const key=typeof item==='string'?normalizeSentence(item):item.normalized;
    return [key,sentence];
  }));
}
function heading(line){
  const match=line.match(/^\s*(#{1,6})\s+(.+?)\s*$/);
  return match?{level:match[1].length,text:match[2]}:null;
}
function protectBlock(block){return /^\s*(?:```|~~~|<)/.test(block);}
function protectRegions(value){
  const lines=String(value).split('\n'),protectedRegions=[],output=[];
  const store=region=>{const token=`@@DOSYA_PROTECTED_${protectedRegions.length}@@`;protectedRegions.push(region.join('\n'));output.push(token);};
  for(let index=0;index<lines.length;index++){
    const line=lines[index],fence=line.match(/^\s*(`{3,}|~{3,})/);
    if(fence){
      const region=[line],marker=fence[1][0],minimum=fence[1].length;
      const close=new RegExp(`^\\s*${marker}{${minimum},}\\s*$`);
      while(index+1<lines.length){const next=lines[++index];region.push(next);if(close.test(next))break;}
      store(region);continue;
    }
    const comment=/^\s*<!--/.test(line);
    const tag=line.match(/^\s*<([A-Za-z][\w:-]*)(?:\s|>)/);
    if(comment||tag){
      const region=[line];
      if(comment){while(!region.at(-1).includes('-->')&&index+1<lines.length)region.push(lines[++index]);}
      else {
        const name=tag[1],closed=line.includes(`</${name}>`)||/\/>\s*$/.test(line);
        while(!closed&&!region.at(-1).includes(`</${name}>`)&&index+1<lines.length)region.push(lines[++index]);
      }
      store(region);continue;
    }
    output.push(line);
  }
  return {value:output.join('\n'),restore:text=>protectedRegions.reduce((result,region,index)=>result.replace(`@@DOSYA_PROTECTED_${index}@@`,region),text)};
}
function splitAtHeadings(block){
  const parts=[],content=[];
  const flush=()=>{if(content.length){parts.push(content.join('\n'));content.length=0;}};
  for(const line of block.split('\n')){
    if(heading(line)){flush();parts.push(line);}
    else content.push(line);
  }
  flush();return parts;
}
function renumberOrderedList(value){
  let next;
  return value.split('\n').map(line=>{
    const match=line.match(/^(\s*)(\d+)\.(\s+)(.*)$/);
    if(!match){next=undefined;return line;}
    if(next===undefined)next=Number(match[2]);
    return `${match[1]}${next++}.${match[3]}${match[4]}`;
  }).join('\n');
}
function cleanLine(line,shared,stats){
  if(heading(line))return line;
  const prefix=line.match(/^(\s*(?:#{1,6}|[-+*]|\d+\.)\s+)([\s\S]*)$/);
  const lead=prefix?.[1]??'',text=prefix?.[2]??line;
  const wholeKey=normalizeSentence(text);
  if(wholeKey&&shared.has(wholeKey)){
    stats.removedSentences.push(shared.get(wholeKey));
    if(/^\s*#{1,6}\s+/.test(line)){
      if(/[?]\s*$/.test(text))stats.removedEmptyFaqs++;
      else stats.removedEmptyHeadings++;
    }
    return '';
  }
  const kept=[];
  for(const part of segmenter.segment(text)){
    const key=normalizeSentence(part.segment);
    if(key&&shared.has(key)){
      stats.removedSentences.push(shared.get(key));
      continue;
    }
    kept.push(part.segment);
  }
  const remaining=kept.join('').trim();
  if(remaining)return `${lead}${remaining}`;
  if(/^\s*#{1,6}\s+/.test(line)){
    if(/[?]\s*$/.test(text))stats.removedEmptyFaqs++;
    else stats.removedEmptyHeadings++;
  }
  return '';
}
function removeEmptySections(blocks,stats){
  let changed=true;
  while(changed){
    changed=false;
    for(let index=blocks.length-1;index>=0;index--){
      const current=heading(blocks[index].text);if(!current)continue;
      let end=blocks.length;
      for(let next=index+1;next<blocks.length;next++){
        const candidate=heading(blocks[next].text)||blocks[next].originalHeading;
        if(candidate&&candidate.level<=current.level){end=next;break;}
      }
      const section=blocks.slice(index,end);
      const hasContent=section.slice(1).some(block=>!heading(block.text)&&block.text.trim());
      const cleanupEmptiedSection=section.some(block=>block.removedCount>0||block.removedStructurally);
      if(hasContent||!cleanupEmptiedSection)continue;
      blocks[index].text='';blocks[index].removedStructurally=true;changed=true;
      if(/[?]\s*$/.test(current.text))stats.removedEmptyFaqs++;
      else stats.removedEmptyHeadings++;
    }
  }
}

export function cleanArticleBody(body,sharedSentences){
  const shared=allowlist(sharedSentences);
  const trailingNewline=String(body).endsWith('\n')?'\n':'';
  const stats={removedSentences:[],removedEmptyHeadings:0,removedEmptyFaqs:0};
  const protectedBody=protectRegions(String(body).trim());
  const blocks=protectedBody.value.split(/\n{2,}/).flatMap(splitAtHeadings).map(block=>{
    const before=stats.removedSentences.length;
    let text=protectBlock(block)?block:block.split('\n').map(line=>cleanLine(line,shared,stats)).filter(Boolean).join('\n');
    const removedCount=stats.removedSentences.length-before;
    if(removedCount&&!protectBlock(block))text=renumberOrderedList(text);
    return {text,originalHeading:heading(block),removedCount,removedStructurally:false};
  });
  if(!stats.removedSentences.length)return {body,changed:false,...stats};
  removeEmptySections(blocks,stats);
  const cleaned=blocks.map(block=>block.text).filter(Boolean).join('\n\n').trim();
  return {body:`${protectedBody.restore(cleaned)}${trailingNewline}`,changed:true,...stats};
}

function replaceArticle(raw,data,body){
  const match=raw.match(/^---\s*\n[\s\S]*?\n---\s*\n/);if(!match)throw Error('Missing article frontmatter.');
  return `---\n${JSON.stringify(data,null,2)}\n---\n${body}`;
}
function diffExcerpt(before,after){
  const beforeLines=before.trim().split('\n'),afterLines=after.trim().split('\n');
  let start=0;
  while(start<beforeLines.length&&start<afterLines.length&&beforeLines[start]===afterLines[start])start++;
  let beforeEnd=beforeLines.length-1,afterEnd=afterLines.length-1;
  while(beforeEnd>=start&&afterEnd>=start&&beforeLines[beforeEnd]===afterLines[afterEnd]){beforeEnd--;afterEnd--;}
  const from=start;
  return {
    before:beforeLines.slice(from,Math.min(beforeLines.length,beforeEnd+3)).join('\n').slice(0,1800),
    after:afterLines.slice(from,Math.min(afterLines.length,afterEnd+3)).join('\n').slice(0,1800),
  };
}
export function pickSamples(changes,unchanged=[]){
  const selected=[];
  const take=(reason,predicate)=>{const item=changes.find(change=>!selected.some(sample=>sample.change===change)&&predicate(change));if(item)selected.push({reason,change:item});};
  take('faq-entry-emptied',change=>change.removedEmptyFaqs>0);
  take('section-heading-emptied',change=>change.removedEmptyHeadings>0);
  take('mixed-paragraph-preserved',change=>change.mixedParagraph);
  take('list-item-removed',change=>change.hasListRemoval);
  while(selected.length<4){const next=changes.find(change=>!selected.some(sample=>sample.change===change));if(!next)break;selected.push({reason:'standalone-sentence-removed',change:next});}
  const samples=selected.slice(0,4).map(({reason,change})=>({articleId:change.articleId,file:change.file,kind:reason,...diffExcerpt(change.before,change.after),removedSentences:change.removedSentences.slice(0,4)}));
  const untouched=unchanged[0];
  if(untouched)samples.push({articleId:untouched.articleId,file:untouched.file,kind:'unchanged-guide',before:untouched.body.trim().slice(0,1800),after:untouched.body.trim().slice(0,1800),removedSentences:[]});
  while(samples.length<5){const next=changes.find(change=>!samples.some(sample=>sample.articleId===change.articleId));if(!next)break;samples.push({articleId:next.articleId,file:next.file,kind:'standalone-sentence-removed',...diffExcerpt(next.before,next.after),removedSentences:next.removedSentences.slice(0,4)});}
  return samples.slice(0,5);
}

export async function runCleanup({apply=false}={}){
  const baseline=JSON.parse(await readFile(baselinePath,'utf8'));
  const files=(await readdir(articleDirectory)).filter(file=>file.endsWith('.md')).sort();
  const changes=[],unchanged=[],postArticles=[];
  for(const file of files){
    const articlePath=path.join(articleDirectory,file),raw=await readFile(articlePath,'utf8');
    const parsed=parseRawArticle(file,raw),cleaned=cleanArticleBody(parsed.body,baseline.sharedSentences);
    if(!cleaned.changed){unchanged.push({articleId:parsed.data.articleId,file,body:parsed.body});postArticles.push(parsed);continue;}
    const nextData={...parsed.data,revision:parsed.data.revision+1,lastReviewed:REVIEW_DATE,verification:VERIFICATION};
    const nextRaw=replaceArticle(raw,nextData,cleaned.body);
    const originalParagraphs=parsed.body.split(/\n{2,}/);
    const mixedParagraph=originalParagraphs.some(paragraph=>{
      const keys=[...segmenter.segment(paragraph)].map(part=>normalizeSentence(part.segment)).filter(Boolean);
      const removed=keys.filter(key=>baseline.sharedSentences.some(item=>item.normalized===key)).length;
      return removed>0&&removed<keys.length;
    });
    const hasListRemoval=parsed.body.split('\n').some(line=>/^\s*(?:[-+*]|\d+\.)\s+/.test(line)&&baseline.sharedSentences.some(item=>item.normalized===normalizeSentence(line.replace(/^\s*(?:[-+*]|\d+\.)\s+/,''))));
    changes.push({articleId:parsed.data.articleId,file,before:parsed.body,after:cleaned.body,mixedParagraph,hasListRemoval,removedSentences:cleaned.removedSentences,removedEmptyHeadings:cleaned.removedEmptyHeadings,removedEmptyFaqs:cleaned.removedEmptyFaqs,fromRevision:parsed.data.revision,toRevision:nextData.revision});
    postArticles.push(parseRawArticle(file,nextRaw));
    if(apply){
      await mkdir(historyDirectory,{recursive:true});
      const historyPath=path.join(historyDirectory,`${parsed.data.articleId}.en.r${parsed.data.revision}.md`);
      if(!existsSync(historyPath))await writeFile(historyPath,raw);
      await writeFile(articlePath,nextRaw);
    }
  }
  const postAudit=auditArticles(postArticles);
  const report={mode:apply?'apply':'dry-run',baseline:'generated/content-quality-baseline-2026-10-14.json',thresholdGuides:baseline.thresholds.sharedSentenceGuides,changedGuides:changes.length,unchangedGuides:files.length-changes.length,removedSentenceOccurrences:changes.reduce((sum,change)=>sum+change.removedSentences.length,0),removedEmptyHeadings:changes.reduce((sum,change)=>sum+change.removedEmptyHeadings,0),removedEmptyFaqs:changes.reduce((sum,change)=>sum+change.removedEmptyFaqs,0),before:baseline.summary,after:postAudit.summary,samples:pickSamples(changes,unchanged),changes:changes.map(({before,after,mixedParagraph,hasListRemoval,...change})=>change)};
  await writeFile(reportPath,JSON.stringify(report,null,2)+'\n');
  console.log(`${apply?'Applied':'Dry run'}: ${report.changedGuides} guides, ${report.removedSentenceOccurrences} exact sentence occurrences, ${report.removedEmptyHeadings} empty headings, ${report.removedEmptyFaqs} empty FAQs.`);
  return report;
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))await runCleanup({apply:process.argv.includes('--apply')});
