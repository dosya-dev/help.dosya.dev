---
{
  "articleId": "hc-billing-troubleshoot",
  "locale": "en",
  "revision": 3,
  "title": "Troubleshoot a failed payment or unexpected bill",
  "summary": "Reconcile the current plan, storage items, invoice and checkout result, then update payment details or contact support with safe references.",
  "category": "troubleshooting",
  "articleSlug": "billing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current troubleshoot a failed payment or unexpected bill workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-billing-invoices",
    "hc-plan-upgrade-storage",
    "hc-plan-cancel-downgrade",
    "hc-contact-support"
  ],
  "keywords": [
    "payment failed",
    "unexpected invoice",
    "billing error",
    "duplicate charge",
    "checkout pending",
    "subscription problem",
    "cloud storage"
  ]
}
---
Use the Billing statement and invoice rows to identify what changed before retrying payment. A plan, add-on, redeemed package and referral bonus appear as different storage sources.

Start with the current plan statement, storage ledger, next invoice and invoice history. These separate allowance questions from payment and synchronization problems.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/billing-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/billing-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/billing-workflow-map-2026-10-14.webp" alt="Four-step interface map for troubleshoot a failed payment or unexpected bill, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/billing-workflow-map-2026-10-14.webp" data-light-href="/screenshots/billing-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/billing-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Record the invoice ID, amount, date and status without copying card details.
- Check the plan, interval, storage add-ons and cancellation state.
- Look for a checkout receipt before attempting payment again.
- Keep billing questions in private support.

## Steps: reconcile the bill

1. Open **Billing** and read the subscription statement.
2. Compare the storage ledger with the expected plan, add-ons, packages and referral bonus.
3. Review **Next invoice** and the invoice list.
4. If payment details need attention, open the supported portal.
5. After a recent checkout, wait briefly and reload Billing once.
6. Escalate with invoice ID, time, displayed status and expected change—never a full card number.

<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Dosya storage breakdown used to reconcile the plan allowance and additional storage sources with a billing statement." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Reconcile each storage source with Billing before treating the total as an unexplained plan charge. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Match the invoice or checkout reference, amount, status and time. Use the supported billing portal for card changes and never send a full card number to support.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

You can identify the subscription state and invoice involved, update payment details through the portal, or provide support with a precise nonsecret billing reference.

## Limits and safe escalation

- Banks and the payment provider can decline a charge without exposing the reason to Dosya.
- Taxes, currency conversion and promotional pricing depend on the actual invoice.
- Retrying payment repeatedly can complicate diagnosis.
- Public comments must not contain invoices, private URLs or payment details.

## Troubleshooting by symptom

**Checkout returned but the plan is unchanged.** Verify the receipt, wait briefly and reload once before trying again.

**The invoice amount changed.** Compare interval, plan items, add-ons and taxes with the previous invoice.

**A charge appears duplicated.** Do not retry. Contact private support with both dates, amounts and invoice or receipt references.

**The portal reports an error.** Preserve its nonsecret message and time, then contact support.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Find invoices and payment details](/account/invoices-and-payment)
- [Upgrade or add storage](/account/upgrade-storage)
- [Cancel or downgrade](/account/cancel-or-downgrade)
- [Contact private support](/troubleshooting/contact-support)
