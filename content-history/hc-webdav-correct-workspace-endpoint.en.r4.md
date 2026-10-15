---
{
  "articleId": "hc-webdav-correct-workspace-endpoint",
  "locale": "en",
  "revision": 4,
  "title": "Correct a WebDAV workspace endpoint",
  "summary": "Copy the documented endpoint, confirm its workspace context, replace the saved URL, and reconnect. Verify that the mount opens the intended Dosya root.",
  "category": "integrations",
  "articleSlug": "webdav-correct-workspace-endpoint",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-lock-permission-errors"
  ],
  "keywords": [
    "webdav correct workspace endpoint",
    "WebDAV connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Correct a WebDAV workspace endpoint** in Dosya. The main action is to copy the documented endpoint, confirm its workspace context, replace the saved URL, and reconnect; the decisive check is whether the mount opens the intended Dosya root.

<figure class="help-screenshot"><a href="/screenshots/webdav-correct-workspace-endpoint-help-workflow-2026-10-14.webp"><img src="/screenshots/webdav-correct-workspace-endpoint-help-workflow-2026-10-14.webp" alt="Workflow for “Correct a WebDAV workspace endpoint”: copy the documented endpoint, confirm its workspace context, replace the saved URL, and reconnect; the mount opens the intended Dosya root." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Correct a WebDAV workspace endpoint”: copy the documented endpoint, confirm its workspace context, replace the saved URL, and reconnect; the mount opens the intended Dosya root. <a href="/screenshots/webdav-correct-workspace-endpoint-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a WebDAV client connected to Dosya and locate the client connected to the wrong root or returning not found.
- Confirm the active account and workspace, then identify client connected to the wrong root or returning not found.

## Steps: correct a WebDAV workspace endpoint

1. Confirm the account and workspace in a WebDAV client connected to Dosya when reviewing the client connected to the wrong root or returning not found.
2. Locate client connected to the wrong root or returning not found and verify its name or identifying details.
3. Copy the documented endpoint, confirm its workspace context, replace the saved URL, and reconnect.
4. Confirm that the mount opens the intended Dosya root.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Reference for “Correct a WebDAV workspace endpoint”: Dosya WebDAV overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Correct a WebDAV workspace endpoint”: Dosya WebDAV overview page. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Confirm endpoint, account, and write access with a disposable folder before regular use.

## Verify the result

After completing the steps, check the expected result: The mount opens the intended Dosya root.

## Expected result

The controlled workflow completes and the mount opens the intended Dosya root.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the client connected to the wrong root or returning not found, check the active workspace, your role and the client version.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Resolve WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
