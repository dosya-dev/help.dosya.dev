---
{
  "articleId": "hc-desktop-system-tray",
  "locale": "en",
  "revision": 6,
  "title": "Use the Dosya system tray",
  "summary": "Read every sync pair from the Dosya tray, use its pause, resume, sync, folder, upload, and window actions, then confirm the result in the app.",
  "category": "desktop",
  "articleSlug": "desktop-system-tray",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally source-reviewed on 2026-10-15 against apps/desktop/src/main/tray.ts, apps/desktop/src/main/sync-status-summary.ts, and their tests; tray actions were not rechecked on production builds.",
  "related": [
    "hc-desktop-install",
    "hc-desktop-sync-issues"
  ],
  "keywords": [
    "desktop system tray",
    "desktop app lifecycle",
    "Dosya help",
    "cloud storage"
  ]
}
---
The Dosya tray or menu-bar icon summarizes every configured sync pair. It provides quick controls for the whole engine and individual folders; it does not select an active workspace or desktop session.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-system-tray-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-system-tray-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-system-tray-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-system-tray-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-system-tray-workflow-map-2026-10-14.webp" alt="Four-step map for the Dosya tray: read the global summary, match a pair label and status, run a sync control, then confirm the state in the app." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the tray’s summary and pair labels to run the intended sync control, then confirm the same state in the Sync page. <a class="workflow-map-full" href="/screenshots/desktop-system-tray-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-system-tray-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-system-tray-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Find the Dosya icon in the Windows notification area, macOS menu bar, or the tray implementation provided by the Linux desktop environment. A click opens the main window; Windows also supports double-click.

## Steps

1. Open the tray menu and read the disabled **Sync: {summary}** line before taking action.
2. Review each **workspaceName/remoteFolderName - {status}** entry to identify the pair that needs attention.
3. Choose **Pause Sync** or **Resume Sync** for the engine, or select **Sync All Now** to request an immediate pass.
4. Use **Open Sync Folder** for a mapped local path, or choose **Upload File...** to open the app's **Upload** route and select a file there.
5. Select **Open dosya** or click the tray icon to bring the main window forward.
6. Open **Sync** in the app and confirm the same pair status, failed-file count, or resumed activity.

<figure class="help-screenshot"><a href="/screenshots/desktop-workspace-2026-10-10.webp"><img src="/screenshots/desktop-workspace-2026-10-10.webp" alt="Reference for “Use the Dosya system tray”: Dosya desktop app showing the active workspace and desktop navigation." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Reference for “Use the Dosya system tray”: Dosya desktop app showing the active workspace and desktop navigation. <a href="/screenshots/desktop-workspace-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

Pair labels include **Synced**, **Syncing…**, **Paused**, **Error**, **Waiting**, **Offline**, **Needs attention**, and **Needs permission**. Global summaries can report maintenance pause, errors, offline pairs, folders needing attention, files syncing, files not synced, paused pairs, or **All synced**. The tooltip follows `dosya - {summary}`.

The menu rebuild is throttled to at most once per second, so a rapidly changing count can trail the Sync page briefly. **Quit dosya** stops the client; closing or hiding its window is a different action.

## Expected result

The requested tray action affects the intended pair or global engine, and the main Sync page confirms the same underlying state after refresh.

If the tray count briefly differs from Sync, wait at least one second and reopen the menu. Status changes are throttled to one rebuild per second, and the scheduled rebuild uses the newest state.

## Related guides

- [Install the desktop app](/desktop/install-and-sign-in)
- [Diagnose desktop sync](/desktop/sync-issues)
