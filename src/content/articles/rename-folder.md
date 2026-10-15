---
{
  "articleId": "hc-rename-folder",
  "locale": "en",
  "revision": 6,
  "title": "Rename a folder without losing contents",
  "summary": "Rename a Dosya folder without moving or re-uploading its contents, using exact name limits and resolving sibling-name or permission conflicts.",
  "category": "files",
  "articleSlug": "rename-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/web/src/pages/files.tsx, apps/mobile/src/files/mutations.ts, apps/desktop/src/renderer/pages/FileBrowserPage.tsx, apps/api/src/pages/api/folders/[id]/rename.ts, packages/shared/src/validation/policy.ts, and rename conflict tests. Production behavior was not tested during this documentation update.",
  "related": [
    "hc-organize-files",
    "hc-move-rename"
  ],
  "keywords": [
    "rename folder",
    "folder management",
    "Dosya help",
    "cloud storage"
  ]
}
---
Renaming changes one folder label under its existing parent. The folder ID, descendants, stored file bytes, and workspace usage remain the same.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/rename-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/rename-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/rename-folder-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/rename-folder-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rename-folder-workflow-map-2026-10-14.webp" alt="Dosya Rename dialog changing a folder label while its parent and child tree remain fixed." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The rename writes a new label to the same folder row and refreshes path-based listings for its parent. <a class="workflow-map-full" href="/screenshots/rename-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/rename-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/rename-folder-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- The current role needs `rename_folders`. Web, mobile, and desktop hide **Rename** when that role grant is absent.
- A folder name is one path segment from 1 through 100 trimmed characters. `/`, `\`, control characters, `.`, and `..` are invalid.
- Check the current parent for a live sibling with the proposed name. The server refuses collisions instead of merging folders.
- A folder inside a locked WordPress backup, or one containing a protected backup relationship, cannot be renamed until that backup lock permits it.

## Steps

1. Open the folder’s context or actions menu and choose **Rename**.
2. In the **Rename** dialog, replace the folder name. Do not enter a nested path; use **Move to...** for a parent change.
3. Press **Rename** or Enter.
4. Wait for **Renamed** or **The folder has been renamed**.
5. Refresh the current parent and open the renamed folder.
6. Inspect its breadcrumb and one nested file to confirm the child tree remains available.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Dosya folder tree showing the renamed folder in the same parent location." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The renamed entry stays at the same tree level; only its path segment changes for sync and protocol clients. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The same folder ID appears under the same parent with the new name. Child folders and files are not rewritten. ID-based sharing continues to reference the same folder, while WebDAV, S3, desktop sync, or local bookmarks that use the old path must refresh to the new path.

## Troubleshooting

- **“Name is required.”** Enter at least one non-space character.
- **“Name too long (max 100).”** Shorten the folder name; the limit counts characters after trimming.
- **“Name contains invalid characters.”** Remove separators, control characters, or a whole-name `.` or `..` value.
- **“A folder with this name already exists in this folder.”** Choose a unique sibling name. The rejected request leaves the original name and contents unchanged.
- **“You don’t have permission to rename folders.”** Ask a workspace administrator for `rename_folders`.
- **The old name remains on another device.** Refresh the directory or wait for that client’s next sync snapshot. Do not create a second folder while a stale listing is visible.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files](/files/move-and-rename)
