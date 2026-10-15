---
{
  "articleId": "hc-trash-delete-selected-permanently",
  "locale": "en",
  "revision": 5,
  "title": "Permanently delete selected test items",
  "summary": "Permanently delete selected trash roots, understand folder progress and cancellation, verify partial outcomes, and confirm that recovery is impossible.",
  "category": "files",
  "articleSlug": "trash-delete-selected-permanently",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/api/src/pages/api/files/[id]/index.ts, apps/api/src/pages/api/folders/[id]/index.ts, and apps/api/src/lib/files/purge.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-review-deleted-items",
    "hc-restore-deleted"
  ],
  "keywords": [
    "trash delete selected permanently",
    "Deleted-item retention and cleanup",
    "Dosya help",
    "cloud storage"
  ]
}
---
**Delete permanently** removes selected trash roots and their stored bytes. It is irreversible, and a large folder can be emptied over several bounded requests before its folder row disappears.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/trash-delete-selected-permanently-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-delete-selected-permanently-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-delete-selected-permanently-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/trash-delete-selected-permanently-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/trash-delete-selected-permanently-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for selecting trash roots, reading the permanent-delete warning, following purge progress, and reviewing completed or partial results." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map emphasizes the irreversible confirmation and the possibility of partial folder progress. <a class="workflow-map-full" href="/screenshots/trash-delete-selected-permanently-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-delete-selected-permanently-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-delete-selected-permanently-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Files** and choose **Deleted**. Confirm each selected row is a top-level deleted item; descendants swept into a deleted folder are handled through that parent.
2. Select the disposable files and folders. Compare the separate file and folder counts in the confirmation, and note any Live Photo companion count.
3. Choose **Delete permanently**. Read `This cannot be undone.` A selected folder also permanently removes everything still inside it.
4. Confirm **Delete permanently** once. Individual file purges run with bounded concurrency. Folder purges may show `N files removed so far…` while repeated server passes continue.
5. To stop a long permanent batch, use the progress dialog’s cancel action. Requests already in flight may still finish, and a partially emptied folder remains in Deleted items.
6. Read the result toast before selecting anything else. It distinguishes completed items, failed items, unfinished folders, and files already removed before a failure or cancellation.

<figure class="help-screenshot"><a href="/screenshots/deleted-items-2026-10-12.webp"><img src="/screenshots/deleted-items-2026-10-12.webp" alt="Deleted view containing a retired campaign folder, an archive ZIP, and a renderer PNG beneath the storage-use notice." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Deleted items remain visible and count against storage until this permanent purge finishes. <a href="/screenshots/deleted-items-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Common refusals.** Locked files, locked descendants, hidden scope, missing delete permission, a folder deleted as part of another folder, or a member confined inside the folder can block a purge. For the last case, change that member’s folder access before trying again.

## Expected result

Completed file rows and fully emptied folder roots disappear from Deleted items and cannot be restored. Any cancelled, unfinished, or refused root stays visible with its remaining contents so its exact outcome can be reviewed.

## Related guides

- [Review entries in Deleted items](/files/review-deleted-items)
- [Restore a deleted item instead](/files/restore-deleted)
