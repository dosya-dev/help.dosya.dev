---
{"articleId":"hc-workspace-resend-invite","locale":"en","revision":1,"title":"Resend a workspace invitation","summary":"Resend a workspace invitation. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"workspaces","articleSlug":"workspace-resend-invite","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the resend a workspace invitation workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-workspace-roles","hc-invite-team"],"keywords":["workspace resend invite","workspace dashboard and members","Dosya help"]}
---
Resend a workspace invitation is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Workspace → Members in the current released Dosya client.
- Confirm the active account and workspace, then identify one pending test invitation.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: resend a workspace invitation

1. Open Workspace → Members and confirm the active workspace.
2. Select one pending test invitation and check its name or identifying details.
3. Choose Resend and confirm the recipient address.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the invitation shows a new sent time.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/workspace-team-overview-2026-10-12.webp"><img src="/screenshots/workspace-team-overview-2026-10-12.webp" alt="Dosya workspace team overview showing members and invitation controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Select the intended workspace and verify your administrator role before changing membership. <a href="/screenshots/workspace-team-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the invitation shows a new sent time. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Workspace → Members, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Workspace roles](/workspaces/roles)
- [Invite team members](/workspaces/invite-team)
