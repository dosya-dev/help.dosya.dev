---
{
  "articleId": "hc-mobile-contacts-review-before-backup",
  "locale": "en",
  "revision": 5,
  "title": "Review contacts before mobile backup",
  "summary": "Review exactly which contact fields Dosya exports, check the phone address book first, and verify the queued vCard before treating it as a backup.",
  "category": "files",
  "articleSlug": "mobile-contacts-review-before-backup",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/mobile/app/contacts.tsx, apps/mobile/src/contacts/contactsSource.ts, apps/mobile/src/contacts/vcard.ts, and apps/mobile/src/viewer/stages/ContactsStage.tsx on 2026-10-14; production contact data was not accessed.",
  "related": [
    "hc-contacts-backup",
    "hc-contacts-restore"
  ],
  "keywords": [
    "mobile contacts review before backup",
    "Advanced mobile contacts workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya has no contact picker or preflight list. **Back up contacts now** scans every contact the operating system returns, so review the phone address book first.

<figure class="help-screenshot"><a href="/screenshots/mobile-contacts-review-before-backup-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-contacts-review-before-backup-help-workflow-2026-10-14.webp" alt="Pre-backup review of supported fields, all-contact export, queued count, and cloud vCard verification." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Review device records before the all-contact scan, then inspect the uploaded vCard instead of treating its queued count as completion. <a href="/screenshots/mobile-contacts-review-before-backup-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Included fields

Dosya requests name, first name, last name, phones, and emails in pages of 100. A missing display name becomes first plus last name, then **Unnamed**. Empty numbers or addresses are skipped; blank labels become other.

The vCard excludes source account, identifiers, addresses, organisations, birthdays, notes, relationships, photos, and custom properties. No account selector or per-contact checkbox exists.

## Steps

1. In the phone Contacts app, inspect representative names, required phone numbers and emails, and duplicates.
2. Correct unwanted or incomplete device records before exporting all readable contacts.
3. Select the target Dosya workspace, open **Settings** > **Contacts**, and grant access.
4. Select **Back up contacts now**. **Backing up N contacts** is the serialized and queued count, not upload proof.
5. After the queue finishes, open **Files** > **Mobile Backup** > device name > **Contacts**.
6. Open the dated vCard. Through 5 MiB, mobile shows up to four names, **and N more**, and a full count.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile application used for whole-address-book scanning and later vCard inspection." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use the phone client for both the address-book scan and verification of the resulting contact file. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The stored vCard contains every readable contact, limited to supported name, phone, and email fields. Preview count and sample identities match the intended address book.

Review itself changes nothing. Removing source contacts can sync through their provider, so use that provider's recovery tools when needed.

## Troubleshooting

- **No selection screen appears.** The current workflow exports the whole readable address book.
- **The count is too high.** Review linked accounts and duplicates on the phone.
- **A field is absent.** Confirm it is a supported name, telephone, or email value.
- **No file arrives.** Inspect upload permission, quota, folder, and queue errors.

## Related guides

- [Back up contacts](/files/contacts-backup)
- [Restore contacts](/files/contacts-restore)
