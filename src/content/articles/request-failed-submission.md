---
{
  "articleId": "hc-request-failed-submission",
  "locale": "en",
  "revision": 6,
  "title": "Track a failed file-request submission",
  "summary": "Diagnose rejected or interrupted file-request uploads from exact messages, then retry safely without resending files that were already received.",
  "category": "sharing",
  "articleSlug": "request-failed-submission",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified against src/pages/upload-request/[token].astro; apps/api/src/lib/upload-request/guard.ts; apps/api/src/pages/api/upload-request/[token]/upload.ts; apps/api/src/pages/api/upload-request/[token]/multipart/init.ts; and apps/api/src/pages/api/upload-request/[token]/multipart/[sessionId]/complete.ts. Production behavior was not exercised.",
  "related": [
    "hc-file-request",
    "hc-request-manage"
  ],
  "keywords": [
    "request failed submission",
    "file request operations",
    "Dosya help",
    "file sharing"
  ]
}
---
A failed item has not reached the request owner's live upload list. Diagnose the message beside that file, preserve every completed item, and retry only what remains failed or cancelled. Recipients do not need a Dosya account to use an active public request.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/request-failed-submission-workflow-map-2026-10-14.webp" data-light-href="/screenshots/request-failed-submission-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/request-failed-submission-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/request-failed-submission-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/request-failed-submission-workflow-map-2026-10-14.webp" alt="Light and dark recovery map for reading an upload error, fixing its cause, retrying one item, and confirming the receipt." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Start with the exact per-file response so a retry addresses policy, access, storage, or connectivity without duplicating successful submissions. <a class="workflow-map-full" href="/screenshots/request-failed-submission-workflow-map-2026-10-14.webp" data-light-href="/screenshots/request-failed-submission-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/request-failed-submission-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Keep the upload page open and find the failed file. Record its name, byte size, and complete error text.
2. Leave completed items alone. The page retains prior successes, and retrying the whole selection can produce a second workspace file with a collision-adjusted name.
3. Correct the cause described below. If the request owner must change policy, ask them to update the active request before you retry.
4. Choose **Retry** on that failed row. Large multipart retries resume the same active session and send only missing parts.
5. If a stalled item is no longer needed, choose **Discard**. Dosya aborts an incomplete multipart session and releases its reserved file slot; it does not remove another file that already completed.
6. Wait for the finished receipt. It states that the requester has the files, shows total bytes and time, and includes a reference. Send that reference to the owner if reconciliation is needed.

## Read the exact rejection

The browser checks several rules before transferring bytes:

- **This file has no extension, so its type cannot be checked** means the request accepts only listed extensions and the selected item has none.
- **.ext is not accepted here - send ...** identifies an extension outside **Allowed extensions**.
- **This file is empty** rejects a zero-byte item.
- **This file is over the X limit for this request** compares the local size with **Max file size (MB)**.
- **There is no slot left on this request** means its configured maximum file count has been reached.

The server checks the received data again. It can return **File type .ext is not allowed. Accepted: ...**, **File is too large. Maximum size is X.Y MB**, or **This request has reached its file limit.** The actual received byte length is authoritative. A direct single-part attempt above 50 MiB is refused with **File exceeds the 50 MB limit for a single upload; use the multipart flow**.

Files larger than 50 MiB use multipart upload with 10 MiB parts. Dosya transfers up to three files in parallel, and a multipart file can send up to three parts concurrently. Completion waits for every expected part; **Only X of Y parts uploaded. Upload remaining parts before completing.** means the session can still be resumed.

<figure class="help-screenshot"><a href="/screenshots/request-recipient-management-2026-10-12.webp"><img src="/screenshots/request-recipient-management-2026-10-12.webp" alt="Owner recipient panel for checking whether the affected personalized address remains pending after a failed submission." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The owner can compare the uploader's receipt with this status panel; a failed transfer does not change a pending recipient to **Uploaded**. <a href="/screenshots/request-recipient-management-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Access, storage, and connection failures

**This request has expired** or **This file request has expired** means the deadline passed; only the owner can extend the request or create another one. **This request was closed** and **This file request has been revoked** mean the owner revoked access. Files already received remain with the workspace in both cases.

**No request at this link** or **Request not found** indicates an invalid or deleted token. Ask the sender for a fresh link instead of editing the URL. **Could not reach dosya.dev** is a page-load network problem.

If password access lapses during a transfer, the page pauses remaining work and shows **Your access timed out**. Enter the current password to continue; successfully received files are not lost. After repeated wrong guesses, **Too many attempts. Unlocking is paused for 15 minutes - ask the sender for the password rather than guessing.** Wait the full interval or obtain the correct password.

**This upload request can no longer accept files.** means the destination became fully locked after the link was created. Workspace quota errors require the owner to free storage or adjust their workspace capacity. Neither condition is fixed by changing browser or by repeated retries.

**The connection dropped. Nothing was saved.** applies to that failed attempt. Retry after connectivity stabilizes. A multipart session that reports **Upload session is no longer active - start the upload again** cannot resume; select the file again to create a new session. **Failed to finalize upload in storage** and **Failed to record file** require a new attempt after the service recovers.

## Platform and policy notes

Uploaders use the public browser page on desktop or phone. Pointer devices offer **Browse files** and **Choose a folder**; touch devices show **Photo library**, **Take a photo**, and **Browse files**. The owner manages request limits and destination from the Dosya web app; desktop and mobile do not expose destination changes.

Request upload access has no separate recipient role or paid-plan requirement. The workspace owner remains subject to storage quota, request expiry, password, extension, byte-size, file-count, and destination-lock rules. A rejected or aborted attempt deliberately releases its reserved request slot; a completed upload consumes one slot.

## Expected result

Only the unsuccessful item is retried, its progress reaches completion, and the final receipt identifies the accepted bytes and time. The owner sees the new live file once, while earlier successful uploads remain unchanged.

## Troubleshooting

**Retry repeats an extension or size error.** The file still violates current request policy. Select a permitted file or ask the owner to change **Allowed extensions** or **Max file size (MB)**; renaming an extension does not alter actual file content.

**The page says all slots are full.** The owner must raise **Max files**, remove a suitable prior upload through an authorized flow, or create another request. Retrying cannot exceed the atomic slot limit.

**The owner cannot find the file after a receipt.** Provide the receipt reference, filename, byte count, and time. The owner should inspect the request's current destination, visibility scope, and Trash rather than asking you to upload it again immediately.

**A cancelled item appears ready again.** Cancellation stages the file for another attempt. Use **Discard** to abandon its incomplete session, or remove it from the list if the interface offers that control.

## Related guides

- [Create a file request](/sharing/file-request)
- [Manage a file request](/sharing/manage-file-request)
