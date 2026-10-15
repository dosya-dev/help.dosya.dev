---
{"articleId":"hc-copy-file","locale":"en","revision":1,"title":"Copy a file to another folder","summary":"Copy a file to another folder. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"copy-file","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the copy a file to another folder workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-preview-files","hc-organize-files"],"keywords":["copy file","file details and copy","Dosya help"]}
---
Copy a file to another folder is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Files → Copy in the current released Dosya client.
- Confirm the active account and workspace, then identify one non-confidential file.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: copy a file to another folder

1. Open Files → Copy and confirm the active workspace.
2. Select one non-confidential file and check its name or identifying details.
3. Choose Copy, select a destination and confirm the new copy.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that both the original and copied item appear in their expected folders.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya file preview and detail surface used to confirm the selected file before an action." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the selected file and workspace before changing or copying it. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and both the original and copied item appear in their expected folders. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Copy, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Preview files](/files/preview-files)
- [Organize files](/files/organize-files)
