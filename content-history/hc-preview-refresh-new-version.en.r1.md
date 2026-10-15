---
{"articleId":"hc-preview-refresh-new-version","locale":"en","revision":1,"title":"Refresh a preview after replacing a file","summary":"Refresh a preview after replacing a file with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"preview-refresh-new-version","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the refresh a preview after replacing a file workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-preview-files","hc-preview-unsupported-download"],"keywords":["preview refresh new version","File preview troubleshooting details","Dosya help"]}
---
Refresh a preview after replacing a file is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya file viewer in the current released client.
- Confirm the active account and workspace, then identify file whose new version was just uploaded.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: refresh a preview after replacing a file

1. Open the Dosya file viewer and confirm the active account and workspace.
2. Locate file whose new version was just uploaded and verify its name or identifying details.
3. Close the viewer, refresh the file list, and reopen the current version from its canonical row.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the viewer shows the latest processed version.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-unsupported-file-2026-10-12.webp"><img src="/screenshots/preview-unsupported-file-2026-10-12.webp" alt="Dosya file viewer explaining that a file cannot be previewed inline." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>A preview problem does not by itself mean the stored original is damaged. <a href="/screenshots/preview-unsupported-file-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the viewer shows the latest processed version. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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
