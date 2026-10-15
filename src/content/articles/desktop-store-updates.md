---
{
  "articleId": "hc-desktop-store-updates",
  "locale": "en",
  "revision": 6,
  "title": "Install an update from an app store",
  "summary": "Update Microsoft Store, Mac App Store, or Snap installations through their owning store, then verify the installed Dosya version and sync state.",
  "category": "desktop",
  "articleSlug": "desktop-store-updates",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/desktop/src/renderer/components/UpdatesSection.tsx, apps/desktop/src/main/distribution.ts, apps/desktop/src/main/updater.ts and apps/desktop/src/renderer/lib/store-surfaces.test.ts. Production stores were not opened and no production action was performed.",
  "related": [
    "hc-desktop-install",
    "hc-desktop-sync-issues"
  ],
  "keywords": [
    "desktop store updates",
    "desktop app lifecycle",
    "Dosya help",
    "cloud storage"
  ]
}
---
Microsoft Store, Mac App Store, and Snap installations are store-managed. Dosya disables its direct-download updater in these builds so two update systems cannot race to replace the same installation.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-store-updates-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-store-updates-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-store-updates-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-store-updates-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-store-updates-workflow-map-2026-10-14.webp" alt="Store-managed desktop update workflow for Microsoft Store, Mac App Store, and Snap installations." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the store named by Dosya’s Updates card, then return to verify the installed version. <a class="workflow-map-full" href="/screenshots/desktop-store-updates-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-store-updates-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-store-updates-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open **Settings > Updates** and read the distribution named after **Updates are managed by the…**. The app detects Microsoft Store from its Windows package container, Mac App Store from the macOS store build, and Snap only when the running package identifies itself as the **dosya** snap.
- Save open work and allow active transfers to finish before applying a store update.
- Store delivery has no Dosya plan or workspace-role requirement. Your operating-system store account, administrator policy, and package-manager permissions decide whether installation is allowed.
- Do not download a direct installer over the store copy. Store builds intentionally hide Dosya’s installer history and **Check for updates** control.

## Steps

1. In **Settings > Updates**, note **You’re on v_version_** so you have a before value.
2. For Microsoft Store, choose **Open Microsoft Store**. Dosya opens the store’s **Downloads and updates** destination; request updates there and install the Dosya entry.
3. For Mac App Store, choose **Open Mac App Store**. The deep link opens the Updates page; install the available Dosya version with the Apple ID that owns the app.
4. For Snap Store, there is no open-store button. Snapd refreshes installed snaps on its own schedule. To request it immediately, run **snap refresh dosya** in a terminal with the permissions required by that machine.
5. Wait for the store or snap command to complete, then fully quit and reopen Dosya if the platform did not restart it.
6. Return to **Settings > Updates** and compare **You’re on v_version_** with the version recorded before the update.

<figure class="help-screenshot"><a href="/screenshots/desktop-workspace-2026-10-10.webp"><img src="/screenshots/desktop-workspace-2026-10-10.webp" alt="Reopened Dosya desktop workspace used to confirm a store-delivered version and resumed file activity." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Verify the new version inside Dosya and make sure the expected workspace and transfers are healthy. <a href="/screenshots/desktop-workspace-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## What the store owns

A store build reports **store-managed** internally. Its self-update check, install, and reveal-file handlers are no-ops, and the updater does not contact Dosya’s executable feed. Microsoft Store and Mac App Store builds can open their native update pages; Snap relies on snapd and exposes no clickable page.

The store controls download size, rollout timing, approval prompts, rollback availability, and whether an organization blocks the release. Dosya can display the installed version but cannot force a delayed store rollout to arrive.

## Troubleshooting

- **Version unknown** means the renderer did not receive the installed app version. Restart Dosya after the store operation before assuming installation failed.
- If Microsoft Store or Mac App Store opens without a Dosya update, refresh its update list and confirm the same store account installed the app. A staged release may not yet be offered to that device.
- If **snap refresh dosya** reports insufficient permission, run it through the machine’s approved administrator workflow. Do not replace the snap with an AppImage unless you intend to change distribution channels.
- If the page displays direct-download controls, this installation was detected as **direct**. Use the direct update guide instead of a store workflow.
- When the version changes but sync remains stopped, reopen the relevant workspace and diagnose sync separately; store installation does not alter cloud files.

## Expected result

The owning store replaces the application package and Dosya reopens with a newer **You’re on v…** value. Existing cloud data remains in the account. Update rollback follows the store’s rules. Preserve unsynced local work before any package replacement.

## Related guides

- [Install the desktop app](/desktop/install-and-sign-in)
- [Diagnose desktop sync](/desktop/sync-issues)
