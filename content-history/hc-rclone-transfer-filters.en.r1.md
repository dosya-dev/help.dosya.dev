---
{"articleId":"hc-rclone-transfer-filters","locale":"en","revision":1,"title":"Filter files in an rclone transfer","summary":"Filter files in an rclone transfer with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"rclone-transfer-filters","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the filter files in an rclone transfer workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-rclone-copy","hc-rclone-download"],"keywords":["rclone transfer filters","Advanced rclone workflows","Dosya help"]}
---
Filter files in an rclone transfer is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open rclone configured for Dosya WebDAV in the current released client.
- Confirm the active account and workspace, then identify source tree with known include and exclude examples.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: filter files in an rclone transfer

1. Open rclone configured for Dosya WebDAV and confirm the active account and workspace.
2. Locate source tree with known include and exclude examples and verify its name or identifying details.
3. Apply include or exclude rules in dry-run and inspect the candidate list.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that only intended paths are transferred.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Dosya and rclone overview for scripted WebDAV transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Run dry-run first and use a disposable destination before any command that can delete files. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and only intended paths are transferred. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to rclone configured for Dosya WebDAV, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Copy with rclone](/integrations/rclone)
- [Download with rclone](/integrations/rclone-download)
