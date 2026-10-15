---
{
  "articleId": "hc-folder-move-protected-file",
  "locale": "en",
  "revision": 5,
  "title": "Move a protected file between folders",
  "summary": "Move a protected file only after checking its own lock, ancestor locks, destination state, assigned-root boundary, permissions, and name conflicts.",
  "category": "files",
  "articleSlug": "folder-move-protected-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/pages/api/files/[id]/move.ts, apps/web/src/pages/files.tsx, and apps/api/src/lib/folder-lock-write-gate.unit.test.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-lock-folder",
    "hc-folder-restriction-inheritance"
  ],
  "keywords": [
    "folder move protected file",
    "Folder protection and access details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Moving a file changes its parent folder without copying its bytes or creating a new version. Protection is evaluated at both the source and destination, so test the result as the affected member.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/folder-move-protected-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/folder-move-protected-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/folder-move-protected-file-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/folder-move-protected-file-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/folder-move-protected-file-help-workflow-2026-10-14.webp" alt="Light-theme map showing source and destination checks, one file move, inherited-access testing, and result confirmation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The move sequence records both folder states, performs one move, tests destination access as the member, and confirms that only one copy remains. <a class="workflow-map-full" href="/screenshots/folder-move-protected-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/folder-move-protected-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/folder-move-protected-file-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before moving the file**

The member needs the workspace capability used for moving files. A confined member must be allowed to reach both the current and destination folders. The file cannot carry its own lock, its source ancestry cannot remain fully locked for that viewer, and the destination cannot be fully locked. If you also rename during the move, rename permission is required.

## Steps

1. In **Files**, note the file name, current folder, lock state, and the destination path. Confirm no file with the same name already exists at the destination.
2. If the source is password locked, unlock the relevant ancestor in the current browser session. The viewer unlock lasts one hour; it does not remove the folder’s protection for anyone else.
3. Open the file action menu, choose the move action, select an allowed destination, and confirm. If the web client reports **Move failed** and **The file could not be moved.**, inspect the API-specific cause listed below.
4. Refresh both folders. Verify that the file disappeared from the source and appears once at the destination with the same size and version.
5. Sign in as the intended member and retest listing, preview, download, and upload behavior under the destination’s inherited rules.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya file lock example displaying Unlocked, View only, and Password for Launch review.pdf." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The pictured file dialog demonstrates the same three modes used to identify source and destination folder protection before moving a file. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Exact refusal reasons**

The server can return **This file is locked and cannot be moved**, **This file is inside a locked folder. Unlock the folder to move it.**, **Target folder is locked**, **File is already in this folder**, or **A file with this name already exists in the target folder**. Access boundaries can instead produce **This file is outside the folder you're confined to**, **You cannot move a file outside the folder you're confined to**, **You don't have permission to move files**, or **Target folder not found**.

Do not remove a destination lock merely to make a move succeed unless expanding write access is intended. A successful move updates the parent relationship and activity record; it does not leave a recoverable copy in the old folder. Move the file back if the result is wrong.

## Expected result

The file exists only in the chosen destination, keeps its bytes and version history, and immediately follows the destination’s inherited lock, hidden-item, role, and assigned-root rules.

## Related guides

- [Lock a folder](/files/lock-folder)
- [Understand inherited folder restrictions](/files/folder-restriction-inheritance)
