---
{
  "articleId": "hc-lightroom-collect-client-favourites",
  "locale": "en",
  "revision": 5,
  "title": "Collect client favourites in a Lightroom gallery",
  "summary": "Run a client through gallery identification, favourites, notes, and submission, then confirm Lightroom can retrieve the recorded selection and status.",
  "category": "integrations",
  "articleSlug": "lightroom-collect-client-favourites",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/api/src/pages/api/galleries/[id]/selections.ts, apps/api/src/pages/api/share/[token]/gallery/clients.ts, apps/api/src/pages/api/share/[token]/gallery/selections.ts, apps/api/src/pages/api/share/[token]/gallery/submit.ts, apps/api/src/lib/galleries/limits.ts, apps/lightroom/dosya.lrdevplugin/DosyaSelections.lua, apps/lightroom/dosya.lrdevplugin/DosyaMenu.lua on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-enable-client-favourites",
    "hc-lightroom-publish-gallery"
  ],
  "keywords": [
    "lightroom collect client favourites",
    "Lightroom client selections",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A Dosya gallery records favourites per identified client when **Let clients pick favourites** is enabled. Use a test identity that you can recognize later; Lightroom imports client names, current picks, submission state, and notes, rather than changing the original photos in the catalog.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-collect-client-favourites-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-collect-client-favourites-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-collect-client-favourites-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-collect-client-favourites-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-collect-client-favourites-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Collect client favourites in a Lightroom gallery: Open the published gallery privately, follow the recipient access flow. Favourite a known photo set, add a short client note if offered. Sync selections from dosya, target the matching published collection. Open the per-client collection, compare it with the test favourites." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Open the published gallery privately, follow the recipient access flow.” and ends with “Open the per-client collection, compare it with the test favourites.” <a class="workflow-map-full" href="/screenshots/lightroom-collect-client-favourites-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-collect-client-favourites-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-collect-client-favourites-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Publish a gallery with **Let clients pick favourites** enabled, then open its client link in a signed-out or private browser so the test follows the recipient flow.
2. Enter a distinctive client name and any requested identity details. If the link also has a password or recipient gate, complete that access check before selecting photos.
3. Mark a small, known set of gallery photos as favourites. Add a short note if the gallery offers one; Lightroom displays retrieved notes, capped at 500 UTF-16 units plus an ellipsis when truncated.
4. Use the gallery’s submission control when the choices are final. Submitted selections become `submitted`; unsent choices remain `in progress` and can still be retrieved.
5. Return to Lightroom Classic, select the matching Dosya published collection, and choose **Library > Plug-in Extras > Sync client selections from dosya**.
6. Read the **Client selections synced** receipt, then open the client collection under **dosya client selections** and compare its members with the exact test favourites.

**Visitor limits.** A gallery accepts at most 200 named selection clients. The next registration receives `This gallery has reached its limit of people picking favourites. Ask the photographer for help.` Dosya has no operation for deleting one gallery client, so publish a new gallery when additional identities must register after the current gallery reaches 200.

**What the client receives.** The visitor keeps the gallery experience and its access rules; syncing does not notify the client or lock their choices. A later client change replaces the membership of that client collection on the next sync.

**Failure boundary.** If one gallery cannot be read, the receipt names the number of failed galleries and the first server error. A batch-stopping authentication or connection error prevents the catalog write; resolve that error before treating Lightroom as current.

## Expected result

The test identity appears in the sync receipt, its Lightroom collection contains the chosen photos, and the metadata distinguishes a submitted selection from work still in progress.

## Related guides

- [Enable client favourites](/integrations/lightroom-enable-client-favourites)
- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
