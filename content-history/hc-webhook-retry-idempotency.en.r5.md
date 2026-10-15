---
{
  "articleId": "hc-webhook-retry-idempotency",
  "locale": "en",
  "revision": 5,
  "title": "Retry webhook deliveries safely",
  "summary": "Build transactional event-ID idempotency around Dosya’s six-attempt retry schedule so repeated requests change downstream state only once safely.",
  "category": "developers",
  "articleSlug": "webhook-retry-idempotency",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/webhooks/deliver.ts, apps/api/src/lib/webhooks/retry.ts, apps/api/src/pages/api/webhooks/[id]/deliveries/[did]/redeliver.ts, apps/api/src/lib/webhooks/health.ts. Production behavior for “Retry webhook deliveries safely” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-rest-api-connect",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook retry idempotency",
    "Developer operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Retries are normal delivery behavior, so the receiver must make one event safe to execute more than once. Dosya’s stable business identifier is the event ID; a delivery ID identifies an attempt record and can change during manual replay.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-retry-idempotency-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-retry-idempotency-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-retry-idempotency-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-retry-idempotency-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-retry-idempotency-help-workflow-2026-10-14.webp" alt="Four panels show transactionally claiming the event ID, applying one downstream effect, acknowledging after commit, and surviving Dosya’s six-attempt retry schedule." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show transactionally claiming the event ID, applying one downstream effect, acknowledging after commit, and surviving Dosya’s six-attempt retry schedule. <a class="workflow-map-full" href="/screenshots/webhook-retry-idempotency-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-retry-idempotency-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-retry-idempotency-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Verify `X-Dosya-Signature` against the raw body and require matching `X-Dosya-Event-Id` and body `id` before entering the business transaction.
2. Insert the event ID into a uniquely constrained idempotency table inside the same transaction that applies the downstream mutation. Store processing status and a safe result reference for recovery.
3. On a unique-key conflict, read the committed result and return 2xx without repeating the mutation. Do not use `X-Dosya-Delivery-Id` as the sole key because **Redeliver** assigns a new one.
4. Commit durable work before acknowledging. A receiver crash before commit causes a safe retry; committing a side effect and its marker separately creates a window where the next attempt can duplicate state.
5. Exercise the failure path once. Dosya sends an initial attempt and, while failure continues, schedules five more after 30 seconds, 2 minutes, 10 minutes, 1 hour, and 6 hours; the sweep may run later than each due time.
6. Let the retry succeed and inspect **Deliveries**. Confirm one business result, one shared event ID, the attempt count, and **Success** with no next retry.

Any 2xx ends retry. A non-2xx response, network error, disallowed redirect, or ten-second timeout increments the endpoint’s consecutive-failure counter; 15 such failed attempts auto-disable the endpoint.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Retry webhook deliveries safely”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Retry webhook deliveries safely”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Repeated requests for the same event either create the single intended downstream result or return its committed result. Delivery attempts remain observable without becoming additional business actions.

**The effect happened twice.** Move the idempotency claim and mutation into one atomic boundary, then repair existing duplicates before replaying the event.

**A poison event retries repeatedly.** Quarantine its verified payload durably and choose a deliberate acknowledgement policy; returning failure consumes the six-attempt schedule and contributes to auto-disable.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [Inspect webhook deliveries](/developers/webhook-deliveries)
