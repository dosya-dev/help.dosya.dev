---
{
  "articleId": "hc-webhook-acknowledge-promptly",
  "locale": "en",
  "revision": 5,
  "title": "Acknowledge a webhook delivery promptly",
  "summary": "Verify a Dosya webhook signature over the raw body, store the event durably, and return a 2xx response before the ten-second delivery timeout.",
  "category": "developers",
  "articleSlug": "webhook-acknowledge-promptly",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/webhooks/sign.ts, apps/api/src/lib/webhooks/deliver.ts, apps/api/src/lib/webhooks/deliver.unit.test.ts, apps/api/src/lib/webhooks/retry.ts, apps/cron/src/index.ts, apps/help/src/content/articles/webhook-signature.md, apps/help/src/content/articles/webhook-create.md, apps/web/src/pages/integrations/webhooks.tsx. Production behavior for “Acknowledge a webhook delivery promptly” was not exercised; this revision is awaiting publication.",
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
Dosya considers any HTTP 2xx response successful. The receiver has ten seconds to verify and acknowledge the request, so durable intake belongs on the request path and slow business work belongs behind it.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-acknowledge-promptly-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-acknowledge-promptly-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-acknowledge-promptly-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-acknowledge-promptly-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-acknowledge-promptly-help-workflow-2026-10-14.webp" alt="Four panels show checking the 300-second timestamp and raw-body signature, committing durable work, returning 2xx within ten seconds, and confirming Success." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show checking the 300-second timestamp and raw-body signature, committing durable work, returning 2xx within ten seconds, and confirming Success. <a class="workflow-map-full" href="/screenshots/webhook-acknowledge-promptly-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-acknowledge-promptly-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-acknowledge-promptly-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Read the untouched request bytes and the `X-Dosya-Signature` header before parsing JSON. Split its `t=<unix-seconds>,v1=<hex>` values and compute HMAC-SHA256 with the endpoint signing secret over `${t}.${rawBody}`.
2. Parse `t` as a safe integer and reject it when it is more than 300 seconds away from the receiver clock. Then compare the computed digest with `v1` using a constant-time operation. A stale, malformed, or mismatched signature must not enqueue the payload.
3. Capture `X-Dosya-Event-Id`, `X-Dosya-Delivery-Id`, and `X-Dosya-Event-Type`, then commit the verified raw event and its event-ID idempotency record to durable storage.
4. Return an empty or sanitized 2xx response as soon as that transaction commits. Finish downstream API calls, media work, notifications, and other slow effects in a worker after acknowledgement.
5. Keep the complete request under ten seconds. A timeout, network error, 3xx that remains after Dosya’s single allowed redirect, or any non-2xx status is recorded as a failed attempt.
6. In **Integrations → Webhooks**, open **Deliveries** and verify **Success**, the response status, and one attempt. Dosya stores up to 500 response characters, so never echo a secret or private payload in the acknowledgement body.

A failed first attempt is due again after 30 seconds, followed by 2 minutes, 10 minutes, 1 hour, and 6 hours. The retry sweep runs every ten minutes, so an attempt may occur after its earliest due time.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Acknowledge a webhook delivery promptly”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Acknowledge a webhook delivery promptly”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A valid delivery is durably accepted once and receives a 2xx before the ten-second deadline. **Recent deliveries** shows **Success**, while slow processing continues independently without provoking retries.

**Valid requests time out.** Move work after the durable queue commit and inspect proxy or platform timeouts; increasing receiver work does not change Dosya’s ten-second limit.

**The signature differs.** Hash the exact bytes received, including whitespace, rather than re-serialized JSON, and verify with the current endpoint secret.

## Related guides

- [Verify webhook signatures](/developers/webhook-signatures)
- [Inspect deliveries](/developers/webhook-deliveries)
