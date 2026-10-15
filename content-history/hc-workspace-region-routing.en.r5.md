---
{
  "articleId": "hc-workspace-region-routing",
  "locale": "en",
  "revision": 5,
  "title": "Understand workspace storage region and routing",
  "summary": "Identify the durable workspace storage location, distinguish it from transfer routing, and plan a new workspace when a different location is required.",
  "category": "workspaces",
  "articleSlug": "region-and-routing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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
The workspace region is the durable storage choice made at creation; transfer edges or network routes do not silently migrate stored files.

A workspace has a durable storage location selected at creation. A nearby network route can improve transfer handling without changing where the workspace data is stored.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/region-and-routing-workflow-map-2026-10-14.webp" data-light-href="/screenshots/region-and-routing-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/region-and-routing-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/region-and-routing-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/region-and-routing-workflow-map-2026-10-14.webp" alt="Workflow for “Understand workspace storage region and routing”: treat a nearby transfer route as transport rather than durable storage; confirm destination copies before removing originals." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Understand workspace storage region and routing”: treat a nearby transfer route as transport rather than durable storage; confirm destination copies before removing originals. <a class="workflow-map-full" href="/screenshots/region-and-routing-workflow-map-2026-10-14.webp" data-light-href="/screenshots/region-and-routing-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/region-and-routing-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: understand workspace storage region and routing

1. Open workspace details and record its storage location.
2. Compare it with the region chosen at creation.
3. Treat a nearby transfer route as transport rather than durable storage.
4. Check current region availability before creating another workspace.
5. Plan an explicit verified transfer when location must change.
6. Confirm destination copies before removing originals.

<figure class="help-screenshot"><a href="/screenshots/workspace-location-picker-2026-10-12.webp"><img src="/screenshots/workspace-location-picker-2026-10-12.webp" alt="Dosya workspace location picker showing durable storage region choices before workspace creation." width="448" height="780" loading="lazy" decoding="async" /></a><figcaption>Choose the durable storage location before creating the workspace. <a href="/screenshots/workspace-location-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm the workspace region in its details. When a different location is required, verify copies in the destination workspace before removing any source data.

## Expected result

The understand workspace storage region and routing workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Create a workspace and choose location](/workspaces/create-and-choose-region)
- [Switch workspaces](/account/switch-workspaces)
