---
{
  "articleId": "hc-mobile-backup-battery-restrictions",
  "locale": "en",
  "revision": 5,
  "title": "Review battery restrictions that pause backup",
  "summary": "Diagnose mobile backup under battery restrictions by separating Dosya start gates from operating-system scheduling, active-run holds, and manual overrides.",
  "category": "files",
  "articleSlug": "mobile-backup-battery-restrictions",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/backup/policy.ts, apps/mobile/src/backup/background.ts, apps/mobile/app/(tabs)/backup.tsx, and apps/mobile/app/backup-settings.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-backup-retry-failed",
    "hc-mobile-background"
  ],
  "keywords": [
    "mobile backup battery restrictions",
    "Mobile backup recovery details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya checks its own power policy, while iOS and Android independently decide when background work may run. Diagnose those layers separately instead of expecting one battery switch to force an immediate backup.

<figure class="help-screenshot"><a href="/screenshots/mobile-backup-battery-restrictions-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-backup-battery-restrictions-help-workflow-2026-10-14.webp" alt="Dark four-step workflow showing Backup settings, background permission, an open-and-charging test, and queue verification." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The visible workflow opens Backup settings, allows background operation, keeps the app open and charging, and checks that queued work resumes. <a href="/screenshots/mobile-backup-battery-restrictions-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Dosya power gates**

An automatic run will not start while unplugged below the built-in 20% battery floor. That threshold is not exposed as an adjustable setting. **Only while charging** adds a separate charging requirement. Once a run has started, crossing below 20% does not pause it; active-run holds check connectivity, Wi-Fi-only, and charging-only settings.

## Steps

1. Open the **Backup** tab and read the current state before changing system settings. Confirm the active workspace and whether the app says it is waiting for a charger, Wi-Fi, or connectivity.
2. In mobile **Backup settings**, review **Automatic backup**, **Wi-Fi only**, **Only while charging**, and **Upload while locked**. Record their original values.
3. Check the operating system’s background and battery settings for Dosya. Control names vary by OS and device vendor, so use the installed system’s own labels rather than assuming one universal menu path.
4. For a controlled test, keep Dosya open, connect power, and back up one non-sensitive item. **Back up now** is a manual run: it bypasses the charging-only gate for that run, and a cellular confirmation can temporarily bypass Wi-Fi-only without changing saved preferences.
5. Verify the cloud copy in **Files** before deleting anything from the phone. Re-enable the desired restrictions after the test.


**Background limits**

Dosya requests a 15-minute minimum background cadence, but the operating system chooses actual timing. iOS gives the scheduled task an approximately 120-second staging budget. **Upload while locked** enables the native locked-device transport where supported; it is unavailable in Expo Go. Android uses a foreground service while active work is running.

Do not promise an instant restart after changing battery settings. A permitted window, network, photo-library access, workspace access, and storage are all still required.

## Expected result

The controlled item proceeds while the app is open and powered, and later automatic work resumes when both Dosya’s saved policy and the operating system’s scheduler allow it.

## Related guides

- [Retry failed backup items](/files/mobile-backup-retry-failed)
- [Troubleshoot background backup](/troubleshooting/mobile-background-backup)
