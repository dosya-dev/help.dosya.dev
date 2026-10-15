---
{
  "articleId": "hc-ai-app-disconnect",
  "locale": "en",
  "revision": 2,
  "title": "Disconnect an AI app",
  "summary": "Remove a saved AI application grant, confirm the app can no longer read the workspace, and understand that prior copies remain outside Dosya.",
  "category": "integrations",
  "articleSlug": "disconnect-ai-app",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current disconnect an ai app workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-ai-app-connect",
    "hc-sessions"
  ],
  "keywords": [
    "disconnect AI app",
    "revoke app access",
    "connected apps",
    "cloud storage"
  ]
}
---
Disconnect the exact application and workspace grant when the integration is no longer trusted or needed.

Disconnecting removes the saved Dosya grant for that client. It cannot erase files or data the external application copied before access was revoked.

<figure class="help-screenshot"><a href="/screenshots/disconnect-ai-app-workflow-map-2026-10-14.webp"><img src="/screenshots/disconnect-ai-app-workflow-map-2026-10-14.webp" alt="Four-step interface map for disconnect an ai app, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/disconnect-ai-app-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: disconnect an ai app

1. Open Profile → Connected AI apps.
2. Match the client and workspace.
3. Select Disconnect on the exact row.
4. Wait for the row to disappear.
5. Retry a harmless app request and confirm denial.
6. Review sessions and other credentials separately.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After the connection row disappears, retry one harmless request from the app and confirm it must authorize again or receives an access denial.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The disconnect an ai app workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Connect an AI app](/integrations/ai-app-connect)
- [Review sessions](/account/sessions)
