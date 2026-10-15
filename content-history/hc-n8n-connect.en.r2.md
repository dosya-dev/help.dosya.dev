---
{
  "articleId": "hc-n8n-connect",
  "locale": "en",
  "revision": 2,
  "title": "Connect Dosya to n8n",
  "summary": "Install or select the current Dosya n8n node, configure a dedicated credential, and run a harmless connection test.",
  "category": "integrations",
  "articleSlug": "n8n-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current connect dosya to n8n workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-api-key-scopes",
    "hc-zapier-connect"
  ],
  "keywords": [
    "n8n Dosya",
    "n8n credential",
    "n8n node",
    "file upload"
  ]
}
---
Use a dedicated restricted credential for n8n so the automation can be rotated without affecting other clients.

Use a dedicated key whose scope matches the intended n8n actions. A successful credential test does not grant access outside the key’s workspace and folder boundary.

<figure class="help-screenshot"><a href="/screenshots/n8n-connect-workflow-map-2026-10-14.webp"><img src="/screenshots/n8n-connect-workflow-map-2026-10-14.webp" alt="Four-step interface map for connect dosya to n8n, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/n8n-connect-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
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

## Verify the result

List one harmless item through the Dosya node and confirm its workspace and folder before building a workflow that uploads or moves files.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

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

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email and workspace name before the action and again when verifying the result. Similar names in another workspace refer to separate cloud-storage data and access policies.

### What should I include when asking support for help?

Include the action time, client and version, active workspace, expected result and exact nonsecret error. Never include passwords, API keys, webhook secrets, recovery codes, payment details or confidential file contents.

## Related guides

- [Choose API-key permission](/developers/api-key-scopes)
- [Connect Zapier](/integrations/zapier)
