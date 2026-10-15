---
{"articleId":"hc-ai-app-disconnect","locale":"en","revision":1,"title":"Disconnect an AI app","summary":"Remove a saved AI application grant, confirm the app can no longer read the workspace, and understand that prior copies remain outside Dosya.","category":"integrations","articleSlug":"disconnect-ai-app","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current disconnect an ai app workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-ai-app-connect","hc-sessions"],"keywords":["disconnect AI app","revoke app access","connected apps"]}
---
Disconnect the exact application and workspace grant when the integration is no longer trusted or needed.

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

## Related guides

- [Connect an AI app](/integrations/ai-app-connect)
- [Review sessions](/account/sessions)
