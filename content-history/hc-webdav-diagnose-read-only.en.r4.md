---
{
  "articleId": "hc-webdav-diagnose-read-only",
  "locale": "en",
  "revision": 4,
  "title": "Diagnose a read-only WebDAV mount",
  "summary": "Check account role, key scope, folder restriction, lock state, and client mount mode, then repeat one test write. Verify that the blocking permission is identified or the test file is created.",
  "category": "integrations",
  "articleSlug": "webdav-diagnose-read-only",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-lock-permission-errors"
  ],
  "keywords": [
    "webdav diagnose read only",
    "WebDAV connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Diagnose a read-only WebDAV mount** in Dosya. The main action is to check account role, key scope, folder restriction, lock state, and client mount mode, then repeat one test write; the decisive check is whether the blocking permission is identified or the test file is created.

<figure class="help-screenshot"><a href="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14.webp"><img src="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14.webp" alt="Workflow for “Diagnose a read-only WebDAV mount”: check account role, key scope, folder restriction, lock state, and client mount mode, then repeat one test write; the blocking permission is identified or the test file is created." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Diagnose a read-only WebDAV mount”: check account role, key scope, folder restriction, lock state, and client mount mode, then repeat one test write; the blocking permission is identified or the test file is created. <a href="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a WebDAV client connected to Dosya and locate the mount that lists files but rejects a disposable write.
- Confirm the active account and workspace, then identify mount that lists files but rejects a disposable write.

## Steps: diagnose a read-only WebDAV mount

1. Confirm the account and workspace in a WebDAV client connected to Dosya when reviewing the mount that lists files but rejects a disposable write.
2. Locate mount that lists files but rejects a disposable write and verify its name or identifying details.
3. Check account role, key scope, folder restriction, lock state, and client mount mode, then repeat one test write.
4. Confirm that the blocking permission is identified or the test file is created.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Reference for “Diagnose a read-only WebDAV mount”: Dosya WebDAV overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Diagnose a read-only WebDAV mount”: Dosya WebDAV overview page. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Confirm endpoint, account, and write access with a disposable folder before regular use.

## Verify the result

After completing the steps, check the expected result: The blocking permission is identified or the test file is created.

## Expected result

The controlled workflow completes and the blocking permission is identified or the test file is created.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the mount that lists files but rejects a disposable write, check the active workspace, your role and the client version.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Resolve WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
