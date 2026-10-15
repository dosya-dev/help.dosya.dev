---
{
  "articleId": "hc-license-redeem",
  "locale": "en",
  "revision": 2,
  "title": "Redeem a storage license or coupon",
  "summary": "Enter a Gumroad license or Dosya coupon, sign in to a verified account, review the package, and confirm the added storage.",
  "category": "account",
  "articleSlug": "redeem-license",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current redeem a storage license or coupon workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
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
The redemption flow swaps the raw code for a one-time claim, then asks a signed-in verified Dosya account to review and accept the storage package.

Review the package contribution, term and account email before accepting it. Codes and license keys are credentials and should remain out of screenshots and support posts.

<figure class="help-screenshot"><a href="/screenshots/redeem-license-workflow-map-2026-10-14.webp"><img src="/screenshots/redeem-license-workflow-map-2026-10-14.webp" alt="Four-step interface map for redeem a storage license or coupon, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/redeem-license-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Copy the code from the trusted receipt, Gumroad library or promotion.
- Choose the Dosya account that should permanently receive the package.
- Verify that account email before activation.
- Keep the code private and use the official Redeem page.

## Steps: redeem the package

1. Open Redeem and choose Gumroad license or Coupon code.
2. Enter the complete code and continue.
3. Sign in if requested; the held claim returns you to the package review.
4. Verify the package name, storage contribution, interval or end date, and account email.
5. Select Accept package.
6. Confirm the success message and new total storage, then open Billing to verify the package ledger row.

<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Dosya storage breakdown showing how an added package contributes alongside plan and other account storage sources." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>After redemption, confirm the package contribution in the storage ledger rather than relying only on the success screen. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm the success state, Billing ledger row and updated storage total before uploading files that depend on the added capacity.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The package is attached to the verified account and contributes its stated bytes to total storage.

## Limits and important details

- A Gumroad license can belong to only one Dosya account.
- Voucher codes can be invalid, used or expired.
- A package can depend on an active membership or a stated end date.
- Redemption does not change workspace hard limits.

## Troubleshooting

**The account requires verification.** Verify its email, then return to the held claim in the same tab.

**The code is already linked.** Sign in to the owning account or contact private support with purchase proof.

**A retryable error appears.** Use Retry; the one-time claim remains held in that tab.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email and workspace name before the action and again when verifying the result. Similar names in another workspace refer to separate cloud-storage data and access policies.

### What should I include when asking support for help?

Include the action time, client and version, active workspace, expected result and exact nonsecret error. Never include passwords, API keys, webhook secrets, recovery codes, payment details or confidential file contents.

## Related guides

- [Manage redeemed storage](/account/manage-license-storage)
- [Verify a plan or storage change](/account/verify-plan-change)
- [Understand storage usage](/uploading/storage-usage)
- [Contact support](/troubleshooting/contact-support)
