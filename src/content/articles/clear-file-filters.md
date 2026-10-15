---
{
  "articleId": "hc-clear-file-filters",
  "locale": "en",
  "revision": 6,
  "title": "Clear filters that hide files",
  "summary": "Clear search text, sidebar filters, group views, and map date or folder filters so the intended Dosya file list becomes visible again on web.",
  "category": "files",
  "articleSlug": "clear-file-filters",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified from local sources apps/web/src/pages/files.tsx, apps/web/src/lib/files-params.ts, apps/web/src/components/files-sidebar.tsx, and apps/web/src/components/map-filter-panel.tsx on 2026-10-14; production filter state was not changed.",
  "related": [
    "hc-search-files",
    "hc-organize-files"
  ],
  "keywords": [
    "clear file filters",
    "search, sort and views",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
The web Files page has independent query, folder, sidebar-filter, and group state. It does not have one clear-all button, so remove the state that is hiding the item while preserving any scope you still need.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/clear-file-filters-workflow-map-2026-10-14.webp" data-light-href="/screenshots/clear-file-filters-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/clear-file-filters-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/clear-file-filters-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/clear-file-filters-workflow-map-2026-10-14.webp" alt="File-filter recovery workflow showing search clearing, All sidebar selection, folder navigation, paging reset, and the separate Map Clear control." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Remove each narrowing control separately, then compare the current folder and URL state before assuming a file is missing. <a class="workflow-map-full" href="/screenshots/clear-file-filters-workflow-map-2026-10-14.webp" data-light-href="/screenshots/clear-file-filters-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/clear-file-filters-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Check the breadcrumb first. If the wrong folder is open, choose the required breadcrumb or **Home**. Folder navigation preserves the current search text and type filter, so continue through the remaining checks.
2. Clear the **Search files...** field. The page waits 300 milliseconds before applying the empty query and automatically returns pagination to page 1.
3. In the sidebar, select **All** to leave **Documents**, **Videos**, **Images**, **Shared**, **Deleted**, or **Hidden**, and to close an active group view. **All** keeps your current folder and any text query. Entering or leaving **Deleted** instead returns to that view's root because trashed folder IDs have a separate meaning.
4. Confirm the URL no longer contains an unwanted q, filter, or group value. A folder is represented separately, so keep or clear it according to the intended scope.
5. Do not reset layout, tile size, columns, or sort unless you want to change presentation; those are view preferences rather than filters.
6. If the hidden item was on **Map**, use its **Clear** button. Map **Clear** removes the selected folder, **From**, and **To**, but leaves **Show approximate locations** unchanged.

<figure class="help-screenshot"><a href="/screenshots/search-files-results-2026-10-12.webp"><img src="/screenshots/search-files-results-2026-10-12.webp" alt="Dosya Files search results reference showing the search field, current result list, and controls used to remove narrowing state." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Clear the filename query in this results area, then use **All** and the breadcrumb when another sidebar or folder scope still applies. <a href="/screenshots/search-files-results-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The Files list returns to the chosen folder without an active query, group, or sidebar filter. Query, filter, and folder transitions reset pagination, so the first result page is shown. Clearing controls is read-only and does not restore deleted files, unlock protected files, or reveal items outside the member's assigned folder tree.

## Troubleshooting

- **Files remain missing after selecting All.** Empty **Search files...**, verify the breadcrumb, and check whether the item is deleted, hidden, or fully locked.
- **Folders remain while a search is active.** This is expected. The filename query filters direct file rows; folder rows are loaded independently.
- **The result says No files match your search.** Clear or change the filename query. If loading failed instead, use **Try again** under **Could not load this folder**.
- **A map pin remains hidden after Clear.** Turn on **Show approximate locations** if the item has only an upload-origin coordinate.

## Related guides

- [Search files](/files/search-files)
- [Organize files](/files/organize-files)
