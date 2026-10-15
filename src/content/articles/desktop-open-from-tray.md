---
{
  "articleId": "hc-desktop-open-from-tray",
  "locale": "en",
  "revision": 5,
  "title": "Open Dosya from the system tray or menu bar",
  "summary": "Open or recreate Dosya from its Windows or Linux system tray or macOS menu bar while sync remains active in the resident background process.",
  "category": "desktop",
  "articleSlug": "desktop-open-from-tray",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally in apps/desktop/src/main/tray.ts, apps/desktop/src/main/index.ts, apps/desktop/src/main/window-show.ts, apps/desktop/src/main/window-reclaim.ts, and apps/desktop/src/main/window-reclaim.test.ts. Native production tray environments were not controlled.",
  "related": [
    "hc-desktop-system-tray",
    "hc-desktop-check-updates"
  ],
  "keywords": [
    "desktop open from tray",
    "Desktop navigation and notifications",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Closing the Dosya window normally hides it instead of ending the app. The tray or menu-bar icon can reveal the window again and continues to reflect sync state while the renderer is hidden.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-open-from-tray-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-open-from-tray-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-open-from-tray-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-open-from-tray-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-open-from-tray-help-workflow-2026-10-14.webp" alt="Four panels show reading the tray tooltip, choosing Open dosya, recreating a window after five-minute reclaim, and using Quit dosya only to stop the process." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Open the resident window from the tray after ordinary close or reclaim, and reserve Quit dosya for ending the process. <a class="workflow-map-full" href="/screenshots/desktop-open-from-tray-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-open-from-tray-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-open-from-tray-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start**

- Look for the **dosya** icon in the Windows/Linux system tray or macOS menu bar.
- If a Linux desktop does not expose its tray icon, relaunching Dosya asks the resident single instance to show or recreate the hidden window.

## Steps

1. Check the icon tooltip. It reads **dosya** before status is available or `dosya - _sync summary_` when the sync engine has reported its current state.
2. Single-click the tray icon, or open its menu and select **Open dosya**. Windows also accepts a double-click on the icon.
3. Wait for the main window to appear and receive focus. If its hidden renderer was reclaimed after the default five-minute delay, Dosya creates a replacement window instead of restoring the old renderer.
4. Confirm the expected account and workspace after recreation. Window geometry is persisted, while authentication and the main-process sync engine survive ordinary hide/reclaim behavior.
5. Inspect the tray’s sync controls when needed: **Resume Sync** or **Pause Sync**, **Sync All Now**, and **Open Sync Folder** appear when pairs exist; **Upload File...** opens the upload route.
6. Use **Quit dosya** only when the process must stop. Closing the visible window returns supported tray builds to the background and does not perform the quit workflow.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop overview shown after reopening the main window from the tray or menu bar." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Confirm the recreated or revealed window returns to the intended signed-in workspace. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Dosya becomes visible and refreshes its sync store after the show event. Background sync may have continued even when a five-minute hidden-window reclaim destroyed the renderer.

If the icon is missing after closing the window, launch Dosya again. The single-instance handler asks the resident process to show or recreate its window on Windows and Linux; macOS uses its normal activation path.

## Related guides

- [Use the desktop system tray](/desktop/desktop-system-tray)
- [Check desktop updates](/desktop/desktop-check-updates)
