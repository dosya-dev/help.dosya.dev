---
{
  "articleId": "hc-billing-intervals",
  "locale": "en",
  "revision": 6,
  "title": "Compare monthly and annual billing",
  "summary": "Compare Monthly and Annual carts by exact total, plan availability, add-ons, promotion rules and the existing subscription's proration preview.",
  "category": "account",
  "articleSlug": "billing-intervals",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed apps/web/src/components/billing/plan-chooser.tsx, apps/web/src/components/billing/plan-selector.tsx, apps/web/src/lib/billing/cart-math.ts, and apps/api/src/lib/billing/cart.ts. The comparison used repository data only and sent nothing to production or Stripe.",
  "related": [
    "hc-billing-invoices",
    "hc-plan-choose"
  ],
  "keywords": [
    "monthly vs annual billing",
    "Dosya annual plan",
    "cloud storage plan price",
    "billing interval"
  ]
}
---
The **Monthly** and **Annual** buttons control the entire plan-change cart: the base plan, storage add-ons, promotion eligibility, and total. Annual plans display a general **save ~17%** hint when annual prices exist, but the exact cart total is the figure to compare.

A plan or add-on may be sold on only one interval. Switching periods can remove unavailable add-ons, invalidate an interval-restricted promo code, or make the selected plan unavailable. Review every message before submitting.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/billing-intervals-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-intervals-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-intervals-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/billing-intervals-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/billing-intervals-workflow-map-2026-10-14.webp" alt="Plan chooser comparison of Monthly and Annual totals, storage, add-on availability and estimated proration." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Toggle the interval while the same plan is selected, then compare <strong>Total</strong>, <strong>New storage</strong>, and any add-on or promotion warning. <a class="workflow-map-full" href="/screenshots/billing-intervals-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-intervals-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-intervals-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Billing** and select **Choose a plan** or **Change plan**.
2. Select **Monthly** and choose the plan you are considering.
3. Record the line-item prices, **Discount** if present, **Total …/mo**, **New storage**, and for an existing subscription **Estimated next invoice (incl. proration)**.
4. Select **Annual** without changing the plan. Record **Total …/yr** and the same supporting rows.
5. Check every add-on row. If an add-on is unavailable, the chooser says it **isn't sold on annual billing** or **isn't sold on monthly billing** and excludes it.
6. Reapply or re-evaluate a promo code if the chooser removes it when the interval changes.
7. For an existing subscriber, compare the proration estimate with the recurring interval total. The estimate describes the next invoice adjustment; it is not the recurring annual or monthly price.
8. Submit only after the chosen interval, storage total, and final cart match your decision.

<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Plan overview reference used before opening the cart to compare monthly and yearly subscription prices." width="704" height="657" loading="lazy" decoding="async" /></a><figcaption>Start from the current plan shown on Billing, then compare the available interval prices inside the live chooser. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## How to compare fairly

Annual prices are charged per year and monthly prices per month. To compare like with like, divide the annual total by 12 for an average monthly cost, or multiply the monthly total by 12 for a one-year projection. Taxes and provider-calculated adjustments can change the amount ultimately charged, so treat the cart and checkout summary as authoritative.

Choosing a smaller base plan replaces the current plan even if add-ons keep total storage high. Dosya requires the checkbox **Yes, move me to [plan]** for a base-plan downgrade. Add-ons and redeemed packages stay unless the chooser explicitly reports that an add-on is unavailable at the new interval.

## Troubleshooting

If a plan says it **isn't available on annual billing** or monthly billing, switch back or choose a different plan. If changing the interval removes a code, the message identifies the code and restricted period. A server response of **Invalid billing interval** means the submitted period was neither month nor year.

## Expected result

You can explain the exact recurring total, storage entitlement, included add-ons, promotion status, and immediate proration for the interval you selected.

## Related guides

- [Review invoices and payments](/account/invoices-and-payment)
- [Choose or change a plan](/account/choose-plan)
