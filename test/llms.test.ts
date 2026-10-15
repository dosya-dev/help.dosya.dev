import {describe,it,expect} from 'vitest';
import {existsSync,readFileSync} from 'node:fs';
import {renderLlmsIndex,renderLlmsFull} from '../scripts/llms.mjs';

const articles=[
  {title:'Upload a folder',summary:'Transfer a complete folder tree.',category:'uploading',articleSlug:'upload-folder',status:'published',lastReviewed:'2026-10-13',body:'## Steps\n\nUse [files](/files/organize-files).'},
  {title:'Create an account',summary:'Create and verify a Dosya account.',category:'account',articleSlug:'create-account',status:'published',lastReviewed:'2026-10-12',body:'## Before you start\n\nOpen <a href="/account/reset-password">recovery</a>.'},
  {title:'Private draft',summary:'This must not be published.',category:'account',articleSlug:'private-draft',status:'draft',lastReviewed:'2026-10-13',body:'Secret draft.'},
];

describe('help LLM discovery files',()=>{
  it('renders a stable category index containing only published canonical guide links',()=>{
    const output=renderLlmsIndex(articles);
    expect(output).toMatch(/^# Dosya Help Center\n\n>/);
    expect(output).toContain('https://help.dosya.dev/llms-full.txt');
    expect(output).toContain('[Mobile app help](https://help.dosya.dev/mobile)');
    expect(output).toContain('## Account and security');
    expect(output).toContain('- [Create an account](https://help.dosya.dev/account/create-account): Create and verify a Dosya account.');
    expect(output).toContain('## File uploads and downloads');
    expect(renderLlmsIndex([{...articles[0],category:'sharing'}])).toContain('## File sharing and file requests');
    expect(renderLlmsIndex([{...articles[0],category:'files'}])).toContain('## Cloud storage and file management');
    expect(output).not.toContain('Private draft');
  });

  it('starts the full file with the index and includes normalized full guide Markdown',()=>{
    const index=renderLlmsIndex(articles);
    const output=renderLlmsFull(articles,index);
    expect(output.startsWith(index)).toBe(true);
    expect(output).toContain('## Create an account');
    expect(output).toContain('### Before you start');
    expect(output).toContain('https://help.dosya.dev/account/reset-password');
    expect(output).toContain('https://help.dosya.dev/files/organize-files');
    expect(output).not.toContain('Private draft');
  });

  it('publishes both generated files with every published guide',()=>{
    expect(existsSync('dist/llms.txt')).toBe(true);
    expect(existsSync('dist/llms-full.txt')).toBe(true);
    const index=readFileSync('dist/llms.txt','utf8');
    const full=readFileSync('dist/llms-full.txt','utf8');
    const catalog=JSON.parse(readFileSync('generated/catalog.json','utf8'));
    const published=catalog.filter((article:any)=>article.status==='published');
    expect((index.match(/^- \[[^\]]+\]\(https:\/\/help\.dosya\.dev\/[a-z-]+\/[a-z0-9-]+\):/gm)??[]).length).toBe(published.length);
    for(const article of published){
      const url=`https://help.dosya.dev/${article.category}/${article.articleSlug}`;
      expect(index,article.articleId).toContain(url);
      expect(full,article.articleId).toContain(`Source: ${url}`);
    }
    expect(full).not.toContain('shared-article-footer');
    expect(full).not.toContain('Use these shared checks when a task needs a second look.');
  });
});
