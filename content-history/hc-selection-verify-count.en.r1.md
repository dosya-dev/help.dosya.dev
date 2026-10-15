---
{"articleId":"hc-selection-verify-count","locale":"en","revision":1,"title":"Verify a multi-file selection count","summary":"Verify a multi-file selection count with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"selection-verify-count","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the verify a multi-file selection count workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-select-multiple-files","hc-clear-file-selection"],"keywords":["selection verify count","Multi-file selection operations","Dosya help"]}
---
Verify a multi-file selection count is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a Dosya file or search-results list in the current released client.
- Confirm the active account and workspace, then identify active selection containing known files and folders.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: verify a multi-file selection count

1. Open a Dosya file or search-results list and confirm the active account and workspace.
2. Locate active selection containing known files and folders and verify its name or identifying details.
3. Compare the toolbar count with the highlighted rows and expand the review if the list spans views or pages.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the count matches the items intended for the batch action.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Dosya file list with several items selected for a batch action." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Review the selection count and every selected row before starting a batch action. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the count matches the items intended for the batch action. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a Dosya file or search-results list, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Select multiple files](/files/select-multiple-files)
- [Clear a file selection](/files/clear-file-selection)
