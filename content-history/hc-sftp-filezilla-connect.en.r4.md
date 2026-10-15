---
{
  "articleId": "hc-sftp-filezilla-connect",
  "locale": "en",
  "revision": 4,
  "title": "Connect FileZilla to Dosya with SFTP",
  "summary": "Enter the Dosya SFTP host, port, username, and restricted credential, then verify the host key. Verify that fileZilla opens the permitted remote path.",
  "category": "integrations",
  "articleSlug": "sftp-filezilla-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-restricted-key"
  ],
  "keywords": [
    "sftp filezilla connect",
    "SFTP client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Connect FileZilla to Dosya with SFTP** in Dosya. The main action is to enter the Dosya SFTP host, port, username, and restricted credential, then verify the host key; the decisive check is whether fileZilla opens the permitted remote path.

<figure class="help-screenshot"><a href="/screenshots/sftp-filezilla-connect-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-filezilla-connect-help-workflow-2026-10-14.webp" alt="Workflow for “Connect FileZilla to Dosya with SFTP”: enter the Dosya SFTP host, port, username, and restricted credential, then verify the host key; fileZilla opens the permitted remote path." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Connect FileZilla to Dosya with SFTP”: enter the Dosya SFTP host, port, username, and restricted credential, then verify the host key; fileZilla opens the permitted remote path. <a href="/screenshots/sftp-filezilla-connect-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya and locate the new FileZilla site entry.
- Confirm the active account and workspace, then identify new FileZilla site entry.

## Steps: connect FileZilla to Dosya with SFTP

1. Confirm the account and workspace in an SFTP client connected to Dosya when reviewing the new FileZilla site entry.
2. Locate new FileZilla site entry and verify its name or identifying details.
3. Enter the Dosya SFTP host, port, username, and restricted credential, then verify the host key.
4. Confirm that FileZilla opens the permitted remote path.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Reference for “Connect FileZilla to Dosya with SFTP”: Dosya SFTP access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Connect FileZilla to Dosya with SFTP”: Dosya SFTP access overview page. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Verify the documented host key before accepting a first connection and use an SFTP-restricted credential.

## Verify the result

After completing the steps, check the expected result: FileZilla opens the permitted remote path.

## Expected result

The controlled workflow completes and FileZilla opens the permitted remote path.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the new FileZilla site entry, check the active workspace, your role and the client version.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Use a restricted SFTP key](/integrations/sftp-restricted-key)
