---
{
  "articleId": "hc-selection-contiguous-file-group",
  "locale": "en",
  "revision": 5,
  "title": "Select a contiguous group of files",
  "summary": "Select a contiguous visual run without a Shift-range shortcut by using row checkboxes or Select all plus deselection, then verify every included item.",
  "category": "files",
  "articleSlug": "selection-contiguous-file-group",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/files.tsx, apps/web/src/components/select-checkbox.tsx, apps/web/src/components/library/library-view.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-select-multiple-files",
    "hc-clear-file-selection"
  ],
  "keywords": [
    "selection contiguous file group",
    "Multi-file selection operations",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya’s web Files list does not implement Shift-click range selection. A contiguous group must be built with the row checkboxes, or by using **Select all** and removing every row outside the intended run.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/selection-contiguous-file-group-help-workflow-2026-10-14.webp" data-light-href="/screenshots/selection-contiguous-file-group-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/selection-contiguous-file-group-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/selection-contiguous-file-group-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/selection-contiguous-file-group-help-workflow-2026-10-14.webp" alt="Contiguous-selection workflow: order the intended run, use Select all only when efficient, inspect both boundaries, and start the batch action after count and highlights agree." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Contiguous-selection workflow: order the intended run, use Select all only when efficient, inspect both boundaries, and start the batch action after count and highlights agree. <a class="workflow-map-full" href="/screenshots/selection-contiguous-file-group-help-workflow-2026-10-14.webp" data-light-href="/screenshots/selection-contiguous-file-group-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/selection-contiguous-file-group-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Checkboxes appear on hover and remain visible once selection exists. Ctrl-click on Windows/Linux or Command-click on macOS toggles one row, but Shift-click has no range meaning. Full-lock files are excluded until unlocked.

## Steps

1. Sort files into a visible adjacent run, then note the first and last names.
2. Build the contiguous selection from the first row's checkbox through each following row at the last boundary.
3. For a mostly selected page, use **Select all** and deselect every file or folder outside the run instead.
4. Compare the `_N_ selected` count with the number of intended rows, including any selected folders.
5. Inspect both selection boundary rows and scan for a highlighted item beyond either boundary.
6. Choose the batch action only after the count and every highlight agree; use **Clear** to restart when they do not.

**Select all** covers the items currently loaded in the view and excludes locked files that have not been unlocked. It can include folders as well as files. Batch sharing accepts either one folder or a set of files, not a mixed selection, even when the items look contiguous.

## Expected result

Every intended row from the first boundary through the last is selected exactly once, no outside row is highlighted, and the batch count matches the reviewed set without relying on an unsupported Shift gesture.

## Related guides

- [Select multiple files](/files/select-multiple-files)
- [Clear a file selection](/files/clear-file-selection)
