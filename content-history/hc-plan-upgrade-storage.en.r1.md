---
{"articleId":"hc-plan-upgrade-storage","locale":"en","revision":1,"title":"Upgrade a plan or add storage","summary":"Open Billing, distinguish a plan change from a storage add-on, review the live charge, and verify the new allowance after checkout.","category":"account","articleSlug":"upgrade-storage","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed Change plan, Add storage, checkout return and billing synchronization behavior against the local current web app on 2026-10-12. No static price is asserted.","related":["hc-plan-choose","hc-storage-usage","hc-billing-invoices","hc-billing-troubleshoot"],"keywords":["upgrade plan","add storage","storage add-on","billing checkout","increase allowance"]}
---
Use **Change plan** when the base subscription should change. Use **Add storage** when you want an add-on without replacing the current plan.

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

## Related guides

- [Choose a plan](/account/choose-plan)
- [Understand storage usage](/uploading/storage-usage)
- [Find invoices and payment details](/account/invoices-and-payment)
- [Troubleshoot billing](/troubleshooting/billing)
