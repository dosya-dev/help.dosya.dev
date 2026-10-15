---
{
  "articleId": "hc-mobile-contacts-restore-account",
  "locale": "en",
  "revision": 5,
  "title": "Restore contacts into the correct phone account",
  "summary": "Restore the newest workspace VCF on mobile, understand the missing account picker, and verify additions and failures in the phone\u2019s Contacts app.",
  "category": "files",
  "articleSlug": "mobile-contacts-restore-account",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/contacts.tsx, apps/mobile/src/contacts/restoreContacts.ts, apps/mobile/src/contacts/contactsSource.ts, apps/mobile/src/contacts/vcard.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-contacts-backup",
    "hc-contacts-restore"
  ],
  "keywords": [
    "mobile contacts restore account",
    "Advanced mobile contacts workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
**Restore from latest backup** adds contacts through the operating-system Contacts API. Dosya does not present a destination-account picker and does not pass a Google, iCloud, Exchange, or device account identifier when creating each person.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-contacts-restore-account-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-contacts-restore-account-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-contacts-restore-account-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-contacts-restore-account-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-contacts-restore-account-help-workflow-2026-10-14.webp" alt="Contact restore workflow showing the active workspace, Restore from latest backup, no destination-account picker, the added and failed counts, and verification in Contacts." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Contact restore workflow: confirm the workspace, restore the newest VCF, recognize that Dosya does not choose an account, read the result counts, and verify in the phone app. <a class="workflow-map-full" href="/screenshots/mobile-contacts-restore-account-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-contacts-restore-account-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-contacts-restore-account-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The phone decides where newly created contacts go according to its Contacts settings and platform behavior. Set the preferred/default contact account in the operating system before restoring if account placement matters.

## Steps

1. In the phone’s Contacts settings, review the default account used for newly created contacts.
2. Open Dosya **Settings**, select **Contacts**, and grant Contacts permission.
3. Confirm the active workspace; **Restore from latest backup** searches that workspace’s Contacts folder.
4. Tap **Restore from latest backup** once and leave the app active while contacts are added sequentially.
5. Read **Added _N_ contacts** or **Added _N_ contacts, _M_ failed**; one failed card does not stop later cards.
6. Open the phone’s Contacts app, check the target account and several restored names, phones, and email addresses.

### Which backup is chosen

Dosya lists up to 500 files in the Contacts folder, filters names ending in `.vcf`, and chooses the one with the newest `created_at` value. It does not show a preview or let you pick an older file from this button. To restore a specific VCF, open that file in Dosya and use **More** → **Restore to phone**.

### What restore creates

The simple backup parser restores display name, first and last name, phone numbers, email addresses, and their labels. Each entry is added as a Person contact. The process is additive and has no rollback; removing an unwanted result must be done in the Contacts app.

If permission is refused, Dosya reports **Contacts permission was denied**. When no Contacts folder or VCF exists, it reports **No contacts backup found**. A partial run counts failed additions rather than undoing contacts already added.

## Expected result

The selected VCF’s parsable contacts are added to the phone, with exact added and failed counts. Their account placement follows the operating system’s contact-creation behavior because Dosya has no restore-account selector.

## Related guides

- [Back up contacts](/files/contacts-backup)
- [Restore contacts](/files/contacts-restore)
