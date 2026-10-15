---
{
  "articleId": "hc-rotate-protocol-key",
  "locale": "en",
  "revision": 5,
  "title": "Rotate a protocol credential safely",
  "summary": "Create a replacement key, test it, then revoke the old key, then verify that the client works with the new credential and the old one fails.",
  "category": "integrations",
  "articleSlug": "rotate-protocol-key",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-webdav-connect",
    "hc-api-key-protocols"
  ],
  "keywords": [
    "rotate protocol key",
    "protocol client workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to rotate a protocol credential safely in the intended account or workspace.

Check credential scope and endpoint access for one non-production client connection. Use a limited test credential for one non-production client connection; redact secrets from commands, logs and screenshots.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" data-light-href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/rotate-protocol-key-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" alt="Workflow for “Rotate a protocol credential safely”: create a replacement key, test it, then revoke the old key; verify that the client works with the new credential and the old one fails." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Rotate a protocol credential safely”: create a replacement key, test it, then revoke the old key; verify that the client works with the new credential and the old one fails. <a class="workflow-map-full" href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" data-light-href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open API key settings and a protocol client in the current released Dosya client.
- Confirm the active account and workspace, then identify one non-production client connection.

## Steps: rotate a protocol credential safely

1. Open API key settings and a protocol client and confirm the active workspace.
2. Select one non-production client connection and check its name or identifying details.
3. Create a replacement key, test it, then revoke the old key.
4. Verify that the client works with the new credential and the old one fails.

<figure class="help-screenshot"><a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp"><img src="/screenshots/webdav-cyberduck-connection-2026-10-11.webp" alt="Reference for “Rotate a protocol credential safely”: Cyberduck connection configured for the Dosya WebDAV endpoint." width="1040" height="750" loading="lazy" decoding="async" /></a><figcaption>Reference for “Rotate a protocol credential safely”: Cyberduck connection configured for the Dosya WebDAV endpoint. <a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a restricted test credential and keep its secret out of screenshots and logs.

## Verify the result

Verify that the client works with the new credential and the old one fails.

## Expected result

The workflow completes for the controlled test and the client works with the new credential and the old one fails.

## Troubleshooting

**The expected control is missing.** Return to API key settings and a protocol client, confirm the active workspace and check that your role permits the action.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Restrict protocol access](/developers/api-key-protocols)
