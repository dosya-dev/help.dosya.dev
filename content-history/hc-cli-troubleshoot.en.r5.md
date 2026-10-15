---
{
  "articleId": "hc-cli-troubleshoot",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot CLI authentication and transfers",
  "summary": "Diagnose CLI version, account, workspace, credential, permission, path and quota errors with a minimal safe command.",
  "category": "troubleshooting",
  "articleSlug": "cli",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-cli-install",
    "hc-cli-auth",
    "hc-cli-workspace"
  ],
  "keywords": [
    "CLI error",
    "CLI unauthorized",
    "CLI upload failed",
    "cloud storage"
  ]
}
---
CLI errors become easier to isolate when you reduce the task to version, authentication, context and one harmless listing request.

CLI failures are easier to diagnose with one harmless command before a transfer. Version, account, workspace, key scope, destination and quota are independent boundaries.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-workflow-map-2026-10-14.webp" alt="Workflow for “Troubleshoot CLI authentication and transfers”: list and select the workspace again; retry only after correcting the identified boundary." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Troubleshoot CLI authentication and transfers”: list and select the workspace again; retry only after correcting the identified boundary. <a class="workflow-map-full" href="/screenshots/cli-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: troubleshoot cli authentication and transfers

1. Run version and built-in help.
2. Confirm authentication status and account.
3. List and select the workspace again.
4. Run one harmless list command.
5. Compare a failed transfer with role, quota and destination policy.
6. Retry only after correcting the identified boundary.

<figure class="help-screenshot"><a href="/screenshots/api-key-listed-2026-10-10.webp"><img src="/screenshots/api-key-listed-2026-10-10.webp" alt="Reference for “Troubleshoot CLI authentication and transfers”: Dosya API-key list showing named technical credentials that can be identified and revoked independently." width="1160" height="750" loading="lazy" decoding="async" /></a><figcaption>Reference for “Troubleshoot CLI authentication and transfers”: Dosya API-key list showing named technical credentials that can be identified and revoked independently. <a href="/screenshots/api-key-listed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Name each credential for the client and task it serves.

## Verify the result

Run a list command and compare its context with the web app. Retry the failed transfer only after the specific boundary in the error has been corrected.

## Expected result

The troubleshoot cli authentication and transfers workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Install the CLI](/developers/cli-install)
- [Authenticate the CLI](/developers/cli-authenticate)
- [Select a workspace](/developers/cli-workspace)
