---
{
  "articleId": "hc-select-multiple-files",
  "locale": "en",
  "revision": 6,
  "title": "Select multiple files safely",
  "summary": "Select files and folders for a batch action, understand page and lock boundaries, and verify the count before moving, sharing, downloading, or deleting.",
  "category": "files",
  "articleSlug": "select-multiple-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified against local implementation on 2026-10-14 in apps/web/src/pages/files.tsx, apps/web/src/hooks/use-files-listing.ts, apps/web/src/lib/files-request.ts, apps/web/src/lib/library-request.ts, apps/web/src/lib/bulk-run.ts, apps/api/src/pages/api/files/index.ts, and apps/api/src/pages/api/files/batch-delete.ts. No production bulk action was run.",
  "related": [
    "hc-organize-files",
    "hc-move-rename"
  ],
  "keywords": [
    "select multiple files",
    "batch file actions",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Multi-selection on the browser Files page can include files and folders. The badge counts both types, while each bulk action applies its own permission and combination rules.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/select-multiple-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/select-multiple-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/select-multiple-files-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/select-multiple-files-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/select-multiple-files-workflow-map-2026-10-14.webp" alt="Browser Files selection workflow with row checkboxes, highlighted cards, selected count, and permission-gated batch actions." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Build the set from visible items, compare every highlight with the badge, and only then choose a batch operation. <a class="workflow-map-full" href="/screenshots/select-multiple-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/select-multiple-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/select-multiple-files-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the web Files page in the correct workspace, folder, filter, or personal group.
- Use disposable items when learning Delete. Folder deletion includes everything below each selected folder; a selected Live Photo still can include its paired video.
- A full-lock file cannot be selected until you unlock it. **Select all** skips locked files lacking an unlock token but still includes visible folders.

## Steps

1. Hover a list row or grid card and select its checkbox. Ctrl-click on Windows/Linux or Command-click on macOS also toggles that item instead of opening it.
2. Continue until the **N selected** badge matches the highlighted files and folders.
3. To replace the set with every item in the current result, select **Select all**:
   - A regular folder or group listing selects every visible folder plus the current file page, which contains up to 100 files by default.
   - Photos, Videos, or Documents selects the library items currently loaded in 60-item fetches, not unseen future results.
4. Remove an unintended item by selecting its checkbox again. Use **Clear** to discard the complete file-and-folder set.
5. Review the available action:
   - **Download ZIP** requires download permission.
   - **Share** requires share-link permission and accepts either one folder or one or more files; it is disabled for mixed selections and multiple folders.
   - **Move** appears when the role can upload files or rename folders.
   - **Delete** follows the role's own-file or any-file deletion permission and opens a confirmation.
6. Submit only after the badge, item types, and destination or destructive confirmation are correct.

<figure class="help-screenshot"><a href="/screenshots/organize-files-overview-2026-10-12.webp"><img src="/screenshots/organize-files-overview-2026-10-12.webp" alt="Files overview showing the visible page boundary that Select all uses for ordinary folder and group listings." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Pagination and incremental library loading define which rows the current Select all operation can reach. <a href="/screenshots/organize-files-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Every intended item is highlighted exactly once, and the badge equals the number of selected file plus folder IDs. No cloud data changes until a bulk action is submitted.

Selection is per view. Navigating to a different page, folder, workspace, filter, group, search, or library ordering clears it, preventing hidden IDs from carrying into the new result.

## Troubleshooting

**A locked file did not select.** Open and unlock it first, then return to selection. The toggle deliberately ignores an unopened full-lock file.

**Select all did not include everything in the workspace.** It covers the current listing page or currently loaded library rows. Visit the next page or load more results and process a separate, verified batch.

**A Delete toast claims more items than appear in Deleted.** Web treats an HTTP-successful 20-ID chunk as if every submitted ID was deleted and does not use the endpoint's actual `deleted` and `folders_deleted` counts. The API can silently omit hidden, missing, already-deleted, or own-only file rows. It can also skip a selected folder for ownership, a direct or ancestor lock, subtree authorization, hidden state, or an internal folder-trash error. Refresh both the source and **Deleted**, then reconcile the surviving IDs before retrying.

**A mixed-owner selection completed only partly.** With `delete_own_files`, files uploaded by somebody else are omitted and a folder is skipped when any required descendant needs `delete_any_file`. A selected visible file with its own lock or a locked ancestor instead rejects its complete HTTP chunk. Split remaining rows by owner or lock state and submit only the corrected selection.

**Another batch action reports failures.** Move and restore count their per-item successes and failures. Refresh the folder, compare the toast with the actual rows, and retry only objects that remain at the source.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files](/files/move-and-rename)
