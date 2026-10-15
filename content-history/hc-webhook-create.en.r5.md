---
{
  "articleId": "hc-webhook-create",
  "locale": "en",
  "revision": 5,
  "title": "Create a webhook endpoint",
  "summary": "Register a controlled HTTPS receiver, select documented events, save the signing secret privately and trigger a test event.",
  "category": "developers",
  "articleSlug": "webhook-create",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-rest-api-connect",
    "hc-api-key"
  ],
  "keywords": [
    "create webhook",
    "webhook endpoint",
    "webhook secret",
    "cloud storage"
  ]
}
---
A webhook sends event notifications to your HTTPS endpoint. Build the receiver and verification path before enabling production events.

The receiver must use HTTPS, preserve request bytes for signature checks and return promptly. Keep the signing secret in a secret manager rather than code or logs.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-create-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-create-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-create-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-create-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-create-workflow-map-2026-10-14.webp" alt="Workflow for “Create a webhook endpoint”: enter the endpoint URL and documented events; trigger one harmless event and inspect its delivery." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Create a webhook endpoint”: enter the endpoint URL and documented events; trigger one harmless event and inspect its delivery. <a class="workflow-map-full" href="/screenshots/webhook-create-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-create-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-create-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: create a webhook endpoint

1. Create a controlled HTTPS test endpoint.
2. Open Integrations → Webhooks and select Create.
3. Enter the endpoint URL and documented events.
4. Save the signing secret in a secret manager.
5. Create the webhook.
6. Trigger one harmless event and inspect its delivery.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Reference for “Create a webhook endpoint”: Integrations &gt; Zapier setup page with API-key guidance and the Zapier invite button." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Reference for “Create a webhook endpoint”: Integrations &gt; Zapier setup page with API-key guidance and the Zapier invite button. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** For “Create a webhook endpoint”, copy connection values from the current integration page and keep secrets private.

## Verify the result

Trigger one harmless event, confirm a successful delivery and verify the receiver recorded its identifier exactly once.

## Expected result

The create a webhook endpoint workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [Create an API key](/developers/api-key)
