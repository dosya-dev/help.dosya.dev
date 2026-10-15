---
{"articleId":"hc-preview-office-processing","locale":"en","revision":1,"title":"Wait for an Office preview to finish processing","summary":"Wait for an Office preview to finish processing with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"preview-office-processing","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the wait for an office preview to finish processing workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-preview-files","hc-preview-unsupported-download"],"keywords":["preview office processing","File preview troubleshooting details","Dosya help"]}
---
Wait for an Office preview to finish processing is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya file viewer in the current released client.
- Confirm the active account and workspace, then identify recently uploaded Office document with a processing state.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: wait for an Office preview to finish processing

1. Open the Dosya file viewer and confirm the active account and workspace.
2. Locate recently uploaded Office document with a processing state and verify its name or identifying details.
3. Leave the file unchanged, allow processing to finish, refresh once, and reopen the viewer.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the converted preview appears or a specific unsupported state is shown.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-unsupported-file-2026-10-12.webp"><img src="/screenshots/preview-unsupported-file-2026-10-12.webp" alt="Dosya file viewer explaining that a file cannot be previewed inline." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>A preview problem does not by itself mean the stored original is damaged. <a href="/screenshots/preview-unsupported-file-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the converted preview appears or a specific unsupported state is shown. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya file viewer, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Preview files](/files/preview-files)
- [Handle unsupported previews](/files/preview-unsupported-download)
