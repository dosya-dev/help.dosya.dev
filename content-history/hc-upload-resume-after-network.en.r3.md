---
{
  "articleId": "hc-upload-resume-after-network",
  "locale": "en",
  "revision": 3,
  "title": "Resume an upload after a network interruption",
  "summary": "Restore the connection, retry the failed queue row while its source file remains available, and verify one completed cloud copy.",
  "category": "uploading",
  "articleSlug": "upload-resume-after-network",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-failed-upload",
    "hc-upload-recover-after-refresh",
    "hc-cancel-upload"
  ],
  "keywords": [
    "resume upload after network",
    "retry failed cloud upload",
    "network interrupted file upload",
    "Dosya upload queue"
  ]
}
---
A network failure changes the affected queue row to **Error** and preserves its message. If the browser tab still holds the source file, use **Retry** on that row after the connection is stable. If you refreshed or reopened the page, the row becomes **Interrupted** and you must use **Resume** to reselect the original file.

## Before you start

- Open the Dosya upload queue in the current released client.
- Confirm the active account and workspace, then identify interrupted transfer with an incomplete progress state.

## Steps: resume an upload after a network interruption

1. Open the Dosya upload queue and confirm the active account and workspace.
2. Locate interrupted transfer with an incomplete progress state and verify its name or identifying details.
3. Restore a stable connection and keep the source file unchanged. Choose **Retry** if the current tab still has the file; choose **Resume** and reselect it if the row is **Interrupted**.
4. Confirm that the transfer continues or restarts with one clear active job.

<figure class="help-screenshot"><a href="/screenshots/upload-error-retry-2026-10-11.webp"><img src="/screenshots/upload-error-retry-2026-10-11.webp" alt="Dosya upload queue showing a failed item and its retry control." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Retry one item first and preserve the exact error when a transfer keeps failing. <a href="/screenshots/upload-error-retry-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the transfer continues or restarts with one clear active job.

## Limits and important details

- Retry continues the same queue item. Dropping the file into the main upload area creates another item and can produce a duplicate or name conflict.

## Troubleshooting

**The expected control is missing.** Return to the Dosya upload queue, confirm the active workspace, and check that your role and client version support the action.

**Retry is disabled after a reload.** Use **Resume** in the upload dock and select the original file with the same name and size. Browsers do not retain the source bytes across a refresh.

## Related guides

- [Troubleshoot a failed upload](/troubleshooting/failed-upload)
- [Recover an upload after refreshing the browser](/uploading/upload-recover-after-refresh)
- [Cancel an upload](/uploading/cancel-upload)
