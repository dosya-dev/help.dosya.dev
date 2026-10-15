---
{
  "articleId": "hc-webhook-payload-versioning",
  "locale": "en",
  "revision": 4,
  "title": "Handle webhook payload versions",
  "summary": "Validate required fields, tolerate documented additive fields, and route unknown versions to safe review. Verify that supported payloads process while incompatible changes fail visibly.",
  "category": "developers",
  "articleSlug": "webhook-payload-versioning",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-rest-api-connect",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook payload versioning",
    "Developer operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Handle webhook payload versions** in Dosya. The main action is to validate required fields, tolerate documented additive fields, and route unknown versions to safe review; the decisive check is whether supported payloads process while incompatible changes fail visibly.

<figure class="help-screenshot"><a href="/screenshots/webhook-payload-versioning-help-workflow-2026-10-14.webp"><img src="/screenshots/webhook-payload-versioning-help-workflow-2026-10-14.webp" alt="Workflow for “Handle webhook payload versions”: validate required fields, tolerate documented additive fields, and route unknown versions to safe review; supported payloads process while incompatible changes fail visibly." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Handle webhook payload versions”: validate required fields, tolerate documented additive fields, and route unknown versions to safe review; supported payloads process while incompatible changes fail visibly. <a href="/screenshots/webhook-payload-versioning-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Dosya developer and integration settings in the current released client.
- Confirm the active account and workspace, then identify webhook consumer and recorded non-secret test payload.

## Steps: handle webhook payload versions

1. Open Dosya developer and integration settings and confirm the active account and workspace.
2. Locate webhook consumer and recorded non-secret test payload and verify its name or identifying details.
3. Validate required fields, tolerate documented additive fields, and route unknown versions to safe review.
4. Confirm that supported payloads process while incompatible changes fail visibly.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Handle webhook payload versions”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Handle webhook payload versions”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use non-production credentials and log request identifiers without logging secrets.

## Verify the result

After completing the steps, check the expected result: Supported payloads process while incompatible changes fail visibly.

## Expected result

The controlled workflow completes and supported payloads process while incompatible changes fail visibly.

## Troubleshooting

**The expected control is missing.** Return to Dosya developer and integration settings, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [Inspect webhook deliveries](/developers/webhook-deliveries)
