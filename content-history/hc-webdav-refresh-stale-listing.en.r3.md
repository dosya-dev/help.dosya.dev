---
{
  "articleId": "hc-webdav-refresh-stale-listing",
  "locale": "en",
  "revision": 3,
  "title": "Refresh a stale WebDAV directory listing",
  "summary": "Use the client refresh control, reopen the folder, and remount only if its cache stays stale. Verify that the mounted listing reflects the current Dosya folder.",
  "category": "integrations",
  "articleSlug": "webdav-refresh-stale-listing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/webdav-refresh-stale-listing-help-workflow-2026-10-14.webp"><img src="/screenshots/webdav-refresh-stale-listing-help-workflow-2026-10-14.webp" alt="Four-step workflow map for refresh a stale webdav directory listing, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for refresh a stale webdav directory listing: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/webdav-refresh-stale-listing-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a WebDAV client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify known Dosya change missing from the mounted view.

## Steps: refresh a stale WebDAV directory listing

1. Open a WebDAV client connected to Dosya and confirm the active account and workspace.
2. Locate known Dosya change missing from the mounted view and verify its name or identifying details.
3. Use the client refresh control, reopen the folder, and remount only if its cache stays stale.
4. Confirm that the mounted listing reflects the current Dosya folder.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV integration overview for mounting and transferring files." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Confirm endpoint, account, and write access with a disposable folder before regular use. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The mounted listing reflects the current Dosya folder.

## Expected result

The controlled workflow completes and the mounted listing reflects the current Dosya folder.

## Troubleshooting

**The expected control is missing.** Return to a WebDAV client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Resolve WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
