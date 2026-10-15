---
{
  "articleId": "hc-workspace-delete-preview",
  "locale": "en",
  "revision": 2,
  "title": "Preview workspace deletion impact",
  "summary": "Open the deletion preview and review files, members and linked resources, then verify that you can cancel before destructive confirmation.",
  "category": "workspaces",
  "articleSlug": "workspace-delete-preview",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current preview workspace deletion impact workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-workspace-roles",
    "hc-invite-team"
  ],
  "keywords": [
    "workspace delete preview",
    "workspace dashboard and members",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to preview workspace deletion impact in the intended account or workspace.

The deletion preview is the final place to understand affected files, members and linked resources without committing the destructive action.

<figure class="help-screenshot"><a href="/screenshots/workspace-delete-preview-workflow-map-2026-10-14.webp"><img src="/screenshots/workspace-delete-preview-workflow-map-2026-10-14.webp" alt="Four-step interface map for preview workspace deletion impact, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/workspace-delete-preview-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Workspace → Danger zone in the current released Dosya client.
- Confirm the active account and workspace, then identify a disposable test workspace.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: preview workspace deletion impact

1. Open Workspace → Danger zone and confirm the active workspace.
2. Select a disposable test workspace and check its name or identifying details.
3. Open the deletion preview and review files, members and linked resources.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that you can cancel before destructive confirmation.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/workspace-team-overview-2026-10-12.webp"><img src="/screenshots/workspace-team-overview-2026-10-12.webp" alt="Dosya workspace team overview showing members and invitation controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Select the intended workspace and verify your administrator role before changing membership. <a href="/screenshots/workspace-team-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Read every impact group and confirm you can cancel safely. Continue only when the workspace identity and recovery plan are certain.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The workflow completes for the controlled test and you can cancel before destructive confirmation. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Workspace → Danger zone, confirm the active workspace and check that your role permits the action.

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
