---
{
  "articleId": "hc-file-details",
  "locale": "en",
  "revision": 6,
  "title": "View file details",
  "summary": "Open Dosya file details to verify size, MIME type, region, uploader, timestamps, origin, sharing state, versions, and permitted file actions.",
  "category": "files",
  "articleSlug": "file-details",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/file-detail-panel.tsx, apps/web/src/pages/files.tsx, apps/api/src/pages/api/files/[id]/versions/restore.ts, apps/api/src/pages/api/files/[id]/download.ts, and apps/api/src/pages/api/files/[id]/editor-config.ts. Production behavior was not re-tested.",
  "related": ["hc-preview-files", "hc-organize-files"],
  "keywords": ["file details", "file details and copy", "Dosya help", "cloud storage", "file management"]
}
---
File details identify the selected cloud object and place its primary actions, version controls, and format-specific editor entry in one panel. Use its identity fields before downloading, sharing, copying, restoring, editing, or deleting anything, and expect the server to enforce access again after a visible control is selected.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/file-details-workflow-map-2026-10-14.webp" data-light-href="/screenshots/file-details-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/file-details-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/file-details-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/file-details-workflow-map-2026-10-14.webp" alt="File-details workflow showing identity fields, sharing data, version history, four role-filtered primary actions, and server-checked version controls." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Confirm multiple identity fields before using a primary action, historical-version control, or the Office editor entry. <a class="workflow-map-full" href="/screenshots/file-details-workflow-map-2026-10-14.webp" data-light-href="/screenshots/file-details-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/file-details-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Where details appear

In the browser file list, selecting a file opens the **File details** panel at the side on larger screens and as a bottom sheet on smaller screens. Opening the file viewer provides a second inspector: select **Toggle inspector** or press its `i` shortcut, then choose **Details**, **Versions**, or **Comments**. The viewer inspector starts open at desktop widths and closed on small screens unless a linked tab requires it.

The list panel and viewer inspector overlap, but they are not identical. The list panel also offers action buttons and active share-link cards. The viewer inspector adds **Modified**, active share and comment counts, Live Photo companion information when present, and an **Origin** badge.

## Steps

1. Open **Files** in the intended workspace and select one file. Check the full name at the top of **File details**.
2. Compare the summary line: file size, MIME type, and relative creation time. A badge shows `vN` when the current version is greater than one.
3. Review **Properties**. It reports **Uploaded by**, storage **Region**, **Created**, and **Extension**. Synced files add **Synced — Yes**; imported content can add **Source** and **Account**.
4. If the file has multiple versions, inspect **Versions**. Each row shows version number, size, uploader, relative time, and a download link. Every noncurrent row renders **Restore**; selecting it still requires `upload_files` at the API.
5. Under **Share links**, inspect each active URL, view count, expiry label, and **Password** badge. Use **Copy** only when you intend to distribute that exact link.
6. Confirm which primary actions are present. The Files page supplies **Download**, **Copy file**, **Share**, and **Delete file** callbacks only when the role has the corresponding capability; **View file** is always present. Historical-version download links, noncurrent **Restore**, and **Open in editor** for an Office filename render independently of those four callbacks, so the server can still refuse the request or limit editor write access.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Campaign image open with the browser inspector, demonstrating size, type, region, uploader, and time fields for one selected file." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The viewer's **Details** tab pairs the selected preview with its metadata, helping confirm that the information belongs to the same file. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Locks, shares, and versions

A full lock replaces the panel contents with **This file is locked**, an **Enter password** field, and **Unlock**. A rejected password displays the server message or **Incorrect password** and clears the field. After a successful unlock, the panel can load versions for that session. A view-only file remains visible and gains a **View only** badge. The four primary callbacks still follow the enclosing Files page, while version and Office controls remain visible and rely on their endpoints for the final decision.

**Revoke link** is destructive for that share URL: after success it disappears from the active list and recipients can no longer use it. A failure shows **Revoke failed — The share link could not be revoked.** Copying the URL changes only your clipboard.

Restoring a noncurrent version sends a separate request that requires `upload_files` and reports **Restored to vN.** when accepted. It changes which content is current, so preview the target version before selecting **Restore**. A refusal or other failed request reports **Restore failed** and leaves the current version unchanged. Version download links request the selected historical version without restoring it, but their presence does not guarantee that the download endpoint will release the bytes.

Deleting from the details panel follows the normal confirmation flow and initially moves the file to trash, where it continues to use storage. Permanent deletion is a later explicit action and cannot be undone. Viewing metadata, closing the panel, or switching inspector tabs changes no file data.

## If information is missing

**Unknown** for the uploader means the row has no resolved uploader name; it does not prove that the file has no creator. Share cards and version rows load separately. A transient request failure can leave those sections absent while the basic file properties remain visible, so refresh the Files page before concluding there is no history or active link. When one of the four primary actions is missing, the enclosing Files page usually withheld its callback for the current role; visible version and editor controls must still pass their server checks.

## Expected result

The displayed name and at least two independent fields, such as size, MIME type, uploader, region, or timestamp, match the intended file. Simply inspecting them creates no version, share link, copy, download, or deletion.

## Related guides

- [Preview files](/files/preview-files)
- [Organize files](/files/organize-files)
