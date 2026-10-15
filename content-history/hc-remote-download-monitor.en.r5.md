---
{
  "articleId": "hc-remote-download-monitor",
  "locale": "en",
  "revision": 5,
  "title": "Monitor remote download progress",
  "summary": "Read remote-download states, byte progress, errors, and polling behavior; cancel active work or remove a finished row without deleting its file.",
  "category": "integrations",
  "articleSlug": "remote-download-monitor",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/remote-download.tsx, apps/web/src/stores/remote-downloads.ts, apps/web/src/components/layout/remote-download-indicator.tsx, apps/api/src/pages/api/remote-downloads/[id].ts, and apps/api/src/lib/remote-download/durable-object.ts. No production job was started or cancelled.",
  "related": [
    "hc-remote-download",
    "hc-storage-usage"
  ],
  "keywords": [
    "remote download progress",
    "server-side download status",
    "cancel remote file transfer",
    "cloud storage transfer errors"
  ]
}
---
The Remote Downloads table shows server-side work for the active workspace. Active rows move through `queued`, `downloading`, and `finalizing`; terminal rows show **Done**, **Failed**, or **Cancelled**. A successful file is created only after finalization.

<figure class="help-screenshot"><a href="/screenshots/remote-download-monitor-help-workflow-2026-10-14.webp"><img src="/screenshots/remote-download-monitor-help-workflow-2026-10-14.webp" alt="Monitoring sequence for a remote file as it moves from queued through downloading and finalizing to Done, Failed, or Cancelled." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Use status and transferred-byte values together; one hundred percent can still be finalizing before the file is registered. <a href="/screenshots/remote-download-monitor-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Read each state

- `queued` means the job row exists and is waiting for server execution.
- `downloading` shows `bytes done / bytes total` and a floored percentage. Progress can pause while Dosya retries a transient network or source error.
- `finalizing` means all source bytes may already be present while quota, destination locks, registration, and the final file row are completed. Do not treat 100% as **Done**.
- **Done** displays the final size and stores a file ID. Only this state proves the file was registered in Dosya Files.
- **Failed** retains an error label and does not register an incomplete object as a file.
- **Cancelled** means remaining transfer work stopped and no incomplete file was registered or exposed in Dosya Files. Temporary-object teardown is best-effort, so the row does not prove that every storage cleanup call succeeded.

The open Remote Downloads page polls every **3 seconds** while any row is active. The sidebar indicator uses a separate **5-second** refresh, aggregates sized jobs, lists at most four names, and adds `+N more` for additional active transfers. Neither interval is an estimate of source speed or completion time.

## Steps

1. Open **Integrations → Remote Downloads** in the workspace where the job was submitted.
2. Match the **File** column to the sanitized source filename. Hovering the truncated name exposes the submitted URL.
3. Track **Status**, **Progress**, and **Started**. Compare transferred bytes with the total rather than relying only on the progress ring.
4. When status becomes **Done**, open the selected Files folder and verify the final name and byte size. A collision may have added a suffix such as ` (2)` before the extension.
5. If the row becomes **Failed**, record its displayed reason before retrying with a corrected source or destination.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Remote Downloads table with File, Status, Progress, Started, and cancel-or-remove controls for each server-side job." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The table refreshes active transfers and changes the row's X control from cancellation to list removal after terminal status. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Cancel or remove a row

For an active job, the X control is titled **Cancel download**. Only the person who started the job can use it; another member receives **Only the person who started this download can remove it**. Cancellation can race with completion. If final registration wins, the response leaves the job done and the completed file remains.

For **Done**, **Failed**, or **Cancelled**, the same X is titled **Remove from list**. It only hides the job row. It does not delete a completed file, does not erase the retained job record, and does not restore one of the workspace's 20 rolling daily starts. Delete an unwanted completed file separately in Files using the normal file controls.

The list returns the newest **50** non-dismissed jobs for that workspace. Removing a row from this view is irreversible in the current UI because there is no restore control for dismissed transfer rows.

## Error labels and recovery

- **Address not allowed** or **Not a direct file link** requires a different public HTTPS source.
- **Unknown file size** means the origin did not provide a usable positive length.
- **File too large** reflects the selected transfer strategy's ceiling.
- **Not enough storage** can occur at start or again during finalization because capacity is rechecked.
- **File changed on the source server** means the probed validator or size no longer matched; obtain a stable URL and create a new job.
- **Connection to the source failed** follows exhausted network retries. **Source returned HTTP N** preserves the origin's terminal HTTP code.
- **Destination is a locked backup** requires another live destination; retrying cannot bypass that lock.

A failed or cancelled row has no registered or visible partial file to resume. Dosya attempts to abort multipart work and remove an unreferenced completed object, but those cleanup calls deliberately swallow teardown errors. Start a new job after fixing the named cause. A done row is independent of its source afterward, and removing it from the list does not affect cloud storage.

## Expected result

The job either reaches **Done** and produces one complete file in the recorded folder, or ends with a specific failure/cancellation and no incomplete file. Any row removal has only a history-display effect, while file deletion remains a separate action.

## Related guides

- [Download a remote URL](/integrations/remote-download)
- [Understand storage limits](/uploading/storage-usage)
