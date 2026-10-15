---
{
  "articleId": "hc-mobile-backup-network",
  "locale": "en",
  "revision": 6,
  "title": "Choose Wi-Fi or cellular backup",
  "summary": "Control cellular, Wi-Fi, charging, and low-battery behavior, then use a one-run override without changing future automatic backup policy for later runs.",
  "category": "files",
  "articleSlug": "mobile-backup-network",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified through apps/mobile/app/backup-settings.tsx, app/(tabs)/backup.tsx, src/backup/policy.ts, background.ts, orchestrator.ts, upload/pacing.ts, and focused tests. No production instance was consulted; publication is outstanding.",
  "related": ["hc-mobile-backup-setup", "hc-mobile-backup-settings"],
  "keywords": ["mobile backup network", "Wi-Fi photo backup", "cellular backup", "cloud storage", "file backup"]
}
---
The mobile backup policy decides whether an automatic run may start and when an active transfer must wait. A manual run can use a temporary cellular or charging override without weakening future automation.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-backup-network-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-network-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-network-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-backup-network-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-backup-network-workflow-map-2026-10-14.webp" alt="Network policy flow comparing automatic Wi-Fi waits with the manual mobile-data confirmation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Choose the standing policy in Backup settings, then decide separately whether a manual run may override it once. <a class="workflow-map-full" href="/screenshots/mobile-backup-network-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-network-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-network-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Settings → Backup** and find **When to back up**.
2. Keep **Wi-Fi only** on to prevent automatic starts over mobile data. Turn it off only when recurring cellular use is acceptable; the change saves immediately.
3. Enable **Only while charging** if automatic runs should wait for external power. Even with that switch off, an unplugged device below the built-in 20% battery floor will not start a new run.
4. Return to the Backup tab and inspect the attention text. **Waiting for Wi-Fi** means automatic backup is paused on cellular; **You're offline** means it resumes after connectivity returns.
5. To make a one-time cellular run while **Wi-Fi only** remains on, press **Backup now**, review **Back up over mobile data this time?**, and choose **Use mobile data**. The dialog explains that only this run is overridden.
6. A manual **Backup now** also ignores **Only while charging** for that run. Stop or queue completion withdraws the temporary override; later automatic activity uses the saved switches again.

If connectivity disappears, Wi-Fi drops, or the charger is removed during an applicable run, uploads pause with **offline**, **waiting for Wi-Fi**, or **waiting for charger**. The scanner waits for up to 5 minutes. If the condition has not recovered, that run ends cleanly, keeps its unfinished ledger rows pending, and lets a later run resume.

The 20% battery rule is checked only before starting while unplugged. It does not interrupt a transfer already underway when the battery crosses 19%. The operating system may still delay or stop background work according to its own battery and scheduling rules.

When the app is active, Android uses a data-sync foreground service for backup work. iPhone can hand supported uploads to the native background transport when **Upload while locked** is enabled. Expo Go does not provide that native iOS transport.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile platform cards used to obtain the native app with network-aware backup controls." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>The released native app supplies the network, battery, and background APIs used by these controls. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

An automatic run begins only on an allowed connection and power state. A confirmed manual exception proceeds on cellular or without a charger, while **Wi-Fi only** and **Only while charging** keep their saved values for the next automatic run.

If **Backup now** reports **Allow photo access first - see the list at the top of this screen.**, fix library permission before testing the network policy. **Backup failed: <message>** identifies a request-level problem; storage, membership, or upload-permission failures can also place automatic backup in a paused state until corrected and retried.

## Related guides

- [Begin a Wi-Fi-first phone backup](/files/mobile-photo-backup)
- [Review every backup control](/files/mobile-backup-settings)
