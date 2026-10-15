---
{
  "articleId": "hc-billing-invoices",
  "locale": "en",
  "revision": 6,
  "title": "Find invoices and update payment details",
  "summary": "Find recent and upcoming Stripe invoices, securely download available PDFs, inspect the charged card, and open the portal for payment changes.",
  "category": "account",
  "articleSlug": "invoices-and-payment",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/pages/billing.tsx, apps/web/src/api/billing.ts, apps/api/src/pages/api/billing/status.ts, apps/api/src/pages/api/billing/portal.ts, and apps/api/src/pages/api/billing/receipt.ts on 2026-10-14. Production Stripe records were not opened.",
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
Billing combines the active subscription, default-card hint, recent invoice history, and links into Stripe’s protected portal.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/invoices-and-payment-workflow-map-2026-10-14.webp" data-light-href="/screenshots/invoices-and-payment-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/invoices-and-payment-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/invoices-and-payment-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/invoices-and-payment-workflow-map-2026-10-14.webp" alt="Billing overview showing Subscription, Next invoice, Invoices, Open Stripe portal, and Manage payment method controls." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The page combines the current subscription estimate with recent finalized invoices and secure entry points to Stripe billing tools. <a class="workflow-map-full" href="/screenshots/invoices-and-payment-workflow-map-2026-10-14.webp" data-light-href="/screenshots/invoices-and-payment-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/invoices-and-payment-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Billing** and read the **Subscription** price, interval, renewal/end date, status badge, and masked card when present.
2. Review **Next invoice [amount] on [date]** for a noncancelling subscription. This is Stripe’s upcoming estimate and can change.
3. In **Invoices**, match a period, amount and status. Dosya requests 12 Stripe invoices, excludes draft and void entries, and provides **Download PDF** only when Stripe returns a PDF URL.
4. Select **Open Stripe portal** for Stripe-hosted billing records, or **Manage payment method** to replace the default card.
5. Return to Billing and reload before relying on a changed card or newly finalized invoice.

Billing access is tied to the signed-in account rather than a workspace role and is refused for API-key authentication. The portal URL is a bearer credential; do not share or copy it into support messages.


<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Free plan account with no subscription, default card, upcoming charge, or downloadable invoice rows." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Seeing this state while tracing a paid charge usually means the wrong signed-in account is open. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The intended invoice downloads from Stripe, the upcoming amount is treated as an estimate, and any payment-method change is visible through the card brand and last four digits.

**Failed to load billing information.** means the status request failed. If invoice fetching alone fails, the rest of Billing can still load with an empty history; try the Stripe portal before concluding no invoices exist.

## Related guides

- [Locate an invoice period](/account/billing-locate-invoice-period)
- [Update a payment method](/account/billing-update-payment-method)
