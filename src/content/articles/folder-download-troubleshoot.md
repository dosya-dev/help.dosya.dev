---
{
  "articleId": "hc-folder-download-troubleshoot",
  "locale": "en",
  "revision": 6,
  "title": "Troubleshoot a folder archive download",
  "summary": "Use the archive tab and exact refusal text to separate empty, locked, oversized, permission, selection-size, and other browser transfer failures.",
  "category": "uploading",
  "articleSlug": "folder-download-troubleshoot",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-15; production behavior was not exercised for this revision. Verified against: apps/web/src/pages/files.tsx; apps/web/src/lib/archive-download.ts; apps/api/src/pages/api/files/download-archive.ts; apps/api/src/lib/archive-entries.ts.",
  "related": [
    "hc-download-files",
    "hc-slow-transfer"
  ],
  "keywords": [
    "folder download troubleshoot",
    "browser download archives",
    "Dosya help",
    "file transfer"
  ]
}
---

A folder download uses **Download** on the folder row or **Download ZIP** on a selection and streams `dosya-download.zip` directly to the browser. The server does not create a background archive job, so the new tab, browser download list, and exact API refusal are the evidence to diagnose.

One folder remains one archive request regardless of how many descendants it contains. The server then applies the 10,000-entry and 5 GiB caps to the files it can include. Hidden files and content blocked by file or ancestor-folder locks are omitted; when everything is blocked, the neutral response can be **No items found**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/folder-download-troubleshoot-workflow-map-2026-10-14.webp" data-light-href="/screenshots/folder-download-troubleshoot-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/folder-download-troubleshoot-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/folder-download-troubleshoot-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/folder-download-troubleshoot-workflow-map-2026-10-14.webp" alt="Four-step folder archive diagnosis showing download permission, empty or hidden content, the 10,000-file ceiling, and the 5 GiB source-data ceiling." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Match the exact refusal to permission, visibility, the 10,000-file limit, or the 5 GiB source total before choosing a smaller folder. <a class="workflow-map-full" href="/screenshots/folder-download-troubleshoot-workflow-map-2026-10-14.webp" data-light-href="/screenshots/folder-download-troubleshoot-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/folder-download-troubleshoot-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Reopen **Files**, locate the folder, and verify that your role exposes its **Download** action; an absent action points to the download permission rather than archive size.
2. Start the folder download once and keep the new tab visible. Record the full response instead of repeatedly clicking while a stream may already be starting.
3. For **This folder is empty - there's nothing to download**, add a file or select a populated folder; for **No items found**, verify current visibility and unlock eligible content first.
4. For **Too many files to archive at once (max 10000)**, split the tree below the problem folder and download smaller child folders.
5. For **Archive too large (max 5 GiB)**, divide by total source bytes; deleting local browser copies does not reduce the server-side archive size.
6. Confirm the replacement `dosya-download.zip` finishes, then inspect its paths and names because partially blocked trees can legitimately omit files you cannot download.

<figure class="help-screenshot"><a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Dosya Files selection toolbar with Download ZIP available above selected rows, including a folder and individual files." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Use the same selection toolbar for a smaller diagnostic batch when a folder exceeds an archive cap. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A permitted, nonempty test folder within both caps starts one browser download. The finished archive preserves internal directory paths for included content and leaves the workspace unchanged.

**You don't have download permission** requires a workspace owner or admin to change the role. **Nothing to download - the selection contains no files** means the selected live rows produced no archive entries. A browser network failure after streaming begins can leave a partial local file without a Dosya retry control; discard that partial copy and repeat from Files after connectivity stabilizes.

## Related guides

- [Download a smaller folder test from Files](/uploading/download-files)
- [Fixing a slow upload or download](/troubleshooting/slow-transfer)
