---
{
  "articleId": "hc-billing-review-invoice-identity",
  "locale": "en",
  "revision": 5,
  "title": "Review billing identity on an invoice",
  "summary": "Check the Stripe invoice customer, billing address, tax fields, currency and invoice number before saving it for accounting or reimbursement.",
  "category": "account",
  "articleSlug": "billing-review-invoice-identity",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/pages/billing.tsx, apps/web/src/pages/checkout-success.tsx, apps/api/src/pages/api/billing/status.ts, apps/api/src/pages/api/billing/receipt.ts, and apps/api/src/pages/api/billing/portal.ts on 2026-10-14. Production invoices were not opened.",
  "related": [
    "hc-billing-invoices",
    "hc-billing-portal"
  ],
  "keywords": [
    "billing review invoice identity",
    "Billing invoice and payment details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Review billing identity in Stripe’s invoice, because Dosya’s Billing list shows the period, amount and status but does not render customer-address or tax fields.


<figure class="help-screenshot"><a href="/screenshots/billing-review-invoice-identity-help-workflow-2026-10-14.webp"><img src="/screenshots/billing-review-invoice-identity-help-workflow-2026-10-14.webp" alt="Invoice review path from Billing Download PDF to Stripe customer, address, tax, currency, and invoice-number fields." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Open the finalized Stripe document and verify its customer identity and tax fields before filing it for accounting. <a href="/screenshots/billing-review-invoice-identity-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Billing → Invoices** and download the PDF for the correct period, or follow **View invoice** from a completed checkout.
2. Check the invoice number, issue/payment date, currency, customer name, email, billing address, and any tax identifier shown by Stripe.
3. Match the plan or add-on description and quantity to the Dosya **Storage ledger**. Confirm the invoice amount against the row in Billing.
4. Verify the masked card only as a supporting clue; Dosya displays brand and last four digits when Stripe returns a default card.
5. If identity fields are wrong, record the invoice number and contact billing support before the next invoice. Dosya exposes payment-method and invoice access, but no billing-identity editor in this flow.

Changing portal details does not rewrite an already finalized invoice automatically. Keep the original and corrected record required by your accounting process, and ask billing support about a historical correction.


<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Free plan Billing screen without customer-address or tax information in the Dosya interface." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Dosya does not expose invoice identity on this page; those details must be checked in the hosted or downloaded Stripe invoice. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The invoice identifies the intended customer and transaction and can be filed with a clear match to the Dosya subscription period. Reviewing it makes no account changes.

If no PDF icon appears, the row may be **upcoming** or Stripe supplied no `invoice_pdf`. Open the portal for the hosted invoice, or wait until the estimate finalizes.

## Related guides

- [Distinguish receipts and invoices](/account/billing-distinguish-receipt-invoice)
- [Update a payment method](/account/billing-update-payment-method)
