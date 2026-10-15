---
{
  "articleId": "hc-file-move-confirm-destination",
  "locale": "en",
  "revision": 5,
  "title": "Confirm a destination before moving a file",
  "summary": "Confirm a file-move destination by workspace, folder tree, search result, and final listing before committing a location change with no automatic undo.",
  "category": "files",
  "articleSlug": "file-move-confirm-destination",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/folder-picker-dialog.tsx, apps/web/src/pages/files.tsx, and apps/api/src/pages/api/files/[id]/move.ts on 2026-10-14. Production folders were unchanged.",
  "related": [
    "hc-move-rename",
    "hc-copy-file"
  ],
  "keywords": [
    "file move confirm destination",
    "File move and copy safeguards",
    "Dosya help",
    "cloud storage"
  ]
}
---
The move picker displays folders from the active workspace. Confirm the full hierarchy before committing because identical folder names can exist under different parents and the web app has no automatic undo.

<figure class="help-screenshot"><a href="/screenshots/file-move-confirm-destination-help-workflow-2026-10-14.webp"><img src="/screenshots/file-move-confirm-destination-help-workflow-2026-10-14.webp" alt="Four-step map for opening Move to folder, expanding the path, selecting the final folder, moving a sample, and verifying the destination." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map emphasizes workspace and parent-path checks before a move is committed. <a href="/screenshots/file-move-confirm-destination-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Picker controls.** The dialog title is **Move to folder**. It provides **Search folders...**, **Root**, a lazily expanded tree, **New folder in “…”** or **New folder at root**, **Cancel**, and **Move**. Search begins after a 250 ms typing pause.

## Steps

1. Confirm the active workspace and the source file’s name, folder, and ID before opening its context menu.
2. Choose **Move to...**. Expand the tree from a known ancestor instead of selecting the first search result with a matching leaf name.
3. Select the exact destination and reread its parent chain. If you create a folder from this dialog, verify whether the label says **New folder in “…”** or **New folder at root** before naming it.
4. Choose **Move** once. Success reports **Moved — The file has been moved.**
5. Open the destination folder and confirm the file appears with the same ID and expected metadata. Check the old folder to ensure it no longer lists the item.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Move to folder dialog showing Root and a hierarchy containing Projects, Brand assets, and Client contracts." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The image shows the folder tree and selected-parent context used to distinguish similarly named destinations. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Server-side validation.** The destination must be a live, visible folder in the same workspace. A locked target returns `Target folder is locked`; an absent or hidden target returns `Target folder not found`; selecting the current folder returns `File is already in this folder`. Confinement requires both the source and target inside the member’s allowed subtree.

**Name collision.** Dosya never overwrites another file. If the target already contains the same name, the API returns `A file with this name already exists in the target folder`. Rename one item or choose another folder, then reopen the picker. The generic web failure toast is **Move failed — The file could not be moved.**

**Reversal.** Moving back is possible only if the old folder still exists, remains accessible, and has no conflicting name. Record the source location when a later reversal matters.

## Expected result

The same file record appears in the confirmed destination and no longer appears in its previous folder. Its bytes, versions, and storage allocation remain unchanged.

## Related guides

- [Review all file move and rename rules](/files/move-and-rename)
- [Choose Copy when the source must remain](/files/copy-file)
