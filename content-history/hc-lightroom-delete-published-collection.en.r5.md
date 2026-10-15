---
{
  "articleId": "hc-lightroom-delete-published-collection",
  "locale": "en",
  "revision": 5,
  "title": "Understand deleting a Lightroom published collection",
  "summary": "Delete a Lightroom published collection with a clear record of what remains online, then separately revoke or remove Dosya resources when required.",
  "category": "integrations",
  "articleSlug": "lightroom-delete-published-collection",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/README.md, apps/web/src/pages/shared.tsx, and apps/api/src/pages/api/shares/[id]/revoke.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-publish-gallery",
    "hc-lightroom-edit-gallery-options"
  ],
  "keywords": [
    "lightroom delete published collection",
    "Lightroom gallery lifecycle",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Deleting a published collection removes Lightroom’s local publish relationship only. The plug-in intentionally keeps the Dosya gallery, its folder and files, and its share link online so a catalog mistake does not destroy client delivery.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-delete-published-collection-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-delete-published-collection-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-delete-published-collection-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-delete-published-collection-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-delete-published-collection-help-workflow-2026-10-14.webp" alt="Four-step workflow map for deleting a Lightroom published collection: record the gallery link, confirm the gallery stays online, revoke the saved link from Shared by me, and remove retained files separately if needed." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map separates Lightroom collection deletion from revoking its saved link under <strong>Shared → By me</strong> and deleting retained cloud files. <a class="workflow-map-full" href="/screenshots/lightroom-delete-published-collection-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-delete-published-collection-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-delete-published-collection-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Before deletion, select the collection and use **Library > Plug-in Extras > Copy gallery link**. Record the URL, collection name, and Dosya folder so you can identify the retained resources.
2. Confirm whether you only want to remove Lightroom’s collection. This action does not revoke recipient access and does not reclaim cloud storage.
3. Delete the published collection in Lightroom. Read **The dosya gallery stays online**, which states that the gallery, photos, and link are unchanged.
4. Open the saved URL in a private browser. Its continued availability is expected, subject to the existing password, expiry, or recipient gate.
5. If access must end, open Dosya **Shared > By me**, match the saved gallery URL or name, choose **Revoke**, and confirm the irreversible link revocation. The Lightroom integration page only reports gallery status; it does not provide this revoke control.
6. If storage must also be reclaimed, review and delete or trash the retained files in Dosya separately. Revoking a link alone leaves the folder bytes in cloud storage.

**Irreversible boundary.** The Lightroom deletion severs the catalog’s stored remote collection relationship. Recreating a similarly named collection is a new local object and should not be assumed to adopt the old gallery.

**Photo removal is different.** Removing a photo from a live published collection hides it from the gallery. The service setting decides whether the cloud file stays or moves to recoverable Dosya trash; the plug-in never permanently deletes it.

## Expected result

The Lightroom collection is gone, while the recorded Dosya URL and files remain available until you explicitly revoke the link or remove the cloud content in Dosya.

## Related guides

- [Publish a gallery](/integrations/lightroom-publish-gallery)
- [Edit gallery options](/integrations/lightroom-edit-gallery-options)
