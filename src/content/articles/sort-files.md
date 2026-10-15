---
{
  "articleId": "hc-sort-files",
  "locale": "en",
  "revision": 6,
  "title": "Sort files by name, size or date",
  "summary": "Sort Files with six toolbar presets or a visible table column, understand first-click direction, and verify ordering without changing stored files.",
  "category": "files",
  "articleSlug": "sort-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/web/src/lib/list-sort.ts, apps/api/src/lib/list-sort.ts, and apps/web/src/lib/file-columns.tsx on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-search-files",
    "hc-organize-files"
  ],
  "keywords": [
    "sort files",
    "search, sort and views",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Sorting changes the order returned for the active standard Files view; it does not rename, move, or rewrite stored items. Standard folder, Deleted, and group views offer six toolbar presets, while list view can sort by any visible supported column. The photo Library uses its own sort state and choices.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sort-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/sort-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/sort-files-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sort-files-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sort-files-workflow-map-2026-10-14.webp" alt="Light and dark workflow map for opening Files, choosing a sort field and direction, checking the first and last rows, and confirming the order." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map shows the toolbar and table-header paths for ordering one active Files view. <a class="workflow-map-full" href="/screenshots/sort-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/sort-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/sort-files-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Available preset labels.** Outside the photo Library, the toolbar supports **Newest**, **Oldest**, **Name A–Z**, **Name Z–A**, **Largest**, and **Smallest**. The default is newest-created first.

## Steps

1. Open **Files** and enter the standard folder, Deleted view, or group you want to order. Apply search first if the sort should cover only matching results.
2. Open the sort menu beside the search box and choose one of its six presets. The choice lives only in the current page state: refreshing the page or sharing its URL returns the standard view to **Newest**.
3. For another field, switch to list view, choose **Columns**, and enable the column. Supported headers include Type, Extension, Version, Uploader, Region, Origin, Shares, and Comments.
4. Select a column header once. Text fields begin ascending; sizes, dates, version numbers, shares, and comment counts begin descending.
5. Select the same header again to reverse it. The arrow beside the active header shows the current direction, and the toolbar displays a synthetic label such as **Uploader ↑**.
6. Check the first and last rows, comparing folders and files within their own sections because folders remain pinned above files.

<figure class="help-screenshot"><a href="/screenshots/search-files-results-2026-10-12.webp"><img src="/screenshots/search-files-results-2026-10-12.webp" alt="Files search results for roadmap with the Newest sort menu and Created column visible above one PDF result." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>This Files view exposes the toolbar sort and a sortable Created column for the current result set. <a href="/screenshots/search-files-results-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Special date labels.** In Deleted items, the normal Modified column is presented as **Deleted** and uses deletion time. Photo libraries use Date taken based on captured time, then source-created time, then upload time. The Library layout has separate sort choices and loading state, so the six standard presets above do not describe it.

## Expected result

The active arrow or sort label states the chosen field and direction, and rows within each folder/file section follow that order. No file metadata or bytes change merely because the list was sorted.

## Related guides

- [Narrow the Files list with search](/files/search-files)
- [Organize files into a durable structure](/files/organize-files)
