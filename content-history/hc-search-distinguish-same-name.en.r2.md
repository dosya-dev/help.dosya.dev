---
{
  "articleId": "hc-search-distinguish-same-name",
  "locale": "en",
  "revision": 2,
  "title": "Distinguish files with the same name",
  "summary": "Compare workspace, full folder path, size, modified time, owner, and file identifier where available. Verify that the correct same-named file is opened without changing the others.",
  "category": "files",
  "articleSlug": "search-distinguish-same-name",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Distinguish files with the same name” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-search-files",
    "hc-search-file-type"
  ],
  "keywords": [
    "search distinguish same name",
    "Advanced file search details",
    "Dosya help",
    "cloud storage"
  ]
}
---
This guide covers **Distinguish files with the same name** in Dosya. The main action is to compare workspace, full folder path, size, modified time, owner, and file identifier where available; the decisive check is whether the correct same-named file is opened without changing the others.

Keep the workspace, folder path, filename, item state, and visible metadata in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/search-distinguish-same-name-help-workflow-2026-10-14.webp"><img src="/screenshots/search-distinguish-same-name-help-workflow-2026-10-14.webp" alt="Four-step workflow map for distinguish files with the same name, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for distinguish files with the same name: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/search-distinguish-same-name-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya file search in the current released client.
- Confirm the active account and workspace, then identify two or more same-named results.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: distinguish files with the same name

1. Open the Dosya file search and confirm the active account and workspace.
2. Locate two or more same-named results and verify its name or identifying details.
3. Compare workspace, full folder path, size, modified time, owner, and file identifier where available.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the correct same-named file is opened without changing the others.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/search-files-results-2026-10-12.webp"><img src="/screenshots/search-files-results-2026-10-12.webp" alt="Dosya search results showing file names, types, and folder context." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use folder context and file details to distinguish similar results. <a href="/screenshots/search-files-results-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The correct same-named file is opened without changing the others. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Confirm the item in its final folder and refresh the listing before relying on the change from another device. If the result differs from what you expected, stop before repeating the action. Check the exact path, locks, permissions, and item state before repeating an operation that could create a duplicate or affect the wrong file.

## Expected result

The controlled workflow completes and the correct same-named file is opened without changing the others. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to the Dosya file search, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Search files](/files/search-files)
- [Filter search by file type](/files/search-file-type)
