---
{
  "articleId": "hc-sftp-upload-file",
  "locale": "en",
  "revision": 3,
  "title": "Upload a file over SFTP",
  "summary": "Transfer the file and wait for the client queue to finish. Verify that the remote listing shows the expected name and size.",
  "category": "integrations",
  "articleSlug": "sftp-upload-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-restricted-key"
  ],
  "keywords": [
    "sftp upload file",
    "SFTP client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Upload a file over SFTP** in Dosya. The main action is to transfer the file and wait for the client queue to finish; the decisive check is whether the remote listing shows the expected name and size.

<figure class="help-screenshot"><a href="/screenshots/sftp-upload-file-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-upload-file-help-workflow-2026-10-14.webp" alt="Four-step workflow map for upload a file over sftp, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for upload a file over sftp: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/sftp-upload-file-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify small local test file and writable remote folder.

## Steps: upload a file over SFTP

1. Open an SFTP client connected to Dosya and confirm the active account and workspace.
2. Locate small local test file and writable remote folder and verify its name or identifying details.
3. Transfer the file and wait for the client queue to finish.
4. Confirm that the remote listing shows the expected name and size.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP access overview for secure interactive file transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Verify the documented host key before accepting a first connection and use an SFTP-restricted credential. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The remote listing shows the expected name and size.

## Expected result

The controlled workflow completes and the remote listing shows the expected name and size.

## Troubleshooting

**The expected control is missing.** Return to an SFTP client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Use a restricted SFTP key](/integrations/sftp-restricted-key)
