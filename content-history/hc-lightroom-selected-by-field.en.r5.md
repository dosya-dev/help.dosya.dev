---
{
  "articleId": "hc-lightroom-selected-by-field",
  "locale": "en",
  "revision": 5,
  "title": "Find who selected a photo in Lightroom",
  "summary": "Sync gallery selections, filter on Selected by (dosya), read multiple client names and submission state, and confirm cleared picks disappear after resync.",
  "category": "integrations",
  "articleSlug": "lightroom-selected-by-field",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/lightroom/dosya.lrdevplugin/DosyaMetadata.lua, apps/lightroom/dosya.lrdevplugin/DosyaSelections.lua, and apps/lightroom/tests/selections_test.lua. Lightroom Library filtering was not exercised in a production catalog.",
  "related": [
    "hc-lightroom-enable-client-favourites",
    "hc-lightroom-publish-gallery"
  ],
  "keywords": [
    "lightroom selected by field",
    "Lightroom client selections",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
**Selected by (dosya)** is read-only plug-in metadata written by **Sync client selections from dosya**. It is searchable and browsable in Lightroom Library, and can contain several sorted client names separated by commas.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-selected-by-field-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-selected-by-field-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-selected-by-field-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-selected-by-field-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-selected-by-field-help-workflow-2026-10-14.webp" alt="Four-step workflow for syncing a known pick, filtering Selected by (dosya), reading aggregate status with per-client collection identity, and confirming deselection clears." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for syncing a known pick, filtering Selected by (dosya), reading aggregate status with per-client collection identity, and confirming deselection clears. <a class="workflow-map-full" href="/screenshots/lightroom-selected-by-field-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-selected-by-field-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-selected-by-field-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Publish the collection with favourites enabled, let the client select photos, then choose **Library → Plug-in Extras → Sync client selections from dosya**.
2. Wait for **Client selections synced** and confirm the summary includes the intended gallery and client counts.
3. In Lightroom Classic’s **Library** module, expose plug-in metadata and choose **Selected by (dosya)** in the Metadata filter or searchable field list.
4. Select a client value. A photo chosen by Anna and Ben is stored as `Anna, Ben`; use the exact displayed client name when narrowing the result.
5. Inspect **Selection status (dosya)** as a photo-level aggregate: `submitted` means at least one selecting client submitted, while `in progress` means none did. Do not attribute `submitted` to every displayed name; use membership in each **dosya client selections → _gallery_ - _client_** collection to identify who selected the photo, then verify its **dosya gallery** value.
6. After a client deselects a photo, sync again and verify the names and status clear from that photo and it leaves the matching client collection.

The plug-in maps remote file IDs back to published photos and falls back to the Lightroom photo UUID saved as `source_ref`. Client names identify what the visitor entered; they are not authenticated Dosya account identities. The per-client collections preserve individual selection membership even though **Selection status (dosya)** collapses every selecting client into one aggregate value.


<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Reference for “Find who selected a photo in Lightroom”: Lightroom Classic integration title card with a camera aperture illustration." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Find who selected a photo in Lightroom”: Lightroom Classic integration title card with a camera aperture illustration. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The Library filter returns photos currently selected by the named client, per-client collections identify each selector, the photo-level status follows the any-submitted rule, and a later sync removes metadata for selections that no longer exist.

If the field is empty after a successful sync, confirm the chosen photo belongs to the synced published collection. A gallery read failure appears in the sync summary; **Lightroom’s catalog is busy, so the client selections were not written. Try again in a moment.** means nothing was changed.

## Related guides

- [Enable client favourites](/integrations/lightroom-enable-client-favourites)
- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
