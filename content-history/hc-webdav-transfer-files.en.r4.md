---
{
  "articleId": "hc-webdav-transfer-files",
  "locale": "en",
  "revision": 4,
  "title": "Upload and download files over WebDAV",
  "summary": "Copy one file in each direction and wait for the client to finish. Verify that both copies appear with the expected sizes.",
  "category": "integrations",
  "articleSlug": "webdav-transfer-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-cyberduck"
  ],
  "keywords": [
    "webdav transfer files",
    "WebDAV mounted-drive operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Upload and download files over WebDAV** in Dosya. The main action is to copy one file in each direction and wait for the client to finish; the decisive check is whether both copies appear with the expected sizes.

<figure class="help-screenshot"><a href="/screenshots/webdav-transfer-files-help-workflow-2026-10-14.webp"><img src="/screenshots/webdav-transfer-files-help-workflow-2026-10-14.webp" alt="Workflow for “Upload and download files over WebDAV”: copy one file in each direction and wait for the client to finish; both copies appear with the expected sizes." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Upload and download files over WebDAV”: copy one file in each direction and wait for the client to finish; both copies appear with the expected sizes. <a href="/screenshots/webdav-transfer-files-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a WebDAV client connected to Dosya and locate the small local and remote test files.
- Confirm the active account and workspace, then identify small local and remote test files.

## Steps: upload and download files over WebDAV

1. Confirm the account and workspace in a WebDAV client connected to Dosya when reviewing the small local and remote test files.
2. Locate small local and remote test files and verify its name or identifying details.
3. Copy one file in each direction and wait for the client to finish.
4. Confirm that both copies appear with the expected sizes.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Reference for “Upload and download files over WebDAV”: Dosya WebDAV overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Upload and download files over WebDAV”: Dosya WebDAV overview page. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a restricted WebDAV key and expect client behavior to vary by operating system.

## Verify the result

After completing the steps, check the expected result: Both copies appear with the expected sizes.

## Expected result

The controlled workflow completes and both copies appear with the expected sizes.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the small local and remote test files, check the active workspace, your role and the client version.

## Related guides

- [Connect WebDAV](/integrations/webdav)
- [Use Cyberduck](/integrations/webdav-cyberduck)
