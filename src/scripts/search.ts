import {categories,searchArticles} from '../lib/content';
import {paginateItems,searchPagePath} from '../lib/pagination';
import {renderPagination} from './pagination';

interface SearchGuide {title:string;summary:string;status:string;category:string;path:string;body?:string;keywords?:string[]}
const input=document.querySelector<HTMLInputElement>('#query')!;
const form=document.querySelector<HTMLFormElement>('#search-form')!;
const status=document.querySelector<HTMLElement>('#search-status')!;
const list=document.querySelector<HTMLUListElement>('#search-results')!;
const pager=document.querySelector<HTMLElement>('#search-pagination')!;
const fallback=document.querySelector<HTMLElement>('#search-fallback')!;
let index:Promise<SearchGuide[]>|undefined,sequence=0;

async function search(requestedPage=1){
  const seq=++sequence,q=input.value.trim().slice(0,200);
  list.replaceChildren();pager.hidden=true;fallback.hidden=true;
  if(!q){status.textContent='Enter a task or keyword to find a guide.';return;}
  status.textContent='Searching…';
  try{
    index??=fetch('/search-index.json').then(response=>{if(!response.ok)throw Error();return response.json();});
    const results=searchArticles(await index,q);if(seq!==sequence)return;
    const pagination=paginateItems(results,requestedPage);
    history.replaceState(null,'',searchPagePath(q,pagination.current));
    status.textContent=results.length?`${results.length} guide${results.length===1?'':'s'} found.`:'No matching guides.';
    fallback.hidden=results.length>0;
    for(const article of pagination.items){
      const li=document.createElement('li'),link=document.createElement('a'),copy=document.createElement('span');
      const context=document.createElement('span'),title=document.createElement('span'),summary=document.createElement('span');
      const arrow=document.createElementNS('http://www.w3.org/2000/svg','svg');
      const path=document.createElementNS('http://www.w3.org/2000/svg','path');
      link.href=article.path;link.className='article-list-link';copy.className='article-list-copy';
      context.className='article-list-context';context.textContent=categories[article.category]?.title??article.category;
      title.className='article-list-title';title.textContent=article.title;
      summary.className='article-list-summary';summary.textContent=article.summary;
      arrow.classList.add('article-list-arrow');
      for(const [key,value] of Object.entries({width:'20',height:'20',viewBox:'0 0 24 24',fill:'none',stroke:'currentColor','stroke-width':'1.5','aria-hidden':'true'}))arrow.setAttribute(key,value);
      path.setAttribute('d','m9 5 7 7-7 7');arrow.append(path);
      copy.append(context,title,summary);link.append(copy,arrow);li.append(link);list.append(li);
    }
    renderPagination(pager,pagination,page=>searchPagePath(q,page));
  }catch{if(seq!==sequence)return;index=undefined;status.textContent='Search is unavailable. Please try again or browse the help home.';}
}

const params=new URLSearchParams(location.search);
input.value=params.get('q')?.slice(0,200)??'';
void search(Number(params.get('page')??1));
form.addEventListener('submit',event=>{
  event.preventDefault();history.replaceState(null,'',searchPagePath(input.value.trim().slice(0,200),1));void search(1);
});
