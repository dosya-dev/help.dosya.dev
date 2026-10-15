---
{
  "articleId": "hc-webdav-remount-safely",
  "locale": "en",
  "revision": 3,
  "title": "Unmount and reconnect WebDAV safely",
  "summary": "Close open files, wait for writes to finish, unmount through the operating system, and reconnect with verified settings. Verify that the remounted folder opens without incomplete writes or duplicate mounts.",
  "category": "integrations",
  "articleSlug": "webdav-remount-safely",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/webdav-remount-safely-help-workflow-2026-10-14.webp"><img src="/screenshots/webdav-remount-safely-help-workflow-2026-10-14.webp" alt="Four-step workflow map for unmount and reconnect webdav safely, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for unmount and reconnect webdav safely: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/webdav-remount-safely-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a WebDAV client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify WebDAV mount with completed transfers.

## Steps: unmount and reconnect WebDAV safely

1. Open a WebDAV client connected to Dosya and confirm the active account and workspace.
2. Locate WebDAV mount with completed transfers and verify its name or identifying details.
3. Close open files, wait for writes to finish, unmount through the operating system, and reconnect with verified settings.
4. Confirm that the remounted folder opens without incomplete writes or duplicate mounts.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV integration overview for mounting and transferring files." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Confirm endpoint, account, and write access with a disposable folder before regular use. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The remounted folder opens without incomplete writes or duplicate mounts.

## Expected result

The controlled workflow completes and the remounted folder opens without incomplete writes or duplicate mounts.

## Troubleshooting

**The expected control is missing.** Return to a WebDAV client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Resolve WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
