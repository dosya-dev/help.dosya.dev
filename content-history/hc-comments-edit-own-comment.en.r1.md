---
{"articleId":"hc-comments-edit-own-comment","locale":"en","revision":1,"title":"Edit your own file comment","summary":"Edit your own file comment with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"comments-edit-own-comment","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the edit your own file comment workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-file-comments","hc-preview-files"],"keywords":["comments edit own comment","File comments and replies","Dosya help"]}
---
Edit your own file comment is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open a file preview and its Comments panel in the current released client.
- Confirm the active account and workspace, then identify comment authored by your account.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: edit your own file comment

1. Open a file preview and its Comments panel and confirm the active account and workspace.
2. Locate comment authored by your account and verify its name or identifying details.
3. Open its author controls, choose Edit, update the text, and save.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the thread shows the corrected comment.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/file-comment-thread-2026-10-12.webp"><img src="/screenshots/file-comment-thread-2026-10-12.webp" alt="Dosya file comment thread showing discussion attached to the selected file." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use comments for file-specific context and avoid posting secrets or access credentials. <a href="/screenshots/file-comment-thread-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the thread shows the corrected comment. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a file preview and its Comments panel, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Comment on a file](/files/comments-and-replies)
- [Preview files](/files/preview-files)
