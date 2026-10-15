---
{
  "articleId": "hc-sftp-resume-transfer",
  "locale": "en",
  "revision": 4,
  "title": "Resume an interrupted SFTP transfer",
  "summary": "Reconnect and choose the client resume option instead of overwrite when appropriate. Verify that the transfer continues and finishes with the correct final size.",
  "category": "integrations",
  "articleSlug": "sftp-resume-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-restricted-key"
  ],
  "keywords": [
    "sftp resume transfer",
    "SFTP client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Resume an interrupted SFTP transfer** in Dosya. The main action is to reconnect and choose the client resume option instead of overwrite when appropriate; the decisive check is whether the transfer continues and finishes with the correct final size.

<figure class="help-screenshot"><a href="/screenshots/sftp-resume-transfer-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-resume-transfer-help-workflow-2026-10-14.webp" alt="Workflow for “Resume an interrupted SFTP transfer”: reconnect and choose the client resume option instead of overwrite when appropriate; the transfer continues and finishes with the correct final size." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Resume an interrupted SFTP transfer”: reconnect and choose the client resume option instead of overwrite when appropriate; the transfer continues and finishes with the correct final size. <a href="/screenshots/sftp-resume-transfer-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya and locate the incomplete large test transfer.
- Confirm the active account and workspace, then identify incomplete large test transfer.

## Steps: resume an interrupted SFTP transfer

1. Confirm the account and workspace in an SFTP client connected to Dosya when reviewing the incomplete large test transfer.
2. Locate incomplete large test transfer and verify its name or identifying details.
3. Reconnect and choose the client resume option instead of overwrite when appropriate.
4. Confirm that the transfer continues and finishes with the correct final size.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Reference for “Resume an interrupted SFTP transfer”: Dosya SFTP access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Resume an interrupted SFTP transfer”: Dosya SFTP access overview page. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Verify the documented host key before accepting a first connection and use an SFTP-restricted credential.

## Verify the result

After completing the steps, check the expected result: The transfer continues and finishes with the correct final size.

## Expected result

The controlled workflow completes and the transfer continues and finishes with the correct final size.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the incomplete large test transfer, check the active workspace, your role and the client version.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Use a restricted SFTP key](/integrations/sftp-restricted-key)
