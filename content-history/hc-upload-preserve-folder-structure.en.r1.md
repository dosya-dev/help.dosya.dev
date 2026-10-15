---
{"articleId":"hc-upload-preserve-folder-structure","locale":"en","revision":1,"title":"Preserve folder structure during an upload","summary":"Preserve folder structure during an upload with a controlled test, clear verification, limits, and recovery steps.","category":"uploading","articleSlug":"upload-preserve-folder-structure","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the preserve folder structure during an upload workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-upload-files","hc-upload-states"],"keywords":["upload preserve folder structure","Upload preparation and preflight","Dosya help"]}
---
Preserve folder structure during an upload is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya upload view in the current released client.
- Confirm the active account and workspace, then identify small local folder with two nested levels.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: preserve folder structure during an upload

1. Open the Dosya upload view and confirm the active account and workspace.
2. Locate small local folder with two nested levels and verify its name or identifying details.
3. Choose the folder upload action, review the detected tree, and start the controlled transfer.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the nested folders appear under one destination without flattening.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/files-upload-2026-10-10.webp"><img src="/screenshots/files-upload-2026-10-10.webp" alt="Dosya upload view with the destination and selected files ready for transfer." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Confirm the workspace and destination before starting a large or important transfer. <a href="/screenshots/files-upload-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the nested folders appear under one destination without flattening. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya upload view, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Upload files and folders](/uploading/files-and-folders)
- [Read upload states](/uploading/progress-and-states)
