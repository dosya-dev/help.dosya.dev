---
{
  "articleId": "hc-lightroom-create-published-collection",
  "locale": "en",
  "revision": 5,
  "title": "Create a published Lightroom collection",
  "summary": "Create a Dosya published collection with deliberate gallery settings, add eligible photos, and confirm Lightroom queues them for the first publish.",
  "category": "integrations",
  "articleSlug": "lightroom-create-published-collection",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/lightroom/README.md on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-connect-catalog",
    "hc-create-link"
  ],
  "keywords": [
    "lightroom create published collection",
    "Lightroom gallery publishing",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A Dosya published collection becomes one cloud folder, one client gallery, and one share link on its first publish. Creating the collection in Lightroom is local preparation; no online gallery exists until **Publish** runs successfully.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-create-published-collection-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-create-published-collection-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-create-published-collection-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-create-published-collection-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-create-published-collection-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Create a published Lightroom collection: Create a new published Gallery, start from the Client gallery default. Choose access settings before publish, set expiry from 0 to 365. Review New Photos to Publish, confirm order and intended cover. Pause before Publish, recheck folder path and client access." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Create a new published Gallery, start from the Client gallery default.” and ends with “Pause before Publish, recheck folder path and client access.” <a class="workflow-map-full" href="/screenshots/lightroom-create-published-collection-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-create-published-collection-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-create-published-collection-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Under the configured **dosya.dev** service in Publish Services, create a new **Gallery**. Lightroom’s default collection name is **Client gallery**.
2. Give the collection a clear internal name. Set **Gallery title** only when the client-facing title should differ; a blank title follows the collection name.
3. Choose **Let clients pick favourites**, a **Downloads** mode, **Link expires after** from 0 to 365 days, metadata stripping, and any password before the first publish.
4. Add the intended catalog photos. The service renders JPEG only, uses sRGB, and cannot publish video; incompatible items will not become valid gallery renditions.
5. Check **New Photos to Publish** and review order. Custom sort order is supported, and the first live item becomes the cover when no cover exists.
6. Stop before clicking **Publish** if the folder path or access settings are wrong. Collection creation is reversible locally; the next action creates remote files and a share link.

**Folder mapping.** The destination begins with **Folder in dosya**, which defaults to `Lightroom`, followed by collection-set names and the collection name. Unsafe path characters are sanitized. If the intended folder already backs another gallery, the plug-in tries identifier-based suffixes.

**Deletion distinction.** Deleting this new collection before the first publish is local. After publishing, deleting the Lightroom collection deliberately leaves its Dosya gallery, files, and link online.

## Expected result

The new Gallery appears beneath the Dosya publish service, its chosen options are saved, and all added eligible photos wait under **New Photos to Publish** without an online link yet.

## Related guides

- [Connect a Lightroom catalog](/integrations/lightroom-connect-catalog)
- [Create a sharing link](/sharing/create-link)
