---
{"articleId":"hc-workspace-role-file-access","locale":"en","revision":1,"title":"Grant file access in a custom role","summary":"Grant file access in a custom role with a controlled test, clear verification, limits, and recovery steps.","category":"workspaces","articleSlug":"workspace-role-file-access","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the grant file access in a custom role workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-workspace-roles","hc-workspace-change-role"],"keywords":["workspace role file access","Workspace custom roles","Dosya help"]}
---
Grant file access in a custom role is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Workspace settings > Roles in the current released client.
- Confirm the active account and workspace, then identify file-access permissions in the role editor.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: grant file access in a custom role

1. Open Workspace settings > Roles and confirm the active account and workspace.
2. Locate file-access permissions in the role editor and verify its name or identifying details.
3. Enable only the browse, upload, edit, or delete capabilities required.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that a test member can perform only the selected file actions.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp"><img src="/screenshots/workspace-custom-role-editor-2026-10-12.webp" alt="Dosya custom role editor showing workspace permissions before assignment." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Grant the smallest permission set and test it with a non-administrator account. <a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and a test member can perform only the selected file actions. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Workspace settings > Roles, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Understand roles](/workspaces/roles)
- [Change a member role](/workspaces/workspace-change-role)
