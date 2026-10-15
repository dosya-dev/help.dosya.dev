---
{
  "articleId": "hc-trash-restore-original-location",
  "locale": "en",
  "revision": 5,
  "title": "Restore an item to its original location",
  "summary": "Restore files and folders to their recorded parent, understand workspace-root fallback, and fix the exact case where a file’s folder is still trashed.",
  "category": "files",
  "articleSlug": "trash-restore-original-location",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/api/src/pages/api/files/[id]/index.ts, apps/api/src/pages/api/folders/[id]/index.ts, and apps/api/src/lib/files/purge.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-review-deleted-items",
    "hc-restore-deleted"
  ],
  "keywords": [
    "trash restore original location",
    "Deleted-item retention and cleanup",
    "Dosya help",
    "cloud storage"
  ]
}
---
Restore normally reactivates an item under its recorded parent. Folders can fall back to the workspace root when their former parent no longer exists live; individual files do not use that fallback.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/trash-restore-original-location-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-restore-original-location-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-restore-original-location-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/trash-restore-original-location-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/trash-restore-original-location-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for selecting a deleted item, restoring it, reading root-fallback messaging, and verifying its live destination." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The restore workflow shows the different destination rules for files and folders. <a class="workflow-map-full" href="/screenshots/trash-restore-original-location-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-restore-original-location-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-restore-original-location-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Deleted** and identify the correct trash root. A child swept into a deleted folder is restored through that parent rather than as a separate root.
2. Choose **Restore** on one row, or select multiple roots and use the bulk **Restore** control.
3. For a file, wait for **Restored — “[name]” restored.** If its parent folder is still deleted, restore that folder first; the file endpoint returns a 409 rather than creating an invisible live row.
4. For a folder, read the result carefully. If its original parent is not live, Dosya restores the folder to **Root (top level)** and explicitly says the original folder is also in the trash.
5. Navigate to the reported destination. A folder-name collision may produce an available numbered name, so use the name shown in the toast.
6. Refresh once if the cached listing has not updated, then verify the item opens and no longer appears as a top-level Deleted entry.

<figure class="help-screenshot"><a href="/screenshots/deleted-items-2026-10-12.webp"><img src="/screenshots/deleted-items-2026-10-12.webp" alt="Deleted view listing recoverable file and folder rows beneath the storage retention notice." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Restore starts from the Deleted row, but the result may name the workspace root or a conflict-resolved folder name. <a href="/screenshots/deleted-items-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Storage and timing.** Restore does not add charged bytes because soft deletion never released them. The UI disables a row’s restore while its request is in flight, preventing overlapping attempts that could corrupt accounting.

## Expected result

The item returns live in its recorded parent when possible. A folder whose parent is unavailable appears at workspace root with an explicit notice; a file waits until its deleted parent has been restored.

## Related guides

- [Review recoverable Deleted entries](/files/review-deleted-items)
- [Use the standard restore workflow](/files/restore-deleted)
