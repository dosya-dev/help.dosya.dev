import { describe,it,expect } from 'vitest';
import { existsSync,readFileSync, readdirSync } from 'node:fs';
import { parseArticle, searchArticles } from '../src/lib/content';
describe('English help content',()=>{
  const files=()=>readdirSync('src/content/articles').filter(f=>f.endsWith('.md')).map(f=>parseArticle(readFileSync(`src/content/articles/${f}`,'utf8')));
  it('authors stable English guides with complete task sections and scoped verification',()=>{
    const articles=files();expect(articles.length).toBeGreaterThanOrEqual(13);
    expect(new Set(articles.map(a=>a.data.articleId)).size).toBe(articles.length);
    for(const {data,body} of articles){
      expect(data.locale).toBe('en');expect(data.revision).toBeGreaterThan(0);
      for(const h of ['Steps','Expected result','Related guides']) expect(body).toContain(`## ${h}`);
      if(data.status==='published'){
        expect(data.verification).toMatch(/verified|reviewed/i);
        expect(data.verification).toMatch(/local|production/i);
      }
    }
  });
  it('searches actual content and titles with English terms without leaking drafts',()=>{
    const a=files().map(x=>({...x.data,body:x.body}));
    const result=searchArticles(a,'password');expect(result.every(x=>x.status==='published')).toBe(true);
    expect(searchArticles(a,'   ')).toEqual([]);expect(searchArticles(a,'zzzznonexistent')).toEqual([]);
  });
  it.each([
    ['account hacked','hc-suspicious-activity'],
    ['desktop sync stuck','hc-desktop-sync-issues'],
    ['storage full','hc-storage-usage'],
    ['file missing','hc-search-files'],
    ['lost two factor phone','hc-two-factor-recovery'],
    ['sharing link not working','hc-unavailable-link'],
    ['pasword reset','hc-password-reset'],
    ['This folder is locked. Enter its password to open it.','hc-lock-folder'],
  ])('ranks the recovery guide first for “%s”', (query,articleId)=>{
    const articles=files().map(x=>({...x.data,body:x.body}));
    expect(searchArticles(articles,query)[0]?.articleId).toBe(articleId);
  });
  it('publishes every workflow map with light and dark assets',()=>{
    const articles=readdirSync('src/content/articles').filter(file=>file.endsWith('.md')).map(file=>readFileSync(`src/content/articles/${file}`,'utf8'));
    const workflowArticles=articles.filter(raw=>raw.includes('<picture class="workflow-map">'));
    expect(workflowArticles.length).toBeGreaterThanOrEqual(200);
    for(const raw of workflowArticles){
      const light=raw.match(/<picture class="workflow-map">[\s\S]*?<img src="\/screenshots\/([^"]+\.webp)"/)?.[1];
      const dark=raw.match(/<source data-theme-source="dark"[^>]+srcset="\/screenshots\/([^"]+-dark\.webp)"/)?.[1];
      expect(light).toBeTruthy();expect(dark).toBeTruthy();
      expect(existsSync(`public/screenshots/${light}`)).toBe(true);
      expect(existsSync(`public/screenshots/${dark}`)).toBe(true);
    }
  });
  it('derives each publication date from the earliest immutable revision',()=>{
    const publishedDates=JSON.parse(readFileSync('generated/published-dates.json','utf8'));
    const datesByArticle=new Map<string,string[]>();
    for(const file of readdirSync('content-history').filter(file=>file.endsWith('.md'))){
      const {data}=parseArticle(readFileSync(`content-history/${file}`,'utf8'));
      const dates=datesByArticle.get(data.articleId)??[];
      dates.push(data.lastReviewed);datesByArticle.set(data.articleId,dates);
    }
    for(const {data} of files()){
      const dates=(datesByArticle.get(data.articleId)??[]).sort();
      expect(publishedDates[data.articleId],data.articleId).toBe(dates[0]??data.lastReviewed);
    }
  });
  it('rejects nonexistent locales, malformed routes and unsafe metadata',()=>{
    const base=files()[0];
    expect(()=>parseArticle(`---\n${JSON.stringify({...base.data,locale:'tr'})}\n---\nText`)).toThrow();
    expect(()=>parseArticle(`---\n${JSON.stringify({...base.data,articleSlug:'../admin'})}\n---\nText`)).toThrow();
  });
});
