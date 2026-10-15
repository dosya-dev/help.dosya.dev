---
{"articleId":"hc-folder-test-inherited-restriction","locale":"en","revision":1,"title":"Test an inherited folder restriction","summary":"Test an inherited folder restriction with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"folder-test-inherited-restriction","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the test an inherited folder restriction workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-lock-folder","hc-folder-restriction-inheritance"],"keywords":["folder test inherited restriction","Folder protection and access details","Dosya help"]}
---
Test an inherited folder restriction is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a Dosya folder and its access or lock settings in the current released client.
- Confirm the active account and workspace, then identify restricted parent folder with a disposable child item.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: test an inherited folder restriction

1. Open a Dosya folder and its access or lock settings and confirm the active account and workspace.
2. Locate restricted parent folder with a disposable child item and verify its name or identifying details.
3. Sign in as a test member, try the intended read or write action on the child, and compare it with the parent rule.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the child follows the documented inherited access behavior.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya file protection controls showing lock and access modes." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Test protection with a separate member before relying on it for important content. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the child follows the documented inherited access behavior. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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
