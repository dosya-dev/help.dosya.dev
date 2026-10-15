---
{
  "articleId": "hc-sftp-connect",
  "locale": "en",
  "revision": 4,
  "title": "Connect an SFTP client",
  "summary": "Use the current host, port and supported credential to connect an SFTP client, select the workspace and verify a sample transfer.",
  "category": "integrations",
  "articleSlug": "sftp-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-api-key-protocols",
    "hc-api-key-folder"
  ],
  "keywords": [
    "SFTP connection",
    "SFTP host",
    "SFTP credential",
    "cloud storage"
  ]
}
---
SFTP uses SSH transport and its current Dosya connection values. Copy them from the integration page rather than assuming a host or port.

Verify the host through the supported trust process before entering credentials. A saved client profile should use an SFTP-enabled key with only the required access.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/sftp-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/sftp-connect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-connect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-connect-workflow-map-2026-10-14.webp" alt="Four-step interface map for connect an sftp client, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/sftp-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/sftp-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/sftp-connect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: connect an sftp client

1. Open Integrations → SFTP.
2. Copy the current host, port and username format.
3. Create or select an SFTP-enabled credential.
4. Add the connection in a current SFTP client.
5. Verify the host prompt through the supported trust process.
6. List, upload and download one harmless sample.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

List the anchored folder, upload one harmless sample and download it to a new local path for comparison.

## Expected result

The connect an sftp client workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Limit protocol surfaces](/developers/api-key-protocols)
- [Restrict a key to a folder](/developers/api-key-folder-access)
