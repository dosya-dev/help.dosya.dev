---
{
  "articleId": "hc-preview-image-load-failure",
  "locale": "en",
  "revision": 2,
  "title": "Troubleshoot an image preview that will not load",
  "summary": "Confirm upload completion, compare the file size, retry once on a stable network, and download the original if needed. Verify that the image renders or the original remains retrievable for diagnosis.",
  "category": "files",
  "articleSlug": "preview-image-load-failure",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Troubleshoot an image preview that will not load” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-preview-files",
    "hc-preview-unsupported-download"
  ],
  "keywords": [
    "preview image load failure",
    "File preview troubleshooting details",
    "Dosya help",
    "cloud storage"
  ]
}
---
This guide covers **Troubleshoot an image preview that will not load** in Dosya. The main action is to confirm upload completion, compare the file size, retry once on a stable network, and download the original if needed; the decisive check is whether the image renders or the original remains retrievable for diagnosis.

Keep the workspace, folder path, filename, item state, and visible metadata in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/preview-image-load-failure-help-workflow-2026-10-14.webp"><img src="/screenshots/preview-image-load-failure-help-workflow-2026-10-14.webp" alt="Four-step workflow map for troubleshoot an image preview that will not load, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for troubleshoot an image preview that will not load: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/preview-image-load-failure-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya file viewer in the current released client.
- Confirm the active account and workspace, then identify supported image with an empty or error preview.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: troubleshoot an image preview that will not load

1. Open the Dosya file viewer and confirm the active account and workspace.
2. Locate supported image with an empty or error preview and verify its name or identifying details.
3. Confirm upload completion, compare the file size, retry once on a stable network, and download the original if needed.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the image renders or the original remains retrievable for diagnosis.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-unsupported-file-2026-10-12.webp"><img src="/screenshots/preview-unsupported-file-2026-10-12.webp" alt="Dosya file viewer explaining that a file cannot be previewed inline." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>A preview problem does not by itself mean the stored original is damaged. <a href="/screenshots/preview-unsupported-file-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The image renders or the original remains retrievable for diagnosis. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Confirm the item in its final folder and refresh the listing before relying on the change from another device. If the result differs from what you expected, stop before repeating the action. Check the exact path, locks, permissions, and item state before repeating an operation that could create a duplicate or affect the wrong file.

## Expected result

The controlled workflow completes and the image renders or the original remains retrievable for diagnosis. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to the Dosya file viewer, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Preview files](/files/preview-files)
- [Handle unsupported previews](/files/preview-unsupported-download)
