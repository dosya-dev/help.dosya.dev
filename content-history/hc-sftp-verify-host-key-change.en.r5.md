---
{
  "articleId": "hc-sftp-verify-host-key-change",
  "locale": "en",
  "revision": 5,
  "title": "Verify an SFTP host key change",
  "summary": "Verify a changed SFTP host key through a trusted Dosya channel, replace the saved key only after an exact match, and reconnect with confidence.",
  "category": "integrations",
  "articleSlug": "sftp-verify-host-key-change",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/lib/integrations.ts, apps/ftp-server/src/sftp.ts, apps/ftp-server/src/config.ts, apps/status/src/probes/sftp.ts, and apps/help/src/content/articles/sftp-connect.md. The production fingerprint and a real rotation were not verified.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-troubleshoot"
  ],
  "keywords": [
    "sftp verify host key change",
    "SFTP connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
**REMOTE HOST IDENTIFICATION HAS CHANGED!** means the key presented by the server differs from the one your client saved for that host and port. It may follow a legitimate rotation, a stale alias, or a connection to the wrong server; it can also indicate interception. Do not delete the saved record until a trusted comparison explains the change.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-verify-host-key-change-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-verify-host-key-change-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-verify-host-key-change-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-verify-host-key-change-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-verify-host-key-change-help-workflow-2026-10-14.webp" alt="Four-step workflow for cancelling the changed-key session, requesting the production fingerprint separately, comparing every character, and replacing only the verified record." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for cancelling the changed-key session, requesting the production fingerprint separately, comparing every character, and replacing only the verified record. <a class="workflow-map-full" href="/screenshots/sftp-verify-host-key-change-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-verify-host-key-change-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-verify-host-key-change-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Dosya's documented target is `sftp.dosya.dev` on port `2222`. Known-host records for nonstandard ports are often keyed by both hostname and port, so confirm which entry the client is challenging. The repository stores server startup configuration but no certified production fingerprint.

## Steps

1. Cancel the connection before sending the account email's API-key password. Save the warning text, presented algorithm and fingerprint, hostname, port, client version, and time.
2. Inspect the saved site for aliases, raw IP addresses, proxies, or port 22. Correcting a wrong endpoint is safer than modifying trust for the wrong host.
3. Request the current production fingerprint from Dosya support or your administrator through a channel separate from this SFTP connection. Ask whether a planned rotation occurred and which key type should be presented.
4. Compare the trusted fingerprint character for character with the new value. A different algorithm or one changed character is a failed check; keep the old trust record and the connection closed.
5. Only after an exact match, remove or replace the single saved entry for `sftp.dosya.dev:2222` using the client's host-key manager. Do not clear the entire known-host database or enable automatic trust.
6. Reconnect, verify the prompt now shows the confirmed key, authenticate with the dedicated API key, and perform a read-only workspace listing. Report any second change immediately.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP overview showing the documented port 2222 endpoint checked before changing a saved host-key record." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya SFTP overview showing the documented port 2222 endpoint checked before changing a saved host-key record. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

Changing the SSH host-key record has no effect on API-key validity, scope, workspace pin, or role permissions. Conversely, revoking an API key does not update the SSH trust record. These are independent identity checks.

Do not send your `dos_…` secret, complete client configuration, or private known-host database to support. The old and new public fingerprints, algorithm, endpoint, timestamp, and client name are enough for the verification decision.

## Expected result

The saved trust entry changes only after the new fingerprint matches a separately confirmed Dosya value. The following connection reaches `sftp.dosya.dev:2222`, presents that verified key, and completes a harmless workspace listing.

## Related guides

- [Connect an SFTP client](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
