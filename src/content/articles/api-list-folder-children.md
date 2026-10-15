---
{
  "articleId": "hc-api-list-folder-children",
  "locale": "en",
  "revision": 5,
  "title": "List direct child folders with the REST API",
  "summary": "List only the direct child folders beneath one parent, interpret each folder row, and use the separate file-list endpoint when files are also required.",
  "category": "developers",
  "articleSlug": "api-list-folder-children",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/folders/children.ts, apps/api/src/lib/listing/folder-children-core.ts, apps/api/src/lib/repo/types.ts, and apps/api/src/pages/api/folders/hidden-gate.routes.unit.test.ts. Production status: live direct-child output remains to be rechecked after this change.",
  "related": [
    "hc-api-list-files",
    "hc-api-errors-pagination"
  ],
  "keywords": [
    "api list folder children",
    "REST API read workflows",
    "Dosya help",
    "cloud storage API"
  ]
}
---
The folder-children endpoint returns directories only. Use it to lazy-load one tree level; use the file-list endpoint when the caller also needs files.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-list-folder-children-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-list-folder-children-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-list-folder-children-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-list-folder-children-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-list-folder-children-help-workflow-2026-10-14.webp" alt="Four panels show choosing a parent folder, requesting its direct children, using has_children for expansion, and switching to GET files when file rows are needed." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show choosing a parent folder, requesting its direct children, using has_children for expansion, and switching to GET files when file rows are needed. <a class="workflow-map-full" href="/screenshots/api-list-folder-children-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-list-folder-children-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-list-folder-children-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Endpoint contract

Call `GET /api/folders/children?workspace_id=wks_…&parent_id=fld_…`. Omitting `parent_id` requests root folders. The response is `{ok:true,folders:[…]}` with direct children only and no pagination.

Each row provides `id`, `name`, `parent_id`, `file_count`, and `has_children`. Internal hidden-state columns are removed before serialization.

## Steps

1. Use a **Read only** or **Full access** key that permits REST, is not folder-anchored, and belongs to a role with `access_files`.
2. Choose a known parent id from a trusted folder response, or deliberately omit the parameter for workspace root.
3. Send the children request with `workspace_id` and the optional `parent_id`, then require HTTP 200 and `ok:true`.
4. Confirm every returned row has the requested `parent_id`, and use `has_children` to decide whether the interface should offer expansion.
5. Treat `file_count` as folder-row metadata; do not expect file objects or a continuation field in this response.
6. When files are required, call `GET /api/files?workspace_id=wks_…&folder_id=fld_…` and reconcile its separate `folders`, `files`, and pagination data.

## Access and privacy behavior

A missing `workspace_id` returns `workspace_id is required`. Lack of membership answers `Not a member`. A parent hidden from this requester returns 404 `Folder not found`, while a parent outside a human member's confined subtree returns `This folder is outside the folder you're confined to`.

For a folder-confined human member, omitting `parent_id` resolves the listing root to that member's anchor. This is different from an API-key folder anchor: an ordinary anchored credential is refused on REST and must use WebDAV or S3.

The endpoint does not return descendants recursively. Call it again for a returned id whose `has_children` value is truthy.

## Expected result

The body contains only the visible folders immediately below the chosen parent. File retrieval, file pagination, and deeper expansion occur through their own explicit requests.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for listing direct child folders: the Dosya REST API overview with links for obtaining an API key and opening the SDK documentation." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The REST API overview provides the credential and SDK starting points used before requesting direct child folders. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [List files with the API](/developers/api-list-files)
- [Handle API errors](/developers/api-errors-pagination)
