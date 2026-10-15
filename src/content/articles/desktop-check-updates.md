---
{
  "articleId": "hc-desktop-check-updates",
  "locale": "en",
  "revision": 6,
  "title": "Check for desktop app updates",
  "summary": "Check a direct-download desktop build for updates, follow each download state, and install safely across Windows, macOS, and Linux without losing work.",
  "category": "desktop",
  "articleSlug": "desktop-check-updates",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/desktop/src/renderer/components/UpdatesSection.tsx, apps/desktop/src/main/updater.ts, apps/desktop/src/main/update-install.ts and apps/desktop/src/main/update-install.test.ts. Production update feeds and installers were not invoked; no production action was performed.",
  "related": [
    "hc-desktop-install",
    "hc-desktop-sync-issues"
  ],
  "keywords": [
    "desktop check updates",
    "desktop app lifecycle",
    "Dosya help",
    "cloud storage"
  ]
}
---
A direct-download Dosya build checks the Dosya update feed itself. Store installations use their store instead and do not display the self-update controls or downloadable installer list described here.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-check-updates-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-check-updates-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-check-updates-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-check-updates-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-check-updates-workflow-map-2026-10-14.webp" alt="Direct-download desktop update workflow from Check for updates through download, restart, and version verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Follow the live update state and install only after active transfers reach a safe point. <a class="workflow-map-full" href="/screenshots/desktop-check-updates-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-check-updates-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-check-updates-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open **Settings > Updates** and confirm the card says **dosya Desktop** with **You’re on v…**.
- Save editor work and let uploads, downloads, and sync changes settle before restarting. Updating is available to all signed-in plans and does not require a workspace role.
- This procedure applies to direct downloads on Windows, macOS, and Linux. If the page says updates are managed by Microsoft Store, Mac App Store, or Snap Store, use the store guide instead.
- Keep network access to **api.dosya.dev**. The packaged app schedules a feed check 5 seconds after every startup. Outside crash-loop protection, it also checks every 4 hours while running.

## Steps

1. Select **Check for updates**. The button becomes busy and the status reads **Checking for updates…**.
2. If a release exists, watch **Downloading _percent_%**. The control remains disabled during the check and background download.
3. When Windows or macOS reports **Update ready: v_version_**, choose **Restart & install**. The app announces **Installing… dosya will reopen in a moment**, closes its windows, installs, and relaunches.
4. On Linux AppImage, the **Update Downloaded** notification says that the file was downloaded and must replace the current AppImage. Triggering install reveals that downloaded file rather than relying on automatic replacement.
5. After reopening, return to **Settings > Updates** and confirm **You’re on v_version_** matches the intended release. Also check that sync pairs returned to their expected state.
6. When no newer release exists, record **Up to date** and the displayed current version; no restart is needed.

<figure class="help-screenshot"><a href="/screenshots/desktop-workspace-2026-10-10.webp"><img src="/screenshots/desktop-workspace-2026-10-10.webp" alt="Dosya desktop workspace used after relaunch to verify the installed version and resumed sync context." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>After installation, reopen the same workspace and verify both app version and sync health. <a href="/screenshots/desktop-workspace-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Statuses, timing, and safeguards

The updater broadcasts **Downloading 0%** immediately when it finds a release, then the page can progress through **Downloading 0%–100%**, **Update ready: v…**, and **Installing… dosya will reopen in a moment**. Other visible states are **Checking for updates…**, **Update check failed**, and **Up to date**. The release list separately labels builds **Latest**, **Installed**, **Pre-release**, or **Not available** for Windows, macOS, and Linux.

Once installation starts on Windows or macOS, a 15-second watchdog force-closes any app window still blocking the updater. Save work before pressing the button because unsaved local interface state can be lost. Linux does not use this restart installer path.

Crash-loop protection examines recent launches. If three prior launch records are still within a 30-second window, the next startup disables automatic download and install and suppresses only the recurring four-hour check; the one check scheduled five seconds after startup still runs. Running stably for 60 seconds clears the record. Manual diagnosis is safer than repeatedly relaunching a failing version.

## Troubleshooting

- **Update check failed** exposes only the state, while the updater retains the underlying message in its status. Confirm internet access and retry once.
- **Couldn’t load builds.** affects the release history list. Use **Try again**; the live updater may still work independently.
- **No builds published yet.** means the release endpoint returned no entries for the list.
- If a platform row says **Not available**, that release has no installer for the selected OS. Select the correct Windows, macOS, or Linux tab.
- When **Restart & install** does not appear, wait for **Update ready**. A store-managed build intentionally hides this button.
- On Linux, replace the active AppImage with the revealed download, preserve executable permission, and start that new file before deleting the previous one.

## Expected result

The direct build either reports **Up to date** or downloads the matching platform release. Windows and macOS restart into the new version; Linux exposes the AppImage for manual replacement. The version line provides the final verification.

## Related guides

- [Install the desktop app](/desktop/install-and-sign-in)
- [Diagnose desktop sync](/desktop/sync-issues)
