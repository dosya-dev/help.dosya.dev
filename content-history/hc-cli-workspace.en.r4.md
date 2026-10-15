---
{
  "articleId": "hc-cli-workspace",
  "locale": "en",
  "revision": 4,
  "title": "Select the correct CLI workspace",
  "summary": "List available workspaces, select the intended destination, and confirm context before a CLI upload, copy or destructive command.",
  "category": "developers",
  "articleSlug": "cli-workspace",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-workspace-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-workspace-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-workspace-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-workspace-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-workspace-workflow-map-2026-10-14.webp" alt="Four-step interface map for select the correct cli workspace, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/cli-workspace-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-workspace-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-workspace-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: select the correct cli workspace

1. Authenticate the CLI.
2. List workspaces with the documented command.
3. Select the intended workspace identifier.
4. Run a harmless list operation.
5. Compare a known folder with the web app.
6. Check context again before a write or delete command.

<figure class="help-screenshot"><a href="/screenshots/api-key-listed-2026-10-10.webp"><img src="/screenshots/api-key-listed-2026-10-10.webp" alt="Dosya API-key list showing named technical credentials that can be identified and revoked independently." width="1160" height="750" loading="lazy" decoding="async" /></a><figcaption>Name each credential for the client and task it serves. <a href="/screenshots/api-key-listed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Run a harmless list command and compare a known folder name with the web app. Continue only when both views identify the same workspace.

## Expected result

The select the correct cli workspace workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Switch web workspaces](/account/switch-workspaces)
- [Authenticate the CLI](/developers/cli-authenticate)
