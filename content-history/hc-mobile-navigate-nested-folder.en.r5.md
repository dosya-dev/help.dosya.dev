---
{
  "articleId": "hc-mobile-navigate-nested-folder",
  "locale": "en",
  "revision": 5,
  "title": "Navigate to a deeply nested folder on mobile",
  "summary": "Reach a deeply nested mobile folder using the workspace header, current-folder title, and Back stack, while accounting for global workspace search.",
  "category": "files",
  "articleSlug": "mobile-navigate-nested-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/(tabs)/(files)/index.tsx, apps/mobile/app/(tabs)/(files)/folder/[id].tsx, apps/mobile/src/files/FileBrowser.tsx, apps/mobile/src/files/FolderRow.tsx, apps/mobile/app/search.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-switch-account"
  ],
  "keywords": [
    "mobile navigate nested folder",
    "Mobile navigation and search details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Mobile folder navigation is a stack of screens. Each folder opens a new route whose native header title is that folder’s name. The released Files browser does not display a full breadcrumb trail.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-navigate-nested-folder-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-navigate-nested-folder-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-navigate-nested-folder-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-navigate-nested-folder-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-navigate-nested-folder-help-workflow-2026-10-14.webp" alt="Nested-folder workflow showing workspace confirmation, sequential folder rows, the current native header title, Back navigation, and final file-list verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Nested-folder workflow: confirm the workspace, open each folder in order, check the current header title and item count, use Back for wrong turns, and verify the final list. <a class="workflow-map-full" href="/screenshots/mobile-navigate-nested-folder-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-navigate-nested-folder-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-navigate-nested-folder-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Folder rows show the name, item count, lock state, hidden state when applicable, and a chevron. The folder screen’s search button searches the whole active workspace, not only the current folder.

## Steps

1. Confirm the active workspace in the Files header before entering the path.
2. Open the first folder and check that its name becomes the screen title.
3. Continue one folder at a time, comparing each row’s name and item count with the intended path.
4. Use the native Back arrow immediately after a wrong turn; there is no breadcrumb segment picker.
5. At the final level, verify the title, expected files, filter chip, sort order, and list or grid mode.
6. Open the target file and confirm its filename and preview before saving, sharing, moving, or deleting it.

### Search behavior inside a folder

The magnifying glass in a folder header opens **Search**, but the API query is scoped only to the active workspace. Results can come from other folders. Search rows do not display a folder path, so use size, added date, preview, and details to distinguish same-named files.

### Loading and access states

**Couldn’t load files.** offers **Retry** and is not an empty folder. **This folder is empty.** means the listing succeeded with no visible rows. A lock icon means access restrictions apply, while a folder-confined role may be unable to navigate above or outside its assigned root.

Pull to refresh reloads the current folder. Pagination fetches later pages as you approach the end; do not conclude a large folder is complete until loading at the footer has finished.

## Expected result

The native header names the current folder at every level, Back returns one level through the navigation stack, and the final file list belongs to the selected workspace and folder route. Search remains workspace-wide.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Switch mobile accounts](/account/mobile-switch-account)
