---
{
  "articleId": "hc-api-folder-operations",
  "locale": "en",
  "revision": 6,
  "title": "Create and move folders with the REST API",
  "summary": "Create, rename, and move folders through their exact REST endpoints, then verify the final parent while preserving names and avoiding tree conflicts.",
  "category": "developers",
  "articleSlug": "api-folder-operations",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/folders/index.ts, apps/api/src/pages/api/folders/[id]/rename.ts, apps/api/src/pages/api/folders/[id]/move.ts, apps/api/src/lib/entity-name.ts, and apps/api/src/pages/api/folders/[id]/move.conflict.unit.test.ts. Production status: the revised create, rename, and move sequence awaits live verification.",
  "related": [
    "hc-rest-api-connect",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api folder operations",
    "REST API file workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya exposes separate folder routes for creation, renaming, and moving. A move can also apply the final name atomically, avoiding an intermediate destination collision.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-folder-operations-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-folder-operations-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-folder-operations-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-folder-operations-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-folder-operations-workflow-map-2026-10-14.webp" alt="Four panels show creating the source folder, renaming it, moving and renaming it atomically, and confirming the same id beneath its final parent." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show creating the source folder, renaming it, moving and renaming it atomically, and confirming the same id beneath its final parent. <a class="workflow-map-full" href="/screenshots/api-folder-operations-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-folder-operations-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-folder-operations-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Permissions and naming

Use a **Full access** credential with REST enabled. Creating requires the role permission `create_folders`; renaming and moving require `rename_folders`; verification through a listing requires `access_files`. A workspace pin works, while an API-key folder anchor does not work on REST.

A create path may be 500 characters across multiple segments. Rename and move names are single segments with a 100-character maximum.

## Steps

1. Create a disposable source with `POST /api/folders` and retain the returned leaf id plus its original `parent_id`.
2. Rename it through `PUT /api/folders/:id/rename` using `{ "name":"Quarterly archive" }`, then require `{ "ok":true,"name":"Quarterly archive" }`.
3. Select a visible destination folder that is outside the source subtree and does not already contain the final name.
4. Move with `PUT /api/folders/:id/move` and `{ "parent_id":"fld_destination","name":"Published archive" }`; use null to move to workspace root.
5. Confirm the move response reports the final `name`, including the optional atomic rename rather than the old source label.
6. List the destination's direct children and verify the folder id occurs there once, while the old parent's listing no longer contains it.

## Refusals to handle

A self-target answers `Cannot move a folder into itself`; a descendant target answers `Cannot move a folder into its own subfolder`. Dosya reports `Destination folder not found` when the target is absent or hidden, and `You don't have permission to move folders` when the current role lacks the operation.

A no-op move produces `Folder is already here`. A destination name collision is HTTP 409 with `A folder with this name already exists in the target folder`. Locked backup trees reject rename or relocation. Do not turn those responses into automatic alternate names unless the caller explicitly accepts that behavior.

The move and rename commit changes the shared tree and invalidates affected listings. It is reversible with another authorized operation, but clients can observe the new path immediately.

## Expected result

The same folder id keeps its identity, the move response names its final label, and a destination listing shows the new parent relationship without a duplicate in the source.

<figure class="help-screenshot"><a href="/screenshots/api-key-permission-2026-10-10.webp"><img src="/screenshots/api-key-permission-2026-10-10.webp" alt="Reference for “Create and move folders with the REST API”: Dosya API-key permission selector showing the access granted to an integration." width="582" height="666" loading="lazy" decoding="async" /></a><figcaption>Reference for “Create and move folders with the REST API”: Dosya API-key permission selector showing the access granted to an integration. <a href="/screenshots/api-key-permission-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [API-key scopes](/developers/api-key-scopes)
