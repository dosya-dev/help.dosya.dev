---
{
  "articleId": "hc-workspace-change-role",
  "locale": "en",
  "revision": 3,
  "title": "Change a workspace member role",
  "summary": "Choose a permitted role, review access impact and save, then verify that the member list shows the new role.",
  "category": "workspaces",
  "articleSlug": "workspace-change-role",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current change a workspace member role workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-workspace-roles",
    "hc-invite-team"
  ],
  "keywords": [
    "workspace change role",
    "workspace dashboard and members",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to change a workspace member role in the intended account or workspace.

Changing a member role can immediately alter access to files, sharing and administration. Review the target role before saving.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-change-role-workflow-map-2026-10-14.webp" data-light-href="/screenshots/workspace-change-role-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/workspace-change-role-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-change-role-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-change-role-workflow-map-2026-10-14.webp" alt="Four-step interface map for change a workspace member role, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/workspace-change-role-workflow-map-2026-10-14.webp" data-light-href="/screenshots/workspace-change-role-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/workspace-change-role-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Workspace → Members in the current released Dosya client.
- Confirm the active account and workspace, then identify one test member.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: change a workspace member role

1. Open Workspace → Members and confirm the active workspace.
2. Select one test member and check its name or identifying details.
3. Choose a permitted role, review access impact and save.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the member list shows the new role.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/workspace-team-overview-2026-10-12.webp"><img src="/screenshots/workspace-team-overview-2026-10-12.webp" alt="Dosya workspace team overview showing members and invitation controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Select the intended workspace and verify your administrator role before changing membership. <a href="/screenshots/workspace-team-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Refresh the member list and test one representative permitted and restricted action with the member when practical.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The workflow completes for the controlled test and the member list shows the new role. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Workspace → Members, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Workspace roles](/workspaces/roles)
- [Invite team members](/workspaces/invite-team)
