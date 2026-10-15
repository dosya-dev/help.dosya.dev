---
{
  "articleId": "hc-lightroom-resume-archive-upload",
  "locale": "en",
  "revision": 5,
  "title": "Resume an interrupted Lightroom archive upload",
  "summary": "Resume an interrupted Lightroom original archive within its 23-hour session window, skip completed parts safely, and verify stored size and summary counts.",
  "category": "integrations",
  "articleSlug": "lightroom-resume-archive-upload",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/lightroom/dosya.lrdevplugin/DosyaArchive.lua, apps/lightroom/dosya.lrdevplugin/DosyaUploader.lua, apps/lightroom/tests/archive_test.lua, and apps/lightroom/tests/upload_test.lua. Production behavior for “Resume an interrupted Lightroom archive upload” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-configure-publish-service",
    "hc-upload-states"
  ],
  "keywords": [
    "lightroom resume archive upload",
    "Lightroom export and archive",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The **dosya Archive** export reads original files directly instead of rendering them. Originals larger than the one-shot ceiling use a multipart session keyed by source path, byte size and modification time, so a later identical export can continue with missing parts.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-resume-archive-upload-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-resume-archive-upload-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-resume-archive-upload-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-resume-archive-upload-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-resume-archive-upload-help-workflow-2026-10-14.webp" alt="Four-step workflow for preserving the interrupted source, restarting within 23 hours, reading the archive summary, and confirming filename and size." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for preserving the interrupted source, restarting within 23 hours, reading the archive summary, and confirming filename and size. <a class="workflow-map-full" href="/screenshots/lightroom-resume-archive-upload-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-resume-archive-upload-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-resume-archive-upload-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Keep the interrupted original at the same path with the same size and modification time. Changing any of those values intentionally starts a different upload identity.
2. Reopen Lightroom Classic **Export**, choose the **dosya Archive** service and retain the same **Archive root folder** and XMP-sidecar choice.
3. Start the export again before the stored session has been idle for 23 hours. The plug-in asks Dosya for session status and skips parts already accepted.
4. Leave Lightroom running until each original reports success or a named failure. Missing local bytes produce **Could not read the local file (…)** rather than an empty upload.
5. Read the **dosya archive** summary: **Archived _ files, skipped _ already in dosya, failed _.** It separately reports virtual copies and photos not attempted.
6. In Dosya, confirm the original’s exact filename and stored byte size. The completion path rejects a result with **Size check failed** when server and local sizes differ.

Files at or below 50 MiB normally use one-shot upload; a buffered Lightroom session can lower that path to 8 MiB. Larger files use multipart. An original already present with the same name and size is skipped, while an XMP sidecar is skipped only when its stored SHA-256 also matches because edits can preserve sidecar size.


<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Reference for “Resume an interrupted Lightroom archive upload”: Lightroom Classic integration title card with a camera aperture illustration." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Resume an interrupted Lightroom archive upload”: Lightroom Classic integration title card with a camera aperture illustration. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A compatible interrupted multipart upload continues without resending accepted parts, then clears its saved session after completion. Unchanged finished originals are skipped, local source files remain untouched, and the summary accounts for every selected photo.

An expired, failed, missing or mismatched session starts a new upload. Quota, authentication and stop-batch failures are not bypassed by rerunning; resolve the reported cause before another export.

## Related guides

- [Configure Lightroom publishing](/integrations/lightroom-configure-publish-service)
- [Resume an interrupted upload](/uploading/progress-and-states)
