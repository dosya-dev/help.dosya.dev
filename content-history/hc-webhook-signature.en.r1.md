---
{"articleId":"hc-webhook-signature","locale":"en","revision":1,"title":"Verify webhook signatures","summary":"Read the raw request body, apply the documented signature algorithm and secret, reject invalid messages, and protect against replay.","category":"developers","articleSlug":"webhook-signatures","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current verify webhook signatures workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-webhook-create","hc-webhook-troubleshoot"],"keywords":["webhook signature","verify webhook","signing secret"]}
---
Signature verification proves the request was created with the webhook secret. Implement the literal current algorithm before parsing or acting on the payload.

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

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Troubleshoot deliveries](/troubleshooting/webhooks)
