---
{
  "articleId": "hc-remove-favourite",
  "locale": "en",
  "revision": 6,
  "title": "Remove an item from Favourites",
  "summary": "Remove a personal file shortcut from Favourites without moving or deleting its source, then confirm both the sidebar and original file state.",
  "category": "files",
  "articleSlug": "remove-favourite",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally source-reviewed on 2026-10-14 in apps/web/src/components/files-sidebar.tsx, apps/web/src/pages/files.tsx, apps/web/src/components/file-viewer.tsx, apps/mobile/src/player/useFavourite.ts, apps/mobile/src/files/mutations.ts, and apps/api/src/pages/api/favourites.ts. Production removal was deliberately not exercised.",
  "related": [
    "hc-organize-files",
    "hc-search-files"
  ],
  "keywords": [
    "remove favourite",
    "favourites and groups",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Removing a favourite deletes only your shortcut row. It does not send the source file to Trash, remove a version, revoke a share, or affect another member's list.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/remove-favourite-workflow-map-2026-10-14.webp" data-light-href="/screenshots/remove-favourite-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/remove-favourite-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/remove-favourite-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/remove-favourite-workflow-map-2026-10-14.webp" alt="Favourite removal path from the sidebar X or filled file star to the unchanged source file in Files." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Remove the personal pointer, then return to the original folder to prove the stored file remains. <a class="workflow-map-full" href="/screenshots/remove-favourite-workflow-map-2026-10-14.webp" data-light-href="/screenshots/remove-favourite-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/remove-favourite-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Note the file's original folder and name so you can distinguish shortcut removal from content deletion.
- In the browser, keep the **Favourites** section expanded. Its X button appears when you hover the row and has the tooltip **Remove favourite**.
- The file action menu may instead say **Remove favourite**, while grid and viewer star buttons use **Remove from favourites**. All three remove the same per-user row.

## Steps

1. Choose one removal control:
   - Hover the browser sidebar favourite and select its X button.
   - Open the file menu and choose **Remove favourite**.
   - Select the filled star labelled **Remove from favourites** in a grid or viewer.
   - In the mobile audio player, tap **Remove favourite**.
2. Wait until the request completes. Browser controls update only on success; the mobile player removes the cached favourite immediately and restores it if the request fails. Error copy differs by browser control, so note whether you used the sidebar X or a star/menu action.
3. Refresh or reopen Favourites and confirm the shortcut no longer appears.
4. Browse to the file's recorded folder and open it. Check that its name, size, current version, and comments still exist.

The deletion endpoint is idempotent for your shortcut. Removing an already-absent favourite still returns success and does not emit a misleading removal event. It cannot remove a favourite owned by another account because the server always binds the deletion to the signed-in user.

<figure class="help-screenshot"><a href="/screenshots/organize-create-group-2026-10-12.webp"><img src="/screenshots/organize-create-group-2026-10-12.webp" alt="Favourites list and Files organization area used to compare a removed shortcut with its retained source file." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The shortcut disappears from the personal navigation list while the original file remains available at its normal path. <a href="/screenshots/organize-create-group-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Your Favourites list no longer contains that file, and the file is still stored in its original folder. Storage usage and workspace permissions do not change.

There is no destructive effect to undo. To restore the shortcut, open the source file and use **Add to favourites** again.

## Troubleshooting

**The sidebar X is not visible.** Move the pointer over the favourite row, or use the filled star on the file.

**The sidebar X reports “Remove failed.”** Its detail is **Could not remove from favourites.** The shortcut remains in the sidebar; restore network access and retry that X control.

**A grid, menu, or viewer star reports “Something went wrong.”** Its detail is **Could not update favourites.** The old star remains selected. Retry after connectivity returns; **Delete** is a separate content action.

**The shortcut vanished before you removed it.** A hidden rule or unopened full-lock ancestor can filter it from Favourites. Find the file through an allowed path or regain access before changing the saved pointer.

## Related guides

- [Organize files](/files/organize-files)
- [Search files](/files/search-files)
