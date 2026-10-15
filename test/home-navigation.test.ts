import {it,expect} from 'vitest';
import {readFileSync,existsSync} from 'node:fs';
import {inMonorepo} from './monorepo';

it.skipIf(!inMonorepo)('offers a crawlable card for every shipped integration and keeps guide browsing available',()=>{
  const home=readFileSync('dist/index.html','utf8');
  const cards=[...home.matchAll(/<a\s+[^>]*class="help-product-card"[^>]*>[\s\S]*?<\/a>/g)].map(([html])=>html);
  const source=readFileSync('../web/src/lib/integrations.ts','utf8');
  const slugs=[...source.matchAll(/slug: '([^']+)'/g)].map(([,slug])=>slug);
  for(const slug of slugs){
    const card=cards.find(html=>html.includes(`data-product="${slug}"`));
    expect(card,`Missing ${slug} help card`).toBeDefined();
    expect(card).toMatch(/href="(?:https:\/\/(?:dosya\.dev|app\.dosya\.dev)\/|\/(?:desktop|extension|integrations\/(?:zapier|webdav|rclone))"|#browse-heading)/);
  }
  expect(cards.length).toBe(slugs.length+2); // Web and mobile apps accompany the integration catalog.
  expect(home.indexOf('role="search"')).toBeLessThan(home.indexOf('class="help-product-card"'));
  expect(home).toContain('id="browse-heading"');
  expect(home).toContain('sign in first, then open <strong>Integrations</strong>');
  expect(cards.find(html=>html.includes('data-product="remote-download"'))).toContain('href="https://dosya.dev/remote-downloads/"');
  expect(cards.find(html=>html.includes('data-product="webdav"'))).toContain('href="/integrations/webdav"');
  expect(cards.find(html=>html.includes('data-product="mobile"'))).toContain('href="/mobile"');
  for(const card of cards){
    const local=card.match(/href="(\/[^\"]+)"/);
    if(local)expect(existsSync(`dist${local[1]}/index.html`),local[1]).toBe(true);
    const image=card.match(/src="(\/[^\"]+)"/);
    if(image)expect(existsSync(`dist${image[1]}`),image[1]).toBe(true);
  }
});

it('publishes a paginated mobile guide hub without changing article URLs',()=>{
  const first=readFileSync('dist/mobile/index.html','utf8');
  expect(first).toContain('<h1>Mobile app help</h1>');
  expect(first).toContain('Set up automatic mobile photo backup');
  expect(first).toContain('Showing 1–10 of');
  expect(existsSync('dist/mobile/page/2/index.html')).toBe(true);
  expect(first).toMatch(/href="\/(?:files|sharing|account)\/mobile-[^"]+"/);
});
