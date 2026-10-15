---
{
  "articleId": "hc-mobile-contacts-account-scope",
  "locale": "en",
  "revision": 5,
  "title": "Back up only one mobile contact account",
  "summary": "Understand which contacts Dosya backs up on mobile, why there is no account selector, and how to verify the exported count before relying on the VCF.",
  "category": "files",
  "articleSlug": "mobile-contacts-account-scope",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/contacts.tsx, apps/mobile/src/contacts/contactsSource.ts, apps/mobile/src/contacts/backupContacts.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-contacts-backup",
    "hc-contacts-restore"
  ],
  "keywords": [
    "mobile contacts account scope",
    "Advanced mobile contacts workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya does not offer a Device, Google, iCloud, or other source-account selector. **Back up contacts now** reads every contact that the operating-system Contacts API returns to Dosya with the granted permission.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-contacts-account-scope-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-contacts-account-scope-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-contacts-account-scope-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-contacts-account-scope-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-contacts-account-scope-help-workflow-2026-10-14.webp" alt="Contact scope workflow showing Contacts permission, the absence of an account picker, Back up contacts now, the reported contact count, and the active workspace destination." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Contact scope workflow: grant Contacts access, confirm the active workspace, note that no source-account selector exists, back up every returned contact, and verify the count. <a class="workflow-map-full" href="/screenshots/mobile-contacts-account-scope-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-contacts-account-scope-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-contacts-account-scope-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

If the phone’s Contacts app combines several accounts, the VCF can contain entries from all of them. Account labels and account identifiers are not included in Dosya’s normalized contact model.

## Steps

1. Open **Settings**, choose **Contacts**, and read the permission explanation before tapping **Allow contacts access**.
2. If access was declined, enable Contacts permission in the phone’s system Settings and return to Dosya.
3. Use the workspace switcher before backup; the screen writes one VCF into the active workspace.
4. Review the phone’s visible contact sources outside Dosya, because this screen has no source-account filter.
5. Tap **Back up contacts now** once and wait for **Backing up _N_ contacts**.
6. Open the active workspace’s Contacts backup folder and verify the new `contacts-YYYY-MM-DD.vcf` file before treating it as a scoped backup.

### Exactly what is exported

Dosya requests contacts in pages of 100 until the operating system says there are no more. For each returned person it keeps the display name, first and last name when supplied, nonempty phone numbers, and nonempty email addresses. Missing phone or email labels become `other`; a contact with no usable name becomes **Unnamed**.

The file is vCard 3.0. Fields outside that normalized set, including the original account membership, are not produced by this backup path. The success count is the number of contacts read, not proof that they came from only one account.

### If only one account must be backed up

Use the phone’s contact-account visibility or export tools to create the desired source set before starting Dosya, then verify the generated VCF. Dosya itself cannot select or remember one address-book account. Avoid disabling or deleting contact accounts merely to alter a backup unless you understand the phone’s sync behavior.

## Expected result

One dated VCF is queued to the active workspace and the toast reports how many operating-system contacts were included. The result is an all-visible-contacts backup; it is not restricted to one Google, iCloud, Exchange, or device account.

## Related guides

- [Back up contacts](/files/contacts-backup)
- [Restore contacts](/files/contacts-restore)
