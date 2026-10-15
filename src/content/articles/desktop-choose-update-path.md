---
{
  "articleId": "hc-desktop-choose-update-path",
  "locale": "en",
  "revision": 5,
  "title": "Choose the correct desktop update path",
  "summary": "Match the installed Dosya desktop channel to its direct, Microsoft Store, Mac App Store, Snap, or Linux AppImage update procedure without mixing sources.",
  "category": "desktop",
  "articleSlug": "desktop-choose-update-path",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/desktop/src/main/distribution.ts, apps/desktop/src/main/updater.ts, apps/desktop/src/renderer/components/UpdatesSection.tsx, and apps/desktop/src/renderer/lib/about-info.ts. Store pages, the live update feed, and production installers were not opened.",
  "related": [
    "hc-desktop-install",
    "hc-desktop-check-updates"
  ],
  "keywords": [
    "desktop choose update path",
    "Desktop app lifecycle details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Dosya chooses its update controls from the installed distribution. Check that channel first: a direct build can use Dosya’s updater, while Microsoft Store, Mac App Store, and Snap installations stay with their owning store.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-choose-update-path-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-choose-update-path-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-choose-update-path-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-choose-update-path-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-choose-update-path-help-workflow-2026-10-14.webp" alt="Four panels show reading Version and Channel in About dosya, checking a Direct download build, replacing a Linux AppImage, and opening the required app store." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Read the installed channel first, then use its matching direct, AppImage, or store-managed update path. <a class="workflow-map-full" href="/screenshots/desktop-choose-update-path-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-choose-update-path-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-choose-update-path-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start**

- Open **About dosya** and read **Channel**. Its value is **Direct download**, **Microsoft Store**, **Mac App Store**, or **Snap Store**.
- Save unsaved work before any direct Windows or macOS installation restart. No workspace role or paid plan is required to inspect or update the desktop client.

## Steps

1. Open **About dosya** from the application menu and record both `Version` and **Channel**. The channel comes from the packaged distribution, not the workspace or signed-in account.
2. For **Direct download**, open **Settings > Updates** and choose **Check for updates**. A check can move through **Checking for updates…**, **Downloading _percent_%**, and **Update ready: v_version_**.
3. On direct Windows or macOS builds, wait for **Update ready**, then select **Restart & install**. **Installing… dosya will reopen in a moment** means the native updater owns the restart.
4. On a direct Linux AppImage, reveal the downloaded AppImage when the update is ready, replace the old AppImage manually, retain executable permission, and launch the replacement.
5. For **Microsoft Store** or **Mac App Store**, use **Open Microsoft Store** or **Open Mac App Store**. These builds do not fetch or install Dosya’s direct packages.
6. For **Snap Store**, run `snap refresh dosya` through the Snap installation environment. The Updates card deliberately has no store-opening button for this channel.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop overview used after updating to confirm that the expected account and workspace reopen." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>After the channel-specific update finishes, reopen Dosya and confirm the client returns to a usable workspace. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The Updates card confirms which service controls the installed build. A direct Windows or macOS installation reopens on the new version, Linux runs the replacement AppImage, and each store reports its own update result.

If the expected control is absent, return to **About dosya**. A store-managed build intentionally hides **Restart & install**, and Snap intentionally omits an in-app update action.

## Related guides

- [Install and sign in to the desktop app](/desktop/install-and-sign-in)
- [Check for desktop updates](/desktop/desktop-check-updates)
