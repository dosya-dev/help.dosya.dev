---
{
  "articleId": "hc-file-list-grid",
  "locale": "en",
  "revision": 6,
  "title": "Switch between grid and list views",
  "summary": "Switch Files between grid and list, understand Live Photo and column differences, and confirm that folder, filters, selection, and data stay intact.",
  "category": "files",
  "articleSlug": "file-list-grid",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/web/src/lib/file-columns.tsx, and apps/web/src/pages/files.test.tsx on 2026-10-14. Production browser storage was not altered.",
  "related": [
    "hc-search-files",
    "hc-organize-files"
  ],
  "keywords": [
    "file list grid",
    "search, sort and views",
    "Dosya help",
    "cloud storage"
  ]
}
---
Grid and list change how the current Files result is presented. The choice is saved in this browser under `dosya_files_view`; it does not change the workspace or another device’s preference.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/file-list-grid-workflow-map-2026-10-14.webp" data-light-href="/screenshots/file-list-grid-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/file-list-grid-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/file-list-grid-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/file-list-grid-workflow-map-2026-10-14.webp" alt="Light and dark four-step map for opening Files, switching views, comparing names and actions, and confirming that only presentation changed." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The theme-aware map shows the visual-mode switch and the unchanged file-set check. <a class="workflow-map-full" href="/screenshots/file-list-grid-workflow-map-2026-10-14.webp" data-light-href="/screenshots/file-list-grid-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/file-list-grid-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**View differences.** Grid separates **Folders** and **Files** into cards and collapses a Live Photo still with its paired video. List uses a table and can show the twin video as a separate row. Its default columns are **Name**, **Size**, **Created**, and **Origin**; the column chooser can add other metadata, while **Name** remains required.

## Steps

1. Open **Files** in the intended workspace, folder, and filter state. Note a few filenames and the result count.
2. Use the two view-icon buttons in the toolbar to choose grid or list. In the ordinary folder view those icon buttons currently have no text label or tooltip, so identify them by the card-grid and row-list symbols.
3. In list view, open the column chooser when you need more metadata. Sorting and pagination continue to apply to the same current query.
4. Switch back and confirm the folder, filters, selected items, sorting, and underlying API result remain unchanged. A Live Photo can look like one grid item but more than one list row because of pair presentation.
5. Reload the page. The last chosen mode should return in the same browser profile.

<figure class="help-screenshot"><a href="/screenshots/search-files-results-2026-10-12.webp"><img src="/screenshots/search-files-results-2026-10-12.webp" alt="Files search results in a table with a selection checkbox, filename, size, creation date, origin, view buttons, and Columns control." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The reference screenshot shows the denser list presentation and the toolbar controls used to compare file metadata. <a href="/screenshots/search-files-results-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**What can reset the preference.** Clearing site data, using a private window, or changing browser/profile removes or isolates the local setting. The workspace does not sync this preference between people.

**If the sets appear different.** Clear the search and filter controls, compare the current folder URL, and account for Live Photo pairing before reporting missing data. Switching views does not upload, copy, move, rename, or delete anything. A truly missing item should also be absent after refreshing the same folder in both modes.

## Expected result

The selected layout persists locally, while the current folder query and stored files remain unchanged. Grid emphasizes visual cards; list exposes denser rows and configurable metadata.

## Related guides

- [Search within the active Files view](/files/search-files)
- [Organize items after choosing a layout](/files/organize-files)
