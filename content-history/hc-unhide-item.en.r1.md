---
{"articleId":"hc-unhide-item","locale":"en","revision":1,"title":"Make a hidden item visible again","summary":"Make a hidden item visible again. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"unhide-item","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the make a hidden item visible again workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-lock-hide","hc-workspace-policies"],"keywords":["unhide item","file and folder protection","Dosya help"]}
---
Make a hidden item visible again is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Files → Hide in the current released Dosya client.
- Confirm the active account and workspace, then identify an item hidden from a test role.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: make a hidden item visible again

1. Open Files → Hide and confirm the active workspace.
2. Select an item hidden from a test role and check its name or identifying details.
3. Remove the relevant hidden rule and save.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the test role can locate the item again.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya protection dialog showing file lock choices and access controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Check the protection mode and affected roles before saving. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the test role can locate the item again. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Hide, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Lock and hide files](/files/lock-and-hide)
- [Workspace policies](/workspaces/policies)
