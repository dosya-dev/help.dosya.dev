---
{
  "articleId": "hc-sftp-resume-transfer",
  "locale": "en",
  "revision": 3,
  "title": "Resume an interrupted SFTP transfer",
  "summary": "Reconnect and choose the client resume option instead of overwrite when appropriate. Verify that the transfer continues and finishes with the correct final size.",
  "category": "integrations",
  "articleSlug": "sftp-resume-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/sftp-resume-transfer-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-resume-transfer-help-workflow-2026-10-14.webp" alt="Four-step workflow map for resume an interrupted sftp transfer, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for resume an interrupted sftp transfer: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/sftp-resume-transfer-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify incomplete large test transfer.

## Steps: resume an interrupted SFTP transfer

1. Open an SFTP client connected to Dosya and confirm the active account and workspace.
2. Locate incomplete large test transfer and verify its name or identifying details.
3. Reconnect and choose the client resume option instead of overwrite when appropriate.
4. Confirm that the transfer continues and finishes with the correct final size.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP access overview for secure interactive file transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Verify the documented host key before accepting a first connection and use an SFTP-restricted credential. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The transfer continues and finishes with the correct final size.

## Expected result

The controlled workflow completes and the transfer continues and finishes with the correct final size.

## Troubleshooting

**The expected control is missing.** Return to an SFTP client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Use a restricted SFTP key](/integrations/sftp-restricted-key)
