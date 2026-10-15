import {paginateItems,type CategoryPage} from './pagination';
import type {CategoryMeta} from './content';
import categoryFeaturedLinks from '../data/category-featured-links.json';

export const mobileCategory:CategoryMeta={
  title:'Mobile app help',
  summary:'Set up photo backup, browse and share cloud files, restore contacts, and troubleshoot Dosya on iPhone and Android.',
  intro:'Use Dosya on iPhone and Android to back up photos, browse cloud files, download items, share links, scan documents, and protect contacts. These guides explain mobile permissions, background transfer limits, workspace selection, offline access, and ways to confirm that a backup completed. Start with app installation or photo backup, then follow the troubleshooting guide if transfers pause when the app moves into the background.',
  featuredLinks:categoryFeaturedLinks.mobile,
};

const featured=[
  'mobile-photo-backup',
  'mobile-backup-progress',
  'mobile-browse-files',
  'mobile-share',
  'mobile-download-file',
  'mobile-file-confirm-workspace',
  'contacts-backup',
  'contacts-restore',
];

type MobileGuide={data:{articleSlug:string;status:string;category:string}};

export function isMobileGuide(article:MobileGuide){
  const slug=article.data.articleSlug;
  return article.data.status==='published'&&(
    slug.startsWith('mobile-')||
    slug.startsWith('contacts-')||
    slug.startsWith('carplay-')
  );
}

export function mobileGuidePages<T extends MobileGuide>(articles:T[]):CategoryPage<T>[] {
  const rank=new Map(featured.map((slug,index)=>[slug,index]));
  const guides=articles.filter(isMobileGuide).sort((a,b)=>{
    const ar=rank.get(a.data.articleSlug)??Number.MAX_SAFE_INTEGER;
    const br=rank.get(b.data.articleSlug)??Number.MAX_SAFE_INTEGER;
    return ar-br||a.data.articleSlug.localeCompare(b.data.articleSlug,'en');
  });
  return Array.from({length:Math.max(1,Math.ceil(guides.length/10))},(_,index)=>({
    categoryId:'mobile',
    category:mobileCategory,
    pagination:paginateItems(guides,index+1),
  }));
}
