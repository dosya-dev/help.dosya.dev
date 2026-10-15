---
{
  "articleId": "hc-webhook-redeliver-event",
  "locale": "en",
  "revision": 5,
  "title": "Redeliver a failed webhook event",
  "summary": "Queue a new delivery for one stored webhook event, distinguish its new delivery ID from the retained event ID, and verify the receiver result.",
  "category": "developers",
  "articleSlug": "webhook-redeliver-event",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/pages/api/webhooks/[id]/deliveries/[did]/redeliver.ts, apps/web/src/pages/integrations/webhooks.tsx, apps/api/src/lib/webhooks/deliver.ts, apps/api/src/lib/webhooks/retry.ts. Production behavior for “Redeliver a failed webhook event” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-webhook-create",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook redeliver event",
    "Webhook endpoint management",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Manual redelivery creates a new attempt record for the stored event. It copies the exact payload and event ID, assigns a new delivery ID, and starts another normal retry cycle.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-redeliver-event-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-redeliver-event-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-redeliver-event-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-redeliver-event-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-redeliver-event-help-workflow-2026-10-14.webp" alt="Four panels show choosing one failed delivery, queueing Redeliver, distinguishing the retained event ID from the new delivery ID, and verifying the new row." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show choosing one failed delivery, queueing Redeliver, distinguishing the retained event ID from the new delivery ID, and verifying the new row. <a class="workflow-map-full" href="/screenshots/webhook-redeliver-event-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-redeliver-event-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-redeliver-event-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Repair the receiver and confirm event-ID idempotency before replaying anything. A manual replay can repeat a downstream effect if the consumer deduplicates only by delivery ID.
2. Open **Integrations → Webhooks**, choose the endpoint, and expand **Deliveries**. Identify the required **Failed** row by event type, created time, response or error, and attempt count.
3. Check whether the event already changed downstream state despite its failed acknowledgement. If it did, preserve that state and let the idempotency record absorb the replay.
4. Select **Redeliver** on the chosen row. Although the UI offers this action for every status, do not replay a **Success** row unless a deliberate second delivery is safe.
5. Treat **Redelivery queued — A new delivery attempt has been scheduled** as a scheduling receipt. The route creates a new `whd_…` delivery with zero attempts while retaining the original `evt_…` ID and body.
6. Refresh page 1 of **Recent deliveries** and inspect the new row until it shows **Success** or a scheduled retry. Correlate its new delivery ID at the receiver and confirm the event ID caused no duplicate effect.

Each manual redelivery can receive six attempts under the standard backoff. Dosya limits this action to 20 requests per user in five minutes to prevent the endpoint from becoming an outbound flood source.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Redeliver a failed webhook event”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Redeliver a failed webhook event”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A new delivery record carries the original event and reaches the repaired receiver. The delivery ID changes for tracing, the event ID remains stable for idempotency, and the downstream result exists once.

**Redeliver failed** means no reliable replay receipt was returned. Reload the delivery list before clicking again so a delayed request does not queue an unnecessary duplicate.

**The new row remains Pending.** Read **Next retry**; a non-2xx response or ten-second timeout follows the ordinary schedule rather than becoming immediate success.

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Inspect deliveries](/developers/webhook-deliveries)
