---
{
  "articleId": "hc-mobile-contacts-export-vcard",
  "locale": "en",
  "revision": 5,
  "title": "Export backed-up contacts as a vCard on mobile",
  "summary": "Create the mobile contact backup VCF, identify its exact filename and contents, and verify the queued cloud copy before using it for transfer or restore.",
  "category": "files",
  "articleSlug": "mobile-contacts-export-vcard",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/contacts.tsx, apps/mobile/src/contacts/backupContacts.ts, apps/mobile/src/contacts/contactsSource.ts, apps/mobile/src/contacts/vcard.ts, apps/mobile/src/backup/folders.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-contacts-backup",
    "hc-contacts-restore"
  ],
  "keywords": [
    "mobile contacts export vcard",
    "Advanced mobile contacts workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
The Contacts screen exports the phone address book as one vCard 3.0 file and queues that file for upload. There is no separate **Export vCard** button or local destination picker on this screen.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-contacts-export-vcard-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-contacts-export-vcard-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-contacts-export-vcard-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-contacts-export-vcard-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-contacts-export-vcard-help-workflow-2026-10-14.webp" alt="Mobile vCard workflow showing Contacts permission, Back up contacts now, creation of contacts-YYYY-MM-DD.vcf, queued upload, and cloud verification in the active workspace." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Mobile vCard workflow: grant contact access, confirm the active workspace, create the dated VCF with **Back up contacts now**, wait for upload, and verify the cloud file. <a class="workflow-map-full" href="/screenshots/mobile-contacts-export-vcard-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-contacts-export-vcard-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-contacts-export-vcard-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The generated name is `contacts-YYYY-MM-DD.vcf` using the phone’s local calendar date. Repeating the action on the same day creates another upload item with the same filename; cloud versioning or collision behavior is handled by the upload service.

## Steps

1. Open **Settings** and select **Contacts** in the active workspace.
2. Tap **Allow contacts access** if the primer is shown; after a denial, grant permission in system Settings and return.
3. Check the workspace name before export, because the backup destination is the active workspace.
4. Tap **Back up contacts now** and note the **Backing up _N_ contacts** message.
5. Watch the upload dock until the VCF finishes instead of treating the enqueue toast as upload completion.
6. In cloud **Files**, open the Contacts backup folder and confirm the dated VCF exists and shows the expected contact cards.

### Data and timing

Dosya reads the address book in 100-contact pages. It serializes names, phone numbers, email addresses, and their labels with CRLF line endings and vCard 3.0 escaping. The temporary VCF is written to the app cache, then queued as MIME type `text/vcard`.

The **Last backup** timestamp is saved when the upload is queued, before the remote transfer necessarily completes. Use the upload dock and the cloud file as the decisive checks. If permission fails, the screen reports **Contacts permission was denied**; other failures use the source error or **Contacts backup failed**.

This backup path produces a workspace file. To place a copy in Files, Drive, Mail, or another app, open the completed VCF in Dosya and use the viewer’s save/share controls, subject to its lock mode.

## Expected result

A single dated VCF containing the contacts returned by the phone is queued into the active workspace’s Contacts folder. It is ready to transfer or restore only after its upload completes and the cloud copy opens successfully.

## Related guides

- [Back up contacts](/files/contacts-backup)
- [Restore contacts](/files/contacts-restore)
