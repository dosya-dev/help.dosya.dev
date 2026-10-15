---
{
  "articleId": "hc-billing-troubleshoot",
  "locale": "en",
  "revision": 6,
  "title": "Troubleshoot a failed payment or unexpected bill",
  "summary": "Reconcile the subscription, storage ledger, next invoice and payment state before retrying checkout or reporting an unexpected private charge.",
  "category": "troubleshooting",
  "articleSlug": "billing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/billing.tsx, apps/web/src/api/billing.ts, apps/api/src/pages/api/billing/status.ts, apps/api/src/pages/api/billing/portal.ts, apps/api/src/pages/api/billing/checkout.ts, apps/api/src/pages/api/billing/sync.ts, apps/api/src/pages/api/billing/receipt.ts, apps/api/src/lib/billing/cart.ts, apps/api/src/lib/billing/sync-items.ts. Production behavior for “Troubleshoot a failed payment or unexpected bill” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-billing-invoices",
    "hc-plan-upgrade-storage",
    "hc-plan-cancel-downgrade",
    "hc-contact-support"
  ],
  "keywords": [
    "payment failed",
    "unexpected invoice",
    "billing error",
    "duplicate charge",
    "checkout pending",
    "subscription problem",
    "cloud storage"
  ]
}
---
Billing separates the subscription state, storage entitlement, upcoming invoice, and completed invoices. Reconcile those receipts before retrying a checkout or reporting a charge.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/billing-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/billing-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/billing-workflow-map-2026-10-14.webp" alt="Four panels show recording a Billing load state, reconciling Storage ledger, comparing Next invoice with Invoices, and escalating with safe references." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Identify the affected entitlement or invoice from Billing receipts before updating payment details or contacting private support. <a class="workflow-map-full" href="/screenshots/billing-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Billing**. If the page shows **Failed to load billing information.**, reload once and record the time rather than inferring that the subscription disappeared.
2. Read **Subscription**, its status, interval, cancellation date, and **Total limit**. **Over the limit** means uploads are paused across every workspace; it does not mean files were deleted.
3. Reconcile **Storage ledger** lines for the base plan, subscription add-ons or custom storage, active external-license packages, and **Referral bonus**. A line can lag the latest change by a few seconds.
4. Compare **Next invoice** with the **Invoices** list. Invoice history includes at most 12 non-draft, non-void invoices; missing upcoming data alone does not prove there is no charge.
5. For card attention, select **Manage payment method** and wait through **Opening…**. A past-due subscription must be repaired there; starting another checkout is refused to avoid a second subscription attempt.
6. If records still disagree, contact private support with invoice ID, amount, date, displayed status, expected change, and card brand/last four only. Do not provide a full card number or private portal URL.

<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Dosya storage breakdown with separate plan and additional storage sources." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Match each entitlement source to the Billing storage ledger before treating the total as an unexpected charge. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The problem is narrowed to a page-load failure, entitlement lag, upcoming invoice, completed invoice, unpaid subscription, or provider-portal error, with a safe receipt for resolution.

A current subscription checkout returns **You already have an active subscription. Use 'Update subscription' to change it.** A past-due one returns **Your subscription has an unpaid invoice. Fix the payment via 'Manage billing' instead of starting a new subscription.**

The older `?success` checkout return performs a sync and another check after about 2.5 seconds. That timing is not a guarantee that every provider update settles within 2.5 seconds.

## Related guides

- [Find invoices and payment details](/account/invoices-and-payment)
- [Upgrade or add storage](/account/upgrade-storage)
- [Cancel or downgrade](/account/cancel-or-downgrade)
- [Contact private support](/troubleshooting/contact-support)
