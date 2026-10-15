---
{
  "articleId": "hc-sftp-resolve-authentication-failure",
  "locale": "en",
  "revision": 4,
  "title": "Resolve an SFTP authentication failure",
  "summary": "Confirm username or key identity, authentication method, key status, and client selection without printing the secret. Verify that the client authenticates or returns a narrower connection error.",
  "category": "integrations",
  "articleSlug": "sftp-resolve-authentication-failure",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-troubleshoot"
  ],
  "keywords": [
    "sftp resolve authentication failure",
    "SFTP connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Resolve an SFTP authentication failure** in Dosya. The main action is to confirm username or key identity, authentication method, key status, and client selection without printing the secret; the decisive check is whether the client authenticates or returns a narrower connection error.

<figure class="help-screenshot"><a href="/screenshots/sftp-resolve-authentication-failure-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-resolve-authentication-failure-help-workflow-2026-10-14.webp" alt="Workflow for “Resolve an SFTP authentication failure”: confirm username or key identity, authentication method, key status, and client selection without printing the secret; the client authenticates or returns a narrower connection error." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Resolve an SFTP authentication failure”: confirm username or key identity, authentication method, key status, and client selection without printing the secret; the client authenticates or returns a narrower connection error. <a href="/screenshots/sftp-resolve-authentication-failure-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya and locate the SFTP client showing an authentication error.
- Confirm the active account and workspace, then identify SFTP client showing an authentication error.

## Steps: resolve an SFTP authentication failure

1. Confirm the account and workspace in an SFTP client connected to Dosya when reviewing the SFTP client showing an authentication error.
2. Locate SFTP client showing an authentication error and verify its name or identifying details.
3. Confirm username or key identity, authentication method, key status, and client selection without printing the secret.
4. Confirm that the client authenticates or returns a narrower connection error.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Reference for “Resolve an SFTP authentication failure”: Dosya SFTP access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Resolve an SFTP authentication failure”: Dosya SFTP access overview page. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Verify the host key and restricted remote path before entering credentials or transferring files.

## Verify the result

After completing the steps, check the expected result: The client authenticates or returns a narrower connection error.

## Expected result

The controlled workflow completes and the client authenticates or returns a narrower connection error.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the SFTP client showing an authentication error, check the active workspace, your role and the client version.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
