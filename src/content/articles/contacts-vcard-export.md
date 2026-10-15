---
{
  "articleId": "hc-contacts-vcard-export",
  "locale": "en",
  "revision": 6,
  "title": "Export contacts as a vCard",
  "summary": "Create Dosya’s mobile vCard export, understand its supported fields and cloud destination, then download or share the verified file with care.",
  "category": "files",
  "articleSlug": "contacts-vcard-export",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/mobile/src/contacts/backupContacts.ts, apps/mobile/src/contacts/vcard.ts, apps/mobile/app/contacts.tsx, and apps/mobile/app/(tabs)/(files)/file/[id].tsx on 2026-10-14; production exports and shares were not created.",
  "related": [
    "hc-mobile-permissions",
    "hc-mobile-backup-settings"
  ],
  "keywords": [
    "contacts vcard export",
    "mobile contact backup",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Dosya's contact export is **Back up contacts now**. It creates one cloud vCard; the Contacts screen has no separate export picker, local-save command, or share sheet.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/contacts-vcard-export-workflow-map-2026-10-14.webp" data-light-href="/screenshots/contacts-vcard-export-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/contacts-vcard-export-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/contacts-vcard-export-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/contacts-vcard-export-workflow-map-2026-10-14.webp" alt="Contact vCard export from readable phone records to a dated Dosya file and optional Files sharing." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Create and verify the cloud vCard first, then deliberately download or share it when another destination needs the data. <a class="workflow-map-full" href="/screenshots/contacts-vcard-export-workflow-map-2026-10-14.webp" data-light-href="/screenshots/contacts-vcard-export-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/contacts-vcard-export-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Format and privacy

Output is contacts-YYYY-MM-DD.vcf in local time, uploaded as text/vcard. vCard 3.0 records use N, FN, TEL, and EMAIL. Names, nonempty numbers, and nonempty emails are included; photos, accounts, notes, organisations, addresses, birthdays, and identifiers are not.

## Steps

1. Select the workspace and review the whole address book; no subset selector exists.
2. Open **Settings** > **Contacts**, grant access, and choose **Back up contacts now**.
3. Wait beyond **Backing up N contacts** until upload completes.
4. Open **Files** > **Mobile Backup** > device name > **Contacts**.
5. Compare count and sample names. Structured mobile preview applies through 5 MiB.
6. Use normal download or **Share via…** only when role and lock rules allow it.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya phone client cards showing where the address-book vCard is created before external sharing." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>The phone creates the vCard in cloud storage; distribution uses the stored file's own actions. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A compatible vCard containing supported fields appears in the device Contacts folder. Export does not modify source records.

Download or sharing makes a plaintext copy outside workspace controls. Revoking a Dosya link cannot erase a recipient's saved copy.

## Troubleshooting

- **No Export button exists.** The backup action produces the export.
- **A property is missing.** Confirm it is a supported name, phone, or email.
- **Today's name exists.** Inspect version history because another same-name upload can update it.
- **Share via… is absent.** The file must be downloadable for this role and lock mode.
- **Import fails elsewhere.** Verify upload integrity and use a vCard 3.0-compatible app.

## Related guides

- [Mobile permissions](/account/mobile-permissions)
- [Mobile backup settings](/files/mobile-backup-settings)
