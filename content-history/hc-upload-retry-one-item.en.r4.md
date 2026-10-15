---
{
  "articleId": "hc-upload-retry-one-item",
  "locale": "en",
  "revision": 4,
  "title": "Retry one failed upload item",
  "summary": "Open the item error, correct the stated problem, and retry only that item. Verify that the failed item completes without restarting successful transfers.",
  "category": "uploading",
  "articleSlug": "upload-retry-one-item",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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
This guide covers **Retry one failed upload item** in Dosya. The main action is to open the item error, correct the stated problem, and retry only that item; the decisive check is whether the failed item completes without restarting successful transfers.

Track the retried file with its destination, available storage and transfer state.

<figure class="help-screenshot"><a href="/screenshots/upload-retry-one-item-help-workflow-2026-10-14.webp"><img src="/screenshots/upload-retry-one-item-help-workflow-2026-10-14.webp" alt="Workflow for “Retry one failed upload item”: open the item error, correct the stated problem, and retry only that item; the failed item completes without restarting successful transfers." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Retry one failed upload item”: open the item error, correct the stated problem, and retry only that item; the failed item completes without restarting successful transfers. <a href="/screenshots/upload-retry-one-item-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya upload queue in the current released client.
- Confirm the active account and workspace, then identify failed item in a multi-file upload.

## Steps: retry one failed upload item

1. Open the Dosya upload queue and confirm the active account and workspace.
2. Locate failed item in a multi-file upload and verify its name or identifying details.
3. Open the item error, correct the stated problem, and retry only that item.
4. Confirm that the failed item completes without restarting successful transfers.

<figure class="help-screenshot"><a href="/screenshots/upload-error-retry-2026-10-11.webp"><img src="/screenshots/upload-error-retry-2026-10-11.webp" alt="Reference for “Retry one failed upload item”: Dosya upload queue showing a failed item and its retry control." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Retry one failed upload item”: Dosya upload queue showing a failed item and its retry control. <a href="/screenshots/upload-error-retry-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Retry one item first and preserve the exact error when a transfer keeps failing.

## Verify the result

After completing the steps, check the expected result: The failed item completes without restarting successful transfers.

Compare the retried file with its source by name, size and destination before removing a local copy. Record the exact transfer error for the retried file before retrying; check size, quota and destination.

## Expected result

The controlled workflow completes and the failed item completes without restarting successful transfers.

## Troubleshooting

**The expected control is missing.** Return to the Dosya upload queue, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Troubleshoot a failed upload](/troubleshooting/failed-upload)
- [Cancel an upload](/uploading/cancel-upload)
