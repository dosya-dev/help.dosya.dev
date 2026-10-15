---
{
  "articleId": "hc-api-errors-pagination",
  "locale": "en",
  "revision": 6,
  "title": "Handle REST API errors and pagination",
  "summary": "Process page-number results without skipping files, classify Dosya API failures by status and body, and retry only operations that are safe to repeat.",
  "category": "developers",
  "articleSlug": "api-errors-pagination",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/middleware.ts, apps/api/src/lib/rate-limit.ts, apps/api/src/lib/paging.ts, and src/pages/developer/api.astro. Production status: the rewritten error and paging flow has not yet been compared with live responses.",
  "related": [
    "hc-rest-api-connect",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api errors pagination",
    "REST API file workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
A reliable client treats paging state, authentication failures, authorization refusals, conflicts, and transient limits as different outcomes. Dosya does not use a continuation token for file lists.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-errors-pagination-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-errors-pagination-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-errors-pagination-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-errors-pagination-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-errors-pagination-workflow-map-2026-10-14.webp" alt="Four panels show requesting page 1, advancing by total_pages, classifying an error with headers, and reconciling unique file ids after safe retries." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show requesting page 1, advancing by total_pages, classifying an error with headers, and reconciling unique file ids after safe retries. <a class="workflow-map-full" href="/screenshots/api-errors-pagination-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-errors-pagination-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-errors-pagination-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Response model

Successful JSON normally includes `ok:true`. Failures normally use `{ "ok":false, "error":"…" }`; structured errors such as `folder_locked` can add fields. Preserve the HTTP status and the complete error body in redacted logs.

`GET /api/files` uses `page` and `per_page`. The response's `pagination` object supplies `page`, `per_page`, `total_files`, and `total_pages`.

## Steps

1. Request page 1 with a stable workspace, folder, filter, sort, and `per_page`, then keep those query values unchanged for the run.
2. Process each file by `id`, store the current numeric page, and read `pagination.total_pages` from the same response.
3. Increment `page` until the processed page equals `total_pages`; do not look for a cursor, continuation, or `next_page` field.
4. On a non-success response, record status, `error`, `Retry-After`, and rate-limit headers without storing the bearer key.
5. Retry 429 and retryable 503 responses after `Retry-After`; repeat GET, HEAD, or a documented multipart-part retry, but inspect state before replaying a mutation.
6. Reconcile processed file ids at the end, leaving unresolved failures visible rather than marking the whole page complete.

## Status and timing rules

401 `Invalid or expired API key` calls for credential or expiry investigation. A transient authentication lookup instead returns 503 `Service temporarily unavailable` with `Retry-After: 5`. A 403 can come from scope, surface, workspace pin, role, lock, or another access rule. A 404 may intentionally conceal a hidden or confined resource. A 409 reports a state conflict. A 429 body says `Too many requests`.

Most API responses expose `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset`. Authenticated file-list polling receives a 600-per-minute user tier and still passes the 600-per-60-second IP guard. General REST traffic and upload initialization use 300 per minute per user; a lower plan or per-key ceiling can bind first.

Because file paging is offset-based, inserts and deletes during traversal can shift later pages. Pause concurrent mutations for a stable export and deduplicate by file id when that is impossible.

## Expected result

Every numeric page is handled at most once for the run, every file id is reconciled, and retryable responses wait for the server's stated delay while permanent refusals remain actionable.

<figure class="help-screenshot"><a href="/screenshots/api-key-permission-2026-10-10.webp"><img src="/screenshots/api-key-permission-2026-10-10.webp" alt="Reference for “Handle REST API errors and pagination”: Dosya API-key permission selector showing the access granted to an integration." width="582" height="666" loading="lazy" decoding="async" /></a><figcaption>Reference for “Handle REST API errors and pagination”: Dosya API-key permission selector showing the access granted to an integration. <a href="/screenshots/api-key-permission-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [API-key scopes](/developers/api-key-scopes)
