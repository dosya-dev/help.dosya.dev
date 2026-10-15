---
{
  "articleId": "hc-search-folder-and-type",
  "locale": "en",
  "revision": 5,
  "title": "Combine a folder scope with a file-type filter",
  "summary": "Combine a live folder breadcrumb with the Files sidebar type view and local search, while understanding when Images, Videos, and Documents go global.",
  "category": "files",
  "articleSlug": "search-folder-and-type",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/files.tsx, apps/web/src/components/files-sidebar.tsx, apps/web/src/lib/files-params.ts, apps/web/src/lib/files-request.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-search-files",
    "hc-search-file-type"
  ],
  "keywords": [
    "search folder and type",
    "Advanced file search details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Folder and type narrowing belongs to the web **Files** page, not the global Search results page. The Files URL carries folder, filter, query, and page as explicit view state.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/search-folder-and-type-help-workflow-2026-10-14.webp" data-light-href="/screenshots/search-folder-and-type-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/search-folder-and-type-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/search-folder-and-type-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/search-folder-and-type-help-workflow-2026-10-14.webp" alt="Folder-and-type workflow: open the target breadcrumb, account for workspace-wide media libraries, review the visible breadcrumb or all-folders label, and open only the correctly scoped result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Folder-and-type workflow: open the target breadcrumb, account for workspace-wide media libraries, review the visible breadcrumb or all-folders label, and open only the correctly scoped result. <a class="workflow-map-full" href="/screenshots/search-folder-and-type-help-workflow-2026-10-14.webp" data-light-href="/screenshots/search-folder-and-type-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/search-folder-and-type-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

A normal server-side filter stays attached while navigating folders. **Images**, **Videos**, and **Documents** are library views that intentionally span all folders; their header says **all folders**, and the old folder parameter is retained only so leaving the library can return to it.

## Steps

1. Open **Files** and navigate by breadcrumb to the folder you want to search.
2. Choose the sidebar type row and read the main header before assuming the folder still limits it.
3. For **Images**, **Videos**, or **Documents**, accept the explicit **all folders** scope or return to **All** for a true folder listing.
4. Enter the filename stem in **Search files…** and wait for the 300 ms URL update.
5. Review the breadcrumb or the library’s **all folders** label together with the active sidebar row.
6. Open the result only when that visible scope and its file type match the intended task.

Entering or leaving **Deleted** clears the live folder because trash folders use a different meaning. Opening a group clears both folder and filter because groups are flat collections. Page numbers reset whenever the query or navigation state changes.

## Expected result

The result list reflects the scope visibly named by the Files page. A normal folder listing stays in its breadcrumb, while a library type correctly reports that it searches across all folders.

## Related guides

- [Search files](/files/search-files)
- [Filter search by file type](/files/search-file-type)
