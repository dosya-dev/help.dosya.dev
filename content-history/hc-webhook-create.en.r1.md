---
{"articleId":"hc-webhook-create","locale":"en","revision":1,"title":"Create a webhook endpoint","summary":"Register a controlled HTTPS receiver, select documented events, save the signing secret privately and trigger a test event.","category":"developers","articleSlug":"webhook-create","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current create a webhook endpoint workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-rest-api-connect","hc-api-key"],"keywords":["create webhook","webhook endpoint","webhook secret"]}
---
A webhook sends event notifications to your HTTPS endpoint. Build the receiver and verification path before enabling production events.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: create a webhook endpoint

1. Create a controlled HTTPS test endpoint.
2. Open Integrations → Webhooks and select Create.
3. Enter the endpoint URL and documented events.
4. Save the signing secret in a secret manager.
5. Create the webhook.
6. Trigger one harmless event and inspect its delivery.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya integration setup page showing the verified connection values and guidance used by an automation client." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Copy connection values from the current integration page and keep secrets private. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The create a webhook endpoint workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [Create an API key](/developers/api-key)
