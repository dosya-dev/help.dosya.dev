---
{
  "articleId": "hc-webhook-send-test",
  "locale": "en",
  "revision": 4,
  "title": "Send a test webhook",
  "summary": "Choose Send test and inspect both Dosya delivery status and the receiver log, then Confirm that one signed test delivery reaches the endpoint.",
  "category": "developers",
  "articleSlug": "webhook-send-test",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-webhook-create",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook send test",
    "Webhook endpoint management",
    "Dosya help",
    "cloud storage"
  ]
}
---
Send a test webhook is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide covers how to send a test webhook and verify the resulting state.

The main checks are the credential scope, endpoint and requested operation. Use a narrowly scoped test credential and keep secrets out of commands, logs and screenshots.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-send-test-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-send-test-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-send-test-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-send-test-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-send-test-workflow-map-2026-10-14.webp" alt="Four-step interface map for send a test webhook, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/webhook-send-test-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-send-test-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-send-test-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Integrations > Webhooks in the current released client.
- Confirm the active account and workspace, then identify configured test endpoint.

## Steps: send a test webhook

1. Open Integrations > Webhooks and confirm the active account and workspace.
2. Locate configured test endpoint and verify its name or identifying details.
3. Choose Send test and inspect both Dosya delivery status and the receiver log.
4. Confirm that one signed test delivery reaches the endpoint.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for managing webhook endpoints and delivery health." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a test endpoint that logs delivery identifiers without logging secrets or private payload data. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm that one signed test delivery reaches the endpoint.

## Expected result

The controlled workflow completes and one signed test delivery reaches the endpoint.

## Troubleshooting

**The expected control is missing.** Return to Integrations > Webhooks, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Inspect deliveries](/developers/webhook-deliveries)
