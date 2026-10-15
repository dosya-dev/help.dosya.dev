---
{
  "articleId": "hc-desktop-switch-workspaces",
  "locale": "en",
  "revision": 5,
  "title": "Switch workspaces in the desktop app",
  "summary": "Switch the Dosya desktop workspace, verify its saved selection and scoped queries, and interpret each workspace storage and sync status indicator.",
  "category": "desktop",
  "articleSlug": "desktop-switch-workspaces",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified with apps/desktop/src/renderer/components/layout/Sidebar.tsx, apps/desktop/src/renderer/lib/workspace-context.tsx, apps/desktop/src/renderer/pages/FileBrowserPage.tsx, and apps/desktop/src/renderer/pages/SearchPage.tsx. No production workspace was selected.",
  "related": [
    "hc-desktop-system-tray",
    "hc-desktop-check-updates"
  ],
  "keywords": [
    "desktop switch workspaces",
    "Desktop navigation and notifications",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
The workspace switcher changes the active ID used by desktop file, folder, search, and dashboard queries. Its rows can also expose available storage and a compact sync-state indicator.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-switch-workspaces-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-switch-workspaces-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-switch-workspaces-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-switch-workspaces-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-switch-workspaces-help-workflow-2026-10-14.webp" alt="Four panels show opening the current workspace control, comparing authorized rows, waiting through Switching workspace, and verifying workspace-scoped Files or Search content." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Select an authorized workspace, wait for the brief overlay, then verify a page whose query uses the new workspace ID. <a class="workflow-map-full" href="/screenshots/desktop-switch-workspaces-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-switch-workspaces-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-switch-workspaces-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start**

- Sign in to an account that belongs to at least two workspaces.
- Finish any form whose unsaved values should stay associated with the current workspace before changing context.

## Steps

1. Select the current workspace control at the top of the sidebar. The menu lists only workspaces returned for the signed-in account.
2. Review each row’s name and icon. When storage data is available, the row shows `_free_ free of _total_`; a dot or spinner can indicate error, syncing, paused, or synced pairs.
3. Choose a different workspace. A check marks the active row, and Dosya displays **Switching workspace…** with the selected icon and name.
4. Wait for the overlay to close after its two-second display window. The selection is stored as `dosya_active_workspace`, allowing a later launch to request the same workspace when membership still exists.
5. Open **Files**, **Dashboard**, or Search and confirm its content belongs to the selected workspace. File and search query keys include the active workspace ID, causing separate data retrieval.
6. If the saved workspace is unavailable, let Dosya fall back to the first authorized workspace. Reopen the menu and verify the check before uploading, deleting, or sharing anything.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop overview after switching, used to confirm the selected workspace name and its scoped content." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Verify the workspace name and a workspace-scoped page before performing a file action. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The sidebar identifies the new active workspace and workspace-scoped pages use its ID. The workspace list has a 10-second stale time, refetches on window focus, and retries an initial post-login failure three times at 500 ms.

A sync indicator describes pairs assigned to that workspace; it does not mean every global Activity log line is workspace-filtered. Use the pair name before acting on Activity evidence.

## Related guides

- [Use the desktop system tray](/desktop/desktop-system-tray)
- [Check desktop updates](/desktop/desktop-check-updates)
