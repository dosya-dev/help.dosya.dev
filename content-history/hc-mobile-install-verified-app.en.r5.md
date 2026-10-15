---
{
  "articleId": "hc-mobile-install-verified-app",
  "locale": "en",
  "revision": 5,
  "title": "Install a verified Dosya mobile app",
  "summary": "Install Dosya from its maintained iOS, Google Play, AppGallery, or direct APK source, verify package identity, and avoid signature conflicts.",
  "category": "account",
  "articleSlug": "mobile-install-verified-app",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 using src/pages/mobile.astro, src/lib/store-links.ts, apps/mobile/app.config.ts, apps/mobile/eas.json, apps/mobile/src/update/sideloadUpdate.ts, and store-link/update tests. No store, APK, or production endpoint was opened.",
  "related": [
    "hc-mobile-install",
    "hc-mobile-permissions"
  ],
  "keywords": [
    "mobile install verified app",
    "Mobile setup and permission details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Use the maintained Dosya mobile page to avoid similarly named or repackaged applications. Official identifiers are fixed even when store artwork or version numbers change.

<figure class="help-screenshot"><a href="/screenshots/mobile-install-verified-app-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-install-verified-app-help-workflow-2026-10-14.webp" alt="Verified mobile installation path using Dosya’s maintained store identifiers or checksum-backed Android APK." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Match the platform identifier before installation and keep one Android signing channel. <a href="/screenshots/mobile-install-verified-app-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open `https://dosya.dev/mobile/` from the device you will install on.
2. For iPhone or iPad, choose the App Store button and verify listing ID **6796702157**, iOS bundle ID `dev.dosya.app`, and the displayed product name **Dosya: Cloud Backup & Storage**. The supported minimum is **iOS 15.1**.
3. For Android from Google Play, verify package `dev.dosya`; Huawei users can follow the maintained AppGallery link for listing `C119259287`. Android support starts at **7.0**.
4. For the direct Android build, choose **Download .apk** on the Dosya page. Compare the displayed SHA-256 with `shasum -a 256 <file>` on macOS/Linux or `certutil -hashfile <file> SHA256` on Windows.
5. Open the downloaded file, allow Chrome or Files to install from that source when Android asks, return, and choose **Install**. Play Protect may scan the file.
6. Launch Dosya and open **Settings** after sign-in. The footer’s **Version** value comes from the installed binary.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile page showing the maintained iPhone and Android installation choices." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The official page separates store builds from the directly signed Android APK. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

Google Play and direct APK builds have different signing certificates. Android refuses to install one over the other and can show **App not installed** or `INSTALL_FAILED_UPDATE_INCOMPATIBLE`. Switching channels requires uninstalling first, which removes local tokens, cache, queued work, and backup configuration. Cloud files remain in the account.

Direct APK builds check the Dosya API for a newer Android `versionCode` with an **8-second** request timeout. A definite result is cached for **six hours**. When newer, Settings shows **Version X is available** and opens the download page; the app does not download or silently install the APK. Store builds never perform this direct-channel check.

## Expected result

The installed app identifies as dosya.dev, opens the signed-out welcome/authentication flow, and reports its runtime version in Settings. Installation itself does not sign in, request photo access, or alter cloud storage.

## Troubleshooting

**The checksum differs.** Delete the APK and download it again from the maintained page. Do not install a file whose SHA-256 does not match.

**A store says the device is unsupported.** Check the minimum OS: iOS 15.1+ or Android 7.0+. There is no supported direct iPhone package in this repository.

**Android will not replace the current app.** Keep one distribution channel. Finish uploads, uninstall the differently signed copy, then install from Play or the direct page and configure the device again.

## Related guides

- [Follow the complete mobile installation guide](/account/mobile-install)
- [Set permissions after verified installation](/account/mobile-permissions)
