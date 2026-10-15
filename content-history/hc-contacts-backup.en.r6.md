---
{
  "articleId": "hc-contacts-backup",
  "locale": "en",
  "revision": 6,
  "title": "Back up contacts from your phone",
  "summary": "Export all readable phone contacts to a dated vCard, track the queued upload, and verify the cloud file instead of relying on the initial count.",
  "category": "files",
  "articleSlug": "contacts-backup",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/mobile/app/contacts.tsx, apps/mobile/src/contacts/backupContacts.ts, apps/mobile/src/contacts/contactsSource.ts, apps/mobile/src/contacts/vcard.ts, and apps/mobile/src/backup/folders.ts on 2026-10-14; production uploads were not started.",
  "related": [
    "hc-mobile-permissions",
    "hc-mobile-backup-settings"
  ],
  "keywords": [
    "contacts backup",
    "mobile contact backup",
    "Dosya help",
    "file transfer"
  ]
}
---
Mobile contact backup creates one cloud vCard from the full readable address book. It is a manual snapshot, not continuous synchronisation.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/contacts-backup-workflow-map-2026-10-14.webp" data-light-href="/screenshots/contacts-backup-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/contacts-backup-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/contacts-backup-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/contacts-backup-workflow-map-2026-10-14.webp" alt="Phone contact backup from permission and paged scanning through vCard creation, queueing, and cloud verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Trace the address-book scan into one dated vCard and distinguish queue acceptance from completed cloud storage. <a class="workflow-map-full" href="/screenshots/contacts-backup-workflow-map-2026-10-14.webp" data-light-href="/screenshots/contacts-backup-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/contacts-backup-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before backing up

Select the workspace first. The role must create missing folders and upload files. Destination is **Mobile Backup** > device name > **Contacts**. Dosya reuses exact-name folders.

It reads 100 contacts per page and retains names, nonempty phones, and nonempty emails. Output is vCard 3.0 with MIME type text/vcard; photos and other fields are omitted.

## Steps

1. Review the address book because there is no per-contact selection.
2. Open **Settings** > **Contacts** and grant access.
3. Select **Back up contacts now** once. The label becomes **Backing up…**.
4. Note **Backing up N contacts**. Filename is contacts-YYYY-MM-DD.vcf using local date.
5. Watch the upload queue. **Last backup** is recorded immediately after enqueueing, before server success.
6. Verify the file in the device Contacts folder. A second backup that day uses the same name and can create another version of an existing visible, unlocked file.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile cards identifying the installed app that scans contacts and queues their cloud vCard." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>The phone client scans contacts; Files and upload status establish that the export reached cloud storage. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

One vCard enters the active workspace queue and appears in its device-specific folder after completion. The source address book stays unchanged.

The export contains readable personal data. Trash retains stored bytes until permanent deletion under workspace rules.

## Troubleshooting

- **Actions are disabled.** Grant OS Contacts permission.
- **Folder creation fails.** Check the role and visibility of Mobile Backup.
- **Upload errors.** Resolve the reported policy, quota, lock, collision, or network issue.
- **Last backup changed without a file.** That timestamp proves enqueueing only; inspect queue status and file history.

## Related guides

- [Mobile permissions](/account/mobile-permissions)
- [Mobile backup settings](/files/mobile-backup-settings)
