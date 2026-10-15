---
{
  "articleId": "hc-clear-file-selection",
  "locale": "en",
  "revision": 6,
  "title": "Clear a multi-file selection",
  "summary": "Clear every selected file and folder from the Files bulk bar, understand automatic selection resets, and avoid carrying stale items into an action.",
  "category": "files",
  "articleSlug": "clear-file-selection",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source reviewed locally on 2026-10-14 against apps/web/src/pages/files.tsx, apps/web/src/hooks/use-files-listing.ts, apps/web/src/lib/files-request.ts, and apps/web/src/lib/library-request.ts. The selection workflow was not exercised on the production Files page.",
  "related": [
    "hc-organize-files",
    "hc-move-rename"
  ],
  "keywords": [
    "clear file selection",
    "batch file actions",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
The browser Files page keeps selected file IDs and folder IDs in client memory. **Clear** drops both sets without calling the API, so no stored object or server job changes.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/clear-file-selection-workflow-map-2026-10-14.webp" data-light-href="/screenshots/clear-file-selection-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/clear-file-selection-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/clear-file-selection-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/clear-file-selection-workflow-map-2026-10-14.webp" alt="Files bulk bar with a selected-item badge and the Clear button that removes every file and folder highlight." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the bulk bar's Clear control, then confirm its badge and every selection highlight are gone. <a class="workflow-map-full" href="/screenshots/clear-file-selection-workflow-map-2026-10-14.webp" data-light-href="/screenshots/clear-file-selection-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/clear-file-selection-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Use the browser Files page; the described bulk bar is a web control.
- Check the badge, such as **3 selected**, before clearing so you can verify the complete reset.
- If a confirmation dialog for Delete or another operation is already open, cancel that dialog first. Clearing selection does not reverse a request that has already started.

## Steps

1. Find the highlighted rows or cards. Folders and files contribute to the same selected count.
2. In the bulk action bar, select **Clear** beside **Select all**.
3. Wait for the bar's 140 ms collapse animation, or its immediate reduced-motion equivalent.
4. Confirm the selected badge disappears and every checkbox, ring, or highlighted row returns to its ordinary state.
5. Start the next selection from zero.

Changing the workspace, folder, filter, group, search text, sort, regular-list page, library kind, or library sort also clears selection automatically. A background data refresh does not wipe an in-progress set merely because rows changed.

<figure class="help-screenshot"><a href="/screenshots/organize-files-overview-2026-10-12.webp"><img src="/screenshots/organize-files-overview-2026-10-12.webp" alt="Files overview used to verify that no card, folder row, or file row remains marked after clearing selection." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>An empty selection leaves the Files view unchanged and removes the bulk-action bar from interaction. <a href="/screenshots/organize-files-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The current selection count becomes zero, the bulk bar is inert and collapsed, and no batch endpoint receives a request. Files, folders, favourites, groups, versions, and storage totals remain untouched.

There is no undo record because clearing is only a local UI reset. Re-select the required items if you cleared by mistake.

## Troubleshooting

**Clear is not visible.** The bulk bar appears only after at least one checkbox or modifier-click selection. If no item is highlighted, there is nothing left to clear.

**The old count flashes while the bar closes.** The component intentionally retains its final count during the 140 ms collapse so the label does not briefly read zero. It cannot be clicked once selection is empty.

**A batch action continued.** Clear does not cancel a move, delete, restore, or archive job already submitted. Read that operation's result toast and refresh the affected folder.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files](/files/move-and-rename)
