---
{"articleId":"hc-n8n-connect","locale":"en","revision":1,"title":"Connect Dosya to n8n","summary":"Install or select the current Dosya n8n node, configure a dedicated credential, and run a harmless connection test.","category":"integrations","articleSlug":"n8n-connect","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current connect dosya to n8n workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-api-key-scopes","hc-zapier-connect"],"keywords":["n8n Dosya","n8n credential","n8n node"]}
---
Use a dedicated restricted credential for n8n so the automation can be rotated without affecting other clients.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: connect dosya to n8n

1. Open Integrations → n8n and read the current setup.
2. Install or select the supported Dosya node.
3. Create a dedicated least-privilege key.
4. Enter the endpoint and secret in n8n credentials.
5. Run the credential test.
6. List a test workspace item before building the workflow.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya integration setup page showing the verified connection values and guidance used by an automation client." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Copy connection values from the current integration page and keep secrets private. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The connect dosya to n8n workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Related guides

- [Choose API-key permission](/developers/api-key-scopes)
- [Connect Zapier](/integrations/zapier)
