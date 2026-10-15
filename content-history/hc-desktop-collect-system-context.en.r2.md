---
{
  "articleId": "hc-desktop-collect-system-context",
  "locale": "en",
  "revision": 2,
  "title": "Collect desktop version and system context",
  "summary": "Record Dosya version, operating-system version, installation channel, workspace, and approximate occurrence time. Verify that the diagnostic context can reproduce or triage the correct environment.",
  "category": "desktop",
  "articleSlug": "desktop-collect-system-context",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Collect desktop version and system context” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-problem-report"
  ],
  "keywords": [
    "desktop collect system context",
    "Desktop diagnostics and recovery details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
This guide covers **Collect desktop version and system context** in Dosya. The main action is to record Dosya version, operating-system version, installation channel, workspace, and approximate occurrence time; the decisive check is whether the diagnostic context can reproduce or triage the correct environment.

Keep the signed-in account, workspace, local path, sync pair, connection, and activity state in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/desktop-collect-system-context-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-collect-system-context-help-workflow-2026-10-14.webp" alt="Four-step workflow map for collect desktop version and system context, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for collect desktop version and system context: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/desktop-collect-system-context-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Dosya desktop Activity, Issues, and Help views in the current released client.
- Confirm the active account and workspace, then identify repeatable desktop problem.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: collect desktop version and system context

1. Open Dosya desktop Activity, Issues, and Help views and confirm the active account and workspace.
2. Locate repeatable desktop problem and verify its name or identifying details.
3. Record Dosya version, operating-system version, installation channel, workspace, and approximate occurrence time.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the diagnostic context can reproduce or triage the correct environment.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Verified Dosya desktop sync activity showing transfer states." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Capture timestamps, paths, and nonsecret errors before restarting or retrying work. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The diagnostic context can reproduce or triage the correct environment. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Let current activity settle, then confirm the same state after reopening the desktop app or reconnecting the network. If the result differs from what you expected, stop before repeating the action. Check connectivity, local permissions, disk space, workspace access, and the first failed activity entry before retrying.

## Expected result

The controlled workflow completes and the diagnostic context can reproduce or triage the correct environment. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to Dosya desktop Activity, Issues, and Help views, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Troubleshoot desktop sync](/desktop/sync-issues)
- [Create a desktop problem report](/desktop/desktop-problem-report)
