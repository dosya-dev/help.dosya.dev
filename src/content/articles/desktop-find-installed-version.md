---
{
  "articleId": "hc-desktop-find-installed-version",
  "locale": "en",
  "revision": 5,
  "title": "Find the installed Dosya desktop version",
  "summary": "Find the exact Dosya desktop version, distribution channel, system architecture, engine versions, signed-in account, and current sync summary.",
  "category": "desktop",
  "articleSlug": "desktop-find-installed-version",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified in local source at apps/desktop/src/renderer/pages/AboutPage.tsx, apps/desktop/src/renderer/lib/about-info.ts, apps/desktop/src/main/about-window.ts, and apps/desktop/src/main/menu-template.ts. The published desktop packages were not launched in production.",
  "related": [
    "hc-desktop-install",
    "hc-desktop-check-updates"
  ],
  "keywords": [
    "desktop find installed version",
    "Desktop app lifecycle details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
**About dosya** is the authoritative in-app view for the running client. It distinguishes the application version from its distribution channel and provides a copyable block for support.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-find-installed-version-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-find-installed-version-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-find-installed-version-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-find-installed-version-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-find-installed-version-help-workflow-2026-10-14.webp" alt="Four panels show opening About dosya, reading the running Version, identifying the packaged Channel, and confirming Copy Details with Copied." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use About dosya to identify the executable and update owner, then copy the support block privately. <a class="workflow-map-full" href="/screenshots/desktop-find-installed-version-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-find-installed-version-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-find-installed-version-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start**

- Open the running desktop client whose version you need; do not rely on an installer filename or an old download.
- This lookup is local and does not require a workspace role, update check, or production change.

## Steps

1. Open the application menu and select **About dosya**. The dedicated panel is 400 by 540 pixels and opens over the main window when that window exists.
2. Read the first line, `Version _version_`. This value identifies the executable currently running, including after a completed update.
3. Read **Channel**: **Direct download**, **Mac App Store**, **Microsoft Store**, or **Snap Store**. The row is part of the loaded About data rather than an optional release label.
4. Record **System**, which reports platform and CPU architecture, and **Engine**, which reports Electron and Chromium versions. Use Report Problem diagnostics when support needs the OS kernel release.
5. Check **Signed in as** and **Sync** to tie the version to the observed session. Sync can report **No folders**, **Paused**, errors, active syncing, files not synced, or **All synced**.
6. Select **Copy Details**. Confirm **Copied** appears for 1.5 seconds, then paste the block into a private note or support report and remove any account detail that is unnecessary.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop overview behind the About panel for the installed client being identified." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Open About from the running client so the recorded version belongs to the executable currently in use. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The copied record identifies the running Dosya version, channel, system architecture, engines, account, and sync summary. An optional **Finder location** row can also identify the macOS app location.

If About does not load, record what remains visible and use **Help > Report a Problem…** for diagnostics; do not substitute the version of a downloaded installer for the active executable.

## Related guides

- [Install and sign in to the desktop app](/desktop/install-and-sign-in)
- [Check for desktop updates](/desktop/desktop-check-updates)
