---
{
  "articleId": "hc-webdav-diagnose-read-only",
  "locale": "en",
  "revision": 5,
  "title": "Diagnose a read-only WebDAV mount",
  "summary": "Find why a Dosya WebDAV mount is read-only by checking the API-key scope, workspace role, smart-view target, folder anchor, and content locks.",
  "category": "integrations",
  "articleSlug": "webdav-diagnose-read-only",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/webdav.tsx, apps/api/src/pages/webdav/[...path].ts, apps/api/src/lib/webdav/views.ts, apps/api/src/lib/webdav/methods/put.ts, apps/api/src/lib/webdav/methods/mkcol.ts, apps/api/src/lib/webdav/methods/move.ts, and apps/api/src/lib/webdav/methods/get.ts. No production write was attempted.",
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
A mount can list files yet reject changes for several independent reasons. The API key may be **Read only**; the workspace role may lack upload, create, rename, move, or delete permission; the target can be a read-only smart view; or a file, ancestor folder, Vault, or WordPress backup can be locked.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14.webp" alt="Four-step workflow for capturing the rejected WebDAV action, matching scope to the verb, testing under All or an anchored tree, and checking product locks." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for capturing the rejected WebDAV action, matching scope to the verb, testing under All or an anchored tree, and checking product locks. <a class="workflow-map-full" href="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

On an unanchored mount, **All** represents the real writable tree. **Documents**, **Videos**, **Images**, **Shared**, and **Deleted** are flat read-only views even when the same file can be changed through **All**. A folder-anchored mount has no reserved smart views, so a real folder named Documents remains ordinary.

## Steps

1. Reproduce one harmless operation with a uniquely named empty folder or small file, and capture the HTTP status or client text. Note whether listing, download, upload, folder creation, rename, move, or delete failed.
2. In **Profile → API keys**, inspect the credential's **Permission**. **Read only** cannot PUT, MKCOL, MOVE, DELETE, or LOCK; **Upload only** can upload but cannot download; MOVE/rename and DELETE require **Full access**.
3. Check that the key includes WebDAV, reaches this workspace or anchor, and satisfies its IP, active-hours, usage, size, and concurrency conditions. Then confirm the workspace role allows WebDAV plus the exact requested file action.
4. If the path begins with a smart-view label, repeat the test in **All** at the file's real folder. Do not treat a successful read from **Documents** or **Shared** as proof that the view accepts writes.
5. Inspect the target and its parent for lock state. Dosya returns 423 for a locked file, a sealed ancestor, a protected backup, or a destination that cannot receive new content; unlocking requires the owning product flow, not a WebDAV LOCK token.
6. Retry once after correcting the identified cause, then refresh both the client and Dosya Files. Remove the disposable item only after confirming the create or upload truly committed.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV landing page whose Browse stage says Open, edit, save files after the mount connects." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya WebDAV landing page whose Browse stage says Open, edit, save files after the mount connects. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

Common server messages are exact: **API key scope 'read' cannot upload files**, **Upload not allowed**, **Folder creation not allowed**, **API key scope must be 'full' to move/rename**, **Delete not allowed**, **This is a read-only smart view**, and **This role is not permitted to use WebDAV**. A 412 is a changed-state precondition, not read-only access; a 429 is a usage or request limit and should honor `Retry-After`.

Granting broader key scope cannot override a restrictive workspace role or content lock. Prefer a dedicated key with only the operations the client requires.

## Expected result

The precise key, role, path, condition, or lock causing the refusal is identified. After an authorized correction, a disposable write succeeds in **All** or the anchored tree and appears in Dosya Files; otherwise the mount remains intentionally read-only.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Troubleshoot WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
