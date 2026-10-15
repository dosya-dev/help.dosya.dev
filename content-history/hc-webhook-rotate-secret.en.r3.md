---
{
  "articleId": "hc-webhook-rotate-secret",
  "locale": "en",
  "revision": 3,
  "title": "Rotate a webhook signing secret",
  "summary": "Generate the replacement, update the receiver securely, verify a test, and retire the previous secret. Verify that new deliveries verify with the replacement secret.",
  "category": "developers",
  "articleSlug": "webhook-rotate-secret",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-webhook-create",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook rotate secret",
    "Webhook endpoint management",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Rotate a webhook signing secret** in Dosya. The main action is to generate the replacement, update the receiver securely, verify a test, and retire the previous secret; the decisive check is whether new deliveries verify with the replacement secret.

<figure class="help-screenshot"><a href="/screenshots/webhook-rotate-secret-help-workflow-2026-10-14.webp"><img src="/screenshots/webhook-rotate-secret-help-workflow-2026-10-14.webp" alt="Four-step workflow map for rotate a webhook signing secret, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for rotate a webhook signing secret: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/webhook-rotate-secret-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Integrations > Webhooks in the current released client.
- Confirm the active account and workspace, then identify endpoint whose secret must be replaced.

## Steps: rotate a webhook signing secret

1. Open Integrations > Webhooks and confirm the active account and workspace.
2. Locate endpoint whose secret must be replaced and verify its name or identifying details.
3. Generate the replacement, update the receiver securely, verify a test, and retire the previous secret.
4. Confirm that new deliveries verify with the replacement secret.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for managing webhook endpoints and delivery health." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a test endpoint that logs delivery identifiers without logging secrets or private payload data. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: New deliveries verify with the replacement secret.

## Expected result

The controlled workflow completes and new deliveries verify with the replacement secret.

## Troubleshooting

**The expected control is missing.** Return to Integrations > Webhooks, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Inspect deliveries](/developers/webhook-deliveries)
