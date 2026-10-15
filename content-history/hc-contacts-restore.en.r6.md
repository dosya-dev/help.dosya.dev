---
{
  "articleId": "hc-contacts-restore",
  "locale": "en",
  "revision": 6,
  "title": "Restore contacts to a phone",
  "summary": "Restore a chosen or latest vCard additively, understand duplicate and partial-failure behavior, and safely verify exact added counts on the phone.",
  "category": "files",
  "articleSlug": "contacts-restore",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/mobile/app/contacts.tsx, apps/mobile/src/contacts/restoreContacts.ts, apps/mobile/src/contacts/vcard.ts, and apps/mobile/app/(tabs)/(files)/file/[id].tsx on 2026-10-14; production address books were not modified.",
  "related": [
    "hc-mobile-permissions",
    "hc-mobile-backup-settings"
  ],
  "keywords": [
    "contacts restore",
    "mobile contact backup",
    "Dosya help",
    "cloud storage"
  ]
}
---
Contact restore adds records from a Dosya vCard. It never merges with existing people, so restoring the same backup twice can create duplicates.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/contacts-restore-workflow-map-2026-10-14.webp" data-light-href="/screenshots/contacts-restore-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/contacts-restore-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/contacts-restore-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/contacts-restore-workflow-map-2026-10-14.webp" alt="Additive contact restore with latest-backup selection, sequential inserts, partial failures, and duplicate risk." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Confirm the vCard before adding records because earlier successes are not rolled back when a later contact fails. <a class="workflow-map-full" href="/screenshots/contacts-restore-workflow-map-2026-10-14.webp" data-light-href="/screenshots/contacts-restore-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/contacts-restore-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Choose a source

**Restore from latest backup** searches the active workspace's **Mobile Backup** > current device name > **Contacts** path. It requests up to 500 items, keeps .vcf files, and picks greatest created_at. Missing content reports **No contacts backup found**. This path requires a downloadable URL.

For a specific vCard, open it in mobile Files and select **Restore to phone**. The action appears for a .vcf extension or text/vcard MIME type. View-only preview bytes can restore even when saving a copy is disabled; unlock a full lock first.

## Steps

1. Check the file's date, sample names, and count.
2. Grant Contacts permission for record insertion.
3. Choose latest restore or the selected file's **Restore to phone** action.
4. Keep Dosya active while additions run sequentially.
5. Read **Added N contacts** or partial result **Added N contacts, M failed**.
6. Verify names, phones, and emails in the phone Contacts app.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile page identifying the phone app that inserts cloud vCard records into the address book." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Restoration runs on the phone because every parsed card is handed to the device contact provider. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Each supported card becomes a new person containing parsed name, phone, and email values. Unknown properties are ignored, and one failed insertion does not stop later cards.

There is no atomic rollback or Dosya undo. Earlier additions remain on the phone; the cloud source stays unchanged. Removing additions in Contacts may sync to its provider.

## Troubleshooting

- **Permission was denied.** Enable access in device Settings.
- **No backup found.** Check active workspace and device-specific folder, or open a file directly.
- **Added 0 contacts.** Confirm complete BEGIN:VCARD and END:VCARD blocks.
- **Some failed.** There is no per-contact failure list; compare manually.
- **Restore failed.** Check reachability, lock, network, and download access before retrying, which can duplicate successes.

## Related guides

- [Mobile permissions](/account/mobile-permissions)
- [Mobile backup settings](/files/mobile-backup-settings)
