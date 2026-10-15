---
{"articleId":"hc-rotate-protocol-key","locale":"en","revision":1,"title":"Rotate a protocol credential safely","summary":"Rotate a protocol credential safely. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"integrations","articleSlug":"rotate-protocol-key","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the rotate a protocol credential safely workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-webdav-connect","hc-api-key-protocols"],"keywords":["rotate protocol key","protocol client workflows","Dosya help"]}
---
Rotate a protocol credential safely is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open API key settings and a protocol client in the current released Dosya client.
- Confirm the active account and workspace, then identify one non-production client connection.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: rotate a protocol credential safely

1. Open API key settings and a protocol client and confirm the active workspace.
2. Select one non-production client connection and check its name or identifying details.
3. Create a replacement key, test it, then revoke the old key.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the client works with the new credential and the old one fails.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp"><img src="/screenshots/webdav-cyberduck-connection-2026-10-11.webp" alt="Cyberduck connection configured for the Dosya WebDAV endpoint." width="1040" height="750" loading="lazy" decoding="async" /></a><figcaption>Use a restricted test credential and keep its secret out of screenshots and logs. <a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the client works with the new credential and the old one fails. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to API key settings and a protocol client, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Restrict protocol access](/developers/api-key-protocols)
