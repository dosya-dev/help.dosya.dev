---
{
  "articleId": "hc-download-verify-file",
  "locale": "en",
  "revision": 5,
  "title": "Verify a downloaded file by name and size",
  "summary": "Compare the downloaded file with Dosya File details by name and displayed size, then open the local copy to confirm the intended item arrived.",
  "category": "uploading",
  "articleSlug": "download-verify-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-15; production behavior was not exercised for this revision. Verified against: apps/web/src/components/file-detail-panel.tsx; apps/web/src/components/file-viewer.tsx; apps/web/src/pages/files.tsx; apps/api/src/pages/api/files/[id]/download.ts.",
  "related": [
    "hc-download-files",
    "hc-verify-downloaded-archive"
  ],
  "keywords": [
    "download verify file",
    "Download preparation and verification",
    "Dosya help",
    "file upload"
  ]
}
---

A single-file **Download** opens `/api/files/:id/download`, which checks membership, Files access, the `download_files` permission, confinement, hidden state, and locks. An accepted request redirects to a signed object URL that lasts 300 seconds. Downloading does not alter the Dosya item.

Dosya's **File details** panel shows the stored name and a human-readable size. Use those values to identify the browser result; Dosya does not display or attach a checksum for this manual comparison.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/download-verify-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/download-verify-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/download-verify-file-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/download-verify-file-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/download-verify-file-help-workflow-2026-10-14.webp" alt="Four-step file verification workflow: open File details, record the Dosya name and size, download the file, and compare the local copy before opening it." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Record the source name and displayed size in <strong>File details</strong>, then compare those fields with the browser's completed local download. <a class="workflow-map-full" href="/screenshots/download-verify-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/download-verify-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/download-verify-file-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In **Files**, select the intended item and open **File details**; record its full name, extension, and displayed **Size**.
2. Confirm that you are viewing the current file rather than a historical version, because a version-row download can have a different byte size.
3. Choose **Download** and wait for the browser to mark the transfer complete; restart from Files if a stale 300-second signed redirect no longer works.
4. In the browser download list or operating-system file properties, compare the saved name with the Dosya name; browsers may add a local suffix when that name already exists.
5. Compare the local byte count or formatted size with **File details**, allowing only the display rounding introduced by human-readable units.
6. Open the local copy in an application you trust and inspect representative content before using, sharing, or deleting another copy.

<figure class="help-screenshot"><a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Dosya Files list showing named items and their Size column before a download is verified locally." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The Files list provides the source name and displayed size used for a local download comparison. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The local file represents the selected Dosya item: its original name is recognizable, its size agrees with File details after unit rounding, and a trusted application can read it. The source remains in its workspace.

A locally appended name such as `report (1).pdf` normally means the browser avoided overwriting an existing local file; verify the size and content rather than assuming a Dosya rename. **This file is view-only and cannot be downloaded** requires a different item or a lock change by an authorized member. For **This file is locked. Enter the lock password to access it**, unlock the current file in Dosya and start a new download from that view.

## Related guides

- [Download the source file you intend to verify](/uploading/download-files)
- [Verify a downloaded Dosya ZIP archive](/uploading/verify-downloaded-archive)
