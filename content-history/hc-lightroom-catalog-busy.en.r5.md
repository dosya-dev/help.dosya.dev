---
{
  "articleId": "hc-lightroom-catalog-busy",
  "locale": "en",
  "revision": 5,
  "title": "Retry Lightroom when the catalog is busy",
  "summary": "Recover from Lightroom catalog write contention without repeating successful uploads or losing the plug-in’s deferred local catalog updates.",
  "category": "integrations",
  "articleSlug": "lightroom-catalog-busy",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/lightroom/dosya.lrdevplugin/DosyaSelections.lua, apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/lightroom/dosya.lrdevplugin/DosyaMenu.lua. Production behavior for “Retry Lightroom when the catalog is busy” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-connect-catalog",
    "hc-lightroom-publish-gallery"
  ],
  "keywords": [
    "lightroom catalog busy",
    "Lightroom connection and publish troubleshooting",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
“Catalog busy” refers to Lightroom Classic refusing a timed write-access block. It can affect syncing client selections or marking already-uploaded photos for republish; it does not necessarily mean the network upload itself failed.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-catalog-busy-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-catalog-busy-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-catalog-busy-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-catalog-busy-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-catalog-busy-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Retry Lightroom when the catalog is busy: Read the full catalog-busy message, identify the deferred operation. Finish the Lightroom task holding catalog write access. Retry selection sync, fetch current gallery choices again. Verify flags or gallery registration, confirm the queue clears." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Read the full catalog-busy message, identify the deferred operation.” and ends with “Verify flags or gallery registration, confirm the queue clears.” <a class="workflow-map-full" href="/screenshots/lightroom-catalog-busy-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-catalog-busy-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-catalog-busy-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Read Lightroom’s full catalog-busy dialog; identify whether client selections were unwritten or uploaded photos were not marked for republishing.
2. Finish another Lightroom operation that may hold catalog write access, such as metadata save, import, publish, or a different plug-in task.
3. Wait a moment without closing the catalog, then select the same dosya collection or command context used by the failed operation.
4. For selection sync, run **Sync client selections from dosya** again; the plug-in re-fetches gallery selections before one new catalog write.
5. For a publish warning, inspect **Modified Photos to Re-Publish** and **New Photos to Publish**, then choose **Publish** once more as the message directs.
6. Verify Lightroom’s deferred catalog update: client flags appear, or uploaded photos register in the gallery and leave the republish queue.

The exact selection-sync error is **Lightroom’s catalog is busy, so the client selections were not written. Try again in a moment.** Publish can instead warn that uploaded files were not marked for republishing; those bytes may already exist in Dosya, so deleting or manually re-uploading them can create confusion. Retry the named Lightroom command.

## Expected result

The deferred catalog write completes after contention ends. Synced client selection fields and collections reflect the server, or the next publish registers the already-uploaded photos and clears the republish state.

## Related guides

- [Connect Lightroom](/integrations/lightroom-connect-catalog)
- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
