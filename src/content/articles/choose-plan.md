---
{
  "articleId": "hc-plan-choose",
  "locale": "en",
  "revision": 6,
  "title": "Choose a plan for your storage needs",
  "summary": "Compare current Dosya plan capacities, prices and operational limits, then choose a billing interval using the live catalog before checkout.",
  "category": "account",
  "articleSlug": "choose-plan",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/components/billing/plan-chooser.tsx, apps/api/src/pages/api/billing/catalog.ts, apps/api/src/lib/plans.ts, and apps/api/src/lib/addons.ts on 2026-10-14. Production catalog and checkout were not exercised.",
  "related": [
    "hc-free-plan",
    "hc-storage-usage",
    "hc-plan-upgrade-storage",
    "hc-plan-cancel-downgrade"
  ],
  "keywords": [
    "choose plan",
    "storage plan",
    "billing plan",
    "storage headroom",
    "plan comparison",
    "cloud storage"
  ]
}
---
Use the live plan chooser because Dosya loads active plans and prices from the billing catalog. The static fallback capacities are Free 5 GB, Starter 100 GB, Plus 500 GB, Pro 1 TB, and Business 2 TB.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/choose-plan-workflow-map-2026-10-14.webp" data-light-href="/screenshots/choose-plan-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/choose-plan-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/choose-plan-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/choose-plan-workflow-map-2026-10-14.webp" alt="Plan chooser showing active tier cards, monthly or yearly interval, included storage, and the review-cart path." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Compare the live plan cards and operational limits, then review the selected interval and amount before Stripe authorization. <a class="workflow-map-full" href="/screenshots/choose-plan-workflow-map-2026-10-14.webp" data-light-href="/screenshots/choose-plan-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/choose-plan-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Billing** and read owned-workspace usage plus **Total limit**.
2. Select **Choose a plan** without a subscription, or **Change plan** with one. Compare the cards and their included storage.
3. Switch between monthly and yearly only when the selected catalog item supports that interval. The cart uses the shown interval for both plan and add-ons.
4. Account for plan-specific operational limits in addition to storage. Current fallbacks allow 1/3/10/25/unlimited WordPress sites from Free through Business, with backup retention ceilings of 7/30/90/180/365 days.
5. Review the cart, promotion result, and live amount before continuing to Stripe or applying an existing-subscription update.

Current fallback monthly prices are $3.99 Starter, $9.99 Plus, $19.99 Pro, and $39.99 Business; yearly figures are $39.90, $99.90, $199.90, and $399.90. Treat the chooser as authoritative because administrators can change active catalog values.


<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Storage breakdown listing base plan, extras, referral credit, and Total limit for capacity planning." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Use the ledger to calculate how much base capacity the new tier must provide after all separate contributions are counted. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The selected tier covers present usage and expected growth, and checkout clearly states the interval and charge before payment authorization.

A plan below current usage does not remove data, but the resulting over-limit account cannot accept new uploads. Use **Add storage** when the base features should stay unchanged.

## Related guides

- [Estimate storage before upgrading](/account/plan-estimate-storage-upgrade)
- [Upgrade a plan or add storage](/account/upgrade-storage)
