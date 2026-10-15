---
{
  "articleId": "hc-api-get-file-metadata",
  "locale": "en",
  "revision": 3,
  "title": "Fetch file metadata by API identifier",
  "summary": "Request its metadata and compare name, size, workspace, folder, and modification details with the UI. Verify that the API record identifies the same file.",
  "category": "developers",
  "articleSlug": "api-get-file-metadata",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-api-list-files",
    "hc-api-errors-pagination"
  ],
  "keywords": [
    "api get file metadata",
    "REST API read workflows",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Fetch file metadata by API identifier** in Dosya. The main action is to request its metadata and compare name, size, workspace, folder, and modification details with the UI; the decisive check is whether the API record identifies the same file.

<figure class="help-screenshot"><a href="/screenshots/api-get-file-metadata-help-workflow-2026-10-14.webp"><img src="/screenshots/api-get-file-metadata-help-workflow-2026-10-14.webp" alt="Four-step workflow map for fetch file metadata by api identifier, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for fetch file metadata by api identifier: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/api-get-file-metadata-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya REST API and a disposable workspace in the current released client.
- Confirm the active account and workspace, then identify known test file ID.

## Steps: fetch file metadata by API identifier

1. Open the Dosya REST API and a disposable workspace and confirm the active account and workspace.
2. Locate known test file ID and verify its name or identifying details.
3. Request its metadata and compare name, size, workspace, folder, and modification details with the UI.
4. Confirm that the API record identifies the same file.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for authenticated file and folder requests." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a read-only test key and redact authorization headers from logs. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The API record identifies the same file.

## Expected result

The controlled workflow completes and the API record identifies the same file.

## Troubleshooting

**The expected control is missing.** Return to the Dosya REST API and a disposable workspace, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [List files with the API](/developers/api-list-files)
- [Handle API errors](/developers/api-errors-pagination)
