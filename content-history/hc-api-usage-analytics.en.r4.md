---
{
  "articleId": "hc-api-usage-analytics",
  "locale": "en",
  "revision": 4,
  "title": "Review Dosya API usage analytics",
  "summary": "Select the relevant time window and compare request volume, status, and endpoint information. Verify that usage patterns and unexpected failures are visible.",
  "category": "developers",
  "articleSlug": "api-usage-analytics",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-rest-api-connect",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "api usage analytics",
    "Developer operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Review Dosya API usage analytics** in Dosya. The main action is to select the relevant time window and compare request volume, status, and endpoint information; the decisive check is whether usage patterns and unexpected failures are visible.

<figure class="help-screenshot"><a href="/screenshots/api-usage-analytics-help-workflow-2026-10-14.webp"><img src="/screenshots/api-usage-analytics-help-workflow-2026-10-14.webp" alt="Workflow for “Review Dosya API usage analytics”: select the relevant time window and compare request volume, status, and endpoint information; usage patterns and unexpected failures are visible." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Review Dosya API usage analytics”: select the relevant time window and compare request volume, status, and endpoint information; usage patterns and unexpected failures are visible. <a href="/screenshots/api-usage-analytics-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Dosya developer and integration settings in the current released client.
- Confirm the active account and workspace, then identify API analytics page for the active workspace.

## Steps: review Dosya API usage analytics

1. Open Dosya developer and integration settings and confirm the active account and workspace.
2. Locate API analytics page for the active workspace and verify its name or identifying details.
3. Select the relevant time window and compare request volume, status, and endpoint information.
4. Confirm that usage patterns and unexpected failures are visible.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Review Dosya API usage analytics”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Review Dosya API usage analytics”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use non-production credentials and log request identifiers without logging secrets.

## Verify the result

After completing the steps, check the expected result: Usage patterns and unexpected failures are visible.

## Expected result

The controlled workflow completes and usage patterns and unexpected failures are visible.

## Troubleshooting

**The expected control is missing.** Return to Dosya developer and integration settings, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [Inspect webhook deliveries](/developers/webhook-deliveries)
