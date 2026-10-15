---
{
  "articleId": "hc-file-choose-move-or-copy",
  "locale": "en",
  "revision": 2,
  "title": "Choose whether to move or copy a file",
  "summary": "Choose Move when one item should change folders, or Copy when an independent second item is required. Verify that the chosen action matches the intended number of resulting files.",
  "category": "files",
  "articleSlug": "file-choose-move-or-copy",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Choose whether to move or copy a file” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-move-rename",
    "hc-copy-file"
  ],
  "keywords": [
    "file choose move or copy",
    "File move and copy safeguards",
    "Dosya help",
    "cloud storage"
  ]
}
---
This guide covers **Choose whether to move or copy a file** in Dosya. The main action is to choose Move when one item should change folders, or Copy when an independent second item is required; the decisive check is whether the chosen action matches the intended number of resulting files.

Keep the workspace, folder path, filename, item state, and visible metadata in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/file-choose-move-or-copy-help-workflow-2026-10-14.webp"><img src="/screenshots/file-choose-move-or-copy-help-workflow-2026-10-14.webp" alt="Four-step workflow map for choose whether to move or copy a file, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for choose whether to move or copy a file: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/file-choose-move-or-copy-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya file list and destination picker in the current released client.
- Confirm the active account and workspace, then identify file that should change location or exist in two places.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: choose whether to move or copy a file

1. Open the Dosya file list and destination picker and confirm the active account and workspace.
2. Locate file that should change location or exist in two places and verify its name or identifying details.
3. Choose Move when one item should change folders, or Copy when an independent second item is required.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the chosen action matches the intended number of resulting files.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Dosya destination picker used to move a file into another folder." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use disposable samples when checking how names, permissions, and destinations behave. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The chosen action matches the intended number of resulting files. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Confirm the item in its final folder and refresh the listing before relying on the change from another device. If the result differs from what you expected, stop before repeating the action. Check the exact path, locks, permissions, and item state before repeating an operation that could create a duplicate or affect the wrong file.

## Expected result

The controlled workflow completes and the chosen action matches the intended number of resulting files. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to the Dosya file list and destination picker, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Move and rename items](/files/move-and-rename)
- [Copy a file](/files/copy-file)
