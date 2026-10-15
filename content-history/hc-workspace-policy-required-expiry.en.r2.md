---
{
  "articleId": "hc-workspace-policy-required-expiry",
  "locale": "en",
  "revision": 2,
  "title": "Require expiry for workspace sharing links",
  "summary": "Enable the requirement, choose the allowed boundary, and create a disposable test link. Verify that the new link cannot omit the required expiry.",
  "category": "workspaces",
  "articleSlug": "workspace-policy-required-expiry",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Require expiry for workspace sharing links” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-workspace-policies",
    "hc-workspace-roles"
  ],
  "keywords": [
    "workspace policy required expiry",
    "Workspace policy enforcement",
    "Dosya help",
    "team cloud storage"
  ]
}
---
This guide covers **Require expiry for workspace sharing links** in Dosya. The main action is to enable the requirement, choose the allowed boundary, and create a disposable test link; the decisive check is whether the new link cannot omit the required expiry.

Keep the active workspace, member, role, folder boundary, and applicable policy in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-required-expiry-help-workflow-2026-10-14.webp"><img src="/screenshots/workspace-policy-required-expiry-help-workflow-2026-10-14.webp" alt="Four-step workflow map for require expiry for workspace sharing links, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for require expiry for workspace sharing links: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/workspace-policy-required-expiry-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Workspace settings > Policies in the current released client.
- Confirm the active account and workspace, then identify sharing-link expiry requirement.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: require expiry for workspace sharing links

1. Open Workspace settings > Policies and confirm the active account and workspace.
2. Locate sharing-link expiry requirement and verify its name or identifying details.
3. Enable the requirement, choose the allowed boundary, and create a disposable test link.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the new link cannot omit the required expiry.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Dosya workspace policy controls for sharing, security, and member actions." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Test policy changes with a non-owner account before relying on them. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The new link cannot omit the required expiry. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Verify the result from the affected member or role’s perspective whenever the change controls access. If the result differs from what you expected, stop before repeating the action. Check the active workspace and your administrative role before repeating a member, policy, or permission change.

## Expected result

The controlled workflow completes and the new link cannot omit the required expiry. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Practical checks

- Confirm you are working in the intended account and workspace before selecting the target.
- Re-read the exact target name, folder path, member, endpoint, or provider shown by the interface.
- Complete one controlled example first when the action can affect access, create copies, move data, or start a transfer.
- Verify the final state after a refresh; keep only nonsecret timestamps, statuses, and request identifiers for support.

## Troubleshooting

**The expected control is missing.** Return to Workspace settings > Policies, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Set workspace policies](/workspaces/policies)
- [Choose roles](/workspaces/roles)
