---
{"articleId":"hc-workspace-member-verify-role-change","locale":"en","revision":1,"title":"Review access after changing a member role","summary":"Review access after changing a member role with a controlled test, clear verification, limits, and recovery steps.","category":"workspaces","articleSlug":"workspace-member-verify-role-change","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the review access after changing a member role workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-invite-team","hc-workspace-member-removal"],"keywords":["workspace member verify role change","Workspace member lifecycle","Dosya help"]}
---
Review access after changing a member role is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Workspace settings > Team in the current released client.
- Confirm the active account and workspace, then identify member whose role was just changed.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: review access after changing a member role

1. Open Workspace settings > Team and confirm the active account and workspace.
2. Locate member whose role was just changed and verify its name or identifying details.
3. Sign in as the test member or use a separate session to check navigation and one allowed and denied action.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the new role takes effect across workspace controls.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/workspace-team-overview-2026-10-12.webp"><img src="/screenshots/workspace-team-overview-2026-10-12.webp" alt="Dosya workspace team view listing members, roles, and invitation states." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a separate test member to verify access after every role or membership change. <a href="/screenshots/workspace-team-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the new role takes effect across workspace controls. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Workspace settings > Team, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Invite a team member](/workspaces/invite-team)
- [Remove a member](/workspaces/member-removal)
