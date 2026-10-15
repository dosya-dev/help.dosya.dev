---
{"articleId":"hc-sftp-connect","locale":"en","revision":1,"title":"Connect an SFTP client","summary":"Use the current host, port and supported credential to connect an SFTP client, select the workspace and verify a sample transfer.","category":"integrations","articleSlug":"sftp-connect","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current connect an sftp client workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-api-key-protocols","hc-api-key-folder"],"keywords":["SFTP connection","SFTP host","SFTP credential"]}
---
SFTP uses SSH transport and its current Dosya connection values. Copy them from the integration page rather than assuming a host or port.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: connect an sftp client

1. Open Integrations → SFTP.
2. Copy the current host, port and username format.
3. Create or select an SFTP-enabled credential.
4. Add the connection in a current SFTP client.
5. Verify the host prompt through the supported trust process.
6. List, upload and download one harmless sample.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The connect an sftp client workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Related guides

- [Limit protocol surfaces](/developers/api-key-protocols)
- [Restrict a key to a folder](/developers/api-key-folder-access)
