---
{
  "articleId": "hc-mobile-contacts-restore-duplicates",
  "locale": "en",
  "revision": 5,
  "title": "Avoid duplicate contacts during restore",
  "summary": "Avoid accidental duplicate contact restores by checking the VCF and phone first, because Dosya currently adds every card without preview, merge, or dedupe.",
  "category": "files",
  "articleSlug": "mobile-contacts-restore-duplicates",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/contacts.tsx, apps/mobile/src/contacts/restoreContacts.ts, apps/mobile/src/contacts/contactsSource.ts, apps/mobile/src/contacts/vcard.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-contacts-backup",
    "hc-contacts-restore"
  ],
  "keywords": [
    "mobile contacts restore duplicates",
    "Advanced mobile contacts workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya’s contact restore has no duplicate preview, matching rule, merge option, or skip-existing control. It parses every card in the VCF and calls the operating-system add-contact API for each one.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-contacts-restore-duplicates-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-contacts-restore-duplicates-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-contacts-restore-duplicates-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-contacts-restore-duplicates-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-contacts-restore-duplicates-help-workflow-2026-10-14.webp" alt="Duplicate-safe contact workflow showing inspection before restore, the warning that existing contacts are not merged, one restore action, result counts, and phone-side cleanup." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Duplicate-safe contact workflow: inspect the VCF and current address book first, restore once, read exact counts, and clean up in Contacts because Dosya does not deduplicate. <a class="workflow-map-full" href="/screenshots/mobile-contacts-restore-duplicates-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-contacts-restore-duplicates-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-contacts-restore-duplicates-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Restoring the same file twice can create a second copy of every contact. A partial restore can also leave some contacts added and others failed, so immediately retrying the whole file may duplicate the successful subset.

## Steps

1. Open the VCF in Dosya and use **View _N_ contacts** to inspect its count, names, phone numbers, and email addresses.
2. Compare several distinctive entries with the phone’s Contacts app before starting.
3. Confirm the active workspace and the intended VCF; the Contacts screen otherwise chooses the newest backup automatically.
4. Tap **Restore from latest backup** or **More** → **Restore to phone** only once.
5. Record the exact **Added _N_ contacts, _M_ failed** result before deciding whether any follow-up is safe.
6. Use the phone’s Contacts duplicate-management tools to review and merge additions; Dosya cannot reverse or merge the batch.

### What happens during a partial failure

Contacts are processed sequentially. Each successful add remains on the phone. A failed add increments the failed count, and the loop continues with the next card. There is no transaction or automatic rollback.

Before retrying, identify which entries appeared in the Contacts app and which did not. If the cause was a permission denial, enable Contacts access first; repeating the restore without checking the successful subset can multiply entries.

### Limits of the comparison

The backup path stores names, phones, emails, and labels. It does not carry a durable Dosya contact ID that could prove two cards represent the same person. Similar names with different phone numbers are therefore not safe to merge automatically.

## Expected result

Every parsable card Dosya can add becomes a new phone contact, and the toast reports successes and failures. Existing contacts remain untouched, but duplicates are possible and must be reviewed or merged with the phone’s Contacts tools.

## Related guides

- [Back up contacts](/files/contacts-backup)
- [Restore contacts](/files/contacts-restore)
