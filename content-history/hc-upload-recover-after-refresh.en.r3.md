---
{"articleId":"hc-upload-recover-after-refresh","locale":"en","revision":3,"title":"Recover an upload after refreshing the browser","summary":"Resume an interrupted browser upload by reselecting the same source file, then verify the completed cloud copy without creating a duplicate.","category":"uploading","articleSlug":"upload-recover-after-refresh","status":"published","lastReviewed":"2026-10-14","verification":"Source-reviewed on 2026-10-14 against apps/web/src/lib/upload-persistence.ts, apps/web/src/lib/upload-runner.ts, apps/web/src/stores/uploads.ts, apps/web/src/components/uploads/upload-dock.tsx, apps/web/src/lib/upload-persistence.test.ts, apps/web/src/lib/upload-runner.test.ts, apps/api/src/pages/api/upload/[sessionId]/status.ts, apps/api/src/pages/api/upload/[sessionId]/complete.ts, and focused local tests. Screenshots retain isolated sample files and match the current Interrupted and Done controls.","related":["hc-failed-upload","hc-upload-states","hc-cancel-upload"],"keywords":["resume upload after refresh","interrupted browser upload","reselect upload file","cloud file upload recovery","Dosya upload queue"]}
---
A browser refresh keeps recent queue metadata in local storage, but the refreshed page cannot regain permission to read your source automatically. Dosya changes rows that were **Uploading** or **Queued** to **Interrupted** and requires you to pick the source again. Completed, failed and canceled rows keep their terminal state.

Recovery depends on how the file was sent. Files larger than **50 MB** use multipart upload, so Dosya can ask the server which **10 MB** parts arrived and send only missing parts. A smaller single-request upload restarts from byte zero after reselection.

## Before you start

- Keep the original source file in its current location and do not rename or edit it.
- Open Dosya with the same account and workspace that started the upload.
- Check whether the file already appears as **Done** in the upload dock or **Upload queue**. Also inspect its intended folder in **Files**, because a server-completed session can be discovered during recovery even when the restored row lacks a direct file shortcut.
- If the destination folder was deleted, locked or made read-only, resolve that access problem before resuming.

## Steps: resume the interrupted upload

1. Return to Dosya after the page reloads and expand the upload dock in the lower-right corner.
2. Find the row marked **Interrupted**. Confirm its filename, size and destination before selecting anything.
3. Select **Resume** on that row. Dosya opens the browser file picker because the refreshed tab cannot recover a local file automatically.
4. Choose the original file. Its name and byte size must match the interrupted row. If either value differs, Dosya refuses the selection so a different file cannot silently replace the original upload.
5. Keep the page open while the row returns to **Queued** and then displays byte progress. For multipart recovery, the server's status determines which part numbers are still missing; the saved percentage alone is not authoritative.
6. Wait for **Done**. If **Open in Files** is available, use it; otherwise navigate to **Files** and open the recorded destination yourself. Confirm the cloud item has the expected name and byte size.

<figure class="help-screenshot">
  <a href="/screenshots/upload-interrupted-resume-2026-10-11.webp">
    <img src="/screenshots/upload-interrupted-resume-2026-10-11.webp" alt="Dosya upload dock showing resume-example.txt as Interrupted with a Resume control." width="1160" height="800" loading="lazy" decoding="async" />
  </a>
  <figcaption>After a refresh, expand the upload dock and use <strong>Resume</strong> on the interrupted row. <a href="/screenshots/upload-interrupted-resume-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

<figure class="help-screenshot">
  <a href="/screenshots/upload-recovered-2026-10-11.webp">
    <img src="/screenshots/upload-recovered-2026-10-11.webp" alt="Dosya Upload page showing both sample files completed after the interrupted upload was resumed." width="1160" height="800" loading="lazy" decoding="async" />
  </a>
  <figcaption>The recovered row reaches <strong>Done</strong> and provides <strong>View file</strong> and <strong>Go to location</strong> controls. <a href="/screenshots/upload-recovered-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The interrupted row resumes after you reselect the matching source and eventually changes to **Done**. Exactly one intended cloud result appears in the original destination, and its displayed size matches the local source.

## Limits and important details

- Browsers do not allow a website to retain unrestricted access to a local file after a reload. Reselecting the source file is required.
- Dosya retains only the latest **50** transfer rows in that browser profile. Clearing site data, using a private session, changing browsers, or signing in as a different account can remove or hide the recovery row.
- **Retry** works for a failed row only while the current tab still holds the source file. After a reload, a retained **Error** row keeps Retry disabled. Open **Uploads → Upload queue**, choose **Retry all failed** to move it to **Interrupted**, then select **Resume** and reselect the matching original. A row that was Queued or Uploading when the page reloaded is already Interrupted and can use Resume directly.
- A mismatch produces **Could not resume** with `That file does not match (name or size differs).` Dosya does not hash two same-named, same-sized files before resuming, so choose the original deliberately.
- Do not drag the file into the main upload area as a substitute for **Resume**. That starts a separate upload and can create a name conflict or another version.
- Completed rows are preserved across a refresh. Verify **Done** before restarting a transfer that may already have finished.
- Resume does not override current policy. Storage, role access, a deleted destination, an expired folder unlock or a newly blocked file type can still stop the remaining transfer or completion.

## Troubleshooting

**Resume says the file does not match.** Select the original file with the same filename and exact byte size. If you renamed or edited it, remove the interrupted row and start a new upload so the changed source is handled explicitly.

**The row stays Interrupted after selection.** Confirm that you chose a file instead of closing the picker. Reopen **Resume** and watch for the **Could not resume** message; it identifies a name or size mismatch.

**The upload returns to Error.** Read the error beneath the filename. Check workspace storage, upload permission, the destination folder, and network stability before retrying.

**The cloud file already exists.** Open the destination from Files and compare the name, size and current version. Remove the interrupted row if the intended upload is already complete; do not resume it merely to clear the warning.

**You no longer have the source file.** The browser cannot finish the upload without those bytes. Remove the interrupted row and recover the source from its original device or another trusted copy.

**Resume begins at zero percent.** That is expected for a file that used the single-request path or whose multipart session can no longer be recovered. Keep the original unchanged and let the new transfer finish.

**The row is missing after you sign in.** Upload metadata is bound to the browser profile and account that stored it. Return to that browser and account; if the row was cleared or aged out of the latest 50 entries, check Files before creating a new attempt.

## Related guides

- [Understand upload progress and transfer states](/uploading/progress-and-states)
- [Troubleshoot a failed upload](/troubleshooting/failed-upload)
- [Cancel an upload safely](/uploading/cancel-upload)
