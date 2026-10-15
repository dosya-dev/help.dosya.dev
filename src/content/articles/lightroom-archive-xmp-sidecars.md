---
{
  "articleId": "hc-lightroom-archive-xmp-sidecars",
  "locale": "en",
  "revision": 5,
  "title": "Archive Lightroom XMP sidecars with originals",
  "summary": "Archive original photo bytes with current XMP sidecars, understand exact skip checks, and verify the complete mirrored Lightroom folder tree in Dosya.",
  "category": "integrations",
  "articleSlug": "lightroom-archive-xmp-sidecars",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/lightroom/dosya.lrdevplugin/DosyaArchive.lua, apps/lightroom/dosya.lrdevplugin/DosyaArchiveServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaUploader.lua, apps/lightroom/dosya.lrdevplugin/DosyaErrors.lua. Production behavior for “Archive Lightroom XMP sidecars with originals” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-configure-publish-service",
    "hc-upload-states"
  ],
  "keywords": [
    "lightroom archive xmp sidecars",
    "Lightroom export and archive",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The **dosya Archive (originals)** export service skips rendering and reads each master’s source path. With **Include XMP sidecar files** enabled, it also uploads an adjacent `.xmp` file when that file actually exists; virtual copies are skipped because they share a master original.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-archive-xmp-sidecars-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-archive-xmp-sidecars-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-archive-xmp-sidecars-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-archive-xmp-sidecars-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-archive-xmp-sidecars-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Archive Lightroom XMP sidecars with originals: Choose dosya Archive originals, confirm the intended workspace. Set Folder in dosya, keep Include XMP sidecar files checked. Choose skip rules, require identical content for existing XMP files. Verify each original and current XMP in the mirrored Dosya folder." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Choose dosya Archive originals, confirm the intended workspace.” and ends with “Verify each original and current XMP in the mirrored Dosya folder.” <a class="workflow-map-full" href="/screenshots/lightroom-archive-xmp-sidecars-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-archive-xmp-sidecars-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-archive-xmp-sidecars-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In Lightroom Classic’s Export dialog choose **dosya Archive (originals)** and confirm the connection points to the intended workspace.
2. Set **Folder in dosya**—default **Lightroom Originals**—and leave **Include XMP sidecar files** checked.
3. Choose the existing-file skip setting; originals use name plus size, while XMP sidecars require an identical content hash.
4. When refreshing an existing `.xmp`, compare it first and rename or remove the old Dosya sidecar; the archive keeps the original filename and cannot overwrite it.
5. Read the final **dosya archive** summary for archived, already-present, failed, virtual-copy, and not-attempted counts plus grouped errors.
6. Open the mirrored Dosya folder and verify each applicable original and current `.xmp`, including any refreshed sidecar whose old name you freed first.

Local files are never moved or deleted. Missing sidecars simply add no second upload. Original filenames are preserved; a changed sidecar with an occupied name is not an identical skip, so it fails with a message explaining that no renamed copy was made. After three consecutive network failures, remaining photos are reported as not attempted and can be exported again.

## Expected result

Every successful non-virtual master has its byte-for-byte original in the mirrored path, and each sidecar that was absent, identical, or given a free name is accounted for. The summary ends with **Your local files were not changed.**

## Related guides

- [Configure Lightroom publishing](/integrations/lightroom-configure-publish-service)
- [Resume an interrupted upload](/uploading/progress-and-states)
