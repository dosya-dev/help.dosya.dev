---
{
  "articleId": "hc-mobile-move-file",
  "locale": "en",
  "revision": 6,
  "title": "Move a file on mobile",
  "summary": "Move one cloud file to a visible folder in its workspace, handle confinement, lock, and collision errors, and confirm the metadata-only result.",
  "category": "files",
  "articleSlug": "mobile-move-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally with apps/mobile/app/pick-destination.tsx, src/files/FileActionsSheet.tsx, mutations.ts, mutationHooks.ts and apps/api/src/pages/api/files/[id]/move.ts plus gated tests. The revised guide is awaiting production publication.",
  "related": ["hc-mobile-browse", "hc-mobile-permissions"],
  "keywords": ["mobile move file", "mobile file actions", "move cloud file", "cloud storage", "file backup"]
}
---
Move relocates one stored file between folders in its current workspace. It changes cloud metadata rather than downloading or duplicating bytes, and the mobile picker cannot transfer an object to another workspace.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-move-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-move-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-move-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-move-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-move-file-workflow-map-2026-10-14.webp" alt="Mobile move-file flow from the source action sheet through folder-only navigation and server-side destination checks." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Navigate the current workspace's folder tree, choose the directory shown, and let the API validate both source and destination. <a class="workflow-map-full" href="/screenshots/mobile-move-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-move-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-move-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Files**, select the correct workspace, and locate the object to move.
2. Open its actions and press **Move**. The action is displayed for roles whose loaded permission set includes `upload_files`; the API verifies that permission again when you submit.
3. On **Move to…**, tap folders to descend. The picker shows subfolders only, sorted by name; **No sub-folders** means the directory currently displayed has no visible child folders, but that directory can still be selected.
4. Press **Move here** to use the currently displayed directory. At the top level, this means workspace root.
5. Wait for **Moved**. The picker then closes and file queries refresh. Open the destination and confirm the item is absent from its previous folder.

The picker uses the active workspace and offers no cross-workspace destination. A folder-confined member may browse and move only within the assigned anchor. Choosing workspace root while confined produces **You cannot move a file outside the folder you're confined to**; selecting a source outside scope returns **This file is outside the folder you're confined to**.

Other exact refusals identify the failed gate:

- **You don't have permission to move files** means the role lacks `upload_files`.
- **This file is locked and cannot be moved** protects a locked source.
- **This file is inside a locked folder. Unlock the folder to move it.** applies to a locked ancestor.
- **Target folder not found** covers a missing or hidden destination.
- **Target folder is locked** prevents writing there.
- **File is already in this folder** rejects a no-op.
- **A file with this name already exists in the target folder** blocks a collision; mobile does not auto-rename the moved file.

A live WordPress backup lock can also refuse a source or destination and includes the UTC time until which that backup is protected. The error toast comes from the server, the picker remains open, and no partial move is committed.

On success, the API changes the file's folder reference, invalidates source and destination listings and sync snapshots, and records `file_moved` activity. The same file ID, stored bytes, and version history remain. This is immediately shared cloud state; there is no dedicated undo button. Move the file back manually if the destination was wrong.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="iPhone and Android app download cards for the native cloud-file destination picker." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the current mobile client to access the folder-only **Move to…** picker described above. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

After refresh, the existing cloud object appears once in the chosen folder and no longer appears in the source listing. No device copy is created, and workspace storage usage should not increase merely because of the move.

When an error persists, resolve the named role, confinement, lock, destination, or collision condition before retrying. Switching the workspace header changes what Files displays, but it does not turn Move into a transfer between workspaces.

## Related guides

- [Locate stored files from mobile](/files/mobile-browse-files)
- [Understand mobile access controls](/account/mobile-permissions)
