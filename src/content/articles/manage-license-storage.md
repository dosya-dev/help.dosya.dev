---
{
  "articleId": "hc-license-manage",
  "locale": "en",
  "revision": 6,
  "title": "Manage redeemed storage packages",
  "summary": "Read each redeemed package’s provider, contribution and end or renewal state, then verify its exact effect on the account’s total storage limit.",
  "category": "account",
  "articleSlug": "manage-license-storage",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/pages/billing.tsx, apps/web/src/lib/license-timeline.ts, apps/api/src/pages/api/billing/status.ts, and apps/api/src/lib/billing/provider-entitlement.ts on 2026-10-14. Production provider memberships were not changed.",
  "related": [
    "hc-license-redeem",
    "hc-storage-usage",
    "hc-plan-cancel-downgrade",
    "hc-billing-troubleshoot"
  ],
  "keywords": [
    "redeemed package",
    "license storage",
    "Gumroad storage",
    "package expiry",
    "storage grant",
    "cloud storage"
  ]
}
---
Billing lists storage activated through Gumroad licenses and Dosya coupons separately from the Stripe subscription.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/manage-license-storage-workflow-map-2026-10-14.webp" data-light-href="/screenshots/manage-license-storage-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/manage-license-storage-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/manage-license-storage-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/manage-license-storage-workflow-map-2026-10-14.webp" alt="Redeemed packages workflow showing provider, lifecycle status, Adds amount, and the Storage ledger contribution." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Count active package rows, compare their Adds values with the ledger, and use Manage on Gumroad for external memberships. <a class="workflow-map-full" href="/screenshots/manage-license-storage-workflow-map-2026-10-14.webp" data-light-href="/screenshots/manage-license-storage-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/manage-license-storage-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Billing → Redeemed packages**. Each row shows package name, provider, interval when known, redeemed date, timeline status, and **Adds [size]**.
2. Count only rows whose status is active. Ended or revoked grants remain visible for history but contribute zero bytes.
3. Compare the active package contribution with its row in **Storage ledger** and the bold **Total limit**.
4. For Gumroad packages, select **Manage on Gumroad** to manage the external membership. Its displayed next renewal is estimated from purchase date; Gumroad controls the exact charge date.
5. For a time-limited coupon, note the shown end date. Its storage stops counting at that time without deleting existing files.

Redeemed capacity stacks with the base plan, Stripe add-ons, and referral bonuses. If losing a grant leaves usage above the new total, uploads pause while stored files remain intact.


<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Storage breakdown where active redeemed packages stack with the base plan, add-ons, referrals, and Total limit." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Only active grants increase this total; ended or revoked packages stay in history while contributing zero bytes. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Every package has a clear active/ending/ended state and only active contributions are included in the account’s effective storage ceiling.

If a provider membership is active but the row is stale, verify it in Gumroad and reload Billing. Do not redeem the same code repeatedly; terminal claims report that the link/code is used, expired, or unavailable.

## Related guides

- [Redeem a storage license](/account/redeem-license)
- [Verify storage after an upgrade](/account/plan-verify-storage-upgrade)
