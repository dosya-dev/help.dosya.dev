---
{
  "articleId": "hc-upload-files",
  "locale": "en",
  "revision": 1,
  "title": "Uploading files and folders to Dosya",
  "summary": "Choose your destination, upload files or a whole folder in the web app, and confirm that the upload completed.",
  "category": "uploading",
  "articleSlug": "files-and-folders",
  "status": "published",
  "lastReviewed": "2026-10-09",
  "verification": "Verified with the current local API/R2/D1 product harness on 2026-10-09 (upload, share/password unlock and anonymous file request suites: 232 passed, 1 unrelated skipped). English UI controls reviewed against current source. Production/browser workflow and screenshots still need editorial review.",
  "related": [
    "hc-create-link",
    "hc-failed-upload"
  ],
  "keywords": [
    "upload",
    "folder",
    "browse",
    "drag and drop",
    "files"
  ]
}
---
Open **Upload** in the Dosya web app, choose where the files should go, then use **browse for files** or **pick a folder**. Wait for the upload queue to finish before opening the files or sharing them.

## Before you start

- Sign in to [the Dosya app](https://app.dosya.dev) and select the intended workspace.
- Make sure your role can upload files and the workspace has enough available storage. Ask the workspace owner if you see a permission or storage message.
- Keep the source files on your device and keep the browser tab open while the upload runs.
- These steps cover ordinary workspace storage. [Vault](https://dosya.dev/vault/) has a separate encryption workflow; an ordinary upload is not automatically a Vault upload.

## Steps

1. Open **Upload** from the app navigation. The page heading is **Upload files**.
2. Check the destination shown beside **Uploading to**. Use the destination folder control if you want to choose another folder. **Root (top level)** means the workspace's top level.
3. Choose **browse for files** for individual files, or **pick a folder** for a whole folder. You can also drag files or a folder into the drop area. If the browser cannot accept a folder drop, use **pick a folder**.
4. Confirm the selected files in your device's picker. A folder upload preserves the files' relative folder paths.
5. Follow each item in **Upload queue** or in the upload dock as you navigate around the app. Leave the browser running until every required item completes.
6. Open **Files** in the same workspace and destination folder. Check the file names and open or download a small test file to confirm the result.

## Expected result

Completed files appear in the chosen workspace folder. A folder selection recreates its subfolders rather than putting every file at the top level. Uploads already running stay in the queue while you move to another page in the app.

## Limitations

- Browser folder selection depends on browser support. The file picker works even if folder selection is unavailable.
- Storage allowance, upload permission, and workspace upload rules can prevent a submission. This guide does not promise a particular file size or plan entitlement.
- Chunked uploads can retry recoverable connection errors, but closing the browser, changing the source file, or losing access can require another attempt. Automatic recovery is not a guarantee that every failure will finish unattended.
- Ordinary sharing and storage use server-side security controls. End-to-end encryption applies to the separate Vault workflow.

## Troubleshooting

If the queue shows an error, read its message before retrying. Confirm that the selected workspace and destination are still available. Reconnect to the internet and use **Retry** on a retryable item, or **Retry all failed** when appropriate. If the browser needs the file again, choose the original file from your device.

Do not upload the same folder repeatedly while the original queue is still running. First check **Files** and the queue to avoid creating duplicates.

For a persistent error, send the file type, approximate size, time, browser version and the error message to [private support](https://app.dosya.dev/support). Keep private files and credentials out of public questions.

## Related guides

- [Creating a sharing link](/sharing/create-link)
- [Watch the existing upload tutorial](https://dosya.dev/tutorials/upload-files-and-folders/)
- [Why large uploads fail](https://dosya.dev/blog/why-large-uploads-fail) explains the broader causes of transfer problems.
