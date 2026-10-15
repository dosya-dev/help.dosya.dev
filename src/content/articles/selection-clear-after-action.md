---
{
  "articleId": "hc-selection-clear-after-action",
  "locale": "en",
  "revision": 5,
  "title": "Clear a selection after a batch action",
  "summary": "Clear web file and folder selections explicitly, know which completed batch actions clear them automatically, and prevent old IDs crossing view changes.",
  "category": "files",
  "articleSlug": "selection-clear-after-action",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/files.tsx, apps/web/src/components/select-checkbox.tsx, apps/web/src/lib/bulk-run.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-select-multiple-files",
    "hc-clear-file-selection"
  ],
  "keywords": [
    "selection clear after action",
    "Multi-file selection operations",
    "Dosya help",
    "cloud storage"
  ]
}
---
Selected files and folders are held separately on the web Files page, while the batch bar shows their combined count. Use **Clear** whenever you want to leave selection mode without starting another action.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/selection-clear-after-action-help-workflow-2026-10-14.webp" data-light-href="/screenshots/selection-clear-after-action-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/selection-clear-after-action-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/selection-clear-after-action-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/selection-clear-after-action-help-workflow-2026-10-14.webp" alt="Selection-clear workflow: inspect the combined count, press Clear, leave the old selection context, and verify the next harmless selection starts at one." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Selection-clear workflow: inspect the combined count, press Clear, leave the old selection context, and verify the next harmless selection starts at one. <a class="workflow-map-full" href="/screenshots/selection-clear-after-action-help-workflow-2026-10-14.webp" data-light-href="/screenshots/selection-clear-after-action-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/selection-clear-after-action-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Move, soft delete, permanent delete, restore, and other successful batch flows clear selection after they settle. The page also clears selection when the folder or view, library type, search query, or active workspace changes. A dialog cancel can leave the original rows selected so you can revise the choice.

## Steps

1. Read the `_N_ selected` count and inspect every highlighted file and folder before acting.
2. Complete or cancel the confirmation dialog while selection mode remains visible; do not assume Cancel changed the selected IDs.
3. Press **Clear** at the right side of the batch bar to empty both file and folder selections.
4. Confirm the batch bar collapses and every row checkbox or card highlight returns to its unselected state.
5. Navigate or search only after clearing when you want an unmistakably fresh selection context.
6. Select one harmless row and verify the new count starts at 1 before beginning the next batch operation.

A running batch operation can be non-cancelable even though its selection later clears; clearing the UI does not undo requests already sent. Deletion requires confirmation and may already have changed items by the time the final status appears. Use **Restore** from Deleted for reversible soft deletion; permanent deletion remains irreversible.

## Expected result

No previous file or folder remains highlighted, the batch toolbar is collapsed, and the next selected row starts a new count independent of the completed or cancelled action.

## Related guides

- [Select multiple files](/files/select-multiple-files)
- [Clear a file selection](/files/clear-file-selection)
