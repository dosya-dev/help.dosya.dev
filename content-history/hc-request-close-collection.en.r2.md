---
{"articleId":"hc-request-close-collection","locale":"en","revision":2,"title":"Close a file request after collecting uploads","summary":"Review received and pending submissions, revoke the file-request upload link, and verify that new uploads stop while previously received files remain available.","category":"sharing","articleSlug":"request-close-collection","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed the current web File requests list, request detail page, Revoke action, recipient notification path and public upload-request API against local product source and relevant tests on 2026-10-14. Revocation returns the public request as gone while preserving previously received files. The screenshot uses isolated request data.","related":["hc-file-request","hc-request-manage","hc-request-review-uploads"],"keywords":["close file request","stop client file uploads","revoke upload request link","file collection deadline","keep received files"]}
---
Close a file request when you have received everything you expect or when its upload URL should no longer accept files. In the current Dosya web app, closing a request uses **Revoke**. Revocation stops new uploads immediately and keeps files that were already received.

## Before you start

1. Open **Shared**, then open **File requests**.
2. Confirm the active workspace and select the exact request. Requests with similar titles can point to different folders or recipient lists.
3. On the request detail page, review the status badge, file count and expiry.
4. Expand **Recipients** when the request was sent by email. Compare **uploaded** and **pending** counts and follow up with anyone who still needs to send a file.
5. Review the received file list. Check names, sizes, uploader details and received times. Download or preview a harmless sample when content verification is required.
6. Confirm the destination folder still contains the received files. Revoking the request does not move them to another folder.

If the request should remain open but needs a different deadline, password, message or upload limit, use **Edit** instead. Use **Revoke** only when the public upload channel should close.

## Steps: close the request

1. On the active request's detail page, select **Revoke**.
2. Wait for the request to reload and show the **Revoked** status.
3. Confirm that **Edit** and **Revoke** are no longer available. The file list remains available to authorized workspace members.
4. If the request has named recipients, expect Dosya to notify them that the request was closed. Contact critical recipients directly when delivery confirmation matters.
5. Open the old request URL in a private browser window. It should report that the file request has been revoked and must not show upload controls.

<figure class="help-screenshot">
  <a href="/screenshots/request-revoked-owner-2026-10-12.webp"><img src="/screenshots/request-revoked-owner-2026-10-12.webp" alt="Dosya file-request detail page marked Revoked while previously received files remain listed." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>The owner view changes to <strong>Revoked</strong>. Previously received files remain available, while the old public URL stops accepting new uploads. <a href="/screenshots/request-revoked-owner-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The request shows **Revoked** in Dosya. Opening its public URL returns a revoked message, and upload attempts through that URL are rejected. Files received before revocation remain in the request detail page and destination folder.

## Limits and important details

- The request URL stops accepting single-part and resumable uploads.
- Password unlock and recipient-specific invitation URLs do not reopen the request.
- Existing received files remain ordinary workspace files and continue to follow workspace permissions, locks, retention and trash rules.
- Revocation cannot be undone from the current web app. Create a new request when collection must resume, then send its new URL.
- An expired request is already closed by its deadline. The current detail page does not offer **Revoke** after expiry.

## Troubleshooting

**Revoke is missing.** Check the status badge. Revoked and expired requests are already closed. For an active request, confirm that you created it or have permission to manage file requests in the workspace.

**A recipient says the old page is still open.** Ask them to refresh the page and try a harmless upload. A page left open before revocation cannot complete a new upload after the server rejects the request.

**A file arrived near the time you revoked.** Check its received time, filename and size in the request detail page. An upload that completed before revocation can remain; an incomplete transfer cannot be resumed afterward.

**You closed the wrong request.** Revocation is not reversible. Keep its received files, create a replacement request with the correct destination and settings, and send the new URL only to the intended recipients.

**Received files appear missing.** Confirm the active workspace and request, clear any search filter, and inspect the destination folder. Contact private support with the request ID and nonsecret timestamps if the request count and folder listing disagree.

## Related guides

- [Create a file request](/sharing/file-request)
- [Change or close a file request](/sharing/manage-file-request)
- [Review files submitted to a request](/sharing/request-review-uploads)
