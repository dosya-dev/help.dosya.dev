import {it,expect} from 'vitest';
import {DatabaseSync} from 'node:sqlite';
import {readFileSync,readdirSync} from 'node:fs';
import {revisionSql} from '../scripts/registry.mjs';
import {inMonorepo} from './monorepo';
it.skipIf(!inMonorepo)('publishes an edited draft at its existing revision and preserves published content',()=>{
  const db=new DatabaseSync(':memory:');
  try {
    db.exec('CREATE TABLE users(id TEXT PRIMARY KEY)');
    db.exec(readFileSync('../api/migrations/0200_help_center.sql','utf8'));
    const draft={articleId:'hc-test',locale:'en',revision:1,title:'Draft title',category:'uploading',articleSlug:'test',status:'draft',lastReviewed:'2026-10-09',contentHash:'old'};
    db.exec(revisionSql(draft));
    const published={...draft,title:'Reviewed title',status:'published',contentHash:'reviewed'};
    db.exec(revisionSql(published));
    expect(db.prepare('SELECT status,title,content_hash FROM help_revisions').get()).toMatchObject({status:'published',title:'Reviewed title',content_hash:'reviewed'});
    db.exec(revisionSql({...published,title:'Silent edit',contentHash:'changed'}));
    expect(db.prepare('SELECT title,content_hash FROM help_revisions').get()).toMatchObject({title:'Reviewed title',content_hash:'reviewed'});
  } finally {db.close();}
});

it.skipIf(!inMonorepo)('has an API migration for every generated help revision',()=>{
  const revisionKeys=(sql:string)=>new Set(
    [...sql.matchAll(/VALUES\('([^']+)','([^']+)','(\d+)'/g)]
      .map(([,articleId,locale,revision])=>`${articleId}:${locale}:${revision}`),
  );
  const generated=revisionKeys(readFileSync('generated/catalog.sql','utf8'));
  const migrationsDir='../api/migrations';
  const migrations=revisionKeys(
    readdirSync(migrationsDir)
      .filter(file=>file.endsWith('.sql'))
      .map(file=>readFileSync(`${migrationsDir}/${file}`,'utf8'))
      .join('\n'),
  );
  expect([...generated].filter(key=>!migrations.has(key))).toEqual([]);
});
