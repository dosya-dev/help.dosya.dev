---
{
  "articleId": "hc-plan-prepare-over-quota",
  "locale": "en",
  "revision": 5,
  "title": "Prepare an over-quota account for a plan change",
  "summary": "Prepare an account above its future limit by measuring the deficit, choosing capacity or cleanup, and protecting every existing file from data loss.",
  "category": "account",
  "articleSlug": "plan-prepare-over-quota",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/pages/billing.tsx, apps/web/src/components/billing/cancel-dialog.tsx, apps/api/src/pages/api/billing/status.ts, apps/api/src/pages/api/billing/subscription.ts, and apps/api/src/pages/api/billing/cron.ts on 2026-10-14. Production quota was not changed.",
  "related": [
    "hc-plan-upgrade-storage",
    "hc-checkout-verify"
  ],
  "keywords": [
    "plan prepare over quota",
    "Plan and storage change details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
An over-limit Billing banner means owned-workspace usage exceeds the account’s effective storage ceiling. Dosya pauses uploads across every workspace but does not delete stored files.


<figure class="help-screenshot"><a href="/screenshots/plan-prepare-over-quota-help-workflow-2026-10-14.webp"><img src="/screenshots/plan-prepare-over-quota-help-workflow-2026-10-14.webp" alt="Over the limit banner showing used storage, current ceiling, deficit, Add storage, and Free up space actions." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Resolve the displayed deficit by raising capacity or reducing counted files, then wait for used storage to fall within Total limit. <a href="/screenshots/plan-prepare-over-quota-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Read the banner’s used amount, limit, and **[size] over** figure.
2. Decide between **Add storage** and **Free up space**. Add enough capacity to cover the deficit plus the next planned upload; cleanup must reduce counted owned-workspace bytes below the limit.
3. Before a downgrade or expiring package, calculate the future limit from the destination base plan plus extras that remain active.
4. Finish or stop active uploads before changing billing, and retain local originals until the new limit is confirmed.
5. After cleanup or purchase, reload Billing and wait until used storage is no greater than **Total limit** before retrying a small upload.

Cancellation preserves paid storage through period end and then for a 14-day grace period. A confirmed plan downgrade can take effect through the subscription-update flow and create prorations; do not assume the cancellation grace applies to a deliberate tier swap.


<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Storage breakdown used to project which plan, add-on, license, and referral rows survive the planned change." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Calculate the future ceiling from contributions that remain active so uploads do not stay paused after billing changes. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The red **Over the limit** state clears after capacity rises or counted data falls. Existing cloud files remain present throughout the restriction.

If uploads stay paused, check workspace-specific limits and role upload permission in addition to the account total. Avoid duplicate checkout while Stripe synchronization is still running.

## Related guides

- [Cancel or downgrade](/account/cancel-or-downgrade)
- [Verify a storage upgrade](/account/plan-verify-storage-upgrade)
