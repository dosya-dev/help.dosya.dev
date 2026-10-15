---
{
  "articleId": "hc-mobile-backup-settings",
  "locale": "en",
  "revision": 6,
  "title": "Change mobile backup settings",
  "summary": "Choose which phone media is backed up, when transfers may run, and which workspaces receive new copies without moving or replacing earlier uploads.",
  "category": "files",
  "articleSlug": "mobile-backup-settings",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified from local source in apps/mobile/app/backup-settings.tsx, apps/mobile/src/backup/settings.ts, filters.ts, policy.ts, folders.ts, cleanup.ts, and their tests. Production behavior was not queried; this revision awaits publication.",
  "related": ["hc-mobile-backup-setup", "hc-upload-states", "hc-mobile-backup-network"],
  "keywords": ["mobile backup settings", "Wi-Fi backup", "video backup", "cloud storage", "file backup"]
}
---
Mobile **Backup settings** control future scans and transfers. They do not move files already in cloud storage or restore originals removed from the phone.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-backup-settings-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-settings-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-settings-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-backup-settings-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-backup-settings-workflow-map-2026-10-14.webp" alt="Backup settings flow showing media, date, size, network, power, deletion, and workspace destination choices." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Set eligibility rules first, then confirm the next copy in its fixed Mobile Backup folder. <a class="workflow-map-full" href="/screenshots/mobile-backup-settings-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-settings-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-settings-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the mobile app, open **Settings** and choose **Backup** to reach **Backup settings**.
2. Under **What to back up**, leave **Photos**, **Videos**, or both enabled. The app prevents turning off the final enabled media type.
3. Open **Device folders** to use **Every folder** or a selected set. An include list with no selected folder backs up nothing.
4. Choose **Start from**: **Everything in my library**, **Only from today onward**, **The last 30 days**, or **The last year**.
5. Set **Skip large files** to **No limit**, **Skip files over 200 MB**, **Skip files over 1 GB**, or **Skip files over 5 GB**. This rule is applied after the original is available locally and its byte size is known.
6. Under **When to back up**, set **Automatic backup**, **Wi-Fi only**, and **Only while charging**. On iPhone, **Upload while locked** lets the native background transport continue after suspension.
7. If the account has several workspaces, use **Back up to** to select one or more. With no explicit selection, the active workspace is used. One run processes selected destinations sequentially.
8. Review **Delete originals after backup** carefully. After confirmed uploads, the operating system asks once to remove that run's originals. A declined or failed deletion is not repeated automatically, and Dosya has no in-app restore for the device copies.

There is no Save button: each switch or choice is written immediately. Changing media, date, folder, or size filters clears only not-yet-started scan rows and scan watermarks. Queued transfers, completed records, failures, and prior size skips remain recorded.

Cloud copies always go to `Mobile Backup/<device name>/Camera Roll/YYYY/MM`, based on the capture month in the phone's local time. Backup settings offer workspace selection rather than an arbitrary destination-folder picker. Your role must be able to upload files and create the missing folders in that chain.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile download choices used to install the iPhone or Android client that contains Backup settings." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Install the current mobile client for the platform whose background controls you are configuring. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The next eligible asset follows the saved media, date, size, network, power, and workspace rules. A destination change creates future copies in the new workspace; earlier cloud files stay where they were uploaded.

If a new rule appears ignored, wait for any already-queued work to finish, then run **Back up now** with a newly eligible test photo. A storage-limit, membership, or upload-permission error pauses automatic runs until the cause is fixed and a manual retry clears the pause.

Items already marked **Skipped by your size limit** remain historical `skipped_large` rows in the current mobile implementation, even after the limit is raised. The changed limit governs newly evaluated assets; use the regular Files upload flow for an already skipped original when it must be copied immediately.

## Related guides

- [Prepare automatic phone copies](/files/mobile-photo-backup)
- [Inspect ongoing phone transfers](/files/mobile-backup-progress)
- [Choose cellular or Wi-Fi transfer](/files/mobile-backup-network)
