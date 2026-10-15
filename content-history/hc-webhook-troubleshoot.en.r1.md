---
{"articleId":"hc-webhook-troubleshoot","locale":"en","revision":1,"title":"Troubleshoot webhook deliveries","summary":"Diagnose unreachable endpoints, signature failures, timeouts, non-success responses, duplicates and out-of-order events.","category":"troubleshooting","articleSlug":"webhooks","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current troubleshoot webhook deliveries workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-webhook-create","hc-webhook-signature","hc-webhook-deliveries"],"keywords":["webhook failed","signature mismatch","webhook timeout"]}
---
Troubleshoot from the delivery record and receiver logs using event identifiers, never by disabling signature verification in production.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: troubleshoot webhook deliveries

1. Check the webhook is active and the event is selected.
2. Confirm the public HTTPS endpoint is reachable.
3. Match the raw body and signature secret.
4. Return a prompt documented success response.
5. Handle duplicate and out-of-order events by identifier and state.
6. Replay one test only after the receiver is fixed.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya integration setup page showing the verified connection values and guidance used by an automation client." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Copy connection values from the current integration page and keep secrets private. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The troubleshoot webhook deliveries workflow completes for the test item and its result remains visible after a refresh or reconnect.

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
- [Verify signatures](/developers/webhook-signatures)
- [Inspect deliveries](/developers/webhook-deliveries)
