---
{
  "articleId": "hc-billing-invoices",
  "locale": "en",
  "revision": 4,
  "title": "Find invoices and update payment details",
  "summary": "Open Billing, download an available invoice PDF, inspect the next invoice, and use the supported payment portal to update card or billing information.",
  "category": "account",
  "articleSlug": "invoices-and-payment",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-plan-upgrade-storage",
    "hc-billing-troubleshoot",
    "hc-profile-settings",
    "hc-contact-support"
  ],
  "keywords": [
    "billing invoice",
    "download invoice",
    "payment method",
    "Stripe portal",
    "upcoming invoice",
    "billing details",
    "cloud storage"
  ]
}
---
Billing lists available invoices and opens the supported payment portal for card and billing-detail changes. Never send a full card number to Dosya support.

Billing distinguishes invoices, receipts, upcoming charges and payment-method management. Use the supported portal for card changes rather than sending details to support.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/invoices-and-payment-workflow-map-2026-10-14.webp" data-light-href="/screenshots/invoices-and-payment-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/invoices-and-payment-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/invoices-and-payment-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/invoices-and-payment-workflow-map-2026-10-14.webp" alt="Four-step interface map for find invoices and update payment details, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/invoices-and-payment-workflow-map-2026-10-14.webp" data-light-href="/screenshots/invoices-and-payment-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/invoices-and-payment-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Sign in as the account or billing owner.
- Know the approximate invoice period and amount.
- Allow a new tab or redirect to the payment portal.
- Keep sensitive payment data inside the supported portal.

## Steps: find an invoice or update payment

1. Open **Billing**.
2. Review the subscription statement and any **Next invoice** line.
3. Scroll to **Invoices** and find the period, amount and status.
4. Select the PDF download action when present.
5. To change payment details, select **Manage payment method** or **Open Stripe portal**.
6. Complete the change in the portal, return to Dosya, and recheck Billing.

<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Dosya account allowance view showing plan information that should be matched with the subscription and invoice records in Billing." width="704" height="657" loading="lazy" decoding="async" /></a><figcaption>Match the account and plan before opening the payment portal or downloading an invoice. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Match the downloaded document with the expected period, amount and status, then return from the portal and refresh Billing to confirm the change.

## Expected result

The invoice PDF opens or downloads from its recorded URL, and payment changes made in the portal are reflected on a later Billing reload.

## Limits and invoice timing

- Only generated invoices appear; an upcoming invoice may not yet have a PDF.
- Taxes, currency and editable business fields depend on the live billing account.
- The portal controls which payment details can be changed.
- A payment-method update does not by itself retry every failed charge instantly.

## Troubleshooting

**No invoice is listed.** Confirm the account and whether any paid invoice has been generated.

**The portal will not open.** Allow redirects, retry once, then capture the nonsecret error for support.

**The invoice details are incorrect.** Update supported billing details in the portal and contact private support about the specific invoice ID.

## Related guides

- [Upgrade or add storage](/account/upgrade-storage)
- [Troubleshoot billing](/troubleshooting/billing)
- [Update profile settings](/account/profile-settings)
- [Contact support safely](/troubleshooting/contact-support)
