---
{
  "articleId": "hc-favourite-file",
  "locale": "en",
  "revision": 6,
  "title": "Add a file to Favourites",
  "summary": "Add a file shortcut to Favourites from Files, understand visibility and workspace rules, and recover when the star or favourite list does not update.",
  "category": "files",
  "articleSlug": "favourite-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally on 2026-10-14 using apps/web/src/pages/files.tsx, apps/web/src/components/files-sidebar.tsx, apps/web/src/components/file-viewer.tsx, apps/mobile/src/files/FileActionsSheet.tsx, apps/mobile/src/files/mutationHooks.ts, apps/api/src/pages/api/favourites.ts, and apps/api/src/pages/api/favourites.unit.test.ts. No favourite was added through the production service.",
  "related": [
    "hc-organize-files",
    "hc-search-files"
  ],
  "keywords": [
    "favourite file",
    "favourites and groups",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
A favourite is a personal pointer to an existing cloud file. It consumes no extra storage, does not move the file, and is not shared with other workspace members.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/favourite-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/favourite-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/favourite-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/favourite-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/favourite-file-workflow-map-2026-10-14.webp" alt="File favourite flow showing the Files action menu, Add to favourites command, filled star, and sidebar shortcut." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Add the pointer from the file itself, then verify the filled star and its personal sidebar entry. <a class="workflow-map-full" href="/screenshots/favourite-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/favourite-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/favourite-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Select the intended workspace and open **Files**.
- The role must have **Files page** access. Favourites are unavailable to a member confined to one folder, and an API key pinned to another workspace is refused.
- Locate a live, visible file. A file hidden from you returns “File not found”; one below an unopened full-lock folder returns “folder_locked.”

## Steps

1. In the browser, open the file's action menu and choose **Add to favourites**. You can also use the star button on a grid tile or in the full file viewer.
2. On mobile, open the file action sheet and tap **Add to favourites**. The audio player uses an **Add favourite** accessibility label for the same personal pointer.
3. Wait for the request to finish. The browser fills the star only after the server accepts the addition; mobile refreshes its Files and Favourites queries after success.
4. In the browser's left sidebar, expand **Favourites** and locate the filename. On mobile, open **Settings → Favourites**.
5. Open the entry and confirm it resolves to the same file ID, name, and workspace location.

The API permits one favourite row per user and file. A duplicate request returns “Already in favourites” with status 409. The normal client changes the control to a removal state after success, which prevents an ordinary second add.

<figure class="help-screenshot"><a href="/screenshots/organize-create-group-2026-10-12.webp"><img src="/screenshots/organize-create-group-2026-10-12.webp" alt="Files organization sidebar where a successfully starred file appears under the personal Favourites heading." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>A favourite entry opens the original object; it is not a copied file or a new storage location. <a href="/screenshots/organize-create-group-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The chosen file has a filled star and appears in your personal Favourites list. Its folder path, bytes, versions, sharing state, comments, and storage usage stay the same.

If the file is later hidden from you or placed below a full-lock folder you have not unlocked, Dosya filters the shortcut from the list without deleting the saved favourite row. It can reappear when access returns.

## Troubleshooting

**The star is missing.** Open a live file rather than a folder or Trash item. The reviewed browser workflow exposes favourites for files.

**The toast says “Could not update favourites.”** The browser leaves its old state in place. Check connectivity, workspace membership, Files access, and any enclosing folder lock, then retry once.

**The sidebar did not change.** Refresh Files or switch away and back to the workspace. The page and sidebar keep separate state and synchronize after a successful request.

## Related guides

- [Organize files](/files/organize-files)
- [Search files](/files/search-files)
