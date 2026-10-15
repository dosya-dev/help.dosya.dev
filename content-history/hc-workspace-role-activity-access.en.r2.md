---
{
  "articleId": "hc-workspace-role-activity-access",
  "locale": "en",
  "revision": 2,
  "title": "Grant activity-log access in a custom role",
  "summary": "Enable it only for members who need audit visibility and save. Verify that assigned members can open Activity while others remain denied.",
  "category": "workspaces",
  "articleSlug": "workspace-role-activity-access",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Grant activity-log access in a custom role” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-workspace-roles",
    "hc-workspace-change-role"
  ],
  "keywords": [
    "workspace role activity access",
    "Workspace custom roles",
    "Dosya help",
    "team cloud storage"
  ]
}
---
This guide covers **Grant activity-log access in a custom role** in Dosya. The main action is to enable it only for members who need audit visibility and save; the decisive check is whether assigned members can open Activity while others remain denied.

Keep the active workspace, member, role, folder boundary, and applicable policy in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/workspace-role-activity-access-help-workflow-2026-10-14.webp"><img src="/screenshots/workspace-role-activity-access-help-workflow-2026-10-14.webp" alt="Four-step workflow map for grant activity-log access in a custom role, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for grant activity-log access in a custom role: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/workspace-role-activity-access-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Workspace settings > Roles in the current released client.
- Confirm the active account and workspace, then identify view activity permission.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: grant activity-log access in a custom role

1. Open Workspace settings > Roles and confirm the active account and workspace.
2. Locate view activity permission and verify its name or identifying details.
3. Enable it only for members who need audit visibility and save.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that assigned members can open Activity while others remain denied.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp"><img src="/screenshots/workspace-custom-role-editor-2026-10-12.webp" alt="Dosya custom role editor showing workspace permissions before assignment." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Grant the smallest permission set and test it with a non-administrator account. <a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Assigned members can open Activity while others remain denied. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Verify the result from the affected member or role’s perspective whenever the change controls access. If the result differs from what you expected, stop before repeating the action. Check the active workspace and your administrative role before repeating a member, policy, or permission change.

## Expected result

The controlled workflow completes and assigned members can open Activity while others remain denied. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Practical checks

- Confirm you are working in the intended account and workspace before selecting the target.
- Re-read the exact target name, folder path, member, endpoint, or provider shown by the interface.
- Complete one controlled example first when the action can affect access, create copies, move data, or start a transfer.
- Verify the final state after a refresh; keep only nonsecret timestamps, statuses, and request identifiers for support.

## Troubleshooting

**The expected control is missing.** Return to Workspace settings > Roles, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Understand roles](/workspaces/roles)
- [Change a member role](/workspaces/workspace-change-role)
