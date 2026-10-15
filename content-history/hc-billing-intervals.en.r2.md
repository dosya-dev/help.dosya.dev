---
{
  "articleId": "hc-billing-intervals",
  "locale": "en",
  "revision": 2,
  "title": "Compare monthly and annual billing",
  "summary": "Switch billing intervals and compare total and renewal date, then verify that the chosen interval is visible before checkout.",
  "category": "account",
  "articleSlug": "billing-intervals",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current compare monthly and annual billing workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-billing-invoices",
    "hc-plan-choose"
  ],
  "keywords": [
    "billing intervals",
    "billing, receipts and promotions",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to compare monthly and annual billing in the intended account or workspace.

Monthly and annual options can differ in total charge, renewal cadence and effective date. Compare the full checkout summary rather than a headline rate alone.

<figure class="help-screenshot"><a href="/screenshots/billing-intervals-workflow-map-2026-10-14.webp"><img src="/screenshots/billing-intervals-workflow-map-2026-10-14.webp" alt="Four-step interface map for compare monthly and annual billing, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/billing-intervals-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Billing plans in the current released Dosya client.
- Confirm the active account and workspace, then identify the storage plan you are considering.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: compare monthly and annual billing

1. Open Billing plans and confirm the active workspace.
2. Select the storage plan you are considering and check its name or identifying details.
3. Switch billing intervals and compare total and renewal date.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the chosen interval is visible before checkout.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Dosya plan overview showing storage and plan information before a billing change." width="704" height="657" loading="lazy" decoding="async" /></a><figcaption>Confirm the billed workspace, currency, interval and renewal date before checkout. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Before payment, confirm the selected interval, total, currency and next renewal date are all visible and consistent.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The workflow completes for the controlled test and the chosen interval is visible before checkout. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Billing plans, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Invoices and payment](/account/invoices-and-payment)
- [Choose a plan](/account/choose-plan)
