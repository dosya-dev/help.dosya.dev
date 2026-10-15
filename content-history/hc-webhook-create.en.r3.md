---
{
  "articleId": "hc-webhook-create",
  "locale": "en",
  "revision": 3,
  "title": "Create a webhook endpoint",
  "summary": "Register a controlled HTTPS receiver, select documented events, save the signing secret privately and trigger a test event.",
  "category": "developers",
  "articleSlug": "webhook-create",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current create a webhook endpoint workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-rest-api-connect",
    "hc-api-key"
  ],
  "keywords": [
    "create webhook",
    "webhook endpoint",
    "webhook secret",
    "cloud storage"
  ]
}
---
A webhook sends event notifications to your HTTPS endpoint. Build the receiver and verification path before enabling production events.

The receiver must use HTTPS, preserve request bytes for signature checks and return promptly. Keep the signing secret in a secret manager rather than code or logs.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-create-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-create-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-create-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-create-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-create-workflow-map-2026-10-14.webp" alt="Four-step interface map for create a webhook endpoint, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/webhook-create-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-create-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-create-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
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

## Verify the result

Trigger one harmless event, confirm a successful delivery and verify the receiver recorded its identifier exactly once.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

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

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email and workspace name before the action and again when verifying the result. Similar names in another workspace refer to separate cloud-storage data and access policies.

### What should I include when asking support for help?

Include the action time, client and version, active workspace, expected result and exact nonsecret error. Never include passwords, API keys, webhook secrets, recovery codes, payment details or confidential file contents.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [Create an API key](/developers/api-key)
