---
{
  "articleId": "hc-file-move-restricted-destination",
  "locale": "en",
  "revision": 5,
  "title": "Check access before moving into a restricted folder",
  "summary": "Resolve a blocked file move by checking upload permission, confinement, destination visibility, locks, backup protection, and name conflicts.",
  "category": "files",
  "articleSlug": "file-move-restricted-destination",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/api/src/pages/api/files/[id]/move.ts, apps/api/src/lib/repo/file-move.ts, and apps/web/src/pages/files.tsx on 2026-10-14. Production permissions were not changed.",
  "related": [
    "hc-move-rename",
    "hc-copy-file"
  ],
  "keywords": [
    "file move restricted destination",
    "File move and copy safeguards",
    "Dosya help",
    "cloud storage"
  ]
}
---
A destination can appear in the folder picker yet fail the server’s final authorization checks. Diagnose the exact rule before asking for broader workspace access.

<figure class="help-screenshot"><a href="/screenshots/file-move-restricted-destination-help-workflow-2026-10-14.webp"><img src="/screenshots/file-move-restricted-destination-help-workflow-2026-10-14.webp" alt="Four-step map for opening the move picker, checking role and access rules, attempting an allowed destination, and refreshing the listing." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map shows the permission review that precedes a restricted-destination move. <a href="/screenshots/file-move-restricted-destination-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Required capability.** File moves require `upload_files`. The web page normally hides **Move to...** when that capability is absent, while a direct request can return `You don't have permission to move files`.

## Steps

1. Confirm the source is visible and unlocked. A direct file lock returns `This file is locked and cannot be moved`; a locked ancestor returns `This file is inside a locked folder. Unlock the folder to move it.`
2. Open **Move to...** and select a destination in the same workspace. Do not treat its presence in the picker as final authorization.
3. For a folder-confined member, verify both source and destination are inside the confinement anchor. The API can return `This file is outside the folder you're confined to` or `You cannot move a file outside the folder you're confined to`.
4. Confirm the target still exists, is visible, and is unlocked. Exact API responses include `Target folder not found` and `Target folder is locked`.
5. Check for an existing same-name file. A collision returns `A file with this name already exists in the target folder`; Dosya will not overwrite it.
6. Retry with an allowed destination, then confirm the same file ID appears there and disappears from the source folder.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Move to folder picker listing Root, Projects, Brand assets, and Client contracts with Cancel and Move actions." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The screenshot shows the candidate destination tree; the API still applies confinement, visibility, and lock rules after selection. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Protected backup folders.** A live WordPress backup cannot be used as the source or destination of a move while backup protection is active. Choose a normal workspace folder or follow the backup’s supported lifecycle instead of trying to bypass protection.

**What failure changes.** A rejected move leaves the folder reference, bytes, versions, and storage allocation unchanged. The current web toast is **Move failed — The file could not be moved**, so inspect the role, confinement, lock, target, and collision conditions even when the detailed API message is not displayed.

**Escalation.** Provide the file ID, source folder ID, intended destination ID, active workspace, and exact API response if available. Avoid sharing lock credentials or recovery secrets.

## Expected result

An authorized destination accepts the existing file ID and the old folder no longer lists it. A refused request makes no partial copy and leaves the file at its original path.

## Related guides

- [Check move permissions and file-location behavior](/files/move-and-rename)
- [Use Copy only when a second object is intended](/files/copy-file)
