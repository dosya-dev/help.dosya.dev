---
{"articleId":"hc-preview-csv-table","locale":"en","revision":1,"title":"Preview a CSV file as a table","summary":"Preview a CSV file as a table with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"preview-csv-table","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the preview a csv file as a table workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-preview-files","hc-archive-preview"],"keywords":["preview csv table","Document and data previews","Dosya help"]}
---
Preview a CSV file as a table is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open a supported file preview in the current released client.
- Confirm the active account and workspace, then identify CSV file with a known header row.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: preview a CSV file as a table

1. Open a supported file preview and confirm the active account and workspace.
2. Locate CSV file with a known header row and verify its name or identifying details.
3. Open it and compare table columns and sample rows with the source.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the structured table matches the CSV data.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya preview surface showing supported content without a separate download." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Treat previews as a convenience and download the original when formatting fidelity is critical. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the structured table matches the CSV data. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a supported file preview, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Preview files](/files/preview-files)
- [Inspect an archive](/files/archive-preview)
