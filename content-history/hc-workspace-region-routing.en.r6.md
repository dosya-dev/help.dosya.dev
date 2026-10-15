---
{
  "articleId": "hc-workspace-region-routing",
  "locale": "en",
  "revision": 6,
  "title": "Understand workspace storage region and routing",
  "summary": "Confirm the workspace location chosen at creation, understand regional placement and routing, and migrate data safely when another location is needed.",
  "category": "workspaces",
  "articleSlug": "region-and-routing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally on 2026-10-14 against apps/web/src/pages/create-workspace.tsx and settings.tsx, apps/api/src/pages/api/regions.ts, workspaces/index.ts, workspaces/[id]/index.ts, lib/workspace/region.ts, lib/workspace-do/location.ts, and their tests. No production request was made.",
  "related": [
    "hc-create-workspace-region",
    "hc-switch-workspaces"
  ],
  "keywords": [
    "storage region",
    "data location",
    "transfer routing",
    "cloud storage"
  ]
}
---
A workspace's **Location** is selected when the workspace is created. Dosya uses that stored location to choose the workspace service placement and approved regional object bucket; uploads do not carry a per-file location override.

Location is fixed for the workspace. A faster network path, a nearby edge, a protocol endpoint or the place from which somebody uploads does not rewrite it.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/region-and-routing-workflow-map-2026-10-14.webp" data-light-href="/screenshots/region-and-routing-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/region-and-routing-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/region-and-routing-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/region-and-routing-workflow-map-2026-10-14.webp" alt="Workspace location review showing the immutable creation choice, current Settings value and a verified copy plan for another location." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Read the stored Location in Workspace info; when requirements change, create a destination workspace and verify its copies before removing source data. <a class="workflow-map-full" href="/screenshots/region-and-routing-workflow-map-2026-10-14.webp" data-light-href="/screenshots/region-and-routing-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/region-and-routing-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## How the location is chosen

The creation form loads the current catalog and preselects a suggested location from the request's country or continent. If the catalog cannot load, the form stays usable and the server chooses a suggestion; when geography is unavailable, the fallback is Sydney (`ap-southeast-2`). An unrecognized submitted code is refused with **Unknown location**.

The catalog currently contains 46 city choices across North America, South America, Europe, Asia Pacific, the Middle East and Africa. The city label is the choice shown to the creator. Several labels may map to the same regional bucket or service-location hint. Nine EU member-state choices use the EU jurisdiction; London and Istanbul are European catalog locations but do not use that EU jurisdiction mapping.

<figure class="help-screenshot"><a href="/screenshots/workspace-location-picker-2026-10-12.webp"><img src="/screenshots/workspace-location-picker-2026-10-12.webp" alt="Create workspace Location picker with a city selected before the permanent workspace location is submitted." width="448" height="780" loading="lazy" decoding="async" /></a><figcaption>The Location picker appears during workspace creation because the resulting workspace cannot be reassigned afterward. <a href="/screenshots/workspace-location-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Switch to the workspace whose location you need to confirm.
2. Open **Settings → Workspace info** and read the read-only **Location** row. It displays the city label and, when different, its stored region code in parentheses.
3. Compare that value with the region recorded in your organization's data-location decision. Do not infer storage location from latency, IP geolocation or an integration's endpoint string.
4. If the current location is acceptable, leave it unchanged; there is no location Save control.
5. When a different location is required, open **Create new workspace**, choose the destination **Location**, and optionally set a storage limit that fits the unallocated account capacity.
6. Copy or upload a controlled sample into the new workspace. Verify its file name, exact byte size, content and selected destination workspace before moving the full data set.
7. Under **Destination access**, re-create membership, API credentials, share links, file requests and automation targets as needed. Those workspace-bound records do not become destination resources merely because file bytes were copied.
8. Keep the source until file counts and bytes have been reconciled and recipients or integrations use the new links. Deleting the source workspace permanently removes its remaining files, versions, Trash, shares and members.

## Routing details that do not change Location

- The uploader's approximate position can be recorded as upload-origin metadata when that workspace setting is enabled; it is unrelated to object placement.
- Browser uploads and downloads use short-lived signed object URLs for the bucket assigned to the workspace. The request can traverse Cloudflare's network without altering the stored workspace choice.
- S3-compatible clients use their documented signing region and gateway endpoint. That protocol configuration is not evidence that the workspace moved.
- Existing file metadata keeps the workspace's region when copied within the same workspace. A destination workspace writes new destination records under its own placement.

## Errors and recovery

**Location is fixed when a workspace is created.** The server returns HTTP 409 for any attempt to update `default_region`; no role or permission can override this. Create a workspace at the required location and perform a verified migration.

**Couldn't load the list of locations. Try again.** Retry the catalog request. If it remains unavailable, creation can continue without a manual choice and the server will select its current geographic suggestion.

**Pick a location for this workspace.** The picker loaded successfully but no option is selected. Choose the approved city before submitting.

**Only … GB of your plan is unallocated.** The optional destination cap exceeds the remaining whole-GB allocation. Reduce the new cap, lower another owned workspace's cap, or add storage.

**Free plan allows a maximum of 3 workspaces. Upgrade to create more.** Region choice itself is not tier-gated, but a Free owner at the three-workspace limit cannot create the destination needed for relocation until they upgrade or reduce their owned-workspace count.

## Expected result

Workspace info displays the same immutable location after refresh. If relocation was necessary, the destination workspace shows its separately chosen location and validated copies remain accessible there before any irreversible source cleanup begins.

## Related guides

- [Create a workspace and choose location](/workspaces/create-and-choose-region)
- [Switch workspaces](/account/switch-workspaces)
