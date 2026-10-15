---
{
  "articleId": "hc-download-files",
  "locale": "en",
  "revision": 3,
  "title": "Downloading one file or several files",
  "summary": "Download one cloud file directly, or select files and folders to receive one or more streamed ZIP archives with clear size and entry limits.",
  "category": "uploading",
  "articleSlug": "download-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/web/src/pages/files.tsx, apps/web/src/lib/archive-download.ts, apps/web/src/pages/files.download.test.tsx, apps/api/src/pages/api/files/[id]/download.ts, apps/api/src/pages/api/files/download-archive.ts, apps/api/src/lib/archive-stream.ts and apps/api/src/lib/download-guard.ts. Verified exact Download and Download ZIP labels, download_files visibility, direct-file versus streamed-archive behavior, 300-ID request chunks, 20-download client ceiling, and the 10,000-entry and 5 GiB server archive limits. Existing screenshots were inspected against the current controls; no visual asset changed.",
  "related": [
    "hc-navigate-web-app",
    "hc-slow-transfer",
    "hc-storage-usage",
    "hc-large-upload"
  ],
  "keywords": [
    "download file",
    "download several files",
    "Download ZIP",
    "folder download",
    "browser download",
    "bulk download",
    "download permission"
  ]
}
---
Open **Files** in the intended workspace. A single file downloads directly with its current filename. A folder or multi-item selection streams one or more ZIP archives, and a very large selection may be split across several ZIP files.

## Before you start

- Select the workspace that contains the files. Files search, folders and selection apply to the active workspace.
- Confirm your role includes the `download_files` capability. Dosya hides the download controls when that capability is absent.
- Make sure the device has enough local disk space. Dosya storage capacity controls uploads; your browser and device control where a download can be saved.
- Check the files and versions you intend to keep. Downloading an older version from version history is a separate action from downloading the current file in Files.
- Use harmless samples when testing a browser's prompts, especially on a shared device.

## Steps: download one file

1. Open **Files** and browse or search for the file.
2. Check the active workspace and folder in the sidebar and breadcrumb.
3. Open the file's three-dot menu or right-click its row to find **Download**.
4. Choose **Download**. The browser opens Dosya's direct file response in a new tab and takes over when it receives the attachment.
5. Follow the browser's download prompt. Depending on browser settings, it may ask for a destination or save directly to the configured Downloads folder.
6. Open the local result and compare its filename and size with the cloud item. For an important **Download**, use a published checksum or your own integrity check.

<figure class="help-screenshot">
  <a href="/screenshots/download-single-action-2026-10-12.webp"><img src="/screenshots/download-single-action-2026-10-12.webp" alt="Dosya Files page with the annual-report PDF context menu open and the Download action visible below View." width="1160" height="900" loading="lazy" decoding="async" /></a>
  <figcaption>Right-click a file or use its three-dot menu, then choose <strong>Download</strong>. The workspace, filenames and contents shown are disposable local fixtures. <a href="/screenshots/download-single-action-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: download several files or folders

1. In Files, select the checkbox beside each required file or folder. The selection bar shows the item count.
2. Review the names before continuing. A selected folder expands to its downloadable descendants when the archive is prepared.
3. Choose **Download ZIP**.
4. Read the confirmation. One archive shows **Your ZIP is being prepared by the browser.** A split selection says **Too many items for one file - arriving as _N_ ZIPs.**
5. Allow multiple downloads if the browser asks and you intended the large selection. Do not disable browser protections for an unfamiliar page.
6. Wait for every announced archive, then open each **Download ZIP** result and compare its contents with the selected items.

<figure class="help-screenshot">
  <a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Dosya Files page with two files selected and the Download ZIP action visible in the bulk selection bar." width="1160" height="900" loading="lazy" decoding="async" /></a>
  <figcaption>The selection bar says <strong>2 selected</strong>. Choose <strong>Download ZIP</strong> to stream the selected files as an archive. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

One file downloads with its current filename, or the selected files and folders arrive in one or more ZIP archives. The local files open successfully and match the names and sizes you expected.

The browser's save location is not a Dosya folder. Moving or deleting the downloaded local copy does not change the cloud file, and downloading does not remove the original from Dosya.

When the device is shared, follow [the local-copy cleanup checklist](/uploading/download-clean-up-local-copy) after verifying the download.

## Limits and permission behavior

- Each server-prepared archive is limited to 10,000 entries and 5 GiB of source data. A selected folder can exceed either limit even though it appears as one row.
- The web app places at most 300 selected IDs in each archive request and starts at most 20 downloads from one click. A folder can expand after the request, so split parts still have to fit the server archive limits.
- Dosya streams archive bytes to the browser instead of buffering the finished ZIP in the page. The browser chooses the final local filename and destination.
- The browser can ask whether to allow multiple downloads. Blocking that prompt can leave only part of a multi-ZIP selection on your device.
- A role without download permission does not receive the Download action. A file set to **view only** can be previewable while its download is refused.
- Hidden, inaccessible or locked items are subject to their own access rules. Verify archive contents instead of assuming every item visible to another user was included.
- Files in **Deleted** are handled through restore or permanent deletion controls rather than the ordinary live-file Download menu.

## Troubleshooting

**Download is missing.** Confirm the file is in the live Files view and that your role has download permission. Ask an owner or admin to review the role and any folder-level restriction. View-only access deliberately removes downloading while preserving preview where supported.

**Nothing appears after Download.** Check the browser's download indicator, popup or automatic-download permission, configured save location and device free space. Search the Downloads folder for the exact filename before starting another copy.

**Fewer ZIPs arrived than announced.** A later part may have exceeded an archive limit or failed to start. Dosya reports how many parts started when it can detect the failure. Select fewer items and retry only the missing group.

**The archive is too large or has too many entries.** Keep every archive below 5 GiB and 10,000 entries. Open a large folder and download smaller subfolders or file selections.

**The local file will not open.** Compare its size with Dosya and download it once more on a stable connection. Preserve both copies until you know whether the problem is an incomplete download or the source format itself.

**The browser saves without asking.** Change the browser's download-location setting if you want a prompt. Dosya sends the file; the browser chooses the local save behavior.

## Frequently asked questions

### Can I download several files together?

Yes. Select their checkboxes and choose **Download ZIP**. A very large selection can produce several ZIPs or ask you to select fewer items.

### Can I download a whole folder?

Yes. Open the folder's menu and choose Download, or include it in a multi-selection. The result is a ZIP containing the downloadable folder contents.

### Why is my browser not saving the download?

Check its download indicator, popup and multiple-download permissions, save location and available device storage. A missing Download action points to Dosya access rules; a clicked action with no saved file usually needs a browser-side check.

## Related guides

- [Web app navigation](/account/navigate-web-app)
- [Fixing a slow upload or download](/troubleshooting/slow-transfer)
- [Understanding storage usage and failed quota checks](/uploading/storage-usage)
- [Uploading large files with available storage](/uploading/large-files)
