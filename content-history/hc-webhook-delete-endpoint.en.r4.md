---
{
  "articleId": "hc-webhook-delete-endpoint",
  "locale": "en",
  "revision": 4,
  "title": "Delete an unused webhook endpoint",
  "summary": "Record any needed delivery evidence, choose Delete, and confirm, then Confirm that the endpoint stops receiving future events.",
  "category": "developers",
  "articleSlug": "webhook-delete-endpoint",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-webhook-create",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook delete endpoint",
    "Webhook endpoint management",
    "Dosya help",
    "cloud storage"
  ]
}
---
Delete an unused webhook endpoint is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide covers how to delete an unused webhook endpoint and verify the resulting state.

The main checks are the credential scope, endpoint and requested operation. Use a narrowly scoped test credential and keep secrets out of commands, logs and screenshots.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14.webp" alt="Four-step interface map for delete an unused webhook endpoint, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Integrations > Webhooks in the current released client.
- Confirm the active account and workspace, then identify endpoint confirmed unused by any integration.

## Steps: delete an unused webhook endpoint

1. Open Integrations > Webhooks and confirm the active account and workspace.
2. Locate endpoint confirmed unused by any integration and verify its name or identifying details.
3. Record any needed delivery evidence, choose Delete, and confirm.
4. Confirm that the endpoint stops receiving future events.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for managing webhook endpoints and delivery health." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a test endpoint that logs delivery identifiers without logging secrets or private payload data. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm that the endpoint stops receiving future events.

## Expected result

The controlled workflow completes and the endpoint stops receiving future events.

## Troubleshooting

**The expected control is missing.** Return to Integrations > Webhooks, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Inspect deliveries](/developers/webhook-deliveries)
