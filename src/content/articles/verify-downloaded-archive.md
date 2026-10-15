---
{
  "articleId": "hc-verify-downloaded-archive",
  "locale": "en",
  "revision": 6,
  "title": "Verify a downloaded Dosya ZIP archive",
  "summary": "Confirm a Dosya ZIP finished, compare its paths and file counts with the cloud selection, and identify collision names or missing-object notices before sharing.",
  "category": "uploading",
  "articleSlug": "verify-downloaded-archive",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified archive naming, path collision handling and missing-object notices in apps/api/src/lib/archive-entries.ts, apps/api/src/lib/archive-stream.ts and apps/web/src/lib/archive-download.ts. Local repository evidence only; no production request was made.",
  "related": [
    "hc-download-selection-archive",
    "hc-download-folder-archive"
  ],
  "keywords": [
    "verify ZIP download",
    "check downloaded archive",
    "missing archive file",
    "cloud backup verification"
  ]
}
---
Verify an archive before sharing it, deleting its cloud source or treating it as a backup. A browser showing **Download started** confirms that archive preparation began; it does not prove that every byte reached local storage.

Dosya supplies the filename `dosya-download.zip`. When several archives are requested, use the browser's completed-download list and your source checklist to identify which selection each local copy contains.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/verify-downloaded-archive-workflow-map-2026-10-14.webp" data-light-href="/screenshots/verify-downloaded-archive-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/verify-downloaded-archive-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/verify-downloaded-archive-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/verify-downloaded-archive-workflow-map-2026-10-14.webp" alt="Completed Dosya ZIP checked for final browser status, expected folder paths, readable samples and missing-file notices." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Completion, structure, count and readable content are separate checks; perform all four before relying on the archive. <a class="workflow-map-full" href="/screenshots/verify-downloaded-archive-workflow-map-2026-10-14.webp" data-light-href="/screenshots/verify-downloaded-archive-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/verify-downloaded-archive-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the browser's downloads list and find the archive started at the expected time.
2. Wait until the browser marks that download complete.
3. Check that the item is not failed, canceled or blocked. If it did not complete, start a fresh Dosya archive download after correcting the reported cause.
4. Move the completed ZIP to a controlled folder before extracting it. Avoid opening an unfinished copy from a temporary download location.

<figure class="help-screenshot"><a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Original Dosya multi-selection used as the comparison list for a completed ZIP archive." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Keep a record of the source selection until the local archive passes every comparison. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Compare structure and entries

Open the ZIP with your operating system's archive viewer or another trusted tool without running executable content. For directly selected files, expect names at the ZIP root. A downloaded folder should begin with its folder name and retain descendant paths.

Compare these details with the source:

- every directly selected file appears once;
- each chosen folder has the expected nested branches;
- representative file sizes are plausible and sample documents open;
- all ZIP parts reported by the bulk-download toast are present;
- the archive tool reports no truncated central directory, CRC error or unexpected end of file.

Two source entries that map to one archive path are both kept. The later entry is renamed with a suffix such as `name (2).ext`; treat that as collision handling, then match both files by contents or size.

## Read notices inside the ZIP

A text entry named `MISSING - <original filename>.txt` is not the original file. It means Dosya still listed that item but could not read its stored object while the archive streamed. Try the named file's individual **Download** action. If that fails, retain the notice and contact support with the workspace, visible path, approximate attempt time and archive batch; never send passwords, API keys or recovery keys.

An archive created from a sharing link with photo-metadata removal can instead contain **`NOT INCLUDED - filename.txt`**. That note says the sender's privacy setting prevented the original format from being shipped. Ask the sender for a new link without metadata removal only if their policy permits the original file.

Locked or hidden workspace items can be omitted without a notice when your current access does not allow them. Compare against the visible, unlocked selection available to your role rather than an administrator's private inventory.

## Expected result

The browser marks every planned ZIP complete, each archive opens without a structure error, expected downloadable paths are present, and representative files are readable. Any collision suffix or missing-object notice has been reconciled with the cloud source.

## If validation fails

- A ZIP that cannot open or reports an unexpected end is incomplete; delete that local copy and download again after the network stabilizes.
- If one of several parts is absent, select only that source batch and use **Download ZIP** again.
- If the browser saved a zero-byte file or an HTML/JSON error response, return to Dosya and address the displayed permission, size or entry-count message.
- When the same individual file and a new archive both fail, keep the cloud entry unchanged while support investigates.

Only rename the verified archive or pass it to another person after these checks. Extraction and verification do not change the original cloud files.

## Related guides

- [Download a selected group](/uploading/download-selection-archive)
- [Download one cloud folder](/uploading/download-folder-archive)
