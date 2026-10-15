---
{
  "articleId": "hc-search-current-folder",
  "locale": "en",
  "revision": 6,
  "title": "Search inside the correct folder",
  "summary": "Search file names in one Dosya folder, understand the non-recursive scope and 300 ms delay, and recover when expected matches do not appear.",
  "category": "files",
  "articleSlug": "search-current-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally on 2026-10-14 through apps/web/src/pages/files.tsx, apps/web/src/lib/files-request.ts, apps/api/src/pages/api/files/index.ts, and apps/api/src/lib/repo/repo-d1/listing.ts; production search data was not accessed.",
  "related": [
    "hc-search-files",
    "hc-organize-files"
  ],
  "keywords": [
    "search current folder",
    "search, sort and views",
    "Dosya help",
    "cloud storage"
  ]
}
---
The regular **Search files...** field searches file names directly inside the folder in the breadcrumb. There is no separate scope selector, and matching files in descendant folders are not included.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/search-current-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/search-current-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/search-current-folder-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/search-current-folder-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/search-current-folder-workflow-map-2026-10-14.webp" alt="Current-folder search workflow showing breadcrumb navigation, filename entry, 300-millisecond update, direct-child scope, and pagination." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Navigate to the folder first, then search its immediate file rows and inspect the breadcrumb when a nested match stays out of scope. <a class="workflow-map-full" href="/screenshots/search-current-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/search-current-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/search-current-folder-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In web **Files**, use the breadcrumb or open folders until the target folder is current. A folder-confined member's apparent root is the assigned anchor, so searches cannot move above it.
2. Click **Search files...** and enter any part of the filename. Matching is case-insensitive for ASCII text, and % or _ is searched as an ordinary character rather than as a wildcard.
3. Wait 300 milliseconds after the final keystroke. Dosya writes the query to q in the URL and resets the result page to 1.
4. Review only the file rows in that folder. Subfolders stay visible because folder rows are loaded separately, but files inside them do not match until you open that subfolder.
5. Use **Previous** or **Next** if **Page X of Y** appears. The web request asks for 100 rows per page; the API itself accepts page sizes from 10 through 500.
6. To search another folder, navigate there while leaving the query in place. Folder navigation preserves q, reruns it against the new direct children, and resets pagination.

<figure class="help-screenshot"><a href="/screenshots/search-files-results-2026-10-12.webp"><img src="/screenshots/search-files-results-2026-10-12.webp" alt="Dosya Files results reference for comparing each matching filename with the current breadcrumb and page controls." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Check the current breadcrumb and each returned filename; visible subfolders are navigation choices rather than recursive file matches. <a href="/screenshots/search-files-results-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The result contains listed, non-deleted file rows whose names contain the query and whose folder ID exactly matches the current location. An item can still appear as a restricted row when its own lock mode is `full_lock`; unlock it before opening file bytes. At workspace root, the same folder rule applies to root-level files. Search does not examine document text, audio tags, comments, or other metadata.

The operation is read-only. It respects file-page permission, folder confinement, hidden-file rules, and full-lock visibility, so clearing the query cannot expose content beyond the member's access.

## Troubleshooting

- **A match in a child folder is absent.** Open that child folder and let the preserved query run there; current-folder search is deliberately non-recursive.
- **Folders still appear beside filtered files.** That is expected because the file query does not filter folder rows.
- **No files match your search appears.** Remove punctuation or shorten the filename fragment, then wait for the debounce.
- **Could not load this folder appears.** Read the specific error beneath it and press **Try again**. If access changed, return to a folder within your assigned scope.

## Related guides

- [Search files](/files/search-files)
- [Organize files](/files/organize-files)
