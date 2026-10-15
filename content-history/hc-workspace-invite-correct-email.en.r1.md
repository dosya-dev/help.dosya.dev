---
{"articleId":"hc-workspace-invite-correct-email","locale":"en","revision":1,"title":"Correct a workspace invitation sent to the wrong email","summary":"Correct a workspace invitation sent to the wrong email with a controlled test, clear verification, limits, and recovery steps.","category":"workspaces","articleSlug":"workspace-invite-correct-email","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the correct a workspace invitation sent to the wrong email workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-workspace-pending-invites","hc-workspace-invite-links"],"keywords":["workspace invite correct email","Workspace invitation security","Dosya help"]}
---
Correct a workspace invitation sent to the wrong email is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Workspace settings > Team > Pending invitations in the current released client.
- Confirm the active account and workspace, then identify pending invitation with an incorrect recipient address.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: correct a workspace invitation sent to the wrong email

1. Open Workspace settings > Team > Pending invitations and confirm the active account and workspace.
2. Locate pending invitation with an incorrect recipient address and verify its name or identifying details.
3. Revoke the incorrect invitation, create a new invitation for the verified address, and recheck the role.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that only the intended address has a valid invitation.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/workspace-pending-2026-10-10.webp"><img src="/screenshots/workspace-pending-2026-10-10.webp" alt="Dosya pending invitations list with recipient, role, and invitation controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Treat invitation links as access credentials until they are accepted, expired, or revoked. <a href="/screenshots/workspace-pending-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and only the intended address has a valid invitation. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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
