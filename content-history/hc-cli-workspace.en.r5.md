---
{
  "articleId": "hc-cli-workspace",
  "locale": "en",
  "revision": 5,
  "title": "Select the correct CLI workspace",
  "summary": "List available workspaces, select the intended destination, and confirm context before a CLI upload, copy or destructive command.",
  "category": "developers",
  "articleSlug": "cli-workspace",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-switch-workspaces",
    "hc-cli-auth"
  ],
  "keywords": [
    "CLI workspace",
    "select workspace",
    "CLI context",
    "cloud storage"
  ]
}
---
CLI commands act in a workspace context. Confirm it explicitly when accounts contain similarly named workspaces.

CLI commands run against the selected workspace context, which may differ from the workspace open in a browser. Check context again before uploads, moves or deletes.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-workspace-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-workspace-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-workspace-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-workspace-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-workspace-workflow-map-2026-10-14.webp" alt="Workflow for “Select the correct CLI workspace”: select the intended workspace identifier; check context again before a write or delete command." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Select the correct CLI workspace”: select the intended workspace identifier; check context again before a write or delete command. <a class="workflow-map-full" href="/screenshots/cli-workspace-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-workspace-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-workspace-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: select the correct cli workspace

1. Authenticate the CLI.
2. List workspaces with the documented command.
3. Select the intended workspace identifier.
4. Run a harmless list operation.
5. Compare a known folder with the web app.
6. Check context again before a write or delete command.

<figure class="help-screenshot"><a href="/screenshots/api-key-listed-2026-10-10.webp"><img src="/screenshots/api-key-listed-2026-10-10.webp" alt="Reference for “Select the correct CLI workspace”: Dosya API-key list showing named technical credentials that can be identified and revoked independently." width="1160" height="750" loading="lazy" decoding="async" /></a><figcaption>Reference for “Select the correct CLI workspace”: Dosya API-key list showing named technical credentials that can be identified and revoked independently. <a href="/screenshots/api-key-listed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Name each credential for the client and task it serves.

## Verify the result

Run a harmless list command and compare a known folder name with the web app. Continue only when both views identify the same workspace.

## Expected result

The select the correct cli workspace workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Switch web workspaces](/account/switch-workspaces)
- [Authenticate the CLI](/developers/cli-authenticate)
