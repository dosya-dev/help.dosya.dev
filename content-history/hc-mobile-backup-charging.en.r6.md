---
{
  "articleId": "hc-mobile-backup-charging",
  "locale": "en",
  "revision": 6,
  "title": "Keep backup running while charging",
  "summary": "Use Only while charging for automatic backup, know what a manual run bypasses, and understand the five-minute hold after power is disconnected.",
  "category": "files",
  "articleSlug": "mobile-backup-charging",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/backup-settings.tsx, apps/mobile/src/backup/policy.ts, apps/mobile/src/backup/orchestrator.ts, and apps/mobile/app/(tabs)/backup.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-backup-setup",
    "hc-mobile-backup-settings"
  ],
  "keywords": [
    "mobile backup charging",
    "mobile backup controls",
    "Dosya help",
    "file transfer"
  ]
}
---
The **Only while charging** switch controls automatic starts and active-run holds. A manual **Back up now** test intentionally bypasses that charging requirement for the current run.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-backup-charging-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-charging-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-charging-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-backup-charging-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-backup-charging-workflow-map-2026-10-14.webp" alt="Light-theme four-step map showing Mobile Backup settings, a charging rule, run-state verification, and refresh." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The workflow visibly opens Mobile Backup settings, changes the charging rule, checks how the run state explains pauses, and reopens the view. <a class="workflow-map-full" href="/screenshots/mobile-backup-charging-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-charging-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-charging-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Set the automatic rule**

Automatic backup also checks connectivity, **Wi-Fi only**, and a built-in 20% battery floor while unplugged. The battery percentage is a start gate; an active run is not paused merely because charge drops from 20% to 19%.

## Steps

1. Open the mobile app, choose the intended workspace, and go to **Backup settings**.
2. Under **When to back up**, turn on **Only while charging**. Leave **Automatic backup** enabled if you want scheduled work to start under that rule.
3. Disconnect power before an automatic run begins and confirm it does not start. The policy reason is **waiting-for-charge**, while the active Backup interface uses the wording **waiting for charger**.
4. Connect a recognized charger and leave network and photo-library permissions available. The operating system controls when the next background opportunity occurs, so charging does not guarantee immediate execution.
5. During a small active automatic run, disconnect power. Upload pacing enters **waiting for charger** and waits up to five minutes; if power does not return, the run ends cleanly and unfinished ledger rows remain eligible for a future run.


**Manual-run exception**

Tapping **Back up now** skips the charging-only gate for that run and does not change the saved switch. Use that manual path when you deliberately want to continue unplugged. It can also offer a one-time cellular override for Wi-Fi-only, so read that prompt before proceeding.

Stopping or timing out does not erase unfinished source media. Confirm backed-up bytes in **Files** before using any delete-after-backup option or removing originals yourself.

## Expected result

Automatic work starts only under the saved charging rule, an interrupted run shows the charger hold and exits after five minutes, and manual backup remains an explicit exception.

## Related guides

- [Set up mobile backup](/files/mobile-photo-backup)
- [Change backup settings](/files/mobile-backup-settings)
