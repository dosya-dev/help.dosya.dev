---
{
  "articleId": "hc-billing-reconcile-invoice-plan",
  "locale": "en",
  "revision": 5,
  "title": "Reconcile an invoice with the active plan",
  "summary": "Compare the charged subscription item, billing interval, storage ledger and prorations with the invoice that covers the same billing period.",
  "category": "account",
  "articleSlug": "billing-reconcile-invoice-plan",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/pages/billing.tsx, apps/web/src/pages/checkout-success.tsx, apps/api/src/pages/api/billing/status.ts, and apps/api/src/pages/api/billing/receipt.ts on 2026-10-14. Production Stripe records were not opened.",
  "related": [
    "hc-billing-invoices",
    "hc-billing-portal"
  ],
  "keywords": [
    "billing reconcile invoice plan",
    "Billing invoice and payment details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Reconcile an invoice against the subscription state that generated it, because the current public catalog may differ from a legacy, promotional, or prorated charge.


<figure class="help-screenshot"><a href="/screenshots/billing-reconcile-invoice-plan-help-workflow-2026-10-14.webp"><img src="/screenshots/billing-reconcile-invoice-plan-help-workflow-2026-10-14.webp" alt="Billing reconciliation path from Subscription and Storage ledger values to a matching invoice period and proration." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Compare the subscription interval and ledger entries with each invoice line, discount, tax, credit, and proration for that period. <a href="/screenshots/billing-reconcile-invoice-plan-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open Billing and record the **Subscription** price, `/mo` or `/yr` interval, plan name, renewal date, and masked card.
2. Under **Storage ledger**, record the base-plan row and every add-on, active redeemed package, and **Referral bonus**. The bold **Total limit** is the effective account ceiling.
3. Choose the invoice whose displayed period contains the charge. Download its PDF and compare line descriptions, quantity, discounts, tax, credits, and final total.
4. For a plan change, check the checkout receipt’s **Next invoice** and **Invoice date** rows. Existing-subscription changes use Stripe prorations and may land on the next invoice instead of producing an immediate checkout charge.
5. Treat the plan item’s mirrored Stripe unit amount as authoritative when it differs from the catalog’s current list price.

Owned-workspace usage is summed across the account. Add-ons, active license grants, and referral credit stack on the base plan, so an invoice line alone does not describe every byte in **Total limit**.


<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Free plan overview establishing a zero-subscription baseline before comparing paid plan and invoice records." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>This baseline has no paid subscription item, so a charge here points to a different account or an unmatched Stripe record. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Each billed line has a matching subscription item, proration, tax, or discount explanation, and the Billing ledger accounts for the resulting storage allowance.

If the ledger and total briefly disagree, reload after a few seconds; the interface explicitly treats **Total limit** as authoritative. Preserve the invoice number and checkout reference before reporting an unexplained difference.

## Related guides

- [Locate an invoice period](/account/billing-locate-invoice-period)
- [Verify a plan change](/account/verify-plan-change)
