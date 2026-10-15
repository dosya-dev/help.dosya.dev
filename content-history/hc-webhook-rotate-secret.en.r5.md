---
{
  "articleId": "hc-webhook-rotate-secret",
  "locale": "en",
  "revision": 5,
  "title": "Rotate a webhook signing secret",
  "summary": "Roll a webhook signing secret, copy the one-time replacement immediately, update the receiver, and verify new signatures after the old key stops.",
  "category": "developers",
  "articleSlug": "webhook-rotate-secret",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/webhooks.tsx, apps/api/src/pages/api/webhooks/[id]/roll-secret.ts, apps/api/src/lib/webhooks/deliver.ts, apps/api/src/pages/api/internal/webhooks/retry.ts. Production behavior for “Rotate a webhook signing secret” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-webhook-create",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook rotate secret",
    "Webhook endpoint management",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Webhook secret rotation is an immediate cutover. Dosya does not overlap old and new secrets: the previous value stops verifying as soon as **Roll secret** succeeds, and the replacement is shown once.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-rotate-secret-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-rotate-secret-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-rotate-secret-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-rotate-secret-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-rotate-secret-help-workflow-2026-10-14.webp" alt="Four panels show reviewing the immediate cutover warning, rolling and copying the one-time replacement, deploying the new secret, and verifying a newly signed test." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show reviewing the immediate cutover warning, rolling and copying the one-time replacement, deploying the new secret, and verifying a newly signed test. <a class="workflow-map-full" href="/screenshots/webhook-rotate-secret-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-rotate-secret-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-rotate-secret-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Prepare access to the receiver’s secret store and deployment path before changing Dosya. Pause unrelated receiver changes and choose a low-traffic window because the replacement cannot be known in advance.
2. Open **Integrations → Webhooks**, match the endpoint URL, and select **Roll secret**. Confirm your workspace role includes `manage_settings`; an API credential needs **Full access**.
3. In **Roll signing secret**, read `The old secret stops working immediately - update your receiver before rolling.` Choose **Roll secret** only when you can perform the cutover now.
4. In **Signing secret**, copy the new `whsec_…` value and store it securely. Dosya reports `Store it securely - you won't see it again.` and does not offer retrieval after the dialog closes.
5. Update and deploy the receiver, then remove the old value from its configuration. Pending retries read the endpoint’s current secret on their next attempt, so they will also arrive signed with the replacement.
6. Choose **Send test event**, open **Deliveries**, and require **Success** plus a valid new signature at the receiver. Investigate any requests that arrived during the short rotation window before resuming normal operations.

Secret rolling is limited to ten requests per user per hour. The audit trail and integration notification identify the endpoint and actor but never store either secret.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Rotate a webhook signing secret”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Rotate a webhook signing secret”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The receiver accepts deliveries signed with the one-time replacement and rejects the retired secret. New tests and later retries use the current secret, with no unsupported dual-secret period implied.

**Roll secret failed** means no confirmed replacement was returned. Keep the current receiver configuration, reload the endpoint, and retry only after checking the rate limit.

**The dialog closed before copying.** The value cannot be recovered. Roll again, copy the newly issued secret, and update the receiver promptly; the intermediate secret is already obsolete.

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Inspect deliveries](/developers/webhook-deliveries)
