---
{
  "articleId": "hc-license-manage",
  "locale": "en",
  "revision": 3,
  "title": "Manage redeemed storage packages",
  "summary": "Review active redeemed packages, their contribution and timeline, and understand how membership or expiry changes the account total.",
  "category": "account",
  "articleSlug": "manage-license-storage",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current manage redeemed storage packages workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
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
Redeemed packages stack with plan, add-on and referral storage. Billing lists active packages separately so you can see their contribution and whether they depend on a provider membership or end date.

Redeemed packages contribute storage according to their displayed status and term. Provider membership changes may affect future entitlement without deleting existing files immediately.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/manage-license-storage-workflow-map-2026-10-14.webp" data-light-href="/screenshots/manage-license-storage-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/manage-license-storage-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/manage-license-storage-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/manage-license-storage-workflow-map-2026-10-14.webp" alt="Four-step interface map for manage redeemed storage packages, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/manage-license-storage-workflow-map-2026-10-14.webp" data-light-href="/screenshots/manage-license-storage-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/manage-license-storage-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Billing in the account that redeemed the code.
- Keep the receipt and provider account available.
- Compare total used storage with capacity after any package ends.
- Do not redeem the same code into another account.

## Steps: review a redeemed package

1. Open Billing and find Redeemed packages.
2. Match the package name and provider with the receipt.
3. Read its contribution and current status.
4. Review the displayed membership interval or end date.
5. Open Manage on Gumroad when provider membership changes are required.
6. Plan cleanup or replacement capacity before a time-limited contribution ends.

<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Dosya storage ledger showing separate capacity sources that combine into the account total." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Treat redeemed packages as separate ledger contributions and plan for any displayed end condition. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Compare the package row with the receipt and account storage total. Record any end date early enough to reduce usage or add replacement capacity.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

Billing shows the active package and includes its contribution in the total storage limit.

## Limits and important details

- Provider membership controls can live outside Dosya.
- Ending a package contribution can leave the account over its new limit.
- Package storage adds together but does not merge purchase histories.
- Files are governed by the resulting allowance and current Billing message.

## Troubleshooting

**A package is missing.** Confirm the signed-in account and original redemption success.

**The contribution ended unexpectedly.** Check the provider membership or displayed end date.

**Storage is now over limit.** Free space or add sufficient capacity before starting new uploads.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email and workspace name before the action and again when verifying the result. Similar names in another workspace refer to separate cloud-storage data and access policies.

### What should I include when asking support for help?

Include the action time, client and version, active workspace, expected result and exact nonsecret error. Never include passwords, API keys, webhook secrets, recovery codes, payment details or confidential file contents.

## Related guides

- [Redeem a package](/account/redeem-license)
- [Understand storage usage](/uploading/storage-usage)
- [Cancel or downgrade safely](/account/cancel-or-downgrade)
- [Troubleshoot billing](/troubleshooting/billing)
