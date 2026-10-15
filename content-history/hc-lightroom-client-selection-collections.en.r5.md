---
{
  "articleId": "hc-lightroom-client-selection-collections",
  "locale": "en",
  "revision": 5,
  "title": "Review per-client selection collections in Lightroom",
  "summary": "Inspect the exact per-client collection created by a Dosya sync, verify its membership and metadata, and understand how later syncs remove stale picks.",
  "category": "integrations",
  "articleSlug": "lightroom-client-selection-collections",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaSelections.lua, apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaMenu.lua on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-enable-client-favourites",
    "hc-lightroom-publish-gallery"
  ],
  "keywords": [
    "lightroom client selection collections",
    "Lightroom client selections",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A selection sync builds a collection set named **dosya client selections**. Inside it, the plug-in keeps one ordinary Lightroom collection for each gallery/client pair, named from the gallery title and client name. Each collection is an exact snapshot: a later sync adds new favourites and removes photos the client has unselected.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-client-selection-collections-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-client-selection-collections-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-client-selection-collections-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-client-selection-collections-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-client-selection-collections-help-workflow-2026-10-14.webp" alt="Four-step workflow map for reviewing a per-client Lightroom collection: select one Dosya gallery, reconcile the sync counts, compare the client collection, and interpret the aggregate photo metadata." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts by limiting the sync to one published Dosya collection and ends by reading aggregate metadata separately from the per-client collection. <a class="workflow-map-full" href="/screenshots/lightroom-client-selection-collections-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-client-selection-collections-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-client-selection-collections-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the Publish Services panel, select the published Dosya collection whose clients you want to review. This limits the sync to that gallery; with no active Dosya collection, the command scans every Dosya published collection in the catalog.
2. Choose **Library > Plug-in Extras > Sync client selections from dosya**. If Lightroom says `Connect your dosya account in File > Plug-in Manager.`, reconnect before trying again.
3. Wait for **Client selections synced**. Read its counts for galleries, clients, photos marked, and photos cleared; it also lists any gallery read failure and client notes.
4. In Collections, expand **dosya client selections** and open `<gallery title> - <client name>`. Duplicate names created in one run receive `(2)`, `(3)`, and later suffixes.
5. Compare the photos with that client’s live gallery choices. The plug-in maps published remote file IDs first and falls back to the original Lightroom photo UUID when available.
6. Check **Selected by (dosya)**, **Selection status (dosya)**, and **dosya gallery**. These fields are aggregated per photo: status is `submitted` when any client selecting that photo has submitted, and `in progress` only when none of its selecting clients has submitted. Use the per-client collection when mixed clients need separate interpretation.

**Catalog behavior.** The plug-in performs the metadata and collection update in one catalog write with a 10-second timeout. If it reports `Lightroom's catalog is busy, so the client selections were not written. Try again in a moment.`, close another catalog-writing task and run the command again; no partial collection update should be trusted.

**Optional marks.** **Set the Pick flag** and **Set color label** are publish-service options. They can add a Pick and one of Red, Yellow, Green, Blue, or Purple during sync; disabling them later does not undo marks already written.

## Expected result

The selected client collection contains exactly the photos currently returned for that gallery/client pair, stale favourites are absent, and each selected photo lists its selecting clients and galleries with an aggregate submission state.

## Related guides

- [Enable client favourites](/integrations/lightroom-enable-client-favourites)
- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
