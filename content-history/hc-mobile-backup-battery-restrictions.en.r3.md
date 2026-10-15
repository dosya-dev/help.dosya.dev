---
{
  "articleId": "hc-mobile-backup-battery-restrictions",
  "locale": "en",
  "revision": 3,
  "title": "Review battery restrictions that pause backup",
  "summary": "Allow Dosya the required background activity or keep the app open and charging for the controlled test. Verify that the queue resumes without immediate power-policy suspension.",
  "category": "files",
  "articleSlug": "mobile-backup-battery-restrictions",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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
This guide covers **Review battery restrictions that pause backup** in Dosya. The main action is to allow Dosya the required background activity or keep the app open and charging for the controlled test; the decisive check is whether the queue resumes without immediate power-policy suspension.

<figure class="help-screenshot"><a href="/screenshots/mobile-backup-battery-restrictions-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-backup-battery-restrictions-help-workflow-2026-10-14.webp" alt="Four-step workflow map for review battery restrictions that pause backup, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for review battery restrictions that pause backup: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/mobile-backup-battery-restrictions-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Backup settings and status in the Dosya mobile app in the current released client.
- Confirm the active account and workspace, then identify device power-saving or battery-optimization settings.

## Steps: review battery restrictions that pause backup

1. Open Backup settings and status in the Dosya mobile app and confirm the active account and workspace.
2. Locate device power-saving or battery-optimization settings and verify its name or identifying details.
3. Allow Dosya the required background activity or keep the app open and charging for the controlled test.
4. Confirm that the queue resumes without immediate power-policy suspension.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile app backup overview with status and items needing attention." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Keep the device powered and test recovery with one media item before retrying the full queue. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The queue resumes without immediate power-policy suspension.

## Expected result

The controlled workflow completes and the queue resumes without immediate power-policy suspension.

## Troubleshooting

**The expected control is missing.** Return to Backup settings and status in the Dosya mobile app, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Retry failed backup items](/files/mobile-backup-retry-failed)
- [Troubleshoot background backup](/troubleshooting/mobile-background-backup)
