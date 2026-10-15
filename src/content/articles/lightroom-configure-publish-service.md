---
{
  "articleId": "hc-lightroom-configure-publish-service",
  "locale": "en",
  "revision": 5,
  "title": "Configure the Dosya Lightroom publish service",
  "summary": "Configure the Dosya publish service with its exact rendering, destination, removal, selection, and concurrency controls before publishing a gallery.",
  "category": "integrations",
  "articleSlug": "lightroom-configure-publish-service",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/lightroom/README.md on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-connect-catalog",
    "hc-create-link"
  ],
  "keywords": [
    "lightroom configure publish service",
    "Lightroom gallery publishing",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The **dosya.dev** service in Lightroom Classic controls both the rendered JPEGs and how collections map into Dosya. Its defaults favor web galleries, but removal and client-selection choices have lasting effects, so review them before the first publish.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-configure-publish-service-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-configure-publish-service-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-configure-publish-service-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-configure-publish-service-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-configure-publish-service-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Configure the Dosya Lightroom publish service: Open the dosya.dev publish service, confirm its user and workspace. Choose the removal policy, keep the file or move it to Dosya trash. Set Uploads at once from 1 to 4, use 3 as the default. Save JPEG output settings, verify quality 85 and long edge 2560." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Open the dosya.dev publish service, confirm its user and workspace.” and ends with “Save JPEG output settings, verify quality 85 and long edge 2560.” <a class="workflow-map-full" href="/screenshots/lightroom-configure-publish-service-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-configure-publish-service-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-configure-publish-service-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open Lightroom Classic’s Publishing Manager, add or edit the **dosya.dev** publish service, and confirm the account line names the intended user and workspace.
2. Under **dosya options**, set **Folder in dosya**. The default root is `Lightroom`; each published collection becomes a subfolder and collection sets add parent path segments.
3. Choose **When a photo is removed**: either **Hide it from the gallery (keep the file)** or **Hide it and move the file to dosya trash**. Neither option permanently deletes the file.
4. Decide whether sync should **Set the Pick flag** or **Set color label**. Available label values are Red, Yellow, Green, Blue, and Purple.
5. Set **Uploads at once** from 1 through 4. The default is 3; reduce it on a slow or unstable connection rather than changing image quality to diagnose transport failures.
6. Review Lightroom’s output settings and save. First-use defaults are JPEG quality 85, sRGB, long edge 2560 pixels, no enlargement, copyright-only metadata, and location removed.

**Supported output.** This publish service accepts JPEG in sRGB and does not publish video. Lightroom Classic 10 or newer is required; the Lightroom cloud application cannot load this plug-in.

**Credential scope.** Connecting creates a full API key pinned to the chosen workspace. The approving member must be unconfined and allowed to upload files, create folders, and create share links.

## Expected result

The service stays under Publish Services with the chosen Dosya root, removal policy, selection marks, concurrency, and rendering settings ready for new or modified photos.

## Related guides

- [Connect a Lightroom catalog](/integrations/lightroom-connect-catalog)
- [Create a sharing link](/sharing/create-link)
