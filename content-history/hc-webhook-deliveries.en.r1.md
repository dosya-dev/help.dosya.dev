---
{"articleId":"hc-webhook-deliveries","locale":"en","revision":1,"title":"Inspect webhook deliveries","summary":"Use delivery history to compare event, endpoint response and retry state, then replay or reproduce safely when supported.","category":"developers","articleSlug":"webhook-deliveries","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current inspect webhook deliveries workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-webhook-events","hc-webhook-troubleshoot"],"keywords":["webhook delivery","delivery log","webhook retry"]}
---
Delivery history connects a product event with the request sent to the receiver and its response outcome.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: inspect webhook deliveries

1. Open the webhook and its delivery history.
2. Select the failed or delayed event.
3. Compare event type, time and endpoint.
4. Read status and redacted response details.
5. Fix the receiver before using any supported replay.
6. Confirm the handler processes a duplicate idempotently.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya integration setup page showing the verified connection values and guidance used by an automation client." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Copy connection values from the current integration page and keep secrets private. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The inspect webhook deliveries workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Related guides

- [Choose webhook events](/developers/webhook-events)
- [Troubleshoot webhooks](/troubleshooting/webhooks)
