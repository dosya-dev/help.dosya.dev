import {it,expect} from 'vitest';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {parseArticle} from '../src/lib/content';
import {inMonorepo} from './monorepo';
it('emits published English HTML and excludes drafts and search from the sitemap',()=>{
  const catalog=JSON.parse(readFileSync('generated/catalog.json','utf8'));
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  for(const a of catalog){const route=`/${a.category}/${a.articleSlug}`,file=`dist${route}/index.html`;
    if(a.status==='draft'){expect(existsSync(file)).toBe(false);expect(sitemap).not.toContain(route);continue;}
    const html=readFileSync(file,'utf8');expect(html).toContain('<html lang="en">');expect(html).toContain(`href="https://help.dosya.dev${route}"`);expect(html).not.toContain('hreflang');expect(sitemap).toContain(route);
  }
  expect(sitemap).not.toContain('<loc>https://help.dosya.dev/search</loc>');expect(existsSync('dist/en')).toBe(false);
});

it('renders shared guidance after article main without adding it to Article JSON-LD',()=>{
  const html=readFileSync('dist/account/manage-workspaces/index.html','utf8');
  const mainEnd=html.indexOf('</main>');
  const sharedFooter=html.indexOf('class="shared-article-footer"');
  const siteFooter=html.indexOf('class="site-footer"');
  expect(sharedFooter).toBeGreaterThan(mainEnd);
  expect(siteFooter).toBeGreaterThan(sharedFooter);
  expect(html).toContain('href="/troubleshooting/contact-support-safely"');
  expect(html).toContain('href="/troubleshooting/verify-change-worked"');
  expect(html).toContain('Use these shared checks when a task needs a second look.');
  const jsonLd=html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1]??'';
  expect(jsonLd).not.toContain('Use these shared checks when a task needs a second look.');
});

it('ships real, captioned screenshot assets for every published guide',()=>{
  const catalog=JSON.parse(readFileSync('generated/catalog.json','utf8'));
  for(const a of catalog.filter((a:any)=>a.status==='published')){
    const html=readFileSync(`dist/${a.category}/${a.articleSlug}/index.html`,'utf8');
    const figures=[...html.matchAll(/<figure class="help-screenshot">([\s\S]*?)<\/figure>/g)];
    expect(figures.length,a.articleId).toBeGreaterThan(0);
    for(const [,figure]of figures){
      const src=figure.match(/<img[^>]*src="(\/screenshots\/[^" ]+\.webp)"/);
      expect(src,a.articleId).not.toBeNull();
      expect(existsSync(`dist${src![1]}`),src![1]).toBe(true);
      expect(figure).toMatch(/alt="[^"]{20,}"/);
      expect(figure).toMatch(/width="\d+"/);expect(figure).toMatch(/height="\d+"/);
      expect(figure).toContain('loading="lazy"');expect(figure).toContain('<figcaption>');
      expect(figure).toContain(`href="${src![1]}"`);expect(figure).toContain('Open full-size screenshot');
    }
  }
});

it.skipIf(!inMonorepo)('makes article screenshots available at the staff preview origin',()=>{
  for(const filename of readdirSync('src/content/articles').filter(f=>f.endsWith('.md'))){
    const article=parseArticle(readFileSync(`src/content/articles/${filename}`,'utf8'));
    for(const [,asset] of article.body.matchAll(/<(?:img|source)[^>]*\bsrc(?:set)?="(\/screenshots\/[^" ]+\.webp)"/g)){
      const staffAsset=`../admin/public${asset}`;
      expect(existsSync(staffAsset),staffAsset).toBe(true);
      expect(readFileSync(staffAsset).equals(readFileSync(`public${asset}`)),staffAsset).toBe(true);
    }
  }
},60000);

it('publishes the reviewed cloud-import batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [['hc-import-google-drive','/integrations/google-drive'],['hc-import-onedrive','/integrations/onedrive'],['hc-import-dropbox','/integrations/dropbox']]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});

it('publishes the reviewed getting-started batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-create-account','/account/create-and-verify-account'],
    ['hc-navigate-web-app','/account/navigate-web-app'],
    ['hc-create-workspace-region','/workspaces/create-and-choose-region'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});

it('publishes the reviewed app, free-plan and support batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-choose-app','/account/choose-app'],
    ['hc-free-plan','/account/free-plan-allowances'],
    ['hc-contact-support','/troubleshooting/contact-support'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});

it('publishes the reviewed large-upload, transfer-state and cancellation batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-large-upload','/uploading/large-files'],
    ['hc-upload-states','/uploading/progress-and-states'],
    ['hc-cancel-upload','/uploading/cancel-upload'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});

it('publishes the reviewed download, transfer-speed and storage-usage batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-download-files','/uploading/download-files'],
    ['hc-slow-transfer','/troubleshooting/slow-transfer'],
    ['hc-storage-usage','/uploading/storage-usage'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});

it('publishes the reviewed organization, move-and-rename and search batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-organize-files','/files/organize-files'],
    ['hc-move-rename','/files/move-and-rename'],
    ['hc-search-files','/files/search-files'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});

it('publishes the reviewed preview, permanent-delete and duplicate-review batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-preview-files','/files/preview-files'],
    ['hc-permanent-delete','/files/permanently-delete-files'],
    ['hc-review-duplicates','/files/review-duplicates'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});

it('publishes the reviewed collaboration and link-controls batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-lock-hide','/files/lock-and-hide'],
    ['hc-file-comments','/files/comments-and-replies'],
    ['hc-link-expiry','/sharing/link-expiry'],
    ['hc-named-recipients','/sharing/named-recipients'],
    ['hc-link-activity','/sharing/link-activity'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});

it('publishes the reviewed link-troubleshooting and file-request batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-unavailable-link','/sharing/unavailable-link'],
    ['hc-request-limits','/sharing/request-limits'],
    ['hc-request-password','/sharing/request-password'],
    ['hc-request-recipients','/sharing/request-recipients'],
    ['hc-request-upload','/sharing/request-upload'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});

it('publishes the reviewed request-management and desktop-control batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-request-manage','/sharing/manage-file-request'],
    ['hc-request-troubleshoot','/sharing/troubleshoot-file-request'],
    ['hc-desktop-sync-exclusions','/desktop/sync-exclusions'],
    ['hc-desktop-sync-control','/desktop/pause-resume-sync'],
    ['hc-desktop-one-off-upload','/desktop/upload-without-sync'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});

it('publishes the reviewed workspace administration batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-workspace-invite-links','/workspaces/invite-links'],
    ['hc-workspace-roles','/workspaces/roles'],
    ['hc-workspace-folder-access','/workspaces/folder-access'],
    ['hc-workspace-activity','/workspaces/activity'],
    ['hc-workspace-member-removal','/workspaces/member-removal'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});

it('publishes the reviewed workspace policy and account recovery batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-workspace-policies','/workspaces/policies'],
    ['hc-password-reset','/account/reset-password'],
    ['hc-profile-settings','/account/profile-settings'],
    ['hc-two-factor-recovery','/account/two-factor-recovery'],
    ['hc-suspicious-activity','/account/suspicious-activity'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});

it('publishes the reviewed account-deletion and Vault batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-account-deletion','/account/delete-account'],
    ['hc-vault-overview','/files/vault-overview'],
    ['hc-vault-setup','/files/vault-setup'],
    ['hc-vault-files','/files/vault-files'],
    ['hc-vault-recovery','/files/vault-recovery'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});

it('publishes the reviewed workspace journey, Vault access and remote-download batch',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-switch-workspaces','/account/switch-workspaces'],
    ['hc-first-upload-share','/uploading/first-upload-and-share'],
    ['hc-vault-members','/files/vault-member-access'],
    ['hc-vault-unlock-troubleshooting','/troubleshooting/vault-unlock'],
    ['hc-remote-download','/integrations/remote-download'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed cloud import management batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-cloud-import-connect','/integrations/connect-cloud-account'],
    ['hc-cloud-import-destination','/integrations/import-destination'],
    ['hc-cloud-import-progress','/integrations/import-progress'],
    ['hc-cloud-import-disconnect','/integrations/disconnect-cloud-account'],
    ['hc-cloud-import-troubleshoot','/troubleshooting/cloud-imports'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed billing and plan management batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-plan-choose','/account/choose-plan'],
    ['hc-plan-upgrade-storage','/account/upgrade-storage'],
    ['hc-plan-cancel-downgrade','/account/cancel-or-downgrade'],
    ['hc-billing-invoices','/account/invoices-and-payment'],
    ['hc-billing-troubleshoot','/troubleshooting/billing'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed referral and license storage batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-referrals-earn','/account/referral-storage'],
    ['hc-referrals-troubleshoot','/troubleshooting/referral-rewards'],
    ['hc-license-redeem','/account/redeem-license'],
    ['hc-license-manage','/account/manage-license-storage'],
    ['hc-checkout-verify','/account/verify-plan-change'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed API key security batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-api-key-scopes','/developers/api-key-scopes'],
    ['hc-api-key-folder','/developers/api-key-folder-access'],
    ['hc-api-key-protocols','/developers/api-key-protocols'],
    ['hc-api-key-revoke','/developers/revoke-api-key'],
    ['hc-rest-api-connect','/developers/rest-api-quickstart'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed CLI workflows batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-cli-install','/developers/cli-install'],
    ['hc-cli-auth','/developers/cli-authenticate'],
    ['hc-cli-workspace','/developers/cli-workspace'],
    ['hc-cli-transfer','/developers/cli-transfer'],
    ['hc-cli-troubleshoot','/troubleshooting/cli'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed S3 and SFTP protocols batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-s3-connect','/integrations/s3-connect'],
    ['hc-s3-permissions','/developers/s3-permissions'],
    ['hc-s3-troubleshoot','/troubleshooting/s3'],
    ['hc-sftp-connect','/integrations/sftp-connect'],
    ['hc-sftp-troubleshoot','/troubleshooting/sftp'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed webhook operations batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-webhook-create','/developers/webhook-create'],
    ['hc-webhook-events','/developers/webhook-events'],
    ['hc-webhook-signature','/developers/webhook-signatures'],
    ['hc-webhook-deliveries','/developers/webhook-deliveries'],
    ['hc-webhook-troubleshoot','/troubleshooting/webhooks'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed automation platforms batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-wordpress-connect','/integrations/wordpress-connect'],
    ['hc-wordpress-backups','/integrations/wordpress-backups'],
    ['hc-n8n-connect','/integrations/n8n-connect'],
    ['hc-n8n-workflow','/integrations/n8n-workflow'],
    ['hc-zapier-troubleshoot','/troubleshooting/zapier'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed mobile setup batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-install','/account/mobile-install'],
    ['hc-mobile-signin','/account/mobile-sign-in'],
    ['hc-mobile-backup-setup','/files/mobile-photo-backup'],
    ['hc-mobile-permissions','/account/mobile-permissions'],
    ['hc-mobile-backup-settings','/files/mobile-backup-settings'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed mobile daily use batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-backup-progress','/files/mobile-backup-progress'],
    ['hc-mobile-background','/troubleshooting/mobile-background-backup'],
    ['hc-mobile-browse','/files/mobile-browse-files'],
    ['hc-mobile-share','/sharing/mobile-share'],
    ['hc-mobile-change-phone','/account/mobile-change-phone'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed profile and preferences batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-notification-preferences','/account/notification-preferences'],
    ['hc-email-notifications','/account/email-notifications'],
    ['hc-appearance-theme','/account/appearance'],
    ['hc-identity-methods','/account/identity-and-sign-in'],
    ['hc-account-workspaces','/account/manage-workspaces'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed advanced file tools batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-edit-text','/files/edit-text'],
    ['hc-media-preview','/files/media-preview-controls'],
    ['hc-archive-preview','/files/archive-preview'],
    ['hc-live-photos','/files/live-photos'],
    ['hc-file-map','/files/file-map'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed sharing branding and analytics batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-share-branding','/sharing/custom-branding'],
    ['hc-share-analytics','/sharing/analytics'],
    ['hc-share-analytics-export','/sharing/export-analytics'],
    ['hc-share-preview-branding','/sharing/preview-branding'],
    ['hc-share-delivery-audit','/sharing/audit-delivery'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed AI app connections batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-ai-app-connect','/integrations/ai-app-connect'],
    ['hc-ai-app-permissions','/integrations/ai-app-permissions'],
    ['hc-ai-app-disconnect','/integrations/disconnect-ai-app'],
    ['hc-mcp-connect','/developers/mcp-connect'],
    ['hc-mcp-troubleshoot','/troubleshooting/mcp'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed workspace operations and support batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-workspace-branding','/workspaces/branding'],
    ['hc-workspace-storage-allocation','/workspaces/storage-allocation'],
    ['hc-workspace-region-routing','/workspaces/region-and-routing'],
    ['hc-notification-troubleshoot','/troubleshooting/notifications'],
    ['hc-support-privacy','/troubleshooting/support-privacy'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed file details and copy batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-file-details','/files/file-details'],
    ['hc-copy-file','/files/copy-file'],
    ['hc-copy-name-conflict','/files/copy-name-conflict'],
    ['hc-file-breadcrumbs','/files/file-breadcrumbs'],
    ['hc-file-origin-details','/files/file-origin-details'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed batch file actions batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-select-multiple-files','/files/select-multiple-files'],
    ['hc-batch-move-files','/files/batch-move-files'],
    ['hc-batch-delete-files','/files/batch-delete-files'],
    ['hc-batch-add-group','/files/batch-add-group'],
    ['hc-clear-file-selection','/files/clear-file-selection'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed folder management batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-create-folder','/files/create-folder'],
    ['hc-rename-folder','/files/rename-folder'],
    ['hc-move-folder','/files/move-folder'],
    ['hc-browse-folder-tree','/files/browse-folder-tree'],
    ['hc-folder-name-conflict','/files/folder-name-conflict'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed trash and restore batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-trash-file','/files/trash-file'],
    ['hc-trash-folder','/files/trash-folder'],
    ['hc-restore-folder-tree','/files/restore-folder-tree'],
    ['hc-review-deleted-items','/files/review-deleted-items'],
    ['hc-trash-retention','/files/trash-retention'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed file and folder protection batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-lock-folder','/files/lock-folder'],
    ['hc-unlock-file','/files/unlock-file'],
    ['hc-hide-folder','/files/hide-folder'],
    ['hc-unhide-item','/files/unhide-item'],
    ['hc-folder-restriction-inheritance','/files/folder-restriction-inheritance'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed favourites and groups batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-favourite-file','/files/favourite-file'],
    ['hc-favourite-folder','/files/favourite-folder'],
    ['hc-remove-favourite','/files/remove-favourite'],
    ['hc-rename-group','/files/rename-group'],
    ['hc-remove-from-group','/files/remove-from-group'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed search, sort and views batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-search-file-type','/files/search-file-type'],
    ['hc-sort-files','/files/sort-files'],
    ['hc-search-current-folder','/files/search-current-folder'],
    ['hc-file-list-grid','/files/file-list-grid'],
    ['hc-clear-file-filters','/files/clear-file-filters'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed browser download archives batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-download-folder-archive','/uploading/download-folder-archive'],
    ['hc-download-selection-archive','/uploading/download-selection-archive'],
    ['hc-verify-downloaded-archive','/uploading/verify-downloaded-archive'],
    ['hc-large-folder-download','/uploading/large-folder-download'],
    ['hc-folder-download-troubleshoot','/uploading/folder-download-troubleshoot'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed archive tools batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-archive-browse','/files/archive-browse'],
    ['hc-archive-entry-preview','/files/archive-entry-preview'],
    ['hc-archive-save-entry','/files/archive-save-entry'],
    ['hc-archive-download-entry','/files/archive-download-entry'],
    ['hc-archive-preview-troubleshoot','/files/archive-preview-troubleshoot'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed media and document previews batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-pdf-preview','/files/pdf-preview'],
    ['hc-audio-metadata','/files/audio-metadata'],
    ['hc-audio-lyrics','/files/audio-lyrics'],
    ['hc-audio-queue','/files/audio-queue'],
    ['hc-video-preview-controls','/files/video-preview-controls'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed mobile file actions batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-download-file','/files/mobile-download-file'],
    ['hc-mobile-save-device','/files/mobile-save-device'],
    ['hc-mobile-rename-file','/files/mobile-rename-file'],
    ['hc-mobile-move-file','/files/mobile-move-file'],
    ['hc-mobile-delete-restore','/files/mobile-delete-restore'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed mobile backup controls batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-backup-albums','/files/mobile-backup-albums'],
    ['hc-mobile-backup-network','/files/mobile-backup-network'],
    ['hc-mobile-backup-charging','/files/mobile-backup-charging'],
    ['hc-mobile-backup-live-media','/files/mobile-backup-live-media'],
    ['hc-mobile-backup-attention','/files/mobile-backup-attention'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed mobile account security batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-biometric-lock','/account/mobile-biometric-lock'],
    ['hc-mobile-oauth-signin','/account/mobile-oauth-signin'],
    ['hc-mobile-two-factor-signin','/account/mobile-two-factor-signin'],
    ['hc-mobile-switch-account','/account/mobile-switch-account'],
    ['hc-mobile-signout','/account/mobile-signout'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed mobile contact backup batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-contacts-backup','/files/contacts-backup'],
    ['hc-contacts-restore','/files/contacts-restore'],
    ['hc-contacts-vcard-export','/files/contacts-vcard-export'],
    ['hc-contacts-source','/files/contacts-source'],
    ['hc-contacts-permission-troubleshoot','/files/contacts-permission-troubleshoot'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed in-car audio batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-carplay-browse-library','/files/carplay-browse-library'],
    ['hc-carplay-search','/files/carplay-search'],
    ['hc-carplay-recents','/files/carplay-recents'],
    ['hc-carplay-voice','/files/carplay-voice'],
    ['hc-carplay-now-playing','/files/carplay-now-playing'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed desktop app lifecycle batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-desktop-launch-login','/desktop/desktop-launch-login'],
    ['hc-desktop-system-tray','/desktop/desktop-system-tray'],
    ['hc-desktop-check-updates','/desktop/desktop-check-updates'],
    ['hc-desktop-store-updates','/desktop/desktop-store-updates'],
    ['hc-desktop-problem-report','/desktop/desktop-problem-report'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed advanced desktop sync batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-desktop-sync-offline','/desktop/desktop-sync-offline'],
    ['hc-desktop-first-sync','/desktop/desktop-first-sync'],
    ['hc-desktop-deletion-guard','/desktop/desktop-deletion-guard'],
    ['hc-desktop-sync-reconnect','/desktop/desktop-sync-reconnect'],
    ['hc-desktop-transfer-concurrency','/desktop/desktop-transfer-concurrency'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed browser extension workflows batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-extension-save-folder','/extension/extension-save-folder'],
    ['hc-extension-save-screenshot','/extension/extension-save-screenshot'],
    ['hc-extension-save-selection','/extension/extension-save-selection'],
    ['hc-extension-reconnect','/extension/extension-reconnect'],
    ['hc-extension-permissions','/extension/extension-permissions'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed account privacy and access batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-account-data-export','/account/account-data-export'],
    ['hc-cancel-account-deletion','/account/cancel-account-deletion'],
    ['hc-change-display-name','/account/change-display-name'],
    ['hc-revoke-other-sessions','/account/revoke-other-sessions'],
    ['hc-security-notifications','/account/security-notifications'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed billing, receipts and promotions batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-billing-apply-coupon','/account/billing-apply-coupon'],
    ['hc-billing-download-receipt','/account/billing-download-receipt'],
    ['hc-billing-portal','/account/billing-portal'],
    ['hc-billing-intervals','/account/billing-intervals'],
    ['hc-billing-pending-downgrade','/account/billing-pending-downgrade'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed workspace dashboard and members batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-workspace-dashboard','/workspaces/workspace-dashboard'],
    ['hc-workspace-pending-invites','/workspaces/workspace-pending-invites'],
    ['hc-workspace-resend-invite','/workspaces/workspace-resend-invite'],
    ['hc-workspace-change-role','/workspaces/workspace-change-role'],
    ['hc-workspace-delete-preview','/workspaces/workspace-delete-preview'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed advanced sharing delivery batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-share-file-bundle','/sharing/share-file-bundle'],
    ['hc-share-email-message','/sharing/share-email-message'],
    ['hc-share-recipient-verification','/sharing/share-recipient-verification'],
    ['hc-share-download-control','/sharing/share-download-control'],
    ['hc-share-access-event','/sharing/share-access-event'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed file request operations batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-request-destination-folder','/sharing/request-destination-folder'],
    ['hc-request-review-uploads','/sharing/request-review-uploads'],
    ['hc-request-resend-invite','/sharing/request-resend-invite'],
    ['hc-request-remove-recipient','/sharing/request-remove-recipient'],
    ['hc-request-failed-submission','/sharing/request-failed-submission'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed REST API file workflows batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-api-list-files','/developers/api-list-files'],
    ['hc-api-upload-file','/developers/api-upload-file'],
    ['hc-api-download-file','/developers/api-download-file'],
    ['hc-api-folder-operations','/developers/api-folder-operations'],
    ['hc-api-errors-pagination','/developers/api-errors-pagination'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed protocol client workflows batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-webdav-cyberduck','/integrations/webdav-cyberduck'],
    ['hc-rclone-download','/integrations/rclone-download'],
    ['hc-s3-endpoint-region','/integrations/s3-endpoint-region'],
    ['hc-sftp-restricted-key','/integrations/sftp-restricted-key'],
    ['hc-rotate-protocol-key','/integrations/rotate-protocol-key'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Lightroom Classic setup batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-lightroom-plugin-install','/integrations/lightroom-plugin-install'],
    ['hc-lightroom-connect-catalog','/integrations/lightroom-connect-catalog'],
    ['hc-lightroom-choose-workspace','/integrations/lightroom-choose-workspace'],
    ['hc-lightroom-review-connections','/integrations/lightroom-review-connections'],
    ['hc-lightroom-revoke-connection','/integrations/lightroom-revoke-connection'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Lightroom gallery publishing batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-lightroom-configure-publish-service','/integrations/lightroom-configure-publish-service'],
    ['hc-lightroom-create-published-collection','/integrations/lightroom-create-published-collection'],
    ['hc-lightroom-publish-gallery','/integrations/lightroom-publish-gallery'],
    ['hc-lightroom-republish-edits','/integrations/lightroom-republish-edits'],
    ['hc-lightroom-gallery-collection-sets','/integrations/lightroom-gallery-collection-sets'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Lightroom gallery options batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-lightroom-edit-gallery-options','/integrations/lightroom-edit-gallery-options'],
    ['hc-lightroom-enable-client-favourites','/integrations/lightroom-enable-client-favourites'],
    ['hc-lightroom-gallery-password','/integrations/lightroom-gallery-password'],
    ['hc-lightroom-gallery-expiry','/integrations/lightroom-gallery-expiry'],
    ['hc-lightroom-gallery-downloads','/integrations/lightroom-gallery-downloads'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Lightroom client selections batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-lightroom-copy-gallery-link','/integrations/lightroom-copy-gallery-link'],
    ['hc-lightroom-collect-client-favourites','/integrations/lightroom-collect-client-favourites'],
    ['hc-lightroom-sync-client-selections','/integrations/lightroom-sync-client-selections'],
    ['hc-lightroom-selected-by-field','/integrations/lightroom-selected-by-field'],
    ['hc-lightroom-client-selection-collections','/integrations/lightroom-client-selection-collections'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Lightroom export and archive batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-lightroom-export-to-dosya','/integrations/lightroom-export-to-dosya'],
    ['hc-lightroom-export-create-gallery','/integrations/lightroom-export-create-gallery'],
    ['hc-lightroom-archive-originals','/integrations/lightroom-archive-originals'],
    ['hc-lightroom-archive-xmp-sidecars','/integrations/lightroom-archive-xmp-sidecars'],
    ['hc-lightroom-resume-archive-upload','/integrations/lightroom-resume-archive-upload'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Workspace activity log batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-activity-open-log','/workspaces/activity-open-log'],
    ['hc-activity-filter-category','/workspaces/activity-filter-category'],
    ['hc-activity-filter-member','/workspaces/activity-filter-member'],
    ['hc-activity-filter-action','/workspaces/activity-filter-action'],
    ['hc-activity-inspect-event-details','/workspaces/activity-inspect-event-details'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Notification inbox batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-notifications-open-inbox','/account/notifications-open-inbox'],
    ['hc-notifications-review-by-day','/account/notifications-review-by-day'],
    ['hc-notifications-open-resource','/account/notifications-open-resource'],
    ['hc-notifications-load-older','/account/notifications-load-older'],
    ['hc-notifications-empty-inbox','/account/notifications-empty-inbox'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Notification delivery settings batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-notifications-delivery-channels','/account/notifications-delivery-channels'],
    ['hc-notifications-event-groups','/account/notifications-event-groups'],
    ['hc-notifications-enable-browser-push','/account/notifications-enable-browser-push'],
    ['hc-notifications-always-on','/account/notifications-always-on'],
    ['hc-notifications-preference-save-error','/account/notifications-preference-save-error'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed File comments and replies batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-comments-open-file-thread','/files/comments-open-file-thread'],
    ['hc-comments-add-file-comment','/files/comments-add-file-comment'],
    ['hc-comments-reply-to-thread','/files/comments-reply-to-thread'],
    ['hc-comments-edit-own-comment','/files/comments-edit-own-comment'],
    ['hc-comments-delete-own-comment','/files/comments-delete-own-comment'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Browser text editing batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-text-editor-open-file','/files/text-editor-open-file'],
    ['hc-text-editor-save-changes','/files/text-editor-save-changes'],
    ['hc-text-editor-find-in-file','/files/text-editor-find-in-file'],
    ['hc-text-editor-version-conflict','/files/text-editor-version-conflict'],
    ['hc-text-editor-unavailable','/files/text-editor-unavailable'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Duplicate file cleanup batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-duplicates-run-scan','/files/duplicates-run-scan'],
    ['hc-duplicates-review-group','/files/duplicates-review-group'],
    ['hc-duplicates-select-all-but-newest','/files/duplicates-select-all-but-newest'],
    ['hc-duplicates-delete-selected','/files/duplicates-delete-selected'],
    ['hc-duplicates-troubleshoot-scan','/files/duplicates-troubleshoot-scan'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Photo map workflows batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-map-open-photos','/files/map-open-photos'],
    ['hc-map-expand-clusters','/files/map-expand-clusters'],
    ['hc-map-filter-files','/files/map-filter-files'],
    ['hc-map-open-marker-file','/files/map-open-marker-file'],
    ['hc-map-missing-photo','/files/map-missing-photo'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Document and data previews batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-preview-office-document','/files/preview-office-document'],
    ['hc-preview-ebook','/files/preview-ebook'],
    ['hc-preview-csv-table','/files/preview-csv-table'],
    ['hc-preview-vcard-contact','/files/preview-vcard-contact'],
    ['hc-preview-unsupported-download','/files/preview-unsupported-download'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Advanced audio playback batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-audio-waveform-seek','/files/audio-waveform-seek'],
    ['hc-audio-repeat-shuffle','/files/audio-repeat-shuffle'],
    ['hc-audio-keyboard-controls','/files/audio-keyboard-controls'],
    ['hc-audio-artwork-metadata','/files/audio-artwork-metadata'],
    ['hc-audio-lyrics-troubleshoot','/files/audio-lyrics-troubleshoot'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Mobile activity and notifications batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-activity-open','/account/mobile-activity-open'],
    ['hc-mobile-activity-filter','/account/mobile-activity-filter'],
    ['hc-mobile-notifications-inbox','/account/mobile-notifications-inbox'],
    ['hc-mobile-notification-action','/account/mobile-notification-action'],
    ['hc-mobile-push-troubleshoot','/account/mobile-push-troubleshoot'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Mobile document previews batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-preview-office','/files/mobile-preview-office'],
    ['hc-mobile-preview-ebook','/files/mobile-preview-ebook'],
    ['hc-mobile-preview-csv','/files/mobile-preview-csv'],
    ['hc-mobile-preview-vcard','/files/mobile-preview-vcard'],
    ['hc-mobile-preview-code-markdown','/files/mobile-preview-code-markdown'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Mobile file tools batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-archive-browse','/files/mobile-archive-browse'],
    ['hc-mobile-archive-save-entry','/files/mobile-archive-save-entry'],
    ['hc-mobile-duplicates-review','/files/mobile-duplicates-review'],
    ['hc-mobile-photo-map','/files/mobile-photo-map'],
    ['hc-mobile-file-details','/files/mobile-file-details'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Mobile backup status and widgets batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-backup-status-ring','/files/mobile-backup-status-ring'],
    ['hc-mobile-backup-history','/files/mobile-backup-history'],
    ['hc-mobile-backup-retry-failed','/files/mobile-backup-retry-failed'],
    ['hc-mobile-backup-widget-android','/files/mobile-backup-widget-android'],
    ['hc-mobile-backup-widget-ios','/files/mobile-backup-widget-ios'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Desktop file viewer batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-desktop-file-details','/desktop/desktop-file-details'],
    ['hc-desktop-archive-viewer','/desktop/desktop-archive-viewer'],
    ['hc-desktop-office-preview','/desktop/desktop-office-preview'],
    ['hc-desktop-vcard-preview','/desktop/desktop-vcard-preview'],
    ['hc-desktop-find-in-text','/desktop/desktop-find-in-text'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Desktop navigation and notifications batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-desktop-search-shortcut','/desktop/desktop-search-shortcut'],
    ['hc-desktop-open-from-tray','/desktop/desktop-open-from-tray'],
    ['hc-desktop-notifications-inbox','/desktop/desktop-notifications-inbox'],
    ['hc-desktop-switch-workspaces','/desktop/desktop-switch-workspaces'],
    ['hc-desktop-deep-link-troubleshoot','/desktop/desktop-deep-link-troubleshoot'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Cloud import operations batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-cloud-import-browse-provider','/integrations/cloud-import-browse-provider'],
    ['hc-cloud-import-cancel','/integrations/cloud-import-cancel'],
    ['hc-cloud-import-reconnect-expired','/integrations/cloud-import-reconnect-expired'],
    ['hc-cloud-import-duplicate-names','/integrations/cloud-import-duplicate-names'],
    ['hc-cloud-import-verify-folders','/integrations/cloud-import-verify-folders'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Remote download operations batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-remote-download-start','/integrations/remote-download-start'],
    ['hc-remote-download-destination','/integrations/remote-download-destination'],
    ['hc-remote-download-monitor','/integrations/remote-download-monitor'],
    ['hc-remote-download-cancel','/integrations/remote-download-cancel'],
    ['hc-remote-download-errors','/integrations/remote-download-errors'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed WordPress backup operations batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-wordpress-plugin-install','/integrations/wordpress-plugin-install'],
    ['hc-wordpress-connect-workspace','/integrations/wordpress-connect-workspace'],
    ['hc-wordpress-review-backup-status','/integrations/wordpress-review-backup-status'],
    ['hc-wordpress-open-backup-folder','/integrations/wordpress-open-backup-folder'],
    ['hc-wordpress-disconnect-site','/integrations/wordpress-disconnect-site'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Zapier and n8n automation batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-zapier-new-file-trigger','/integrations/zapier-new-file-trigger'],
    ['hc-zapier-upload-file-action','/integrations/zapier-upload-file-action'],
    ['hc-n8n-create-credential','/integrations/n8n-create-credential'],
    ['hc-n8n-create-share-link','/integrations/n8n-create-share-link'],
    ['hc-automation-rotate-api-key','/integrations/automation-rotate-api-key'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Developer operations batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-api-usage-analytics','/developers/api-usage-analytics'],
    ['hc-api-key-expiry-rotation','/developers/api-key-expiry-rotation'],
    ['hc-api-rate-limit-handling','/developers/api-rate-limit-handling'],
    ['hc-webhook-retry-idempotency','/developers/webhook-retry-idempotency'],
    ['hc-webhook-payload-versioning','/developers/webhook-payload-versioning'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Lightroom connection and publish troubleshooting batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-lightroom-connection-code-expired','/integrations/lightroom-connection-code-expired'],
    ['hc-lightroom-connection-browser-not-open','/integrations/lightroom-connection-browser-not-open'],
    ['hc-lightroom-publish-network-failure','/integrations/lightroom-publish-network-failure'],
    ['hc-lightroom-catalog-busy','/integrations/lightroom-catalog-busy'],
    ['hc-lightroom-gallery-missing-online','/integrations/lightroom-gallery-missing-online'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Lightroom gallery lifecycle batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-lightroom-remove-gallery-photo','/integrations/lightroom-remove-gallery-photo'],
    ['hc-lightroom-delete-published-collection','/integrations/lightroom-delete-published-collection'],
    ['hc-lightroom-set-gallery-cover','/integrations/lightroom-set-gallery-cover'],
    ['hc-lightroom-open-gallery-command','/integrations/lightroom-open-gallery-command'],
    ['hc-lightroom-review-gallery-status','/integrations/lightroom-review-gallery-status'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed WordPress backup details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-wordpress-full-vs-incremental','/integrations/wordpress-full-vs-incremental'],
    ['hc-wordpress-verify-backup','/integrations/wordpress-verify-backup'],
    ['hc-wordpress-backup-retention','/integrations/wordpress-backup-retention'],
    ['hc-wordpress-backup-protection-window','/integrations/wordpress-backup-protection-window'],
    ['hc-wordpress-copy-detected-warning','/integrations/wordpress-copy-detected-warning'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed WordPress backup troubleshooting batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-wordpress-backup-failed','/integrations/wordpress-backup-failed'],
    ['hc-wordpress-reconnect-site','/integrations/wordpress-reconnect-site'],
    ['hc-wordpress-site-limit','/integrations/wordpress-site-limit'],
    ['hc-wordpress-plugin-update','/integrations/wordpress-plugin-update'],
    ['hc-wordpress-status-load-error','/integrations/wordpress-status-load-error'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Remote download failure details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-remote-download-direct-url','/integrations/remote-download-direct-url'],
    ['hc-remote-download-address-not-allowed','/integrations/remote-download-address-not-allowed'],
    ['hc-remote-download-unknown-size','/integrations/remote-download-unknown-size'],
    ['hc-remote-download-source-changed','/integrations/remote-download-source-changed'],
    ['hc-remote-download-quota-locked','/integrations/remote-download-quota-locked'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Webhook endpoint management batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-webhook-send-test','/developers/webhook-send-test'],
    ['hc-webhook-rotate-secret','/developers/webhook-rotate-secret'],
    ['hc-webhook-reenable-endpoint','/developers/webhook-reenable-endpoint'],
    ['hc-webhook-redeliver-event','/developers/webhook-redeliver-event'],
    ['hc-webhook-delete-endpoint','/developers/webhook-delete-endpoint'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed API key operations batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-api-key-naming','/developers/api-key-naming'],
    ['hc-api-key-read-only','/developers/api-key-read-only'],
    ['hc-api-key-upload-only','/developers/api-key-upload-only'],
    ['hc-api-key-full-access','/developers/api-key-full-access'],
    ['hc-api-key-last-used','/developers/api-key-last-used'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed REST API upload sessions batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-api-create-upload-session','/developers/api-create-upload-session'],
    ['hc-api-resume-upload-session','/developers/api-resume-upload-session'],
    ['hc-api-upload-idempotency','/developers/api-upload-idempotency'],
    ['hc-api-upload-size-validation','/developers/api-upload-size-validation'],
    ['hc-api-complete-upload-session','/developers/api-complete-upload-session'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Advanced Dosya CLI workflows batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-cli-review-config','/developers/cli-review-config'],
    ['hc-cli-json-output','/developers/cli-json-output'],
    ['hc-cli-upload-directory','/developers/cli-upload-directory'],
    ['hc-cli-download-folder','/developers/cli-download-folder'],
    ['hc-cli-update-version','/developers/cli-update-version'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed S3-compatible client operations batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-s3-aws-cli-connect','/integrations/s3-aws-cli-connect'],
    ['hc-s3-upload-object','/integrations/s3-upload-object'],
    ['hc-s3-download-object','/integrations/s3-download-object'],
    ['hc-s3-list-prefixes','/integrations/s3-list-prefixes'],
    ['hc-s3-path-style-troubleshoot','/integrations/s3-path-style-troubleshoot'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed SFTP client operations batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-sftp-filezilla-connect','/integrations/sftp-filezilla-connect'],
    ['hc-sftp-upload-file','/integrations/sftp-upload-file'],
    ['hc-sftp-download-file','/integrations/sftp-download-file'],
    ['hc-sftp-resume-transfer','/integrations/sftp-resume-transfer'],
    ['hc-sftp-host-key-warning','/integrations/sftp-host-key-warning'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed WebDAV mounted-drive operations batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-webdav-mount-finder','/integrations/webdav-mount-finder'],
    ['hc-webdav-map-windows','/integrations/webdav-map-windows'],
    ['hc-webdav-transfer-files','/integrations/webdav-transfer-files'],
    ['hc-webdav-rename-move','/integrations/webdav-rename-move'],
    ['hc-webdav-lock-permission-errors','/integrations/webdav-lock-permission-errors'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Advanced rclone workflows batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-rclone-sync-dry-run','/integrations/rclone-sync-dry-run'],
    ['hc-rclone-copy-vs-sync','/integrations/rclone-copy-vs-sync'],
    ['hc-rclone-transfer-filters','/integrations/rclone-transfer-filters'],
    ['hc-rclone-check-transfer','/integrations/rclone-check-transfer'],
    ['hc-rclone-retry-timeout','/integrations/rclone-retry-timeout'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Vault in the desktop app batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-desktop-vault-unlock','/desktop/desktop-vault-unlock'],
    ['hc-desktop-vault-spaces','/desktop/desktop-vault-spaces'],
    ['hc-desktop-vault-upload','/desktop/desktop-vault-upload'],
    ['hc-desktop-vault-save-local','/desktop/desktop-vault-save-local'],
    ['hc-desktop-vault-members','/desktop/desktop-vault-members'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Vault in the mobile app batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-vault-unlock','/files/mobile-vault-unlock'],
    ['hc-mobile-vault-browse-space','/files/mobile-vault-browse-space'],
    ['hc-mobile-vault-open-file','/files/mobile-vault-open-file'],
    ['hc-mobile-vault-save-device','/files/mobile-vault-save-device'],
    ['hc-mobile-vault-transfer-progress','/files/mobile-vault-transfer-progress'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Vault recovery and diagnostics batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-vault-verify-recovery-key','/files/vault-verify-recovery-key'],
    ['hc-vault-wrong-workspace','/files/vault-wrong-workspace'],
    ['hc-vault-transfer-stalled','/files/vault-transfer-stalled'],
    ['hc-vault-clear-device-cache','/files/vault-clear-device-cache'],
    ['hc-vault-lost-passphrase-plan','/files/vault-lost-passphrase-plan'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Mobile media viewing batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-image-zoom-pan','/files/mobile-image-zoom-pan'],
    ['hc-mobile-video-playback','/files/mobile-video-playback'],
    ['hc-mobile-live-photo-view','/files/mobile-live-photo-view'],
    ['hc-mobile-audio-playback','/files/mobile-audio-playback'],
    ['hc-mobile-pdf-viewer','/files/mobile-pdf-viewer'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Advanced mobile contacts workflows batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-contacts-account-scope','/files/mobile-contacts-account-scope'],
    ['hc-mobile-contacts-review-before-backup','/files/mobile-contacts-review-before-backup'],
    ['hc-mobile-contacts-export-vcard','/files/mobile-contacts-export-vcard'],
    ['hc-mobile-contacts-restore-account','/files/mobile-contacts-restore-account'],
    ['hc-mobile-contacts-restore-duplicates','/files/mobile-contacts-restore-duplicates'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Desktop map, duplicates, and media batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-desktop-photo-map','/desktop/desktop-photo-map'],
    ['hc-desktop-map-filters','/desktop/desktop-map-filters'],
    ['hc-desktop-map-clusters','/desktop/desktop-map-clusters'],
    ['hc-desktop-duplicates-review','/desktop/desktop-duplicates-review'],
    ['hc-desktop-duplicates-cleanup','/desktop/desktop-duplicates-cleanup'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Desktop media playback batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-desktop-audio-queue','/desktop/desktop-audio-queue'],
    ['hc-desktop-audio-waveform','/desktop/desktop-audio-waveform'],
    ['hc-desktop-audio-lyrics','/desktop/desktop-audio-lyrics'],
    ['hc-desktop-video-playback','/desktop/desktop-video-playback'],
    ['hc-desktop-unsupported-media','/desktop/desktop-unsupported-media'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Sharing-link security controls batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-share-change-password','/sharing/share-change-password'],
    ['hc-share-change-expiry','/sharing/share-change-expiry'],
    ['hc-share-disable-downloads','/sharing/share-disable-downloads'],
    ['hc-share-require-named-recipients','/sharing/share-require-named-recipients'],
    ['hc-share-revoke-after-delivery','/sharing/share-revoke-after-delivery'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Sharing analytics details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-share-read-visitors','/sharing/share-read-visitors'],
    ['hc-share-review-download-events','/sharing/share-review-download-events'],
    ['hc-share-match-recipient-activity','/sharing/share-match-recipient-activity'],
    ['hc-share-export-analytics-details','/sharing/share-export-analytics-details'],
    ['hc-share-investigate-unexpected-activity','/sharing/share-investigate-unexpected-activity'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed File-request owner controls batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-request-edit-instructions','/sharing/request-edit-instructions'],
    ['hc-request-change-destination','/sharing/request-change-destination'],
    ['hc-request-resend-invitation','/sharing/request-resend-invitation'],
    ['hc-request-remove-uploader','/sharing/request-remove-uploader'],
    ['hc-request-close-collection','/sharing/request-close-collection'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Workspace custom roles batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-workspace-create-custom-role','/workspaces/workspace-create-custom-role'],
    ['hc-workspace-role-file-access','/workspaces/workspace-role-file-access'],
    ['hc-workspace-role-sharing-access','/workspaces/workspace-role-sharing-access'],
    ['hc-workspace-role-activity-access','/workspaces/workspace-role-activity-access'],
    ['hc-workspace-assign-custom-role','/workspaces/workspace-assign-custom-role'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Account session and security review batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-sessions-recognize-device','/account/sessions-recognize-device'],
    ['hc-sessions-revoke-one','/account/sessions-revoke-one'],
    ['hc-sessions-location-context','/account/sessions-location-context'],
    ['hc-sessions-secure-after-unknown','/account/sessions-secure-after-unknown'],
    ['hc-account-suspicious-evidence','/account/account-suspicious-evidence'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Upload preparation and preflight batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-upload-confirm-workspace','/uploading/upload-confirm-workspace'],
    ['hc-upload-prepare-file-names','/uploading/upload-prepare-file-names'],
    ['hc-upload-preserve-folder-structure','/uploading/upload-preserve-folder-structure'],
    ['hc-upload-estimate-storage','/uploading/upload-estimate-storage'],
    ['hc-upload-test-one-file','/uploading/upload-test-one-file'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Upload recovery details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-upload-retry-one-item','/uploading/upload-retry-one-item'],
    ['hc-upload-resume-after-network','/uploading/upload-resume-after-network'],
    ['hc-upload-recover-after-refresh','/uploading/upload-recover-after-refresh'],
    ['hc-upload-destination-locked','/uploading/upload-destination-locked'],
    ['hc-upload-record-failure-details','/uploading/upload-record-failure-details'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Download preparation and verification batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-download-choose-method','/uploading/download-choose-method'],
    ['hc-download-archive-preparation','/uploading/download-archive-preparation'],
    ['hc-download-retry-prepared-archive','/uploading/download-retry-prepared-archive'],
    ['hc-download-verify-file','/uploading/download-verify-file'],
    ['hc-download-clean-up-local-copy','/uploading/download-clean-up-local-copy'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Version history operations batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-version-upload-replacement','/files/version-upload-replacement'],
    ['hc-version-compare-details','/files/version-compare-details'],
    ['hc-version-download-previous','/files/version-download-previous'],
    ['hc-version-restore-test','/files/version-restore-test'],
    ['hc-version-vs-copy','/files/version-vs-copy'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed File move and copy safeguards batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-file-choose-move-or-copy','/files/file-choose-move-or-copy'],
    ['hc-file-move-confirm-destination','/files/file-move-confirm-destination'],
    ['hc-file-move-restricted-destination','/files/file-move-restricted-destination'],
    ['hc-file-copy-verify-result','/files/file-copy-verify-result'],
    ['hc-file-move-back','/files/file-move-back'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Deleted-item retention and cleanup batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-trash-identify-item','/files/trash-identify-item'],
    ['hc-trash-restore-original-location','/files/trash-restore-original-location'],
    ['hc-trash-restore-name-conflict','/files/trash-restore-name-conflict'],
    ['hc-trash-delete-selected-permanently','/files/trash-delete-selected-permanently'],
    ['hc-trash-verify-storage-release','/files/trash-verify-storage-release'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed File preview troubleshooting details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-preview-refresh-new-version','/files/preview-refresh-new-version'],
    ['hc-preview-image-load-failure','/files/preview-image-load-failure'],
    ['hc-preview-pdf-load-failure','/files/preview-pdf-load-failure'],
    ['hc-preview-office-processing','/files/preview-office-processing'],
    ['hc-preview-download-unsupported','/files/preview-download-unsupported'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Sharing-link recipient access batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-share-recipient-open-link','/sharing/share-recipient-open-link'],
    ['hc-share-recipient-password','/sharing/share-recipient-password'],
    ['hc-share-recipient-email-verification','/sharing/share-recipient-email-verification'],
    ['hc-share-recipient-download-file','/sharing/share-recipient-download-file'],
    ['hc-share-recipient-report-problem','/sharing/share-recipient-report-problem'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Sharing-link delivery lifecycle batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-share-preflight-private-window','/sharing/share-preflight-private-window'],
    ['hc-share-send-updated-settings','/sharing/share-send-updated-settings'],
    ['hc-share-deliver-file-bundle','/sharing/share-deliver-file-bundle'],
    ['hc-share-confirm-first-access','/sharing/share-confirm-first-access'],
    ['hc-share-close-after-review','/sharing/share-close-after-review'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed File-request uploader workflow batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-request-uploader-confirm-invite','/sharing/request-uploader-confirm-invite'],
    ['hc-request-uploader-check-limits','/sharing/request-uploader-check-limits'],
    ['hc-request-uploader-stage-files','/sharing/request-uploader-stage-files'],
    ['hc-request-uploader-replace-rejected','/sharing/request-uploader-replace-rejected'],
    ['hc-request-uploader-save-receipt','/sharing/request-uploader-save-receipt'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Workspace member lifecycle batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-workspace-member-choose-role','/workspaces/workspace-member-choose-role'],
    ['hc-workspace-member-verify-accepted','/workspaces/workspace-member-verify-accepted'],
    ['hc-workspace-member-add-folder-access','/workspaces/workspace-member-add-folder-access'],
    ['hc-workspace-member-verify-role-change','/workspaces/workspace-member-verify-role-change'],
    ['hc-workspace-member-verify-removal','/workspaces/workspace-member-verify-removal'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Workspace invitation security batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-workspace-invite-review-pending','/workspaces/workspace-invite-review-pending'],
    ['hc-workspace-invite-resend-existing','/workspaces/workspace-invite-resend-existing'],
    ['hc-workspace-invite-revoke-stale','/workspaces/workspace-invite-revoke-stale'],
    ['hc-workspace-invite-correct-email','/workspaces/workspace-invite-correct-email'],
    ['hc-workspace-invite-link-policy-test','/workspaces/workspace-invite-link-policy-test'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Workspace policy enforcement batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-workspace-policy-upload-size','/workspaces/workspace-policy-upload-size'],
    ['hc-workspace-policy-public-links','/workspaces/workspace-policy-public-links'],
    ['hc-workspace-policy-required-expiry','/workspaces/workspace-policy-required-expiry'],
    ['hc-workspace-policy-file-requests','/workspaces/workspace-policy-file-requests'],
    ['hc-workspace-policy-member-test','/workspaces/workspace-policy-member-test'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Workspace storage controls batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-workspace-storage-read-allocation','/workspaces/workspace-storage-read-allocation'],
    ['hc-workspace-storage-calculate-headroom','/workspaces/workspace-storage-calculate-headroom'],
    ['hc-workspace-storage-change-allocation','/workspaces/workspace-storage-change-allocation'],
    ['hc-workspace-storage-member-quota','/workspaces/workspace-storage-member-quota'],
    ['hc-workspace-storage-verify-cleanup','/workspaces/workspace-storage-verify-cleanup'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Notification delivery diagnostics batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-notifications-verify-email-delivery','/account/notifications-verify-email-delivery'],
    ['hc-notifications-recover-browser-permission','/account/notifications-recover-browser-permission'],
    ['hc-notifications-narrow-event-groups','/account/notifications-narrow-event-groups'],
    ['hc-notifications-open-correct-workspace','/account/notifications-open-correct-workspace'],
    ['hc-notifications-fix-reverting-preferences','/account/notifications-fix-reverting-preferences'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Desktop sync planning batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-desktop-sync-plan-mode','/desktop/desktop-sync-plan-mode'],
    ['hc-desktop-sync-review-first-plan','/desktop/desktop-sync-review-first-plan'],
    ['hc-desktop-sync-existing-folder','/desktop/desktop-sync-existing-folder'],
    ['hc-desktop-sync-exclude-temporary','/desktop/desktop-sync-exclude-temporary'],
    ['hc-desktop-sync-check-storage','/desktop/desktop-sync-check-storage'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Desktop sync failure details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-desktop-sync-local-permission','/desktop/desktop-sync-local-permission'],
    ['hc-desktop-sync-invalid-name','/desktop/desktop-sync-invalid-name'],
    ['hc-desktop-sync-local-disk-space','/desktop/desktop-sync-local-disk-space'],
    ['hc-desktop-sync-workspace-quota','/desktop/desktop-sync-workspace-quota'],
    ['hc-desktop-sync-conflict-loop','/desktop/desktop-sync-conflict-loop'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Browser extension capture details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-extension-confirm-workspace','/extension/extension-confirm-workspace'],
    ['hc-extension-edit-save-name','/extension/extension-edit-save-name'],
    ['hc-extension-save-page-image','/extension/extension-save-page-image'],
    ['hc-extension-capture-visible-page','/extension/extension-capture-visible-page'],
    ['hc-extension-verify-saved-item','/extension/extension-verify-saved-item'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Cloud-import provider controls batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-cloud-import-choose-provider-account','/integrations/cloud-import-choose-provider-account'],
    ['hc-cloud-import-review-picker-selection','/integrations/cloud-import-review-picker-selection'],
    ['hc-cloud-import-test-folder','/integrations/cloud-import-test-folder'],
    ['hc-cloud-import-confirm-destination','/integrations/cloud-import-confirm-destination'],
    ['hc-cloud-import-cancel-before-transfer','/integrations/cloud-import-cancel-before-transfer'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Cloud-import result verification batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-cloud-import-compare-counts','/integrations/cloud-import-compare-counts'],
    ['hc-cloud-import-verify-hierarchy','/integrations/cloud-import-verify-hierarchy'],
    ['hc-cloud-import-review-duplicates','/integrations/cloud-import-review-duplicates'],
    ['hc-cloud-import-retry-failed-items','/integrations/cloud-import-retry-failed-items'],
    ['hc-cloud-import-disconnect-after-verify','/integrations/cloud-import-disconnect-after-verify'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Mobile backup recovery details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-backup-limited-photo-access','/files/mobile-backup-limited-photo-access'],
    ['hc-mobile-backup-background-refresh','/files/mobile-backup-background-refresh'],
    ['hc-mobile-backup-battery-restrictions','/files/mobile-backup-battery-restrictions'],
    ['hc-mobile-backup-device-storage-low','/files/mobile-backup-device-storage-low'],
    ['hc-mobile-backup-retry-large-video','/files/mobile-backup-retry-large-video'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Mobile file handling details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-file-confirm-workspace','/files/mobile-file-confirm-workspace'],
    ['hc-mobile-file-open-in-app','/files/mobile-file-open-in-app'],
    ['hc-mobile-file-save-destination','/files/mobile-file-save-destination'],
    ['hc-mobile-file-share-access','/files/mobile-file-share-access'],
    ['hc-mobile-file-remove-local-copy','/files/mobile-file-remove-local-copy'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed REST API read workflows batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-api-list-files-pagination','/developers/api-list-files-pagination'],
    ['hc-api-list-folder-children','/developers/api-list-folder-children'],
    ['hc-api-get-file-metadata','/developers/api-get-file-metadata'],
    ['hc-api-stream-download','/developers/api-stream-download'],
    ['hc-api-file-not-found-vs-forbidden','/developers/api-file-not-found-vs-forbidden'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed REST API mutation safeguards batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-api-create-folder-verify-parent','/developers/api-create-folder-verify-parent'],
    ['hc-api-rename-file','/developers/api-rename-file'],
    ['hc-api-move-file','/developers/api-move-file'],
    ['hc-api-trash-file','/developers/api-trash-file'],
    ['hc-api-verify-mutation','/developers/api-verify-mutation'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Webhook consumer reliability batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-webhook-acknowledge-promptly','/developers/webhook-acknowledge-promptly'],
    ['hc-webhook-deduplicate-deliveries','/developers/webhook-deduplicate-deliveries'],
    ['hc-webhook-handle-out-of-order','/developers/webhook-handle-out-of-order'],
    ['hc-webhook-log-safe-diagnostics','/developers/webhook-log-safe-diagnostics'],
    ['hc-webhook-recover-after-downtime','/developers/webhook-recover-after-downtime'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Account sign-in recovery details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-signin-replace-expired-reset-link','/account/signin-replace-expired-reset-link'],
    ['hc-signin-find-missing-reset-email','/account/signin-find-missing-reset-email'],
    ['hc-signin-resolve-oauth-password-mismatch','/account/signin-resolve-oauth-password-mismatch'],
    ['hc-signin-complete-email-verification','/account/signin-complete-email-verification'],
    ['hc-signin-check-session-after-reset','/account/signin-check-session-after-reset'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Two-factor authentication operations batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-two-factor-scan-qr-safely','/account/two-factor-scan-qr-safely'],
    ['hc-two-factor-confirm-enrollment','/account/two-factor-confirm-enrollment'],
    ['hc-two-factor-store-recovery-codes','/account/two-factor-store-recovery-codes'],
    ['hc-two-factor-move-new-phone','/account/two-factor-move-new-phone'],
    ['hc-two-factor-reenroll-after-recovery','/account/two-factor-reenroll-after-recovery'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Active-session management details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-sessions-identify-current-session','/account/sessions-identify-current-session'],
    ['hc-sessions-compare-last-active','/account/sessions-compare-last-active'],
    ['hc-sessions-revoke-all-others','/account/sessions-revoke-all-others'],
    ['hc-sessions-lost-device-response','/account/sessions-lost-device-response'],
    ['hc-sessions-verify-revoked-device','/account/sessions-verify-revoked-device'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Billing invoice and payment details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-billing-locate-invoice-period','/account/billing-locate-invoice-period'],
    ['hc-billing-distinguish-receipt-invoice','/account/billing-distinguish-receipt-invoice'],
    ['hc-billing-review-invoice-identity','/account/billing-review-invoice-identity'],
    ['hc-billing-update-payment-method','/account/billing-update-payment-method'],
    ['hc-billing-reconcile-invoice-plan','/account/billing-reconcile-invoice-plan'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Plan and storage change details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-plan-estimate-storage-upgrade','/account/plan-estimate-storage-upgrade'],
    ['hc-plan-review-upgrade-checkout','/account/plan-review-upgrade-checkout'],
    ['hc-plan-verify-storage-upgrade','/account/plan-verify-storage-upgrade'],
    ['hc-plan-review-pending-downgrade','/account/plan-review-pending-downgrade'],
    ['hc-plan-prepare-over-quota','/account/plan-prepare-over-quota'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Advanced file search details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-search-exact-file-name','/files/search-exact-file-name'],
    ['hc-search-folder-and-type','/files/search-folder-and-type'],
    ['hc-search-partial-file-name','/files/search-partial-file-name'],
    ['hc-search-clear-stale-filters','/files/search-clear-stale-filters'],
    ['hc-search-distinguish-same-name','/files/search-distinguish-same-name'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Multi-file selection operations batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-selection-contiguous-file-group','/files/selection-contiguous-file-group'],
    ['hc-selection-nonadjacent-files','/files/selection-nonadjacent-files'],
    ['hc-selection-verify-count','/files/selection-verify-count'],
    ['hc-selection-preflight-batch-move','/files/selection-preflight-batch-move'],
    ['hc-selection-clear-after-action','/files/selection-clear-after-action'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Folder protection and access details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-folder-choose-lock-or-restriction','/files/folder-choose-lock-or-restriction'],
    ['hc-folder-set-password-safely','/files/folder-set-password-safely'],
    ['hc-folder-test-inherited-restriction','/files/folder-test-inherited-restriction'],
    ['hc-folder-move-protected-file','/files/folder-move-protected-file'],
    ['hc-folder-remove-protection-retest','/files/folder-remove-protection-retest'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed File comment collaboration details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-comments-start-clear-review-thread','/files/comments-start-clear-review-thread'],
    ['hc-comments-reply-correct-thread','/files/comments-reply-correct-thread'],
    ['hc-comments-correct-own-comment','/files/comments-correct-own-comment'],
    ['hc-comments-delete-accidental-comment','/files/comments-delete-accidental-comment'],
    ['hc-comments-preserve-context-before-version','/files/comments-preserve-context-before-version'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Archive inspection and extraction details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-archive-inspect-folder-tree','/files/archive-inspect-folder-tree'],
    ['hc-archive-preview-supported-entry','/files/archive-preview-supported-entry'],
    ['hc-archive-save-one-entry','/files/archive-save-one-entry'],
    ['hc-archive-download-one-entry','/files/archive-download-one-entry'],
    ['hc-archive-review-nested-paths','/files/archive-review-nested-paths'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Media metadata inspection details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-media-check-image-dimensions','/files/media-check-image-dimensions'],
    ['hc-media-verify-video-duration','/files/media-verify-video-duration'],
    ['hc-media-inspect-audio-tags','/files/media-inspect-audio-tags'],
    ['hc-media-troubleshoot-missing-artwork','/files/media-troubleshoot-missing-artwork'],
    ['hc-media-compare-preview-details','/files/media-compare-preview-details'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Audio playback troubleshooting details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-audio-troubleshoot-no-playback','/files/audio-troubleshoot-no-playback'],
    ['hc-audio-troubleshoot-seek-unavailable','/files/audio-troubleshoot-seek-unavailable'],
    ['hc-audio-troubleshoot-missing-metadata','/files/audio-troubleshoot-missing-metadata'],
    ['hc-audio-troubleshoot-lyrics-timing','/files/audio-troubleshoot-lyrics-timing'],
    ['hc-audio-queue-wrong-track','/files/audio-queue-wrong-track'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Mobile setup and permission details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-install-verified-app','/account/mobile-install-verified-app'],
    ['hc-mobile-choose-correct-account','/account/mobile-choose-correct-account'],
    ['hc-mobile-grant-photo-access','/account/mobile-grant-photo-access'],
    ['hc-mobile-enable-notifications-deliberately','/account/mobile-enable-notifications-deliberately'],
    ['hc-mobile-recheck-permissions-after-update','/account/mobile-recheck-permissions-after-update'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Mobile navigation and search details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mobile-navigate-nested-folder','/files/mobile-navigate-nested-folder'],
    ['hc-mobile-switch-workspace-before-browse','/files/mobile-switch-workspace-before-browse'],
    ['hc-mobile-search-correct-scope','/files/mobile-search-correct-scope'],
    ['hc-mobile-open-same-name-result','/files/mobile-open-same-name-result'],
    ['hc-mobile-return-preview-folder','/files/mobile-return-preview-folder'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Desktop app lifecycle details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-desktop-find-installed-version','/desktop/desktop-find-installed-version'],
    ['hc-desktop-choose-update-path','/desktop/desktop-choose-update-path'],
    ['hc-desktop-restart-safely','/desktop/desktop-restart-safely'],
    ['hc-desktop-review-launch-at-login','/desktop/desktop-review-launch-at-login'],
    ['hc-desktop-uninstall-preserve-cloud-files','/desktop/desktop-uninstall-preserve-cloud-files'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Desktop diagnostics and recovery details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-desktop-read-activity-row','/desktop/desktop-read-activity-row'],
    ['hc-desktop-inspect-issue-details','/desktop/desktop-inspect-issue-details'],
    ['hc-desktop-collect-system-context','/desktop/desktop-collect-system-context'],
    ['hc-desktop-prepare-safe-problem-report','/desktop/desktop-prepare-safe-problem-report'],
    ['hc-desktop-verify-recovery-restart','/desktop/desktop-verify-recovery-restart'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Browser extension troubleshooting details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-extension-popup-not-opening','/extension/extension-popup-not-opening'],
    ['hc-extension-page-permission-denied','/extension/extension-page-permission-denied'],
    ['hc-extension-session-expired','/extension/extension-session-expired'],
    ['hc-extension-destination-missing','/extension/extension-destination-missing'],
    ['hc-extension-save-confirmation-missing','/extension/extension-save-confirmation-missing'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed n8n workflow operation details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-n8n-test-dosya-credential','/integrations/n8n-test-dosya-credential'],
    ['hc-n8n-upload-file-node','/integrations/n8n-upload-file-node'],
    ['hc-n8n-list-files-node','/integrations/n8n-list-files-node'],
    ['hc-n8n-create-share-link-node','/integrations/n8n-create-share-link-node'],
    ['hc-n8n-handle-dosya-node-error','/integrations/n8n-handle-dosya-node-error'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Zapier workflow reliability details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-zapier-reconnect-dosya-account','/integrations/zapier-reconnect-dosya-account'],
    ['hc-zapier-refresh-trigger-sample','/integrations/zapier-refresh-trigger-sample'],
    ['hc-zapier-map-file-identifier','/integrations/zapier-map-file-identifier'],
    ['hc-zapier-inspect-failed-run','/integrations/zapier-inspect-failed-run'],
    ['hc-zapier-retry-without-duplicates','/integrations/zapier-retry-without-duplicates'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed S3-compatible connection reliability details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-s3-fix-signature-time-error','/integrations/s3-fix-signature-time-error'],
    ['hc-s3-correct-endpoint-region','/integrations/s3-correct-endpoint-region'],
    ['hc-s3-resolve-prefix-denied','/integrations/s3-resolve-prefix-denied'],
    ['hc-s3-verify-large-transfer','/integrations/s3-verify-large-transfer'],
    ['hc-s3-rotate-access-key-safely','/integrations/s3-rotate-access-key-safely'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed SFTP connection reliability details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-sftp-resolve-authentication-failure','/integrations/sftp-resolve-authentication-failure'],
    ['hc-sftp-verify-host-key-change','/integrations/sftp-verify-host-key-change'],
    ['hc-sftp-fix-restricted-folder','/integrations/sftp-fix-restricted-folder'],
    ['hc-sftp-retry-interrupted-transfer','/integrations/sftp-retry-interrupted-transfer'],
    ['hc-sftp-disconnect-safely','/integrations/sftp-disconnect-safely'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed WebDAV connection reliability details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-webdav-clear-stale-credentials','/integrations/webdav-clear-stale-credentials'],
    ['hc-webdav-correct-workspace-endpoint','/integrations/webdav-correct-workspace-endpoint'],
    ['hc-webdav-diagnose-read-only','/integrations/webdav-diagnose-read-only'],
    ['hc-webdav-refresh-stale-listing','/integrations/webdav-refresh-stale-listing'],
    ['hc-webdav-remount-safely','/integrations/webdav-remount-safely'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed rclone automation details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-rclone-create-dedicated-remote','/integrations/rclone-create-dedicated-remote'],
    ['hc-rclone-limit-transfer-concurrency','/integrations/rclone-limit-transfer-concurrency'],
    ['hc-rclone-write-safe-job-logs','/integrations/rclone-write-safe-job-logs'],
    ['hc-rclone-schedule-copy-job','/integrations/rclone-schedule-copy-job'],
    ['hc-rclone-verify-exit-status','/integrations/rclone-verify-exit-status'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed Dosya CLI automation details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-cli-separate-profiles','/developers/cli-separate-profiles'],
    ['hc-cli-use-secret-without-printing','/developers/cli-use-secret-without-printing'],
    ['hc-cli-handle-exit-codes','/developers/cli-handle-exit-codes'],
    ['hc-cli-parse-json-output','/developers/cli-parse-json-output'],
    ['hc-cli-verify-scheduled-job','/developers/cli-verify-scheduled-job'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});


it('publishes the reviewed MCP client operation details batch as public, indexed guides',()=>{
  const sitemap=readFileSync('dist/sitemap.xml','utf8');
  const search=JSON.parse(readFileSync('public/search-index.json','utf8'));
  for(const [id,route] of [
    ['hc-mcp-choose-client-config','/developers/mcp-choose-client-config'],
    ['hc-mcp-connect-restricted-credential','/developers/mcp-connect-restricted-credential'],
    ['hc-mcp-list-tools-resources','/developers/mcp-list-tools-resources'],
    ['hc-mcp-test-read-only-operation','/developers/mcp-test-read-only-operation'],
    ['hc-mcp-disconnect-rotate-credential','/developers/mcp-disconnect-rotate-credential'],
  ]){
    const htmlPath=`dist${route}/index.html`;
    expect(existsSync(htmlPath),route).toBe(true);
    expect(readFileSync(htmlPath,'utf8')).toContain(`href="https://help.dosya.dev${route}"`);
    expect(sitemap).toContain(`<loc>https://help.dosya.dev${route}</loc>`);
    expect(search.some((article:any)=>article.articleId===id),id).toBe(true);
  }
});
