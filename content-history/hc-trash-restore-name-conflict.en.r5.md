---
{
  "articleId": "hc-trash-restore-name-conflict",
  "locale": "en",
  "revision": 5,
  "title": "Resolve a name conflict during restore",
  "summary": "Handle restore naming accurately: files can reappear beside the same name, folders receive an available numbered name, and results show the final name.",
  "category": "files",
  "articleSlug": "trash-restore-name-conflict",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/api/src/pages/api/files/[id]/index.ts, apps/api/src/pages/api/folders/[id]/index.ts, and apps/api/src/lib/files/purge.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-review-deleted-items",
    "hc-restore-deleted"
  ],
  "keywords": [
    "trash restore name conflict",
    "Deleted-item retention and cleanup",
    "Dosya help",
    "cloud storage"
  ]
}
---
Restore behavior differs by item type. A file restore does not run a same-name conflict check, while a folder restore asks the repository for an available name and can return a numbered result such as `Photos (1)`.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/trash-restore-name-conflict-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-restore-name-conflict-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-restore-name-conflict-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/trash-restore-name-conflict-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/trash-restore-name-conflict-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for identifying a deleted file or folder, checking its destination, restoring it, and reading the resulting name." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map distinguishes automatic folder renaming from the file restore path. <a class="workflow-map-full" href="/screenshots/trash-restore-name-conflict-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-restore-name-conflict-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-restore-name-conflict-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In **Deleted**, determine whether the target is a file or a folder. Compare timestamps and details before acting on a repeated name.
2. Check the original destination when you know it. If a folder with the desired name already exists there, expect the restored folder to receive the next available numbered name.
3. Choose **Restore** on the single row. You need the applicable delete-own or delete-any permission because the restore endpoint reuses those role gates.
4. For a folder, read the toast’s returned name. Dosya uses that server-selected final name instead of the stale trash-row name.
5. For a file, expect the same filename to be restored without an automatic rename. Open the destination and distinguish duplicate names by size, uploader, timestamps, file ID, or version history.
6. Rename or relocate one restored item only after confirming which record is which. File names allow up to 255 characters; folder names allow up to 100 and must remain one path segment.

**Related restore blockers.** A file whose containing folder is still trashed fails with `This file's folder is in the trash - restore the folder first`. A folder deleted as part of another folder must be restored through that parent trash root.

## Expected result

A conflicting folder returns under an available name such as `Name (1)`. A file may coexist with another same-named file, and you identify the records before making any follow-up rename or deletion.

## Related guides

- [Inspect Deleted items before restoring](/files/review-deleted-items)
- [Restore deleted files and folders](/files/restore-deleted)
