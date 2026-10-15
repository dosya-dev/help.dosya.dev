---
{
  "articleId": "hc-sftp-resolve-authentication-failure",
  "locale": "en",
  "revision": 3,
  "title": "Resolve an SFTP authentication failure",
  "summary": "Confirm username or key identity, authentication method, key status, and client selection without printing the secret. Verify that the client authenticates or returns a narrower connection error.",
  "category": "integrations",
  "articleSlug": "sftp-resolve-authentication-failure",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/sftp-resolve-authentication-failure-help-workflow-2026-10-14.webp"><img src="/screenshots/sftp-resolve-authentication-failure-help-workflow-2026-10-14.webp" alt="Four-step workflow map for resolve an sftp authentication failure, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for resolve an sftp authentication failure: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/sftp-resolve-authentication-failure-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify SFTP client showing an authentication error.

## Steps: resolve an SFTP authentication failure

1. Open an SFTP client connected to Dosya and confirm the active account and workspace.
2. Locate SFTP client showing an authentication error and verify its name or identifying details.
3. Confirm username or key identity, authentication method, key status, and client selection without printing the secret.
4. Confirm that the client authenticates or returns a narrower connection error.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP integration overview for secure file transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Verify the host key and restricted remote path before entering credentials or transferring files. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The client authenticates or returns a narrower connection error.

## Expected result

The controlled workflow completes and the client authenticates or returns a narrower connection error.

## Troubleshooting

**The expected control is missing.** Return to an SFTP client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
