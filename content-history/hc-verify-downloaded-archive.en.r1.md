---
{"articleId":"hc-verify-downloaded-archive","locale":"en","revision":1,"title":"Check an archive download before sharing it","summary":"Check an archive download before sharing it. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"uploading","articleSlug":"verify-downloaded-archive","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the check an archive download before sharing it workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-download-files","hc-slow-transfer"],"keywords":["verify downloaded archive","browser download archives","Dosya help"]}
---
Check an archive download before sharing it is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open the browser download list in the current released Dosya client.
- Confirm the active account and workspace, then identify a newly downloaded Dosya archive.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: check an archive download before sharing it

1. Open the browser download list and confirm the active workspace.
2. Select a newly downloaded Dosya archive and check its name or identifying details.
3. Compare its filename and size, then open it locally.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the local archive opens and matches the selection.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Dosya multi-selection prepared for a combined browser download." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Keep the browser download visible until archive preparation and transfer complete. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the local archive opens and matches the selection. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the browser download list, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Download files](/uploading/download-files)
- [Troubleshoot slow transfers](/troubleshooting/slow-transfer)
