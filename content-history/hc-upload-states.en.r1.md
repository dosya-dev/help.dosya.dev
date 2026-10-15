---
{
  "articleId": "hc-upload-states",
  "locale": "en",
  "revision": 1,
  "title": "Understanding upload progress and transfer states",
  "summary": "Read Queued, Uploading, Done, Error, Interrupted and Canceled states, then choose the action that matches the current transfer.",
  "category": "uploading",
  "articleSlug": "progress-and-states",
  "status": "published",
  "lastReviewed": "2026-10-12",
  "verification": "Verified the current English web app upload queue, global upload list and source on 2026-10-12 using an isolated local fixture with six fictional files. The captured UI confirmed Queued, Uploading, Done, Error, Interrupted and Canceled labels, progress bytes, Retry, Resume, Cancel and completed-file actions. Delayed and failed states were controlled fixtures; production network timing and native app labels were not tested.",
  "related": ["hc-upload-files", "hc-large-upload", "hc-failed-upload", "hc-cancel-upload"],
  "keywords": ["upload progress", "upload status", "queued upload", "uploading", "Done", "Error", "Interrupted", "Canceled", "Resume", "Retry"]
}
---
Use an upload's current state to decide what to do. **Queued** waits for a transfer slot, **Uploading** is moving data, **Done** is complete, **Error** needs its cause corrected, **Interrupted** needs the original source selected again, and **Canceled** was deliberately stopped.

The current Dosya web queue uses **Interrupted**, not “Paused,” for a transfer that lost its browser source after a reload or similar interruption. Follow the label and action shown in your app; desktop or mobile surfaces can present their transfer controls differently.

## Before you start

- Open **Uploads** in the active workspace and expand the small upload list at the bottom right if it is collapsed.
- Identify the exact filename and destination. Similar filenames can represent separate attempts.
- Keep the source file available and unchanged until you verify **Done** in Files.
- Do not clear a failed, interrupted or canceled row until you have recorded its message and checked the destination.

## Steps: read the current state

1. Find the file under **Upload queue** or in the upload list at the bottom right.
2. Match its label to the table below. The state is more reliable than guessing from how long the row has been visible.
3. Read the filename, transferred bytes, percentage and message together. A combined dock heading such as **Uploading 1/6 · 43%** summarizes the whole visible batch; inspect the individual row before taking action.
4. Use only the action for that row: wait, Cancel, Retry, Resume, View file or Go to location.
5. After any recovery action, wait for **Done** and inspect the stored file.

| Web state | Meaning | Appropriate action |
| --- | --- | --- |
| **Queued** | The item is waiting for an available transfer slot. | Keep the tab open and let running items progress. Review simultaneous-upload limits if nothing starts. |
| **Uploading** | Dosya is transferring the file. Percentage, bytes and speed can change as work continues. | Keep the tab and device running. Cancel only if you intend to stop this attempt. |
| **Done** | The service completed this upload. | Use **View file** or **Go to location**, then verify the destination copy. |
| **Error** | The attempt failed with a stated cause. | Read and correct the cause, then use **Retry** when the source is still available. |
| **Interrupted** | The retained row no longer has direct access to its browser source, often after reload. | Select **Resume** and reselect the unchanged original file. |
| **Canceled** | A user stopped this attempt. | Check Files for a completed copy. Start a new upload if the file is still needed. |

<figure class="help-screenshot">
  <a href="/screenshots/upload-transfer-states-2026-10-12.webp"><img src="/screenshots/upload-transfer-states-2026-10-12.webp" alt="Dosya Upload files page showing fictional examples of Uploading, Queued, Done, Error, Interrupted and Canceled transfer states." width="1160" height="900" loading="lazy" decoding="async" /></a>
  <figcaption>The current web UI distinguishes six states. Read the individual filename and message before using Retry, Resume or Cancel. All examples in this capture are controlled local fixtures. <a href="/screenshots/upload-transfer-states-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: monitor a running batch

1. Leave **Uploading** rows running while their bytes or percentage continue to move.
2. Let **Queued** rows wait behind the active transfers. **Upload options → Simultaneous uploads** controls how many the browser tries to run, and the workspace can enforce a lower cap.
3. You may browse to another page inside Dosya; the bottom-right upload list remains available. Keep the tab open and avoid a reload during active work.
4. If one row changes to **Error**, read that row's message. Other files can continue and should not be restarted automatically.
5. If a reload leaves a row **Interrupted**, choose **Resume** and select the same filename and size from your device. The name-and-size check helps locate the source but does not prove identical contents.
6. Wait until every required row is **Done** or has a clearly understood exception.

## Steps: confirm completion

1. Select **View file** beside a Done row, or **Go to location** for its folder.
2. Check the active workspace, folder, filename and size in **Files**.
3. Open or download important files and perform any integrity check your workflow requires.
4. Use **Clear done** only after verification. It tidies queue history and does not remove uploaded files.

<figure class="help-screenshot">
  <a href="/screenshots/upload-completed-2026-10-10.webp"><img src="/screenshots/upload-completed-2026-10-10.webp" alt="A completed Dosya Upload queue row marked Done with View file and Go to location actions for verification." width="1160" height="460" loading="lazy" decoding="async" /></a>
  <figcaption><strong>Done</strong> is the transfer result to look for. Use the destination actions to check the actual stored file before clearing the row. <a href="/screenshots/upload-completed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

You can tell whether a file is waiting, transferring, finished, failed, recoverable or deliberately stopped. You use the action attached to the affected row and verify a Done item in its destination instead of restarting the full batch.

## Limits of the progress display

- Progress reports the current transfer attempt. It does not replace checking the destination file.
- Percentage, transferred bytes and speed can update at different intervals. A short pause in the number does not by itself establish failure.
- The batch heading summarizes several files. It can show one active upload while another row is queued, done or failed.
- Queue history is stored in the browser and can be cleared or lost. A row is not a permanent audit record.
- Web, desktop and mobile apps can use different layouts or labels. These instructions describe the current English web app.

## Troubleshooting

**A file remains Queued after others finish.** Check whether another transfer still occupies a slot, whether the workspace's simultaneous-upload cap is lower than your selection, and whether an active request is backing off after a temporary refusal. Keep the tab open. If no row progresses, record the messages before reloading.

**The percentage has not moved.** Check whether bytes or speed are changing and whether the connection is available. Give an active request time to finish its current part. If the row changes to Error, diagnose that message rather than adding a duplicate.

**The page says Error.** Resolve the named network, storage, permission, destination or file-type cause, then select Retry. See [Troubleshooting a failed upload](/troubleshooting/failed-upload).

**The page says Interrupted.** Expand the bottom-right upload list and select Resume. Reselect the unchanged original file. If the saved session is no longer valid, Dosya can restart the upload rather than reuse prior progress.

**The page says Canceled but I still need the file.** Check Files first. If no completed copy exists, start a new upload from the original. A canceled attempt does not offer Resume.

**A row says Done but I cannot find the file.** Use **View file** or **Go to location** from that row and confirm the workspace. The upload keeps the destination selected when that attempt was added; changing the folder later affects new items.

## Frequently asked questions

### Can I use another Dosya page while an upload runs?

Yes. The global upload list can continue while you navigate inside the web app. Keep the browser tab open and the device awake.

### Why is an upload pending after another file appears complete?

The previous request can still be releasing its slot, another item can be active, or the workspace can enforce a lower concurrency cap. Look at every row and allow a short transition before treating the queued item as stuck.

### Is Interrupted the same as Canceled?

No. Interrupted can offer **Resume** after you reselect the original. Canceled records a deliberate stop; begin a new upload if no completed copy exists.

## Related guides

- [Uploading files and folders](/uploading/files-and-folders)
- [Uploading large files with available storage](/uploading/large-files)
- [Troubleshooting a failed upload](/troubleshooting/failed-upload)
- [Canceling an upload safely](/uploading/cancel-upload)
