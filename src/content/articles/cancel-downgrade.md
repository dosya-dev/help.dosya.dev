---
{
  "articleId": "hc-plan-cancel-downgrade",
  "locale": "en",
  "revision": 6,
  "title": "Cancel or downgrade without losing track of files",
  "summary": "Schedule cancellation or confirm a smaller plan, understand proration and storage effects, and recover safely before uploads become paused again.",
  "category": "account",
  "articleSlug": "cancel-or-downgrade",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/components/billing/cancel-dialog.tsx, apps/web/src/components/billing/plan-chooser.tsx, apps/api/src/pages/api/billing/cancel.ts, apps/api/src/pages/api/billing/subscription.ts, and apps/api/src/pages/api/billing/cron.ts on 2026-10-14. Production billing was not changed.",
  "related": [
    "hc-plan-choose",
    "hc-storage-usage",
    "hc-download-files",
    "hc-account-deletion"
  ],
  "keywords": [
    "cancel subscription",
    "downgrade plan",
    "billing end date",
    "over storage limit",
    "resume subscription",
    "cloud storage"
  ]
}
---
Cancellation and a lower plan are different operations. **Cancel subscription** schedules every subscription item to end; **Change plan** immediately submits a new item set with Stripe prorations.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cancel-or-downgrade-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cancel-or-downgrade-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cancel-or-downgrade-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cancel-or-downgrade-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cancel-or-downgrade-workflow-map-2026-10-14.webp" alt="Billing decision map separating Cancel subscription from Change plan, with period-end and immediate-update outcomes." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Cancellation shows Cancelling and an end date; a confirmed lower tier replaces the active plan through the subscription update flow. <a class="workflow-map-full" href="/screenshots/cancel-or-downgrade-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cancel-or-downgrade-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cancel-or-downgrade-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In Billing, compare owned-workspace usage with **Total limit** and the destination plan’s capacity.
2. To stop renewal, select **Cancel subscription**, read **Cancel subscription?**, then confirm. **Keep subscription** closes the dialog without changing billing.
3. The plan and every add-on remain active through the displayed end date. After that, the old limit continues for a 14-day grace period before Free’s 5 GB applies.
4. To choose a smaller paid tier instead, select **Change plan**. Dosya requires a second confirmation stating exactly which current plan/capacity is replaced by which new plan/capacity.
5. After either action, reload Billing. Cancellation shows **Cancelling**, **Ends [date]**, and **Resume subscription**; a plan change opens the success page and receipt.

Files are never automatically deleted because of cancellation or over-quota status. Once usage exceeds the effective limit, uploads pause across every owned workspace until space is freed or capacity is restored.


<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Storage ledger and Total limit used to compare owned usage with the capacity that will remain after a cancellation or downgrade." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Record each capacity contribution and the bold total before choosing a smaller allowance that could pause future uploads. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The subscription either carries a reversible period-end cancellation or reflects the confirmed smaller plan. Existing files remain readable subject to their normal permissions.

Use **Resume subscription** before the end date to undo cancellation. If a lower plan was chosen accidentally, open **Change plan** again and select the intended tier; the correction can create another Stripe proration.

## Related guides

- [Prepare an over-quota account](/account/plan-prepare-over-quota)
- [Review a pending downgrade](/account/plan-review-pending-downgrade)
