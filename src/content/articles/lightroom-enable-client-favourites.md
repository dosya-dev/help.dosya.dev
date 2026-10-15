---
{
  "articleId": "hc-lightroom-enable-client-favourites",
  "locale": "en",
  "revision": 5,
  "title": "Enable client favourites in a Lightroom gallery",
  "summary": "Enable client favourites on one Lightroom gallery, verify the visitor controls, and prepare the catalog settings needed to import selections later.",
  "category": "integrations",
  "articleSlug": "lightroom-enable-client-favourites",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/lightroom/dosya.lrdevplugin/DosyaSelections.lua on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-publish-gallery",
    "hc-password-link"
  ],
  "keywords": [
    "lightroom enable client favourites",
    "Lightroom gallery options",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Favourites are a gallery-level option named **Let clients pick favourites**. Enabling it changes the client page; it does not automatically import choices into Lightroom, set Pick flags, or assign color labels.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-enable-client-favourites-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-enable-client-favourites-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-enable-client-favourites-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-enable-client-favourites-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-enable-client-favourites-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Enable client favourites in a Lightroom gallery: Open Edit Gallery for the intended collection, confirm its title. Save the favourites setting, check for an update refusal. Choose optional Pick or color marks, apply them during sync. Run Sync client selections, verify the per-client collection." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Open Edit Gallery for the intended collection, confirm its title.” and ends with “Run Sync client selections, verify the per-client collection.” <a class="workflow-map-full" href="/screenshots/lightroom-enable-client-favourites-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-enable-client-favourites-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-enable-client-favourites-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In Publish Services, right-click the required Dosya collection and choose **Edit Gallery**. Check its title so another client gallery is not changed by mistake.
2. Enable **Let clients pick favourites**. On an unpublished collection, the option waits for first publish; on an existing gallery, saving triggers an immediate update.
3. Save the dialog. If the server refuses the change, Lightroom reports `Gallery settings were not updated: <error>` and leaves the previous online behavior in place.
4. Open the gallery in a private browser and identify as a test client. Mark at least one photo and leave the choices in progress or submit them to test both states.
5. Back in Lightroom, optionally edit the publish service’s **Client selections** options: **Set the Pick flag** and **Set color label** control catalog marks during sync.
6. Select the collection and run **Library > Plug-in Extras > Sync client selections from dosya**. Confirm the receipt and the new per-client collection.

**Existing clients.** Turning the option off removes the selection interface but should not be treated as a catalog cleanup. Run a successful sync while you can still verify the intended state, and remove any local Pick or color marks manually if they are no longer wanted.

**Submission meaning.** Lightroom writes `in progress` for a client who has not sent the selection and `submitted` when `submitted_at` exists. Both states can contribute chosen photos to the per-client collection.

## Expected result

The client page permits identified visitors to favourite photos, and a later Lightroom sync retrieves the test choices with the correct client and submission status.

## Related guides

- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
- [Protect a share with a password](/sharing/password-link)
