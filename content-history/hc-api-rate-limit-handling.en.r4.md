---
{
  "articleId": "hc-api-rate-limit-handling",
  "locale": "en",
  "revision": 4,
  "title": "Handle Dosya API rate limits",
  "summary": "Honor the rate-limit response and retry timing with bounded exponential backoff. Verify that the client slows down and completes without a tight retry loop.",
  "category": "developers",
  "articleSlug": "api-rate-limit-handling",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-rest-api-connect",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "api rate limit handling",
    "Developer operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Handle Dosya API rate limits** in Dosya. The main action is to honor the rate-limit response and retry timing with bounded exponential backoff; the decisive check is whether the client slows down and completes without a tight retry loop.

<figure class="help-screenshot"><a href="/screenshots/api-rate-limit-handling-help-workflow-2026-10-14.webp"><img src="/screenshots/api-rate-limit-handling-help-workflow-2026-10-14.webp" alt="Workflow for “Handle Dosya API rate limits”: honor the rate-limit response and retry timing with bounded exponential backoff; the client slows down and completes without a tight retry loop." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Handle Dosya API rate limits”: honor the rate-limit response and retry timing with bounded exponential backoff; the client slows down and completes without a tight retry loop. <a href="/screenshots/api-rate-limit-handling-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Dosya developer and integration settings in the current released client.
- Confirm the active account and workspace, then identify test client that can observe response status and headers.

## Steps: handle Dosya API rate limits

1. Open Dosya developer and integration settings and confirm the active account and workspace.
2. Locate test client that can observe response status and headers and verify its name or identifying details.
3. Honor the rate-limit response and retry timing with bounded exponential backoff.
4. Confirm that the client slows down and completes without a tight retry loop.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Handle Dosya API rate limits”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Handle Dosya API rate limits”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use non-production credentials and log request identifiers without logging secrets.

## Verify the result

After completing the steps, check the expected result: The client slows down and completes without a tight retry loop.

## Expected result

The controlled workflow completes and the client slows down and completes without a tight retry loop.

## Troubleshooting

**The expected control is missing.** Return to Dosya developer and integration settings, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [Inspect webhook deliveries](/developers/webhook-deliveries)
