---
{"articleId":"hc-batch-move-files","locale":"en","revision":1,"title":"Move several files together","summary":"Move several files together. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"batch-move-files","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the move several files together workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-organize-files","hc-move-rename"],"keywords":["batch move files","batch file actions","Dosya help"]}
---
Move several files together is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Files → Move in the current released Dosya client.
- Confirm the active account and workspace, then identify a small multi-selection.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: move several files together

1. Open Files → Move and confirm the active workspace.
2. Select a small multi-selection and check its name or identifying details.
3. Choose one destination folder and confirm the batch move.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that every selected file appears once at the destination.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/organize-files-overview-2026-10-12.webp"><img src="/screenshots/organize-files-overview-2026-10-12.webp" alt="Dosya Files overview showing the items and organization controls used for batch actions." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Review the highlighted items and selection count before applying a batch action. <a href="/screenshots/organize-files-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and every selected file appears once at the destination. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Move, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files](/files/move-and-rename)
