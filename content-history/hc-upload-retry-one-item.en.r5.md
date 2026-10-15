---
{
  "articleId": "hc-upload-retry-one-item",
  "locale": "en",
  "revision": 5,
  "title": "Retry one failed upload item",
  "summary": "Retry one failed row while its bytes remain in the tab, or reselect the same name and size after a reload so completed items stay untouched.",
  "category": "uploading",
  "articleSlug": "upload-retry-one-item",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-15; production behavior was not exercised for this revision. Verified against: apps/web/src/pages/uploads.tsx; apps/web/src/components/uploads/upload-dock.tsx; apps/web/src/lib/upload-runner.ts; apps/web/src/stores/uploads.ts; apps/api/src/pages/api/upload/init.ts.",
  "related": [
    "hc-failed-upload",
    "hc-cancel-upload"
  ],
  "keywords": [
    "upload retry one item",
    "Upload recovery details",
    "Dosya help",
    "file upload"
  ]
}
---

Use the row-level **Retry** for an **Error** item while the current tab still holds that file's bytes. It requeues only that row, keeps completed rows unchanged, and clears the prior error while the new attempt runs. **Retry all failed** is a separate batch action.

After a reload, an existing **Error** row keeps that status but no longer has file bytes, so its row-level Retry is disabled. **Retry all failed** processes every Error row: byte-less rows become **Interrupted**, while any failed rows that still have bytes are requeued. Only then does **Resume** appear per interrupted row. A multipart session keeps server-tracked parts; a single-PUT upload restarts from zero.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/upload-retry-one-item-help-workflow-2026-10-14.webp" data-light-href="/screenshots/upload-retry-one-item-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/upload-retry-one-item-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/upload-retry-one-item-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/upload-retry-one-item-help-workflow-2026-10-14.webp" alt="Four-step upload retry map showing error review, cause correction, post-reload Retry all failed changing byte-less rows to Interrupted, and one-row Resume verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Fix the cause first; after reload, use <strong>Retry all failed</strong> for the Error-to-Interrupted transition, then <strong>Resume</strong> only the intended row. <a class="workflow-map-full" href="/screenshots/upload-retry-one-item-help-workflow-2026-10-14.webp" data-light-href="/screenshots/upload-retry-one-item-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/upload-retry-one-item-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Expand **Upload queue** and read the failed row's complete message before deciding that another attempt can succeed.
2. Correct the stated cause: restore connectivity, free storage, change the file to an allowed extension, unlock the destination, or obtain the required permission.
3. If the row still offers **Retry**, press that row’s control once; this is the only path that isolates one Error row before a reload.
4. If Retry is disabled after reload, choose **Retry all failed** knowing it touches every Error row. Byte-less rows become **Interrupted**; then choose **Resume** on the intended row and select the same local name and byte size.
5. Reject a look-alike that triggers **That file does not match (name or size differs).** Watch the resumed row move through **Queued** and percentage progress while completed rows remain **Done**.
6. When the row reaches **Done**, choose **View file** or **Go to location** and compare the destination name and displayed size with the source.

<figure class="help-screenshot"><a href="/screenshots/upload-error-retry-2026-10-11.webp"><img src="/screenshots/upload-error-retry-2026-10-11.webp" alt="Dosya upload queue with recovery-example.txt in Error after a Network error and a Retry action beside that row." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>The row-level <strong>Retry</strong> shown beside the failed file is the control that isolates one recovery attempt. <a href="/screenshots/upload-error-retry-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A row-level Retry requeues only the selected failure. After reload, the batch recovery action may requeue every failed row whose bytes remain and parks all byte-less failures as Interrupted; Resume then acts on one selected row. A successful attempt reaches **Done** without restarting earlier completed transfers.

The client automatically waits three seconds and retries a workspace-concurrency refusal up to five times before showing it as an error. Do not repeatedly click Retry during that queued backoff. Canceling or removing the row is different: cancellation stops active requests and marks the row **Canceled**, while removal only clears the queue entry. A same-name retry can still become a new version if a live item with that name now exists in the destination.

## Related guides

- [Troubleshooting a failed upload](/troubleshooting/failed-upload)
- [Canceling an upload safely](/uploading/cancel-upload)
