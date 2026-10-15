---
{
  "articleId": "hc-lightroom-set-gallery-cover",
  "locale": "en",
  "revision": 5,
  "title": "Set a Lightroom gallery cover",
  "summary": "Select one already-published photo, run Set as gallery cover, confirm the success dialog, and verify the public gallery opens with that cover.",
  "category": "integrations",
  "articleSlug": "lightroom-set-gallery-cover",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/lightroom/dosya.lrdevplugin/DosyaMenu.lua, apps/lightroom/dosya.lrdevplugin/Info.lua, apps/api/src/pages/api/galleries/[id].ts, and apps/api/src/lib/galleries/store.ts. Production behavior for “Set a Lightroom gallery cover” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-publish-gallery",
    "hc-lightroom-edit-gallery-options"
  ],
  "keywords": [
    "lightroom set gallery cover",
    "Lightroom gallery lifecycle",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The cover command accepts the current Lightroom target photo only when it is already a published item in the selected Dosya collection. It cannot use an unpublished photo or a photo published to another gallery.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-set-gallery-cover-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-set-gallery-cover-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-set-gallery-cover-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-set-gallery-cover-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-set-gallery-cover-help-workflow-2026-10-14.webp" alt="Four-step workflow for selecting a published collection and photo, choosing Set as gallery cover, and separating success from the unpublished-photo error." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for selecting a published collection and photo, choosing Set as gallery cover, and separating success from the unpublished-photo error. <a class="workflow-map-full" href="/screenshots/lightroom-set-gallery-cover-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-set-gallery-cover-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-set-gallery-cover-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the **Library** module, select the intended Dosya published collection in the **Publish Services** panel.
2. Publish the collection at least once. Without a remote gallery ID, the plug-in says **Select a dosya.dev published collection in the Publish Services panel first, then publish it at least once.**
3. Make one already-published photo the target photo. Merely highlighting an unpublished local image is insufficient.
4. Choose **Library → Plug-in Extras → Set as gallery cover**.
5. Wait for **Gallery cover updated**. **This photo is not published in this gallery yet. Publish first.** means its published-photo record was not found in that collection.
6. Open the gallery link in a signed-out browser and confirm the intended image is used as the cover without altering the gallery item order.

The API accepts `cover_file_id` only when that file is registered in the same gallery. Changing the cover updates gallery metadata; it does not copy, re-render, version or delete the photo.


<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Reference for “Set a Lightroom gallery cover”: Lightroom Classic integration title card with a camera aperture illustration." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Set a Lightroom gallery cover”: Lightroom Classic integration title card with a camera aperture illustration. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The success dialog appears and the public gallery uses the selected published photo as its cover. The file stays in the same Dosya folder and no additional gallery item is created.

A connection warning means the plug-in has no usable account credential. An API refusal can also indicate that the gallery is outside the key’s workspace, belongs to another member without `view_all_shares`, or no longer contains the photo.

## Related guides

- [Publish a gallery](/integrations/lightroom-publish-gallery)
- [Edit gallery options](/integrations/lightroom-edit-gallery-options)
