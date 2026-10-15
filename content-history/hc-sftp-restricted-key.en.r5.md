---
{
  "articleId": "hc-sftp-restricted-key",
  "locale": "en",
  "revision": 5,
  "title": "Connect with SFTP using a restricted key",
  "summary": "Enter the Dosya host, username and credential, then connect, then verify that the client opens only the permitted workspace path.",
  "category": "integrations",
  "articleSlug": "sftp-restricted-key",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-webdav-connect",
    "hc-api-key-protocols"
  ],
  "keywords": [
    "sftp restricted key",
    "protocol client workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to connect with SFTP using a restricted key in the intended account or workspace.

Check credential scope and endpoint access for a protocol-restricted test key. Use a limited test credential for a protocol-restricted test key; redact secrets from commands, logs and screenshots.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-restricted-key-workflow-map-2026-10-14.webp" data-light-href="/screenshots/sftp-restricted-key-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/sftp-restricted-key-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-restricted-key-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-restricted-key-workflow-map-2026-10-14.webp" alt="Workflow for “Connect with SFTP using a restricted key”: enter the Dosya host, username and credential, then connect; verify that the client opens only the permitted workspace path." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Connect with SFTP using a restricted key”: enter the Dosya host, username and credential, then connect; verify that the client opens only the permitted workspace path. <a class="workflow-map-full" href="/screenshots/sftp-restricted-key-workflow-map-2026-10-14.webp" data-light-href="/screenshots/sftp-restricted-key-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/sftp-restricted-key-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an SFTP client in the current released Dosya client.
- Confirm the active account and workspace, then identify a protocol-restricted test key.

## Steps: connect with SFTP using a restricted key

1. Open an SFTP client and confirm the active workspace.
2. Select a protocol-restricted test key and check its name or identifying details.
3. Enter the Dosya host, username and credential, then connect.
4. Verify that the client opens only the permitted workspace path.

<figure class="help-screenshot"><a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp"><img src="/screenshots/webdav-cyberduck-connection-2026-10-11.webp" alt="Reference for “Connect with SFTP using a restricted key”: Cyberduck connection configured for the Dosya WebDAV endpoint." width="1040" height="750" loading="lazy" decoding="async" /></a><figcaption>Reference for “Connect with SFTP using a restricted key”: Cyberduck connection configured for the Dosya WebDAV endpoint. <a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a restricted test credential and keep its secret out of screenshots and logs.

## Verify the result

Verify that the client opens only the permitted workspace path.

## Expected result

The workflow completes for the controlled test and the client opens only the permitted workspace path.

## Troubleshooting

**The expected control is missing.** Return to an SFTP client, confirm the active workspace and check that your role permits the action.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Restrict protocol access](/developers/api-key-protocols)
