---
{
  "articleId": "hc-sftp-fix-restricted-folder",
  "locale": "en",
  "revision": 3,
  "title": "Fix SFTP access to a restricted folder",
  "summary": "Compare the remote path with key and workspace restrictions, start from the allowed root, and test one list operation. Verify that the client can see only the authorized folder tree.",
  "category": "integrations",
  "articleSlug": "sftp-fix-restricted-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-troubleshoot"
  ],
  "keywords": [
    "sftp fix restricted folder",
    "SFTP connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Fix SFTP access to a restricted folder** in Dosya. The main action is to compare the remote path with key and workspace restrictions, start from the allowed root, and test one list operation; the decisive check is whether the client can see only the authorized folder tree.

<figure class="help-screenshot"><a href="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14.webp" alt="Four-step workflow map for fix sftp access to a restricted folder, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for fix sftp access to a restricted folder: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify connection that opens but cannot access the intended path.

## Steps: fix SFTP access to a restricted folder

1. Open an SFTP client connected to Dosya and confirm the active account and workspace.
2. Locate connection that opens but cannot access the intended path and verify its name or identifying details.
3. Compare the remote path with key and workspace restrictions, start from the allowed root, and test one list operation.
4. Confirm that the client can see only the authorized folder tree.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP integration overview for secure file transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Verify the host key and restricted remote path before entering credentials or transferring files. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The client can see only the authorized folder tree.

## Expected result

The controlled workflow completes and the client can see only the authorized folder tree.

## Troubleshooting

**The expected control is missing.** Return to an SFTP client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
