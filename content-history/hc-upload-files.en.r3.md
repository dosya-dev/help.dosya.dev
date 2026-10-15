---
{
  "articleId": "hc-upload-files",
  "locale": "en",
  "revision": 3,
  "title": "Uploading files and folders to Dosya",
  "summary": "Choose a cloud workspace and folder, upload individual files or a complete folder tree, then verify every completed item in Dosya.",
  "category": "uploading",
  "articleSlug": "files-and-folders",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/web/src/pages/uploads.tsx, apps/web/src/pages/role-create.tsx, apps/web/src/lib/dropped-entries.ts, apps/web/src/lib/dropped-entries.test.ts, apps/web/src/lib/folder-upload.ts, apps/web/src/lib/upload-drop.ts, apps/web/src/lib/upload-drop.test.ts, apps/web/src/lib/upload-tree.ts, apps/web/src/lib/upload-concurrency.ts, apps/web/src/lib/upload-runner.ts, apps/api/src/pages/api/folders/batch.ts, apps/api/src/pages/api/workspaces/[id]/upload-limits.ts and apps/api/src/lib/upload/init-gates.ts. Verified exact destination and picker labels, Access Upload, Upload files and Create folders role rules, failed-subtree skipping, retained source-folder names, dropped empty-directory reconstruction, the 2,000-file expansion ceiling and exact refusal copy, drag-and-drop fallback, concurrency controls, workspace policy checks, and completed-item actions. All three screenshots were inspected against current UI; no asset changed.",
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
Open **Uploads**, choose the destination under **Upload options → Folder**, then use **browse for files** or **pick a folder**. Wait for **Done** in the upload queue before checking or sharing the uploaded files.

## Before you start

- Sign in to [the Dosya app](https://app.dosya.dev) and select the workspace that should receive the files.
- Your role needs **Access Upload** to open `/uploads` and **Upload files** to transfer bytes. Uploading a directory tree also needs **Create folders** whenever Dosya must recreate a missing directory.
- The workspace must have room and must accept the file size and extension under its current policies.
- Keep the original files available on your device and the browser running until the transfer finishes. Avoid changing the source files during the upload.
- These steps cover ordinary workspace storage. The [Vault](https://dosya.dev/vault/) has a separate encryption workflow; selecting a file on this page does not automatically make it a Vault upload.

## Steps: choose the destination

1. **Open Uploads.** Select **Uploads** in the app navigation. The page heading is **Upload files**. You can also open [Uploads](https://app.dosya.dev/uploads) directly, or select **Upload** in the **Files** toolbar.
2. **Check the workspace.** Confirm the workspace selected in the app's workspace switcher. Files go into that workspace, so choose it before starting a new batch.
3. **Choose the folder.** Find **Upload options**, then **Folder**. The folder button initially shows **Root (top level)** unless a destination was supplied when you opened the page. Root means the workspace's top level.
4. **Confirm a different destination if needed.** Select the folder button, choose a folder in **Select folder**, and confirm with **Select folder**. Check the updated folder name before adding files. A destination change applies to new files you add, rather than relocating a batch already queued.

<figure class="help-screenshot">
  <a href="/screenshots/files-upload-2026-10-10.webp">
    <img src="/screenshots/files-upload-2026-10-10.webp" alt="Files page with sample files and a folder; callout 1 identifies Files navigation and callout 2 identifies Upload in the top toolbar." width="1440" height="520" loading="lazy" decoding="async" />
  </a>
  <figcaption><strong>1.</strong> Open Files in the selected workspace. <strong>2.</strong> The Upload toolbar button also opens the upload workflow. <a href="/screenshots/files-upload-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: add files or a folder

1. **Pick individual files.** Select **browse for files** in the drop area, choose the loose files, and confirm. Loose files land directly in the destination selected under **Folder**.
2. **Or pick a whole folder.** Select **pick a folder** and confirm the directory. The browser supplies relative paths including the selected folder name, so `Photos/a.jpg` is stored as `destination/Photos/a.jpg`.
3. **Or drag and drop.** Drop files or a directory into **Drop files or folders here to upload**. A supported directory drop retains its top-level name and nested structure. It also recreates nested empty directories and a wholly empty dropped directory.
4. **Check the queue.** The **Upload queue** appears after files are added. Review the file names, total size and individual progress. A selected file does not count as a completed upload until its row shows **Done**.
5. **Adjust simultaneous uploads only if useful.** The browser defaults to 3 concurrent files and offers 1 through 5. A lower workspace maximum removes choices above that cap. Reduce the setting if several transfers overwhelm the connection.

<figure class="help-screenshot">
  <a href="/screenshots/upload-destination-2026-10-10.webp">
    <img src="/screenshots/upload-destination-2026-10-10.webp" alt="Upload page with the drop area and Upload options; callout 1 identifies Folder and callout 2 identifies the destination button showing Root (top level)." width="1160" height="570" loading="lazy" decoding="async" />
  </a>
  <figcaption><strong>1.</strong> Find Folder under Upload options. <strong>2.</strong> Check or change the destination before adding files; Root (top level) means the workspace top level. <a href="/screenshots/upload-destination-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: confirm completion

1. **Wait for Done.** Keep the tab open until every required row finishes. Moving to another page inside the app can leave the upload dock available while the queue continues; closing or reloading the tab is a different action.
2. **Open the finished result.** Use **View file** beside a completed row to find the file, or **Go to location** to open its containing folder.
3. **Check the destination.** In **Files**, confirm the names and folder structure in the intended workspace. Open a small test file to check a new workflow.
4. **Clear the finished queue when ready.** **Clear done** tidies finished queue entries. Your completed files remain in storage.

<figure class="help-screenshot">
  <a href="/screenshots/upload-completed-2026-10-10.webp">
    <img src="/screenshots/upload-completed-2026-10-10.webp" alt="Upload queue after a sample file completes; callout 1 identifies Done and callout 2 identifies View file." width="1160" height="460" loading="lazy" decoding="async" />
  </a>
  <figcaption><strong>1.</strong> Done confirms this upload finished. <strong>2.</strong> Select View file to check the result, or Go to location to open its folder. <a href="/screenshots/upload-completed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

Completed loose files appear directly in the chosen workspace folder. A picked or dropped directory retains its own top-level name and nested paths instead of flattening its files. For example, adding `Photos/a.jpg` to `Client delivery` produces `Client delivery/Photos/a.jpg`.

Dosya creates the missing directory tree before queuing its file rows. A supported directory drop also creates empty directories because the browser exposes directory entries. A folder picker exposes paths attached to files, so a wholly empty picked directory can provide no entry for Dosya to recreate. A batch started from a group still keeps these folder locations while adding the completed files to that flat collection.

## Troubleshooting and limits

If the page says **Your role can't upload files**, ask the workspace owner or admin about upload permission. Repeatedly choosing the same files will not change your role.

If a row shows **Error**, read the reason beside it. Check connectivity, available storage and access to the destination. Use its **Retry** control when available, or **Retry all failed** only after correcting the shared cause. Completed rows are not restarted.

If the message says **This folder is locked. Enter its password to open it.**, unlock that exact destination before retrying. Picking another open folder does not move an existing queue row.

If a file is rejected by a size or extension rule, the row keeps the reason and never begins transferring. An owner or admin must change the workspace rule, or you must choose a compliant source file.

If a folder picker returns no files, the browser has not supplied any relative file paths. Drop the empty directory into a browser that exposes directory entries if it must exist in Dosya, or create that folder manually.

If folder creation returns **You don't have permission to create folders**, ask an owner or admin for **Create folders**, or upload loose files into an existing destination. **Some folders could not be created** means other branches were usable; **Folders could not be created** means no file row could be queued. Files below every failed directory are skipped and reported as left out instead of being flattened into a parent folder.

Picker and drop expansion stops after 2,000 files. For a folder tree, Dosya shows **Too many files in one go** and a detail in the form **Only the first 2,000 files were queued - _N_ files left out. Drop the rest separately.** Record that skipped count, let the queued set finish, then add the remaining files as another batch. A loose-file selection follows the direct queue path and may show only **Uploading 2,000 files**; compare the number you selected with the queue count and add any remainder separately.

A file's transfer data may no longer be available after a browser reload. If **Retry** is disabled and its message asks you to add the file again, choose the original file from your device. Check the completed files first so you do not resubmit an entire folder unnecessarily.

Use [the network-interruption recovery steps](/uploading/upload-resume-after-network) when the row changes to **Interrupted**, and consult [upload progress states](/uploading/progress-and-states) before restarting a mixed batch.

Browser folder support, service limits, storage allowance and workspace policies all affect uploads. Do not infer that every format or size will be accepted from the drop area's examples. Recoverable connection errors can be retried, but unattended completion is not guaranteed.

- A workspace can set file-size, per-member storage, extension, total-storage and simultaneous-upload rules. The failure row or available concurrency choices reflect the applicable rule.
- File and folder names must pass server name checks. Renaming a rejected source locally changes the name submitted on the next new attempt.
- One picker or drop expansion queues at most 2,000 files. Folder-tree expansion reports the skipped count; for loose files, compare the selection and queue counts yourself.
- A picked or dropped directory preserves the source directory name. Loose files alone have no relative folder path and land directly in the chosen destination.
- Directory drop retains explicit empty-directory entries. Folder picker reconstruction is limited to directory paths represented by selected files.
- Changing **Folder** after items enter the queue affects later additions only. Existing rows retain their original destination IDs.
- **Clear done** removes finished queue records and leaves the cloud files in place.

For a persistent issue, use [private support](https://app.dosya.dev/support). Include the browser, approximate file size, failing step and exact error. You do not need to post the private file itself in a public question.

## Frequently asked questions

### Can I leave the Uploads page while a transfer runs?

You can navigate inside the app while the global queue continues. Keep the browser tab running and check the upload dock or return to **Uploads** for completion. Closing or reloading the tab can interrupt the transfer.

### Why are files waiting instead of uploading together?

**Simultaneous uploads** limits the number running at once, and a workspace can impose a lower cap. Waiting queue entries are not necessarily failures; check whether the running entries are progressing.

### Does Clear done delete my uploaded files?

No. It removes finished entries from the queue display. Use **View file** or **Go to location** before clearing if you want to check where a completed file landed.

## Related guides

- [Creating a sharing link](/sharing/create-link)
- [Watch the existing upload tutorial](https://dosya.dev/tutorials/upload-files-and-folders/)
- [Why large uploads fail](https://dosya.dev/blog/why-large-uploads-fail) explains broader transfer problems.
