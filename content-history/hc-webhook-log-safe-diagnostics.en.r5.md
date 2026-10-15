---
{
  "articleId": "hc-webhook-log-safe-diagnostics",
  "locale": "en",
  "revision": 5,
  "title": "Log webhook diagnostics without secrets",
  "summary": "Record webhook event, delivery, type, timing, and status fields while excluding signing material, private payload data, and receiver secrets.",
  "category": "developers",
  "articleSlug": "webhook-log-safe-diagnostics",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/webhooks/deliver.ts, apps/api/src/lib/webhooks/sign.ts, apps/web/src/pages/integrations/webhooks.tsx, apps/api/src/pages/api/share/[token].ts, apps/api/src/pages/api/share/[token]/download.ts, apps/api/src/pages/api/share/[token]/download-all.ts. Production behavior for “Log webhook diagnostics without secrets” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-webhook-signature",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook log safe diagnostics",
    "Webhook consumer reliability",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Webhook diagnostics should explain an attempt without copying its credentials or private data. This matters especially for `share.accessed`, whose current payload contains the live share token.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-log-safe-diagnostics-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-log-safe-diagnostics-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-log-safe-diagnostics-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-log-safe-diagnostics-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-log-safe-diagnostics-help-workflow-2026-10-14.webp" alt="Four panels show selecting safe webhook identifiers, redacting payload and signature material, returning a sanitized response, and tracing the delivery in Dosya." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show selecting safe webhook identifiers, redacting payload and signature material, returning a sanitized response, and tracing the delivery in Dosya. <a class="workflow-map-full" href="/screenshots/webhook-log-safe-diagnostics-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-log-safe-diagnostics-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-log-safe-diagnostics-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. After signature verification, create a structured log record containing `X-Dosya-Event-Id`, `X-Dosya-Delivery-Id`, `X-Dosya-Event-Type`, receiver time, verification outcome, and an internal correlation or queue ID.
2. Exclude the endpoint signing secret, raw `X-Dosya-Signature`, authorization material, and complete request body. Upload and deletion data contains file IDs and names; share-access data includes `share_id` and a bearer `token`.
3. When an operator needs payload context, allowlist non-secret fields by event type and redact values before logging. Do not depend on a broad JSON serializer whose future fields could enter logs automatically.
4. Return an empty or sanitized 2xx acknowledgement after durable intake. Dosya stores the first 500 characters of the receiver response, so response bodies can expose data in **Recent deliveries** even when application logs are clean.
5. On failure, log the local exception class and internal trace ID rather than the payload. Dosya separately records the HTTP status, a clipped response snippet, or the transport error when no response arrives.
6. Open **Integrations → Webhooks → Deliveries** and correlate a controlled test by event type, created time, status, attempts, and next retry. Confirm neither the receiver log nor Dosya’s response tooltip reveals a secret.

Every outgoing request also carries `Content-Type: application/json` and `User-Agent: dosya-webhooks/1`. These are useful transport facts but do not authenticate a delivery.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Log webhook diagnostics without secrets”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Log webhook diagnostics without secrets”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Operators can trace a webhook from Dosya to the receiver using event, delivery, and internal job identifiers. Logs and stored response snippets omit signing secrets, share tokens, file payloads, and other confidential content.

**Private text appears under Response.** Remove it from the receiver response body, deploy the change, and avoid copying the existing snippet into tickets or chat.

**A failure lacks an HTTP status.** Treat the stored error as a DNS, TLS, network, or timeout path and correlate it with the receiver platform trace ID.

## Related guides

- [Verify webhook signatures](/developers/webhook-signatures)
- [Inspect deliveries](/developers/webhook-deliveries)
