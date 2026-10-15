---
{
  "articleId": "hc-billing-apply-coupon",
  "locale": "en",
  "revision": 6,
  "title": "Apply a promotion or coupon",
  "summary": "Validate a Promo code against the selected billing interval and available seats, then verify its duration, Discount row and final total before purchase.",
  "category": "account",
  "articleSlug": "billing-apply-coupon",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed from apps/web/src/components/billing/plan-chooser.tsx, apps/api/src/pages/api/billing/coupon/validate.ts, apps/api/src/lib/billing/promo-interval.ts, and apps/api/src/lib/billing/promo-seats.ts. No real code was redeemed and no production or Stripe lookup occurred.",
  "related": [
    "hc-billing-invoices",
    "hc-plan-choose"
  ],
  "keywords": [
    "apply Dosya promo code",
    "cloud storage coupon",
    "billing discount",
    "annual promotion code"
  ]
}
---
A promotion code is validated against the active **Monthly** or **Annual** cart before payment or subscription update. A valid result shows **Code [CODE] applied**, adds a **Discount** row, and recalculates **Total**. Validation alone does not charge the account or consume the code.

Codes can be limited by billing interval, expiration, activation status, total redemption seats, discount duration, currency, or eligible products. The server validates again when checkout or an existing subscription update is submitted; do not rely on a manually calculated discount.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/billing-apply-coupon-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-apply-coupon-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-apply-coupon-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/billing-apply-coupon-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/billing-apply-coupon-workflow-map-2026-10-14.webp" alt="Plan chooser workflow for selecting a billing interval, applying a Promo code and checking the Discount and Total rows." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Choose the billing period before applying the code, then verify its duration and the recalculated cart total. <a class="workflow-map-full" href="/screenshots/billing-apply-coupon-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-apply-coupon-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-apply-coupon-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Billing**, then choose **Choose a plan** or **Change plan**.
2. Select **Monthly** or **Annual** first. Interval-restricted codes are evaluated against this choice.
3. Choose the plan and add-ons so the cart represents the purchase you intend to make.
4. Enter the code in **Promo code** and select **Apply**.
5. Read the success copy. A one-use discount says **discounts your first payment only**; a repeating promotion states how many months it applies.
6. Confirm a green **Discount** line appears and that **Total** shows the expected `/mo` or `/yr` period.
7. For an existing subscription, also review **Estimated next invoice (incl. proration)**. Promotion savings and proration are separate parts of the calculation.
8. Continue only after the checkout or update summary still displays the intended plan, interval, storage, and discounted amount.

<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Plan overview reference for choosing the intended storage subscription before applying a billing promotion." width="704" height="657" loading="lazy" decoding="async" /></a><figcaption>Identify the destination plan first; a coupon changes price terms and does not silently change the selected storage plan. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Errors and limits

- **Enter a promo code** means the submitted field was empty after trimming.
- **That promo code is invalid or expired** covers an unknown or unavailable code.
- **This code is for yearly billing only.** or its monthly equivalent means the cart uses the wrong period.
- **This code cannot be used with this billing period.** means its configured interval list does not allow the selection.
- **This code has no seats left.** means the campaign's Stripe and recorded manual redemptions reached its cap.
- **Too many promo code attempts. Try again in [n] minutes.** is an account lockout after repeated unknown-code guesses. An IP limiter also allows at most 30 lookup attempts per minute.

Switching from Annual to Monthly, or the reverse, automatically removes a code restricted to the other period and explains why. Apply a different eligible code or restore the supported interval.

## Expected result

The code remains attached to the chosen interval, its duration is clear, and the Discount and Total rows agree before any payment or subscription update.

## Related guides

- [Review invoices and payments](/account/invoices-and-payment)
- [Choose or change a plan](/account/choose-plan)
