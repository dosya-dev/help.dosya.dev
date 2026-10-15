const quote=s=>`'${String(s).replaceAll("'","''")}'`;
export function revisionSql(a) {
  return `INSERT INTO help_revisions(article_id,locale,revision,title,path,status,last_reviewed,content_hash) VALUES(${[a.articleId,a.locale,a.revision,a.title,`/${a.category}/${a.articleSlug}`,a.status,a.lastReviewed,a.contentHash].map(quote).join(',')}) ON CONFLICT(article_id,locale,revision) DO UPDATE SET title=CASE WHEN help_revisions.status='draft' THEN excluded.title ELSE help_revisions.title END,path=CASE WHEN help_revisions.status='draft' THEN excluded.path ELSE help_revisions.path END,content_hash=excluded.content_hash,status=excluded.status,last_reviewed=excluded.last_reviewed WHERE help_revisions.content_hash=excluded.content_hash OR help_revisions.status='draft';`;
}
