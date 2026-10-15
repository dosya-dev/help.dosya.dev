---
{
  "articleId": "hc-webhook-signature",
  "locale": "en",
  "revision": 6,
  "title": "Verify Dosya webhook signatures",
  "summary": "Validate the X-Dosya-Signature timestamp and HMAC against the untouched request body, reject replayed requests, and rotate exposed secrets safely.",
  "category": "developers",
  "articleSlug": "webhook-signatures",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14. Verified the header format, HMAC input, SHA-256 output, one-time secret display, raw request delivery and rotation behavior in apps/api/src/lib/webhooks/sign.ts; apps/api/src/lib/webhooks/sign.unit.test.ts; apps/api/src/lib/webhooks/deliver.ts; apps/api/src/lib/webhooks/deliver.unit.test.ts; apps/api/src/pages/api/webhooks/[id]/roll-secret.ts; apps/web/src/pages/integrations/webhooks.tsx; and src/pages/developer/api.astro. Local repository evidence only; no production request was made.",
  "related": [
    "hc-webhook-create",
    "hc-webhook-deliveries",
    "hc-webhook-rotate-secret"
  ],
  "keywords": [
    "X-Dosya-Signature",
    "verify webhook signature",
    "webhook HMAC SHA-256",
    "webhook signing secret",
    "webhook replay protection"
  ]
}
---
Verify every webhook before parsing its JSON or starting work. Dosya signs the exact request body with the endpoint's `whsec_` secret and sends the result in `X-Dosya-Signature`. A valid signature proves possession of that secret; it does not replace authorization checks your downstream job may require.

## Signature contract

The header has this exact shape:

```text
t=UNIX_SECONDS,v1=64_LOWERCASE_HEX_CHARACTERS
```

Compute `HMAC-SHA256(secret, timestamp + "." + raw_body)` and compare the 32-byte digest to `v1` using a constant-time operation. `raw_body` means the untouched HTTP entity bytes. Parsing and reserializing JSON, changing whitespace, normalizing Unicode, or converting line endings produces a different digest.

Use the `t` value for replay protection. Dosya's API reference recommends rejecting a signature more than **300 seconds** away from the receiver's current time. Keep receiver clocks synchronized and evaluate the timestamp before enqueuing the event. The five-minute test is performed by your receiver; Dosya does not know whether your application enforced it.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-signatures-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-signatures-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" alt="Verification sequence for preserving a Dosya webhook body, checking its timestamp, computing HMAC-SHA256, and only then parsing the event." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Capture bytes first, reject stale timestamps, compare fixed-length digests, and parse the JSON only after authentication succeeds. <a class="workflow-map-full" href="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-signatures-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

Configure the route to expose a `Buffer` containing the original body. Framework JSON middleware often consumes or transforms it, so apply raw-body handling to this route before a global JSON parser.

```javascript
import { createHmac, timingSafeEqual } from 'node:crypto';

export function verifyDosya(rawBody, signatureHeader, secret, nowSeconds) {
  const match = /^t=(\d+),v1=([0-9a-f]{64})$/.exec(signatureHeader ?? '');
  if (!match) return { ok: false, reason: 'malformed signature' };

  const timestamp = Number(match[1]);
  const now = nowSeconds ?? Math.floor(Date.now() / 1000);
  if (!Number.isSafeInteger(timestamp) || Math.abs(now - timestamp) > 300) {
    return { ok: false, reason: 'stale timestamp' };
  }

  const expected = createHmac('sha256', secret)
    .update(match[1] + '.')
    .update(rawBody)
    .digest();
  const received = Buffer.from(match[2], 'hex');
  const valid = received.length === expected.length && timingSafeEqual(received, expected);
  return valid ? { ok: true, timestamp } : { ok: false, reason: 'signature mismatch' };
}
```

Pass a `Buffer`, not an already parsed object, as `rawBody`. After the function returns `ok: true`, parse JSON, require the expected top-level `id`, `type`, `created`, `workspace_id`, and `data`, then write the event ID into a unique deduplication store. Return 2xx after that durable acceptance. Dosya retries non-2xx responses and timeouts, so a receiver that authenticates correctly can still see the same event again.

## Test the positive and negative paths

1. Open [Integrations → Webhooks](https://app.dosya.dev/integrations/webhooks) for a controlled endpoint and select **Send test event**.
2. Confirm the receiver accepts the signed request and records the `X-Dosya-Event-Id`, `X-Dosya-Delivery-Id`, event type, and timestamp. Do not log the signature or secret.
3. In a local test, alter one byte of the captured body while keeping the header unchanged. Verification must fail before JSON processing.
4. Test a different secret, a missing header, malformed hex, and a timestamp 301 seconds outside the allowed window. None may enqueue work.
5. Redeliver the valid event and prove the unique event-ID constraint prevents a duplicate downstream action.

The **Success** badge in Dosya means your endpoint returned 2xx. It cannot prove your receiver checked the signature. Keep a receiver-side test for valid and invalid cases as the deciding evidence.

## Diagnose signature mismatches

| Symptom | Correction |
| --- | --- |
| Every delivery fails after deployment | Ensure the route receives bytes before JSON or form middleware and uses the secret for this exact endpoint. |
| Only non-ASCII or formatted payloads fail | Remove text decoding and reserialization from the HMAC input; hash the received bytes. |
| Valid traffic is marked stale | Synchronize the receiver clock and compare Unix seconds rather than milliseconds. |
| Old captured requests still pass | Add the 300-second timestamp window and persist event IDs. |
| Failures began immediately after **Roll secret** | Install the newly revealed secret; the previous one stops validating new deliveries immediately. |

The secret appears in **Signing secret** only when the endpoint is created or rotated. Losing it requires **Roll secret**; the old value stops working without an overlap period. The rotation endpoint allows 10 calls per user per hour, and the new value is returned once. If a secret reaches source control, logs, screenshots, or chat, rotate it rather than deleting only the exposed copy.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya Zapier setup page, separate from the signing secret shown for a custom webhook endpoint." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>The custom endpoint secret is revealed from **Integrations → Webhooks**; a Zapier API key is a different credential and must not be used for HMAC verification. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A current, untouched request signed with the saved endpoint secret is accepted. Missing, malformed, stale, altered, or wrongly signed requests are rejected before they change state, and a repeated valid event is acknowledged without repeating its business effect.

## Related guides

- [Create and test the endpoint](/developers/webhook-create)
- [Inspect delivery status and retries](/developers/webhook-deliveries)
- [Rotate a signing secret](/developers/webhook-rotate-secret)
