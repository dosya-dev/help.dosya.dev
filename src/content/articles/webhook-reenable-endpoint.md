---
{
  "articleId": "hc-webhook-reenable-endpoint",
  "locale": "en",
  "revision": 5,
  "title": "Re-enable a webhook after repeated failures",
  "summary": "Repair and test an auto-disabled webhook receiver before re-enabling it, then replay only the failed events the downstream system still needs.",
  "category": "developers",
  "articleSlug": "webhook-reenable-endpoint",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/webhooks/deliver.ts, apps/api/src/lib/webhooks/retry.ts, apps/api/src/pages/api/webhooks/[id]/index.ts, apps/api/src/pages/api/webhooks/[id]/test.ts, apps/web/src/pages/integrations/webhooks.tsx. Production behavior for “Re-enable a webhook after repeated failures” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-webhook-create",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook reenable endpoint",
    "Webhook endpoint management",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Dosya auto-disables a webhook after 15 consecutive failed delivery attempts. Prove the receiver first: the test route can call a disabled endpoint without reopening normal event traffic.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-reenable-endpoint-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-reenable-endpoint-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-reenable-endpoint-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-reenable-endpoint-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-reenable-endpoint-help-workflow-2026-10-14.webp" alt="Four panels show repairing an auto-disabled receiver, sending a test while it remains disabled, confirming Success, and choosing Re-enable for future events." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show repairing an auto-disabled receiver, sending a test while it remains disabled, confirming Success, and choosing Re-enable for future events. <a class="workflow-map-full" href="/screenshots/webhook-reenable-endpoint-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-reenable-endpoint-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-reenable-endpoint-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Integrations → Webhooks** in the affected workspace and find the **Disabled** card with **Auto-disabled after repeated failures**. Note the reported failure count and disable time.
2. Repair DNS, TLS, routing, signature verification, durable queueing, and the response path. The URL must remain public HTTPS, and the receiver must answer with 2xx within ten seconds.
3. Select **Send test event** while the endpoint is still disabled. Dosya creates a signed `file.uploaded` sample and reports **Test event sent — Check the deliveries log below for the result.**
4. Open **Deliveries** and wait for that new row to show **Success**. The toast proves creation only; **Pending**, **Failed**, `Error`, or a non-2xx response means the receiver is not ready.
5. Select **Re-enable**. The server sets the endpoint active, clears `consecutive_failures`, removes `disabled_at`, and reports **Webhook re-enabled**.
6. Trigger one controlled subscribed event and verify another **Success**. Review older **Failed** rows separately because activation does not resurrect or replay them.

The failure threshold counts attempts across the endpoint, so several broken events can reach 15 before one event exhausts its own six attempts. A successful test clears the active failure incident but does not itself set the disabled endpoint active.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Re-enable a webhook after repeated failures”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Re-enable a webhook after repeated failures”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The receiver proves a successful signed request before future traffic resumes. The endpoint returns to **Active** with cleared failure state, and only explicitly redelivered historical events run again.

**Re-enable failed** leaves the endpoint disabled. Reload the card, confirm the role still has `manage_settings`, and retry without repeatedly sending tests.

**The endpoint disables again.** Inspect the most recent response status or transport error and stop re-enabling until the underlying receiver failure is corrected.

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Inspect deliveries](/developers/webhook-deliveries)
