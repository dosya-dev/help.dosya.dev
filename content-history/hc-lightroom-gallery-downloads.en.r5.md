---
{
  "articleId": "hc-lightroom-gallery-downloads",
  "locale": "en",
  "revision": 5,
  "title": "Control full-resolution downloads from a Lightroom gallery",
  "summary": "Switch a Lightroom gallery between full-size downloads and view-only access, verify metadata handling, and test the complete recipient experience.",
  "category": "integrations",
  "articleSlug": "lightroom-gallery-downloads",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/api/src/lib/share/update.ts, apps/api/src/lib/share/visibility.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-publish-gallery",
    "hc-password-link"
  ],
  "keywords": [
    "lightroom gallery downloads",
    "Lightroom gallery options",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The **Downloads** menu controls the gallery share link’s lock mode. **Clients can download full size** uses `none`; **View only, no downloads** uses `view_only`, which still permits the public preview while blocking download actions.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-gallery-downloads-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-gallery-downloads-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-gallery-downloads-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-gallery-downloads-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-gallery-downloads-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Control full-resolution downloads from a Lightroom gallery: Open Edit Gallery for the target collection, note its client link. Choose metadata stripping, apply it only to eligible downloads. Test the gallery privately, distinguish preview from download. Read any settings update error, retry only after fixing its cause." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Open Edit Gallery for the target collection, note its client link.” and ends with “Read any settings update error, retry only after fixing its cause.” <a class="workflow-map-full" href="/screenshots/lightroom-gallery-downloads-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-gallery-downloads-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-gallery-downloads-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Right-click the intended published collection and choose **Edit Gallery**, then confirm the gallery title and existing client link.
2. Under **Downloads**, choose **Clients can download full size** when recipients may save originals, or **View only, no downloads** for preview-only delivery.
3. If downloads remain enabled, decide whether to select **Remove photo metadata from downloads**. That option changes downloadable output where the server can safely rewrite the format.
4. Save the gallery settings. Existing galleries update immediately; an unpublished collection carries the choice into its first publish.
5. Open the link in a private browser and try the visible recipient controls. View-only should preserve previews but withhold permitted file downloads.
6. If the behavior did not change, read Lightroom for `Gallery settings were not updated: <error>`, resolve the workspace or connection refusal, and save again.

**Meaning of full size.** The download is the complete file stored for the gallery. With the publish service defaults, that is a JPEG rendered at quality 85 and up to 2560 pixels on the long edge, not the camera original.

**No full lock.** This two-choice Lightroom menu does not set `full_lock`; gallery password protection is configured separately with **Set password...**. Existing full-lock links are not downgraded by the ordinary download-mode comparison.

**Metadata scope.** Metadata stripping applies to downloads, not Lightroom’s catalog or the already-rendered cloud record. Formats the service cannot safely rewrite may be refused rather than delivered with misleading privacy.

## Expected result

The live gallery continues to preview its photos and either offers full-size downloads or enforces view-only access, with the chosen metadata rule applied to eligible downloads.

## Related guides

- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
- [Protect a share with a password](/sharing/password-link)
