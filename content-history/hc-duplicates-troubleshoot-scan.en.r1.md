---
{"articleId":"hc-duplicates-troubleshoot-scan","locale":"en","revision":1,"title":"Troubleshoot duplicate scan results","summary":"Troubleshoot duplicate scan results with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"duplicates-troubleshoot-scan","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the troubleshoot duplicate scan results workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-review-duplicates","hc-restore-deleted"],"keywords":["duplicates troubleshoot scan","Duplicate file cleanup","Dosya help"]}
---
Troubleshoot duplicate scan results is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Duplicates in the current released client.
- Confirm the active account and workspace, then identify missing, incomplete, or stale duplicate group.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: troubleshoot duplicate scan results

1. Open Duplicates and confirm the active account and workspace.
2. Locate missing, incomplete, or stale duplicate group and verify its name or identifying details.
3. Wait for scanning to finish, refresh, and verify that suspected files match byte for byte.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that results reflect exact duplicates or the files are correctly excluded as different content.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/duplicate-groups-2026-10-12.webp"><img src="/screenshots/duplicate-groups-2026-10-12.webp" alt="Dosya duplicate review showing exact-match groups before cleanup." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Exact duplicates are grouped by content; still check folder context before deleting copies. <a href="/screenshots/duplicate-groups-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and results reflect exact duplicates or the files are correctly excluded as different content. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Duplicates, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Review exact duplicates](/files/review-duplicates)
- [Restore deleted files](/files/restore-deleted)
