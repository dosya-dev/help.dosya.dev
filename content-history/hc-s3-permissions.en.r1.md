---
{"articleId":"hc-s3-permissions","locale":"en","revision":1,"title":"Restrict S3 client permissions","summary":"Combine API-key operation, protocol and folder restrictions for an S3 client and prove an outside request is denied.","category":"developers","articleSlug":"s3-permissions","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current restrict s3 client permissions workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-s3-connect","hc-api-key-scopes","hc-api-key-folder"],"keywords":["S3 permissions","S3 access denied","S3 scoped key"]}
---
S3 access follows the credential permission, S3 surface, workspace anchor, folder anchor and account role together.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: restrict s3 client permissions

1. Create a credential limited to S3.
2. Choose read, upload or full operation permission.
3. Anchor it to the required workspace and folder.
4. Configure the client with that key.
5. Perform one allowed object operation.
6. Attempt one outside the anchor and confirm denial.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The restrict s3 client permissions workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Related guides

- [Connect S3](/integrations/s3-connect)
- [Choose key permission](/developers/api-key-scopes)
- [Restrict a folder](/developers/api-key-folder-access)
