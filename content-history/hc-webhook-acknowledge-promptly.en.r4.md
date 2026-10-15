---
{
  "articleId": "hc-webhook-acknowledge-promptly",
  "locale": "en",
  "revision": 4,
  "title": "Acknowledge a webhook delivery promptly",
  "summary": "Verify the signature, enqueue the event durably, and return the documented success response before slow downstream work. Verify that dosya records a successful delivery without waiting for long processing.",
  "category": "developers",
  "articleSlug": "webhook-acknowledge-promptly",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-webhook-signature",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook acknowledge promptly",
    "Webhook consumer reliability",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Acknowledge a webhook delivery promptly** in Dosya. The main action is to verify the signature, enqueue the event durably, and return the documented success response before slow downstream work; the decisive check is whether dosya records a successful delivery without waiting for long processing.

<figure class="help-screenshot"><a href="/screenshots/webhook-acknowledge-promptly-help-workflow-2026-10-14.webp"><img src="/screenshots/webhook-acknowledge-promptly-help-workflow-2026-10-14.webp" alt="Workflow for “Acknowledge a webhook delivery promptly”: verify the signature, enqueue the event durably, and return the documented success response before slow downstream work; dosya records a successful delivery without waiting for long processing." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Acknowledge a webhook delivery promptly”: verify the signature, enqueue the event durably, and return the documented success response before slow downstream work; dosya records a successful delivery without waiting for long processing. <a href="/screenshots/webhook-acknowledge-promptly-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a controlled webhook receiver and Integrations > Webhooks in the current released client.
- Confirm the active account and workspace, then identify verified test delivery at the receiver.

## Steps: acknowledge a webhook delivery promptly

1. Open a controlled webhook receiver and Integrations > Webhooks and confirm the active account and workspace.
2. Locate verified test delivery at the receiver and verify its name or identifying details.
3. Verify the signature, enqueue the event durably, and return the documented success response before slow downstream work.
4. Confirm that Dosya records a successful delivery without waiting for long processing.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Acknowledge a webhook delivery promptly”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Acknowledge a webhook delivery promptly”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Acknowledge verified events quickly and process them idempotently outside the request path.

## Verify the result

After completing the steps, check the expected result: Dosya records a successful delivery without waiting for long processing.

## Expected result

The controlled workflow completes and Dosya records a successful delivery without waiting for long processing.

## Troubleshooting

**The expected control is missing.** Return to a controlled webhook receiver and Integrations > Webhooks, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Verify webhook signatures](/developers/webhook-signatures)
- [Inspect deliveries](/developers/webhook-deliveries)
