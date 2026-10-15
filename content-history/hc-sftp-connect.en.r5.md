---
{
  "articleId": "hc-sftp-connect",
  "locale": "en",
  "revision": 5,
  "title": "Connect an SFTP client",
  "summary": "Use the current host, port and supported credential to connect an SFTP client, select the workspace and verify a sample transfer.",
  "category": "integrations",
  "articleSlug": "sftp-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/sftp-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/sftp-connect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-connect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-connect-workflow-map-2026-10-14.webp" alt="Workflow for “Connect an SFTP client”: create or select an SFTP-enabled credential; list, upload and download one harmless sample." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Connect an SFTP client”: create or select an SFTP-enabled credential; list, upload and download one harmless sample. <a class="workflow-map-full" href="/screenshots/sftp-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/sftp-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/sftp-connect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: connect an sftp client

1. Open Integrations → SFTP.
2. Copy the current host, port and username format.
3. Create or select an SFTP-enabled credential.
4. Add the connection in a current SFTP client.
5. Verify the host prompt through the supported trust process.
6. List, upload and download one harmless sample.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Reference for “Connect an SFTP client”: New API key dialog with Protocols, Workspace and expiration controls." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Reference for “Connect an SFTP client”: New API key dialog with Protocols, Workspace and expiration controls. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** For “Connect an SFTP client”, use a separate least-privilege credential for each client.

## Verify the result

List the anchored folder, upload one harmless sample and download it to a new local path for comparison.

## Expected result

The connect an sftp client workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Limit protocol surfaces](/developers/api-key-protocols)
- [Restrict a key to a folder](/developers/api-key-folder-access)
