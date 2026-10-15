---
{
  "articleId": "hc-webdav-diagnose-read-only",
  "locale": "en",
  "revision": 3,
  "title": "Diagnose a read-only WebDAV mount",
  "summary": "Check account role, key scope, folder restriction, lock state, and client mount mode, then repeat one test write. Verify that the blocking permission is identified or the test file is created.",
  "category": "integrations",
  "articleSlug": "webdav-diagnose-read-only",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14.webp"><img src="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14.webp" alt="Four-step workflow map for diagnose a read-only webdav mount, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for diagnose a read-only webdav mount: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a WebDAV client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify mount that lists files but rejects a disposable write.

## Steps: diagnose a read-only WebDAV mount

1. Open a WebDAV client connected to Dosya and confirm the active account and workspace.
2. Locate mount that lists files but rejects a disposable write and verify its name or identifying details.
3. Check account role, key scope, folder restriction, lock state, and client mount mode, then repeat one test write.
4. Confirm that the blocking permission is identified or the test file is created.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV integration overview for mounting and transferring files." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Confirm endpoint, account, and write access with a disposable folder before regular use. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The blocking permission is identified or the test file is created.

## Expected result

The controlled workflow completes and the blocking permission is identified or the test file is created.

## Troubleshooting

**The expected control is missing.** Return to a WebDAV client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Resolve WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
