---
{
  "articleId": "hc-referrals-earn",
  "locale": "en",
  "revision": 6,
  "title": "Earn and check referral storage",
  "summary": "Earn 5 GB for each of five qualifying friends, understand the seven-day and 50 MB rules, and accurately track pending, held or credited rewards.",
  "category": "account",
  "articleSlug": "referral-storage",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/pages/referrals.tsx, apps/api/src/lib/referral-bonus.ts, apps/api/src/lib/referral-rules.ts, and apps/api/src/lib/referrals.ts on 2026-10-14. Production referral crediting was not exercised.",
  "related": [
    "hc-referrals-troubleshoot",
    "hc-free-plan",
    "hc-storage-usage",
    "hc-plan-choose"
  ],
  "keywords": [
    "referral storage",
    "invite friend",
    "referral link",
    "bonus storage",
    "referral status",
    "cloud storage"
  ]
}
---
The referral program adds 5 GB per qualifying friend for at most five credited friends, so the account can earn up to 25 GB.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/referral-storage-workflow-map-2026-10-14.webp" data-light-href="/screenshots/referral-storage-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/referral-storage-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/referral-storage-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/referral-storage-workflow-map-2026-10-14.webp" alt="Referral page showing Your invite link, Copy and Copied states, friend qualification, and earned-storage progress." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Track each masked invitee until the qualifying status credits 5 GB, then confirm progress toward the five-friend ceiling. <a class="workflow-map-full" href="/screenshots/referral-storage-workflow-map-2026-10-14.webp" data-light-href="/screenshots/referral-storage-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/referral-storage-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Refer friends** and select **Copy** beside **Your invite link**. The label changes to **Copied** for two seconds.
2. Ask the friend to create their own account through that link, verify their email, keep the account for at least seven days, and own at least 50 MB of stored data.
3. Return to **Invited friends**. Dosya checks qualification daily and displays a masked email plus a status such as pending, credited, held, blocked, expired, or revoked.
4. Confirm the progress text **[count] of 5 friends counted** and **+[size] earned**.
5. Open Billing and find **Referral bonus** in **Storage ledger**; it contributes to the bold total.

Unqualified referrals expire after 30 days. Same-network referrals can be blocked, three sign-ups within one hour can be held for review, and a credited bonus can be revoked if the invitee is banned or requests deletion within 30 days after credit.


<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Free plan storage view where a credited Referral bonus increases the account total without creating a paid subscription." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The referral contribution appears as its own ledger row and stacks with the base allowance after qualification completes. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Each eligible friend adds exactly 5 GB until the five-reward ceiling is reached, and the Billing total includes the credited bonus.

**Failed to load your referrals. Please try again.** means the summary request failed. A pending row before day seven or 50 MB is expected; held and blocked results require review rather than repeated invitations.

## Related guides

- [Understand storage usage](/uploading/storage-usage)
- [Choose a plan](/account/choose-plan)
