---
{
  "articleId": "hc-webdav-remount-safely",
  "locale": "en",
  "revision": 4,
  "title": "Unmount and reconnect WebDAV safely",
  "summary": "Close open files, wait for writes to finish, unmount through the operating system, and reconnect with verified settings. Verify that the remounted folder opens without incomplete writes or duplicate mounts.",
  "category": "integrations",
  "articleSlug": "webdav-remount-safely",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-lock-permission-errors"
  ],
  "keywords": [
    "webdav remount safely",
    "WebDAV connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Unmount and reconnect WebDAV safely** in Dosya. The main action is to close open files, wait for writes to finish, unmount through the operating system, and reconnect with verified settings; the decisive check is whether the remounted folder opens without incomplete writes or duplicate mounts.

<figure class="help-screenshot"><a href="/screenshots/webdav-remount-safely-help-workflow-2026-10-14.webp"><img src="/screenshots/webdav-remount-safely-help-workflow-2026-10-14.webp" alt="Workflow for “Unmount and reconnect WebDAV safely”: close open files, wait for writes to finish, unmount through the operating system, and reconnect with verified settings; the remounted folder opens without incomplete writes or duplicate mounts." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Unmount and reconnect WebDAV safely”: close open files, wait for writes to finish, unmount through the operating system, and reconnect with verified settings; the remounted folder opens without incomplete writes or duplicate mounts. <a href="/screenshots/webdav-remount-safely-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a WebDAV client connected to Dosya and locate the WebDAV mount with completed transfers.
- Confirm the active account and workspace, then identify WebDAV mount with completed transfers.

## Steps: unmount and reconnect WebDAV safely

1. Confirm the account and workspace in a WebDAV client connected to Dosya when reviewing the WebDAV mount with completed transfers.
2. Locate WebDAV mount with completed transfers and verify its name or identifying details.
3. Close open files, wait for writes to finish, unmount through the operating system, and reconnect with verified settings.
4. Confirm that the remounted folder opens without incomplete writes or duplicate mounts.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Reference for “Unmount and reconnect WebDAV safely”: Dosya WebDAV overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Unmount and reconnect WebDAV safely”: Dosya WebDAV overview page. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Confirm endpoint, account, and write access with a disposable folder before regular use.

## Verify the result

After completing the steps, check the expected result: The remounted folder opens without incomplete writes or duplicate mounts.

## Expected result

The controlled workflow completes and the remounted folder opens without incomplete writes or duplicate mounts.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the WebDAV mount with completed transfers, check the active workspace, your role and the client version.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Resolve WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
