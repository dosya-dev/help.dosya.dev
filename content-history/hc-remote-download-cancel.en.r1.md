---
{"articleId":"hc-remote-download-cancel","locale":"en","revision":1,"title":"Cancel an active remote download","summary":"Cancel an active remote download with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"remote-download-cancel","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the cancel an active remote download workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-remote-download","hc-storage-usage"],"keywords":["remote download cancel","Remote download operations","Dosya help"]}
---
Cancel an active remote download is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Integrations > Remote Downloads in the current released client.
- Confirm the active account and workspace, then identify queued or active disposable job.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: cancel an active remote download

1. Open Integrations > Remote Downloads and confirm the active account and workspace.
2. Locate queued or active disposable job and verify its name or identifying details.
3. Choose its X control and confirm the action if prompted.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the transfer stops and the job becomes cancelled or leaves the list.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Dosya Remote Downloads overview for fetching a direct HTTPS file into a workspace." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a direct HTTPS file URL; share pages from storage providers are not direct files. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the transfer stops and the job becomes cancelled or leaves the list. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Integrations > Remote Downloads, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Download a remote URL](/integrations/remote-download)
- [Understand storage limits](/uploading/storage-usage)
