---
{
  "articleId": "hc-api-create-upload-session",
  "locale": "en",
  "revision": 4,
  "title": "Create a REST API upload session",
  "summary": "Send the authenticated create request with filename, size, workspace, and folder information. Verify that the API returns an upload session for the intended destination.",
  "category": "developers",
  "articleSlug": "api-create-upload-session",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-api-upload-file",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api create upload session",
    "REST API upload sessions",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Create a REST API upload session** in Dosya. The main action is to send the authenticated create request with filename, size, workspace, and folder information; the decisive check is whether the API returns an upload session for the intended destination.

<figure class="help-screenshot"><a href="/screenshots/api-create-upload-session-help-workflow-2026-10-14.webp"><img src="/screenshots/api-create-upload-session-help-workflow-2026-10-14.webp" alt="Workflow for “Create a REST API upload session”: send the authenticated create request with filename, size, workspace, and folder information; the API returns an upload session for the intended destination." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Create a REST API upload session”: send the authenticated create request with filename, size, workspace, and folder information; the API returns an upload session for the intended destination. <a href="/screenshots/api-create-upload-session-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya REST API in the current released client.
- Confirm the active account and workspace, then identify upload endpoint and destination identifiers.

## Steps: create a REST API upload session

1. Open the Dosya REST API and confirm the active account and workspace.
2. Locate upload endpoint and destination identifiers and verify its name or identifying details.
3. Send the authenticated create request with filename, size, workspace, and folder information.
4. Confirm that the API returns an upload session for the intended destination.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Create a REST API upload session”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Create a REST API upload session”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a small test file, an upload-scoped key, and a unique idempotency value while developing.

## Verify the result

After completing the steps, check the expected result: The API returns an upload session for the intended destination.

## Expected result

The controlled workflow completes and the API returns an upload session for the intended destination.

## Troubleshooting

**The expected control is missing.** Return to the Dosya REST API, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Upload through the API](/developers/api-upload-file)
- [REST API quickstart](/developers/rest-api-quickstart)
