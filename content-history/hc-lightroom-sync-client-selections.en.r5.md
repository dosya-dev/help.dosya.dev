---
{
  "articleId": "hc-lightroom-sync-client-selections",
  "locale": "en",
  "revision": 5,
  "title": "Sync Dosya client selections into Lightroom",
  "summary": "Import client favourites into read-only metadata and per-client collections, optionally add Pick or color labels, and verify the exact sync summary.",
  "category": "integrations",
  "articleSlug": "lightroom-sync-client-selections",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/lightroom/dosya.lrdevplugin/DosyaSelections.lua, apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaMetadata.lua, apps/lightroom/tests/selections_test.lua, and apps/api/src/lib/galleries/limits.ts. Production behavior for “Sync Dosya client selections into Lightroom” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-enable-client-favourites",
    "hc-lightroom-publish-gallery"
  ],
  "keywords": [
    "lightroom sync client selections",
    "Lightroom client selections",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The sync command reads favourites from Dosya and performs one Lightroom catalog write. It updates plug-in metadata, refreshes one collection per client and can optionally set Pick flags or a chosen color label.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-sync-client-selections-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-sync-client-selections-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-sync-client-selections-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-sync-client-selections-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-sync-client-selections-help-workflow-2026-10-14.webp" alt="Four-step workflow for choosing mark settings, running Sync client selections from dosya, reading counts, and inspecting client collections." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for choosing mark settings, running Sync client selections from dosya, reading counts, and inspecting client collections. <a class="workflow-map-full" href="/screenshots/lightroom-sync-client-selections-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-sync-client-selections-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-sync-client-selections-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open publish-service settings and choose whether **Set the Pick flag** or **Set color label** should alter metadata during the next selection sync.
2. To sync one gallery, select its Dosya published collection. With no selected Dosya collection, the command walks every published collection belonging to the plug-in.
3. Choose **Library → Plug-in Extras → Sync client selections from dosya**.
4. Wait while the plug-in reads each gallery’s clients and file IDs. A stop-batch authentication failure writes nothing; nonfatal gallery failures are reported in the final summary.
5. Read **Client selections synced** and its gallery, client, selected, and cleared counts. Client notes are appended once and capped at 500 UTF-16 units.
6. Inspect **dosya client selections** and its `_gallery_ - _client_` child collections, then verify **Selected by (dosya)** and **Selection status (dosya)** on representative photos.

The server allows up to 200 named clients per gallery. The plug-in stores client-entered names, not verified account identities. A photo's **Selection status (dosya)** is aggregate: it reads `submitted` when any client selecting that photo has submitted, and `in progress` only when none has. Use the photo's membership in each per-client collection to identify who selected it; the aggregate field does not attribute submission to one client. Deselecting and syncing removes stale metadata and collection membership.


<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Reference for “Sync Dosya client selections into Lightroom”: Lightroom Classic integration title card with a camera aperture illustration." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Sync Dosya client selections into Lightroom”: Lightroom Classic integration title card with a camera aperture illustration. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Each client collection contains exactly that client’s current picks, affected photos show accurate read-only Dosya metadata, optional Pick/color changes follow the saved service settings, and the summary accounts for cleared selections and partial gallery-read failures.

For **Lightroom’s catalog is busy, so the client selections were not written. Try again in a moment.**, close other catalog writes and retry. A reconnect message after 401 requires a new Lightroom approval; repeated sync cannot revive a revoked key.

## Related guides

- [Enable client favourites](/integrations/lightroom-enable-client-favourites)
- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
