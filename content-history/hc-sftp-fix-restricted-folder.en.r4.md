---
{
  "articleId": "hc-sftp-fix-restricted-folder",
  "locale": "en",
  "revision": 4,
  "title": "Fix SFTP access to a restricted folder",
  "summary": "Compare the remote path with key and workspace restrictions, start from the allowed root, and test one list operation. Verify that the client can see only the authorized folder tree.",
  "category": "integrations",
  "articleSlug": "sftp-fix-restricted-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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

<figure class="help-screenshot"><a href="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14.webp" alt="Workflow for “Fix SFTP access to a restricted folder”: compare the remote path with key and workspace restrictions, start from the allowed root, and test one list operation; the client can see only the authorized folder tree." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Fix SFTP access to a restricted folder”: compare the remote path with key and workspace restrictions, start from the allowed root, and test one list operation; the client can see only the authorized folder tree. <a href="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya and locate the connection that opens but cannot access the intended path.
- Confirm the active account and workspace, then identify connection that opens but cannot access the intended path.

## Steps: fix SFTP access to a restricted folder

1. Confirm the account and workspace in an SFTP client connected to Dosya when reviewing the connection that opens but cannot access the intended path.
2. Locate connection that opens but cannot access the intended path and verify its name or identifying details.
3. Compare the remote path with key and workspace restrictions, start from the allowed root, and test one list operation.
4. Confirm that the client can see only the authorized folder tree.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Reference for “Fix SFTP access to a restricted folder”: Dosya SFTP access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Fix SFTP access to a restricted folder”: Dosya SFTP access overview page. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Verify the host key and restricted remote path before entering credentials or transferring files.

## Verify the result

After completing the steps, check the expected result: The client can see only the authorized folder tree.

## Expected result

The controlled workflow completes and the client can see only the authorized folder tree.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the connection that opens but cannot access the intended path, check the active workspace, your role and the client version.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
