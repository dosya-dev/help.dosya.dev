---
{
  "articleId": "hc-webhook-send-test",
  "locale": "en",
  "revision": 6,
  "title": "Send a test webhook",
  "summary": "Send Dosya’s signed file.uploaded sample, inspect the receiver and Recent deliveries, and distinguish a queued test from a successful response.",
  "category": "developers",
  "articleSlug": "webhook-send-test",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/pages/api/webhooks/[id]/test.ts, apps/web/src/pages/integrations/webhooks.tsx, apps/api/src/lib/webhooks/deliver.ts, apps/api/src/lib/webhooks/retry.ts. Production behavior for “Send a test webhook” was not exercised; this revision is awaiting publication.",
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
A test is a real signed webhook delivery, but the immediate toast confirms creation rather than receiver success. Use the resulting row and receiver log as the delivery receipt.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-send-test-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-send-test-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-send-test-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-send-test-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-send-test-workflow-map-2026-10-14.webp" alt="Four panels show selecting Send test event to create the fixed signed sample, identifying the scheduling receipt, opening Recent deliveries, and confirming the receiver result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show selecting Send test event to create the fixed signed sample, identifying the scheduling receipt, opening Recent deliveries, and confirming the receiver result. <a class="workflow-map-full" href="/screenshots/webhook-send-test-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-send-test-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-send-test-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Integrations → Webhooks**, select the workspace, and locate the intended endpoint by its full URL. The action requires a role with `manage_settings`; the test route is also available while an endpoint is disabled.
2. Prepare the receiver to capture safe identifiers and validate the current signing secret. Do not log the full request body or signature while testing.
3. Select **Send test event**. Dosya creates a `file.uploaded` event with `file_id: "test_file"`, `name: "test.txt"`, `size: 12`, `folder_id: null`, `version: 1`, `is_new_version: false`, and `test: true`.
4. Read **Test event sent — Check the deliveries log below for the result.** This means a `whd_…` row was created and its first attempt scheduled; it does not claim the endpoint returned 2xx.
5. Open **Recent deliveries** and inspect the new `file.uploaded` row. Match its `X-Dosya-Event-Id` and `X-Dosya-Delivery-Id` at the receiver, then require **Success**, a 2xx response, and the expected attempt count.
6. If the row is **Pending**, use **Next retry** rather than sending repeated tests. If it is **Failed**, fix the stored response or transport error, then create one new controlled test and verify it end to end.

Each test can follow the normal six-attempt retry schedule and contributes to endpoint health failures. Dosya limits test creation to 20 requests per user in five minutes.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Send a test webhook”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Send a test webhook”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

One signed sample is visible at the receiver and reaches **Success** in **Recent deliveries**. Its fixed `test_file` payload is clearly distinguishable from a real upload, and no secret enters logs.

**Test failed** means Dosya could not create the test request. Read the returned error, confirm permission and rate-limit state, and avoid treating the absence of a row as receiver failure.

**The row shows Error.** Inspect DNS, TLS, public-HTTPS validation, redirect behavior, or timeout at the receiver; a transport error has no HTTP status.

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Inspect deliveries](/developers/webhook-deliveries)
