---
{
  "articleId": "hc-sftp-retry-interrupted-transfer",
  "locale": "en",
  "revision": 3,
  "title": "Retry an interrupted SFTP transfer",
  "summary": "Inspect the remote and local sizes, use the client supported resume or restart behavior, and verify the completed file. Verify that one complete remote file remains after recovery.",
  "category": "integrations",
  "articleSlug": "sftp-retry-interrupted-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/sftp-retry-interrupted-transfer-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-retry-interrupted-transfer-help-workflow-2026-10-14.webp" alt="Four-step workflow map for retry an interrupted sftp transfer, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for retry an interrupted sftp transfer: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/sftp-retry-interrupted-transfer-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify partially transferred disposable file.

## Steps: retry an interrupted SFTP transfer

1. Open an SFTP client connected to Dosya and confirm the active account and workspace.
2. Locate partially transferred disposable file and verify its name or identifying details.
3. Inspect the remote and local sizes, use the client supported resume or restart behavior, and verify the completed file.
4. Confirm that one complete remote file remains after recovery.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP integration overview for secure file transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Verify the host key and restricted remote path before entering credentials or transferring files. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: One complete remote file remains after recovery.

## Expected result

The controlled workflow completes and one complete remote file remains after recovery.

## Troubleshooting

**The expected control is missing.** Return to an SFTP client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
