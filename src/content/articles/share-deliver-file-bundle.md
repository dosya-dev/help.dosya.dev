---
{
  "articleId": "hc-share-deliver-file-bundle",
  "locale": "en",
  "revision": 5,
  "title": "Deliver several files as one share",
  "summary": "Create one link for 1–100 same-workspace files, apply recipient and download controls, then verify the complete public bundle before delivery.",
  "category": "sharing",
  "articleSlug": "share-deliver-file-bundle",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: apps/api/src/lib/share/access.ts, apps/web/src/components/share-modal.tsx, apps/api/src/pages/api/files/share-bundle.ts, apps/api/src/lib/share/recipients.ts, apps/api/src/lib/share/downloads.ts, src/components/share/ShareShell.astro.",
  "related": [
    "hc-create-link",
    "hc-share-delivery-audit"
  ],
  "keywords": [
    "share deliver file bundle",
    "Sharing-link delivery lifecycle",
    "Dosya help",
    "file sharing"
  ]
}
---
A bundle puts several files behind one URL. The selected files must be live, visible, inside your scope, and in one workspace; the link can contain at most 100 files.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-deliver-file-bundle-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-deliver-file-bundle-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-deliver-file-bundle-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-deliver-file-bundle-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-deliver-file-bundle-help-workflow-2026-10-14.webp" alt="Four-step map for selecting same-workspace files, choosing link or email delivery, checking partial send results, and testing every Bundle tile." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Create one link for the reviewed file selection, inspect delivery failures before retrying, and verify the recipient Bundle without promising an archive. <a class="workflow-map-full" href="/screenshots/share-deliver-file-bundle-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-deliver-file-bundle-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-deliver-file-bundle-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In **Files**, select between 1 and 100 live files from the same workspace. You need `create_share_links`, and every selected item must be visible and inside your permitted folder scope.
2. Choose **Share** and confirm the dialog says the selection will use **one link for all of them**. Duplicate IDs, missing files, cross-workspace files, and hidden targets are refused.
3. Choose **By email** for delivery or **By link** for a bearer URL. Email sharing supports at most 50 deduplicated recipient addresses; leave **Only these people can open it** on when forwarding must not grant access.
4. Set **Expires in** and, if needed, a password of at least 8 characters. The bundle endpoint currently persists expiry, password, and recipient access; the web dialog’s view-only, metadata-removal, download-limit, title, and message fields are not applied to bundle creation.
5. Create or send the bundle. A partial result names addresses Dosya could not reach. If every email fails, **Could not send email** appears after the link was created, so check **Shared** before retrying to avoid another live link. Add view-only or a download cap afterward in mobile.
6. Open the resulting URL in a private window and check the file count and names. The page labels it **Bundle**. Open each tile to verify it; the current dock’s **Download all** URL resolves only the bundle’s first file, so do not promise recipients one combined archive.

<figure class="help-screenshot"><a href="/screenshots/share-created-2026-10-10.webp"><img src="/screenshots/share-created-2026-10-10.webp" alt="Share creation confirmation showing the newly created URL and copy control." width="454" height="331" loading="lazy" decoding="async" /></a><figcaption>After the bundle is created, copy its single URL and test that exact address before sending it through the chosen channel. <a href="/screenshots/share-created-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

One active share URL opens the reviewed bundle with its expiry, password, and recipient restriction applied; any later mobile edit keeps that same URL.

**Changing or deleting a source file changes what the share can serve; the bundle is not a detached archive.**
**Creating a new bundle does not revoke any older link covering the same files.**

## Related guides

- [Create a link](/sharing/create-link)
- [Audit delivery](/sharing/audit-delivery)
