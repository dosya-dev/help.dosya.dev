---
{"articleId":"hc-workspace-invite-revoke-stale","locale":"en","revision":1,"title":"Revoke a stale workspace invitation","summary":"Revoke a stale workspace invitation with a controlled test, clear verification, limits, and recovery steps.","category":"workspaces","articleSlug":"workspace-invite-revoke-stale","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the revoke a stale workspace invitation workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-workspace-pending-invites","hc-workspace-invite-links"],"keywords":["workspace invite revoke stale","Workspace invitation security","Dosya help"]}
---
Revoke a stale workspace invitation is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Workspace settings > Team > Pending invitations in the current released client.
- Confirm the active account and workspace, then identify old invitation that should no longer grant access.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: revoke a stale workspace invitation

1. Open Workspace settings > Team > Pending invitations and confirm the active account and workspace.
2. Locate old invitation that should no longer grant access and verify its name or identifying details.
3. Choose Revoke or Remove, confirm, and test the previous invitation only with a disposable account.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the old invitation can no longer be accepted.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/workspace-pending-2026-10-10.webp"><img src="/screenshots/workspace-pending-2026-10-10.webp" alt="Dosya pending invitations list with recipient, role, and invitation controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Treat invitation links as access credentials until they are accepted, expired, or revoked. <a href="/screenshots/workspace-pending-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the old invitation can no longer be accepted. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Workspace settings > Team > Pending invitations, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Review pending invitations](/workspaces/workspace-pending-invites)
- [Use invitation links](/workspaces/invite-links)
