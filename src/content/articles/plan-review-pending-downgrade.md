---
{
  "articleId": "hc-plan-review-pending-downgrade",
  "locale": "en",
  "revision": 5,
  "title": "Review a pending plan downgrade",
  "summary": "Review a confirmed lower-tier plan change, its immediate storage result and proration, then correct it before quota blocks future uploads again.",
  "category": "account",
  "articleSlug": "plan-review-pending-downgrade",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/components/billing/plan-chooser.tsx, apps/web/src/pages/billing.tsx, apps/api/src/pages/api/billing/subscription.ts, and apps/api/src/pages/api/billing/cancel.ts on 2026-10-14. Production subscriptions were not changed.",
  "related": [
    "hc-plan-upgrade-storage",
    "hc-checkout-verify"
  ],
  "keywords": [
    "plan review pending downgrade",
    "Plan and storage change details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Dosya does not expose a deferred tier-downgrade queue. A lower plan submitted through **Change plan** is an existing-subscription update; period-end scheduling belongs to full cancellation.


<figure class="help-screenshot"><a href="/screenshots/plan-review-pending-downgrade-help-workflow-2026-10-14.webp"><img src="/screenshots/plan-review-pending-downgrade-help-workflow-2026-10-14.webp" alt="Billing states contrasting an applied Change plan replacement with a Cancelling subscription and its end date." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>A tier reduction produces Plan updated, while a whole-subscription cancellation shows Cancelling, Ends, and Resume subscription. <a href="/screenshots/plan-review-pending-downgrade-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open Billing and check whether the page shows the new plan or the amber cancellation state.
2. For a tier reduction, review the mandatory warning: **This replaces your [current] plan ([capacity]) with [new] ([capacity]).** Submit only after that explicit confirmation.
3. On success, inspect **Plan updated**, the new plan/interval, **Next invoice**, and **Total limit**. Stripe creates prorations for the item change.
4. For cancellation, look instead for **Cancelling**, **Ends [date]**, and **Resume subscription**. Storage remains paid through the end date plus 14 days of grace.
5. Compare current usage with the effective post-change limit and correct the plan immediately if the account is now over quota.

Custom admin-granted subscription items are preserved during self-service plan changes. Add-on quantities come from the submitted cart and may change independently of the base tier.


<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Storage ledger showing the new base-plan row and Total limit after a lower tier takes effect." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Compare current usage with this effective post-change ceiling and restore capacity promptly if the account became over quota. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The interface clearly identifies either an already-applied plan replacement or a scheduled whole-subscription cancellation; there is no ambiguous “pending downgrade” state.

If the wrong tier became active, reopen **Change plan** and restore the intended plan. That recovery may create a second proration, so retain both receipt states for reconciliation.

## Related guides

- [Cancel or downgrade](/account/cancel-or-downgrade)
- [Verify a plan change](/account/verify-plan-change)
