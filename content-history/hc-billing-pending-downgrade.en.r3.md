---
{
  "articleId": "hc-billing-pending-downgrade",
  "locale": "en",
  "revision": 3,
  "title": "Understand a pending downgrade",
  "summary": "Review its effective date and storage consequences, then verify that the current and future plan are both clear.",
  "category": "account",
  "articleSlug": "billing-pending-downgrade",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current understand a pending downgrade workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-billing-invoices",
    "hc-plan-choose"
  ],
  "keywords": [
    "billing pending downgrade",
    "billing, receipts and promotions",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to understand a pending downgrade in the intended account or workspace.

A pending downgrade leaves the current plan active until the displayed effective date. The future allowance may be lower than current storage usage.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14.webp" alt="Four-step interface map for understand a pending downgrade, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-pending-downgrade-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Billing settings in the current released Dosya client.
- Confirm the active account and workspace, then identify a scheduled plan change.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: understand a pending downgrade

1. Open Billing settings and confirm the active workspace.
2. Select a scheduled plan change and check its name or identifying details.
3. Review its effective date and storage consequences.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the current and future plan are both clear.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Dosya plan overview showing storage and plan information before a billing change." width="704" height="657" loading="lazy" decoding="async" /></a><figcaption>Confirm the billed workspace, currency, interval and renewal date before checkout. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm the current plan, target plan, effective date and future storage impact. Prepare cleanup or alternative capacity before the scheduled change.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The workflow completes for the controlled test and the current and future plan are both clear. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Billing settings, confirm the active workspace and check that your role permits the action.

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
