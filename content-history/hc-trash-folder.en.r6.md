---
{
  "articleId": "hc-trash-folder",
  "locale": "en",
  "revision": 6,
  "title": "Move a folder to Deleted items",
  "summary": "Move a folder subtree to Deleted items, understand permission and lock checks, revoked links, retained storage, and permanent-delete boundaries.",
  "category": "files",
  "articleSlug": "trash-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/web/src/pages/files.tsx, apps/desktop/src/renderer/pages/FileBrowserPage.tsx, apps/api/src/pages/api/folders/[id]/index.ts, apps/api/src/pages/api/files/batch-delete.ts, apps/api/src/lib/folder-trash.ts, and folder trash tests. Production behavior was not tested during this documentation update.",
  "related": [
    "hc-restore-deleted",
    "hc-permanent-delete"
  ],
  "keywords": [
    "trash folder",
    "trash and restore",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Deleting a live folder normally moves its authorized subtree to **Deleted**. It is recoverable until someone explicitly purges that trash root; Dosya does not automatically expire folder trash.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/trash-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-folder-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/trash-folder-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/trash-folder-workflow-map-2026-10-14.webp" alt="Dosya folder deletion flow from subtree review to the recoverable Deleted root and later permanent-delete boundary." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The first delete records one trash root for the complete authorized subtree while keeping its bytes recoverable. <a class="workflow-map-full" href="/screenshots/trash-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-folder-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- A folder you created uses `delete_own_files`; a folder created by another member needs `delete_any_file`. Every live descendant must also pass the applicable ownership and lock rules.
- Direct `view_only` or `full_lock`, an un-unlocked ancestor, a locked descendant file, or a protected WordPress backup can block deletion.
- Folder-confined members can delete only within their assigned subtree.
- Deletion revokes active share links for the root, child folders, and descendant files. Restoring the tree does not reactivate those links.

## Steps

1. Open the folder menu and choose **Delete**.
2. Read **Delete folder?** and verify the displayed root name. For a bulk selection, read **Delete selected items?** and the warning that everything inside selected folders is included.
3. Press **Delete** once. Avoid repeating the API action outside the UI: a second plain DELETE against an already-trashed root begins permanent purge.
4. Wait for **Deleted**, then open **Deleted** from the Files navigation.
5. Locate the folder root by its original display name. Descendants are attached to this root and may not appear as independent entries in the flat Deleted view.
6. Leave the root there for recovery, choose **Restore**, or use the separately labelled **Delete permanently** only after confirming the subtree is no longer needed.

<figure class="help-screenshot"><a href="/screenshots/deleted-items-2026-10-12.webp"><img src="/screenshots/deleted-items-2026-10-12.webp" alt="Dosya Deleted view showing a trashed folder root with Restore and Delete permanently actions." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The Deleted entry represents the entire swept tree; permanent deletion acts on its descendant files and folder rows. <a href="/screenshots/deleted-items-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The root and its authorized descendants disappear from live browsing and sync snapshots. Their parent relationships, bytes, and storage charge remain recorded for restore. Existing share links return as revoked rather than continuing to expose deleted content.

## Troubleshooting

- **“This folder is locked and cannot be deleted.”** Remove or change the folder’s direct lock before trying again.
- **“This folder is inside a locked folder. Unlock the folder to delete it.”** Unlock the ancestor chain with the same account.
- **“This folder contains a locked file and cannot be deleted.”** Find that descendant and resolve its lock; Dosya will not silently leave it behind.
- **“This folder contains items you don’t have permission to delete.”** A descendant belongs to another member and your role lacks `delete_any_file`. Ask an authorized member to delete the tree.
- **The root is absent from Deleted.** Refresh the current workspace and verify that the first request succeeded. A hidden or unauthorized root can be skipped during a batch.
- **Storage did not decrease.** This is expected for recoverable trash. Only completed permanent purge releases the stored bytes.

## Related guides

- [Restore deleted items](/files/restore-deleted)
- [Permanently delete files](/files/permanently-delete-files)
