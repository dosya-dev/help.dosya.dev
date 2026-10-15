---
{
  "articleId": "hc-api-resume-upload-session",
  "locale": "en",
  "revision": 4,
  "title": "Resume an interrupted API upload",
  "summary": "Query the acknowledged position and continue from the next required byte without resending completed data. Verify that the session progresses from its stored offset.",
  "category": "developers",
  "articleSlug": "api-resume-upload-session",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-api-upload-file",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api resume upload session",
    "REST API upload sessions",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Resume an interrupted API upload** in Dosya. The main action is to query the acknowledged position and continue from the next required byte without resending completed data; the decisive check is whether the session progresses from its stored offset.

<figure class="help-screenshot"><a href="/screenshots/api-resume-upload-session-help-workflow-2026-10-14.webp"><img src="/screenshots/api-resume-upload-session-help-workflow-2026-10-14.webp" alt="Workflow for “Resume an interrupted API upload”: query the acknowledged position and continue from the next required byte without resending completed data; the session progresses from its stored offset." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Resume an interrupted API upload”: query the acknowledged position and continue from the next required byte without resending completed data; the session progresses from its stored offset. <a href="/screenshots/api-resume-upload-session-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya REST API in the current released client.
- Confirm the active account and workspace, then identify incomplete resumable upload session.

## Steps: resume an interrupted API upload

1. Open the Dosya REST API and confirm the active account and workspace.
2. Locate incomplete resumable upload session and verify its name or identifying details.
3. Query the acknowledged position and continue from the next required byte without resending completed data.
4. Confirm that the session progresses from its stored offset.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Resume an interrupted API upload”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Resume an interrupted API upload”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a small test file, an upload-scoped key, and a unique idempotency value while developing.

## Verify the result

After completing the steps, check the expected result: The session progresses from its stored offset.

## Expected result

The controlled workflow completes and the session progresses from its stored offset.

## Troubleshooting

**The expected control is missing.** Return to the Dosya REST API, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Upload through the API](/developers/api-upload-file)
- [REST API quickstart](/developers/rest-api-quickstart)
