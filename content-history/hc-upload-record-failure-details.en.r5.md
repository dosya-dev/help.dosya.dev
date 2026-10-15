---
{
  "articleId": "hc-upload-record-failure-details",
  "locale": "en",
  "revision": 5,
  "title": "Record useful details for an upload failure",
  "summary": "Capture the failed row’s exact error, file name, size, destination, workspace, time, browser state, and retry outcome before clearing the queue.",
  "category": "uploading",
  "articleSlug": "upload-record-failure-details",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-15; production behavior was not exercised for this revision. Verified against: apps/web/src/pages/uploads.tsx; apps/web/src/components/uploads/upload-dock.tsx; apps/web/src/lib/upload-runner.ts; apps/web/src/lib/upload-persistence.ts; apps/web/src/stores/uploads.ts.",
  "related": [
    "hc-failed-upload",
    "hc-cancel-upload"
  ],
  "keywords": [
    "upload record failure details",
    "Upload recovery details",
    "Dosya help",
    "file upload"
  ]
}
---

A failed upload row displays the source file name, formatted size, **Error**, and the server or network message that caused the failure. The web UI does not expose a request ID for these rows, so do not invent one or copy session cookies, API keys, upload URLs, or file contents into a support note.

Record the evidence before choosing **Clear done**, **Clear**, **Remove**, signing out, or reloading. The queue can persist up to 50 recent rows, but browser `File` objects do not. A persisted failure remains **Error** after reload with its retry control disabled until the batch recovery action parks byte-less failures as **Interrupted**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/upload-record-failure-details-help-workflow-2026-10-14.webp" data-light-href="/screenshots/upload-record-failure-details-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/upload-record-failure-details-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/upload-record-failure-details-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/upload-record-failure-details-help-workflow-2026-10-14.webp" alt="Four-step upload evidence map showing the retained failed row, exact red message, redacted screenshot, and post-reload Retry all failed then Resume sequence." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Preserve the failed row and exact error; after reload, use <strong>Retry all failed</strong> to reach <strong>Interrupted</strong> before resuming the intended row. <a class="workflow-map-full" href="/screenshots/upload-record-failure-details-help-workflow-2026-10-14.webp" data-light-href="/screenshots/upload-record-failure-details-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/upload-record-failure-details-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Expand **Upload queue** or the upload dock and keep the failed row visible; do not press **Clear done**, **Clear**, or **Remove** yet.
2. Copy the exact red message, including numeric values and punctuation, such as **Network error**, a workspace extension refusal, or a storage-limit sentence.
3. Record the file name, displayed size, active workspace, selected **Folder**, local date/time with time zone, and whether the row failed before or after progress began.
4. Note the surface as the Dosya web **Uploads** page, the browser and operating-system versions, and whether a reload or account switch occurred after selection.
5. Capture a screenshot limited to the failed row and destination context; redact email addresses or neighboring file names that support does not need.
6. If the row still holds its bytes, press its **Retry** once and record the result. If Retry is disabled after reload, record that state before using **Retry all failed**, which changes every byte-less **Error** row to **Interrupted** and may requeue other failed rows that still have bytes.

<figure class="help-screenshot"><a href="/screenshots/upload-error-retry-2026-10-11.webp"><img src="/screenshots/upload-error-retry-2026-10-11.webp" alt="Dosya Upload files page showing recovery-example.txt, size 49 B, Network error, Error status, and Retry controls in the queue and dock." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>This failure view exposes the useful evidence: file, size, exact <strong>Network error</strong> text, destination, and available <strong>Retry</strong> action. <a href="/screenshots/upload-error-retry-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The evidence identifies one failed operation without disclosing a secret: exact row text, source metadata, destination, workspace, time zone, client environment, and the controlled retry outcome are all present.

If Retry is disabled with **Add the file again to upload it - this tab no longer has its contents**, record that state. Choose **Retry all failed** to park every byte-less Error row as **Interrupted**, then use that row’s **Resume** to reselect the same name and size; there is no per-row Error-to-Interrupted control. For **That file does not match (name or size differs)**, preserve the original row and locate the exact source used before. Removing a row deletes only the local queue record; it does not delete a successfully stored Dosya file.

## Related guides

- [Troubleshooting a failed upload](/troubleshooting/failed-upload)
- [Canceling an upload safely](/uploading/cancel-upload)
