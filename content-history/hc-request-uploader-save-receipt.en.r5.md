---
{
  "articleId": "hc-request-uploader-save-receipt",
  "locale": "en",
  "revision": 5,
  "title": "Save a file-request submission receipt",
  "summary": "Save the on-page received stamp with file names, total bytes, local time, and request reference before changing browsers or losing visitor history.",
  "category": "sharing",
  "articleSlug": "request-uploader-save-receipt",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: src/pages/upload-request/[token].astro, apps/api/src/pages/api/upload-request/[token]/files.ts, apps/api/src/lib/upload-request/visitor.ts.",
  "related": [
    "hc-request-upload",
    "hc-request-troubleshoot"
  ],
  "keywords": [
    "request uploader save receipt",
    "File-request uploader workflow",
    "Dosya help",
    "file sharing"
  ]
}
---
Dosya shows an on-page receipt after at least one file succeeds; it does not download a receipt file. Save that visible record before leaving if you need independent proof.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/request-uploader-save-receipt-help-workflow-2026-10-14.webp" data-light-href="/screenshots/request-uploader-save-receipt-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/request-uploader-save-receipt-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/request-uploader-save-receipt-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/request-uploader-save-receipt-help-workflow-2026-10-14.webp" alt="Four-step map for waiting until uploads settle, confirming Received rows, reading the receipt stamp, and saving nonsecret delivery evidence." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Preserve the received filename list and on-page stamp only after every intended row reaches a terminal successful state. <a class="workflow-map-full" href="/screenshots/request-uploader-save-receipt-help-workflow-2026-10-14.webp" data-light-href="/screenshots/request-uploader-save-receipt-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/request-uploader-save-receipt-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Keep the request tab open until no row says **Uploading**. Leaving during a transfer can lose anything that has not landed, and the browser may warn before unloading.
2. Confirm every intended file appears under **Earlier today** or another dated divider with **Received**. Failed, paused, or rejected rows are not proof of delivery.
3. Read the receipt stamp beneath the ledger. It names who has the files, totals the successful count and bytes, shows the local received date and time, and includes the first 12 characters of the request token as **reference**.
4. Compare the receipt count and bytes with the received rows. A mixed run can announce both received and failed counts; save evidence only after handling every failed line.
5. Use a screenshot or the browser’s print-to-file command to preserve the visible stamp and filename list. Do not include the request password, email code, or full private URL in a ticket.
6. If you return later, use the same browser or the emailed recipient URL. Recipient identity works across devices; anonymous history depends on a per-request visitor cookie that lasts up to 30 days.

<figure class="help-screenshot"><a href="/screenshots/request-upload-ready-2026-10-12.webp"><img src="/screenshots/request-upload-ready-2026-10-12.webp" alt="Public request page with successfully received items retained in the transfer ledger." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The received ledger and stamp are the authoritative visible receipt; preserve both if you need a record outside the request page. <a href="/screenshots/request-upload-ready-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The saved evidence contains the accepted filenames, aggregate bytes, receipt time, and short request reference, without claiming rejected or failed items arrived.

**The receipt is page state plus the server’s prior-upload ledger, not an emailed or downloadable certificate.**
**Removing a prior upload permanently deletes that file and gives one request slot back.**

## Related guides

- [Upload to a request](/sharing/request-upload)
- [Troubleshoot a request](/sharing/troubleshoot-file-request)
