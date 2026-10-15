---
{
  "articleId": "hc-api-upload-size-validation",
  "locale": "en",
  "revision": 3,
  "title": "Validate file size during an API upload",
  "summary": "Count transferred bytes and stop if the source no longer matches the declared size. Verify that completion uses the exact expected byte count.",
  "category": "developers",
  "articleSlug": "api-upload-size-validation",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-api-upload-file",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api upload size validation",
    "REST API upload sessions",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Validate file size during an API upload** in Dosya. The main action is to count transferred bytes and stop if the source no longer matches the declared size; the decisive check is whether completion uses the exact expected byte count.

<figure class="help-screenshot"><a href="/screenshots/api-upload-size-validation-help-workflow-2026-10-14.webp"><img src="/screenshots/api-upload-size-validation-help-workflow-2026-10-14.webp" alt="Four-step workflow map for validate file size during an api upload, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for validate file size during an api upload: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/api-upload-size-validation-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya REST API in the current released client.
- Confirm the active account and workspace, then identify declared upload size and source stream.

## Steps: validate file size during an API upload

1. Open the Dosya REST API and confirm the active account and workspace.
2. Locate declared upload size and source stream and verify its name or identifying details.
3. Count transferred bytes and stop if the source no longer matches the declared size.
4. Confirm that completion uses the exact expected byte count.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for authenticated file upload workflows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a small test file, an upload-scoped key, and a unique idempotency value while developing. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Completion uses the exact expected byte count.

## Expected result

The controlled workflow completes and completion uses the exact expected byte count.

## Troubleshooting

**The expected control is missing.** Return to the Dosya REST API, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Upload through the API](/developers/api-upload-file)
- [REST API quickstart](/developers/rest-api-quickstart)
