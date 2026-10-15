---
{
  "articleId": "hc-checkout-verify",
  "locale": "en",
  "revision": 6,
  "title": "Verify a plan or storage change after checkout",
  "summary": "Verify a completed plan or storage purchase safely across the success page, receipt and Billing ledger without creating a duplicate checkout.",
  "category": "account",
  "articleSlug": "verify-plan-change",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/pages/checkout-success.tsx, apps/web/src/lib/checkout-return.ts, apps/api/src/pages/api/billing/sync.ts, apps/api/src/pages/api/billing/status.ts, and apps/api/src/pages/api/billing/receipt.ts on 2026-10-14. Production checkout was not exercised.",
  "related": [
    "hc-plan-upgrade-storage",
    "hc-billing-invoices",
    "hc-billing-troubleshoot",
    "hc-storage-usage"
  ],
  "keywords": [
    "checkout success",
    "verify upgrade",
    "storage pending",
    "billing sync",
    "purchase receipt",
    "cloud storage"
  ]
}
---
The checkout-success screen reconciles Stripe immediately and separates the purchase receipt from the account entitlement that Billing ultimately enforces.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/verify-plan-change-workflow-map-2026-10-14.webp" data-light-href="/screenshots/verify-plan-change-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/verify-plan-change-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/verify-plan-change-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/verify-plan-change-workflow-map-2026-10-14.webp" alt="Success page showing Purchase complete or Plan updated, Stripe receipt details, synchronization, and Billing verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Match the success badge, receipt, plan interval, and capacity with Billing before treating the checkout as fully applied. <a class="workflow-map-full" href="/screenshots/verify-plan-change-workflow-map-2026-10-14.webp" data-light-href="/screenshots/verify-plan-change-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/verify-plan-change-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Confirm the badge reads **Purchase complete** for checkout or **Plan updated** for an in-app subscription change.
2. Review the capacity figure, total-storage bar, plan name and monthly/yearly label.
3. Under **Order receipt · Stripe** or **Plan change · Stripe**, match invoice/next-invoice details, amount, card, email, and storage.
4. A checkout with an unpaid Stripe status shows **Payment processing**; wait until payment and storage settle.
5. Open Billing and confirm status, storage ledger, **Total limit**, and the corresponding invoice. Do not initiate another payment while reconciliation is pending.

The screen makes one immediate sync, then checks status at 2.5-second intervals for up to eight retries when the subscription has not appeared. A typed or stale success URL without a valid checkout session/recent-change marker redirects to Billing.


<figure class="help-screenshot"><a href="/screenshots/storage-quota-error-2026-10-12.webp"><img src="/screenshots/storage-quota-error-2026-10-12.webp" alt="Storage quota error used as the final recovery check after purchased capacity appears in Total limit." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Retry the blocked operation under the updated ceiling; another quota refusal can indicate a separate workspace cap. <a href="/screenshots/storage-quota-error-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Receipt data, subscription state and effective capacity agree, and any formerly quota-blocked operation can be retried under the new ceiling.

If receipt loading fails, Billing still provides invoice access. If polling gives up, retry synchronization from the page or reload Billing; preserve the Stripe invoice number for support.

## Related guides

- [Verify storage after an upgrade](/account/plan-verify-storage-upgrade)
- [Find invoices and payment details](/account/invoices-and-payment)
