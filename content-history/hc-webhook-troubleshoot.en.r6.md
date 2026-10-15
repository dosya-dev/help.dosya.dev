---
{
  "articleId": "hc-webhook-troubleshoot",
  "locale": "en",
  "revision": 6,
  "title": "Troubleshoot failed Dosya webhook deliveries",
  "summary": "Diagnose webhook reachability, signatures, timeouts, HTTP responses, retries, auto-disablement, duplicates, redelivery, and secret rotation.",
  "category": "troubleshooting",
  "articleSlug": "webhooks",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14 against apps/web/src/pages/integrations/webhooks.tsx; apps/api/src/pages/api/webhooks/[id]/test.ts; apps/api/src/pages/api/webhooks/[id]/deliveries/index.ts; apps/api/src/pages/api/webhooks/[id]/deliveries/[did]/redeliver.ts; apps/api/src/lib/webhooks/deliver.ts; apps/api/src/lib/webhooks/retry.ts; apps/api/src/lib/webhooks/sign.ts; apps/api/src/lib/ssrf-guard.ts. No external receiver was contacted. Local repository evidence only; no production request was made.",
  "related": [
    "hc-webhook-create",
    "hc-webhook-signature",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "Dosya webhook failed",
    "X-Dosya-Signature mismatch",
    "webhook timeout retry",
    "webhook auto-disabled"
  ]
}
---
Use the endpoint's **Deliveries** table and the receiver log for the same delivery. The table identifies event, creation time, status, response, attempts and next retry; the receiver should log the nonsecret event and delivery IDs. Never diagnose a signature failure by turning verification off on a production endpoint.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhooks-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhooks-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhooks-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhooks-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhooks-workflow-map-2026-10-14.webp" alt="Webhook troubleshooting path: inspect the delivery row, match receiver logs by delivery ID, verify the raw-body HMAC, fix the response, then redeliver once." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Preserve one failed delivery while repairing the receiver; redeliver only after it can authenticate and durably accept the event. <a class="workflow-map-full" href="/screenshots/webhooks-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhooks-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhooks-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Integrations → Webhooks** in the workspace that owns the endpoint.
2. Confirm the card is **Active** and includes the expected event: `file.uploaded`, `file.deleted`, or `share.accessed`.
3. Expand **Deliveries**, open the failed row and record its event type, delivery/event identifiers, response status, attempts, next retry, error and sanitized response snippet.
4. Compare the row's attempt time with your receiver and edge/proxy logs. No incoming request points to URL/DNS/SSRF validation, connectivity or an upstream proxy; an incoming request with rejection points to receiver verification or processing.

Webhook administration requires workspace membership plus **manage_settings**. Built-in owners and administrators qualify. A missing Webhooks control or 403 **You don't have permission to manage webhooks** must be fixed through the workspace role; rotating a key does not widen that member permission.

## Match the failure to the receiver boundary

| Symptom | Recovery |
| --- | --- |
| URL creation/edit returns **Endpoint URL not allowed: …** | Use a public HTTPS receiver. Localhost, private-network and disallowed DNS/address targets are rejected at registration and delivery. |
| Receiver gets no POST | Verify the saved URL, public DNS and TLS, proxy route, firewall and whether the endpoint is Active. Check for a recorded URL-validation error in the delivery. |
| Receiver returns 3xx | Configure the final stable HTTPS URL. Dosya follows at most one allowed redirect; a second redirect is recorded as failure. |
| Delivery times out | Acknowledge after authentication and durable queueing. The receiver has 10 seconds; perform long work asynchronously. |
| Response is 4xx/5xx | Read receiver logs for `X-Dosya-Delivery-Id`; correct that route and return any 2xx only after acceptance. Every non-2xx is a failed attempt. |
| Signature mismatch | Verify the untouched request bytes with the endpoint's current `whsec_…` secret. Do not parse/reformat JSON before computing HMAC. |
| Endpoint says **Auto-disabled after repeated failures** | Fix and test the receiver, then choose **Re-enable**. Re-enabling clears the consecutive-failure counter but does not repair old failed work. |
| Event processed twice | Deduplicate on the envelope event `id`. Retries keep that event identity; a manual redelivery creates a new delivery row for the same event/payload. |

Dosya signs `timestamp + "." + raw_body` with HMAC-SHA256. The header is `X-Dosya-Signature: t=TIMESTAMP,v1=LOWERCASE_HEX_HMAC`. Compare the digest in constant time and reject timestamps more than 300 seconds from your receiver clock. Also record `X-Dosya-Event-Id`, `X-Dosya-Event-Type`, and `X-Dosya-Delivery-Id`; none of those headers is a replacement for signature verification.

If **Roll secret** was used, the old secret stopped working immediately. Update the receiver with the newly revealed value; there is no overlap period. A lost reveal requires another rotation. Keep signatures and secrets out of request logs.

## Understand retry timing

A delivery has six total attempts: the first runs immediately, followed after failures by 30 seconds, 2 minutes, 10 minutes, 1 hour and 6 hours. Scheduling/network work can add delay. After the sixth failed attempt the delivery stays failed.

Fifteen consecutive failed attempts across events auto-disable the endpoint. Any successful attempt resets that consecutive run. Re-enable only after a controlled test can succeed, or the endpoint will begin failing again.

The receiver response body retained in Dosya is limited to 500 characters. Return a short neutral acknowledgement; credentials, stack traces and private content should not be copied into that response.

## Send a controlled test

Select **Send test event**. This creates a synthetic `file.uploaded` event whose data includes `test: true`, file ID `test_file`, name `test.txt`, and size 12. It is sent even if the endpoint subscribes only to another event, so the receiver should recognize the test flag rather than treating it as production content.

The toast **Test event sent** confirms only that the test was queued. Refresh **Deliveries** and wait for **success**, then verify the receiver stored exactly one authenticated event. Test and manual-redelivery routes each allow 20 calls per user per 300 seconds; a 429 response supplies a `Retry-After` to honor.

After the synthetic test, trigger one harmless event that the endpoint actually subscribes to. Confirm the event's workspace and payload metadata, then check that downstream work happened once.

## Redeliver safely

Use **Redeliver** only after checking whether the original request already changed downstream state. A timeout or lost response can leave the receiver successful while Dosya recorded failure. Search by event ID first, make the handler idempotent, and then queue one redelivery. The UI message **Redelivery queued — A new delivery attempt has been scheduled.** is not the final delivery result; inspect the new row.

Deleting the endpoint permanently removes its delivery history and cannot recall payloads already received. Preserve nonsecret evidence before deletion. Secret rotation is also immediate and irreversible for the old secret.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya Zapier setup page shown to distinguish Zapier-managed automation from a custom webhook endpoint and its Deliveries log." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>For a custom HTTPS receiver, use Integrations → Webhooks and its delivery records; the Zapier invite page shown here has a separate connection and history workflow. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A fresh test delivery reaches the intended HTTPS endpoint, passes raw-body signature verification once, returns a successful response before the timeout, and does not create a duplicate side effect.

## Escalate with correlated evidence

Provide the endpoint ID, event and delivery IDs, event type, UTC/local attempt time, response status, attempt count, sanitized snippet/error, receiver framework, and whether the request reached your edge and application. Do not include the signing secret, full signature, authorization headers, private payload fields or credentials.

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Verify signatures](/developers/webhook-signatures)
- [Inspect deliveries](/developers/webhook-deliveries)
