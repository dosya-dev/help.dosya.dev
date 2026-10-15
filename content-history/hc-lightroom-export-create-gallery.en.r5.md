---
{
  "articleId": "hc-lightroom-export-create-gallery",
  "locale": "en",
  "revision": 5,
  "title": "Create a client gallery during a Lightroom export",
  "summary": "Create a client gallery during Lightroom export, understand its dated folder and collision rules, and validate the link shown when upload finishes.",
  "category": "integrations",
  "articleSlug": "lightroom-export-create-gallery",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/lightroom/README.md on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-configure-publish-service",
    "hc-upload-states"
  ],
  "keywords": [
    "lightroom export create gallery",
    "Lightroom export and archive",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The regular **dosya.dev** export service can create a one-off client gallery without a published collection. With the default destination, it uploads into `Lightroom Exports/<date>/<title>` and returns the public link at the end.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-export-create-gallery-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-export-create-gallery-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-export-create-gallery-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-export-create-gallery-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-export-create-gallery-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Create a client gallery during a Lightroom export: Choose the dosya.dev export service, verify the target workspace. Enable Create a client gallery, enter a distinctive title. Export the rendered photos, allow suffixes for folder conflicts. Open Your dosya link, verify title and complete photo count." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Choose the dosya.dev export service, verify the target workspace.” and ends with “Open Your dosya link, verify title and complete photo count.” <a class="workflow-map-full" href="/screenshots/lightroom-export-create-gallery-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-export-create-gallery-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-export-create-gallery-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open Lightroom’s Export dialog and select the **dosya.dev** service, then confirm its account section names the intended workspace.
2. Leave **Upload to folder** at `Lightroom Exports/<date>` or enter another path. The `<date>` token is replaced with the current `YYYY-MM-DD` date.
3. Enable **Create a client gallery from this export, titled:** and enter the client-facing title. A blank title becomes `Gallery YYYY-MM-DD`.
4. Review JPEG rendering and choose **Uploads at once** from 1 through 4. Gallery creation enables client selections and full-size downloads by default.
5. Select **Export** and keep Lightroom running through rendering and upload. If the default title folder already backs another gallery, Dosya tries `(2)` through `(5)` suffixes.
6. Read **Your dosya link**, open it privately, and confirm title, photo count, order, and download behavior before giving it to the client.

**Collision limit.** Gallery export attempts at most five candidate folders. A persistent `folder_in_use` conflict after those candidates stops gallery creation; choose a more distinctive title or destination and export again.

**Result accounting.** A troubled run reports `Uploaded N, failed N, not attempted N.` Three consecutive network failures stop the remaining work, so the displayed link and cloud folder must be checked before assuming the full selection arrived.

## Expected result

Dosya creates a gallery in the resolved export folder, Lightroom uploads the rendered photos, and the completion dialog provides a client link that opens that gallery.

## Related guides

- [Configure Lightroom publishing](/integrations/lightroom-configure-publish-service)
- [Resume an interrupted upload](/uploading/progress-and-states)
