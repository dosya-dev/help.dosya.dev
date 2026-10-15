---
{
  "articleId": "hc-trash-verify-storage-release",
  "locale": "en",
  "revision": 5,
  "title": "Verify storage after permanent deletion",
  "summary": "Confirm that trash still consumes quota, permanently purge a known item, allow the 60-second quota cache to invalidate, and verify released bytes.",
  "category": "files",
  "articleSlug": "trash-verify-storage-release",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/api/src/pages/api/files/[id]/index.ts, apps/api/src/pages/api/folders/[id]/index.ts, and apps/api/src/lib/files/purge.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-review-deleted-items",
    "hc-restore-deleted"
  ],
  "keywords": [
    "trash verify storage release",
    "Deleted-item retention and cleanup",
    "Dosya help",
    "cloud storage"
  ]
}
---
Moving content to Deleted does not lower `storage_used_bytes`. Only a completed permanent purge removes the retained file bytes and credits the workspace counter.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/trash-verify-storage-release-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-verify-storage-release-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-verify-storage-release-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/trash-verify-storage-release-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/trash-verify-storage-release-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for recording storage, permanently deleting a known item, waiting for completion, and checking released quota." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The storage check begins before the irreversible operation and accounts for cached quota reporting. <a class="workflow-map-full" href="/screenshots/trash-verify-storage-release-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-verify-storage-release-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-verify-storage-release-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Record the workspace storage figure and the exact byte size of a disposable deleted file. A folder’s displayed size may aggregate many descendants, so a single file makes the clearest check.
2. Confirm the item is already in **Deleted**. The banner states: `Items in the trash still count against your storage. Delete them permanently to free up space.`
3. Choose **Delete permanently**, read the no-undo warning, and confirm. Do not use this test on the only copy of required content.
4. Wait for the success or partial-result toast. A large folder can return accepted-but-incomplete progress and must finish all passes before all of its bytes are gone.
5. Reload the storage display after the completed purge. The server invalidates the cached workspace quota; cached quota values otherwise have a 60-second lifetime.
6. Compare the new figure with other uploads, restores, version changes, or concurrent purges that occurred during the test. Use the item’s exact bytes when the rounded UI number does not visibly move.

<figure class="help-screenshot"><a href="/screenshots/deleted-items-2026-10-12.webp"><img src="/screenshots/deleted-items-2026-10-12.webp" alt="Deleted items page with a notice explaining that trash counts against storage and must be permanently deleted to free space." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The product banner states the quota rule that this verification tests. <a href="/screenshots/deleted-items-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Version storage matters.** Permanent file purge removes the file row and all stored version objects for that file. The released amount can therefore exceed the current-version size shown in the list. A failed or cancelled folder purge may have already released some bytes and leave the remainder in trash.

## Expected result

After permanent deletion completes and reporting refreshes, charged storage no longer includes the purged file and its versions. Soft deletion alone produces no decrease, and partial folder outcomes release only what was actually removed.

## Related guides

- [Review what remains in Deleted items](/files/review-deleted-items)
- [Restore content instead of freeing its storage](/files/restore-deleted)
