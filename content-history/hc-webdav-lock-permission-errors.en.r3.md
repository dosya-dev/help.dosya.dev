---
{
  "articleId": "hc-webdav-lock-permission-errors",
  "locale": "en",
  "revision": 3,
  "title": "Troubleshoot WebDAV lock and permission errors",
  "summary": "Check key permission, folder restriction, file lock, client cache, and exact server response before retrying. Verify that the permitted operation succeeds or the blocking policy is identified.",
  "category": "integrations",
  "articleSlug": "webdav-lock-permission-errors",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/webdav-lock-permission-errors-help-workflow-2026-10-14.webp"><img src="/screenshots/webdav-lock-permission-errors-help-workflow-2026-10-14.webp" alt="Four-step workflow map for troubleshoot webdav lock and permission errors, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for troubleshoot webdav lock and permission errors: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/webdav-lock-permission-errors-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a WebDAV client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify operation rejected by the WebDAV client.

## Steps: troubleshoot WebDAV lock and permission errors

1. Open a WebDAV client connected to Dosya and confirm the active account and workspace.
2. Locate operation rejected by the WebDAV client and verify its name or identifying details.
3. Check key permission, folder restriction, file lock, client cache, and exact server response before retrying.
4. Confirm that the permitted operation succeeds or the blocking policy is identified.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV overview for mounted drives and compatible file clients." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a restricted WebDAV key and expect client behavior to vary by operating system. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The permitted operation succeeds or the blocking policy is identified.

## Expected result

The controlled workflow completes and the permitted operation succeeds or the blocking policy is identified.

## Troubleshooting

**The expected control is missing.** Return to a WebDAV client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect WebDAV](/integrations/webdav)
- [Use Cyberduck](/integrations/webdav-cyberduck)
