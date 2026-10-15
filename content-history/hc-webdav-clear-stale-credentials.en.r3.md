---
{
  "articleId": "hc-webdav-clear-stale-credentials",
  "locale": "en",
  "revision": 3,
  "title": "Clear stale WebDAV credentials",
  "summary": "Disconnect the mount, remove the specific saved Dosya credential from the system credential store, and reconnect with the intended account. Verify that the client authenticates with the current credential and account scope.",
  "category": "integrations",
  "articleSlug": "webdav-clear-stale-credentials",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-lock-permission-errors"
  ],
  "keywords": [
    "webdav clear stale credentials",
    "WebDAV connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Clear stale WebDAV credentials** in Dosya. The main action is to disconnect the mount, remove the specific saved Dosya credential from the system credential store, and reconnect with the intended account; the decisive check is whether the client authenticates with the current credential and account scope.

<figure class="help-screenshot"><a href="/screenshots/webdav-clear-stale-credentials-help-workflow-2026-10-14.webp"><img src="/screenshots/webdav-clear-stale-credentials-help-workflow-2026-10-14.webp" alt="Four-step workflow map for clear stale webdav credentials, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for clear stale webdav credentials: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/webdav-clear-stale-credentials-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a WebDAV client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify WebDAV client repeatedly using an old login.

## Steps: clear stale WebDAV credentials

1. Open a WebDAV client connected to Dosya and confirm the active account and workspace.
2. Locate WebDAV client repeatedly using an old login and verify its name or identifying details.
3. Disconnect the mount, remove the specific saved Dosya credential from the system credential store, and reconnect with the intended account.
4. Confirm that the client authenticates with the current credential and account scope.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV integration overview for mounting and transferring files." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Confirm endpoint, account, and write access with a disposable folder before regular use. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The client authenticates with the current credential and account scope.

## Expected result

The controlled workflow completes and the client authenticates with the current credential and account scope.

## Troubleshooting

**The expected control is missing.** Return to a WebDAV client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Resolve WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
