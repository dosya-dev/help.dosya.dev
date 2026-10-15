---
{
  "articleId": "hc-sftp-host-key-warning",
  "locale": "en",
  "revision": 4,
  "title": "Troubleshoot an SFTP host-key warning",
  "summary": "Stop the connection and compare the fingerprint through the official Dosya documentation or support channel. Verify that the connection proceeds only after the expected host identity is verified.",
  "category": "integrations",
  "articleSlug": "sftp-host-key-warning",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-restricted-key"
  ],
  "keywords": [
    "sftp host key warning",
    "SFTP client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Troubleshoot an SFTP host-key warning** in Dosya. The main action is to stop the connection and compare the fingerprint through the official Dosya documentation or support channel; the decisive check is whether the connection proceeds only after the expected host identity is verified.

<figure class="help-screenshot"><a href="/screenshots/sftp-host-key-warning-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-host-key-warning-help-workflow-2026-10-14.webp" alt="Workflow for “Troubleshoot an SFTP host-key warning”: stop the connection and compare the fingerprint through the official Dosya documentation or support channel; the connection proceeds only after the expected host identity is verified." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Troubleshoot an SFTP host-key warning”: stop the connection and compare the fingerprint through the official Dosya documentation or support channel; the connection proceeds only after the expected host identity is verified. <a href="/screenshots/sftp-host-key-warning-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya and locate the unexpected or changed server fingerprint prompt.
- Confirm the active account and workspace, then identify unexpected or changed server fingerprint prompt.

## Steps: troubleshoot an SFTP host-key warning

1. Confirm the account and workspace in an SFTP client connected to Dosya when reviewing the unexpected or changed server fingerprint prompt.
2. Locate unexpected or changed server fingerprint prompt and verify its name or identifying details.
3. Stop the connection and compare the fingerprint through the official Dosya documentation or support channel.
4. Confirm that the connection proceeds only after the expected host identity is verified.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Reference for “Troubleshoot an SFTP host-key warning”: Dosya SFTP access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Troubleshoot an SFTP host-key warning”: Dosya SFTP access overview page. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Verify the documented host key before accepting a first connection and use an SFTP-restricted credential.

## Verify the result

After completing the steps, check the expected result: The connection proceeds only after the expected host identity is verified.

## Expected result

The controlled workflow completes and the connection proceeds only after the expected host identity is verified.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the unexpected or changed server fingerprint prompt, check the active workspace, your role and the client version.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Use a restricted SFTP key](/integrations/sftp-restricted-key)
