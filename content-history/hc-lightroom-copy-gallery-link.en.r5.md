---
{
  "articleId": "hc-lightroom-copy-gallery-link",
  "locale": "en",
  "revision": 5,
  "title": "Copy and share a Lightroom gallery link",
  "summary": "Copy the remote URL for one published collection, handle Lightroom’s clipboard fallback, and validate the exact client gallery before sharing it.",
  "category": "integrations",
  "articleSlug": "lightroom-copy-gallery-link",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaMenu.lua, apps/lightroom/dosya.lrdevplugin/DosyaUI.lua, apps/lightroom/dosya.lrdevplugin/Info.lua on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-enable-client-favourites",
    "hc-lightroom-publish-gallery"
  ],
  "keywords": [
    "lightroom copy gallery link",
    "Lightroom client selections",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
**Copy gallery link** reads the remote URL already stored on the active Dosya published collection. It does not create a link. A collection must have completed its first publish, and the correct collection must be selected in the Publish Services panel.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-copy-gallery-link-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-copy-gallery-link-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-copy-gallery-link-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-copy-gallery-link-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-copy-gallery-link-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Copy and share a Lightroom gallery link: Select one Dosya published collection, avoid a regular collection. Read Gallery link copied, confirm the HTTPS URL in the receipt. Test the URL in a private browser, verify the intended gallery. Send the validated address, replace it after any relink notice." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Select one Dosya published collection, avoid a regular collection.” and ends with “Send the validated address, replace it after any relink notice.” <a class="workflow-map-full" href="/screenshots/lightroom-copy-gallery-link-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-copy-gallery-link-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-copy-gallery-link-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In Publish Services, click the exact Dosya published collection you intend to share. A regular collection or another plug-in’s publish collection is not accepted.
2. Choose **Library > Plug-in Extras > Copy gallery link**. If the collection has no remote URL, Lightroom says `Select a dosya.dev published collection in the Publish Services panel first, then publish it at least once.`
3. On macOS or Windows, wait for **Gallery link copied** and the URL. The command copies only plainly safe HTTPS URLs through the platform clipboard command.
4. If clipboard copying is unavailable or fails, Lightroom opens **Gallery link** with a selectable URL field; select and copy that field manually.
5. Paste the URL into a private browser before sending it. Confirm the title, cover, photos, password prompt, expiry, favourites, and download behavior belong to the intended client.
6. Send that validated URL through your chosen channel. If a later publish says the old link was revoked or expired and shows a new URL, replace the saved message or template.

**Access remains enforced.** Copying does not bypass a password, recipient rule, view-only mode, or expiry. The recipient receives the same public gallery route that **Open dosya gallery** uses.

**Clipboard detail.** The plug-in uses `pbcopy` on macOS and `clip` on Windows after validating the URL. Other environments receive the selectable-field fallback instead of a false success notice.

## Expected result

The copied or manually selected HTTPS URL opens the chosen live gallery under its current access settings, and the shared message contains that same verified address.

## Related guides

- [Enable client favourites](/integrations/lightroom-enable-client-favourites)
- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
