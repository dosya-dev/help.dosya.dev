---
{
  "articleId": "hc-lightroom-republish-edits",
  "locale": "en",
  "revision": 5,
  "title": "Republish Lightroom edits without duplicate gallery items",
  "summary": "Republish a modified Lightroom photo as a new version of its existing Dosya file, preserve the gallery position, and confirm no duplicate item appears.",
  "category": "integrations",
  "articleSlug": "lightroom-republish-edits",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/lightroom/dosya.lrdevplugin/DosyaUploader.lua, and apps/lightroom/tests/publish_test.lua. Republish behavior was verified in repository tests; no production publish ran.",
  "related": [
    "hc-lightroom-connect-catalog",
    "hc-create-link"
  ],
  "keywords": [
    "lightroom republish edits",
    "Lightroom gallery publishing",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A Lightroom republish sends the rendered edit to the existing Dosya `file_id`. Dosya records another version of that file, keeps its server-side name and leaves the gallery item in place instead of inserting a duplicate.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-republish-edits-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-republish-edits-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-republish-edits-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-republish-edits-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-republish-edits-help-workflow-2026-10-14.webp" alt="Four-step workflow for opening the collection, publishing the modified photo, checking the single gallery item, and reading the publish summary." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for opening the collection, publishing the modified photo, checking the single gallery item, and reading the publish summary. <a class="workflow-map-full" href="/screenshots/lightroom-republish-edits-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-republish-edits-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-republish-edits-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In Lightroom Classic, open the published collection and confirm the edited photo appears under **Modified Photos to Re-Publish**.
2. Check that the collection still has its remote gallery ID and the photo still points to its published remote file. A missing or moved remote file follows the fresh-upload recovery path instead.
3. Select the modified photo and choose **Publish**. Leave Lightroom open while **Publishing … photos to dosya** reports rendered and in-flight work.
4. Wait for the photo to leave **Modified Photos to Re-Publish**. Three consecutive photos that exhaust their network retries stop later photos and report that the rest were not attempted.
5. Open the gallery and confirm the photo occupies its previous position once. In Dosya, inspect **Versions** for the same file ID and verify the newest bytes contain the edit.
6. Read any **dosya** summary. Failed or unattempted photos remain under **Modified Photos to Re-Publish** or **New Photos to Publish** and can be retried with another Publish.

Republishing is not an overwrite without history. The existing file receives a new version and keeps its stored name even when an export naming template now proposes another name. If the original Dosya file was deleted or moved outside the gallery folder, the plug-in uploads a fresh file into the gallery and replaces the stale item reference.


<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Reference for “Republish Lightroom edits without duplicate gallery items”: Lightroom Classic integration title card with a camera aperture illustration." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Republish Lightroom edits without duplicate gallery items”: Lightroom Classic integration title card with a camera aperture illustration. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

One gallery item represents the Lightroom photo, its Dosya file keeps the same ID when still available, and its current version contains the new render. Earlier retained versions remain subject to the workspace history policy and continue consuming storage.

For **A file with this name already exists in this folder**, inspect whether another visible or hidden file owns the name. The plug-in avoids turning a new photo into a version of an unrelated file and may use a suffixed name only for a genuinely new upload.

## Related guides

- [Connect a Lightroom catalog](/integrations/lightroom-connect-catalog)
- [Create a sharing link](/sharing/create-link)
