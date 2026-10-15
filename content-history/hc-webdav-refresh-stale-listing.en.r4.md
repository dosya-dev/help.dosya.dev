---
{
  "articleId": "hc-webdav-refresh-stale-listing",
  "locale": "en",
  "revision": 4,
  "title": "Refresh a stale WebDAV directory listing",
  "summary": "Use the client refresh control, reopen the folder, and remount only if its cache stays stale. Verify that the mounted listing reflects the current Dosya folder.",
  "category": "integrations",
  "articleSlug": "webdav-refresh-stale-listing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-lock-permission-errors"
  ],
  "keywords": [
    "webdav refresh stale listing",
    "WebDAV connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Refresh a stale WebDAV directory listing** in Dosya. The main action is to use the client refresh control, reopen the folder, and remount only if its cache stays stale; the decisive check is whether the mounted listing reflects the current Dosya folder.

<figure class="help-screenshot"><a href="/screenshots/webdav-refresh-stale-listing-help-workflow-2026-10-14.webp"><img src="/screenshots/webdav-refresh-stale-listing-help-workflow-2026-10-14.webp" alt="Workflow for “Refresh a stale WebDAV directory listing”: use the client refresh control, reopen the folder, and remount only if its cache stays stale; the mounted listing reflects the current Dosya folder." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Refresh a stale WebDAV directory listing”: use the client refresh control, reopen the folder, and remount only if its cache stays stale; the mounted listing reflects the current Dosya folder. <a href="/screenshots/webdav-refresh-stale-listing-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a WebDAV client connected to Dosya and locate the known Dosya change missing from the mounted view.
- Confirm the active account and workspace, then identify known Dosya change missing from the mounted view.

## Steps: refresh a stale WebDAV directory listing

1. Confirm the account and workspace in a WebDAV client connected to Dosya when reviewing the known Dosya change missing from the mounted view.
2. Locate known Dosya change missing from the mounted view and verify its name or identifying details.
3. Use the client refresh control, reopen the folder, and remount only if its cache stays stale.
4. Confirm that the mounted listing reflects the current Dosya folder.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Reference for “Refresh a stale WebDAV directory listing”: Dosya WebDAV overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Refresh a stale WebDAV directory listing”: Dosya WebDAV overview page. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Confirm endpoint, account, and write access with a disposable folder before regular use.

## Verify the result

After completing the steps, check the expected result: The mounted listing reflects the current Dosya folder.

## Expected result

The controlled workflow completes and the mounted listing reflects the current Dosya folder.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the known Dosya change missing from the mounted view, check the active workspace, your role and the client version.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Resolve WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
