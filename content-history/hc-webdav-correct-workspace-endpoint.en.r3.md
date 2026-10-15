---
{
  "articleId": "hc-webdav-correct-workspace-endpoint",
  "locale": "en",
  "revision": 3,
  "title": "Correct a WebDAV workspace endpoint",
  "summary": "Copy the documented endpoint, confirm its workspace context, replace the saved URL, and reconnect. Verify that the mount opens the intended Dosya root.",
  "category": "integrations",
  "articleSlug": "webdav-correct-workspace-endpoint",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/webdav-correct-workspace-endpoint-help-workflow-2026-10-14.webp"><img src="/screenshots/webdav-correct-workspace-endpoint-help-workflow-2026-10-14.webp" alt="Four-step workflow map for correct a webdav workspace endpoint, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for correct a webdav workspace endpoint: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/webdav-correct-workspace-endpoint-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a WebDAV client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify client connected to the wrong root or returning not found.

## Steps: correct a WebDAV workspace endpoint

1. Open a WebDAV client connected to Dosya and confirm the active account and workspace.
2. Locate client connected to the wrong root or returning not found and verify its name or identifying details.
3. Copy the documented endpoint, confirm its workspace context, replace the saved URL, and reconnect.
4. Confirm that the mount opens the intended Dosya root.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV integration overview for mounting and transferring files." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Confirm endpoint, account, and write access with a disposable folder before regular use. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The mount opens the intended Dosya root.

## Expected result

The controlled workflow completes and the mount opens the intended Dosya root.

## Troubleshooting

**The expected control is missing.** Return to a WebDAV client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Resolve WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
