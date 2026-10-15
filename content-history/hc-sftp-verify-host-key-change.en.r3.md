---
{
  "articleId": "hc-sftp-verify-host-key-change",
  "locale": "en",
  "revision": 3,
  "title": "Verify an SFTP host key change",
  "summary": "Stop the connection, obtain the current fingerprint from a trusted Dosya source, compare it exactly, and update the saved key only if verified. Verify that the trusted current fingerprint is stored before file access resumes.",
  "category": "integrations",
  "articleSlug": "sftp-verify-host-key-change",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-troubleshoot"
  ],
  "keywords": [
    "sftp verify host key change",
    "SFTP connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Verify an SFTP host key change** in Dosya. The main action is to stop the connection, obtain the current fingerprint from a trusted Dosya source, compare it exactly, and update the saved key only if verified; the decisive check is whether the trusted current fingerprint is stored before file access resumes.

<figure class="help-screenshot"><a href="/screenshots/sftp-verify-host-key-change-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-verify-host-key-change-help-workflow-2026-10-14.webp" alt="Four-step workflow map for verify an sftp host key change, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for verify an sftp host key change: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/sftp-verify-host-key-change-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify host-key warning from a previously used connection.

## Steps: verify an SFTP host key change

1. Open an SFTP client connected to Dosya and confirm the active account and workspace.
2. Locate host-key warning from a previously used connection and verify its name or identifying details.
3. Stop the connection, obtain the current fingerprint from a trusted Dosya source, compare it exactly, and update the saved key only if verified.
4. Confirm that the trusted current fingerprint is stored before file access resumes.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP integration overview for secure file transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Verify the host key and restricted remote path before entering credentials or transferring files. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The trusted current fingerprint is stored before file access resumes.

## Expected result

The controlled workflow completes and the trusted current fingerprint is stored before file access resumes.

## Troubleshooting

**The expected control is missing.** Return to an SFTP client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
