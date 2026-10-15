---
{
  "articleId": "hc-sftp-download-file",
  "locale": "en",
  "revision": 3,
  "title": "Download a file over SFTP",
  "summary": "Download it and compare its byte size or checksum. Verify that the local copy matches the remote file.",
  "category": "integrations",
  "articleSlug": "sftp-download-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/sftp-download-file-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-download-file-help-workflow-2026-10-14.webp" alt="Four-step workflow map for download a file over sftp, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for download a file over sftp: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/sftp-download-file-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify known remote test file and empty local folder.

## Steps: download a file over SFTP

1. Open an SFTP client connected to Dosya and confirm the active account and workspace.
2. Locate known remote test file and empty local folder and verify its name or identifying details.
3. Download it and compare its byte size or checksum.
4. Confirm that the local copy matches the remote file.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP access overview for secure interactive file transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Verify the documented host key before accepting a first connection and use an SFTP-restricted credential. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The local copy matches the remote file.

## Expected result

The controlled workflow completes and the local copy matches the remote file.

## Troubleshooting

**The expected control is missing.** Return to an SFTP client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Use a restricted SFTP key](/integrations/sftp-restricted-key)
