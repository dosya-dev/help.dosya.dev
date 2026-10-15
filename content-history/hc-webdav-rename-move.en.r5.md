---
{
  "articleId": "hc-webdav-rename-move",
  "locale": "en",
  "revision": 5,
  "title": "Rename and move files over WebDAV",
  "summary": "Rename or move a Dosya file over WebDAV with a full-access key, confirm the required role permissions, and prevent accidental destination overwrites.",
  "category": "integrations",
  "articleSlug": "webdav-rename-move",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/webdav/methods/move.ts, apps/api/src/lib/webdav/utils.ts, apps/api/src/lib/webdav/views.ts, apps/api/src/lib/webdav/listing-cache.ts, apps/api/src/lib/backup-lock.ts, and apps/api/src/pages/webdav/[...path].ts. No production resource was renamed or moved.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-cyberduck"
  ],
  "keywords": [
    "webdav rename move",
    "WebDAV mounted-drive operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
WebDAV uses one MOVE request for a rename, a folder change, or both. Dosya requires a **Full access** API key. The workspace role must allow rename when the name changes, upload when the parent changes, and delete when an existing destination will be overwritten.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webdav-rename-move-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-rename-move-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-rename-move-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webdav-rename-move-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webdav-rename-move-help-workflow-2026-10-14.webp" alt="Four-step workflow for checking full-access permissions, choosing an unused destination, performing one WebDAV MOVE, and verifying the source and destination folders." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for checking full-access permissions, choosing an unused destination, performing one WebDAV MOVE, and verifying the source and destination folders. <a class="workflow-map-full" href="/screenshots/webdav-rename-move-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-rename-move-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-rename-move-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Perform the operation in **All** or an anchored mount's real tree. The unanchored **Documents**, **Videos**, **Images**, **Shared**, and **Deleted** views are read-only projections and cannot be MOVE sources or destinations.

## Steps

1. Confirm the key has **Full access**, includes WebDAV, and reaches the current workspace. Verify the role's rename permission for a name change and upload permission for a move to another folder.
2. Inspect the source in Dosya Files and choose a destination whose final name is unused. Record the source folder, destination folder, name, size, and current version before the operation.
3. Check the target and both folder trees for file, ancestor, Vault, or WordPress-backup locks. A protected source or sealed destination returns 423 and must be unlocked through Dosya.
4. Rename or drag the item once in the WebDAV client, then wait for its MOVE result. The destination must remain on the same Dosya WebDAV origin and inside the mounted workspace/anchor.
5. Refresh the old and new folders. Confirm the source path no longer resolves and exactly one item with the intended name and size appears at the destination.
6. Open Dosya Files at the destination and verify the item. If the client reports 409 or 412, refresh and reconcile concurrent state before attempting another move.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV landing page showing the mounted-drive connection and Browse stage where file actions begin." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya WebDAV landing page showing the mounted-drive connection and Browse stage where file actions begin. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

MOVE treats overwrite as allowed unless the client sends `Overwrite: F`. If a file already exists and overwrite proceeds, Dosya soft-deletes that destination, revokes its share links, and returns 204 after replacement; the role needs delete-own or delete-any permission according to the destination owner. A new destination returns 201. To avoid this irreversible current-location change and share revocation, choose an unused name.

Different resource types cannot overwrite each other. Invalid or missing destinations return 400/409, a hidden source appears as 404, and a concurrent collision returns **Conflict: resource was modified concurrently, retry the move**.

## Expected result

One MOVE places the file at the intended name and folder, the old path disappears, and both WebDAV and Dosya Files agree. No pre-existing destination was overwritten unless that action and its Trash/share-link effects were explicitly intended.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Connect Dosya to Cyberduck](/integrations/webdav-cyberduck)
