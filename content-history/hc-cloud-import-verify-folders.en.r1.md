---
{"articleId":"hc-cloud-import-verify-folders","locale":"en","revision":1,"title":"Verify imported folder structure","summary":"Verify imported folder structure with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"cloud-import-verify-folders","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the verify imported folder structure workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-cloud-import-connect","hc-cloud-import-progress"],"keywords":["cloud import verify folders","Cloud import operations","Dosya help"]}
---
Verify imported folder structure is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open a connected Google Drive, OneDrive, or Dropbox import in the current released client.
- Confirm the active account and workspace, then identify completed import job and its destination folder.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: verify imported folder structure

1. Open a connected Google Drive, OneDrive, or Dropbox import and confirm the active account and workspace.
2. Locate completed import job and its destination folder and verify its name or identifying details.
3. Compare a sample of source folders and files with the Dosya result.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the expected hierarchy and item counts are present.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/import-google-picker-selected-2026-10-11.webp"><img src="/screenshots/import-google-picker-selected-2026-10-11.webp" alt="Dosya cloud provider picker with files selected for import." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Provider access is read for the selected import; verify the Dosya destination before starting. <a href="/screenshots/import-google-picker-selected-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the expected hierarchy and item counts are present. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a connected Google Drive, OneDrive, or Dropbox import, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Monitor an import](/integrations/import-progress)
