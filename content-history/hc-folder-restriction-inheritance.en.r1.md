---
{"articleId":"hc-folder-restriction-inheritance","locale":"en","revision":1,"title":"Understand inherited folder restrictions","summary":"Understand inherited folder restrictions. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"folder-restriction-inheritance","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the understand inherited folder restrictions workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-lock-hide","hc-workspace-policies"],"keywords":["folder restriction inheritance","file and folder protection","Dosya help"]}
---
Understand inherited folder restrictions is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Files and workspace access settings in the current released Dosya client.
- Confirm the active account and workspace, then identify a child item inside a restricted folder.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: understand inherited folder restrictions

1. Open Files and workspace access settings and confirm the active workspace.
2. Select a child item inside a restricted folder and check its name or identifying details.
3. Compare the parent restriction with the child access result.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the effective access matches the parent boundary.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya protection dialog showing file lock choices and access controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Check the protection mode and affected roles before saving. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the effective access matches the parent boundary. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files and workspace access settings, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Lock and hide files](/files/lock-and-hide)
- [Workspace policies](/workspaces/policies)
