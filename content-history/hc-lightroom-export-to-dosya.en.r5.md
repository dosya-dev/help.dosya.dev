---
{
  "articleId": "hc-lightroom-export-to-dosya",
  "locale": "en",
  "revision": 5,
  "title": "Export photos from Lightroom directly to Dosya",
  "summary": "Export rendered Lightroom photos into a chosen Dosya folder, control concurrency and sharing, and verify the final upload receipt and cloud files.",
  "category": "integrations",
  "articleSlug": "lightroom-export-to-dosya",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/lightroom/dosya.lrdevplugin/DosyaUploader.lua on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-configure-publish-service",
    "hc-upload-states"
  ],
  "keywords": [
    "lightroom export to dosya",
    "Lightroom export and archive",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The **dosya.dev** export service uploads rendered JPEGs into a cloud folder without creating a persistent Lightroom published collection. You can optionally ask for a folder share link when client-gallery creation is off.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-export-to-dosya-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-export-to-dosya-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-export-to-dosya-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-export-to-dosya-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-export-to-dosya-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Export photos from Lightroom directly to Dosya: Open Export with dosya.dev, verify the connected workspace. Choose plain folder upload, request a share link only if needed. Watch the live Uploading X of N count, keep Lightroom open through completion. Reconcile the upload receipt, verify cloud filenames and sizes." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Open Export with dosya.dev, verify the connected workspace.” and ends with “Reconcile the upload receipt, verify cloud filenames and sizes.” <a class="workflow-map-full" href="/screenshots/lightroom-export-to-dosya-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-export-to-dosya-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-export-to-dosya-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Choose the photos in Lightroom and open Export with the **dosya.dev** service. Verify the connected account and workspace before rendering files.
2. Under **dosya options**, set **Upload to folder**. The default `Lightroom Exports/<date>` expands the date token when the export starts.
3. Leave **Create a client gallery from this export** off for a plain folder upload. Enable **Otherwise, create a share link for the folder** only when recipients need a link.
4. Review JPEG, sRGB, sizing, and metadata output, then set **Uploads at once** between 1 and 4; 3 is the service default.
5. Select **Export** and watch `Uploading X of N (Y in flight)`. Existing destination names are checked so an unrelated same-named file is not silently versioned.
6. Read any `Uploaded N, failed N, not attempted N.` receipt, then open the target folder in Dosya and compare filenames, sizes, and item count with the export selection.

**Name safety.** If the destination listing fails but the error is not batch-stopping, Lightroom warns that it could only check names against the current batch and known gallery photos; a same-named cloud file may have received a new version.

**Retry behavior.** A plain export has no **New Photos to Publish** queue. For failed or unattempted items, correct the cause and export those originals again, checking the cloud folder first to avoid duplicate intent.

## Expected result

Every successful rendition appears in the resolved Dosya folder, optional sharing produces a link, and the completion counts explain any item that needs a separate retry.

## Related guides

- [Configure Lightroom publishing](/integrations/lightroom-configure-publish-service)
- [Resume an interrupted upload](/uploading/progress-and-states)
