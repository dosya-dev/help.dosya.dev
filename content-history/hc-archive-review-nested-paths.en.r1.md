---
{"articleId":"hc-archive-review-nested-paths","locale":"en","revision":1,"title":"Review unsafe or nested archive paths","summary":"Review unsafe or nested archive paths with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"archive-review-nested-paths","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the review unsafe or nested archive paths workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-archive-preview","hc-archive-save-entry"],"keywords":["archive review nested paths","Archive inspection and extraction details","Dosya help"]}
---
Review unsafe or nested archive paths is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya archive viewer in the current released client.
- Confirm the active account and workspace, then identify archive containing deep paths, another archive, or unexpected names.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: review unsafe or nested archive paths

1. Open the Dosya archive viewer and confirm the active account and workspace.
2. Locate archive containing deep paths, another archive, or unexpected names and verify its name or identifying details.
3. Avoid opening unknown executables, inspect path normalization and source trust, and download only reviewed entries to an isolated location.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that unexpected archive content is handled without overwriting trusted local files.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-unsupported-file-2026-10-12.webp"><img src="/screenshots/preview-unsupported-file-2026-10-12.webp" alt="Dosya file viewer used to inspect stored files when inline support varies." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Inspect archive entry names and paths before previewing, saving, or downloading content. <a href="/screenshots/preview-unsupported-file-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and unexpected archive content is handled without overwriting trusted local files. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya archive viewer, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Preview an archive](/files/archive-preview)
- [Save an archive entry](/files/archive-save-entry)
