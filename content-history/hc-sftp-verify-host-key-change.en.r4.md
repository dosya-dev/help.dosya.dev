---
{
  "articleId": "hc-sftp-verify-host-key-change",
  "locale": "en",
  "revision": 4,
  "title": "Verify an SFTP host key change",
  "summary": "Stop the connection, obtain the current fingerprint from a trusted Dosya source, compare it exactly, and update the saved key only if verified. Verify that the trusted current fingerprint is stored before file access resumes.",
  "category": "integrations",
  "articleSlug": "sftp-verify-host-key-change",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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

<figure class="help-screenshot"><a href="/screenshots/sftp-verify-host-key-change-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-verify-host-key-change-help-workflow-2026-10-14.webp" alt="Workflow for “Verify an SFTP host key change”: stop the connection, obtain the current fingerprint from a trusted Dosya source, compare it exactly, and update the saved key only if verified; the trusted current fingerprint is stored before file access resumes." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Verify an SFTP host key change”: stop the connection, obtain the current fingerprint from a trusted Dosya source, compare it exactly, and update the saved key only if verified; the trusted current fingerprint is stored before file access resumes. <a href="/screenshots/sftp-verify-host-key-change-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya and locate the host-key warning from a previously used connection.
- Confirm the active account and workspace, then identify host-key warning from a previously used connection.

## Steps: verify an SFTP host key change

1. Confirm the account and workspace in an SFTP client connected to Dosya when reviewing the host-key warning from a previously used connection.
2. Locate host-key warning from a previously used connection and verify its name or identifying details.
3. Stop the connection, obtain the current fingerprint from a trusted Dosya source, compare it exactly, and update the saved key only if verified.
4. Confirm that the trusted current fingerprint is stored before file access resumes.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Reference for “Verify an SFTP host key change”: Dosya SFTP access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify an SFTP host key change”: Dosya SFTP access overview page. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Verify the host key and restricted remote path before entering credentials or transferring files.

## Verify the result

After completing the steps, check the expected result: The trusted current fingerprint is stored before file access resumes.

## Expected result

The controlled workflow completes and the trusted current fingerprint is stored before file access resumes.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the host-key warning from a previously used connection, check the active workspace, your role and the client version.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
