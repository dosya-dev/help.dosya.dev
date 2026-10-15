---
{
  "articleId": "hc-file-move-back",
  "locale": "en",
  "revision": 5,
  "title": "Recover from moving a file to the wrong folder",
  "summary": "Move a file back to its original folder when that destination still exists, passes access rules, and has no same-name conflict; then verify one item.",
  "category": "files",
  "articleSlug": "file-move-back",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/web/src/components/folder-picker-dialog.tsx, and apps/api/src/pages/api/files/[id]/move.ts on 2026-10-14. No production move was made.",
  "related": [
    "hc-move-rename",
    "hc-copy-file"
  ],
  "keywords": [
    "file move back",
    "File move and copy safeguards",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya has no automatic undo or move-history control. You can move a file back only when you know the former folder and it remains a valid destination.

<figure class="help-screenshot"><a href="/screenshots/file-move-back-help-workflow-2026-10-14.webp"><img src="/screenshots/file-move-back-help-workflow-2026-10-14.webp" alt="Four-step map for checking the current file location, choosing Move, selecting the original folder, and confirming the file returned without duplication." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map shows the manual recovery path for reversing a file move. <a href="/screenshots/file-move-back-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**What a reverse move preserves.** The file keeps its ID, bytes, versions, and storage use. Its folder reference changes again. Comments and links that resolve by file ID continue to refer to that same item.

## Steps

1. Identify the original folder from a trusted record or colleague. **Get info**, breadcrumbs, and current details show the present location, not a historical path.
2. In **Files**, open the moved item’s context menu and choose **Move to...**.
3. In **Move to folder**, use **Search folders...**, the expandable tree, or **Root** to select the former folder. Folder search waits about 250 ms after typing.
4. Verify the folder name and its parent path, then choose **Move**. The success toast is **Moved — The file has been moved.**
5. Open the original folder and confirm exactly one file with the expected name and ID appears. Return to the intermediate folder and verify it is absent there.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Move to folder picker with a Root option, folder tree, Search folders, New folder in Projects, Cancel, and Move." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The screenshot shows the controls used to select the former folder during a manual reverse move. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**When moving back is refused.** The target must still exist in the same workspace, be visible, and not be locked. You need `upload_files`; a confined member must have both source and destination inside the confinement anchor. A same-name file returns `A file with this name already exists in the target folder`, and selecting the current folder returns `File is already in this folder`. The web client summarizes these as **Move failed — The file could not be moved.**

**Protected content.** A locked source or enclosing folder blocks the action. A live protected WordPress backup cannot be used as either side of a move until its backup protection no longer applies. Do not use Copy as a silent substitute unless a second file and additional storage are acceptable.

## Expected result

The existing file ID is listed once in the original folder, disappears from the interim folder, and retains its bytes, versions, comments, and storage footprint.

## Related guides

- [Use the general move and rename controls](/files/move-and-rename)
- [Copy instead when two independent items are required](/files/copy-file)
