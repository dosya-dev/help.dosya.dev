---
{
  "articleId": "hc-mobile-backup-setup",
  "locale": "en",
  "revision": 6,
  "title": "Set up automatic mobile photo backup",
  "summary": "Grant photo access, choose an initial library range, start automatic backup, and confirm full-resolution copies reach the correct workspace safely.",
  "category": "files",
  "articleSlug": "mobile-photo-backup",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/mobile/src/onboarding/OnboardingFlow.tsx and steps/PhotoAccessStep.tsx, ChooseStep.tsx, FirstBackupStep.tsx, plus backup/orchestrator.ts and folders.ts. Live production was not used as evidence; deployment remains pending.",
  "related": ["hc-mobile-permissions", "hc-mobile-backup-settings", "hc-storage-usage", "hc-mobile-backup-albums", "hc-mobile-backup-attention"],
  "keywords": ["automatic photo backup", "phone backup", "camera roll backup", "cloud storage", "file backup"]
}
---
First-run setup enables automatic backup and immediately attempts a full-resolution transfer. You need photo-library access, workspace storage, and a role that can upload files and create folders.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-photo-backup-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-photo-backup-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-photo-backup-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-photo-backup-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-photo-backup-workflow-map-2026-10-14.webp" alt="First mobile backup sequence from workspace selection and photo permission through the initial cloud upload." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Create or select the workspace, authorize the library, choose coverage, and watch the first run establish the backup. <a class="workflow-map-full" href="/screenshots/mobile-photo-backup-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-photo-backup-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-photo-backup-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Sign in to the mobile app. If the account has no workspace, **Name your first workspace**, choose its storage **Location**, and press **Continue**. That workspace location is chosen once.
2. On **Turn on photo backup**, press **Continue**. The next system dialog is the actual iOS or Android permission request. Dosya copies originals at full resolution; it does not resize them for backup.
3. Grant **Full Access** for complete coverage. iOS Limited access and Android selected-photo access are supported, but only assets the operating system exposes can be scanned.
4. On **Choose what gets backed up**, enable **Photos**, **Videos**, or both. Pick **All time**, **12 months**, or **From today**. The screen estimates selected items and bytes and warns **That is more than your plan holds** when its estimate exceeds the workspace total.
5. Press **Start backup**. Setup saves Wi-Fi-only on, charging-only off, applies the platform's default folder choice, enables automatic backup, and starts the first run.
6. Keep this screen visible until **Backing up now** shows progress or the run finishes. Press **Done** when you are ready to use the rest of the app; the Backup tab remains available for progress and retries.
7. Open **Files** in the same workspace and follow `Mobile Backup/<device name>/Camera Roll/YYYY/MM`. The year and month use the asset's capture time in the phone's local timezone.

On a new Android setup, Dosya tries to select recognizable Camera or DCIM folders. If it cannot identify one safely, it covers every folder and later asks you to review the choice. iPhone starts with the whole accessible library because albums overlap and some assets have no album.

If permission is denied, the app displays **Photo access is off**. Use **Open Settings**, or follow `Settings → dosya.dev → Photos → Full Access` on iPhone and `Settings → Apps → dosya.dev → Permissions → Photos and videos` on Android. **Continue without backup** leaves upload, browsing, sharing, and Vault available, but automatic photo backup cannot run.

Automatic work is subject to the operating system scheduler. Dosya requests a 15-minute minimum interval, while Android WorkManager and iOS BGTaskScheduler decide the actual start time. New media events are debounced for about 2 seconds while the app is active. iOS background task windows budget roughly 120 seconds for staging, so large libraries continue over later opportunities.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="iPhone and Android installation cards for the Dosya app required by the automatic photo-backup setup." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the platform-specific mobile build because permission and background behavior differ between iOS and Android. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

**Auto-backup is on** appears after settings are saved, and eligible originals begin copying to the selected workspace. Existing device files remain untouched unless **Delete originals after backup** is enabled later and the operating-system deletion prompt is accepted.

If the first run says **Backup could not start**, finish onboarding with **Done**, correct access, storage, membership, or role permissions, and use **Back up now** on the Backup tab. The engine remembers per-workspace fingerprints, so a later run can link an already uploaded item instead of sending its bytes again.

## Related guides

- [Grant phone library access](/account/mobile-permissions)
- [Adjust future backup behavior](/files/mobile-backup-settings)
- [Check workspace storage consumption](/uploading/storage-usage)
- [Select eligible device albums](/files/mobile-backup-albums)
- [Resolve dashboard attention states](/files/mobile-backup-attention)
