---
{
  "articleId": "hc-mobile-rename-file",
  "locale": "en",
  "revision": 6,
  "title": "Rename a file on mobile",
  "summary": "Rename one cloud file within mobile filename rules, understand role and lock refusals, and verify the same object keeps its contents and folder.",
  "category": "files",
  "articleSlug": "mobile-rename-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally in apps/mobile/src/files/FileActionsSheet.tsx, mutations.ts, mutationHooks.ts, packages/shared/src/validation/policy.ts, and apps/api/src/pages/api/files/[id]/rename.ts plus route tests. Production has not published revision 6.",
  "related": ["hc-mobile-browse", "hc-mobile-permissions"],
  "keywords": ["mobile rename file", "mobile file actions", "rename cloud file", "cloud storage", "file backup"]
}
---
Rename changes a cloud file's stored name in its current folder. It keeps the same file identity and contents, and it does not rename a separate original in the phone's photo library.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-rename-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-rename-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-rename-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-rename-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-rename-file-workflow-map-2026-10-14.webp" alt="Mobile rename sequence showing file actions, filename validation, server permission checks, and refreshed folder confirmation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Open the cloud object's action sheet, submit one valid unique name, and verify that same object after refresh. <a class="workflow-map-full" href="/screenshots/mobile-rename-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-rename-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-rename-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In **Files**, choose the workspace and open the folder containing the target file. Folder-confined members can act only inside their assigned subtree.
2. Open the file's action sheet and choose **Rename**. The mobile list hides this action when a loaded role explicitly lacks `rename_files`; if permission data is missing or stale, the server still makes the final decision.
3. In **Rename file**, replace the prefilled name and press **Rename**. Keep the extension when the file should continue to be recognized as the same format.
4. Use a name from 1 through 255 characters after surrounding whitespace is trimmed. `/`, `\`, control characters, `.` by itself, and `..` by itself are rejected. Quotes, apostrophes, angle brackets, and spaces are permitted characters.
5. Wait for the **Renamed** toast, then refresh the folder or search for the new name. Open the result to confirm its content.

Client validation uses these exact messages:

- **Name is required** for an empty or whitespace-only value.
- **Name too long (max 255)** beyond the file-name limit.
- **Name contains invalid characters** for a path separator, control character, `.` or `..`.

The API can refuse the change with **You don't have permission to rename files**, **This file is locked and cannot be renamed**, or **A file with this name already exists in this folder**. A hidden or unavailable object returns **File not found**. For a folder-confined member targeting an object outside the anchor, it says **This file is outside the folder you're confined to**. A file inside a retention-locked WordPress backup returns the backup-lock message with its unlock time.

Mobile forwards request errors into a toast and leaves the old name in place. Permissions are cached for 60 seconds in the client UI, so a recently changed role can briefly show or hide the action incorrectly; the API does not rely on that cache.

Successful rename updates metadata and the folder's modified state, invalidates path/listing caches, and records a `file_renamed` activity with old and new names. It does not create a second file or upload a new version. Because the operation changes shared cloud metadata, other clients see the new name after their listings refresh.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile installation cards for accessing the Files action sheet used to rename cloud objects." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>The rename dialog is part of the native Files experience on supported iPhone and Android builds. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The refreshed folder contains one object under the submitted name, in the same directory, with its prior bytes still readable. The former name no longer resolves in that folder.

If a collision blocks the request, choose another name or first rename the existing sibling. If role, confinement, hidden, or lock rules cause the refusal, an authorized workspace administrator must change that condition; repeatedly submitting the same request cannot bypass it.

## Related guides

- [Find the cloud object on a phone](/files/mobile-browse-files)
- [Review app and role permissions](/account/mobile-permissions)
