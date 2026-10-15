---
{
  "articleId": "hc-download-files",
  "locale": "en",
  "revision": 1,
  "title": "Downloading one file or several files",
  "summary": "Download one file with its original name, or select files and folders to receive one or more streamed ZIP archives.",
  "category": "uploading",
  "articleSlug": "download-files",
  "status": "published",
  "lastReviewed": "2026-10-12",
  "verification": "Verified the current English Files page on 2026-10-12 with an isolated owner account, disposable files and a folder. Local screenshots confirm the single-file Download action and two-item Download ZIP selection. Current web and API source and tests confirmed browser-managed saving, streamed archives, very large selection splitting, archive limits and download-permission and view-only gates. The final operating-system save prompts and a blocked viewer download were source reviewed rather than manually captured on every browser and role.",
  "related": ["hc-navigate-web-app", "hc-slow-transfer", "hc-storage-usage", "hc-large-upload"],
  "keywords": ["download file", "download several files", "Download ZIP", "folder download", "browser download", "bulk download", "download permission"]
}
---
Open **Files** in the correct workspace. Use **Download** for one file or folder. To download several items, select their checkboxes and choose **Download ZIP** from the selection bar.

A single file keeps its filename. A folder or multi-item selection is prepared as a streamed ZIP. Very large selections can arrive as several ZIPs, so read the message Dosya shows instead of assuming every selection produces exactly one archive.

## Before you start

- Select the workspace that contains the files. Files search, folders and selection apply to the active workspace.
- Confirm your role has **download files** permission. An owner or admin can review role and folder access when the action is missing.
- Make sure the device has enough local disk space. Dosya storage capacity controls uploads; your browser and device control where a download can be saved.
- Check the files and versions you intend to keep. Downloading an older version from version history is a separate action from downloading the current file in Files.
- Use harmless samples when testing a browser's prompts, especially on a shared device.

## Steps: download one file

1. Open **Files** and browse or search for the file.
2. Check the active workspace and folder in the sidebar and breadcrumb.
3. Open the file's three-dot menu or right-click its row.
4. Choose **Download**. You can also find Download in the file detail or viewer when your permission and the file's lock mode allow it.
5. Follow the browser's download prompt. Depending on browser settings, it may ask for a destination or save directly to the configured Downloads folder.
6. Open the local result and compare its filename and size with the item in Dosya. For important data, use a published checksum or your own integrity check.

<figure class="help-screenshot">
  <a href="/screenshots/download-single-action-2026-10-12.webp"><img src="/screenshots/download-single-action-2026-10-12.webp" alt="Dosya Files page with the annual-report PDF context menu open and the Download action visible below View." width="1160" height="900" loading="lazy" decoding="async" /></a>
  <figcaption>Right-click a file or use its three-dot menu, then choose <strong>Download</strong>. The workspace, filenames and contents shown are disposable local fixtures. <a href="/screenshots/download-single-action-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: download several files or folders

1. In Files, select the checkbox beside each required file or folder. The selection bar shows the item count.
2. Review the names before continuing. A folder selection includes the downloadable files inside that folder.
3. Choose **Download ZIP**.
4. Read the confirmation. One ordinary selection says a ZIP is being prepared. A larger selection can say that several ZIPs are arriving.
5. Allow multiple downloads if the browser asks and you intended the large selection. Do not disable browser protections for an unfamiliar page.
6. Wait for every announced archive, then open the ZIP or ZIPs and compare the contents with the selected items.

<figure class="help-screenshot">
  <a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Dosya Files page with two files selected and the Download ZIP action visible in the bulk selection bar." width="1160" height="900" loading="lazy" decoding="async" /></a>
  <figcaption>The selection bar says <strong>2 selected</strong>. Choose <strong>Download ZIP</strong> to stream the selected files as an archive. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

One file downloads with its current filename, or the selected files and folders arrive in one or more ZIP archives. The local files open successfully and match the names and sizes you expected.

The browser's save location is not a Dosya folder. Moving or deleting the downloaded local copy does not change the cloud file, and downloading does not remove the original from Dosya.

## Limits and permission behavior

- The current web workflow limits each prepared archive to 10,000 entries and 5 GiB. Select fewer items when a folder or selection exceeds an archive limit.
- A long selection can be split into several streamed ZIPs so the tab does not buffer a multi-gigabyte archive in memory. If the selection would require too many separate downloads, Dosya asks you to select fewer items.
- The browser can ask whether to allow multiple downloads. Blocking that prompt can leave only part of a multi-ZIP selection on your device.
- A role without download permission does not receive the Download action. A file set to **view only** can be previewable while its download is refused.
- Hidden, inaccessible or locked items are subject to their own access rules. Verify archive contents instead of assuming every item visible to another user was included.
- Files in **Deleted** are handled through restore or permanent deletion controls rather than the ordinary live-file Download menu.

## Troubleshooting

**Download is missing.** Confirm the file is in the live Files view and that your role has download permission. Ask an owner or admin to review the role and any folder-level restriction. View-only access deliberately removes downloading while preserving preview where supported.

**Nothing appears after Download.** Check the browser's download indicator, popup or automatic-download permission, configured save location and device free space. Search the Downloads folder for the exact filename before starting another copy.

**Only one ZIP arrived.** Read the Dosya confirmation and browser prompts. If several ZIPs were announced, allow the intended multiple downloads and wait for each part. Retry only the missing smaller selection.

**The archive says it is too large or has too many entries.** Select fewer files, or download a smaller folder at a time. A folder can contain far more entries than its single row suggests.

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

- [Finding your way around the web app](/account/navigate-web-app)
- [Fixing a slow upload or download](/troubleshooting/slow-transfer)
- [Understanding storage usage and failed quota checks](/uploading/storage-usage)
- [Uploading large files with available storage](/uploading/large-files)
