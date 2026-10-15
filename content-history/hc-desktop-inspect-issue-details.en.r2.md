---
{
  "articleId": "hc-desktop-inspect-issue-details",
  "locale": "en",
  "revision": 2,
  "title": "Inspect a desktop sync issue safely",
  "summary": "Open details, record the nonsecret message and time, and check permissions, naming, storage, and local availability. Verify that the likely cause is identified without exposing file contents or credentials.",
  "category": "desktop",
  "articleSlug": "desktop-inspect-issue-details",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Inspect a desktop sync issue safely” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-problem-report"
  ],
  "keywords": [
    "desktop inspect issue details",
    "Desktop diagnostics and recovery details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
This guide covers **Inspect a desktop sync issue safely** in Dosya. The main action is to open details, record the nonsecret message and time, and check permissions, naming, storage, and local availability; the decisive check is whether the likely cause is identified without exposing file contents or credentials.

Keep the signed-in account, workspace, local path, sync pair, connection, and activity state in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/desktop-inspect-issue-details-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-inspect-issue-details-help-workflow-2026-10-14.webp" alt="Four-step workflow map for inspect a desktop sync issue safely, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for inspect a desktop sync issue safely: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/desktop-inspect-issue-details-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Dosya desktop Activity, Issues, and Help views in the current released client.
- Confirm the active account and workspace, then identify issue entry for a controlled file.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: inspect a desktop sync issue safely

1. Open Dosya desktop Activity, Issues, and Help views and confirm the active account and workspace.
2. Locate issue entry for a controlled file and verify its name or identifying details.
3. Open details, record the nonsecret message and time, and check permissions, naming, storage, and local availability.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the likely cause is identified without exposing file contents or credentials.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Verified Dosya desktop sync activity showing transfer states." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Capture timestamps, paths, and nonsecret errors before restarting or retrying work. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The likely cause is identified without exposing file contents or credentials. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Let current activity settle, then confirm the same state after reopening the desktop app or reconnecting the network. If the result differs from what you expected, stop before repeating the action. Check connectivity, local permissions, disk space, workspace access, and the first failed activity entry before retrying.

## Expected result

The controlled workflow completes and the likely cause is identified without exposing file contents or credentials. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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
