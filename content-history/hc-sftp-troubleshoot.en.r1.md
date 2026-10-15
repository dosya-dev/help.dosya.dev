---
{"articleId":"hc-sftp-troubleshoot","locale":"en","revision":1,"title":"Troubleshoot an SFTP connection","summary":"Diagnose host, port, username, credential, host-key, permission and transfer failures without exposing the secret.","category":"troubleshooting","articleSlug":"sftp","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current troubleshoot an sftp connection workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-sftp-connect","hc-api-key-revoke"],"keywords":["SFTP unauthorized","SFTP host key","SFTP transfer failed"]}
---
Begin with the connection values shown by the current integration and one directory listing before testing large transfers.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: troubleshoot an sftp connection

1. Read the client log without copying the secret.
2. Confirm host, port and username format.
3. Check the credential is enabled for SFTP.
4. Review a changed host-key warning carefully.
5. Test a harmless list in the anchored folder.
6. Compare transfer failure with permission, quota and file policy.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The troubleshoot an sftp connection workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Related guides

- [Connect SFTP](/integrations/sftp-connect)
- [Revoke a key](/developers/revoke-api-key)
