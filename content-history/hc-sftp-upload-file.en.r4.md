---
{
  "articleId": "hc-sftp-upload-file",
  "locale": "en",
  "revision": 4,
  "title": "Upload a file over SFTP",
  "summary": "Transfer the file and wait for the client queue to finish. Verify that the remote listing shows the expected name and size.",
  "category": "integrations",
  "articleSlug": "sftp-upload-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-restricted-key"
  ],
  "keywords": [
    "sftp upload file",
    "SFTP client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Upload a file over SFTP** in Dosya. The main action is to transfer the file and wait for the client queue to finish; the decisive check is whether the remote listing shows the expected name and size.

<figure class="help-screenshot"><a href="/screenshots/sftp-upload-file-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-upload-file-help-workflow-2026-10-14.webp" alt="Workflow for “Upload a file over SFTP”: transfer the file and wait for the client queue to finish; the remote listing shows the expected name and size." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Upload a file over SFTP”: transfer the file and wait for the client queue to finish; the remote listing shows the expected name and size. <a href="/screenshots/sftp-upload-file-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya and locate the small local test file and writable remote folder.
- Confirm the active account and workspace, then identify small local test file and writable remote folder.

## Steps: upload a file over SFTP

1. Confirm the account and workspace in an SFTP client connected to Dosya when reviewing the small local test file and writable remote folder.
2. Locate small local test file and writable remote folder and verify its name or identifying details.
3. Transfer the file and wait for the client queue to finish.
4. Confirm that the remote listing shows the expected name and size.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Reference for “Upload a file over SFTP”: Dosya SFTP access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Upload a file over SFTP”: Dosya SFTP access overview page. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Verify the documented host key before accepting a first connection and use an SFTP-restricted credential.

## Verify the result

After completing the steps, check the expected result: The remote listing shows the expected name and size.

## Expected result

The controlled workflow completes and the remote listing shows the expected name and size.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the small local test file and writable remote folder, check the active workspace, your role and the client version.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Use a restricted SFTP key](/integrations/sftp-restricted-key)
