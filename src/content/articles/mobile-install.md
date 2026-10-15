---
{
  "articleId": "hc-mobile-install",
  "locale": "en",
  "revision": 6,
  "title": "Install the Dosya mobile app",
  "summary": "Install Dosya on iOS 15.1+ or Android 7.0+ from its official store or supported Android APK, then verify the build before signing in on that device.",
  "category": "account",
  "articleSlug": "mobile-install",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14 using src/pages/mobile.astro, src/lib/store-links.ts, apps/mobile/app.config.ts, apps/mobile/eas.json, apps/mobile/src/lib/appVersion.ts, and store-link tests. Installation was not repeated on a physical handset and no live store or production-download request was made.",
  "related": [
    "hc-choose-app",
    "hc-mobile-signin",
    "hc-mobile-permissions"
  ],
  "keywords": [
    "install Dosya mobile app",
    "iPhone cloud storage app",
    "Android file backup app",
    "Dosya APK download",
    "Google Play cloud storage"
  ]
}
---
Dosya mobile supports **iOS 15.1 or later** and **Android 7.0 or later**. The iPhone app is distributed through the App Store. Android users can install from Google Play, Huawei AppGallery, or the current direct APK linked by Dosya.

Use the buttons on `https://dosya.dev/mobile/` instead of searching by name. The maintained destinations identify the iPhone listing as App Store ID `6796702157`, the Android store package as `dev.dosya`, and the direct build as the latest file served by the Dosya API.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-install-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-install-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-install-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-install-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-install-workflow-map-2026-10-14.webp" alt="Installation map for choosing an official mobile source, checking compatibility, and opening Dosya." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Start on the maintained mobile page, choose the platform channel, and verify the installed build in Settings. <a class="workflow-map-full" href="/screenshots/mobile-install-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-install-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-install-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

### iPhone or iPad

1. Open `https://dosya.dev/mobile/` and find the **iPhone** card.
2. Confirm the device runs iOS 15.1 or newer, then tap **Download on the App Store**.
3. Check that the destination uses App Store ID `6796702157` and displays **Dosya: Cloud Backup & Storage**.
4. Install the app through Apple's normal confirmation flow.
5. Open Dosya. The first app screen should offer the signed-out welcome or authentication flow; installation alone does not request access to the photo library.

### Android from a store

1. On the same mobile page, use **Get it on Google Play** for package `dev.dosya`. Huawei phones without Play can use the AppGallery badge for listing `C119259287`.
2. Confirm Android 7.0 or later, then let the chosen store install the app.
3. Keep the Google Play or AppGallery installation in that same channel so its marketplace supplies future Dosya updates.

### Android from the direct APK

1. Select **Download .apk** on the Dosya mobile page. If a SHA-256 value is displayed, compare it before installation with `shasum -a 256 <file>` on macOS or Linux, or `certutil -hashfile <file> SHA256` on Windows.
2. Open the APK from the browser notification or **Files → Downloads**.
3. When Android asks which app may install unknown applications, allow the source that opened the file, such as Chrome or Files, then go back.
4. Tap **Install** and allow Play Protect to scan the package if offered.
5. Open Dosya and later check **Settings** for the installed **Version** value. The app reads this from the installed binary.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile download page with separate availability cards for iPhone and Android." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>The mobile page separates the App Store route from the Android store and direct-download choices. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The installed application opens as **dosya.dev**, shows its build number under **Settings**, and presents the mobile sign-in experience. No cloud file, account membership or workspace content changes until you authenticate and perform an action.

## Android channel rules

- Google Play signs its build with a different key from the direct APK. Android will not install one over the other and can show **App not installed** or `INSTALL_FAILED_UPDATE_INCOMPATIBLE`.
- Switching between the Play and direct channels requires uninstalling the existing copy first. That deletion removes local tokens, cached files, queued work and backup configuration from the phone; files already in the Dosya account remain in cloud storage.
- A direct APK installation is not updated by Google Play. The app checks for a newer direct build every few hours and shows an item in **Settings** when one is available.
- Removing the direct build's install-source permission after setup does not uninstall Dosya. Android will ask again only when that source needs to install another APK.
- iOS has no supported direct package route in this project. Use the App Store listing on Apple devices.

## Troubleshooting

**The store says the device is unsupported.** Verify the operating-system version: the published requirements are iOS 15.1+ and Android 7.0+.

**Android reports “App not installed.”** If a Play build and direct build are being mixed, finish any cloud uploads, uninstall the current app, and install from the chosen channel. You will need to sign in and configure backup again.

**The downloaded APK does not match the checksum.** Delete it and download a fresh copy from the official mobile page. Do not install a file with a different SHA-256 result.

**No version appears in Settings.** Reopen the installed release build. The app deliberately reads the runtime package version rather than a guessed configuration value.

## Related guides

- [Choose the right Dosya app](/account/choose-app)
- [Sign in to Dosya on mobile](/account/mobile-sign-in)
- [Manage mobile permissions](/account/mobile-permissions)
