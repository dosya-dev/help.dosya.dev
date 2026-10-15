---
{
  "articleId": "hc-request-upload",
  "locale": "en",
  "revision": 3,
  "title": "Upload files through a file request",
  "summary": "Send files without a Dosya account, satisfy the request's extension, size and slot rules, recover interrupted transfers, and keep the delivery receipt.",
  "category": "sharing",
  "articleSlug": "request-upload",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against src/pages/upload-request/[token].astro, apps/api/src/pages/api/upload-request/[token].ts, apps/api/src/pages/api/upload-request/[token]/upload.ts, apps/api/src/pages/api/upload-request/[token]/files.ts, apps/api/src/pages/api/upload-request/[token]/unlock.ts, apps/api/src/pages/api/upload-request/[token]/multipart/init.ts, apps/api/src/pages/api/upload-request/[token]/multipart/[sessionId]/part/[partNumber].ts, apps/api/src/pages/api/upload-request/[token]/multipart/[sessionId]/complete.ts, apps/api/src/pages/api/upload-request/[token]/multipart/[sessionId]/abort.ts, apps/api/src/lib/upload-request/guard.ts, apps/api/src/lib/upload-request/visitor.ts and focused upload-request unit tests. Verified source choices, exact closed and error states, three-file and three-part concurrency, 50 MiB multipart threshold, 10 MiB parts, same-page-only session reuse with every part request restarted at one, server acknowledgement of recorded part numbers without another object-store upload, ambiguous response-loss recovery through returning submissions and the receipt, best-effort multipart abort and slot release, completed-session and expired-grant cancellation outcomes, 30-minute password grants, 30-day visitor identity, server-side slot, extension, size, quota and folder-lock checks, receipt contents and withdrawal deletion. Existing staging and receipt captures were inspected and remain accurate.",
  "related": ["hc-file-request", "hc-request-limits", "hc-request-password", "hc-request-recipients", "hc-request-troubleshoot", "hc-request-uploader-save-receipt"],
  "keywords": ["upload files without account", "client file request upload", "guest cloud upload", "file request limits", "resume requested file upload", "file upload receipt", "send folder to Dosya"]
}
---
A Dosya file request lets you upload into the sender's chosen cloud folder without creating an account. Choosing files only stages them. The sender receives a file after its row completes and the page shows a stamped receipt.

## Steps

### Verify the request before sending

- Confirm the sender through a trusted channel when the link was unexpected.
- Read the workspace name, requester, title, message and displayed terms.
- Check the accepted extensions, maximum size for each file and remaining file slots.
- Keep the page open until every intended row is received or has a clear failure.
- Use the real source file. Renaming an extension does not convert its contents.

An expired page says **This request has expired**. A revoked request says **This request was closed**. An unknown or broken URL says **No request at this link**. In all three cases, ask the sender for a current link instead of repeatedly submitting the old address.

### Unlock a protected request

1. Enter the request password under **Password** and choose **Unlock**.
2. If the value is wrong, the page displays the server's error without revealing the request rules.
3. **Too many attempts. Unlocking is paused for 15 minutes - ask the sender for the password rather than guessing.** Stop entering passwords until the pause ends.

A successful password grant lasts 30 minutes. If it expires during a transfer, the page shows **Your access timed out** and **Unlock and continue**. Re-entering the current password continues remaining files; rows already received are not sent again.

### Stage files or a folder

1. On desktop, use **Drop files here**, **Browse files**, or **Choose a folder**. Supported touch devices offer **Photo library**, **Take a photo**, and **Browse files**.
2. Review **This transfer**. Accepted rows are numbered; rejected rows remain marked with their reason.
3. For a mistaken staged row, choose the control announced as **Remove _filename_**; an active row announces **Cancel _filename_** instead.
4. Enter **Your name (optional)**. On a public link, you may also enter **Your email (optional)**; these typed labels are not verified identity.
5. When the sender enabled uploader folders, review **Your folder** and **Your code**. Dosya uses them to keep submissions separated without revealing the workspace tree.

<figure class="help-screenshot">
  <a href="/screenshots/request-upload-ready-2026-10-12.webp"><img src="/screenshots/request-upload-ready-2026-10-12.webp" alt="Public Dosya file request showing accepted PDF SVG and PNG rules, remaining slots, one SVG ready to send and one EXE rejected by file type." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>The SVG is numbered and ready; the EXE stays excluded with a type explanation. Correct rejected rows before choosing the counted upload action. <a href="/screenshots/request-upload-ready-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

A selected folder keeps safe relative subfolders beneath the sender's destination. A path that attempts to escape that destination is refused with **That folder path is not accepted - upload the files directly instead.**

### Upload and wait for the receipt

1. Choose **Upload 1 file**, **Upload 2 files**, or the count shown by the primary button.
2. Watch each row's transferred bytes and percentage. The page sends up to three files at a time.
3. Use a row's **Cancel** action to stop one transfer, or **Cancel all** to stop active work. A canceled file returns to a staged state and can be started again.
4. For a failed row, read its exact message and choose **Retry** only after correcting the cause.
5. Wait for the green stamp stating that the requester **has this file** or **has these _N_ files**. It includes total received size, local date and time, and a reference made from the first 12 characters of the request token.
6. Choose **Add more files** only if slots remain and another submission is intended.

<figure class="help-screenshot">
  <a href="/screenshots/request-upload-receipt-2026-10-12.webp"><img src="/screenshots/request-upload-receipt-2026-10-12.webp" alt="Completed Dosya file request with a green receipt naming the requester, received time, total size and request reference." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>The stamped receipt is the delivery signal. A staged name or progress percentage alone does not prove that the sender received the cloud file. <a href="/screenshots/request-upload-receipt-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Large-file and retry behavior

Files at or below 50 MiB use one request. A dropped connection can report **The connection dropped. Nothing was saved.**, but that client message does not prove the server failed before recording the file and losing its response. Check the receipt and the returning previous-submissions list, then ask the sender to verify the destination before replaying an ambiguous upload. If no received copy exists, **Retry** resends the complete file.

Files larger than 50 MiB use resumable multipart upload with 10 MiB parts. The page can send three parts of one file concurrently. While the same loaded page still holds the source file and its session ID, **Retry** reuses that session but starts its part requests again at part 1. The browser reattempts every part request; for a part number already recorded, the server returns the stored result without uploading those bytes to object storage again. Completion checks the received total before registering the file. Refreshing the page loses the in-memory staged queue, source-file bytes and session retry context, so reselecting afterward starts a new upload instead of resuming that session. An error after the final completion request is ambiguous: before choosing **Retry**, open the same request in another tab to check returning previous submissions and ask the sender when no receipt confirms the outcome.

Canceling or discarding a multipart row stops the browser requests and sends a best-effort server abort. An accepted abort attempts two separate writes: retiring the upload session and releasing its reserved file-request slot. Either write can remain pending, so a local cancel or successful abort response does not guarantee immediate slot recovery. An expired password grant can prevent the abort request from reaching those writes, and a session that already completed returns a conflict because its stored file legitimately keeps the counted slot. Check the request state instead of assuming a local cancel reversed server completion.

## Limits and server checks

The sender chooses the extension list, per-file size ceiling and maximum file count. Dosya rechecks those rules at upload time because another visitor can take the last slot after your page loaded.

Common exact responses include:

- **This request has reached its file limit.** The owner can raise or clear the maximum, or create another request. If an unwanted submission should be removed, the original uploader can permanently withdraw it from the still-active public page; an owner's ordinary deletion does not return that request slot.
- **File type ._ext_ is not allowed. Accepted: ...** Choose an allowed source or ask the sender to change the rule.
- **File is too large. Maximum size is _N.N_ MB.** Use a smaller file or a request with a higher per-file maximum.
- **This upload request can no longer accept files.** The destination was locked after the request was created.
- A quota message means the receiving workspace lacks enough plan or workspace capacity. Only the owner can free or add storage.

The server measures the received bytes rather than trusting a browser-supplied size. A request can therefore reject a file after an early browser check if the final transfer violates a live rule.

## Returning to your submissions

For an ordinary public link, Dosya stores a high-entropy visitor secret in an HttpOnly browser cookie for 30 days and stores only its hash with the upload. Reopening the same request in that browser can list and withdraw only that visitor's previous submissions. An invited URL uses its recipient token for the same separation.

Clearing cookies, changing browsers or losing the recipient-specific URL can remove that returning view without deleting files already delivered. The public page never lists another uploader's files or the rest of the destination workspace.

Withdrawing a previous upload deletes that received file from the workspace. This is irreversible from the public page. Use it only when the sender agrees that the delivered copy should be removed.

## Expected result

Every intended row reaches the received state, the stamp records the delivery, and the sender sees the files in the file-request detail and chosen Files destination. No account was required, and the public page exposed no unrelated workspace content.

## Troubleshooting

**A row is red before upload.** Correct the displayed extension, empty-file, size or slot problem. Re-selecting the same invalid source will not change the rule.

**Some files succeeded and others failed.** Preserve the receipt for completed rows. Retry only failed rows after fixing their specific messages.

**Access timed out mid-batch.** Choose **Unlock and continue**. The remaining files carry on after a valid password; received rows stay received.

**The receipt exists but the sender cannot find the file.** Send the private reference, filename, size and receipt time. The owner should inspect the request detail, active workspace and configured destination.

## Related guides

- [Create a file request](/sharing/file-request)
- [Set file-request limits](/sharing/request-limits)
- [Protect a request with a password](/sharing/request-password)
- [Invite and track uploaders](/sharing/request-recipients)
- [Troubleshoot a rejected request upload](/sharing/troubleshoot-file-request)
- [Save a submission receipt](/sharing/request-uploader-save-receipt)
