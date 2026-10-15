---
{
  "articleId": "hc-lightroom-edit-gallery-options",
  "locale": "en",
  "revision": 5,
  "title": "Edit options for a Lightroom client gallery",
  "summary": "Change an existing Lightroom gallery’s title, favourites, downloads, expiry, metadata, or password and verify the live link immediately after saving.",
  "category": "integrations",
  "articleSlug": "lightroom-edit-gallery-options",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/api/src/lib/share/update.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-publish-gallery",
    "hc-password-link"
  ],
  "keywords": [
    "lightroom edit gallery options",
    "Lightroom gallery options",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
**Edit Gallery** can update a published gallery without republishing its photos. Saving an existing collection calls the gallery update immediately; settings on an unpublished collection are applied during its first publish.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-edit-gallery-options-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-edit-gallery-options-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-edit-gallery-options-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-edit-gallery-options-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-edit-gallery-options-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Edit options for a Lightroom client gallery: Open Edit Gallery for the target collection, verify its live link. Choose full downloads or view only, decide metadata stripping. Set or remove the password, use at least eight trimmed characters. Save and test the client link, read any settings update error." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Open Edit Gallery for the target collection, verify its live link.” and ends with “Save and test the client link, read any settings update error.” <a class="workflow-map-full" href="/screenshots/lightroom-edit-gallery-options-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-edit-gallery-options-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-edit-gallery-options-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In Publish Services, right-click the target Dosya collection and choose **Edit Gallery**. Confirm the collection already has the client link you intend to change.
2. Edit **Gallery title** or toggle **Let clients pick favourites**. A blank title follows the Lightroom collection name; enabling favourites exposes the client-selection flow.
3. Choose **Clients can download full size** or **View only, no downloads**, and decide whether **Remove photo metadata from downloads** should be enabled.
4. Enter **Link expires after** as a whole number from 0 through 365, where 0 requests no expiry. A workspace or plan expiry ceiling can shorten that request.
5. Use **Set password...** for a trimmed password of at least eight characters, or **Remove password**. Confirm both password fields before saving.
6. Save the dialog and open the client link privately. If Lightroom reports `Gallery settings were not updated: ...`, the photo publish may continue, but these option changes did not all reach Dosya.

**Link continuity.** Ordinary option edits update the existing share record rather than minting a replacement URL. If that record was revoked or has expired, the next publish can relink the gallery and reports the newly created URL.

**Workspace rules win.** A workspace can require passwords or cap expiry. Lightroom reports when Dosya substitutes an earlier expiry date; a refused setting change is a warning, not a reason to assume the old access policy changed.

## Expected result

The live gallery retains its URL for an ordinary update and shows the saved title, selection, download, metadata, expiry, and password behavior allowed by workspace policy.

## Related guides

- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
- [Protect a share with a password](/sharing/password-link)
