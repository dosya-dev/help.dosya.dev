---
{
  "articleId": "hc-large-upload",
  "locale": "en",
  "revision": 1,
  "title": "Uploading large files with available storage",
  "summary": "Check storage and workspace limits, keep a large transfer running, and verify the completed file before removing the original.",
  "category": "uploading",
  "articleSlug": "large-files",
  "status": "published",
  "lastReviewed": "2026-10-12",
  "verification": "Verified the current English web UI and source on 2026-10-12. A local isolated workspace confirmed the storage indicator, Hard limits fields, upload queue and completed-file actions. The screenshots use fictional local fixture data. Multipart and resume behavior, quota exhaustion and a workspace limit tighter than remaining storage were checked against current source and public documentation rather than exercised against production with a multi-gigabyte file.",
  "related": ["hc-upload-files", "hc-upload-states", "hc-failed-upload", "hc-free-plan"],
  "keywords": ["large file upload", "maximum file size", "remaining storage", "workspace upload limit", "multipart upload", "resumable upload", "storage quota"]
}
---
Dosya does not publish a plan-level maximum size for one file. A file can be as large as the storage available to it, unless the workspace has a tighter **Max upload file size**, member-storage cap, total-storage cap or file-type rule. Check both capacity and workspace policy before starting a long transfer.

Large uploads are split into parts so a recoverable transfer can reuse completed parts. Keep the original file unchanged and available: resume still depends on the saved session, the destination remaining valid and selecting the same source file.

## Before you start

- Sign in to [the Dosya app](https://app.dosya.dev), select the destination workspace and confirm that your role can upload there.
- Check the storage indicator at the bottom of the sidebar. It belongs to the active workspace; switching workspaces changes the capacity you are viewing.
- Ask a workspace owner or admin whether **Settings → Hard limits** applies a maximum file size, per-member storage cap, total workspace cap or file-type restriction.
- Keep more capacity available than the displayed size when the workspace also contains versions, trash or other members' files. Do not depend on an estimate that is already at the limit.
- Keep the browser tab running, the device awake and the source file in place until the result shows **Done**.

## Steps: check capacity and workspace limits

1. **Select the correct workspace.** Read the workspace name at the top of the app sidebar.
2. **Check available storage.** Read the storage indicator near the bottom of the sidebar. Compare the available amount with the size shown by your operating system for the source file.
3. **Check workspace rules.** If you are an owner or admin, open **Settings → Hard limits**. Review **Max upload file size**, **Storage per member**, **Total workspace storage cap**, **Max simultaneous uploads**, **Allowed file types** and **Blocked file types**. If you cannot open these settings, ask an owner or admin to confirm the applicable values.
4. **Use the tightest applicable limit.** Remaining plan storage does not override a lower workspace file-size or member limit. A file can fit the plan and still be refused by workspace policy.
5. **Choose a safe sample when testing.** Use a non-confidential file that is large enough to exercise the workflow but small enough to leave comfortable storage headroom.

<figure class="help-screenshot">
  <a href="/screenshots/large-upload-hard-limits-2026-10-12.webp"><img src="/screenshots/large-upload-hard-limits-2026-10-12.webp" alt="Dosya workspace Hard limits showing maximum file size, member storage, total storage, simultaneous uploads and file-type rules." width="704" height="529" loading="lazy" decoding="async" /></a>
  <figcaption>A workspace can impose limits below the plan's available capacity. Review every applicable field before treating the storage indicator as the only constraint. The values shown are fictional local fixtures. <a href="/screenshots/large-upload-hard-limits-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: upload and monitor the large file

1. Open **Uploads** and choose **Upload options → Folder**. Confirm the destination before adding the file.
2. Select **browse for files**, choose the original file and confirm the selection. Avoid adding the same file again while the first attempt is active.
3. Find the file in **Upload queue** or the upload list at the bottom right. An active transfer shows its percentage and transferred bytes. A **Queued** item is waiting for a transfer slot; it has not failed merely because another file is running first.
4. Keep the tab open and the device awake. You can navigate to another page inside the Dosya web app while the global upload list continues, but closing or reloading the tab can interrupt access to the browser's source file.
5. If the connection is unstable, avoid starting extra transfers. A workspace can cap simultaneous uploads, and using a lower value can leave more bandwidth for the large file.
6. Wait for **Done**. A progress value close to 100% is not completion; the service still needs to finish and record the file.

<figure class="help-screenshot">
  <a href="/screenshots/upload-transfer-states-2026-10-12.webp"><img src="/screenshots/upload-transfer-states-2026-10-12.webp" alt="Dosya Upload files page with a large archive actively uploading and other examples marked Queued, Done, Error, Interrupted and Canceled." width="1160" height="900" loading="lazy" decoding="async" /></a>
  <figcaption>The active archive shows percentage and byte progress. Queued waits for a slot; Interrupted offers recovery with the original source. The filenames and states are controlled local examples. <a href="/screenshots/upload-transfer-states-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: verify the completed file

1. Confirm that the exact row shows **Done**.
2. Select **View file** or **Go to location** from the completed row.
3. In **Files**, check the workspace, folder, filename and displayed size. For important data, download or open the completed file and use your own checksum or application-level check when available.
4. Keep the original until that verification succeeds. Clearing a finished queue row only removes its transfer history from the display; it does not validate or delete the stored file.

<figure class="help-screenshot">
  <a href="/screenshots/upload-completed-2026-10-10.webp"><img src="/screenshots/upload-completed-2026-10-10.webp" alt="Dosya Upload queue showing a completed sample with Done, View file and Go to location actions." width="1160" height="460" loading="lazy" decoding="async" /></a>
  <figcaption><strong>Done</strong> confirms that Dosya finished this transfer. Use <strong>View file</strong> or <strong>Go to location</strong> to inspect the stored result before removing the original. <a href="/screenshots/upload-completed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The upload reaches **Done**, and the destination contains the expected file with the correct name and size. You can open or download it, and any independent integrity check you use matches the original.

If the file does not reach Done, retain the original and diagnose the displayed state. Do not infer completion from elapsed time, a full-looking progress bar or a queue row that disappeared.

## Limits and recovery expectations

- The effective maximum is the smallest relevant constraint: available storage, workspace maximum file size, per-member storage, total workspace storage, file-type rules and your upload permission.
- Dosya uses multipart transfers for large files. Completed parts can be reused only while the saved upload session, destination and permissions remain valid.
- After a reload, the browser no longer holds the original file object. An **Interrupted** row can ask you to select the original again. Dosya checks its name and size, which is not a content-integrity guarantee.
- Browser storage can be cleared, sessions can expire and workspace policy can change. Resumable transfer support does not guarantee indefinite recovery.
- The Free plan's storage and transfer allowances are separate. See [Free plan allowances](/account/free-plan-allowances) and check the current public policy before planning sustained automation.

## Troubleshooting

**The file is smaller than the available storage but is refused.** Check **Max upload file size**, per-member storage, total workspace storage, allowed or blocked types and your role. The sidebar's remaining storage does not override those rules.

**The file is Queued for a long time.** Check whether other transfers are active and review **Simultaneous uploads**. A workspace can impose a lower concurrency cap. Keep the tab open and look for progress on the running rows.

**The transfer shows Error.** Read the exact message before retrying. Restore connectivity or resolve the named storage, permission, destination or file-type issue. Repeated Retry clicks cannot remove a workspace restriction.

**The transfer shows Interrupted after a reload.** Expand the upload list at the bottom right, select **Resume** and choose the unchanged original file. See [Troubleshooting a failed upload](/troubleshooting/failed-upload) for the complete recovery flow.

**The transfer reached 100% but did not show Done.** Keep the tab running while Dosya finishes the request. If it changes to Error or Interrupted, follow that state. Check Files before starting another copy.

**The workspace is almost full.** Remove unneeded data only after checking versions, trash and retention requirements, or add capacity. Confirm the active workspace before deleting anything.

## Frequently asked questions

### What is the maximum file size?

Dosya does not publish a plan-level per-file cap. The practical maximum is the storage available to that file unless the workspace sets a lower maximum or another workspace rule applies.

### Can a workspace owner set a lower maximum?

Yes. An owner or admin can configure **Max upload file size** under Hard limits, alongside member, total-storage, concurrency and file-type rules.

### Can I browse the app during a large upload?

Yes. Navigation inside the web app can continue while the global upload list runs. Keep the tab open; closing or reloading it can interrupt the browser's access to the source file.

## Related guides

- [Uploading files and folders](/uploading/files-and-folders)
- [Understanding upload progress and transfer states](/uploading/progress-and-states)
- [Troubleshooting a failed upload](/troubleshooting/failed-upload)
- [Free plan allowances](/account/free-plan-allowances)
- [Why large uploads fail](https://dosya.dev/blog/why-large-uploads-fail)
