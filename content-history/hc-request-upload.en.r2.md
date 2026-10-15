---
{
  "articleId": "hc-request-upload",
  "locale": "en",
  "revision": 2,
  "title": "Uploading files through a file request",
  "summary": "Open a request without an account, check its rules, stage valid files, finish the transfer and keep the receipt.",
  "category": "sharing",
  "articleSlug": "request-upload",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified the current public file-request page with controlled current-API fixtures, web/API source and focused whole-file, multipart, visitor and relative-path tests on 2026-10-12. Screenshots use a fictional Acme Studio request and synthetic SVG and rejected EXE files. The review confirmed password, expiry and revocation gates; desktop and touch source choices; client and server rule checks; optional uploader labels; folder-path preservation; same-browser prior receipts; retry, cancel and completed receipt states; and workspace storage enforcement. No production file was uploaded. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-file-request",
    "hc-request-limits",
    "hc-request-password",
    "hc-request-recipients",
    "hc-failed-upload"
  ],
  "keywords": [
    "upload to file request",
    "send files without account",
    "request upload receipt",
    "staged files",
    "rejected request file",
    "retry upload",
    "guest upload"
  ]
}
---
Open the request URL, review who requested the files and the displayed rules, then choose or drop files. Selection only stages them. Select the numbered **Upload files** action and wait until the page records that the requester has the completed files.

You do not need a Dosya account. The link, any request password and its current expiry determine whether the upload page opens.

## Before you start

- Confirm the sender and receiving workspace shown on the page.
- Read the message, accepted extensions, per-file maximum and remaining slots.
- Keep the browser page open until every intended file has a receipt.
- Use the original files. Changing a filename extension does not convert its format.
- Avoid uploading secrets to a link received unexpectedly; confirm the request through another channel.

## Steps: stage the files

1. Open the complete request URL.
2. If the page is locked, enter the separate request password and select **Unlock**.
3. On a desktop, drop files into **Drop files here**, select **Browse files**, or select **Choose a folder**. On supported touch devices, choose **Photo library**, **Take a photo** or **Browse files**.
4. Review **This transfer** before uploading. Accepted files receive a number. A rejected row explains the extension, size, empty-file or slot problem.
5. Remove a mistaken row with its X control. Correct the source file or ask the requester to change a rule when the intended file is rejected.
6. Optionally enter **Your name** and, on an ordinary public link, **Your email**. These labels are not verified identity.
7. When uploader folders are enabled, review **Your folder** and **Your code**. The destination workspace remains private; you can only see files associated with your recipient token or browser visitor record.

<figure class="help-screenshot">
  <a href="/screenshots/request-upload-ready-2026-10-12.webp"><img src="/screenshots/request-upload-ready-2026-10-12.webp" alt="Public Brand asset collection request showing accepted PDF, SVG and PNG types, remaining slots, an SVG ready to upload and an EXE rejected with a type explanation." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>Review the terms and every staged row. The valid SVG can proceed; the EXE remains clearly excluded from the upload count. <a href="/screenshots/request-upload-ready-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: complete and verify the transfer

1. Select **Upload 1 file**, **Upload 2 files** or the equivalent count shown by the primary button.
2. Watch each line. Active rows display transferred bytes and percentage. You can cancel an active transfer from its row or use **Cancel all**.
3. If a row fails, read its message and select **Retry**. Large multipart uploads reuse their session so already accepted parts do not need to be sent again.
4. If the password grant expires, use **Unlock and continue** and enter the current request password.
5. Wait for the green receipt stating that the requester has the file or files. Record the timestamp and request reference when you need delivery evidence.
6. Use **Add more files** only when more slots remain and another submission is intended.
7. Reopen the same URL in the same browser to confirm your earlier received files still appear when needed.

<figure class="help-screenshot">
  <a href="/screenshots/request-upload-receipt-2026-10-12.webp"><img src="/screenshots/request-upload-receipt-2026-10-12.webp" alt="Public file request after upload with a green receipt stating that Firat Kaya has the file, including received time and request reference." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>The persistent receipt is the completion signal. A staged filename or progress percentage by itself is not proof that the requester received it. <a href="/screenshots/request-upload-receipt-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Folder uploads and returning visits

A chosen or dropped folder keeps its relative folder structure beneath the request destination. Paths that try to escape that destination are refused.

For an ordinary public link, Dosya stores a one-way visitor identifier in a browser cookie for 30 days. It lets that browser list and withdraw its own earlier request uploads. An invited URL can also use its recipient token for that purpose. Neither route exposes another uploader's files.

Clearing cookies, switching browsers or losing the recipient-specific URL can remove that returning view without removing the files already delivered to the workspace.

## Expected result

Every completed row is stored in the request's chosen workspace destination. The owner sees it in the request detail and Files. The public page shows a receipt and never exposes the rest of the workspace.

## Limits

- The requester can expire or revoke the request while you are working. A later API step can refuse even when the page opened earlier.
- Workspace storage, folder locks and request limits are rechecked by the server. Browser preflight is an early explanation, not the final authority.
- The optional name and email fields label the submission but do not verify a person. A recipient-token email is stronger attribution to the invitation URL, still not proof of who held it.
- Removing one of your earlier uploads from the public page deletes that received workspace file. Use the control only when you intend to withdraw it.

## Troubleshooting

**The file is red before upload.** Read the row. Choose an accepted extension, stay within the per-file maximum, use a non-empty file or ask for another slot.

**The connection dropped.** The row says nothing was saved for that failed attempt. Select **Retry** after the connection stabilizes; multipart files resume from accepted parts when possible.

**The request is full.** Ask the requester to raise **Max files**, remove an unwanted submission or create another request.

**The receipt appeared, but the owner cannot find the file.** Send the request reference, filename, size and receipt time privately. The owner should check the request detail, destination folder and active workspace.

**The page is expired or closed.** Ask for a fresh request. Files already shown as received remain with the requester.

## Frequently asked questions

### Does choosing files upload them immediately?

No. They are staged until you select the primary upload button.

### Can I upload a folder?

Yes on supported desktop browsers. Dosya preserves safe relative folders beneath the request destination.

### Can I see another person's submission?

No. The public page only lists uploads associated with your browser visitor record or recipient token.

## Related guides

- [File requests](/sharing/file-request)
- [Setting request limits](/sharing/request-limits)
- [Adding a request password](/sharing/request-password)
- [Inviting and tracking uploaders](/sharing/request-recipients)
- [Troubleshooting a failed upload](/troubleshooting/failed-upload)
