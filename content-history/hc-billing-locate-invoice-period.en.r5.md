---
{
  "articleId": "hc-billing-locate-invoice-period",
  "locale": "en",
  "revision": 5,
  "title": "Locate an invoice for a billing period",
  "summary": "Match a Dosya charge to its Stripe billing period, amount and status, then securely download the correct PDF from the 12-entry invoice history.",
  "category": "account",
  "articleSlug": "billing-locate-invoice-period",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/pages/billing.tsx and apps/api/src/pages/api/billing/status.ts on 2026-10-14, including the 12-invoice, status-filter, PDF, upcoming-invoice, and 10-second timeout paths. Production Stripe records were not opened.",
  "related": [
    "hc-billing-invoices",
    "hc-billing-portal"
  ],
  "keywords": [
    "billing locate invoice period",
    "Billing invoice and payment details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
The **Invoices** card on Billing lists Stripe periods as start date **to** end date, followed by amount, status, and a PDF action when Stripe supplies one.


<figure class="help-screenshot"><a href="/screenshots/billing-locate-invoice-period-help-workflow-2026-10-14.webp"><img src="/screenshots/billing-locate-invoice-period-help-workflow-2026-10-14.webp" alt="Invoices list showing period dates, amount, status, and the Download PDF action for a finalized Stripe record." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Match the charge to its period and amount before choosing Download PDF on the correct finalized invoice. <a href="/screenshots/billing-locate-invoice-period-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Billing** for the account that owns the subscription. Workspace roles do not grant access to another person’s billing account.
2. Write down the charge date, amount, currency, and card statement reference you are reconciling.
3. In **Invoices**, compare the displayed period and amount. The API fetches at most 12 invoices and removes draft and void records.
4. Do not select the row marked **upcoming** for a past charge. It is an estimate, has no PDF, and can change before Stripe finalizes it.
5. Open **Download PDF** on the matching finalized row and verify the invoice number and paid/open status inside Stripe’s document.

The list amount is Stripe’s `amount_paid`, falling back to `amount_due`; it is not reconstructed from today’s catalog price. That matters for discounts, legacy prices, taxes, credits, and prorations.


<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Free plan Billing state used to detect that the signed-in account has no eligible invoice rows." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>If this Free plan view appears instead of the expected history, verify that you opened Billing for the subscription owner. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The saved PDF covers the intended start/end period and agrees with the relevant account charge. Opening or downloading it is read-only.

If the period is older than the visible 12 records, select **Open Stripe portal** and use Stripe’s longer customer history. **No invoices yet** means the API returned no eligible entries; verify the signed-in account before contacting billing support.

## Related guides

- [Review invoice identity](/account/billing-review-invoice-identity)
- [Reconcile an invoice with a plan](/account/billing-reconcile-invoice-plan)
