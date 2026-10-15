---
{"articleId":"hc-billing-intervals","locale":"en","revision":1,"title":"Compare monthly and annual billing","summary":"Compare monthly and annual billing. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"account","articleSlug":"billing-intervals","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the compare monthly and annual billing workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-billing-invoices","hc-plan-choose"],"keywords":["billing intervals","billing, receipts and promotions","Dosya help"]}
---
Compare monthly and annual billing is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

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

## Related guides

- [Invoices and payment](/account/invoices-and-payment)
- [Choose a plan](/account/choose-plan)
