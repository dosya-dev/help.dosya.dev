---
{
  "articleId": "hc-cancel-upload",
  "locale": "en",
  "revision": 2,
  "title": "Canceling an upload safely",
  "summary": "Stop the intended queued or active upload, check the other transfers, and confirm whether a complete file already exists in Files.",
  "category": "uploading",
  "articleSlug": "cancel-upload",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14 against apps/web/src/components/uploads/upload-dock.tsx, apps/web/src/lib/upload-runner.ts, apps/web/src/stores/uploads.ts, apps/web/src/lib/upload-persistence.ts, apps/api/src/pages/api/upload/[sessionId].ts, apps/api/src/lib/upload/stale-multiparts.ts, and focused cancel, persistence, and stale-multipart tests. Screenshots use fictional transfers. Production cleanup timing was not measured.",
  "related": ["hc-upload-states", "hc-upload-files", "hc-large-upload", "hc-failed-upload"],
  "keywords": ["cancel upload", "stop upload", "Canceled", "upload queue", "partial upload", "completed file", "clear upload history"]
}
---
Cancel an individual **Queued** or **Uploading** row from the upload list at the bottom right. The X has the tooltip **Cancel**; right-clicking the row offers **Cancel upload**. Both apply immediately without a confirmation dialog, so verify the filename first.

Canceling one attempt does not remove a file that already reached **Done**, and it does not cancel the other rows. Check **Files** after cancellation to determine what is actually stored.

## Before you start

- Confirm the active workspace and intended destination.
- Read the exact filename, size and state. Similar names can represent an older completed copy and a new attempt.
- Keep the source file if you might upload it later. Cancel discards the browser's handle to that source, and the row cannot use **Resume** afterward.
- Let any file that you still need continue. Cancel is scoped to the selected row, so choose carefully.

## Steps: cancel the intended upload

1. Expand the upload list at the bottom right of the web app.
2. Find the exact row. An active item shows progress and has an X control; a queued item can also be canceled before it starts.
3. Select the row's X labeled **Cancel**, or right-click that row and choose **Cancel upload**.
4. Expect the action to apply immediately. The current web UI does not ask for confirmation.
5. Confirm that the selected row changes to **Canceled**. Check that unrelated active, queued and Done rows keep their own states.

<figure class="help-screenshot">
  <a href="/screenshots/upload-cancel-control-2026-10-12.webp"><img src="/screenshots/upload-cancel-control-2026-10-12.webp" alt="Dosya upload list with an active archive selected and its context menu showing the Cancel upload action." width="1160" height="900" loading="lazy" decoding="async" /></a>
  <figcaption>Verify the filename before choosing <strong>Cancel upload</strong>. This action has no confirmation dialog in the current web app. The archive and completed image are fictional local fixtures. <a href="/screenshots/upload-cancel-control-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: check the result

1. Confirm **Canceled** on the intended row. If it still shows Uploading, make sure you used the control for that row.
2. Review the other transfers. A completed row should remain **Done**, and another active or queued file should continue under its own state.
3. Open **Files** and inspect the intended destination. Cancellation stops browser requests, but a file that finished just before the action can already be recorded as complete.
4. If a file with the same name already exists, compare its size, modified time, version information or contents. It can be an older completed copy rather than the attempt you just canceled.
5. If you still need the canceled file and no verified completed copy exists, start a new upload from the unchanged original.

<figure class="help-screenshot">
  <a href="/screenshots/upload-canceled-result-2026-10-12.webp"><img src="/screenshots/upload-canceled-result-2026-10-12.webp" alt="Dosya upload list after cancellation with the archive marked Canceled while a separate image remains Done." width="1160" height="900" loading="lazy" decoding="async" /></a>
  <figcaption>The selected archive is <strong>Canceled</strong>; the separate image remains <strong>Done</strong>. Cancellation is per transfer. Check Files to establish which completed objects exist. <a href="/screenshots/upload-canceled-result-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: clear the queue only after checking Files

1. Record any error or state information you still need.
2. Verify completed files through **View file**, **Go to location** or Files.
3. Use **Clear done** on the Upload page, or **Clear** in the dock, only to tidy terminal rows. These controls remove complete, error and canceled entries while leaving queued, uploading and interrupted work visible.
4. Delete an unwanted completed file from **Files** through the normal file action. Clearing its upload row does not delete the stored object.

## Expected result

The chosen active or queued attempt changes to **Canceled**, while unrelated transfers retain their states. Files contains only the copies that completed independently. If the canceled file is still required, a new attempt starts from the original after you have checked for an existing completed copy.

## Limits and cleanup behavior

- **Cancel** aborts every active byte-transfer request for the selected file, including concurrent multipart parts. Other queue rows have separate request sets and keep running.
- A file that already shows **Done** is complete and cannot be undone through the transfer's Cancel action. Delete it from Files if removal is intended.
- Do not use the presence or absence of a queue row as a storage inventory. Verify Files, versions and trash where relevant.
- Incomplete multipart parts are not a completed cloud file and are cleaned separately. A session whose first part never arrived becomes stale after **10 minutes**. Once a multipart upload has begun, it becomes eligible for the application sweep after no part has landed for **24 hours**; the bucket's **7-day** lifecycle remains the cleanup backstop. These timings do not promise an immediate dashboard decrease.
- Clearing queue history only changes the local display. It does not cancel an active transfer, delete a completed file or prove partial data has been reclaimed.
- Cancel is irreversible for that queue attempt. If you still need the content, create a new upload after confirming that no complete copy or unintended new version already exists.

## Troubleshooting

**I canceled the wrong file.** Preserve the original and check Files immediately. If the selected attempt did not complete, add that original again. Do not restart unrelated Done rows.

**The file still appears in Files.** It may have completed before cancellation, or it may be an older copy with the same name. Compare size, time, version information and contents. If you intend to remove a verified completed file, use its Files action.

**Available storage did not change immediately.** Completed parts and usage counters can settle through separate cleanup paths. Check Files and Deleted first, refresh after current transfers stop, and contact support with the cancellation time and approximate size if the displayed quota remains unexplained after the stated idle window.

**Canceled disappeared after I selected Clear.** Clear removes transfer history from the display. Check Files for the actual result. If no completed copy exists and the file is needed, begin a new upload.

**There is no Cancel action.** A **Done** item is complete. An **Error**, **Interrupted**, or **Canceled** row is not transferring; use its available **Retry**, **Resume**, or **Remove** control instead.

**Another upload stopped too.** Inspect its own state and message. A connection loss or page close can interrupt multiple rows even though Cancel itself targets one transfer.

## Frequently asked questions

### Can I cancel one upload without stopping the others?

Yes. Cancel acts on the selected row. Confirm the other rows continue or remain Done after the action.

### Is an incomplete file saved after I cancel?

No usable cloud file should be inferred from **Canceled**. Check Files because a completion can win the timing race immediately before your click; unfinished multipart parts are handled by cleanup and are not listed as a completed item.

### Can I cancel a file after it says Done?

No. Done means the upload completed. Use Files to inspect or delete the stored file.

### Can I resume a canceled upload?

No. Resume belongs to an Interrupted attempt. Start a new upload from the original if a canceled file is still required.

## Related guides

- [Understanding upload progress and transfer states](/uploading/progress-and-states)
- [Uploading files and folders](/uploading/files-and-folders)
- [Uploading large files with available storage](/uploading/large-files)
- [Troubleshooting a failed upload](/troubleshooting/failed-upload)
