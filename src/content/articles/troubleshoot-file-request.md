---
{
  "articleId": "hc-request-troubleshoot",
  "locale": "en",
  "revision": 2,
  "title": "Fix a rejected or incomplete file-request upload",
  "summary": "Match the exact file-request error to its cause, recover an interrupted transfer and confirm whether Dosya received the file before retrying.",
  "category": "sharing",
  "articleSlug": "troubleshoot-file-request",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against src/pages/upload-request/[token].astro, apps/api/src/pages/api/upload-request/[token].ts, apps/api/src/pages/api/upload-request/[token]/upload.ts, apps/api/src/pages/api/upload-request/[token]/multipart/init.ts, apps/api/src/pages/api/upload-request/[token]/multipart/[sessionId]/part/[partNumber].ts, apps/api/src/pages/api/upload-request/[token]/multipart/[sessionId]/complete.ts, apps/api/src/pages/api/upload-request/[token]/multipart/[sessionId]/abort.ts, apps/api/src/pages/api/upload-request/[token]/files.ts, apps/api/src/lib/upload-request/access.ts, apps/api/src/lib/quota.ts and their focused unit tests. Confirmed exact visitor messages, 50 MiB multipart selection, 10 MiB parts, three file and three per-file part workers, same-page retry from part 1 with idempotent existing-part acknowledgement, access re-unlock, separate best-effort session-retirement and slot-release outcomes, cross-tab receipt checks and permanent visitor withdrawal. Existing captures were inspected and remain accurate.",
  "related": [
    "hc-request-upload",
    "hc-request-limits",
    "hc-request-password",
    "hc-request-manage",
    "hc-storage-usage"
  ],
  "keywords": [
    "file request upload failed",
    "file request rejected",
    "incomplete client upload",
    "retry interrupted upload",
    "request file limit",
    "upload error message",
    "cloud storage quota"
  ]
}
---
Use the message beside the file before starting another transfer. Dosya checks the filename, byte size, remaining request slots, request status, destination lock and workspace storage at different points. A retry only helps after a connection failure; it cannot override a rule or reopen a closed request.

## Steps: identify where the upload stopped

| Stage | Evidence on the page | Meaning |
| --- | --- | --- |
| Before upload | A red reason appears under the staged filename | No bytes were sent for that file |
| During upload | The line shows a percentage, then **Retry** and an error | The browser did not complete the transfer |
| After upload | The file moves into the dated receipt list and the page says the requester has it | Dosya recorded the file |
| After reopening | The file appears under an earlier date with **Received** | This browser or recipient link can see the completed submission |

If the connection drops, the page can display **The connection dropped. Nothing was saved.** That is the browser's network-error wording, not proof that the server did not finish before the response was lost. Keep the original page open so it retains the selected file and any multipart session. Open the same request in another tab, inspect the returning received history, then retry on the original page only when no receipt confirms completion.

## Fix a file rejected before transfer

The public page performs the same basic checks before it enables **Upload N files**:

- **This file has no extension, so its type cannot be checked** means the request has an extension allowlist and the filename has no suffix. Ask the owner which real format to provide.
- A message such as **.exe is not accepted here - send .pdf, .docx** means the final filename extension is outside **Accepts**. Renaming unrelated content does not convert it.
- A message such as **84 MB is over the 50 MB limit for this request** compares one file with the displayed **Per file** maximum.
- **This file is empty** refuses a zero-byte item.
- **There is no slot left on this request** means completed files and reserved in-progress sessions have consumed **Max files**.

Remove the rejected line, correct the named problem and select the file again. The allowed-extension comparison is case-insensitive. A file can still be refused by the server if another uploader takes the last slot or the owner changes a rule after your page loaded.

<figure class="help-screenshot">
  <a href="/screenshots/request-upload-ready-2026-10-12.webp">
    <img src="/screenshots/request-upload-ready-2026-10-12.webp" alt="Public file request showing an accepted SVG ready for transfer and an EXE file rejected by the extension rule." width="1440" height="1000" loading="lazy" decoding="async" />
  </a>
  <figcaption>The accepted file remains staged while the rejected row names the extension rule that must be corrected. <a href="/screenshots/request-upload-ready-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Match server errors to the owner action

| Error or page state | What changed | Recovery |
| --- | --- | --- |
| **This request has expired** | Its deadline passed | The owner can edit the deadline to a future value or **Never** |
| **This request was closed** | The owner revoked it | Revocation is irreversible; the owner must create another request |
| **This request has reached its file limit.** | The atomic slot reservation found no capacity | The owner raises or clears **Max files**, or creates a replacement |
| **This upload request can no longer accept files.** | The destination or an ancestor now has a full lock | The owner removes or changes the configured lock, or edits the destination |
| **File is too large. Maximum size is N MB** | The measured or declared file exceeds the current request maximum | Supply a smaller permitted file or ask the owner to revise the limit |
| **File type .ext is not allowed. Accepted: ...** | The server rejected the final extension | Send one of the listed formats |
| A workspace storage-limit message | The receiving workspace lacks available allocation | The owner frees storage permanently, changes the workspace allowance or chooses another workspace |

An owner can review **File requests**, open the request, then use **Edit** to check **Expires**, **Upload destination**, **Allowed extensions**, **Max file size (MB)** and **Max files**. Editing cannot restore a revoked token.

<figure class="help-screenshot">
  <a href="/screenshots/request-advanced-limits-2026-10-12.webp">
    <img src="/screenshots/request-advanced-limits-2026-10-12.webp" alt="File request form with allowed extensions, maximum file size and maximum file count configured for incoming files." width="1440" height="1000" loading="lazy" decoding="async" />
  </a>
  <figcaption>Compare the failed file with the owner’s current extension, per-file size and total-file controls before another attempt. <a href="/screenshots/request-advanced-limits-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Recover an interrupted transfer

Files larger than 50 MiB use a resumable session. Dosya divides them into 10 MiB parts, sends as many as three parts for that file at once and can work on as many as three files concurrently. While the same loaded page still holds the source file and session ID, **Retry** reuses that session but starts its requests again at part 1. The browser reissues every part request; when the server already recorded a part number, it returns the stored result without writing those bytes to object storage again.

1. Leave the request tab open and keep the original file available on the device.
2. When the line changes to failed, read its exact error.
3. Restore a stable connection, then select **Retry** on that line.
4. If the request is password protected and the page shows **Your access timed out**, enter the current request password and choose **Unlock and continue**. Remaining files continue; completed receipt lines stay complete.
5. Wait for the dated receipt and the message that the requester has the file.

Refreshing closes the browser's in-memory queue and discards access to the selected File objects. A new page cannot reconstruct that same resumable session from disk. After refresh, check the receipt; if the file is absent, select it again and begin a new upload.

Small files use one request instead of a multipart session. Their progress cannot resume at an earlier byte. Retry sends the whole small file again after you confirm it is missing from the receipt.

## Cancel, discard or withdraw

- **Cancel all** stops active browser requests. A staged item remains available to send again.
- Removing a failed multipart row attempts a best-effort server abort. Retiring the session and releasing the request slot are separate best-effort writes; either can remain pending even if the abort endpoint answers success. A rejected password or inactive request can stop the call before both writes. Retirement failure leaves the pending or uploading session for the stale-session sweep. A failed slot release can leave one slot counted with no automatic age-down; the request owner or Dosya support may need to reconcile the occupied count. If the session already completed, abort returns a conflict and the recorded file legitimately keeps its counted slot.
- Removing a staged item that never started changes only the browser list.
- The remove control beside an earlier **Received** item is a withdrawal. It is available only to the same per-recipient token or browser visitor identity that uploaded the file.

Withdrawal permanently purges the workspace file, its versions and associated shares, decrements the request count and frees its measured storage. It does not move the file to **Deleted**, so neither the uploader nor owner can restore it from Dosya Trash. A workspace owner deleting the received file from **Files** is different: that ordinary action is a soft delete, keeps using storage while retained and does not return a slot to the request.

The public withdrawal action stops working after the request expires or is revoked. Ask the owner about retention if the request has already closed.

## Password and invitation checks

A request password is separate from a Dosya account password. Five unlock attempts are allowed per request token and client IP in 15 minutes. After the limit, the page says unlocking is paused for 15 minutes. A successful unlock grants that browser 30 minutes of request access.

An emailed invitation adds a recipient token to the URL. It associates uploads with the invited address without sending or checking an inbox code. Forwarding that URL can therefore attribute another person's submission to the invited address. Use the recipient's original link for correct tracking, but do not treat **Uploaded** as identity proof.

## Expected result

The transfer is complete only when the received file appears in the dated ledger and the confirmation stamp includes the count, received size, time and request reference. The owner should also see it in the request's upload table and destination folder.

If a permitted small test still fails, send the owner the request title, time and time zone, browser, approximate size, true filename extension and exact redacted message. Do not publish the request URL, password or file contents. The owner should verify request status, destination access and workspace storage before contacting [Dosya support](https://dosya.dev/contact/).

## Related guides

- [Upload files through a file request](/sharing/request-upload)
- [Set file-request types, sizes and counts](/sharing/request-limits)
- [Protect a file request with a password](/sharing/request-password)
- [Edit or close a file request](/sharing/manage-file-request)
- [Understand workspace storage usage](/uploading/storage-usage)
