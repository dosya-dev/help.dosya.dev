---
{
  "articleId": "hc-download-archive-preparation",
  "locale": "en",
  "revision": 5,
  "title": "Start a streaming ZIP download",
  "summary": "Start a streamed ZIP from Files, allow the browser time to accept it, and confirm the download begins without starting duplicate archive requests.",
  "category": "uploading",
  "articleSlug": "download-archive-preparation",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-15; production behavior was not exercised for this revision. Verified against: apps/web/src/pages/files.tsx; apps/web/src/lib/archive-download.ts; apps/api/src/pages/api/files/download-archive.ts; apps/api/src/lib/archive-stream.ts.",
  "related": [
    "hc-download-files",
    "hc-verify-downloaded-archive"
  ],
  "keywords": [
    "download archive preparation",
    "Download preparation and verification",
    "Dosya help",
    "file upload"
  ]
}
---

Dosya does not build an archive job with a separate ready screen. **Download ZIP** navigates the browser to a streaming archive response, and the Files page immediately reports **Download started** with **Your ZIP is being prepared by the browser.** Keep the new archive tab or browser download active while the stream begins.

A single request can include at most 10,000 files and 5 GiB of source data. The archive is named `dosya-download.zip`. You need access to Files and the `download_files` permission; a denied role receives **You don't have download permission**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/download-archive-preparation-help-workflow-2026-10-14.webp" data-light-href="/screenshots/download-archive-preparation-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/download-archive-preparation-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/download-archive-preparation-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/download-archive-preparation-help-workflow-2026-10-14.webp" alt="Four-step archive start map showing Download ZIP availability, the direct streaming response, dosya-download.zip in the browser, and final ZIP inspection." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Confirm <strong>Download ZIP</strong>, start one direct stream, require <code>dosya-download.zip</code> in the browser, and inspect its top-level names. <a class="workflow-map-full" href="/screenshots/download-archive-preparation-help-workflow-2026-10-14.webp" data-light-href="/screenshots/download-archive-preparation-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/download-archive-preparation-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Files** in the workspace that contains the source items, and confirm your role shows download actions.
2. Select the required files or folders; the selection bar reports the selected count and exposes **Download ZIP**.
3. Choose **Download ZIP** once. For one archive, Dosya opens the streaming endpoint in a new tab and shows **Download started**.
4. Leave the new tab or browser transfer open while the server walks folders and begins the ZIP stream; there is no Dosya progress card to wait for.
5. Open the browser's downloads list and look for `dosya-download.zip`; a visible JSON error page means the archive was refused before downloading.
6. After the transfer finishes, open the ZIP and compare its top-level names with the selection before deleting or moving any originals.

<figure class="help-screenshot"><a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Dosya Files list with two rows selected and the Download ZIP action visible in the selection toolbar." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The Files selection toolbar shows the exact <strong>Download ZIP</strong> action used for a combined archive. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The browser starts one download named `dosya-download.zip`. Dosya records the archive transfer before streaming, while the original files and folders remain unchanged.

If the new tab reports **Too many files to archive at once (max 10000)** or **Archive too large (max 5 GiB)**, reduce the folder or selection and start separate archives. **This folder is empty - there's nothing to download** means the chosen folder contains no downloadable files. A neutral **No items found** can also mean every candidate is hidden or blocked by a lock; return to Files, confirm the items are visible and unlocked, then select them again.

## Related guides

- [Choose files and folders for an archive download](/uploading/download-files)
- [Verify a downloaded Dosya ZIP archive](/uploading/verify-downloaded-archive)
