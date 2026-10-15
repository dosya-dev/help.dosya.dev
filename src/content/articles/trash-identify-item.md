---
{
  "articleId": "hc-trash-identify-item",
  "locale": "en",
  "revision": 5,
  "title": "Identify the correct deleted item",
  "summary": "Identify a deleted row using its type, size, deletion time, uploader, origin, and folder context before restoring or permanently deleting it.",
  "category": "files",
  "articleSlug": "trash-identify-item",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/api/src/pages/api/files/[id]/index.ts, apps/api/src/pages/api/folders/[id]/index.ts, and apps/api/src/lib/files/purge.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-review-deleted-items",
    "hc-restore-deleted"
  ],
  "keywords": [
    "trash identify item",
    "Deleted-item retention and cleanup",
    "Dosya help",
    "cloud storage"
  ]
}
---
Deleted items can contain repeated filenames. Use the row’s current metadata and its trash-root context before taking an action; the current web list does not expose a dedicated “original path” field for each deleted file.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/trash-identify-item-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-identify-item-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-identify-item-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/trash-identify-item-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/trash-identify-item-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for opening Deleted, filtering by name, comparing visible metadata, and selecting one verified row." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The identification workflow relies on fields the current Deleted table actually shows. <a class="workflow-map-full" href="/screenshots/trash-identify-item-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-identify-item-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-identify-item-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Choose **Deleted** under Files. The list orders trash results through the active sort, and its forced **Deleted** column shows `deleted_at` rather than normal modified time.
2. Search for the filename and switch to list view. Use **Columns** to expose Size, Type, Extension, Uploader, Region, Origin, Version, Shares, or Comments as needed.
3. Compare the **Deleted** timestamp and size first. For a folder, compare its file count; its descendants are represented through that deleted root.
4. Use uploader and Origin only as supporting evidence. Origin describes the ingest client, not the former folder or a complete custody trail.
5. If the row is a Live Photo still, check whether a companion video is also present. Restoring or permanently deleting one row can have different pairing consequences than acting on both.
6. Select only after the metadata matches your expected item. Re-read the **N selected** badge before **Restore** or **Delete permanently**.

<figure class="help-screenshot"><a href="/screenshots/deleted-items-2026-10-12.webp"><img src="/screenshots/deleted-items-2026-10-12.webp" alt="Deleted table with columns for Name, Size, Created, Deleted, and Origin across a folder, ZIP file, and PNG file." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The visible Deleted timestamp, type icon, size, and origin help distinguish similar trash entries. <a href="/screenshots/deleted-items-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**When metadata is insufficient.** Restore the uncertain file when it is safe to do so, inspect it in its live folder, and delete it again if necessary. Do not permanently delete based only on a repeated filename; that operation has no undo.

## Expected result

You have one verified trash row whose type, size, deletion time, and supporting metadata match the intended item, with no unsupported assumption that the Deleted table shows its original path.

## Related guides

- [Review the Deleted items area](/files/review-deleted-items)
- [Restore verified content safely](/files/restore-deleted)
