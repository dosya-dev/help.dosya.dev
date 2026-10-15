---
{
  "articleId": "hc-mobile-backup-widget-android",
  "locale": "en",
  "revision": 5,
  "title": "Add the Dosya backup widget on Android",
  "summary": "Add the Android home-screen backup widget and interpret its small and medium layouts, refresh timing, stale state, storage warning, and tap behavior.",
  "category": "files",
  "articleSlug": "mobile-backup-widget-android",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/modules/dosya-backup-status/android/src/main/AndroidManifest.xml, apps/mobile/modules/dosya-backup-status/android/src/main/res/xml/backup_widget_info.xml, apps/mobile/modules/dosya-backup-status/android/src/main/java/dev/dosya/backupstatus/BackupWidgetProvider.kt, apps/mobile/modules/dosya-backup-status/android/src/main/java/dev/dosya/backupstatus/WidgetRenderer.kt, apps/mobile/src/backup/statusBridge.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-backup-progress",
    "hc-mobile-background"
  ],
  "keywords": [
    "mobile backup widget android",
    "Mobile backup status and widgets",
    "Dosya help",
    "cloud storage"
  ]
}
---
The Android home-screen widget is registered as **dosya backup** and supports horizontal or vertical resizing. The renderer chooses the medium layout at a reported minimum width of 180 dp or more; narrower placements use the small layout.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-backup-widget-android-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-widget-android-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-widget-android-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-backup-widget-android-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-backup-widget-android-help-workflow-2026-10-14.webp" alt="Android widget workflow showing the dosya backup picker entry, small or medium placement, a backup run that sets the workspace name, and in-app verification when name and storage can differ." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Android widget workflow: place **dosya backup**, start a run to set its workspace name, compare the small and medium facts, and verify the current workspace inside the app. <a class="workflow-map-full" href="/screenshots/mobile-backup-widget-android-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-widget-android-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-widget-android-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

This is a native Android widget. It is available only in a production/dev-client build that includes the `dosya-backup-status` module; Expo Go cannot load that native module.

## Steps

1. Long-press an empty area of the Android home screen and open the launcher’s **Widgets** picker.
2. Find **dosya backup** under Dosya, then drag it onto the home screen.
3. Resize it to a small card or at least 180 dp wide for the medium facts layout.
4. Open Dosya and sign in. The app can publish a snapshot immediately, but the workspace name stays blank until a backup scan starts.
5. Start a small backup; compare **Backing up**, progress, and current speed with the Backup screen.
6. Tap the widget to open Dosya and verify the active workspace and transfer there; do not use the widget name alone to confirm the destination.

### What each size shows

The small card shows **dosya.dev**, a storage ring, **Backing up** or **Protected**, and the last-run time when one exists. The medium card adds the workspace name, **Free**, **Used**, and either live **Progress** plus **Speed now** or idle **Last backup** plus **Last speed**.

The storage ring turns to the warning color at 90% used. Missing storage data renders as a dash rather than an invented percentage. If no snapshot exists, the widget says **Open dosya to see your backup**.

### Refresh and stale data

Phase changes, active-workspace changes, theme changes, and a completed run push immediately. Ordinary progress snapshots are throttled to once every 15 seconds. A workspace switch changes the storage lookup, but it does not set `workspaceName`; that name is written only when a scan starts and is retained after the run returns to idle. Before the first run it can be blank, and after an idle workspace switch it can be stale or disagree with storage from the newly active workspace. Android also treats a non-idle snapshot older than 3,600 seconds as stale and renders it as **Protected** instead of claiming an hour-old transfer is still running.

The widget follows the phone’s light or dark mode using both palettes supplied by the active Dosya theme. Tapping anywhere on the card launches the app; the widget has no pause or retry button.

## Expected result

The placed widget shows the latest published backup snapshot, storage from the active workspace, and either live or last-run facts. Confirm the destination in Dosya whenever the displayed workspace name is blank or differs from the active workspace. It refreshes after meaningful app events, switches theme with the system, and opens Dosya when tapped.

## Related guides

- [Monitor mobile backup](/files/mobile-backup-progress)
- [Fix paused background backup](/troubleshooting/mobile-background-backup)
