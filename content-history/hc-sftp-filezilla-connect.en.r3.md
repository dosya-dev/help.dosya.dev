---
{
  "articleId": "hc-sftp-filezilla-connect",
  "locale": "en",
  "revision": 3,
  "title": "Connect FileZilla to Dosya with SFTP",
  "summary": "Enter the Dosya SFTP host, port, username, and restricted credential, then verify the host key. Verify that fileZilla opens the permitted remote path.",
  "category": "integrations",
  "articleSlug": "sftp-filezilla-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/sftp-filezilla-connect-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-filezilla-connect-help-workflow-2026-10-14.webp" alt="Four-step workflow map for connect filezilla to dosya with sftp, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for connect filezilla to dosya with sftp: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/sftp-filezilla-connect-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify new FileZilla site entry.

## Steps: connect FileZilla to Dosya with SFTP

1. Open an SFTP client connected to Dosya and confirm the active account and workspace.
2. Locate new FileZilla site entry and verify its name or identifying details.
3. Enter the Dosya SFTP host, port, username, and restricted credential, then verify the host key.
4. Confirm that FileZilla opens the permitted remote path.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP access overview for secure interactive file transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Verify the documented host key before accepting a first connection and use an SFTP-restricted credential. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: FileZilla opens the permitted remote path.

## Expected result

The controlled workflow completes and FileZilla opens the permitted remote path.

## Troubleshooting

**The expected control is missing.** Return to an SFTP client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Use a restricted SFTP key](/integrations/sftp-restricted-key)
