---
{
  "articleId": "hc-selection-verify-count",
  "locale": "en",
  "revision": 5,
  "title": "Verify a multi-file selection count",
  "summary": "Confirm the Files selection badge against visible highlighted rows, page boundaries, locked items, and Live Photo companions before a batch action.",
  "category": "files",
  "articleSlug": "selection-verify-count",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/web/src/lib/live-photos.ts, and apps/web/src/lib/files-request.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-select-multiple-files",
    "hc-clear-file-selection"
  ],
  "keywords": [
    "selection verify count",
    "Multi-file selection operations",
    "Dosya help",
    "cloud storage"
  ]
}
---
The **N selected** badge counts selected file rows plus selected folder rows in the current view. It does not mean every match across all result pages has been selected.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/selection-verify-count-workflow-map-2026-10-14.webp" data-light-href="/screenshots/selection-verify-count-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/selection-verify-count-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/selection-verify-count-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/selection-verify-count-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for selecting rows, comparing visible highlights with the selection badge, checking the current page, and clearing mistakes." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The count workflow focuses on what the current Files page will send to a batch action. <a class="workflow-map-full" href="/screenshots/selection-verify-count-workflow-map-2026-10-14.webp" data-light-href="/screenshots/selection-verify-count-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/selection-verify-count-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Selection scope.** Standard folder and search listings are paginated. Moving to **Previous** or **Next**, changing the folder, search, filter, workspace, or view identity clears the selection. In a Library view, **Select all** covers only the items already loaded, not items still available through **Load more**.

## Steps

1. Open the exact folder, filter, or library section where the batch action will run. Note **Page X of Y** when pagination is present.
2. Select rows using their checkboxes or Ctrl/Command-click. A normal click opens or navigates instead of extending the set.
3. Compare every highlighted row with the **N selected** badge. The total combines files and folders; it does not count the contents inside a selected folder.
4. If you use **Select all**, inspect the current page before proceeding. Fully locked files are omitted unless already unlocked, while folders on the page are included.
5. For a Live Photo, the badge counts the selected row. Delete or move may also include its paired video and disclose that companion separately in the confirmation copy.
6. Choose **Clear** and rebuild the set if the badge or highlights do not match your intended targets. Do this before **Move**, **Delete**, **Restore**, or **Delete permanently**.

<figure class="help-screenshot"><a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Files list with release-notes.txt and annual-report.pdf selected and a toolbar badge reading 2 selected." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Two highlighted file rows match the visible 2 selected badge in this Files-page example. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Keyboard behavior.** Ctrl+A or Command+A selects the files and folders loaded in this view when focus is outside an input or editor. The text editor stops its keystrokes from reaching this page-wide shortcut, so selecting text there does not select file rows.

## Expected result

The badge equals the number of intended selected rows on the active page. You understand any paired-media side effect before confirmation and can name each row the next batch command will address.

## Related guides

- [Build a multi-file selection](/files/select-multiple-files)
- [Remove all selected-row state](/files/clear-file-selection)
