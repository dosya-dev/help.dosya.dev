---
{
  "articleId": "hc-duplicates-troubleshoot-scan",
  "locale": "en",
  "revision": 2,
  "title": "Troubleshoot duplicate scan results",
  "summary": "Wait for scanning to finish, refresh, and verify that suspected files match byte for byte. Verify that results reflect exact duplicates or the files are correctly excluded as different content.",
  "category": "files",
  "articleSlug": "duplicates-troubleshoot-scan",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Troubleshoot duplicate scan results” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-review-duplicates",
    "hc-restore-deleted"
  ],
  "keywords": [
    "duplicates troubleshoot scan",
    "Duplicate file cleanup",
    "Dosya help",
    "cloud storage"
  ]
}
---
This guide covers **Troubleshoot duplicate scan results** in Dosya. The main action is to wait for scanning to finish, refresh, and verify that suspected files match byte for byte; the decisive check is whether results reflect exact duplicates or the files are correctly excluded as different content.

Keep the workspace, folder path, filename, item state, and visible metadata in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/duplicates-troubleshoot-scan-help-workflow-2026-10-14.webp"><img src="/screenshots/duplicates-troubleshoot-scan-help-workflow-2026-10-14.webp" alt="Four-step workflow map for troubleshoot duplicate scan results, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for troubleshoot duplicate scan results: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/duplicates-troubleshoot-scan-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Duplicates in the current released client.
- Confirm the active account and workspace, then identify missing, incomplete, or stale duplicate group.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: troubleshoot duplicate scan results

1. Open Duplicates and confirm the active account and workspace.
2. Locate missing, incomplete, or stale duplicate group and verify its name or identifying details.
3. Wait for scanning to finish, refresh, and verify that suspected files match byte for byte.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that results reflect exact duplicates or the files are correctly excluded as different content.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/duplicate-groups-2026-10-12.webp"><img src="/screenshots/duplicate-groups-2026-10-12.webp" alt="Dosya duplicate review showing exact-match groups before cleanup." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Exact duplicates are grouped by content; still check folder context before deleting copies. <a href="/screenshots/duplicate-groups-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Results reflect exact duplicates or the files are correctly excluded as different content. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Confirm the item in its final folder and refresh the listing before relying on the change from another device. If the result differs from what you expected, stop before repeating the action. Check the exact path, locks, permissions, and item state before repeating an operation that could create a duplicate or affect the wrong file.

## Expected result

The controlled workflow completes and results reflect exact duplicates or the files are correctly excluded as different content. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to Duplicates, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Review exact duplicates](/files/review-duplicates)
- [Restore deleted files](/files/restore-deleted)
