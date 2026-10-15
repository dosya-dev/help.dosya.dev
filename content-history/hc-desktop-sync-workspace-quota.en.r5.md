---
{
  "articleId": "hc-desktop-sync-workspace-quota",
  "locale": "en",
  "revision": 5,
  "title": "Recover desktop sync when workspace storage is full",
  "summary": "Identify the exact account, workspace, or member storage limit, free or raise capacity, then verify that the blocked desktop upload succeeds.",
  "category": "desktop",
  "articleSlug": "desktop-sync-workspace-quota",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally source-reviewed on 2026-10-15 against apps/desktop/src/main/sync/remote-client.ts, apps/api/src/lib/quota.ts, apps/api/src/lib/upload/measured-quota.ts, apps/desktop/src/renderer/pages/DashboardPage.tsx, apps/desktop/src/renderer/pages/WorkspaceDashboardPage.tsx, apps/desktop/src/renderer/pages/SettingsPage.tsx, and apps/desktop/src/renderer/pages/FileBrowserPage.tsx; production storage limits were not altered.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-sync-conflicts"
  ],
  "keywords": [
    "desktop sync workspace quota",
    "Desktop sync failure details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
A desktop upload can be blocked by the account owner’s plan, a workspace storage cap, or a per-member limit. The exact server message identifies which capacity must change.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-sync-workspace-quota-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-workspace-quota-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-workspace-quota-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-sync-workspace-quota-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-sync-workspace-quota-help-workflow-2026-10-14.webp" alt="Four-step map for a quota-blocked upload: copy the exact limit, identify the full storage scope, clear confirmed Trash permanently if needed, then verify the cloud file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Resolve the named account, workspace, or member limit before pair-level Retry, then verify the affected upload’s path and size. <a class="workflow-map-full" href="/screenshots/desktop-sync-workspace-quota-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-workspace-quota-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-workspace-quota-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Open the failed item under **Sync** and retain its full message. Common receipts include:

- **You've used {used} of {limit} across all your workspaces. Empty the trash to free up space, or upgrade...**
- **This workspace has a {capGb} GB storage limit and this doesn't fit. Empty the trash here or raise the limit in workspace settings.**
- **You've reached your {N} GB per-member storage limit**
- **Another upload just filled the remaining space - try again.**

Workspace and account storage views show used, free, and limit values. Items in Trash still consume capacity until they are deleted permanently.

## Steps

1. Copy the failed file path, its byte size, and the complete quota message from the desktop issue row.
2. Open storage usage for the named account or workspace and determine whether the owner plan, workspace cap, or member allowance is full.
3. Permanently delete only confirmed disposable Trash items, understanding that **Delete permanently** cannot be undone.
4. If more capacity is required, ask a workspace owner or admin to raise the applicable workspace or member setting, or have the account owner upgrade its plan.
5. Return to Sync and use the pair's single **Retry** control after every listed error is ready to run again; use **Sync now** only when no failed-file list remains.
6. Confirm the upload appears at the cloud path with the expected size and the quota error clears from Issues.

A capacity race can occur when another upload consumes the last available bytes between measurement and commit. Recheck current usage before repeating that file.

## Expected result

Once sufficient capacity exists under the applicable limit, the queued upload completes and the desktop issue disappears. The cloud object supplies the final path-and-size receipt.

If only an owner or admin can change the setting, a member should send them the exact message and requested file size. Repeated Retry attempts do not increase storage.

## Related guides

- [Diagnose sync issues](/desktop/sync-issues)
- [Resolve conflicts](/desktop/sync-conflicts)
