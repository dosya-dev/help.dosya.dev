---
{
  "articleId": "hc-webhook-deduplicate-deliveries",
  "locale": "en",
  "revision": 5,
  "title": "Deduplicate webhook deliveries",
  "summary": "Use the Dosya event ID as a transactional idempotency key so automatic retries and manual redelivery cannot repeat downstream side effects safely.",
  "category": "developers",
  "articleSlug": "webhook-deduplicate-deliveries",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/webhooks/deliver.ts, apps/api/src/pages/api/webhooks/[id]/deliveries/[did]/redeliver.ts, apps/api/src/lib/webhooks/emit.ts, apps/web/src/pages/integrations/webhooks.tsx. Production behavior for “Deduplicate webhook deliveries” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-webhook-signature",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook deduplicate deliveries",
    "Webhook consumer reliability",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Use the event ID for business idempotency. Automatic retries reuse both IDs, but manual redelivery deliberately creates a new delivery ID while retaining the same event ID and exact payload.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-deduplicate-deliveries-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-deduplicate-deliveries-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-deduplicate-deliveries-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-deduplicate-deliveries-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-deduplicate-deliveries-help-workflow-2026-10-14.webp" alt="Four panels show reading the event and delivery IDs, claiming the event ID transactionally, skipping a repeated event, and tracing each delivery attempt separately." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show reading the event and delivery IDs, claiming the event ID transactionally, skipping a repeated event, and tracing each delivery attempt separately. <a class="workflow-map-full" href="/screenshots/webhook-deduplicate-deliveries-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-deduplicate-deliveries-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-deduplicate-deliveries-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Verify `X-Dosya-Signature` over the raw body, then read `X-Dosya-Event-Id` and confirm it matches the body’s top-level `id`. Treat an absent or conflicting value as malformed input.
2. Begin a database transaction and insert the event ID into a table with a uniqueness constraint. Store the event type, first delivery ID, receipt time, and processing state without exposing the payload in ordinary logs.
3. If the insert conflicts, return a 2xx after confirming the existing record is committed. Do not reapply the downstream change merely because `X-Dosya-Delivery-Id` differs.
4. If the insert succeeds, apply the state change and commit the idempotency record in the same transaction or atomic workflow. A crash between the side effect and its marker is the duplicate window this design closes.
5. Retain each delivery ID in an attempt log for diagnostics. Automatic retry keeps the original delivery ID; **Redeliver** creates a fresh `whd_…` value but copies the original `evt_…` event ID.
6. Force one receiver failure, allow a retry, and then use **Redeliver** on that row. Verify that all requests are traceable while the business table changes exactly once for the shared event ID.

Dosya event IDs are generated once per emitted event. One event can fan out to multiple subscribed endpoints, so event-based deduplication also protects a receiver accidentally registered more than once.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Deduplicate webhook deliveries”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Deduplicate webhook deliveries”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The first verified event commits one downstream effect. Automatic attempts and manually queued redelivery receive 2xx acknowledgements without duplicating that effect, while delivery IDs remain available for operational tracing.

**Duplicates still appear.** Check that the unique event-ID claim and the business mutation share one transaction; a separate “processed later” write can fail after the mutation.

**A manual replay was ignored unexpectedly.** That is correct for an already completed event. Create a new business command if an operator truly intends a second effect.

## Related guides

- [Verify webhook signatures](/developers/webhook-signatures)
- [Inspect deliveries](/developers/webhook-deliveries)
