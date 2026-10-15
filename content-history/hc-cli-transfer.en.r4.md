---
{
  "articleId": "hc-cli-transfer",
  "locale": "en",
  "revision": 4,
  "title": "Upload and download with the CLI",
  "summary": "Run a small CLI upload and download, verify names and sizes, and keep automation from overwriting or deleting unintended files.",
  "category": "developers",
  "articleSlug": "cli-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-cli-workspace",
    "hc-upload-files",
    "hc-download-files"
  ],
  "keywords": [
    "CLI upload",
    "CLI download",
    "command line transfer",
    "file upload"
  ]
}
---
Start with one non-confidential file and explicit source and destination paths before placing CLI transfer commands in a script.

A CLI transfer should start with one harmless file and an explicit workspace and destination. Automation needs error checks before it handles larger batches.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-transfer-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-transfer-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-transfer-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-transfer-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-transfer-workflow-map-2026-10-14.webp" alt="Four-step interface map for upload and download with the cli, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/cli-transfer-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-transfer-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-transfer-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: upload and download with the cli

1. Select the workspace and destination.
2. Run the documented upload command for one sample.
3. List the destination and verify name and size.
4. Download it to a new local path.
5. Open or compare the downloaded sample.
6. Add error handling and dry-run checks before scaling the script.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya integration setup page showing the verified connection values and guidance used by an automation client." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Copy connection values from the current integration page and keep secrets private. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

List the uploaded object, download it to a new path and compare name and size. Preserve the source until the round trip is verified.

## Expected result

The upload and download with the cli workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Select a CLI workspace](/developers/cli-workspace)
- [Upload in the web app](/uploading/files-and-folders)
- [Download files](/uploading/download-files)
