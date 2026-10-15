---
{
  "articleId": "hc-file-breadcrumbs",
  "locale": "en",
  "revision": 6,
  "title": "Use breadcrumbs to confirm file location",
  "summary": "Navigate folder breadcrumbs from a deep file path, return to root safely, preserve the current filter, and troubleshoot missing or locked paths.",
  "category": "files",
  "articleSlug": "file-breadcrumbs",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/web/src/lib/files-params.ts, and apps/web/src/pages/files.test.tsx on 2026-10-14. Production navigation was not exercised.",
  "related": [
    "hc-preview-files",
    "hc-organize-files"
  ],
  "keywords": [
    "file breadcrumbs",
    "file details and copy",
    "Dosya help",
    "cloud storage"
  ]
}
---
Breadcrumbs show the ancestor folders of the current Files location. Each segment is a navigation control, while the home icon returns to the workspace root.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/file-breadcrumbs-workflow-map-2026-10-14.webp" data-light-href="/screenshots/file-breadcrumbs-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/file-breadcrumbs-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/file-breadcrumbs-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/file-breadcrumbs-workflow-map-2026-10-14.webp" alt="Light and dark four-step map for opening Files, following each breadcrumb level, confirming the complete parent path, and refreshing." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The theme-aware map shows how the breadcrumb trail establishes the current folder hierarchy. <a class="workflow-map-full" href="/screenshots/file-breadcrumbs-workflow-map-2026-10-14.webp" data-light-href="/screenshots/file-breadcrumbs-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/file-breadcrumbs-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Where breadcrumbs appear.** The ordinary folder browser renders the home control and the `listing.breadcrumbs` ancestors. Library views such as Photos, Videos, and Documents use their library title and an all-folders scope instead of the same folder trail.

## Steps

1. Open **Files** in the intended workspace and enter the deepest folder you need.
2. Read the breadcrumb from left to right. Long labels can be visually truncated and the buttons have no tooltip, so open a segment and confirm the browser title and folder contents when two levels look similar.
3. Choose an ancestor segment to move directly to that folder. Dosya clears selected rows and updates the folder and page in the URL.
4. Choose the home icon to return to root. The current filter remains applied during folder navigation, so an apparently empty parent can still be filtered.
5. Use the browser title and visible folder contents to confirm the selected breadcrumb became the current location.

**Access and locks.** The server returns breadcrumbs only for a path visible to the signed-in member. Confinement can make a higher ancestor unavailable, and a full-lock folder may require its normal unlock flow before listing succeeds. A hidden or deleted folder can also make a saved URL stop resolving.

**If the path seems wrong.** Clear the active file filter, return home, and follow the known folder names again. Moving a file changes its folder reference, so an old written path can be stale even though the file still exists elsewhere. Breadcrumbs identify location; they do not record move history.

**What navigation changes.** Opening a breadcrumb changes the current listing and resets row selection. It does not move, copy, rename, or delete any item, and it does not alter workspace storage.

## Expected result

The Files page displays the chosen ancestor or root, the URL reflects that folder, and the breadcrumb trail matches the visible hierarchy. No file data changes during navigation.

## Related guides

- [Open a file after following its folder path](/files/preview-files)
- [Manage folders from the resolved location](/files/organize-files)
