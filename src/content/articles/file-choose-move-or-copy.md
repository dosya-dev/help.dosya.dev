---
{
  "articleId": "hc-file-choose-move-or-copy",
  "locale": "en",
  "revision": 5,
  "title": "Choose whether to move or copy a file",
  "summary": "Choose Move when one file should change folders or Copy when a separate stored item is needed, with clear permission, quota, and identity checks.",
  "category": "files",
  "articleSlug": "file-choose-move-or-copy",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/api/src/pages/api/files/[id]/move.ts, apps/api/src/pages/api/files/[id]/copy.ts, and apps/api/src/lib/repo/file-copy.ts on 2026-10-14. Production mutations were not run.",
  "related": [
    "hc-move-rename",
    "hc-copy-file"
  ],
  "keywords": [
    "file choose move or copy",
    "File move and copy safeguards",
    "Dosya help",
    "cloud storage"
  ]
}
---
Choose **Move to...** when the same file should live in another folder. Choose **Copy** when you need a second independent item and have storage for another full object.

<figure class="help-screenshot"><a href="/screenshots/file-choose-move-or-copy-help-workflow-2026-10-14.webp"><img src="/screenshots/file-choose-move-or-copy-help-workflow-2026-10-14.webp" alt="Four-step decision map comparing Move for a folder change with Copy for a separate second item, followed by a result-count check." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map highlights the identity and item-count difference between moving and copying. <a href="/screenshots/file-choose-move-or-copy-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Move behavior.** A move retains the file ID, bytes, versions, and storage usage, then changes the folder reference. The old path stops listing it. The web action opens **Move to folder**, where you can search folders, expand the tree, choose **Root**, create a folder, **Cancel**, or **Move**.

**Copy behavior.** Web **Copy** acts immediately in the current folder and names the result `Copy of {filename}`. It creates a new file ID and storage object, records the current user and client as the copy’s uploader and origin, and reserves the full byte size. The source remains unchanged.

## Steps

1. Decide whether links, comments, versions, and identity should continue to refer to one file. If yes, use **Move to...**. If the two items must be independently renamed, moved, or deleted, use **Copy**.
2. Confirm you have `upload_files`. Check the destination is in the same workspace, visible, unlocked, and inside any confinement boundary.
3. For Move, open the context menu, choose **Move to...**, select the folder in **Move to folder**, and choose **Move**. Success reports **Moved — The file has been moved.**
4. For Copy, remain in the desired source folder and choose **Copy**. Success reports **Copied — A copy has been added to this folder.**
5. Verify one item with the same ID at the new path for Move, or two separately identified items and increased storage for Copy.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Move to folder dialog over Files, with Search folders, Root, Projects, Brand assets, Client contracts, Cancel, and Move." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The screenshot shows the destination picker used by Move; the web Copy action does not open this dialog. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Restrictions.** Locked files and locked ancestors block both operations. Moving into a locked target reports `Target folder is locked`. A copy can leave a protected WordPress backup but cannot be created inside one; a move is refused both into and out of a protected live backup. Neither operation overwrites a same-name destination.

**Live Photos.** Web copy processes the still and paired video separately. If the still succeeds but the video fails, it reports **Copied — The photo was copied, but its video could not be.** Inspect both components before treating the pair as complete.

## Expected result

Move leaves one file with its existing identity in a different folder and no extra storage charge. Copy leaves the source plus a new independent item that consumes another file-sized allocation.

## Related guides

- [Move or rename an existing item](/files/move-and-rename)
- [Create an independent file copy](/files/copy-file)
