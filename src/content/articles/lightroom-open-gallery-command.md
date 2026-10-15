---
{
  "articleId": "hc-lightroom-open-gallery-command",
  "locale": "en",
  "revision": 5,
  "title": "Open a Dosya gallery from Lightroom",
  "summary": "Select the correct published collection, run Lightroom's Open dosya gallery command, and diagnose a missing URL without changing the gallery.",
  "category": "integrations",
  "articleSlug": "lightroom-open-gallery-command",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14; the command was not run against a production gallery. Claims checked against apps/lightroom/dosya.lrdevplugin/Info.lua; apps/lightroom/dosya.lrdevplugin/DosyaMenu.lua; apps/lightroom/dosya.lrdevplugin/DosyaMenuOpenGallery.lua; apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua; apps/lightroom/dosya.lrdevplugin/DosyaHttp.lua; and apps/lightroom/README.md. The workflow and overview images are explanatory assets.",
  "related": [
    "hc-lightroom-publish-gallery",
    "hc-lightroom-edit-gallery-options"
  ],
  "keywords": [
    "lightroom open gallery command",
    "Lightroom gallery lifecycle",
    "open Dosya gallery",
    "cloud storage integration"
  ]
}
---
Open the public gallery URL stored on a Dosya published collection without copying and pasting it. This command launches the system browser and makes no gallery, file, or catalog change.

<figure class="help-screenshot"><a href="/screenshots/lightroom-open-gallery-command-help-workflow-2026-10-14.webp"><img src="/screenshots/lightroom-open-gallery-command-help-workflow-2026-10-14.webp" alt="Lightroom Classic route from a selected Dosya published collection through Plug-in Extras to the gallery in a browser." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Select the published collection itself, then invoke **Open dosya gallery** so Lightroom can use that collection's saved remote URL. <a href="/screenshots/lightroom-open-gallery-command-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Use Lightroom Classic 10 or newer with the `dosya.dev` plug-in installed. The current plug-in declares SDK 14 and version 0.1.0.
- The collection must belong to the **dosya.dev** Publish Service and must have been published at least once. An ordinary collection, a collection from another service, or an unpublished Dosya collection has no usable gallery URL.
- Opening the saved link does not require the Lightroom API key to be valid at that moment. Access in the browser still follows the gallery's current password, expiry, and revocation state.

The repository verifies this command's selection and URL logic through Lua tests, but records no completed test inside Lightroom itself. Try it on a noncritical published collection before making it part of a delivery checklist.

## Steps

1. In Lightroom Classic's **Library** module, find **Publish Services → dosya.dev**.
2. Select the exact published collection whose gallery you want. Selecting a photo alone or a parent collection set does not satisfy the plug-in's collection check.
3. Choose **Library → Plug-in Extras → Open dosya gallery**.
4. Treat **Open dosya gallery** as successful only when the default browser loads the remote URL saved on that collection.
5. Compare the gallery title and visible photos with the selected Lightroom collection before sharing the browser URL.

You can also right-click a Dosya published collection and use **Open gallery in browser**. For an individual published photo, Lightroom exposes **Show in dosya gallery**; both routes use the URL Lightroom supplies for the published item.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Lightroom Classic integration overview representing the Dosya publish service used by the open-gallery command." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The command belongs to the Lightroom Classic publishing integration; it is available from Lightroom menus rather than the Dosya web-app navigation. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Lightroom hands the selected collection's existing remote URL to the operating system, and the default browser navigates to that gallery. No API request is needed to obtain a new link, and the command does not publish pending photos.

## When the gallery does not open

- The plug-in shows **Select a dosya.dev published collection in the Publish Services panel first, then publish it at least once.** Select the collection row and finish its first **Publish**.
- If a browser window never appears, test another ordinary web link from Lightroom or the operating system; the command delegates opening to Lightroom's browser API.
- If the page says the link is unavailable, return to the collection settings. A revoked or expired gallery link must be republished or relinked before this stored URL can work again.
- If unpublished changes are pending, opening the link shows the currently live gallery. Click **Publish** separately to upload those edits.

## Related guides

- [Publish a gallery](/integrations/lightroom-publish-gallery)
- [Edit gallery options](/integrations/lightroom-edit-gallery-options)
