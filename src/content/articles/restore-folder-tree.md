---
{
  "articleId": "hc-restore-folder-tree",
  "locale": "en",
  "revision": 6,
  "title": "Restore a deleted folder tree",
  "summary": "Restore a deleted folder tree to its original parent or workspace root, understand automatic conflict renaming, and verify every recovered child.",
  "category": "files",
  "articleSlug": "restore-folder-tree",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/web/src/pages/files.tsx, apps/desktop/src/renderer/pages/FileBrowserPage.tsx, apps/api/src/pages/api/folders/[id]/index.ts, apps/api/src/lib/folder-trash.ts, apps/api/src/lib/folder-trash.unit.test.ts, and folder restore tests. Production behavior was not tested during this documentation update.",
  "related": [
    "hc-restore-deleted",
    "hc-permanent-delete"
  ],
  "keywords": [
    "restore folder tree",
    "trash and restore",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Restoring a folder trash root brings back the folder rows and files swept by that delete action. Dosya preserves the nested relationships, then resolves the root’s current parent and name.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/restore-folder-tree-workflow-map-2026-10-14.webp" data-light-href="/screenshots/restore-folder-tree-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/restore-folder-tree-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/restore-folder-tree-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/restore-folder-tree-workflow-map-2026-10-14.webp" alt="Dosya folder restore flow choosing the trash root, resolving parent and name, and reviving the nested tree." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Restore revives the original subtree together, falling back to the workspace root or a numbered root name when necessary. <a class="workflow-map-full" href="/screenshots/restore-folder-tree-workflow-map-2026-10-14.webp" data-light-href="/screenshots/restore-folder-tree-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/restore-folder-tree-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open **Deleted** in the workspace where the folder was removed. Trash is workspace-scoped.
- Restore reuses deletion permissions: the creator needs `delete_own_files`; restoring someone else’s folder requires `delete_any_file`.
- Select the trash root, not a descendant swept in with it. A descendant request returns **This folder was deleted as part of another folder - restore that one instead**.
- Permanent deletion has no recovery path. If the root no longer appears in Deleted after a completed purge, this workflow cannot restore it.

## Steps

1. In **Deleted**, find the folder root and choose **Restore** from its menu or the selection bar.
2. Wait for **Restored**. Web includes the resolved folder name and warns when it was restored to the workspace root.
3. Open the original parent. If that parent is still live, locate the restored root there.
4. If the original parent is deleted or missing, return to the workspace root and find the restored folder.
5. If another live sibling already had the original name, look for `name (2)`, `name (3)`, and later available suffixes.
6. Open the restored root, traverse representative nested folders, and open sample files. Compare counts with what you expected from the deleted tree.
7. Recreate any sharing that is still needed. Links revoked at deletion remain revoked after restore.

<figure class="help-screenshot"><a href="/screenshots/deleted-items-2026-10-12.webp"><img src="/screenshots/deleted-items-2026-10-12.webp" alt="Dosya Deleted view with the Restore action used on a folder tree root." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Choose the root entry that represents the deletion action; child rows cannot be restored independently from that tree. <a href="/screenshots/deleted-items-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The folder and every row marked by that trash root return to live browsing in one restore operation. Storage usage does not increase because the trashed bytes never stopped counting. Hidden settings and nested parent relationships are retained; the root alone may receive a new parent or conflict-safe name.

## Troubleshooting

- **“You don’t have permission to restore this folder.”** Use an account whose role has the applicable own-or-any delete permission.
- **The restored folder is at root.** Its original parent is not live. The web toast states that it went to the workspace root; move it after restoring or recreating the parent.
- **The restored name changed.** Another sibling held the original name. Dosya chooses the first available numbered suffix through `(99)`, then a timestamped suffix if necessary.
- **A WordPress backup lock refuses the destination.** The original live parent is protected. Resolve that backup state before retrying the restore.
- **Only some expected content returns.** Restore revives exactly the files and folders swept by this root. Items deleted earlier as separate actions have their own Deleted entries and must be restored separately.
- **A second restore says the folder is not in the trash.** The first request already won and made the root live. Refresh Files rather than submitting again.

## Related guides

- [Restore deleted items](/files/restore-deleted)
- [Permanently delete files](/files/permanently-delete-files)
