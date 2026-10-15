---
{
  "articleId": "hc-selection-nonadjacent-files",
  "locale": "en",
  "revision": 5,
  "title": "Select nonadjacent files",
  "summary": "Select separated web files with checkboxes or Command/Ctrl-click, understand locked-row and mixed-type limits, and verify the exact batch count.",
  "category": "files",
  "articleSlug": "selection-nonadjacent-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/files.tsx, apps/web/src/components/select-checkbox.tsx, apps/web/src/components/library/library-view.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-select-multiple-files",
    "hc-clear-file-selection"
  ],
  "keywords": [
    "selection nonadjacent files",
    "Multi-file selection operations",
    "Dosya help",
    "cloud storage"
  ]
}
---
Nonadjacent selection is additive on the web Files page. Use each row’s checkbox, or Command-click on macOS and Ctrl-click on Windows or Linux, to toggle separated items without opening them.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/selection-nonadjacent-files-help-workflow-2026-10-14.webp" data-light-href="/screenshots/selection-nonadjacent-files-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/selection-nonadjacent-files-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/selection-nonadjacent-files-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/selection-nonadjacent-files-help-workflow-2026-10-14.webp" alt="Nonadjacent-selection workflow: start with one file, verify every highlight and the combined count, choose a compatible batch action, or use Clear without changing files." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Nonadjacent-selection workflow: start with one file, verify every highlight and the combined count, choose a compatible batch action, or use Clear without changing files. <a class="workflow-map-full" href="/screenshots/selection-nonadjacent-files-help-workflow-2026-10-14.webp" data-light-href="/screenshots/selection-nonadjacent-files-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/selection-nonadjacent-files-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

In a normal folder list, clicking an ordinary row without the modifier opens its details instead of adding it. In an Images, Videos, or Documents library, an ordinary row click toggles the row after selection mode has started. A full-lock file cannot enter the set until it is unlocked.

## Steps

1. Begin the nonadjacent selection with the first file’s checkbox or the platform’s Command/Ctrl-click modifier.
2. Extend the nonadjacent selection by toggling each separated file while leaving intervening rows unselected.
3. Read the combined `_N_ selected` count and inspect every highlighted filename.
4. Correct the nonadjacent selection by clicking a selected checkbox or repeating Command/Ctrl-click on an accidental choice.
5. Confirm the offered action supports the selection: Share allows a set of files, but not files mixed with folders.
6. Run the action only after review, or press **Clear** to discard the entire set without changing any files.

The selection belongs to the current view and clears when the folder, library view, search query, or workspace changes. Command/Ctrl+A invokes **Select all** for the loaded view; it is not an additive shortcut for one extra row. Deletion still requires its own confirmation.

## Expected result

Only the individually chosen files are highlighted, the batch count matches them, and intervening rows stay untouched. Clearing the set changes no cloud content.

## Related guides

- [Select multiple files](/files/select-multiple-files)
- [Clear a file selection](/files/clear-file-selection)
