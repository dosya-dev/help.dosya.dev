---
{
  "articleId": "hc-webdav-diagnose-read-only",
  "locale": "en",
  "revision": 2,
  "title": "Diagnose a read-only WebDAV mount",
  "summary": "Check account role, key scope, folder restriction, lock state, and client mount mode, then repeat one test write. Verify that the blocking permission is identified or the test file is created.",
  "category": "integrations",
  "articleSlug": "webdav-diagnose-read-only",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Diagnose a read-only WebDAV mount” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-lock-permission-errors"
  ],
  "keywords": [
    "webdav diagnose read only",
    "WebDAV connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Diagnose a read-only WebDAV mount** in Dosya. The main action is to check account role, key scope, folder restriction, lock state, and client mount mode, then repeat one test write; the decisive check is whether the blocking permission is identified or the test file is created.

Keep the connected provider account, Dosya workspace, authorization scope, source, destination, and job state in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14.webp"><img src="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14.webp" alt="Four-step workflow map for diagnose a read-only webdav mount, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for diagnose a read-only webdav mount: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/webdav-diagnose-read-only-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a WebDAV client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify mount that lists files but rejects a disposable write.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: diagnose a read-only WebDAV mount

1. Open a WebDAV client connected to Dosya and confirm the active account and workspace.
2. Locate mount that lists files but rejects a disposable write and verify its name or identifying details.
3. Check account role, key scope, folder restriction, lock state, and client mount mode, then repeat one test write.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the blocking permission is identified or the test file is created.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV integration overview for mounting and transferring files." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Confirm endpoint, account, and write access with a disposable folder before regular use. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The blocking permission is identified or the test file is created. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Verify the result in both Dosya and the connected service because either side can retain a stale status. If the result differs from what you expected, stop before repeating the action. Record the provider, operation time, job or request identifier, and redacted error before reconnecting or retrying.

## Expected result

The controlled workflow completes and the blocking permission is identified or the test file is created. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to a WebDAV client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Resolve WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
