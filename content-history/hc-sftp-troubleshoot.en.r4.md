---
{
  "articleId": "hc-sftp-troubleshoot",
  "locale": "en",
  "revision": 4,
  "title": "Troubleshoot an SFTP connection",
  "summary": "Diagnose host, port, username, credential, host-key, permission and transfer failures without exposing the secret.",
  "category": "troubleshooting",
  "articleSlug": "sftp",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-sftp-connect",
    "hc-api-key-revoke"
  ],
  "keywords": [
    "SFTP unauthorized",
    "SFTP host key",
    "SFTP transfer failed",
    "cloud storage"
  ]
}
---
Begin with the connection values shown by the current integration and one directory listing before testing large transfers.

SFTP failures can originate before authentication, during host verification or after login at the permission and quota layer. Do not paste passwords or private keys into diagnostics.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-workflow-map-2026-10-14.webp" data-light-href="/screenshots/sftp-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/sftp-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-workflow-map-2026-10-14.webp" alt="Four-step interface map for troubleshoot an sftp connection, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/sftp-workflow-map-2026-10-14.webp" data-light-href="/screenshots/sftp-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/sftp-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: troubleshoot an sftp connection

1. Read the client log without copying the secret.
2. Confirm host, port and username format.
3. Check the credential is enabled for SFTP.
4. Review a changed host-key warning carefully.
5. Test a harmless list in the anchored folder.
6. Compare transfer failure with permission, quota and file policy.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Start with a folder listing, then transfer one harmless sample. Record the exact phase and redacted error when the operation fails.

## Expected result

The troubleshoot an sftp connection workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Connect SFTP](/integrations/sftp-connect)
- [Revoke a key](/developers/revoke-api-key)
