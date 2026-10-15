---
{
  "articleId": "hc-billing-pending-downgrade",
  "locale": "en",
  "revision": 6,
  "title": "Understand a pending downgrade",
  "summary": "Interpret the Cancelling billing state, confirm the paid-period end date and 14-day storage grace period, and know when Free limits apply on the account.",
  "category": "account",
  "articleSlug": "billing-pending-downgrade",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed with apps/web/src/pages/billing.tsx, apps/web/src/components/billing/cancel-dialog.tsx, apps/api/src/pages/api/billing/cancel.ts, and apps/api/src/pages/api/billing/status.ts. No Stripe session, production subscription, or external request was created.",
  "related": [
    "hc-billing-invoices",
    "hc-plan-choose"
  ],
  "keywords": [
    "pending downgrade",
    "Dosya subscription cancelling",
    "Free plan storage limit",
    "cloud storage billing"
  ]
}
---
On the Dosya Billing page, the pending downgrade state is a subscription scheduled to end at its current paid-period boundary. The page labels the subscription **Cancelling** and shows **Ends [date]**. Your plan and all subscription add-ons remain active through that date; this is not an immediate plan reduction.

After the paid period ends, Dosya keeps the old storage limit for a **14-day grace period**. When that grace ends, the Free plan's **5 GB** limit applies. Files are not automatically deleted. If total use is above the available limit, new uploads are blocked until storage is reduced or paid capacity is restored.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14.webp" alt="Billing cancellation timeline from the paid plan end date through the 14-day storage grace period to the Free plan limit." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Read the <strong>Ends</strong> date first, then plan for the separate 14-day storage grace period before the Free limit takes effect. <a class="workflow-map-full" href="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Billing** while signed into the account that owns the subscription. Billing is account-level; changing the active workspace does not select another billing customer.
2. Find the amber state panel. Confirm it says **Ends [date]** and that the subscription badge says **Cancelling**.
3. Read the current storage figure under the end date and compare it with **Storage ledger → Total limit** and the amount in use.
4. Note the paid-period end date. Until then, the current plan, add-ons, and storage entitlement remain active.
5. Add 14 days to that boundary for the storage grace window. Use the displayed date as the authoritative start because billing intervals and renewal dates differ by account.
6. If you want to keep the subscription, select **Resume subscription** before the end date. The Billing page should return to **Active** and show a renewal date.
7. If you intend to continue to Free, reduce usage toward 5 GB and empty Trash where necessary before the grace period expires.

<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Free plan storage reference used to compare the future 5 GB allowance with current account usage." width="704" height="657" loading="lazy" decoding="async" /></a><figcaption>The future Free entitlement is <strong>5 GB</strong>; compare it with current account-wide use before the scheduled subscription end. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What remains and what changes

Scheduling cancellation covers the plan, subscription add-ons, and any custom package carried on the same subscription. It does not delete stored files. Redeemed external packages and other entitlement sources are reported separately in the storage ledger and may continue according to their own status.

The page can show **Next invoice** only when an upcoming invoice exists and cancellation is not scheduled. Its absence during **Cancelling** is expected.

## Troubleshooting

If **Resume subscription** fails, the page shows the returned billing error. Refresh Billing before retrying so the local state agrees with the provider record. If the account says **No subscription**, there is no period-end cancellation to resume.

If usage exceeds the later limit, downloading files alone does not free cloud storage. Delete unneeded cloud items and empty Trash, or restore paid storage before attempting new uploads.

## Expected result

You can identify the last paid-plan date, the following 14-day storage grace period, the future 5 GB allowance, and whether resuming is still available.

## Related guides

- [Review invoices and payments](/account/invoices-and-payment)
- [Choose or change a plan](/account/choose-plan)
