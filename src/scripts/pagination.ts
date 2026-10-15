import {paginationRange,type PaginationState} from '../lib/pagination';

export function renderPagination(target:HTMLElement,pagination:PaginationState,hrefFor:(page:number)=>string) {
  target.replaceChildren();target.hidden=!pagination.total;
  if(!pagination.total)return;
  const summary=document.createElement('p');
  summary.className='pagination-summary';
  summary.textContent=`Showing ${pagination.start}–${pagination.end} of ${pagination.total} ${pagination.total===1?'guide':'guides'}`;
  const nav=document.createElement('nav');nav.className='pagination';nav.setAttribute('aria-label','Guide pages');
  const control=(label:string,rel:'prev'|'next',page:number|undefined)=>{
    const el=document.createElement(page===undefined?'span':'a');
    el.className=`pagination-control pagination-${rel}`;
    if(page===undefined)el.setAttribute('aria-disabled','true');
    else{el.setAttribute('href',hrefFor(page));el.setAttribute('rel',rel);}
    const arrow=document.createElementNS('http://www.w3.org/2000/svg','svg');
    for(const [key,value] of Object.entries({width:'16',height:'16',viewBox:'0 0 24 24',fill:'none',stroke:'currentColor','stroke-width':'1.5','aria-hidden':'true'}))arrow.setAttribute(key,value);
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d',rel==='prev'?'m15 5-7 7 7 7':'m9 5 7 7-7 7');arrow.append(path);
    if(rel==='prev')el.append(arrow,document.createTextNode(label));else el.append(document.createTextNode(label),arrow);
    return el;
  };
  const pages=document.createElement('div');pages.className='pagination-pages';
  for(const item of paginationRange(pagination.current,pagination.pages)){
    const el=document.createElement(item==='ellipsis'||item===pagination.current?'span':'a');
    el.className=item==='ellipsis'?'pagination-ellipsis':'pagination-number';
    el.textContent=item==='ellipsis'?'…':String(item);
    if(item==='ellipsis')el.setAttribute('aria-hidden','true');
    else{el.setAttribute('aria-label',`Page ${item}`);if(item===pagination.current)el.setAttribute('aria-current','page');else el.setAttribute('href',hrefFor(item));}
    pages.append(el);
  }
  nav.append(control('Previous','prev',pagination.current>1?pagination.current-1:undefined),pages,
    control('Next','next',pagination.current<pagination.pages?pagination.current+1:undefined));
  target.append(summary,nav);
}
