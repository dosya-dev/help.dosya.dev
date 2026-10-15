---
{
  "articleId": "hc-plan-upgrade-storage",
  "locale": "en",
  "revision": 3,
  "title": "Upgrade a plan or add storage",
  "summary": "Open Billing, distinguish a plan change from a storage add-on, review the live charge, and verify the new allowance after checkout.",
  "category": "account",
  "articleSlug": "upgrade-storage",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current upgrade a plan or add storage workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-plan-choose",
    "hc-storage-usage",
    "hc-billing-invoices",
    "hc-billing-troubleshoot"
  ],
  "keywords": [
    "upgrade plan",
    "add storage",
    "storage add-on",
    "billing checkout",
    "increase allowance",
    "cloud storage"
  ]
}
---
Use **Change plan** when the base subscription should change. Use **Add storage** when you want an add-on without replacing the current plan.

A plan change and a storage add-on affect Billing differently. Review the live amount, interval and resulting allowance before completing checkout.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/upgrade-storage-workflow-map-2026-10-14.webp" data-light-href="/screenshots/upgrade-storage-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/upgrade-storage-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/upgrade-storage-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/upgrade-storage-workflow-map-2026-10-14.webp" alt="Four-step interface map for upgrade a plan or add storage, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/upgrade-storage-workflow-map-2026-10-14.webp" data-light-href="/screenshots/upgrade-storage-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/upgrade-storage-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Confirm current usage, plan, interval and billing-owner access.
- Decide whether you need a plan feature change or only more capacity.
- Review the live total and effective terms before paying.
- Keep the checkout tab open until it returns to Dosya.

## Steps: increase storage

1. Open **Billing**.
2. Select **Change plan** for a base plan change, or **Add storage** for capacity attached to the existing subscription.
3. Choose the live option and review its interval, quantity and amount.
4. Complete the supported checkout.
5. Wait for the success page and billing synchronization.
6. Return to Billing and verify the storage ledger and total limit before retrying a failed upload.

<figure class="help-screenshot"><a href="/screenshots/storage-quota-error-2026-10-12.webp"><img src="/screenshots/storage-quota-error-2026-10-12.webp" alt="Dosya storage limit message shown when an upload cannot continue until space is freed or the applicable allowance is increased." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>When quota blocks uploads, compare cleanup with the live plan and add-on choices before changing billing. <a href="/screenshots/storage-quota-error-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Match the success page with the Billing ledger and total storage, then retry one small upload only after the new allowance is visible.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The ledger includes the updated plan or add-on, and the total storage limit reflects it. New uploads can proceed if no tighter workspace or role limit applies.

## Limits and timing

- The checkout displays the authoritative charge and timing.
- Billing synchronization can take a short time after return.
- Add storage does not change the base plan.
- Existing workspace caps can still block a large upload.

## Troubleshooting

**Checkout succeeded but Billing is unchanged.** Wait briefly, reload once, and check the checkout email before retrying payment.

**Add storage opened plan choices.** Close the chooser and reopen it from the dedicated **Add storage** action.

**Uploads remain paused.** Compare new account allowance with workspace caps and actual used bytes.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email and workspace name before the action and again when verifying the result. Similar names in another workspace refer to separate cloud-storage data and access policies.

### What should I include when asking support for help?

Include the action time, client and version, active workspace, expected result and exact nonsecret error. Never include passwords, API keys, webhook secrets, recovery codes, payment details or confidential file contents.

## Related guides

- [Choose a plan](/account/choose-plan)
- [Understand storage usage](/uploading/storage-usage)
- [Find invoices and payment details](/account/invoices-and-payment)
- [Troubleshoot billing](/troubleshooting/billing)
