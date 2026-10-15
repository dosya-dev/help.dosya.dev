---
{"articleId":"hc-large-folder-download","locale":"en","revision":1,"title":"Handle a large folder download","summary":"Handle a large folder download. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"uploading","articleSlug":"large-folder-download","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the handle a large folder download workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-download-files","hc-slow-transfer"],"keywords":["large folder download","browser download archives","Dosya help"]}
---
Handle a large folder download is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Files → Download in the current released Dosya client.
- Confirm the active account and workspace, then identify a folder large enough to require preparation.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: handle a large folder download

1. Open Files → Download and confirm the active workspace.
2. Select a folder large enough to require preparation and check its name or identifying details.
3. Keep the page open until the download starts and monitor browser progress.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the completed archive opens without a partial-download extension.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Dosya multi-selection prepared for a combined browser download." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Keep the browser download visible until archive preparation and transfer complete. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the completed archive opens without a partial-download extension. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Download, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Download files](/uploading/download-files)
- [Troubleshoot slow transfers](/troubleshooting/slow-transfer)
