---
{
  "articleId": "hc-sftp-disconnect-safely",
  "locale": "en",
  "revision": 3,
  "title": "Disconnect an SFTP client safely",
  "summary": "Wait for the queue to finish, close the session, remove saved credentials when appropriate, and verify no process remains connected. Verify that the session ends without truncating a transfer or leaving an unwanted stored secret.",
  "category": "integrations",
  "articleSlug": "sftp-disconnect-safely",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-troubleshoot"
  ],
  "keywords": [
    "sftp disconnect safely",
    "SFTP connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Disconnect an SFTP client safely** in Dosya. The main action is to wait for the queue to finish, close the session, remove saved credentials when appropriate, and verify no process remains connected; the decisive check is whether the session ends without truncating a transfer or leaving an unwanted stored secret.

<figure class="help-screenshot"><a href="/screenshots/sftp-disconnect-safely-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-disconnect-safely-help-workflow-2026-10-14.webp" alt="Four-step workflow map for disconnect an sftp client safely, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for disconnect an sftp client safely: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/sftp-disconnect-safely-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify client with no required active transfers.

## Steps: disconnect an SFTP client safely

1. Open an SFTP client connected to Dosya and confirm the active account and workspace.
2. Locate client with no required active transfers and verify its name or identifying details.
3. Wait for the queue to finish, close the session, remove saved credentials when appropriate, and verify no process remains connected.
4. Confirm that the session ends without truncating a transfer or leaving an unwanted stored secret.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP integration overview for secure file transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Verify the host key and restricted remote path before entering credentials or transferring files. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The session ends without truncating a transfer or leaving an unwanted stored secret.

## Expected result

The controlled workflow completes and the session ends without truncating a transfer or leaving an unwanted stored secret.

## Troubleshooting

**The expected control is missing.** Return to an SFTP client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
