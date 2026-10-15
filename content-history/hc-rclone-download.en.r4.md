---
{
  "articleId": "hc-rclone-download",
  "locale": "en",
  "revision": 4,
  "title": "Download files with rclone",
  "summary": "Run a copy from the remote to an empty local folder, then verify that the local files match the remote selection.",
  "category": "integrations",
  "articleSlug": "rclone-download",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-webdav-connect",
    "hc-api-key-protocols"
  ],
  "keywords": [
    "rclone download",
    "protocol client workflows",
    "Dosya help",
    "file download"
  ]
}
---
Use this workflow to download files with rclone in the intended account or workspace.

An rclone copy downloads remote items without deleting the Dosya originals. Use an empty local destination to make verification clear.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/rclone-download-workflow-map-2026-10-14.webp" data-light-href="/screenshots/rclone-download-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/rclone-download-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/rclone-download-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rclone-download-workflow-map-2026-10-14.webp" alt="Four-step interface map for download files with rclone, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/rclone-download-workflow-map-2026-10-14.webp" data-light-href="/screenshots/rclone-download-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/rclone-download-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open rclone and Dosya WebDAV in the current released Dosya client.
- Confirm the active account and workspace, then identify a configured test remote.

## Steps: download files with rclone

1. Open rclone and Dosya WebDAV and confirm the active workspace.
2. Select a configured test remote and check its name or identifying details.
3. Run a copy from the remote to an empty local folder.
4. Verify that the local files match the remote selection.

<figure class="help-screenshot"><a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp"><img src="/screenshots/webdav-cyberduck-connection-2026-10-11.webp" alt="Cyberduck connection configured for the Dosya WebDAV endpoint." width="1040" height="750" loading="lazy" decoding="async" /></a><figcaption>Use a restricted test credential and keep its secret out of screenshots and logs. <a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Compare the transferred file count, paths and sample sizes, then review the rclone exit status before relying on the batch.

## Expected result

The workflow completes for the controlled test and the local files match the remote selection.

## Troubleshooting

**The expected control is missing.** Return to rclone and Dosya WebDAV, confirm the active workspace and check that your role permits the action.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Restrict protocol access](/developers/api-key-protocols)
