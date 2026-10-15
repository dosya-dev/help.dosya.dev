---
{
  "articleId": "hc-billing-download-receipt",
  "locale": "en",
  "revision": 6,
  "title": "Download a payment receipt",
  "summary": "Download the Stripe invoice PDF for a completed payment, then match its billing period, amount and status to the corresponding Dosya row before filing it.",
  "category": "account",
  "articleSlug": "billing-download-receipt",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed and reconciled locally with apps/web/src/pages/billing.tsx, apps/api/src/pages/api/billing/status.ts, apps/api/src/pages/api/billing/receipt.ts, and apps/web/src/pages/checkout-success.tsx. No invoice was fetched from Stripe or a production account.",
  "related": [
    "hc-billing-invoices",
    "hc-plan-choose"
  ],
  "keywords": [
    "download payment receipt",
    "Stripe invoice PDF",
    "Dosya billing invoice",
    "cloud storage receipt"
  ]
}
---
The **Invoices** card fetches the latest **12** Stripe invoices for the signed-in account, then omits draft and void records. Each remaining row shows its billing-period start and end dates, amount, status, and a PDF download icon when Stripe supplied an invoice PDF URL.

An **upcoming** row is a forecast and has no PDF link. Use a completed row, normally one marked **paid**, when you need a payment document. The downloaded file is the provider's invoice PDF; Dosya does not generate or rewrite its contents.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/billing-download-receipt-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-download-receipt-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-download-receipt-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/billing-download-receipt-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/billing-download-receipt-workflow-map-2026-10-14.webp" alt="Invoices card workflow for selecting a paid billing period and opening its available Stripe PDF download." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Choose a completed invoice row with a download icon; an <strong>upcoming</strong> estimate cannot produce a receipt PDF. <a class="workflow-map-full" href="/screenshots/billing-download-receipt-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-download-receipt-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-download-receipt-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Billing** for the account that made the payment.
2. Scroll to **Invoices** and find the row whose period and amount match the charge.
3. Check the status. Do not use the **upcoming** row as proof of payment.
4. On a row with a PDF URL, select the download icon whose tooltip is **Download PDF**. The document opens in a new browser tab or follows the browser's PDF-download preference.
5. Save the PDF in an approved location if it contains billing details.
6. Compare the PDF with the Dosya row: billing-period dates, charged amount, currency shown in the document, invoice status, and billed customer details should correspond to the intended payment.

<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Dosya billing plan reference used to identify the account and subscription before choosing a completed invoice." width="704" height="657" loading="lazy" decoding="async" /></a><figcaption>Confirm the subscription on Billing before matching a completed invoice; invoice access belongs to the signed-in account, not a workspace role. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## If the PDF icon is missing

Dosya shows an empty icon space when Stripe supplies no `invoice_pdf` URL. This is expected for the synthetic **upcoming** estimate. A draft or void invoice is omitted from the list entirely.

Select **Open Stripe portal** in the **Invoices** header to review the provider's invoice history. The portal is also the supported fallback when the completed payment exists but its PDF link is absent from the Dosya row.

The checkout success page can show the amount paid, currency, invoice number, payment time, billing email, and card brand with last four digits when Stripe returns them. Those values are confirmation details; the durable downloadable document remains the invoice PDF or hosted invoice available through Stripe.

## Troubleshooting

If Billing says **Failed to load billing information.**, reload after confirming the signed-in email. Invoice retrieval is bounded by a 10-second provider request; a temporary provider failure can leave the list empty without altering the subscription.

If the wrong customer or amount appears, stop and return to Dosya instead of editing provider data. Recheck which Dosya account is signed in, because Billing does not switch with the active workspace.

## Expected result

You have the PDF for the intended completed payment and its period, amount, status, currency, and customer details agree with the billing record.

## Related guides

- [Review invoices and payments](/account/invoices-and-payment)
- [Choose or change a plan](/account/choose-plan)
