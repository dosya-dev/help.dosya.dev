---
{
  "articleId": "hc-ai-app-permissions",
  "locale": "en",
  "revision": 2,
  "title": "Review AI app permissions",
  "summary": "Understand requested file and account scopes, select the correct workspace, and reject a connection that asks for unnecessary access.",
  "category": "integrations",
  "articleSlug": "ai-app-permissions",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current review ai app permissions workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-ai-app-connect",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "AI app scopes",
    "files read scope",
    "account access",
    "cloud storage"
  ]
}
---
Scopes describe what the connected AI app can read or do. Workspace choice limits which data set those scopes apply to.

The authorization screen defines what the AI application can access now. Approve only the scopes and workspace needed for the stated task.

<figure class="help-screenshot"><a href="/screenshots/ai-app-permissions-workflow-map-2026-10-14.webp"><img src="/screenshots/ai-app-permissions-workflow-map-2026-10-14.webp" alt="Four-step interface map for review ai app permissions, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/ai-app-permissions-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: review ai app permissions

1. Open the authorization screen.
2. Verify the application name.
3. Read every requested scope.
4. Choose the smallest suitable workspace.
5. Reject or cancel when access is broader than the task.
6. After approval, test and review the saved connection.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Use a non-confidential file for the first request, then review Connected AI apps and confirm the saved client, workspace and permission set.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The review ai app permissions workflow completes for the test item and its result remains visible after a refresh or reconnect.

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
- [Understand least privilege](/developers/api-key-scopes)
