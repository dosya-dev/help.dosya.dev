---
{
  "articleId": "hc-webdav-cyberduck",
  "locale": "en",
  "revision": 5,
  "title": "Connect Cyberduck with WebDAV",
  "summary": "Create a WebDAV bookmark with the Dosya endpoint and authenticate, then verify that Cyberduck lists the permitted folder.",
  "category": "integrations",
  "articleSlug": "webdav-cyberduck",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-webdav-connect",
    "hc-api-key-protocols"
  ],
  "keywords": [
    "webdav cyberduck",
    "protocol client workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to connect Cyberduck with WebDAV in the intended account or workspace.

Cyberduck needs the current Dosya WebDAV endpoint and a WebDAV-enabled restricted key. Save the bookmark without exposing the secret.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webdav-cyberduck-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webdav-cyberduck-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webdav-cyberduck-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webdav-cyberduck-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webdav-cyberduck-workflow-map-2026-10-14.webp" alt="Workflow for “Connect Cyberduck with WebDAV”: create a WebDAV bookmark with the Dosya endpoint and authenticate; verify that Cyberduck lists the permitted folder." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Connect Cyberduck with WebDAV”: create a WebDAV bookmark with the Dosya endpoint and authenticate; verify that Cyberduck lists the permitted folder. <a class="workflow-map-full" href="/screenshots/webdav-cyberduck-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webdav-cyberduck-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webdav-cyberduck-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Cyberduck and Dosya WebDAV in the current released Dosya client.
- Confirm the active account and workspace, then identify a restricted test API key.

## Steps: connect Cyberduck with WebDAV

1. Open Cyberduck and Dosya WebDAV and confirm the active workspace.
2. Select a restricted test API key and check its name or identifying details.
3. Create a WebDAV bookmark with the Dosya endpoint and authenticate.
4. Verify that Cyberduck lists the permitted folder.

<figure class="help-screenshot"><a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp"><img src="/screenshots/webdav-cyberduck-connection-2026-10-11.webp" alt="Reference for “Connect Cyberduck with WebDAV”: Cyberduck connection configured for the Dosya WebDAV endpoint." width="1040" height="750" loading="lazy" decoding="async" /></a><figcaption>Reference for “Connect Cyberduck with WebDAV”: Cyberduck connection configured for the Dosya WebDAV endpoint. <a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a restricted test credential and keep its secret out of screenshots and logs.

## Verify the result

List the anchored folder, transfer one harmless file in each required direction and confirm paths and sizes before broader use.

## Expected result

The workflow completes for the controlled test and Cyberduck lists the permitted folder.

## Troubleshooting

**The expected control is missing.** Return to Cyberduck and Dosya WebDAV, confirm the active workspace and check that your role permits the action.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Restrict protocol access](/developers/api-key-protocols)
