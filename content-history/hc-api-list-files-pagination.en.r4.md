---
{
  "articleId": "hc-api-list-files-pagination",
  "locale": "en",
  "revision": 4,
  "title": "Paginate through REST API file results",
  "summary": "Request the first page, store the returned continuation exactly, and continue until no next page remains. Verify that each page is processed once without assuming a fixed total.",
  "category": "developers",
  "articleSlug": "api-list-files-pagination",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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
This guide covers **Paginate through REST API file results** in Dosya. The main action is to request the first page, store the returned continuation exactly, and continue until no next page remains; the decisive check is whether each page is processed once without assuming a fixed total.

<figure class="help-screenshot"><a href="/screenshots/api-list-files-pagination-help-workflow-2026-10-14.webp"><img src="/screenshots/api-list-files-pagination-help-workflow-2026-10-14.webp" alt="Workflow for “Paginate through REST API file results”: request the first page, store the returned continuation exactly, and continue until no next page remains; each page is processed once without assuming a fixed total." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Paginate through REST API file results”: request the first page, store the returned continuation exactly, and continue until no next page remains; each page is processed once without assuming a fixed total. <a href="/screenshots/api-list-files-pagination-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya REST API and a disposable workspace in the current released client.
- Confirm the active account and workspace, then identify list-files response with a continuation or next-page value.

## Steps: paginate through REST API file results

1. Open the Dosya REST API and a disposable workspace and confirm the active account and workspace.
2. Locate list-files response with a continuation or next-page value and verify its name or identifying details.
3. Request the first page, store the returned continuation exactly, and continue until no next page remains.
4. Confirm that each page is processed once without assuming a fixed total.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Paginate through REST API file results”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Paginate through REST API file results”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a read-only test key and redact authorization headers from logs.

## Verify the result

After completing the steps, check the expected result: Each page is processed once without assuming a fixed total.

## Expected result

The controlled workflow completes and each page is processed once without assuming a fixed total.

## Troubleshooting

**The expected control is missing.** Return to the Dosya REST API and a disposable workspace, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [List files with the API](/developers/api-list-files)
- [Handle API errors](/developers/api-errors-pagination)
