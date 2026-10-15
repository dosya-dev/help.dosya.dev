---
{
  "articleId": "hc-sftp-download-file",
  "locale": "en",
  "revision": 4,
  "title": "Download a file over SFTP",
  "summary": "Download it and compare its byte size or checksum. Verify that the local copy matches the remote file.",
  "category": "integrations",
  "articleSlug": "sftp-download-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-restricted-key"
  ],
  "keywords": [
    "sftp download file",
    "SFTP client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Download a file over SFTP** in Dosya. The main action is to download it and compare its byte size or checksum; the decisive check is whether the local copy matches the remote file.

<figure class="help-screenshot"><a href="/screenshots/sftp-download-file-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-download-file-help-workflow-2026-10-14.webp" alt="Workflow for “Download a file over SFTP”: download it and compare its byte size or checksum; the local copy matches the remote file." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Download a file over SFTP”: download it and compare its byte size or checksum; the local copy matches the remote file. <a href="/screenshots/sftp-download-file-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya and locate the known remote test file and empty local folder.
- Confirm the active account and workspace, then identify known remote test file and empty local folder.

## Steps: download a file over SFTP

1. Confirm the account and workspace in an SFTP client connected to Dosya when reviewing the known remote test file and empty local folder.
2. Locate known remote test file and empty local folder and verify its name or identifying details.
3. Download it and compare its byte size or checksum.
4. Confirm that the local copy matches the remote file.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Reference for “Download a file over SFTP”: Dosya SFTP access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Download a file over SFTP”: Dosya SFTP access overview page. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Verify the documented host key before accepting a first connection and use an SFTP-restricted credential.

## Verify the result

After completing the steps, check the expected result: The local copy matches the remote file.

## Expected result

The controlled workflow completes and the local copy matches the remote file.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the known remote test file and empty local folder, check the active workspace, your role and the client version.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Use a restricted SFTP key](/integrations/sftp-restricted-key)
