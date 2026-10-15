---
{"articleId":"hc-ai-app-permissions","locale":"en","revision":1,"title":"Review AI app permissions","summary":"Understand requested file and account scopes, select the correct workspace, and reject a connection that asks for unnecessary access.","category":"integrations","articleSlug":"ai-app-permissions","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current review ai app permissions workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-ai-app-connect","hc-api-key-scopes"],"keywords":["AI app scopes","files read scope","account access"]}
---
Scopes describe what the connected AI app can read or do. Workspace choice limits which data set those scopes apply to.

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

## Related guides

- [Connect an AI app](/integrations/ai-app-connect)
- [Understand least privilege](/developers/api-key-scopes)
