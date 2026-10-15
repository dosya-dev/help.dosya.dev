---
{"articleId":"hc-s3-connect","locale":"en","revision":1,"title":"Connect an S3-compatible client","summary":"Configure the current Dosya S3 endpoint, workspace addressing and restricted credential, then list and transfer one sample object.","category":"integrations","articleSlug":"s3-connect","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current connect an s3-compatible client workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-api-key-protocols","hc-api-key-folder"],"keywords":["S3 client","S3 endpoint","S3 compatible"]}
---
Dosya provides an S3-compatible gateway for supported object operations; compatibility does not imply every AWS service feature.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: connect an s3-compatible client

1. Open Integrations → S3.
2. Copy the current endpoint and workspace or bucket value.
3. Create an S3-enabled restricted key.
4. Configure a new profile in the client.
5. List the workspace and upload one sample.
6. Download and compare the sample, then revoke the test key.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The connect an s3-compatible client workflow completes for the test item and its result remains visible after a refresh or reconnect.

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
