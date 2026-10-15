---
{
  "articleId": "hc-download-choose-method",
  "locale": "en",
  "revision": 2,
  "title": "Choose between a direct download and an archive",
  "summary": "Use a direct download for one file and an archive for folders or several selected items. Verify that the download method matches the selected content.",
  "category": "uploading",
  "articleSlug": "download-choose-method",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Choose between a direct download and an archive” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-download-files",
    "hc-verify-downloaded-archive"
  ],
  "keywords": [
    "download choose method",
    "Download preparation and verification",
    "Dosya help",
    "file upload"
  ]
}
---
This guide covers **Choose between a direct download and an archive** in Dosya. The main action is to use a direct download for one file and an archive for folders or several selected items; the decisive check is whether the download method matches the selected content.

Keep the source file, destination folder, available storage, and transfer state in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/download-choose-method-help-workflow-2026-10-14.webp"><img src="/screenshots/download-choose-method-help-workflow-2026-10-14.webp" alt="Four-step workflow map for choose between a direct download and an archive, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for choose between a direct download and an archive: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/download-choose-method-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya file list and download controls in the current released client.
- Confirm the active account and workspace, then identify one file, one folder, or a multi-file selection.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: choose between a direct download and an archive

1. Open the Dosya file list and download controls and confirm the active account and workspace.
2. Locate one file, one folder, or a multi-file selection and verify its name or identifying details.
3. Use a direct download for one file and an archive for folders or several selected items.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the download method matches the selected content.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Dosya file selection with download actions for individual files and archives." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Choose the smallest suitable download and verify the local result before distributing it. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The download method matches the selected content. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Compare the uploaded item’s name, size, and destination with the source before removing any local copy. If the result differs from what you expected, stop before repeating the action. Record the failed item and its exact transfer message before retrying; repeated blind retries can hide a size, quota, or destination problem.

## Expected result

The controlled workflow completes and the download method matches the selected content. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to the Dosya file list and download controls, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Download files](/uploading/download-files)
- [Verify an archive](/uploading/verify-downloaded-archive)
