---
{
  "articleId": "hc-lightroom-publish-gallery",
  "locale": "en",
  "revision": 5,
  "title": "Publish a Lightroom collection as a Dosya gallery",
  "summary": "Publish a Lightroom collection as a Dosya folder and client gallery, follow live progress, and reconcile the final receipt with retry queues.",
  "category": "integrations",
  "articleSlug": "lightroom-publish-gallery",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaUploader.lua on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-connect-catalog",
    "hc-create-link"
  ],
  "keywords": [
    "lightroom publish gallery",
    "Lightroom gallery publishing",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Publishing renders JPEGs, ensures a gallery folder and share link, uploads new bytes or versions existing files, and registers gallery items. A successful edit becomes a new Dosya file version instead of a duplicate when the stored remote file still exists in the gallery folder.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-publish-gallery-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-publish-gallery-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-publish-gallery-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-publish-gallery-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-publish-gallery-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Publish a Lightroom collection as a Dosya gallery: Review both Lightroom publish queues, confirm the workspace. Click Publish and watch progress, allow 1 to 4 uploads in flight. Reconcile published and retry counts, keep failed photos queued. Open the gallery privately, compare order cover and access." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Review both Lightroom publish queues, confirm the workspace.” and ends with “Open the gallery privately, compare order cover and access.” <a class="workflow-map-full" href="/screenshots/lightroom-publish-gallery-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-publish-gallery-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-publish-gallery-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Select the Dosya published collection and review **New Photos to Publish** plus **Modified Photos to Re-Publish**. Confirm the active service points to the intended workspace.
2. Open **Edit Gallery** and verify title, favourites, downloads, expiry, metadata stripping, and password; first publish applies these settings while creating the link.
3. Click **Publish**. Lightroom shows **Publishing N photos to dosya** and updates `Uploading X of N (Y in flight)` while up to the configured 1–4 uploads run.
4. Keep Lightroom and the catalog open until rendering, upload, and gallery registration finish. Canceling can leave already-uploaded files online while later renditions remain unattempted.
5. Read any `Published N, failed N, not attempted N.` summary and its grouped reasons. Failed or unattempted photos remain in Lightroom’s publish queues for a later **Publish**.
6. Open the gallery in a private browser and compare title, order, cover, photo count, access, and download behavior. The first live item becomes cover when no cover was set.

**Partial registration.** If uploaded files could not yet be added as gallery items, Lightroom reports that they are uploaded and the next publish adds them. Such photos are marked **Modified Photos to Re-Publish** when the catalog write succeeds.

**Deletion recovery.** If a remembered cloud file was deleted or moved out of the gallery folder, publish uploads a fresh file in the correct folder rather than versioning the missing or moved record.

## Expected result

Successful photos show as published, the Dosya folder and gallery contain the intended live items, and every failure or unattempted photo remains visibly queued for retry.

## Related guides

- [Connect a Lightroom catalog](/integrations/lightroom-connect-catalog)
- [Create a sharing link](/sharing/create-link)
