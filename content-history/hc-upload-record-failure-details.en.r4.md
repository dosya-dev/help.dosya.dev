---
{
  "articleId": "hc-upload-record-failure-details",
  "locale": "en",
  "revision": 4,
  "title": "Record useful details for an upload failure",
  "summary": "Record the time, file name and size, destination, client version, and nonsecret error or request identifier. Verify that support evidence identifies the failed operation without exposing file contents or credentials.",
  "category": "uploading",
  "articleSlug": "upload-record-failure-details",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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
This guide covers **Record useful details for an upload failure** in Dosya. The main action is to record the time, file name and size, destination, client version, and nonsecret error or request identifier; the decisive check is whether support evidence identifies the failed operation without exposing file contents or credentials.

Track the failed transfer file with its destination, available storage and transfer state.

<figure class="help-screenshot"><a href="/screenshots/upload-record-failure-details-help-workflow-2026-10-14.webp"><img src="/screenshots/upload-record-failure-details-help-workflow-2026-10-14.webp" alt="Workflow for “Record useful details for an upload failure”: record the time, file name and size, destination, client version, and nonsecret error or request identifier; support evidence identifies the failed operation without exposing file contents or credentials." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Record useful details for an upload failure”: record the time, file name and size, destination, client version, and nonsecret error or request identifier; support evidence identifies the failed operation without exposing file contents or credentials. <a href="/screenshots/upload-record-failure-details-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya upload queue in the current released client.
- Confirm the active account and workspace, then identify repeatable failed upload with a visible error.

## Steps: record useful details for an upload failure

1. Open the Dosya upload queue and confirm the active account and workspace.
2. Locate repeatable failed upload with a visible error and verify its name or identifying details.
3. Record the time, file name and size, destination, client version, and nonsecret error or request identifier.
4. Confirm that support evidence identifies the failed operation without exposing file contents or credentials.

<figure class="help-screenshot"><a href="/screenshots/upload-error-retry-2026-10-11.webp"><img src="/screenshots/upload-error-retry-2026-10-11.webp" alt="Reference for “Record useful details for an upload failure”: Dosya upload queue showing a failed item and its retry control." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Record useful details for an upload failure”: Dosya upload queue showing a failed item and its retry control. <a href="/screenshots/upload-error-retry-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Retry one item first and preserve the exact error when a transfer keeps failing.

## Verify the result

After completing the steps, check the expected result: Support evidence identifies the failed operation without exposing file contents or credentials.

Compare the failed transfer file with its source by name, size and destination before removing a local copy. Record the exact transfer error for the failed transfer file before retrying; check size, quota and destination.

## Expected result

The controlled workflow completes and support evidence identifies the failed operation without exposing file contents or credentials.

## Troubleshooting

**The expected control is missing.** Return to the Dosya upload queue, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Troubleshoot a failed upload](/troubleshooting/failed-upload)
- [Cancel an upload](/uploading/cancel-upload)
