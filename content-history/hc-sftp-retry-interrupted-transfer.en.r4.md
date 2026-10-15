---
{
  "articleId": "hc-sftp-retry-interrupted-transfer",
  "locale": "en",
  "revision": 4,
  "title": "Retry an interrupted SFTP transfer",
  "summary": "Inspect the remote and local sizes, use the client supported resume or restart behavior, and verify the completed file. Verify that one complete remote file remains after recovery.",
  "category": "integrations",
  "articleSlug": "sftp-retry-interrupted-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-troubleshoot"
  ],
  "keywords": [
    "sftp retry interrupted transfer",
    "SFTP connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Retry an interrupted SFTP transfer** in Dosya. The main action is to inspect the remote and local sizes, use the client supported resume or restart behavior, and verify the completed file; the decisive check is whether one complete remote file remains after recovery.

<figure class="help-screenshot"><a href="/screenshots/sftp-retry-interrupted-transfer-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-retry-interrupted-transfer-help-workflow-2026-10-14.webp" alt="Workflow for “Retry an interrupted SFTP transfer”: inspect the remote and local sizes, use the client supported resume or restart behavior, and verify the completed file; one complete remote file remains after recovery." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Retry an interrupted SFTP transfer”: inspect the remote and local sizes, use the client supported resume or restart behavior, and verify the completed file; one complete remote file remains after recovery. <a href="/screenshots/sftp-retry-interrupted-transfer-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya and locate the partially transferred disposable file.
- Confirm the active account and workspace, then identify partially transferred disposable file.

## Steps: retry an interrupted SFTP transfer

1. Confirm the account and workspace in an SFTP client connected to Dosya when reviewing the partially transferred disposable file.
2. Locate partially transferred disposable file and verify its name or identifying details.
3. Inspect the remote and local sizes, use the client supported resume or restart behavior, and verify the completed file.
4. Confirm that one complete remote file remains after recovery.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Reference for “Retry an interrupted SFTP transfer”: Dosya SFTP access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Retry an interrupted SFTP transfer”: Dosya SFTP access overview page. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Verify the host key and restricted remote path before entering credentials or transferring files.

## Verify the result

After completing the steps, check the expected result: One complete remote file remains after recovery.

## Expected result

The controlled workflow completes and one complete remote file remains after recovery.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the partially transferred disposable file, check the active workspace, your role and the client version.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
