---
{
  "articleId": "hc-request-uploader-check-limits",
  "locale": "en",
  "revision": 5,
  "title": "Check file-request limits before uploading",
  "summary": "Check accepted extensions, per-file size, and remaining slots before transfer, then recognize quota or concurrent-uploader refusals correctly.",
  "category": "sharing",
  "articleSlug": "request-uploader-check-limits",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: src/pages/upload-request/[token].astro, apps/api/src/pages/api/upload-request/[token]/upload.ts, apps/api/src/pages/api/upload-request/[token]/multipart/init.ts, apps/api/src/lib/upload-request/guard.ts.",
  "related": [
    "hc-request-upload",
    "hc-request-troubleshoot"
  ],
  "keywords": [
    "request uploader check limits",
    "File-request uploader workflow",
    "Dosya help",
    "file sharing"
  ]
}
---
The request page lists only the limits configured by its owner. Check **Accepts**, **Per file**, and **Slots** before choosing files; workspace storage can still refuse a compliant selection.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/request-uploader-check-limits-help-workflow-2026-10-14.webp" data-light-href="/screenshots/request-uploader-check-limits-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/request-uploader-check-limits-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/request-uploader-check-limits-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/request-uploader-check-limits-help-workflow-2026-10-14.webp" alt="Four-step map for checking the active request, reading Accepts Per file and Slots, comparing file size, and reading staged-row refusals." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the request terms for local preflight, then read every ledger row because server storage and lock gates can still refuse a file. <a class="workflow-map-full" href="/screenshots/request-uploader-check-limits-help-workflow-2026-10-14.webp" data-light-href="/screenshots/request-uploader-check-limits-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/request-uploader-check-limits-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the complete request URL. If the page says **This request has expired**, **This request was closed**, or **No request at this link**, ask the sender for a current link before selecting anything.
2. Read the terms block. **Accepts** lists allowed filename extensions, **Per file** is the maximum for each individual file, and **Slots** shows remaining count against the request maximum.
3. Compare extensions case-insensitively, including the leading dot. A file without an extension is rejected when type restrictions exist, and a zero-byte file is always rejected.
4. Compare each file’s actual size with **Per file**; do not total several smaller files against that value. Files over 50 MiB use resumable multipart transfer with 10 MiB parts, but still obey the same per-file ceiling.
5. Keep the selection within the displayed remaining slots. Staging counts accepted items immediately; a concurrent uploader can still take the final slot before your transfer reserves it.
6. Stage the files and read each ledger line. Rejected rows say why they cannot be sent; server-side storage quota, a newly locked destination, or **This request has reached its file limit.** can still stop an otherwise valid file.

<figure class="help-screenshot"><a href="/screenshots/request-upload-ready-2026-10-12.webp"><img src="/screenshots/request-upload-ready-2026-10-12.webp" alt="Public request page with files ready in the transfer ledger before upload starts." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use the request’s terms and ready ledger together: terms state allowed types, size, and slots, while each staged line carries its own rejection reason. <a href="/screenshots/request-upload-ready-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Only files matching the displayed extension, size, and slot rules enter the upload queue; later server refusals remain visible on their own failed rows.

**The page cannot expose the owner’s remaining workspace storage, so there is no uploader-side quota number to precheck.**
**A request can close between staging and upload; the server rechecks every gate.**

## Related guides

- [Upload to a request](/sharing/request-upload)
- [Troubleshoot a request](/sharing/troubleshoot-file-request)
