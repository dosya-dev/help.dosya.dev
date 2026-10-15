---
{
  "articleId": "hc-api-list-folder-children",
  "locale": "en",
  "revision": 4,
  "title": "List files inside one API folder",
  "summary": "Request children for that folder, then verify representative IDs and names against Dosya. Verify that the response is limited to the intended folder context.",
  "category": "developers",
  "articleSlug": "api-list-folder-children",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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
This guide covers **List files inside one API folder** in Dosya. The main action is to request children for that folder, then verify representative IDs and names against Dosya; the decisive check is whether the response is limited to the intended folder context.

<figure class="help-screenshot"><a href="/screenshots/api-list-folder-children-help-workflow-2026-10-14.webp"><img src="/screenshots/api-list-folder-children-help-workflow-2026-10-14.webp" alt="Workflow for “List files inside one API folder”: request children for that folder, then verify representative IDs and names against Dosya; the response is limited to the intended folder context." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “List files inside one API folder”: request children for that folder, then verify representative IDs and names against Dosya; the response is limited to the intended folder context. <a href="/screenshots/api-list-folder-children-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya REST API and a disposable workspace in the current released client.
- Confirm the active account and workspace, then identify known folder identifier and read-only key.

## Steps: list files inside one API folder

1. Open the Dosya REST API and a disposable workspace and confirm the active account and workspace.
2. Locate known folder identifier and read-only key and verify its name or identifying details.
3. Request children for that folder, then verify representative IDs and names against Dosya.
4. Confirm that the response is limited to the intended folder context.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “List files inside one API folder”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “List files inside one API folder”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a read-only test key and redact authorization headers from logs.

## Verify the result

After completing the steps, check the expected result: The response is limited to the intended folder context.

## Expected result

The controlled workflow completes and the response is limited to the intended folder context.

## Troubleshooting

**The expected control is missing.** Return to the Dosya REST API and a disposable workspace, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [List files with the API](/developers/api-list-files)
- [Handle API errors](/developers/api-errors-pagination)
