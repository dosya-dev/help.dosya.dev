---
{
  "articleId": "hc-webhook-troubleshoot",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot webhook deliveries",
  "summary": "Diagnose unreachable endpoints, signature failures, timeouts, non-success responses, duplicates and out-of-order events.",
  "category": "troubleshooting",
  "articleSlug": "webhooks",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-webhook-create",
    "hc-webhook-signature",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook failed",
    "signature mismatch",
    "webhook timeout",
    "cloud storage"
  ]
}
---
Troubleshoot from the delivery record and receiver logs using event identifiers, never by disabling signature verification in production.

A receiver should be reachable over HTTPS, verify the raw-body signature, return promptly and process identifiers idempotently. Preserve one failed delivery for comparison.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhooks-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhooks-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhooks-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhooks-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhooks-workflow-map-2026-10-14.webp" alt="Workflow for “Troubleshoot webhook deliveries”: match the raw body and signature secret; replay one test only after the receiver is fixed." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Troubleshoot webhook deliveries”: match the raw body and signature secret; replay one test only after the receiver is fixed. <a class="workflow-map-full" href="/screenshots/webhooks-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhooks-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhooks-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: troubleshoot webhook deliveries

1. Check the webhook is active and the event is selected.
2. Confirm the public HTTPS endpoint is reachable.
3. Match the raw body and signature secret.
4. Return a prompt documented success response.
5. Handle duplicate and out-of-order events by identifier and state.
6. Replay one test only after the receiver is fixed.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Reference for “Troubleshoot webhook deliveries”: Integrations &gt; Zapier setup page with API-key guidance and the Zapier invite button." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Reference for “Troubleshoot webhook deliveries”: Integrations &gt; Zapier setup page with API-key guidance and the Zapier invite button. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** For “Troubleshoot webhook deliveries”, copy connection values from the current integration page and keep secrets private.

## Verify the result

After correcting the receiver, replay or retrigger one test event and confirm a successful response without duplicate processing.

## Expected result

The troubleshoot webhook deliveries workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Verify signatures](/developers/webhook-signatures)
- [Inspect deliveries](/developers/webhook-deliveries)
