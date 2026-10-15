---
{
  "articleId": "hc-billing-portal",
  "locale": "en",
  "revision": 6,
  "title": "Open the billing management portal",
  "summary": "Open the Stripe customer portal from Dosya to manage the saved payment method or provider invoice history, then return to Billing without changing plans.",
  "category": "account",
  "articleSlug": "billing-portal",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/billing.tsx, apps/web/src/api/billing.ts, apps/api/src/pages/api/billing/portal.ts, and apps/api/src/lib/stripe.ts. No portal session or production Stripe customer was opened during verification.",
  "related": [
    "hc-billing-invoices",
    "hc-plan-choose"
  ],
  "keywords": [
    "Stripe billing portal",
    "manage payment method",
    "Dosya invoices",
    "cloud storage billing"
  ]
}
---
Dosya opens Stripe's customer portal for the billing customer attached to the signed-in account. Use it for the saved payment method and provider invoice history. Plan switching and subscription cancellation are handled on Dosya's own **Billing** page so its storage, add-on, and downgrade checks can run.

Two Dosya controls create the same type of portal session: **Manage payment method** in the Subscription card and **Open Stripe portal** in the Invoices header. A portal session is temporary and returns to `/billing` when you leave it.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/billing-portal-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-portal-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-portal-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/billing-portal-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/billing-portal-workflow-map-2026-10-14.webp" alt="Dosya Billing workflow that opens the Stripe customer portal for payment-method or invoice management and returns to Billing." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Launch the portal from the account's Billing page, verify the customer details there, and return to Dosya after finishing. <a class="workflow-map-full" href="/screenshots/billing-portal-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-portal-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-portal-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Sign into the Dosya account whose subscription you intend to manage and open **Billing**. Workspace switching does not change the billing customer.
2. Review the Subscription card's plan, status, renewal or end date, and card brand with last four digits when available.
3. For a payment-method task, select **Manage payment method**. For provider invoice history, select **Open Stripe portal** above **Invoices**.
4. Wait while the button reads **Opening…**. Dosya requests a customer-portal URL and redirects the browser to it.
5. In Stripe, confirm the customer or billing email and subscription context before changing payment details or downloading a document.
6. Complete the provider action, then use its return control to go back to Dosya Billing.
7. Reload Billing and verify the saved card summary or invoice list. Provider changes can take a short time to appear in Dosya's mirrored status.

<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Dosya subscription summary used to verify the account and plan before opening its external billing portal." width="704" height="657" loading="lazy" decoding="async" /></a><figcaption>Use the plan and payment summary on Dosya as the reference before entering the external customer portal. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Access and scope

Portal access requires an authenticated account session and an existing Stripe customer ID. API keys are file-access credentials and cannot create billing portal sessions. Workspace roles do not grant access to another user's billing customer.

If the account has never subscribed, the server returns **No billing account found. Subscribe to a plan first.** Use **Choose a plan** to start a subscription instead.

The portal URL is a bearer credential. Do not paste it into support messages, screenshots, or shared documents. Open a new portal session from Billing if an old link has expired.

## Troubleshooting

If the Dosya page reports a portal error, stay on Billing and retry after a refresh. **Failed to create portal session** means no usable provider URL was returned. If Stripe shows the wrong customer, close the portal without making changes, sign out of the unintended Dosya account, and start again from the correct one.

For plan changes, add-ons, or cancellation, return to Dosya. Those actions need **Change plan**, **Add storage**, or **Cancel subscription** rather than the payment-method workflow.

## Expected result

The portal opens for the correct Dosya billing customer, the intended payment or invoice action completes, and the browser returns to the Billing page.

## Related guides

- [Review invoices and payments](/account/invoices-and-payment)
- [Choose or change a plan](/account/choose-plan)
