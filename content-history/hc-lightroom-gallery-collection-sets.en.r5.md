---
{
  "articleId": "hc-lightroom-gallery-collection-sets",
  "locale": "en",
  "revision": 5,
  "title": "Organize Lightroom galleries with collection sets",
  "summary": "Map Lightroom collection sets into a predictable Dosya folder hierarchy, stay within the four-level limit, and verify the published gallery path.",
  "category": "integrations",
  "articleSlug": "lightroom-gallery-collection-sets",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/lightroom/dosya.lrdevplugin/DosyaUtil.lua on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-connect-catalog",
    "hc-create-link"
  ],
  "keywords": [
    "lightroom gallery collection sets",
    "Lightroom gallery publishing",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Collection sets become parent folders beneath the publish service’s **Folder in dosya** root. The final published collection becomes the gallery folder. Lightroom permits this plug-in to nest sets to a maximum depth of four.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-gallery-collection-sets-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-gallery-collection-sets-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-gallery-collection-sets-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-gallery-collection-sets-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-gallery-collection-sets-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Organize Lightroom galleries with collection sets: Confirm the service Folder in dosya, use Lightroom as the default root. Keep collection-set nesting at four levels, avoid deeper paths. Publish the child Gallery, let Dosya sanitize unsafe segments. Verify the full folder hierarchy, note any collision suffix." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Confirm the service Folder in dosya, use Lightroom as the default root.” and ends with “Verify the full folder hierarchy, note any collision suffix.” <a class="workflow-map-full" href="/screenshots/lightroom-gallery-collection-sets-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-gallery-collection-sets-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-gallery-collection-sets-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Edit the Dosya publish service and confirm **Folder in dosya**, which defaults to `Lightroom`. This becomes the first part of every collection path.
2. Create a **Gallery folder** collection set and give it a durable project or client name. Add nested sets only when each level helps recipients or operators locate content.
3. Keep nesting at four collection-set levels or fewer. The provider declares `maxCollectionSetDepth = 4`, so deeper hierarchy is unsupported.
4. Create a child **Gallery** and set its collection name plus optional client-facing **Gallery title**. The title does not replace the folder path segments.
5. Add eligible photos and choose **Publish**. Dosya sanitizes path characters that are unsafe across clients before ensuring the folder hierarchy.
6. Open Dosya and verify `<root>/<set>/<nested set>/<collection>` plus the gallery link. If another gallery already owns that folder, expect an identifier suffix rather than adoption.

**Renaming behavior.** Renaming a published collection may update the gallery title when no custom title is set, but it does not move the existing Dosya folder. Plan the hierarchy before first publish when the cloud path matters.

**Identity protection.** A per-catalog/service/collection source reference prevents a different catalog from silently adopting the gallery merely because its folder and names match.

## Expected result

The child collection publishes to a sanitized folder path beneath the configured root, collection-set levels appear in order, and its client gallery opens independently.

## Related guides

- [Connect a Lightroom catalog](/integrations/lightroom-connect-catalog)
- [Create a sharing link](/sharing/create-link)
