---
{
  "articleId": "hc-cloud-import-verify-folders",
  "locale": "en",
  "revision": 2,
  "title": "Verify imported folder structure",
  "summary": "Compare a sample of source folders and files with the Dosya result. Verify that the expected hierarchy and item counts are present.",
  "category": "integrations",
  "articleSlug": "cloud-import-verify-folders",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Verify imported folder structure” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-progress"
  ],
  "keywords": [
    "cloud import verify folders",
    "Cloud import operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Verify imported folder structure** in Dosya. The main action is to compare a sample of source folders and files with the Dosya result; the decisive check is whether the expected hierarchy and item counts are present.

Keep the connected provider account, Dosya workspace, authorization scope, source, destination, and job state in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/cloud-import-verify-folders-help-workflow-2026-10-14.webp"><img src="/screenshots/cloud-import-verify-folders-help-workflow-2026-10-14.webp" alt="Four-step workflow map for verify imported folder structure, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for verify imported folder structure: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/cloud-import-verify-folders-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a connected Google Drive, OneDrive, or Dropbox import in the current released client.
- Confirm the active account and workspace, then identify completed import job and its destination folder.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: verify imported folder structure

1. Open a connected Google Drive, OneDrive, or Dropbox import and confirm the active account and workspace.
2. Locate completed import job and its destination folder and verify its name or identifying details.
3. Compare a sample of source folders and files with the Dosya result.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the expected hierarchy and item counts are present.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/import-google-picker-selected-2026-10-11.webp"><img src="/screenshots/import-google-picker-selected-2026-10-11.webp" alt="Dosya cloud provider picker with files selected for import." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Provider access is read for the selected import; verify the Dosya destination before starting. <a href="/screenshots/import-google-picker-selected-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The expected hierarchy and item counts are present. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Verify the result in both Dosya and the connected service because either side can retain a stale status. If the result differs from what you expected, stop before repeating the action. Record the provider, operation time, job or request identifier, and redacted error before reconnecting or retrying.

## Expected result

The controlled workflow completes and the expected hierarchy and item counts are present. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to a connected Google Drive, OneDrive, or Dropbox import, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Monitor an import](/integrations/import-progress)
