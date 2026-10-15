---
{
  "articleId": "hc-request-uploader-replace-rejected",
  "locale": "en",
  "revision": 5,
  "title": "Replace a rejected file-request item",
  "summary": "Remove a preflight-rejected request item, stage a compliant replacement, and retry transfer failures without resending files already received.",
  "category": "sharing",
  "articleSlug": "request-uploader-replace-rejected",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: src/pages/upload-request/[token].astro, apps/api/src/pages/api/upload-request/[token]/multipart/init.ts, apps/api/src/pages/api/upload-request/[token]/multipart/[sessionId]/part/[partNumber].ts, apps/api/src/pages/api/upload-request/[token]/multipart/[sessionId]/abort.ts.",
  "related": [
    "hc-request-upload",
    "hc-request-troubleshoot"
  ],
  "keywords": [
    "request uploader replace rejected",
    "File-request uploader workflow",
    "Dosya help",
    "file sharing"
  ]
}
---
A rejected row was never uploaded. Read its exact reason, remove it, and add a corrected file; use **Retry** only for a file that passed preflight but failed during transfer.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/request-uploader-replace-rejected-help-workflow-2026-10-14.webp" data-light-href="/screenshots/request-uploader-replace-rejected-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/request-uploader-replace-rejected-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/request-uploader-replace-rejected-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/request-uploader-replace-rejected-help-workflow-2026-10-14.webp" alt="Four-step map for reading a rejection, removing the unsent row, adding a corrected replacement, and retrying only a transfer failure." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Match the recovery to the ledger state: replace a locally rejected file, or retry a row whose transfer already started. <a class="workflow-map-full" href="/screenshots/request-uploader-replace-rejected-help-workflow-2026-10-14.webp" data-light-href="/screenshots/request-uploader-replace-rejected-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/request-uploader-replace-rejected-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Read the red text beneath the item. Preflight messages include **This file is empty**, **There is no slot left on this request**, missing or disallowed extension text, and the exact per-file size comparison.
2. If the row is rejected before upload, use its remove icon. Rejected items consume no request slot and send no bytes, so removing one does not delete anything from Dosya.
3. Prepare a replacement that fixes the named cause: add an accepted extension, export nonempty content, reduce the individual size, or ask the sender to raise a full request’s limit.
4. Add the replacement with the file picker, folder picker, drag and drop, paste, or the mobile photo/camera controls. Confirm its row no longer shows **cannot be sent**.
5. Choose **Upload 1 file** or the current queue count. Previously completed files live above the dated divider and are not put back into the active queue.
6. For a row marked failed after transfer began, choose **Retry** instead. Large-file retries reuse the resumable session and safely resend its 10 MiB parts; the server treats repeated part numbers idempotently. Discard aborts the session and releases its reserved slot.

<figure class="help-screenshot"><a href="/screenshots/request-upload-ready-2026-10-12.webp"><img src="/screenshots/request-upload-ready-2026-10-12.webp" alt="Public request page with ready and rejected files listed together before submission." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The ledger keeps rejected items visibly separate from uploadable rows, so replace only the row whose message identifies the failed rule. <a href="/screenshots/request-upload-ready-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The invalid local item never leaves the browser, the corrected replacement uploads once, and earlier successful files remain in the received ledger.

A 403 pauses remaining rows and opens **Your access timed out**; re-enter the request password to continue.
A connection failure can show **The connection dropped. Nothing was saved.** on a small-file request.

## Related guides

- [Upload to a request](/sharing/request-upload)
- [Troubleshoot a request](/sharing/troubleshoot-file-request)
