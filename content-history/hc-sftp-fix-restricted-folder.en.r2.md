---
{
  "articleId": "hc-sftp-fix-restricted-folder",
  "locale": "en",
  "revision": 2,
  "title": "Fix SFTP access to a restricted folder",
  "summary": "Compare the remote path with key and workspace restrictions, start from the allowed root, and test one list operation. Verify that the client can see only the authorized folder tree.",
  "category": "integrations",
  "articleSlug": "sftp-fix-restricted-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Fix SFTP access to a restricted folder” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-troubleshoot"
  ],
  "keywords": [
    "sftp fix restricted folder",
    "SFTP connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Fix SFTP access to a restricted folder** in Dosya. The main action is to compare the remote path with key and workspace restrictions, start from the allowed root, and test one list operation; the decisive check is whether the client can see only the authorized folder tree.

Keep the connected provider account, Dosya workspace, authorization scope, source, destination, and job state in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14.webp" alt="Four-step workflow map for fix sftp access to a restricted folder, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for fix sftp access to a restricted folder: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify connection that opens but cannot access the intended path.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: fix SFTP access to a restricted folder

1. Open an SFTP client connected to Dosya and confirm the active account and workspace.
2. Locate connection that opens but cannot access the intended path and verify its name or identifying details.
3. Compare the remote path with key and workspace restrictions, start from the allowed root, and test one list operation.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the client can see only the authorized folder tree.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP integration overview for secure file transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Verify the host key and restricted remote path before entering credentials or transferring files. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The client can see only the authorized folder tree. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Verify the result in both Dosya and the connected service because either side can retain a stale status. If the result differs from what you expected, stop before repeating the action. Record the provider, operation time, job or request identifier, and redacted error before reconnecting or retrying.

## Expected result

The controlled workflow completes and the client can see only the authorized folder tree. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to an SFTP client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
