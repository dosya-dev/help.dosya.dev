---
{
  "articleId": "hc-webhook-signature",
  "locale": "en",
  "revision": 3,
  "title": "Verify webhook signatures",
  "summary": "Read the raw request body, apply the documented signature algorithm and secret, reject invalid messages, and protect against replay.",
  "category": "developers",
  "articleSlug": "webhook-signatures",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current verify webhook signatures workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-webhook-create",
    "hc-webhook-troubleshoot"
  ],
  "keywords": [
    "webhook signature",
    "verify webhook",
    "signing secret",
    "cloud storage"
  ]
}
---
Signature verification proves the request was created with the webhook secret. Implement the literal current algorithm before parsing or acting on the payload.

Signature verification must use the unmodified raw request bytes and the correct endpoint secret. Parse or transform the body only after authentication succeeds.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-signatures-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-signatures-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" alt="Four-step interface map for verify webhook signatures, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-signatures-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-signatures-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: verify webhook signatures

1. Store the signing secret outside source control.
2. Read the current signature header and algorithm reference.
3. Preserve the raw request bytes.
4. Compute and compare the signature in constant time.
5. Reject missing or invalid signatures before processing.
6. Apply documented timestamp or replay protections when provided.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya integration setup page showing the verified connection values and guidance used by an automation client." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Copy connection values from the current integration page and keep secrets private. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Test one valid delivery and one deliberately invalid signature in a controlled environment. Confirm invalid requests are rejected before any business action.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The verify webhook signatures workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email and workspace name before the action and again when verifying the result. Similar names in another workspace refer to separate cloud-storage data and access policies.

### What should I include when asking support for help?

Include the action time, client and version, active workspace, expected result and exact nonsecret error. Never include passwords, API keys, webhook secrets, recovery codes, payment details or confidential file contents.

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Troubleshoot deliveries](/troubleshooting/webhooks)
