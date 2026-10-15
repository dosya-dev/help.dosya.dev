---
{
  "articleId": "hc-api-list-files-pagination",
  "locale": "en",
  "revision": 5,
  "title": "Paginate through REST API file results",
  "summary": "Walk numeric REST file pages from page 1 through total_pages, respect the 10–500 page-size bounds, and prevent duplicate processing during changes.",
  "category": "developers",
  "articleSlug": "api-list-files-pagination",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/files/index.ts, apps/api/src/lib/paging.ts, apps/api/src/lib/listing/folder-listing-core.ts, and src/pages/developer/api.astro. Production status: live numeric pagination has not yet been sampled after this rewrite.",
  "related": [
    "hc-api-list-files",
    "hc-api-errors-pagination"
  ],
  "keywords": [
    "api list files pagination",
    "REST API read workflows",
    "Dosya help",
    "cloud storage API"
  ]
}
---
File listings use numeric offset pages. There is no continuation token, cursor, or next-page value to save from `GET /api/files`.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-list-files-pagination-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-list-files-pagination-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-list-files-pagination-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-list-files-pagination-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-list-files-pagination-help-workflow-2026-10-14.webp" alt="Four panels show fixing one listing query, reading numeric pagination metadata, walking pages through total_pages, and reconciling unique file ids after the run." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show fixing one listing query, reading numeric pagination metadata, walking pages through total_pages, and reconciling unique file ids after the run. <a class="workflow-map-full" href="/screenshots/api-list-files-pagination-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-list-files-pagination-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-list-files-pagination-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Request and response

Call `GET /api/files?workspace_id=wks_…&folder_id=fld_…&page=1&per_page=100`. Omit `folder_id` for workspace root. `page` defaults to 1; `per_page` defaults to 100 and is clamped from 10 through 500. Page numbers are capped at 10,000,000, fractions are floored, and malformed values fall back safely.

The response contains `folders`, paged `files`, `breadcrumbs`, resolved `workspace_id` and `folder_id`, `can_lock`, `can_hide`, `folder_view_only`, and `pagination`.

## Steps

1. Freeze the workspace, folder, filter, search, and sort inputs for the traversal, and choose a `per_page` value between 10 and 500.
2. Request `page=1`, require `ok:true`, and record `pagination.page`, `per_page`, `total_files`, and `total_pages`.
3. Process each element of `files` by its stable `id`; treat the `folders` array as directory context rather than part of the file-page count.
4. Increment the numeric page and repeat the identical query until the returned page equals `pagination.total_pages`.
5. Deduplicate file ids and avoid concurrent uploads, moves, or deletes when the run must represent one stable export.
6. Reconcile the number of unique processed ids with the visible result set, retaining any 403, 404, 429, or 503 page failure for recovery.

## Paging details

`pagination.total_files` counts files, not folders. `total_pages` is at least 1 even when no files match. Because this is limit/offset paging, mutations during the run can shift rows between pages; id-based deduplication prevents double processing but cannot recreate a historical snapshot.

The endpoint supports response ETags. A conditional request can return HTTP 304 when the serialized listing is unchanged.

Use a **Read only** or **Full access** key with REST enabled and a role holding `access_files`. Upload only is refused with `This credential's scope is 'upload' and cannot perform GET /api/files`. Folder-anchored keys cannot use this REST route.

## Expected result

The client visits pages 1 through `total_pages`, processes every visible file id once for the chosen query, and never waits for a continuation field the API does not return.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Paginate through REST API file results”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Paginate through REST API file results”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [List files with the API](/developers/api-list-files)
- [Handle API errors](/developers/api-errors-pagination)
