---
{"articleId":"hc-request-remove-recipient","locale":"en","revision":1,"title":"Remove a recipient from a file request","summary":"Remove a recipient from a file request. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"sharing","articleSlug":"request-remove-recipient","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the remove a recipient from a file request workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-file-request","hc-request-manage"],"keywords":["request remove recipient","file request operations","Dosya help"]}
---
Remove a recipient from a file request is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open File request recipients in the current released Dosya client.
- Confirm the active account and workspace, then identify one test recipient.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: remove a recipient from a file request

1. Open File request recipients and confirm the active workspace.
2. Select one test recipient and check its name or identifying details.
3. Remove access and confirm the change.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that that recipient no longer appears as active.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/request-recipient-management-2026-10-12.webp"><img src="/screenshots/request-recipient-management-2026-10-12.webp" alt="Dosya file-request recipient management showing invitation and status controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use a test recipient and confirm the receiving folder before sending a request. <a href="/screenshots/request-recipient-management-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and that recipient no longer appears as active. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to File request recipients, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Create a file request](/sharing/file-request)
- [Manage a file request](/sharing/manage-file-request)
