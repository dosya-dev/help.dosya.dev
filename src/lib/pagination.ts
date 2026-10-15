import {categories,type CategoryMeta} from './content';

export const GUIDE_PAGE_SIZE=10;
export const HOME_PREVIEW_SIZE=3;

export interface PaginationState {
  current:number;
  pages:number;
  total:number;
  start:number;
  end:number;
}
export interface Paginated<T> extends PaginationState {items:T[]}

export function paginateItems<T>(items:T[],requestedPage=1):Paginated<T> {
  const pages=Math.max(1,Math.ceil(items.length/GUIDE_PAGE_SIZE));
  const current=Math.min(pages,Number.isSafeInteger(requestedPage)&&requestedPage>0?requestedPage:1);
  const offset=(current-1)*GUIDE_PAGE_SIZE;
  return {current,pages,total:items.length,start:items.length?offset+1:0,
    end:Math.min(offset+GUIDE_PAGE_SIZE,items.length),items:items.slice(offset,offset+GUIDE_PAGE_SIZE)};
}

export function paginationRange(current:number,total:number):(number|'ellipsis')[] {
  if(total<=5)return Array.from({length:total},(_,i)=>i+1);
  const pages=[...new Set([1,current-1,current,current+1,total])]
    .filter(page=>page>=1&&page<=total).sort((a,b)=>a-b);
  return pages.flatMap((page,i)=>i>0&&page-pages[i-1]>1?['ellipsis' as const,page]:[page]);
}

export const categoryPagePath=(category:string,page:number)=>page===1?`/${category}`:`/${category}/page/${page}`;
export const searchPagePath=(query:string,page:number)=>{
  const params=new URLSearchParams({q:query});
  if(page>1)params.set('page',String(page));
  return `/search?${params}`;
};

type Guide={data:{category:string;status:string;articleSlug:string}};
export interface CategoryPage<T> {
  categoryId:string;
  category:CategoryMeta;
  pagination:Paginated<T>;
}
export function categoryPages<T extends Guide>(articles:T[]):CategoryPage<T>[] {
  return Object.entries(categories).flatMap(([categoryId,category])=>{
    const guides=articles.filter(article=>article.data.status==='published'&&article.data.category===categoryId)
      .sort((a,b)=>a.data.articleSlug.localeCompare(b.data.articleSlug,'en'));
    if(!guides.length)return [];
    return Array.from({length:Math.ceil(guides.length/GUIDE_PAGE_SIZE)},(_,i)=>({
      categoryId,category,pagination:paginateItems(guides,i+1),
    }));
  });
}
