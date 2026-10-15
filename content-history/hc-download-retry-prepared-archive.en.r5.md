---
{
  "articleId": "hc-download-retry-prepared-archive",
  "locale": "en",
  "revision": 5,
  "title": "Retry a failed archive download",
  "summary": "Rebuild the original Files selection and start a fresh streamed ZIP after an archive fails; Dosya does not keep an expiring prepared job to reopen.",
  "category": "uploading",
  "articleSlug": "download-retry-prepared-archive",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-15; production behavior was not exercised for this revision. Verified against: apps/web/src/lib/archive-download.ts; apps/web/src/pages/files.tsx; apps/web/src/pages/files.download.test.tsx; apps/api/src/pages/api/files/download-archive.ts.",
  "related": [
    "hc-download-files",
    "hc-verify-downloaded-archive"
  ],
  "keywords": [
    "download retry prepared archive",
    "Download preparation and verification",
    "Dosya help",
    "file upload"
  ]
}
---

A Dosya ZIP is streamed directly to the browser. There is no stored preparation job, reusable completion page, or archive-expiry timer. If the tab shows an error or the browser transfer fails, return to the live Files view and submit a current selection.

Selections containing more than 300 IDs are split into parts of at most 300 IDs. One action may start no more than 20 ZIP downloads. Folder IDs and file IDs are chunked separately, so the exact part count can be higher than a simple total divided by 300.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/download-retry-prepared-archive-help-workflow-2026-10-14.webp" data-light-href="/screenshots/download-retry-prepared-archive-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/download-retry-prepared-archive-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/download-retry-prepared-archive-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/download-retry-prepared-archive-help-workflow-2026-10-14.webp" alt="Four-step archive retry map showing the saved failure, a smaller current selection, automatic part starts lasting up to 11.6 seconds, and counts-only failure review." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Start a fresh stream from a smaller selection, allow the automatic sequence to settle, and compare ZIP contents because the failure receipt identifies counts rather than chunks. <a class="workflow-map-full" href="/screenshots/download-retry-prepared-archive-help-workflow-2026-10-14.webp" data-light-href="/screenshots/download-retry-prepared-archive-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/download-retry-prepared-archive-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Close the error tab or cancel the failed browser transfer, but keep a note of its exact response before retrying.
2. Return to **Files** and reopen the original folder so the selection reflects items that still exist and that your role can currently see.
3. Select the source rows again; if the prior response named the 10,000-entry or 5 GiB cap, divide the content into smaller folders or batches.
4. Choose **Download ZIP** once. If Dosya refuses more than 20 browser downloads, select fewer IDs and repeat after that smaller batch finishes.
5. For a split selection, let the browser run its automatic sequence: parts start 400 milliseconds apart, and the final hidden frame settles four seconds after it starts. This takes `(N - 1) × 400 ms + 4 s`, or about 11.6 seconds at the 20-part maximum.
6. Check the browser downloads list, open every completed ZIP, and compare their contents with the selection. If a part failed, Dosya reports only counts; retry a deliberately smaller, known subset so you can identify what is missing.

<figure class="help-screenshot"><a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Dosya Files selection toolbar showing a two-item selection and the Download ZIP button used to start a fresh archive stream." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Recreate the selection in Files and use <strong>Download ZIP</strong>; an earlier browser transfer is not a saved Dosya archive job. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Each accepted part appears as a new browser download. For one part, the toast says **Your ZIP is being prepared by the browser.** For several parts, it says **Too many items for one file - arriving as N ZIPs.**

**That selection would need N separate downloads, and 20 is the most one action will start** is a client refusal: reduce the selected rows. **X of N downloads started** means one or more archive parts rendered an error instead of becoming a download, but the receipt does not identify the failed chunk or source IDs. Compare the completed ZIP contents with the original selection, or retry deliberately smaller known batches. Starting again can produce another complete ZIP, so remove duplicates locally only after opening and comparing them.

## Related guides

- [Start a fresh download from Files](/uploading/download-files)
- [Verify a downloaded Dosya ZIP archive](/uploading/verify-downloaded-archive)
