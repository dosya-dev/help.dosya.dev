---
{
  "articleId": "hc-webdav-lock-permission-errors",
  "locale": "en",
  "revision": 4,
  "title": "Troubleshoot WebDAV lock and permission errors",
  "summary": "Check key permission, folder restriction, file lock, client cache, and exact server response before retrying. Verify that the permitted operation succeeds or the blocking policy is identified.",
  "category": "integrations",
  "articleSlug": "webdav-lock-permission-errors",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-cyberduck"
  ],
  "keywords": [
    "webdav lock permission errors",
    "WebDAV mounted-drive operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Troubleshoot WebDAV lock and permission errors** in Dosya. The main action is to check key permission, folder restriction, file lock, client cache, and exact server response before retrying; the decisive check is whether the permitted operation succeeds or the blocking policy is identified.

<figure class="help-screenshot"><a href="/screenshots/webdav-lock-permission-errors-help-workflow-2026-10-14.webp"><img src="/screenshots/webdav-lock-permission-errors-help-workflow-2026-10-14.webp" alt="Workflow for “Troubleshoot WebDAV lock and permission errors”: check key permission, folder restriction, file lock, client cache, and exact server response before retrying; the permitted operation succeeds or the blocking policy is identified." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Troubleshoot WebDAV lock and permission errors”: check key permission, folder restriction, file lock, client cache, and exact server response before retrying; the permitted operation succeeds or the blocking policy is identified. <a href="/screenshots/webdav-lock-permission-errors-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a WebDAV client connected to Dosya and locate the operation rejected by the WebDAV client.
- Confirm the active account and workspace, then identify operation rejected by the WebDAV client.

## Steps: troubleshoot WebDAV lock and permission errors

1. Confirm the account and workspace in a WebDAV client connected to Dosya when reviewing the operation rejected by the WebDAV client.
2. Locate operation rejected by the WebDAV client and verify its name or identifying details.
3. Check key permission, folder restriction, file lock, client cache, and exact server response before retrying.
4. Confirm that the permitted operation succeeds or the blocking policy is identified.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Reference for “Troubleshoot WebDAV lock and permission errors”: Dosya WebDAV overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Troubleshoot WebDAV lock and permission errors”: Dosya WebDAV overview page. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a restricted WebDAV key and expect client behavior to vary by operating system.

## Verify the result

After completing the steps, check the expected result: The permitted operation succeeds or the blocking policy is identified.

## Expected result

The controlled workflow completes and the permitted operation succeeds or the blocking policy is identified.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the operation rejected by the WebDAV client, check the active workspace, your role and the client version.

## Related guides

- [Connect WebDAV](/integrations/webdav)
- [Use Cyberduck](/integrations/webdav-cyberduck)
