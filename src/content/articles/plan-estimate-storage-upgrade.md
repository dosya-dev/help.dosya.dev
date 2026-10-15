---
{
  "articleId": "hc-plan-estimate-storage-upgrade",
  "locale": "en",
  "revision": 5,
  "title": "Estimate storage needed before upgrading",
  "summary": "Calculate capacity accurately from owned-workspace usage, base plan, add-ons, licenses and referrals before selecting a plan or storage quantity.",
  "category": "account",
  "articleSlug": "plan-estimate-storage-upgrade",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/pages/billing.tsx, apps/web/src/components/billing/plan-chooser.tsx, apps/api/src/pages/api/billing/status.ts, apps/api/src/lib/plans.ts, apps/api/src/lib/addons.ts, and apps/api/migrations/0062_billing_v2_seed.sql on 2026-10-14. Production capacity was not changed.",
  "related": [
    "hc-plan-upgrade-storage",
    "hc-checkout-verify"
  ],
  "keywords": [
    "plan estimate storage upgrade",
    "Plan and storage change details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Estimate against account-wide owned-workspace usage, because Billing’s usage numerator sums storage from every workspace you own.


<figure class="help-screenshot"><a href="/screenshots/plan-estimate-storage-upgrade-help-workflow-2026-10-14.webp"><img src="/screenshots/plan-estimate-storage-upgrade-help-workflow-2026-10-14.webp" alt="Capacity-estimate workflow using used storage, Total limit, forecast growth, and Add storage catalog choices." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Subtract the current ceiling from forecast usage, include working headroom, then model the live 100 GB, 1 TB, or 5 TB choices. <a href="/screenshots/plan-estimate-storage-upgrade-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Record **[used] used** and **Total limit** from Billing. Subtract limit from used bytes to find an existing deficit.
2. Add expected uploads and a working margin to the current used value. Shared workspaces owned by someone else count against their owner, not your account total.
3. Inventory the ledger: base plan, each add-on quantity, active redeemed packages, and referral bonus.
4. Compare the forecast with the live catalog capacities. Static baselines are 5 GB Free, 100 GB Starter, 500 GB Plus, 1 TB Pro, and 2 TB Business.
5. If only capacity is missing, compare the live **Add storage** choices. The seed catalog defines `+100 GB` with a 50-unit maximum, `+1 TB` with a 20-unit maximum, and `+5 TB` with a 10-unit maximum. Use **Change plan** when plan-level capabilities or base storage must change.

The chooser calculates against binary gigabytes (1 GB = 1,073,741,824 bytes). Active add-ons come from the database, with a five-minute cache, so the displayed catalog controls availability and pricing; there is no static add-on fallback. Leave headroom for active uploads and backup retention rather than selecting a total equal to today’s rounded display.


<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Storage breakdown identifying base plan, add-on quantities, redeemed packages, referrals, and the effective total." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Inventory every ledger component before calculating the extra capacity needed across all workspaces owned by the account. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The chosen plan plus extras exceeds current owned usage and the forecast, with a documented margin that prevents immediate quota failure.

If the sum of visible ledger rows briefly differs from **Total limit**, use the total as the effective ceiling and reload after synchronization. Verify all workspace-specific caps separately.

## Related guides

- [Choose a plan](/account/choose-plan)
- [Review upgrade checkout](/account/plan-review-upgrade-checkout)
