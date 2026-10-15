---
{"articleId":"hc-upload-recover-after-refresh","locale":"en","revision":2,"title":"Recover an upload after refreshing the browser","summary":"Resume an interrupted browser upload by reselecting the same source file, then verify the completed cloud copy without creating a duplicate.","category":"uploading","articleSlug":"upload-recover-after-refresh","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed the browser upload persistence, interrupted-state hydration, Resume file picker, filename and size checks, multipart continuation, and completed-file controls against the current local web source and focused upload tests on 2026-10-14. Screenshots show the verified interrupted and recovered states with isolated sample files.","related":["hc-failed-upload","hc-upload-states","hc-cancel-upload"],"keywords":["resume upload after refresh","interrupted browser upload","reselect upload file","cloud file upload recovery","Dosya upload queue"]}
---
A browser refresh keeps the upload row and its recorded progress, but the browser no longer holds the source file bytes. Dosya therefore changes an active or queued upload to **Interrupted** and asks you to reselect the same file before it can continue.

## Before you start

- Keep the original source file in its current location and do not rename or edit it.
- Open Dosya with the same account and workspace that started the upload.
- Check whether the file already appears as **Done** in the upload dock or Upload queue. A completed item does not need to be added again.
- If the destination folder was deleted, locked or made read-only, resolve that access problem before resuming.

## Steps: resume the interrupted upload

1. Return to Dosya after the page reloads and expand the upload dock in the lower-right corner.
2. Find the row marked **Interrupted**. Confirm its filename, size and destination before selecting anything.
3. Select **Resume** on that row. Dosya opens the browser file picker because the refreshed tab cannot recover a local file automatically.
4. Choose the original file. Its name and byte size must match the interrupted row. If either value differs, Dosya refuses the selection so a different file cannot silently replace the original upload.
5. Keep the page open while the row returns to **Queued** or shows an upload percentage. A multipart upload can continue using parts already accepted by the service; the client sends the remaining parts.
6. Wait for **Done**, then select **View file** or **Go to location**. Confirm the cloud file has the expected name, size and destination.

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

The interrupted row resumes after you reselect the matching source file and eventually changes to **Done**. The Upload queue contains one completed row for the file, and **View file** opens the expected cloud item in the original destination.

## Limits and important details

- Browsers do not allow a website to retain unrestricted access to a local file after a reload. Reselecting the source file is required.
- **Retry** works for a failed row only while the current tab still holds the source file. A row that survives a reload uses **Resume** instead.
- Dosya checks the selected file's name and size. It cannot prove that two same-named, same-sized files contain identical bytes before the transfer begins, so select the original source deliberately.
- Do not drag the file into the main upload area as a substitute for **Resume**. That starts a separate upload and can create a name conflict or another version.
- Completed rows are preserved across a refresh. Verify **Done** before restarting a transfer that may already have finished.

## Troubleshooting

**Resume says the file does not match.** Select the original file with the same filename and byte size. If you renamed or edited it, remove the interrupted row and start a new upload so the new file is treated explicitly.

**The row stays Interrupted after selection.** Confirm that you selected a file rather than cancelling the picker. Reopen **Resume**, choose the source again, and watch for a validation message.

**The upload returns to Error.** Read the error beneath the filename. Check workspace storage, upload permission, the destination folder, and network stability before retrying.

**The cloud file already exists.** Open the destination from Files and compare the name, size and current version. Remove the interrupted row if the intended upload is already complete; do not resume it merely to clear the warning.

**You no longer have the source file.** The browser cannot finish the upload without those bytes. Remove the interrupted row and recover the source from its original device or another trusted copy.

## Related guides

- [Understand upload progress and transfer states](/uploading/progress-and-states)
- [Troubleshoot a failed upload](/troubleshooting/failed-upload)
- [Cancel an upload safely](/uploading/cancel-upload)
