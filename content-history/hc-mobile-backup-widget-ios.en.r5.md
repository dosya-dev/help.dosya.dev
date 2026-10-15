---
{
  "articleId": "hc-mobile-backup-widget-ios",
  "locale": "en",
  "revision": 5,
  "title": "Add the Dosya backup widget on iPhone",
  "summary": "Add the iPhone backup widget, choose its supported size, read live and last-run facts, and understand refresh, theme, and Live Activity behavior.",
  "category": "files",
  "articleSlug": "mobile-backup-widget-ios",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/targets/backup-widget/index.swift, apps/mobile/modules/dosya-backup-status/ios/DosyaBackupStatusModule.swift, apps/mobile/src/backup/statusBridge.ts, apps/mobile/app.config.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-backup-progress",
    "hc-mobile-background"
  ],
  "keywords": [
    "mobile backup widget ios",
    "Mobile backup status and widgets",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya’s iOS extension provides **Backup status** in the system-small and system-medium families. The same target also provides a Live Activity for an active backup on supported iOS versions.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-backup-widget-ios-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-widget-ios-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-widget-ios-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-backup-widget-ios-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-backup-widget-ios-help-workflow-2026-10-14.webp" alt="iPhone widget workflow showing Backup status placement, a backup run that sets the workspace name, and in-app verification when retained name and active-workspace storage can differ." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>iPhone widget workflow: add **Backup status**, start a run to set its workspace name, verify the active workspace inside Dosya, and check Live Activity during the run. <a class="workflow-map-full" href="/screenshots/mobile-backup-widget-ios-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-widget-ios-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-widget-ios-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The widget requires a signed production or development build containing the **BackupWidget** target and the shared App Group. It is not available in Expo Go.

## Steps

1. Long-press the iPhone Home Screen, choose **Edit** and **Add Widget**, then search for Dosya.
2. Select **Backup status** and choose the small or medium size; extra-large and Lock Screen widget families are not declared.
3. Open Dosya and sign in. The app can seed the shared snapshot immediately, but the workspace name stays blank until a backup scan starts.
4. Start a small backup and compare the widget’s **Backing up** state with progress shown inside Dosya.
5. Check the Lock Screen or Dynamic Island for the Live Activity when iOS 16.2 or later allows Live Activities.
6. Finish the run, reopen the widget, and check its last-backup facts; then open Dosya to verify the active workspace because the idle name is retained from the last scan.

### Small and medium facts

The small widget shows **dosya.dev**, free storage inside its ring, **Backing up** or **Protected**, and the last-run time. The medium widget names the workspace and shows used percentage, **Free**, **Used**, and either **Progress** plus **Speed now** or **Last backup** plus **Last speed**.

At 90% storage use, the ring and free-space fact switch to the warning color. Missing storage or last-run data appears as a dash. The widget uses the active Dosya theme’s light and dark palettes, then resolves the one matching the iPhone appearance.

### Update timing and Live Activity

Dosya asks WidgetKit to reload immediately for phase, theme, active-workspace, and completed-run changes. Other progress pushes are limited to one every 15 seconds, while the timeline schedules a fallback refresh after 30 minutes. The storage values come from the active workspace query, but `workspaceName` is set only when a scan starts and remains after the run becomes idle. The name can be blank before any run, or stale and mismatched with storage after an idle workspace switch.

The Live Activity starts only when a run has a positive item total, updates at most every 3 seconds unless the phase changes, and ends when the run drains. iOS can disable Live Activities, so absence there does not by itself mean backup stopped; confirm inside the app.

## Expected result

The Home Screen widget reflects the latest shared snapshot in the chosen size and theme, while Dosya remains the authority for the active destination workspace. During a supported active run, the Live Activity shows progress separately; after completion, the widget switches to protected and last-run facts.

## Related guides

- [Monitor mobile backup](/files/mobile-backup-progress)
- [Fix paused background backup](/troubleshooting/mobile-background-backup)
