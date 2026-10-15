---
{
  "articleId": "hc-billing-update-payment-method",
  "locale": "en",
  "revision": 5,
  "title": "Update a payment method in the billing portal",
  "summary": "Open the protected Stripe portal from Dosya Billing, replace the subscription payment method, and verify the masked card safely after returning.",
  "category": "account",
  "articleSlug": "billing-update-payment-method",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/pages/billing.tsx, apps/web/src/api/billing.ts, apps/api/src/pages/api/billing/portal.ts, and apps/api/src/pages/api/billing/receipt.ts on 2026-10-14. Production Stripe portal behavior was not exercised.",
  "related": [
    "hc-billing-invoices",
    "hc-billing-portal"
  ],
  "keywords": [
    "billing update payment method",
    "Billing invoice and payment details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Payment details are managed in Stripe’s customer portal. Dosya creates the portal session only for a signed-in account that already has a Stripe customer record.


<figure class="help-screenshot"><a href="/screenshots/billing-update-payment-method-help-workflow-2026-10-14.webp"><img src="/screenshots/billing-update-payment-method-help-workflow-2026-10-14.webp" alt="Billing controls showing Manage payment method, Stripe portal authentication, and the refreshed masked card." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Select Manage payment method, finish the change in Stripe, and confirm the new brand and last four digits after returning. <a href="/screenshots/billing-update-payment-method-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Billing** and verify the subscription plan, renewal date, and displayed card brand/last four digits.
2. Select **Manage payment method**. The button changes to **Opening…** while Dosya requests a short-lived portal URL.
3. In Stripe, add or replace the payment method and make it the subscription default when prompted. Follow Stripe’s authentication step if the bank requires it.
4. Return to Dosya Billing using the portal’s return action, then reload and check the masked card line.

The same portal opens from **Open Stripe portal** above Invoices. Dosya configures self-service plan switching and cancellation through its own guarded flows; use **Change plan** or **Cancel subscription** in Billing for those actions.


<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Free plan state that appears when no Stripe customer or subscription payment method can be managed." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>An account in this state cannot open payment-method management until Stripe customer billing exists for it. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Stripe stores the replacement method and Dosya subsequently shows its brand and final four digits. Card numbers are not exposed in the Dosya UI.

**No billing account found. Subscribe to a plan first.** means the account has no Stripe customer to manage. **Failed to create portal session** means no usable portal URL was returned; reload Billing before retrying. A missing card line can also mean Stripe did not return a default card even though the subscription exists.

## Related guides

- [Find invoices and payment details](/account/invoices-and-payment)
- [Review invoice identity](/account/billing-review-invoice-identity)
