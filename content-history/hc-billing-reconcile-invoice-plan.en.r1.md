---
{"articleId":"hc-billing-reconcile-invoice-plan","locale":"en","revision":1,"title":"Reconcile an invoice with the active plan","summary":"Reconcile an invoice with the active plan with a controlled test, clear verification, limits, and recovery steps.","category":"account","articleSlug":"billing-reconcile-invoice-plan","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the reconcile an invoice with the active plan workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-billing-invoices","hc-billing-portal"],"keywords":["billing reconcile invoice plan","Billing invoice and payment details","Dosya help"]}
---
Reconcile an invoice with the active plan is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Account settings > Billing in the current released client.
- Confirm the active account and workspace, then identify invoice and current plan summary.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: reconcile an invoice with the active plan

1. Open Account settings > Billing and confirm the active account and workspace.
2. Locate invoice and current plan summary and verify its name or identifying details.
3. Compare plan name, billing interval, included storage, adjustments, tax, and final total.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the invoice line items explain the charge for the active billing period.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp"><img src="/screenshots/free-plan-at-a-glance-2026-10-12.webp" alt="Dosya plan view showing account billing and storage context." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Match the account, billing period, amount, and plan before using a document for records. <a href="/screenshots/free-plan-at-a-glance-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the invoice line items explain the charge for the active billing period. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Account settings > Billing, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [View invoices and payment details](/account/invoices-and-payment)
- [Open the billing portal](/account/billing-portal)
