---
{
  "articleId": "hc-api-create-folder-verify-parent",
  "locale": "en",
  "revision": 5,
  "title": "Create an API folder and verify its parent",
  "summary": "Create one folder through the REST API, interpret reused path segments correctly, and verify the returned child beneath the intended parent folder.",
  "category": "developers",
  "articleSlug": "api-create-folder-verify-parent",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/folders/index.ts, apps/api/src/pages/api/folders/children.ts, apps/api/src/lib/listing/folder-children-core.ts, and apps/api/src/pages/api/folders/index.create-gated.unit.test.ts. Production status: the rewritten parent-verification flow has not yet been checked live.",
  "related": [
    "hc-api-folder-operations",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api create folder verify parent",
    "REST API mutation safeguards",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Folder creation accepts either one name or a nested path. The response distinguishes the leaf that now exists from the path segments that this request actually inserted.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-create-folder-verify-parent-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-create-folder-verify-parent-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-create-folder-verify-parent-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-create-folder-verify-parent-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-create-folder-verify-parent-help-workflow-2026-10-14.webp" alt="Four panels show selecting a parent id, posting a unique folder name, reading the 201 leaf and created_count, and matching that id in the direct-child response." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show selecting a parent id, posting a unique folder name, reading the 201 leaf and created_count, and matching that id in the direct-child response. <a class="workflow-map-full" href="/screenshots/api-create-folder-verify-parent-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-create-folder-verify-parent-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-create-folder-verify-parent-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Access requirements

Use a **Full access** key with the **REST API** surface so the same credential may create and then read. **Upload only** can call the create route but cannot perform the verification GET. A key may be pinned to the target workspace; adding a folder anchor disables REST use.

The member role needs `create_folders` for the mutation and `access_files` for the child-folder listing.

## Steps

1. Choose a visible parent folder and copy its `fld_…` identifier, or plan to omit `parent_id` when creating at workspace root.
2. Pick a unique one-segment test name, no longer than 100 characters, so the expected `created_count` is unambiguous.
3. Send `POST /api/folders` with `{ "workspace_id":"wks_…", "parent_id":"fld_…", "name":"API verification" }`.
4. Require HTTP 201 and record `folder.id`, `folder.parent_id`, `created_count`, and the `created_folders` array from the response.
5. Call `GET /api/folders/children?workspace_id=wks_…&parent_id=fld_…`; omit `parent_id` only when the chosen parent is workspace root.
6. Find exactly one returned folder whose id equals `folder.id`, then compare its name and parent before retaining or trashing the test folder.

## Path behavior

The create route splits both `/` and `\`, so `Reports/2026/October` can create several levels in one request. The complete path is capped at 500 characters and each segment at 100. Existing segments are reused: a successful retry can return `created_count:0`, and a mixed path can report fewer created folders than segments.

The 201 body contains the leaf as `folder:{id,name,parent_id,workspace_id}`. `created_folders` contains only rows inserted by that request. Creation changes the workspace tree immediately; removing the test later is a separate mutation.

## Expected result

The leaf identifier from the create response appears as a direct child of the requested parent. A unique single-segment test returns `created_count:1` and one entry in `created_folders`.

## Troubleshooting

`workspace_id is required` or `Folder name is required` means the body is incomplete. Membership and role failures read `Not a member of this workspace` or `You don't have permission to create folders`. Missing and locked destinations return `Parent folder not found` or a structured `folder_locked` response. A race can produce 409 `A folder named "<part>" already exists here`; list the parent before deciding whether to retry.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Create an API folder and verify its parent”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Create an API folder and verify its parent”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [Use folder operations](/developers/api-folder-operations)
- [REST API quickstart](/developers/rest-api-quickstart)
