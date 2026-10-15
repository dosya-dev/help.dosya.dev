---
{
  "articleId": "hc-lightroom-archive-originals",
  "locale": "en",
  "revision": 5,
  "title": "Archive Lightroom originals to Dosya",
  "summary": "Archive byte-for-byte Lightroom originals and XMP sidecars into mirrored Dosya folders, with duplicate validation and resumable large-file uploads.",
  "category": "integrations",
  "articleSlug": "lightroom-archive-originals",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14; no production originals were uploaded. Claims checked against apps/lightroom/README.md; apps/lightroom/dosya.lrdevplugin/Info.lua; apps/lightroom/dosya.lrdevplugin/DosyaArchiveServiceProvider.lua; apps/lightroom/dosya.lrdevplugin/DosyaArchive.lua; apps/lightroom/dosya.lrdevplugin/DosyaUploader.lua; apps/lightroom/dosya.lrdevplugin/DosyaErrors.lua; apps/lightroom/tests/archive_test.lua; apps/lightroom/tests/upload_test.lua; and apps/lightroom/tests/final_fix_test.lua. Figures explain the verified flow without showing customer files.",
  "related": [
    "hc-lightroom-configure-publish-service",
    "hc-upload-states"
  ],
  "keywords": [
    "lightroom archive originals",
    "Lightroom export and archive",
    "original file archive",
    "cloud storage integration"
  ]
}
---
The **dosya Archive (originals)** export service reads each source file directly from disk and stores the same bytes in Dosya. Lightroom rendering, catalog edits, naming presets, sharpening, watermarking, and metadata export settings do not rewrite that copy.

<figure class="help-screenshot"><a href="/screenshots/lightroom-archive-originals-help-workflow-2026-10-14.webp"><img src="/screenshots/lightroom-archive-originals-help-workflow-2026-10-14.webp" alt="Original-file archive flow from Lightroom Export settings to mirrored Dosya folders, duplicate checks, and final counts." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Choose the originals service, confirm its destination and skip rules, then use the completion counts to verify every selected source file. <a href="/screenshots/lightroom-archive-originals-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Lightroom Classic 10 or newer is required. The plug-in itself is free and consumes the storage included with the connected Dosya plan.
- Connect under **File → Plug-in Manager → dosya.dev**. Approval requires an unconfined workspace member with `upload_files`, `create_folders`, and `create_share_links`; Lightroom receives a full-access key pinned to that workspace.
- Keep an independent backup until you inspect the archived files. This operation never moves or deletes local originals, but it is an upload workflow rather than a restore test.

Automated Lua and real-API end-to-end coverage verify the archive engine; the project notes that the plug-in has not yet been exercised inside Lightroom. Start with a small disposable selection and inspect its stored bytes.

## Steps

1. Select the photos to archive and open Lightroom's **Export** dialog.
2. For **Export To**, choose **dosya Archive (originals)**. This service accepts the original format and video; the rendering and file-transformation sections are hidden.
3. Under **dosya archive**, set **Folder in dosya**. Blank input falls back to `Lightroom Originals`.
4. Leave **Include XMP sidecar files** enabled when catalog edits are written to sidecars. The original is byte-for-byte and therefore does not contain edits that exist only in the catalog.
5. Keep **Skip files already in dosya (same name and size)** enabled for repeat exports. Originals skip on matching name and byte size; XMP sidecars skip only when size and SHA-256 content match.
6. Start **Export** and leave Lightroom running. The destination mirrors the source beneath the chosen root, beginning with the catalog's top-level folder; for example, `Lightroom Originals/Photos/2026/Wedding`.
7. Read the final **dosya archive** dialog: `Archived X files, skipped Y already in dosya, failed Z.` It separately reports skipped virtual copies, unattempted photos, grouped error messages, and **Your local files were not changed.**
8. Open the destination in Dosya and compare filenames and byte sizes with the local originals. A virtual copy is skipped because it shares its master's source file.

The normal one-shot ceiling is 50 MiB. Files larger than 1 MiB stream that request from disk in 1 MiB chunks, while files at or below 1 MiB use a buffered body. If the server refuses a streamed body with HTTP `411`, Lightroom switches the current session to buffered one-shot uploads through 8 MiB and sends larger files by resumable multipart. Multipart files above the active ceiling keep their session for up to 23 idle hours; a retry asks which parts arrived, sends only the missing parts, and checks the completed byte count.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Lightroom integration overview distinguishing the originals archive service from gallery publishing." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use the dedicated originals exporter for archival bytes; the `dosya.dev` publish service renders gallery copies with separate output settings. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Every successful source appears under the mirrored Dosya path with its original filename and exact byte size. Optional sidecars sit beside their originals, repeat exports skip confirmed duplicates, and Lightroom leaves the local files where they were.

## Recover from interruptions or errors

- **Connect your dosya account in File > Plug-in Manager.** Reconnect, select the same workspace, and rerun the export.
- **Could not read the local file (_name_). Check that it exists and that its drive is connected.** Remount the source drive or restore file access; the plug-in does not send an empty or partial replacement.
- A full workspace stops the batch. Free space or increase the storage allocation, then export the selection again; finished files can be skipped by name and size.
- After five retry attempts per network-failing upload, three consecutive affected photos produce **dosya could not be reached for 3 photos in a row, so the rest were not attempted. Check your connection, then export again.** The next export can resume an eligible large-file session.
- A hidden same-name collision reports `_name_ was not archived: a file with this name that your account cannot see already exists in _folder_. Original filenames are kept, so no renamed copy was made.` Ask a workspace administrator to resolve that file; the archive does not invent a suffix.
- Closing Lightroom stops in-process uploads. Reopen the catalog and repeat **Export**; local originals remain unchanged, completed duplicates can skip, and missing multipart pieces can resume.

## Related guides

- [Configure Lightroom publishing](/integrations/lightroom-configure-publish-service)
- [Resume an interrupted upload](/uploading/progress-and-states)
