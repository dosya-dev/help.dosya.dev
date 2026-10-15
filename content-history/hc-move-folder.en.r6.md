---
{
  "articleId": "hc-move-folder",
  "locale": "en",
  "revision": 6,
  "title": "Move a folder and its contents",
  "summary": "Move a complete Dosya folder tree without copying data, while resolving role, backup-lock, same-name, same-place, and cycle refusals safely.",
  "category": "files",
  "articleSlug": "move-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/web/src/pages/files.tsx, apps/mobile/app/pick-destination.tsx, apps/desktop/src/renderer/pages/FileBrowserPage.tsx, apps/api/src/pages/api/folders/[id]/move.ts, and apps/api/src/pages/api/folders/[id]/move.conflict.unit.test.ts. Production behavior was not tested during this documentation update.",
  "related": [
    "hc-organize-files",
    "hc-move-rename"
  ],
  "keywords": [
    "move folder",
    "folder management",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
A folder move reparents one folder and its entire live subtree inside the same workspace. It does not upload, duplicate, or re-encrypt the files below that folder.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/move-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/move-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/move-folder-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/move-folder-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/move-folder-workflow-map-2026-10-14.webp" alt="Dosya folder move workflow with source breadcrumb, destination selection, cycle checks, and refreshed path." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The destination becomes the root folder’s new parent while every nested file and folder stays attached beneath it. <a class="workflow-map-full" href="/screenshots/move-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/move-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/move-folder-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Use a role with `rename_folders`; Dosya uses that permission for structural folder moves.
- For a folder-confined member, the API requires the source folder to be inside the assigned subtree. It checks the destination only for a live, visible folder in the same workspace; a Dosya picker may narrow the choices it displays, but the move endpoint does not apply the source-confinement check to that destination.
- A locked WordPress backup cannot be moved or renamed, and another folder cannot be moved into its protected tree.
- Look for a sibling folder at the destination with the same name. Move never merges two folder trees.

## Steps

1. In **Files**, open the source folder’s menu and choose **Move to...** on web or desktop; mobile labels the action **Move to…**.
2. In **Move to folder** or **Move to…**, browse to the new parent. Leave the picker at the top level to move the folder to the workspace root.
3. Verify that the destination breadcrumb does not sit inside the source folder.
4. Choose **Move** or **Move here** and wait for **Moved** or **Moved successfully**.
5. Refresh the source parent and confirm the folder is gone from that level.
6. Open the destination, inspect the folder’s new breadcrumb, and check representative nested files and subfolders.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Dosya Move to folder picker used to choose a live parent for a complete folder subtree." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Choose the parent that should contain the moved root; the children do not need to be selected separately. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The folder keeps its ID and stored name, and all descendant relationships remain intact. Workspace storage does not change. Path-based clients see the old path disappear and the new path appear after their next refreshed listing or sync snapshot.

## Troubleshooting

- **“You don’t have permission to move folders.”** Ask an administrator for `rename_folders` or have an authorized member perform the move.
- **“Destination folder not found.”** The target was deleted, hidden from your role, foreign to the workspace, or stale in the picker. Refresh and choose a visible destination.
- **“Folder is already here.”** The selected parent is already the current parent; cancel without retrying.
- **“Cannot move a folder into itself” or “Cannot move a folder into its own subfolder.”** Move upward or choose a separate branch. No part of the tree was changed.
- **“A folder with this name already exists in the target folder.”** Rename either sibling first. Dosya leaves both trees separate and does not overwrite content.
- **The old path remains in a mounted client.** Refresh that client’s directory listing. The API invalidates web, sync, WebDAV, and S3 path caches, but a client can still display its own cached view briefly.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files](/files/move-and-rename)
