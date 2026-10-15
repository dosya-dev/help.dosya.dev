---
{"articleId":"hc-rename-folder","locale":"en","revision":1,"title":"Rename a folder without losing contents","summary":"Rename a folder without losing contents. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"rename-folder","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the rename a folder without losing contents workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-organize-files","hc-move-rename"],"keywords":["rename folder","folder management","Dosya help"]}
---
Rename a folder without losing contents is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Files → Rename in the current released Dosya client.
- Confirm the active account and workspace, then identify a test folder with a small file inside.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: rename a folder without losing contents

1. Open Files → Rename and confirm the active workspace.
2. Select a test folder with a small file inside and check its name or identifying details.
3. Change only the folder name and confirm.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the child file remains available under the new path.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Dosya destination picker showing workspace folders before a move operation." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Use the destination picker to confirm the parent folder before saving. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the child file remains available under the new path. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Rename, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files](/files/move-and-rename)
