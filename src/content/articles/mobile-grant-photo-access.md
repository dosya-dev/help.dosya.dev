---
{
  "articleId": "hc-mobile-grant-photo-access",
  "locale": "en",
  "revision": 5,
  "title": "Grant photo access for mobile backup",
  "summary": "Grant full or selected photo-library access for mobile backup, understand what each scope exposes, and refresh Dosya after an OS setting change.",
  "category": "account",
  "articleSlug": "mobile-grant-photo-access",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally on 2026-10-14 against apps/mobile/src/onboarding/steps/PhotoAccessStep.tsx, apps/mobile/src/onboarding/permissions.ts, apps/mobile/src/backup/scanner.ts, apps/mobile/app/(tabs)/backup.tsx, and permission/scanner tests. No device library or production backup was opened.",
  "related": [
    "hc-mobile-install",
    "hc-mobile-permissions"
  ],
  "keywords": [
    "mobile grant photo access",
    "Mobile setup and permission details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Photo permission controls which local photos and videos Dosya can discover for backup. Granting access alone uploads nothing; a backup run and its destination settings still decide what leaves the device.

<figure class="help-screenshot"><a href="/screenshots/mobile-grant-photo-access-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-grant-photo-access-help-workflow-2026-10-14.webp" alt="Photo-library permission workflow distinguishing full access, limited selection, denial, and the refreshed Backup screen." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Permission defines the local media Dosya can scan; it does not start an upload by itself. <a href="/screenshots/mobile-grant-photo-access-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. During first-run setup, read **Turn on photo backup** and select **Continue**. That action opens the real iOS or Android permission dialog; Dosya does not request photo access when the explanation screen merely appears.
2. Choose full access when every eligible photo and video should be considered. Choose selected/limited access when only hand-picked media should be visible to Dosya.
3. Complete backup setup, or open the **Backup** tab later. A denial produces **Allow photo access** with the explanation that permission is needed for full-resolution originals.
4. If the Backup page shows **Limited photo access**, select it to open device Settings. Expand or replace the allowed selection there.
5. Return to **Backup**. The screen rechecks both granted and limited state whenever it gains focus, then recalculates the library count for the current photo/video, folder, and date filters.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile availability reference for iOS and Android photo-library backup permissions." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Both supported mobile platforms can expose full or selected media access. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

Modern iOS calls partial scope **Limited**; Android 14 exposes **Select photos**. The library module normalizes both to limited access. A scan requests batches of **100 assets**, newest first. It reads IDs and metadata before materializing bytes, and an inaccessible iCloud/limited item is skipped as unreadable so a later run can retry it.

Changing access does not delete anything from cloud storage. Removing permission stops future scanning and can make coverage totals unavailable. Already uploaded originals remain in the destination workspace unless you delete them there.

## Expected result

The Backup screen no longer shows **Allow photo access**. Full access can count the permitted whole library; limited access stays usable but displays **Only selected photos back up. Tap to allow full access in Settings.**

## Troubleshooting

**The system dialog does not return.** iOS and Android may show the prompt only once. Open the device’s app settings for dosya.dev and change Photos/Photos and videos there.

**Some allowed media still fails.** An iCloud original may not download, a local URI may be unreadable, or a file can report zero bytes. Android waits **1.5 seconds** and checks a zero-size asset once more; unresolved items remain for a later run.

**Nothing is selected after permission succeeds.** Review **Choose what to back up**. An include-mode folder filter with no folders is a valid empty selection and requires at least one folder before a run can find media.

## Related guides

- [Install a build that supports photo backup](/account/mobile-install)
- [Compare every mobile permission](/account/mobile-permissions)
