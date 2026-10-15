---
{
  "articleId": "hc-plan-upgrade-storage",
  "locale": "en",
  "revision": 6,
  "title": "Upgrade a plan or add storage",
  "summary": "Choose a plan or 100 GB, 1 TB, or 5 TB storage add-ons, review live pricing, and verify the resulting account capacity after Stripe settles.",
  "category": "account",
  "articleSlug": "upgrade-storage",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/components/billing/plan-chooser.tsx, apps/web/src/pages/checkout-success.tsx, apps/api/src/lib/addons.ts, apps/api/migrations/0062_billing_v2_seed.sql, apps/api/src/pages/api/billing/checkout.ts, and apps/api/src/pages/api/billing/subscription.ts on 2026-10-14. Production checkout was not exercised.",
  "related": [
    "hc-plan-choose",
    "hc-storage-usage",
    "hc-billing-invoices",
    "hc-billing-troubleshoot"
  ],
  "keywords": [
    "upgrade plan",
    "add storage",
    "storage add-on",
    "billing checkout",
    "increase allowance",
    "cloud storage"
  ]
}
---
Use **Change plan** to replace the base tier and **Add storage** to retain it while adjusting separate capacity items.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/upgrade-storage-workflow-map-2026-10-14.webp" data-light-href="/screenshots/upgrade-storage-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/upgrade-storage-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/upgrade-storage-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/upgrade-storage-workflow-map-2026-10-14.webp" alt="Billing workflow showing Change plan, Add storage, live catalog quantity, Stripe review, and the synchronized Total limit." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Choose the base-tier replacement or a database-backed add-on, authorize it once, and wait for the resulting ledger entry. <a class="workflow-map-full" href="/screenshots/upgrade-storage-workflow-map-2026-10-14.webp" data-light-href="/screenshots/upgrade-storage-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/upgrade-storage-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Record Billing’s used amount, base-plan row, extras, and **Total limit**.
2. Select **Change plan** for a new base capacity or feature ceiling. Select **Add storage** for the dedicated add-on-only chooser.
3. Choose the billing interval and quantity from the live catalog. Seeded choices are `+100 GB` at up to 50 units, `+1 TB` at up to 20, and `+5 TB` at up to 10.
4. Review the Stripe amount or existing-subscription proration, then submit the action once.
5. Wait for **Purchase complete** or **Plan updated**, and verify the resulting ledger row and total before resuming large uploads.

Add-on definitions and prices come from the database and a five-minute cache; no static add-on fallback is used. Plan changes preserve active custom packages, while add-ons are replaced by the quantities in the submitted cart. If a selected plan is smaller than the current plan, Dosya requires a separate downgrade confirmation.


<figure class="help-screenshot"><a href="/screenshots/storage-quota-error-2026-10-12.webp"><img src="/screenshots/storage-quota-error-2026-10-12.webp" alt="Storage quota error displayed when the requested upload exceeds the account or workspace capacity currently available." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>After upgrading, retry only when Billing shows enough Total limit to cover the upload and any workspace-specific ceiling. <a href="/screenshots/storage-quota-error-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Billing shows the intended base plan or add-on quantity and the effective storage limit increases by the expected amount.

If the success page still says **Adding your storage**, allow the eight 2.5-second status retries to finish and use Retry if offered. A completed card payment with stale Billing data should be reported with its invoice reference, not repurchased.

## Related guides

- [Choose a plan](/account/choose-plan)
- [Verify a plan change](/account/verify-plan-change)
