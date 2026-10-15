---
{
  "articleId": "hc-trash-identify-item",
  "locale": "en",
  "revision": 2,
  "title": "Identify the correct deleted item",
  "summary": "Compare its type, original path, deletion time, size, and available details before selecting it. Verify that the selected item is the intended deleted file or folder.",
  "category": "files",
  "articleSlug": "trash-identify-item",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Identify the correct deleted item” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-review-deleted-items",
    "hc-restore-deleted"
  ],
  "keywords": [
    "trash identify item",
    "Deleted-item retention and cleanup",
    "Dosya help",
    "cloud storage"
  ]
}
---
This guide covers **Identify the correct deleted item** in Dosya. The main action is to compare its type, original path, deletion time, size, and available details before selecting it; the decisive check is whether the selected item is the intended deleted file or folder.

Keep the workspace, folder path, filename, item state, and visible metadata in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/trash-identify-item-help-workflow-2026-10-14.webp"><img src="/screenshots/trash-identify-item-help-workflow-2026-10-14.webp" alt="Four-step workflow map for identify the correct deleted item, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for identify the correct deleted item: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/trash-identify-item-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya Deleted items view in the current released client.
- Confirm the active account and workspace, then identify deleted row with a familiar name.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: identify the correct deleted item

1. Open the Dosya Deleted items view and confirm the active account and workspace.
2. Locate deleted row with a familiar name and verify its name or identifying details.
3. Compare its type, original path, deletion time, size, and available details before selecting it.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the selected item is the intended deleted file or folder.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/deleted-items-2026-10-12.webp"><img src="/screenshots/deleted-items-2026-10-12.webp" alt="Dosya Deleted items view with restore and permanent deletion controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Restore first when uncertain; permanent deletion cannot be undone through Deleted items. <a href="/screenshots/deleted-items-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The selected item is the intended deleted file or folder. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Confirm the item in its final folder and refresh the listing before relying on the change from another device. If the result differs from what you expected, stop before repeating the action. Check the exact path, locks, permissions, and item state before repeating an operation that could create a duplicate or affect the wrong file.

## Expected result

The controlled workflow completes and the selected item is the intended deleted file or folder. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to the Dosya Deleted items view, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Review Deleted items](/files/review-deleted-items)
- [Restore deleted items](/files/restore-deleted)
