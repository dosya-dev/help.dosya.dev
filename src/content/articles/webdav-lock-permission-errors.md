---
{
  "articleId": "hc-webdav-lock-permission-errors",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot WebDAV lock and permission errors",
  "summary": "Distinguish WebDAV 403 permission refusals, 412 precondition conflicts, and 423 content locks, then retry only after fixing the reported cause.",
  "category": "integrations",
  "articleSlug": "webdav-lock-permission-errors",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/pages/webdav/[...path].ts, apps/api/src/lib/webdav/methods/lock.ts, apps/api/src/lib/webdav/methods/put.ts, apps/api/src/lib/webdav/methods/move.ts, apps/api/src/lib/webdav/methods/delete.ts, apps/api/src/lib/webdav/views.ts, and apps/api/src/lib/backup-lock.ts. Production errors were not reproduced.",
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
WebDAV clients often collapse different server responses into “permission denied” or “file locked.” Preserve the HTTP status and body before changing credentials: Dosya uses 403 for authorization/policy refusals, 412 for a failed state precondition, 423 for protected content, and 429 for a rate or usage limit.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webdav-lock-permission-errors-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-lock-permission-errors-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-lock-permission-errors-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webdav-lock-permission-errors-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webdav-lock-permission-errors-help-workflow-2026-10-14.webp" alt="Four-step workflow for capturing the WebDAV status, repairing the named 403 permission, reconciling a 412 precondition, and resolving a 423 product lock." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for capturing the WebDAV status, repairing the named 403 permission, reconciling a 412 precondition, and resolving a 423 product lock. <a class="workflow-map-full" href="/screenshots/webdav-lock-permission-errors-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-lock-permission-errors-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-lock-permission-errors-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Dosya advertises class-2 WebDAV locking for client compatibility. A normal LOCK receives an opaque token with a one-hour timeout, but that token is not a persistent Dosya content lock. Real 423 responses come from file/folder protection, an ancestor lock, a sealed Vault destination, or a locked WordPress backup.

## Steps

1. Stop automatic retries and record the verb, source path, destination path, HTTP status, response text, time, and client version. Remove authorization headers and `dos_…` secrets before saving a log.
2. For 403, read the body: key scope, WebDAV protocol selection, key/role IP or active-hour conditions, workspace pin, membership, role's WebDAV gate, action permission, smart-view target, extension policy, and folder anchor each have different remedies.
3. For 412 **Precondition Failed**, refresh the target and compare it with the local item. `If-Match` refuses an overwrite after the ETag changed; `If-None-Match: *` or `Overwrite: F` refuses replacing a name that now exists.
4. For 423 **Locked**, inspect the target and every destination ancestor in Dosya. Unlock through the relevant file, folder, Vault, or backup control; repeatedly issuing WebDAV UNLOCK cannot bypass a product lock.
5. For 429, pause concurrent work and honor `Retry-After`. Dosya applies a 1,200 requests/minute IP gate, a 600 requests/minute user gate, and any explicit key or role usage limits.
6. Retry one non-destructive operation after the cause changes, then refresh the containing folder. If the same status remains, keep the captured evidence and escalate without broadening unrelated permissions.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV overview with Get API Key, Connect, and Browse stages for the mounted-drive workflow." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya WebDAV overview with Get API Key, Connect, and Browse stages for the mounted-drive workflow. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

A read-only key returns 403 before a write. MOVE requires full scope plus rename permission when the name changes, upload permission when the parent changes, and delete permission when overwriting an existing destination. A locked source or destination returns 423. A changed concurrent destination can return 409 with a retry message rather than 412.

Avoid deleting and recreating the mount as the first response: that can clear useful status details and does not change a server-side role, lock, key scope, or content precondition.

## Expected result

The client retry occurs only after the status-specific cause is corrected: 403 after permission or policy repair, 412 after reconciling changed state, 423 after an authorized unlock, or 429 after backoff. No access boundary is widened merely to silence the message.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Connect Dosya to Cyberduck](/integrations/webdav-cyberduck)
