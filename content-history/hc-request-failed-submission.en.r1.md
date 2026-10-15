---
{"articleId":"hc-request-failed-submission","locale":"en","revision":1,"title":"Track a failed file-request submission","summary":"Track a failed file-request submission. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"sharing","articleSlug":"request-failed-submission","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the track a failed file-request submission workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-file-request","hc-request-manage"],"keywords":["request failed submission","file request operations","Dosya help"]}
---
Track a failed file-request submission is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open File request details in the current released Dosya client.
- Confirm the active account and workspace, then identify one controlled failed upload.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: track a failed file-request submission

1. Open File request details and confirm the active workspace.
2. Select one controlled failed upload and check its name or identifying details.
3. Review its error, limits and recipient status before retrying.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the retry either completes or provides a specific actionable error.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/request-recipient-management-2026-10-12.webp"><img src="/screenshots/request-recipient-management-2026-10-12.webp" alt="Dosya file-request recipient management showing invitation and status controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use a test recipient and confirm the receiving folder before sending a request. <a href="/screenshots/request-recipient-management-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the retry either completes or provides a specific actionable error. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to File request details, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Create a file request](/sharing/file-request)
- [Manage a file request](/sharing/manage-file-request)
