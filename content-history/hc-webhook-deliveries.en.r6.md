---
{
  "articleId": "hc-webhook-deliveries",
  "locale": "en",
  "revision": 6,
  "title": "Inspect and redeliver webhook deliveries",
  "summary": "Read webhook delivery status, response details, retry timing and identifiers, then redeliver safely after correcting the receiving service.",
  "category": "developers",
  "articleSlug": "webhook-deliveries",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14. Verified delivery fields, UI labels, pagination, retry intervals, timeout, response capture, redelivery behavior, rate limits and automatic disabling in apps/web/src/pages/integrations/webhooks.tsx; apps/api/src/pages/api/webhooks/[id]/deliveries/index.ts; apps/api/src/pages/api/webhooks/[id]/deliveries/[did]/redeliver.ts; apps/api/src/lib/webhooks/deliver.ts; apps/api/src/lib/webhooks/deliver.unit.test.ts; apps/api/src/lib/webhooks/retry.ts; apps/api/src/lib/webhooks/retry.unit.test.ts; and apps/api/src/pages/api/internal/webhooks/retry.ts. Local repository evidence only; no production request was made.",
  "related": [
    "hc-webhook-events",
    "hc-webhook-signature",
    "hc-webhook-troubleshoot"
  ],
  "keywords": [
    "webhook delivery log",
    "webhook retry",
    "webhook redelivery",
    "webhook failed status",
    "webhook timeout"
  ]
}
---
The delivery log shows what Dosya attempted, when the next retry is due, and what the receiver returned. Use it to separate an event-generation problem from a network, signature, or application failure. Correct the receiver before manually redelivering an event.

## Steps

Open [Integrations → Webhooks](https://app.dosya.dev/integrations/webhooks), activate the intended workspace, find the endpoint, and select **Deliveries**. **Recent deliveries** displays ten rows per page with these columns:

- **Event** is the subscribed `event_type`, such as `file.uploaded`.
- **Created** is when the delivery record was added.
- **Status** is **Pending**, **Success**, or **Failed**.
- **Response** shows the HTTP status, `Error` for a recorded transport failure, or `-` when no result has been stored yet.
- **Attempts** counts completed requests, including the first one.
- **Next retry** is populated only while a failed delivery remains pending.

Hover the **Response** cell to read the recorded error or response snippet. Dosya keeps at most the first 500 response characters, so return a small neutral body such as `ok`; do not echo tokens, personal data, stack traces, or request payloads in the acknowledgement.

Each outbound request carries both `X-Dosya-Event-Id` and `X-Dosya-Delivery-Id`. Automated attempts for a retained delivery use the same identifiers. Manual **Redeliver** creates a new delivery ID while preserving the original event ID and JSON payload. Deduplicate business work by event ID so either path remains safe.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-deliveries-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-deliveries-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-deliveries-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-deliveries-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-deliveries-workflow-map-2026-10-14.webp" alt="Troubleshooting map from a Dosya webhook delivery row through receiver correction, redelivery, and duplicate-safe verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Start with the event and delivery IDs, repair the recorded failure, then prove the same event cannot produce a second business action. <a class="workflow-map-full" href="/screenshots/webhook-deliveries-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-deliveries-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-deliveries-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Understand automatic retries

Any HTTP status from 200 through 299 is a success. A non-2xx response, network error, rejected endpoint URL, or receiver that does not finish within **10 seconds** counts as a failed attempt. Dosya can follow one allowed HTTPS redirect; another redirect remains a non-2xx failure.

There are **six attempts in total**. After the immediate first attempt fails, later attempts are scheduled after **30 seconds, 2 minutes, 10 minutes, 1 hour, and 6 hours**. Queue and network time can make the observed delay longer. After attempt six fails, the delivery becomes **Failed** and has no next retry.

An endpoint reaches **Disabled** after 15 consecutive failed delivery attempts across its events. One successful attempt resets that consecutive-failure incident. When the card says **Auto-disabled after repeated failures**, repair the receiver first and then choose **Re-enable**; this clears the counter but does not retroactively deliver missed product events.

## Diagnose a failed attempt

1. Copy the event ID, delivery ID, event type, HTTP response, and recorded time into the incident record. Exclude the signature and signing secret.
2. Match the delivery ID to the receiver's access log. No request normally points to DNS, TLS, public-address validation, firewall, or timeout trouble.
3. For a 4xx response, inspect signature parsing and the receiver's route or authentication middleware. For a 5xx response, correct the application failure before retrying.
4. Confirm the handler reads the untouched body and validates `X-Dosya-Signature` before parsing JSON.
5. Replay the captured payload only in a controlled test environment, using a deliberately invalid signature as a negative test. Never bypass verification in production to make the row turn green.
6. Make the receiver persist its deduplication record and queued job before returning 2xx.

If **Deliveries** cannot be opened, webhook management requires membership in that workspace and the `manage_settings` permission. The REST API additionally requires a full-access credential; otherwise it returns `API key scope 'full' required`.

## Redeliver after the fix

Select **Redeliver** on the affected row. The toast **Redelivery queued** means a new delivery record was created; it does not yet prove the receiver accepted it. Return to page 1, refresh **Recent deliveries**, and look for the new row. A success should show a 2xx response and one attempt.

The REST sequence is:

```bash
curl --fail-with-body --silent --show-error \
  "https://api.dosya.dev/api/webhooks/$DOSYA_WEBHOOK_ID/deliveries?page=1&per_page=25" \
  -H "Authorization: Bearer $DOSYA_API_KEY"

curl --fail-with-body --silent --show-error --request POST \
  "https://api.dosya.dev/api/webhooks/$DOSYA_WEBHOOK_ID/deliveries/$DOSYA_DELIVERY_ID/redeliver" \
  -H "Authorization: Bearer $DOSYA_API_KEY"
```

The list endpoint accepts `page` and clamps `per_page` to **10–100**, defaulting to 25. A missing endpoint returns `Webhook not found`; a delivery that does not belong to that endpoint returns `Delivery not found`. Manual redelivery permits **20 calls per user per 300 seconds** and can return 429 with `Retry-After` when exceeded.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya Zapier setup screen, which does not contain the delivery history for custom webhook endpoints." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Custom webhook delivery status is under **Integrations → Webhooks**, rather than the separate Zapier setup page. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The replacement delivery reaches **Success**, the receiver log matches its delivery and event IDs, and downstream state changes once. Keep the original failed row as incident evidence; deleting the webhook permanently removes the endpoint and its entire delivery history.

## Related guides

- [Choose subscribed event types](/developers/webhook-events)
- [Verify signatures before processing](/developers/webhook-signatures)
- [Troubleshoot webhook delivery failures](/troubleshooting/webhooks)
