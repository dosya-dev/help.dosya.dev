---
{
  "articleId": "hc-ai-app-connect",
  "locale": "en",
  "revision": 3,
  "title": "Connect an AI app to Dosya",
  "summary": "Review the app identity, choose a workspace and scopes, approve the connection, and verify a harmless read before sharing sensitive files.",
  "category": "integrations",
  "articleSlug": "ai-app-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current connect an ai app to dosya workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-ai-app-permissions",
    "hc-ai-app-disconnect",
    "hc-suspicious-activity"
  ],
  "keywords": [
    "connect AI app",
    "ChatGPT connection",
    "Claude connection",
    "cloud storage"
  ]
}
---
AI app authorization grants selected access to a third-party client. Confirm the client, workspace and scopes on every approval.

An AI connection grants an external client access within the selected workspace and scopes. Start with the smallest useful permission set and harmless content.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/ai-app-connect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/ai-app-connect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" alt="Four-step interface map for connect an ai app to dosya, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/ai-app-connect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: connect an ai app to dosya

1. Open the supported AI app connection request.
2. Verify the client name and callback context.
3. Choose the intended workspace.
4. Review each requested scope.
5. Approve only the access needed.
6. Test with one non-confidential file and review the connection list.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Read one non-confidential item, then inspect Connected AI apps to confirm the client name, workspace and saved permissions match the authorization screen.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The connect an ai app to dosya workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Review AI app permissions](/integrations/ai-app-permissions)
- [Disconnect an AI app](/integrations/disconnect-ai-app)
- [Respond to suspicious activity](/account/suspicious-activity)
