---
{"articleId":"hc-trash-identify-item","locale":"en","revision":1,"title":"Identify the correct deleted item","summary":"Identify the correct deleted item with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"trash-identify-item","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the identify the correct deleted item workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-review-deleted-items","hc-restore-deleted"],"keywords":["trash identify item","Deleted-item retention and cleanup","Dosya help"]}
---
Identify the correct deleted item is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

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

## Expected result

The controlled workflow completes and the selected item is the intended deleted file or folder. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya Deleted items view, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Review Deleted items](/files/review-deleted-items)
- [Restore deleted items](/files/restore-deleted)
