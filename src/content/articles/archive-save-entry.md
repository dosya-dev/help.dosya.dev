---
{
  "articleId": "hc-archive-save-entry",
  "locale": "en",
  "revision": 6,
  "title": "Save an archive entry to Dosya",
  "summary": "Save one eligible archive entry as a new Dosya file, choose an allowed destination, and understand size, permission, quota, and failure rules.",
  "category": "files",
  "articleSlug": "archive-save-entry",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/archive-viewer/archive-viewer.tsx, apps/web/src/lib/archive-save.ts, apps/api/src/pages/api/files/[id]/archive/save.ts, apps/api/src/lib/files/download-gate.ts, and apps/api/src/lib/ingest/register.ts. Production behavior was not re-tested.",
  "related": ["hc-archive-preview", "hc-preview-files"],
  "keywords": ["archive save entry", "archive tools", "Dosya help", "cloud storage", "file management"]
}
---
**Save to dosya** extracts one eligible archive member into the same workspace as a normal cloud file. It does not remove the member from the source container, and an existing same-name file causes the new item to receive a collision-safe suffix.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/archive-save-entry-workflow-map-2026-10-14.webp" data-light-href="/screenshots/archive-save-entry-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/archive-save-entry-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/archive-save-entry-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/archive-save-entry-workflow-map-2026-10-14.webp" alt="Archive extraction-to-cloud workflow showing one selected member, the destination picker, and the saved Dosya file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Choose one verified member, select a permitted cloud folder, and confirm the name returned by the save operation. <a class="workflow-map-full" href="/screenshots/archive-save-entry-workflow-map-2026-10-14.webp" data-light-href="/screenshots/archive-save-entry-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/archive-save-entry-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Requirements

The source archive must be viewable and pass the same byte-copy gate used for entry downloads: its own view-only lock or a blocked ancestor refuses extraction. This route does not separately require the role's `download_files` permission. Saving does require **upload files** access in the workspace. Folder-confined members can choose only a destination inside their assigned anchor, never workspace root. The destination must exist, remain visible, and accept content; full locks and locked WordPress backup folders refuse writes.

The selected member must use STORE or DEFLATE, must not be password-protected, and cannot exceed 4 GiB. Your plan, credential file-size policy, remaining storage quota, egress allowance, and concurrent-transfer ceiling can impose lower effective limits.

## Steps

1. Open the archive, locate the desired row, and compare its displayed name and uncompressed size with the content you expect.
2. Select the file and choose **Save to dosya** in the action bar.
3. In **Save to folder**, navigate to an allowed destination and select **Save here**. A root choice is valid only when your membership is not folder-confined.
4. Wait for **Saved to dosya**. Its detail text is the actual name registered in the destination, including any suffix added to resolve a collision.
5. Open the destination folder and preview the new item. Compare its returned size and content with the archive member before relying on it.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Saved image example used to compare an extracted Dosya file with the selected archive member's preview." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Preview the newly stored item after extraction so a successful registration is also verified at the content level. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Failure and recovery

**You don't have upload permission in this workspace** requires a role change. **Destination folder not found** means the chosen folder was removed, hidden, or unavailable; reopen the picker and select a live location. A locked destination returns a `folder_locked` refusal. **This entry is larger than 4 GiB. Download the archive to extract it.** cannot be resolved by choosing another cloud folder.

The server validates the declared entry length as it streams. **This entry's data does not match its declared size; the archive is malformed.** requires a corrected source container. **Could not write the extracted file to storage** means registration did not complete; the service attempts to remove the partial object, so verify the destination before retrying.

Saving a single entry is atomic from the interface's perspective: a successful response creates the new file and records a `file_uploaded` activity with archive extraction metadata. The source archive stays intact. If you later remove the saved copy, normal trash and retention behavior applies to that separate file.

For a folder or **Save all to dosya**, your role also needs **create folders** permission. The client processes at most 500 eligible files, creates a wrapper folder and nested directories, then saves members sequentially. Cancellation stops before the next file; folders and files already created remain. Password-protected or unsupported members are skipped, and earlier successes are not rolled back when a later member fails.

## Expected result

The selected member appears as an independent Dosya file in the chosen permitted folder, with a safe name and the declared byte count. The archive and its versions are unchanged.

## Related guides

- [Inspect archives](/files/archive-preview)
- [Preview files](/files/preview-files)
