---
{
  "articleId": "hc-trash-file",
  "locale": "en",
  "revision": 6,
  "title": "Move a file to Deleted items",
  "summary": "Move one file to Deleted items, include or exclude its Live Photo companion, understand storage impact, and verify the reversible soft-delete result.",
  "category": "files",
  "articleSlug": "trash-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/api/src/pages/api/files/[id]/index.ts, apps/api/src/pages/api/folders/[id]/index.ts, and apps/api/src/lib/files/purge.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-restore-deleted",
    "hc-permanent-delete"
  ],
  "keywords": [
    "trash file",
    "trash and restore",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Deleting a live file is a soft delete: its row leaves the normal folder and enters **Deleted**, while its bytes continue using workspace storage until a permanent deletion.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/trash-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/trash-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/trash-file-workflow-map-2026-10-14.webp" alt="Light and dark workflow map for choosing Delete on a file, checking the filename and optional Live Photo companion, confirming, and opening Deleted." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map shows the reversible first deletion rather than the later permanent purge. <a class="workflow-map-full" href="/screenshots/trash-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In **Files**, locate the exact live file and inspect its name, folder, and details. A role needs `delete_any_file`, or `delete_own_files` when it uploaded the item.
2. Open the row menu or viewer menu and choose **Delete**. A locked file, a file inside an unlocked-required folder, or content in a locked WordPress backup is refused.
3. In **Delete file?**, verify the filename. Dosya states that the item moves to trash and keeps using storage until permanently deleted.
4. For a Live Photo still, decide whether to leave **Also delete [video name]** selected. The companion is a separate cloud file even when the library presents the pair together.
5. Choose **Delete** once and wait for **Deleted — [name] was deleted.** The confirm button is disabled while the request runs to prevent a second click from purging the just-trashed item.
6. Open **Deleted** and find the row. The original folder should no longer list it, while Restore and Delete permanently become the available destructive-state actions.

<figure class="help-screenshot"><a href="/screenshots/deleted-items-2026-10-12.webp"><img src="/screenshots/deleted-items-2026-10-12.webp" alt="Dosya Deleted view with its notice that trash still counts against storage and three deleted entries listed." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The Deleted view is the recovery location after a normal file deletion. <a href="/screenshots/deleted-items-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**If deletion fails.** The API can report `This file is locked and cannot be deleted`, `This file is inside a locked folder. Unlock the folder to delete it.`, or `You don't have permission to delete this file`. Correct that gate instead of repeatedly confirming.

## Expected result

The selected file disappears from its live folder, appears in Deleted items, and remains recoverable. Storage usage does not fall at this stage because soft-deleted bytes are still retained.

## Related guides

- [Restore a file from Deleted items](/files/restore-deleted)
- [Understand irreversible permanent deletion](/files/permanently-delete-files)
