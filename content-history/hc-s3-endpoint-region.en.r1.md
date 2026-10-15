---
{"articleId":"hc-s3-endpoint-region","locale":"en","revision":1,"title":"Set the endpoint and region in an S3 client","summary":"Set the endpoint and region in an S3 client. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"integrations","articleSlug":"s3-endpoint-region","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the set the endpoint and region in an s3 client workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-webdav-connect","hc-api-key-protocols"],"keywords":["s3 endpoint region","protocol client workflows","Dosya help"]}
---
Set the endpoint and region in an S3 client is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open an S3-compatible client in the current released Dosya client.
- Confirm the active account and workspace, then identify a Dosya S3 credential.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: set the endpoint and region in an S3 client

1. Open an S3-compatible client and confirm the active workspace.
2. Select a Dosya S3 credential and check its name or identifying details.
3. Enter the documented endpoint and region with path-style access when required.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the client lists the permitted bucket or prefix.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp"><img src="/screenshots/webdav-cyberduck-connection-2026-10-11.webp" alt="Cyberduck connection configured for the Dosya WebDAV endpoint." width="1040" height="750" loading="lazy" decoding="async" /></a><figcaption>Use a restricted test credential and keep its secret out of screenshots and logs. <a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the client lists the permitted bucket or prefix. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to an S3-compatible client, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Restrict protocol access](/developers/api-key-protocols)
