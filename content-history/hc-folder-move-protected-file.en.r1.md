---
{"articleId":"hc-folder-move-protected-file","locale":"en","revision":1,"title":"Move a protected file between folders","summary":"Move a protected file between folders with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"folder-move-protected-file","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the move a protected file between folders workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-lock-folder","hc-folder-restriction-inheritance"],"keywords":["folder move protected file","Folder protection and access details","Dosya help"]}
---
Move a protected file between folders is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a Dosya folder and its access or lock settings in the current released client.
- Confirm the active account and workspace, then identify disposable protected file and reviewed destination.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: move a protected file between folders

1. Open a Dosya folder and its access or lock settings and confirm the active account and workspace.
2. Locate disposable protected file and reviewed destination and verify its name or identifying details.
3. Record current access, move the file, then test its resulting lock and inherited restrictions from a second account.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the destination behavior is understood before important files are moved.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya file protection controls showing lock and access modes." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Test protection with a separate member before relying on it for important content. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the destination behavior is understood before important files are moved. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a Dosya folder and its access or lock settings, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Lock a folder](/files/lock-folder)
- [Understand inherited folder restrictions](/files/folder-restriction-inheritance)
