---
{
  "articleId": "hc-api-complete-upload-session",
  "locale": "en",
  "revision": 3,
  "title": "Complete and verify an API upload",
  "summary": "Call completion once, record the returned file ID, and fetch its metadata. Verify that the file exists at the destination with the expected size and name.",
  "category": "developers",
  "articleSlug": "api-complete-upload-session",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-api-upload-file",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api complete upload session",
    "REST API upload sessions",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Complete and verify an API upload** in Dosya. The main action is to call completion once, record the returned file ID, and fetch its metadata; the decisive check is whether the file exists at the destination with the expected size and name.

<figure class="help-screenshot"><a href="/screenshots/api-complete-upload-session-help-workflow-2026-10-14.webp"><img src="/screenshots/api-complete-upload-session-help-workflow-2026-10-14.webp" alt="Four-step workflow map for complete and verify an api upload, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for complete and verify an api upload: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/api-complete-upload-session-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya REST API in the current released client.
- Confirm the active account and workspace, then identify session after all required bytes are accepted.

## Steps: complete and verify an API upload

1. Open the Dosya REST API and confirm the active account and workspace.
2. Locate session after all required bytes are accepted and verify its name or identifying details.
3. Call completion once, record the returned file ID, and fetch its metadata.
4. Confirm that the file exists at the destination with the expected size and name.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for authenticated file upload workflows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a small test file, an upload-scoped key, and a unique idempotency value while developing. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The file exists at the destination with the expected size and name.

## Expected result

The controlled workflow completes and the file exists at the destination with the expected size and name.

## Troubleshooting

**The expected control is missing.** Return to the Dosya REST API, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Upload through the API](/developers/api-upload-file)
- [REST API quickstart](/developers/rest-api-quickstart)
