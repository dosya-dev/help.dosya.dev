---
{
  "articleId": "hc-wordpress-backups",
  "locale": "en",
  "revision": 4,
  "title": "Manage WordPress backups",
  "summary": "Review connected sites, start and verify a backup, keep retained copies understandable, and disconnect without deleting completed backups.",
  "category": "integrations",
  "articleSlug": "wordpress-backups",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-wordpress-connect",
    "hc-storage-usage"
  ],
  "keywords": [
    "WordPress backup history",
    "disconnect WordPress",
    "site backup",
    "file upload"
  ]
}
---
Connected WordPress sites have their own status and backup history. Verify completed copies before changing connection state.

Connected-site status, completed backups and future schedules are separate states. Disconnecting a site should be planned after confirming which stored copies remain.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-backups-workflow-map-2026-10-14.webp" data-light-href="/screenshots/wordpress-backups-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/wordpress-backups-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-backups-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-backups-workflow-map-2026-10-14.webp" alt="Four-step interface map for manage wordpress backups, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/wordpress-backups-workflow-map-2026-10-14.webp" data-light-href="/screenshots/wordpress-backups-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/wordpress-backups-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: manage wordpress backups

1. Open the WordPress integration.
2. Choose the exact connected site.
3. Review its current status and backup controls.
4. Start or inspect a backup.
5. Verify a completed backup in its destination.
6. Disconnect only after confirming kept copies and future schedule behavior.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya integration setup page showing the verified connection values and guidance used by an automation client." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Copy connection values from the current integration page and keep secrets private. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Open the backup destination and inspect a recent completed set. Confirm its site, time and representative files before changing retention or connection state.

## Expected result

The manage wordpress backups workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Understand storage usage](/uploading/storage-usage)
