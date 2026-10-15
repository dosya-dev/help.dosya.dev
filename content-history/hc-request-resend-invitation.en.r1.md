---
{"articleId":"hc-request-resend-invitation","locale":"en","revision":1,"title":"Resend a file-request invitation","summary":"Resend a file-request invitation with a controlled test, clear verification, limits, and recovery steps.","category":"sharing","articleSlug":"request-resend-invitation","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the resend a file-request invitation workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-file-request","hc-request-manage"],"keywords":["request resend invitation","File-request owner controls","Dosya help"]}
---
Resend a file-request invitation is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a Dosya file request in the current released client.
- Confirm the active account and workspace, then identify recipient who has not completed the request.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: resend a file-request invitation

1. Open a Dosya file request and confirm the active account and workspace.
2. Locate recipient who has not completed the request and verify its name or identifying details.
3. Choose Resend and verify the updated sent status.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the recipient receives another valid invitation without a duplicate request.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/file-request-overview-2026-10-13.webp"><img src="/screenshots/file-request-overview-2026-10-13.webp" alt="Dosya file-request overview for collecting uploads from invited recipients." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a test recipient and verify the destination before changing a live request. <a href="/screenshots/file-request-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the recipient receives another valid invitation without a duplicate request. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a Dosya file request, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Create a file request](/sharing/file-request)
- [Manage a request](/sharing/manage-file-request)
