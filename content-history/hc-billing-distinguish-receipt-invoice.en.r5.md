---
{
  "articleId": "hc-billing-distinguish-receipt-invoice",
  "locale": "en",
  "revision": 5,
  "title": "Distinguish a receipt from an invoice",
  "summary": "Use Dosya’s checkout receipt for payment confirmation and the Stripe invoice PDF for tax-ready billing details, dates, status and totals before filing.",
  "category": "account",
  "articleSlug": "billing-distinguish-receipt-invoice",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/pages/checkout-success.tsx, apps/web/src/pages/billing.tsx, apps/api/src/pages/api/billing/receipt.ts, and apps/api/src/pages/api/billing/status.ts on 2026-10-14. Production Stripe records were not opened.",
  "related": [
    "hc-billing-invoices",
    "hc-billing-portal"
  ],
  "keywords": [
    "billing distinguish receipt invoice",
    "Billing invoice and payment details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Dosya presents two related records after Stripe checkout. The **Order receipt · Stripe** panel confirms the completed transaction; the linked Stripe invoice is the durable billing document.


<figure class="help-screenshot"><a href="/screenshots/billing-distinguish-receipt-invoice-help-workflow-2026-10-14.webp"><img src="/screenshots/billing-distinguish-receipt-invoice-help-workflow-2026-10-14.webp" alt="Checkout receipt showing Payment received and View invoice beside the Stripe transaction details." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Use the receipt to confirm checkout, then open the linked Stripe invoice for its number, identity, tax, currency, and finalized totals. <a href="/screenshots/billing-distinguish-receipt-invoice-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. On the purchase-success page, inspect **Order receipt · Stripe**. It may show Invoice, Date, Plan, Amount, Card, Email, and Storage.
2. Confirm the status says **Payment received**. **Payment processing** means Stripe has not yet marked the checkout paid; capacity appears after settlement.
3. Select **View invoice** when an invoice URL is available. Use that hosted/PDF document when accounting needs the invoice number, supplier/customer identity, tax details, currency, line items, and formal payment status.
4. For an older transaction, open **Billing → Invoices**, match the period and amount, then use the icon titled **Download PDF**.

The success-page receipt is a convenient on-screen summary and can omit a row Stripe did not return. The Billing list excludes draft and void invoices, includes up to 12 Stripe invoices, and may prepend an **upcoming** estimate without a PDF.


<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Billing page in the Free plan state, where no paid invoice history or Stripe receipt is available." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>A Free account without Stripe billing records will not supply the paid invoice PDF needed for bookkeeping. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

You retain the invoice PDF for bookkeeping and use the receipt panel to verify the checkout that led to it. Downloading either document does not change the subscription or storage entitlement.

If receipt details say they could not be loaded, open Billing and use the invoice list or **Open Stripe portal**. An upcoming estimate is not proof of payment; wait for a paid invoice covering the completed period.

## Related guides

- [Find invoices and payment details](/account/invoices-and-payment)
- [Locate an invoice period](/account/billing-locate-invoice-period)
