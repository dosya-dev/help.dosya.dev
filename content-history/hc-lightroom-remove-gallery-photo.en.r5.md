---
{
  "articleId": "hc-lightroom-remove-gallery-photo",
  "locale": "en",
  "revision": 5,
  "title": "Remove a photo from a Lightroom gallery",
  "summary": "Remove a published photo, choose whether its file stays or enters recoverable Trash, and verify clients can no longer see that gallery item.",
  "category": "integrations",
  "articleSlug": "lightroom-remove-gallery-photo",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/lightroom/tests/delete_sort_test.lua, and apps/api/src/pages/api/galleries/[id]/items/remove.ts. No Lightroom or production gallery was changed.",
  "related": [
    "hc-lightroom-publish-gallery",
    "hc-lightroom-edit-gallery-options"
  ],
  "keywords": [
    "lightroom remove gallery photo",
    "Lightroom gallery lifecycle",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Removing a photo from a published collection first unregisters it from the client gallery. The publish-service setting **When a photo is removed:** decides whether the stored Dosya file stays in its gallery folder or moves to recoverable Trash; neither choice permanently deletes it.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-remove-gallery-photo-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-remove-gallery-photo-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-remove-gallery-photo-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-remove-gallery-photo-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-remove-gallery-photo-help-workflow-2026-10-14.webp" alt="Four-step workflow for opening the published collection, removing its photo, testing the signed-out gallery, and locating the retained or trashed file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for opening the published collection, removing its photo, testing the signed-out gallery, and locating the retained or trashed file. <a class="workflow-map-full" href="/screenshots/lightroom-remove-gallery-photo-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-remove-gallery-photo-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-remove-gallery-photo-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open Lightroom Classic’s **Library** module and select the published collection under **Publish Services → dosya.dev**.
2. Open that publish service’s settings and read **When a photo is removed:** before changing the collection. **Hide it from the gallery (keep the file)** is the default; **Hide it and move the file to dosya trash** adds a Trash request.
3. Select the intended published photo and remove it from this collection. Lightroom places the removal in its pending publish state.
4. Choose **Publish** on the collection. If gallery-item removal fails with an error other than not found, the plug-in keeps the removal pending instead of claiming success.
5. Open the gallery link in a signed-out browser and confirm the photo is absent. Existing selections for that gallery item are also removed when the server unregisters it.
6. Check Dosya **Files** or **Trash** according to the saved setting. A Trash failure can still leave the photo hidden from clients and produces a warning that its file stayed in the gallery folder.

The gallery-removal request accepts at most 1,000 file IDs at once. The plug-in confirms each successful Lightroom removal before trying optional Trash moves, which prevents a failed Trash request from re-registering the photo on the next publish.


<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Reference for “Remove a photo from a Lightroom gallery”: Lightroom Classic integration title card with a camera aperture illustration." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Remove a photo from a Lightroom gallery”: Lightroom Classic integration title card with a camera aperture illustration. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The chosen photo disappears from the public gallery. With the default option, its Dosya file remains live in the gallery folder; with the Trash option, it enters recoverable Trash unless the plug-in reports that move failed. No permanent deletion occurs in this workflow.

If the plug-in reports **photos were removed from the gallery but their files could not be moved to the dosya trash**, do not publish repeatedly. Confirm the client-facing removal, then resolve the named permission, lock, storage or connection error before moving the file separately.

## Related guides

- [Publish a gallery](/integrations/lightroom-publish-gallery)
- [Edit gallery options](/integrations/lightroom-edit-gallery-options)
