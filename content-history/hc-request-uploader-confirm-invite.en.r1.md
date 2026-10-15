---
{"articleId":"hc-request-uploader-confirm-invite","locale":"en","revision":1,"title":"Confirm a file-request invitation","summary":"Confirm a file-request invitation with a controlled test, clear verification, limits, and recovery steps.","category":"sharing","articleSlug":"request-uploader-confirm-invite","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the confirm a file-request invitation workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-request-upload","hc-request-troubleshoot"],"keywords":["request uploader confirm invite","File-request uploader workflow","Dosya help"]}
---
Confirm a file-request invitation is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a Dosya file-request recipient page in the current released client.
- Confirm the active account and workspace, then identify file-request page opened from an invitation.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: confirm a file-request invitation

1. Open a Dosya file-request recipient page and confirm the active account and workspace.
2. Locate file-request page opened from an invitation and verify its name or identifying details.
3. Check the request owner, title, instructions, expiry, and any identity or password prompt.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the uploader recognizes the intended request before selecting files.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/request-upload-ready-2026-10-12.webp"><img src="/screenshots/request-upload-ready-2026-10-12.webp" alt="Dosya file-request page ready for a recipient to choose and submit files." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Uploaders should confirm the request owner and limits before selecting files. <a href="/screenshots/request-upload-ready-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the uploader recognizes the intended request before selecting files. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a Dosya file-request recipient page, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Upload to a request](/sharing/request-upload)
- [Troubleshoot a request](/sharing/troubleshoot-file-request)
