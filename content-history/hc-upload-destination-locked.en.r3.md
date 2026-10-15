---
{
  "articleId": "hc-upload-destination-locked",
  "locale": "en",
  "revision": 3,
  "title": "Fix an upload blocked by the destination",
  "summary": "Check the destination's lock and role restrictions, then choose a writable folder and restart the affected upload deliberately.",
  "category": "uploading",
  "articleSlug": "upload-destination-locked",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-failed-upload",
    "hc-lock-folder",
    "hc-workspace-folder-access"
  ],
  "keywords": [
    "upload destination locked",
    "upload permission denied",
    "writable cloud folder",
    "folder access upload",
    "Dosya cloud storage"
  ]
}
---
An upload cannot write through a full folder lock, a role restriction, or a destination that no longer exists. Confirm the exact folder and access rule first. If you choose another folder, add the source file again after changing **Upload options** because retrying the existing row keeps its original destination.

## Before you start

- Open the Dosya upload queue in the current released client.
- Confirm the active account and workspace, then identify upload error naming a locked, restricted, or unavailable destination.

## Steps: fix an upload blocked by the destination

1. Open the Dosya upload queue and confirm the active account and workspace.
2. Locate upload error naming a locked, restricted, or unavailable destination and verify its name or identifying details.
3. Verify the folder lock and role restrictions. Have an owner change access, or select an authorized writable folder under **Upload options** and add the source file again.
4. Confirm that the test upload can write to its selected destination.

<figure class="help-screenshot"><a href="/screenshots/upload-error-retry-2026-10-11.webp"><img src="/screenshots/upload-error-retry-2026-10-11.webp" alt="Dosya upload queue showing a failed item and its retry control." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Retry one item first and preserve the exact error when a transfer keeps failing. <a href="/screenshots/upload-error-retry-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the test upload can write to its selected destination.

## Limits and important details

- **Retry** keeps the destination recorded on the failed row. Use a new queue item when you intentionally choose a different folder.

## Troubleshooting

**The expected control is missing.** Return to the Dosya upload queue, confirm the active workspace, and check that your role and client version support the action.

**Retry returns the same destination error.** The row still points to the original folder. Remove it, select a writable destination under **Upload options**, and add the source file as a new upload.

## Related guides

- [Troubleshoot a failed upload](/troubleshooting/failed-upload)
- [Lock a folder with a password](/files/lock-folder)
- [Restrict a workspace member to one folder](/workspaces/folder-access)
