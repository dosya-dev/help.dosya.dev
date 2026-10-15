---
{
  "articleId": "hc-api-upload-idempotency",
  "locale": "en",
  "revision": 4,
  "title": "Use idempotency keys for API uploads",
  "summary": "Send a stable unique idempotency value for retries of the same logical upload. Verify that a retry returns the original result instead of creating another file.",
  "category": "developers",
  "articleSlug": "api-upload-idempotency",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-api-upload-file",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api upload idempotency",
    "REST API upload sessions",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Use idempotency keys for API uploads** in Dosya. The main action is to send a stable unique idempotency value for retries of the same logical upload; the decisive check is whether a retry returns the original result instead of creating another file.

<figure class="help-screenshot"><a href="/screenshots/api-upload-idempotency-help-workflow-2026-10-14.webp"><img src="/screenshots/api-upload-idempotency-help-workflow-2026-10-14.webp" alt="Workflow for “Use idempotency keys for API uploads”: send a stable unique idempotency value for retries of the same logical upload; a retry returns the original result instead of creating another file." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Use idempotency keys for API uploads”: send a stable unique idempotency value for retries of the same logical upload; a retry returns the original result instead of creating another file. <a href="/screenshots/api-upload-idempotency-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya REST API in the current released client.
- Confirm the active account and workspace, then identify client operation that may be retried.

## Steps: use idempotency keys for API uploads

1. Open the Dosya REST API and confirm the active account and workspace.
2. Locate client operation that may be retried and verify its name or identifying details.
3. Send a stable unique idempotency value for retries of the same logical upload.
4. Confirm that a retry returns the original result instead of creating another file.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Use idempotency keys for API uploads”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Use idempotency keys for API uploads”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a small test file, an upload-scoped key, and a unique idempotency value while developing.

## Verify the result

After completing the steps, check the expected result: A retry returns the original result instead of creating another file.

## Expected result

The controlled workflow completes and a retry returns the original result instead of creating another file.

## Troubleshooting

**The expected control is missing.** Return to the Dosya REST API, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Upload through the API](/developers/api-upload-file)
- [REST API quickstart](/developers/rest-api-quickstart)
