---
{
  "articleId": "hc-referrals-troubleshoot",
  "locale": "en",
  "revision": 6,
  "title": "Troubleshoot a missing referral reward",
  "summary": "Trace a missing referral reward through the public status, seven-day and 50 MiB qualification rules, daily settlement and the 25 GB reward cap.",
  "category": "troubleshooting",
  "articleSlug": "referral-rewards",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/referrals.tsx, apps/web/src/api/referrals.ts, apps/api/src/pages/api/referrals.ts, apps/api/src/lib/referrals.ts, apps/api/src/lib/referral-rules.ts, apps/api/src/lib/referral-bonus.ts, apps/cron/src/index.ts. Production behavior for “Troubleshoot a missing referral reward” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-referrals-earn",
    "hc-free-plan",
    "hc-billing-troubleshoot",
    "hc-contact-support"
  ],
  "keywords": [
    "missing referral reward",
    "referral pending",
    "bonus not credited",
    "referral troubleshooting",
    "cloud storage"
  ]
}
---
Referral rewards depend on signup attribution, account age, verified email, owned storage, daily settlement, and anti-abuse review. The public row deliberately hides private rule details.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/referral-rewards-workflow-map-2026-10-14.webp" data-light-href="/screenshots/referral-rewards-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/referral-rewards-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/referral-rewards-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/referral-rewards-workflow-map-2026-10-14.webp" alt="Four panels show locating the masked invitee, reading the public status, allowing the daily sweep, and verifying Counted with Referral bonus." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Trace signup attribution and published qualification timing before reconciling the rewarded storage or escalating privately. <a class="workflow-map-full" href="/screenshots/referral-rewards-workflow-map-2026-10-14.webp" data-light-href="/screenshots/referral-rewards-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/referral-rewards-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Refer friends** and locate the masked invited email under **Invited friends**. If no row exists, confirm privately whether the full invite URL was used during the account’s original signup.
2. Read the displayed label: **Waiting for activity**, **Under review**, **Counted**, or **Not eligible**. Internal pending or credited names are not shown to inviters.
3. For **Waiting for activity**, have the invited person verify their own email, let the account reach seven days old, and own at least 50 MiB of stored files. Do not request their password or private file links.
4. Allow the once-daily qualification sweep to run. The referral response can also remain privately cached for up to 30 seconds, so immediate repeated reloads do not force settlement.
5. When the row becomes **Counted**, compare progress with the **Referral bonus** Billing ledger line. Each qualifying friend grants 5 GB, up to five friends and 25 GB total.
6. If the result remains inconsistent, contact private support with masked email, approximate signup time, invite URL used, and visible label. Anti-abuse reasons remain private even when staff review is available.

<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Dosya account allowance panel used after a referral row becomes Counted." width="704" height="657" loading="lazy" decoding="async" /></a><figcaption>Confirm capacity only after the public referral status reports Counted and the daily settlement has run. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The missing reward is explained by absent signup attribution, **Waiting for activity**, **Under review**, **Not eligible**, daily timing, the reward cap, or a ledger discrepancy; a counted reward appears as **Referral bonus**.

A referral that never qualifies expires after 30 days. A counted reward can be revoked during the 30-day clawback window if the invited account is banned or requests deletion.

Unknown codes, self-referrals, and duplicate invited accounts are silent no-ops at signup. Visiting the link after an account already exists cannot retroactively attach that signup.

## Related guides

- [Earn referral storage](/account/referral-storage)
- [Understand Free allowances](/account/free-plan-allowances)
- [Troubleshoot billing](/troubleshooting/billing)
- [Contact support](/troubleshooting/contact-support)
