---
{
  "articleId": "hc-webhook-signature",
  "locale": "en",
  "revision": 4,
  "title": "Verify webhook signatures",
  "summary": "Read the raw request body, apply the documented signature algorithm and secret, reject invalid messages, and protect against replay.",
  "category": "developers",
  "articleSlug": "webhook-signatures",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-webhook-create",
    "hc-webhook-troubleshoot"
  ],
  "keywords": [
    "webhook signature",
    "verify webhook",
    "signing secret",
    "cloud storage"
  ]
}
---
Signature verification proves the request was created with the webhook secret. Implement the literal current algorithm before parsing or acting on the payload.

Signature verification must use the unmodified raw request bytes and the correct endpoint secret. Parse or transform the body only after authentication succeeds.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-signatures-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-signatures-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" alt="Four-step interface map for verify webhook signatures, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-signatures-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: verify webhook signatures

1. Store the signing secret outside source control.
2. Read the current signature header and algorithm reference.
3. Preserve the raw request bytes.
4. Compute and compare the signature in constant time.
5. Reject missing or invalid signatures before processing.
6. Apply documented timestamp or replay protections when provided.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya integration setup page showing the verified connection values and guidance used by an automation client." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Copy connection values from the current integration page and keep secrets private. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Test one valid delivery and one deliberately invalid signature in a controlled environment. Confirm invalid requests are rejected before any business action.

## Expected result

The verify webhook signatures workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Troubleshoot deliveries](/troubleshooting/webhooks)
