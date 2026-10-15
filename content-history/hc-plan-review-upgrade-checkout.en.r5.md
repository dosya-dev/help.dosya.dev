---
{
  "articleId": "hc-plan-review-upgrade-checkout",
  "locale": "en",
  "revision": 5,
  "title": "Review a storage upgrade before checkout",
  "summary": "Review the selected plan, interval, add-on quantities, promotion and live Stripe total before authorizing and paying for a storage upgrade safely.",
  "category": "account",
  "articleSlug": "plan-review-upgrade-checkout",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/components/billing/plan-chooser.tsx, apps/api/src/pages/api/billing/catalog.ts, apps/api/src/pages/api/billing/preview.ts, apps/api/src/pages/api/billing/checkout.ts, and apps/api/src/pages/api/billing/subscription.ts on 2026-10-14. Production checkout was not exercised.",
  "related": [
    "hc-plan-upgrade-storage",
    "hc-checkout-verify"
  ],
  "keywords": [
    "plan review upgrade checkout",
    "Plan and storage change details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Review the cart before leaving Dosya for Stripe, especially when plan storage and the 100 GB add-on appear beside one another.


<figure class="help-screenshot"><a href="/screenshots/plan-review-upgrade-checkout-help-workflow-2026-10-14.webp"><img src="/screenshots/plan-review-upgrade-checkout-help-workflow-2026-10-14.webp" alt="Upgrade cart showing selected plan, interval, 100 GB add-on quantity, promotion result, and live Stripe total." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Verify each cart quantity and the proration or checkout amount before leaving Dosya to authorize the storage purchase. <a href="/screenshots/plan-review-upgrade-checkout-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open Billing and select **Change plan** for a base-tier replacement or **Add storage** to keep the current plan cards hidden.
2. Confirm the selected plan, monthly/yearly interval, and every add-on quantity. This walkthrough uses the seeded `+100 GB` choice, which permits up to 50 units; the live catalog can also offer larger storage choices.
3. Apply a promotion only after checking its amount/percentage, duration, interval restriction, and availability. The server validates it again.
4. Compare the live checkout amount and resulting capacity with current usage. For an existing subscription, review the proration preview rather than expecting a new checkout payment.
5. Continue once. Keep the Stripe tab open through authentication and the redirect to Dosya.

The catalog loaded by the chooser is authoritative. Current fallback plan capacities range from 100 GB Starter to 2 TB Business, but active prices and availability can be edited server-side.


<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Storage breakdown used to compare current capacity with the total expected from the reviewed checkout." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The planned base tier and add-on quantities should reconcile with this ledger after Stripe completes and Dosya synchronizes. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The authorized purchase contains the intended plan, interval, and storage quantity, and the browser returns to a Dosya success state without a second checkout.

A server refusal naming the old and new plan is the downgrade guard, not an upgrade failure. For invalid promotions, remove the code or choose an eligible billing interval before resubmitting.

## Related guides

- [Estimate required storage](/account/plan-estimate-storage-upgrade)
- [Verify the completed change](/account/verify-plan-change)
