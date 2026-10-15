---
{"articleId":"hc-billing-apply-coupon","locale":"en","revision":1,"title":"Apply a promotion or coupon","summary":"Apply a promotion or coupon. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"account","articleSlug":"billing-apply-coupon","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the apply a promotion or coupon workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-billing-invoices","hc-plan-choose"],"keywords":["billing apply coupon","billing, receipts and promotions","Dosya help"]}
---
Apply a promotion or coupon is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Billing checkout in the current released Dosya client.
- Confirm the active account and workspace, then identify a valid promotion code.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: apply a promotion or coupon

1. Open Billing checkout and confirm the active workspace.
2. Select a valid promotion code and check its name or identifying details.
3. Enter the code before payment and review the updated total.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the discount and billing interval are visible before confirmation.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Dosya plan overview showing storage and plan information before a billing change." width="704" height="657" loading="lazy" decoding="async" /></a><figcaption>Confirm the billed workspace, currency, interval and renewal date before checkout. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the discount and billing interval are visible before confirmation. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Billing checkout, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Invoices and payment](/account/invoices-and-payment)
- [Choose a plan](/account/choose-plan)
