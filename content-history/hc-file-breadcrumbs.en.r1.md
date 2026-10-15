---
{"articleId":"hc-file-breadcrumbs","locale":"en","revision":1,"title":"Use breadcrumbs to confirm file location","summary":"Use breadcrumbs to confirm file location. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"file-breadcrumbs","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the use breadcrumbs to confirm file location workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-preview-files","hc-organize-files"],"keywords":["file breadcrumbs","file details and copy","Dosya help"]}
---
Use breadcrumbs to confirm file location is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Files and the breadcrumb trail in the current released Dosya client.
- Confirm the active account and workspace, then identify a file inside a nested test folder.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: use breadcrumbs to confirm file location

1. Open Files and the breadcrumb trail and confirm the active workspace.
2. Select a file inside a nested test folder and check its name or identifying details.
3. Follow each breadcrumb level and return to the file.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the workspace and complete parent path are clear.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya file preview and detail surface used to confirm the selected file before an action." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the selected file and workspace before changing or copying it. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the workspace and complete parent path are clear. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files and the breadcrumb trail, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Preview files](/files/preview-files)
- [Organize files](/files/organize-files)
