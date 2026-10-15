---
{
  "articleId": "hc-license-redeem",
  "locale": "en",
  "revision": 6,
  "title": "Redeem a storage license or coupon",
  "summary": "Securely redeem a Gumroad license or Dosya coupon, confirm the package and duration, and verify its contribution in the account storage ledger.",
  "category": "account",
  "articleSlug": "redeem-license",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/pages/redeem.tsx, apps/api/src/pages/api/licenses/redemption-intents.ts, apps/api/src/pages/api/licenses/redemption-claims/[claim].ts, and apps/api/src/pages/api/licenses/redemption-claims/[claim]/activate.ts on 2026-10-14. Production redemption was not attempted.",
  "related": [
    "hc-license-manage",
    "hc-checkout-verify",
    "hc-storage-usage",
    "hc-contact-support"
  ],
  "keywords": [
    "redeem license",
    "Gumroad license",
    "coupon code",
    "storage package",
    "redeem code",
    "cloud storage"
  ]
}
---
The redemption page accepts either a **Gumroad license** or **Coupon code**, exchanges the secret for an opaque one-time claim, and keeps only that claim through sign-in.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/redeem-license-workflow-map-2026-10-14.webp" data-light-href="/screenshots/redeem-license-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/redeem-license-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/redeem-license-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/redeem-license-workflow-map-2026-10-14.webp" alt="Redemption workflow showing Gumroad license or Coupon code, secured claim, account confirmation, and Storage live." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Enter the secret once, continue with the opaque claim, activate the reviewed package, and verify Storage live on the intended account. <a class="workflow-map-full" href="/screenshots/redeem-license-workflow-map-2026-10-14.webp" data-light-href="/screenshots/redeem-license-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/redeem-license-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open `/redeem`, choose the correct source, and enter the code. Gumroad input is limited to 128 characters; coupon input is limited to 64. Both reject control characters, and coupons follow the `DOSYA-…` format.
2. Continue through **Securing your license code**. The page states that the code is swapped for a claim and is not saved in the browser.
3. Sign in or create the intended Dosya account, then verify its email. Redemption refuses unverified addresses with **Verify your dosya.dev email before redeeming a license.**
4. Review package name, storage contribution, provider, interval/end date, and current stacked total. Confirm activation once.
5. Check **Storage live**, then open Billing → **Redeemed packages** and match the contribution with **Total limit**.

The opaque claim lasts 15 minutes. Five unknown coupon attempts trigger a 15-minute lock, and creating claims is capped at 10 attempts per IP per hour. Provider outages return **We could not verify this license right now. Please try again.** and preserve the claim for another attempt. The API marks a transient reservation race or **This redemption is already in progress. Please try again shortly.** as retryable; a claim reserved to another account, or a used, expired, invalid, or unavailable code, requires the owning account or a different valid claim.


<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Storage ledger showing the redeemed package contribution and its effect on the bold Total limit." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Match the package Adds amount with the ledger so a duplicate or stale redemption is not mistaken for new capacity. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The package adds its stated bytes once, the raw code is absent from browser continuation state, and Billing records the grant’s lifecycle.

For **This coupon code was already used** or **This redemption link has expired**, obtain a new valid code. Use **Redeem another** only for a different package.

## Related guides

- [Manage redeemed packages](/account/manage-license-storage)
- [Verify storage after an upgrade](/account/plan-verify-storage-upgrade)
