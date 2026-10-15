---
{
  "articleId": "hc-mobile-switch-workspace-before-browse",
  "locale": "en",
  "revision": 5,
  "title": "Switch mobile workspaces before browsing",
  "summary": "Switch mobile Files context before browsing, identify backup destinations and confined roles, and understand how keyed queries load the chosen workspace.",
  "category": "files",
  "articleSlug": "mobile-switch-workspace-before-browse",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/files/WorkspaceSwitcher.tsx, apps/mobile/src/files/WorkspaceSwitchSplash.tsx, apps/mobile/src/files/WorkspaceHeader.tsx, apps/mobile/src/files/workspaceStore.ts, and apps/mobile/src/files/hooks.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-switch-account"
  ],
  "keywords": [
    "mobile switch workspace before browse",
    "Mobile navigation and search details",
    "Dosya help",
    "cloud storage"
  ]
}
---
The workspace name at the top of Dosya controls Files, Search, Backup, and Settings context. Switch it before browsing so later file actions and searches target the intended workspace.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-switch-workspace-before-browse-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-switch-workspace-before-browse-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-switch-workspace-before-browse-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-switch-workspace-before-browse-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-switch-workspace-before-browse-help-workflow-2026-10-14.webp" alt="Mobile workspace-switch workflow: open Your workspaces, choose the destination, verify its name and root Files listing, and recheck the header before a file action." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Mobile workspace-switch workflow: open Your workspaces, choose the destination, verify its name and root Files listing, and recheck the header before a file action. <a class="workflow-map-full" href="/screenshots/mobile-switch-workspace-before-browse-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-switch-workspace-before-browse-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-switch-workspace-before-browse-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The sheet is labelled **Your workspaces**. A checkmark marks the active workspace, a shield marks a configured backup destination, and a running destination can say **Backing up…**. Storage-enabled workspaces show free space. A confined member’s header also names the role and root folder.

## Steps

1. Tap the current workspace name in the header to open **Your workspaces**.
2. Compare workspace names, active checkmark, role or root-folder text, backup shield, and available storage.
3. Tap the workspace whose files you intend to browse; tapping the already active row is a no-op.
4. Wait for the **Switching workspace…** splash, which remains for a fixed two seconds while screens select and load queries keyed to the new workspace ID.
5. Confirm the chosen workspace name appears in the header and inspect the root Files listing.
6. Before uploading, deleting, sharing, or searching, recheck that header because those actions use the active workspace.

The switch updates `activeId` immediately and persists it in secure storage. Screens then select query keys containing the new workspace ID and fetch that workspace as needed; cached entries for the previous workspace can remain stored but are no longer the active listing. A folder-confined role may land at its named root rather than the workspace’s global root. Switching does not move files, change membership, or alter which workspaces receive mobile backup.

## Expected result

After the two-second transition, the header and file listing belong to the selected workspace. Existing files stay where they were, and later browsing or search uses the new active workspace subject to its role and root-folder limits.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Switch mobile accounts](/account/mobile-switch-account)
