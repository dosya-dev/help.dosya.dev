---
{
  "articleId": "hc-mobile-backup-battery-restrictions",
  "locale": "en",
  "revision": 2,
  "title": "Review battery restrictions that pause backup",
  "summary": "Allow Dosya the required background activity or keep the app open and charging for the controlled test. Verify that the queue resumes without immediate power-policy suspension.",
  "category": "files",
  "articleSlug": "mobile-backup-battery-restrictions",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Review battery restrictions that pause backup” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-backup-retry-failed",
    "hc-mobile-background"
  ],
  "keywords": [
    "mobile backup battery restrictions",
    "Mobile backup recovery details",
    "Dosya help",
    "cloud storage"
  ]
}
---
This guide covers **Review battery restrictions that pause backup** in Dosya. The main action is to allow Dosya the required background activity or keep the app open and charging for the controlled test; the decisive check is whether the queue resumes without immediate power-policy suspension.

Keep the workspace, folder path, filename, item state, and visible metadata in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/mobile-backup-battery-restrictions-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-backup-battery-restrictions-help-workflow-2026-10-14.webp" alt="Four-step workflow map for review battery restrictions that pause backup, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for review battery restrictions that pause backup: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/mobile-backup-battery-restrictions-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Backup settings and status in the Dosya mobile app in the current released client.
- Confirm the active account and workspace, then identify device power-saving or battery-optimization settings.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: review battery restrictions that pause backup

1. Open Backup settings and status in the Dosya mobile app and confirm the active account and workspace.
2. Locate device power-saving or battery-optimization settings and verify its name or identifying details.
3. Allow Dosya the required background activity or keep the app open and charging for the controlled test.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the queue resumes without immediate power-policy suspension.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile app backup overview with status and items needing attention." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Keep the device powered and test recovery with one media item before retrying the full queue. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The queue resumes without immediate power-policy suspension. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Confirm the item in its final folder and refresh the listing before relying on the change from another device. If the result differs from what you expected, stop before repeating the action. Check the exact path, locks, permissions, and item state before repeating an operation that could create a duplicate or affect the wrong file.

## Expected result

The controlled workflow completes and the queue resumes without immediate power-policy suspension. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to Backup settings and status in the Dosya mobile app, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Retry failed backup items](/files/mobile-backup-retry-failed)
- [Troubleshoot background backup](/troubleshooting/mobile-background-backup)
