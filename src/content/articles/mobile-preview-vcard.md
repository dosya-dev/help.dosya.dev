---
{
  "articleId": "hc-mobile-preview-vcard",
  "locale": "en",
  "revision": 5,
  "title": "Open a vCard on mobile",
  "summary": "Preview a vCard inline on mobile within the 200 KiB text ceiling, open its contact reader, and understand the reader’s separate 5 MiB parser cap.",
  "category": "files",
  "articleSlug": "mobile-preview-vcard",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/viewer/useFilePreview.ts, apps/mobile/src/viewer/viewerModel.ts, apps/mobile/src/viewer/stages/ContactsStage.tsx, apps/mobile/src/contacts/vcardFile.ts, and apps/mobile/app/(tabs)/(files)/file/[id]/contacts.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile preview vcard",
    "Mobile document previews",
    "Dosya help",
    "cloud storage"
  ]
}
---
A `.vcf` file enters the inline contact preview only when it is no larger than 200 KiB. The first screen shows up to four cards instead of raw `BEGIN:VCARD` text; **View contact** or **View contacts** opens the searchable contact reader.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-preview-vcard-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-preview-vcard-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-preview-vcard-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-preview-vcard-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-preview-vcard-help-workflow-2026-10-14.webp" alt="Mobile vCard workflow for checking the 200 KiB inline ceiling, opening View contacts, using contact actions, and saving an unlocked file as a new version." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The workflow separates the viewer’s 200 KiB fetch ceiling from the contact reader’s later 5 MiB defensive parser limit. <a class="workflow-map-full" href="/screenshots/mobile-preview-vcard-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-preview-vcard-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-preview-vcard-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The preview shows each contact’s display name and the first phone number, email address, organisation, or **No number**. If more than four cards exist, it adds **and _N_ more**. The dedicated contact route also refuses a body above 5 MiB, but that later parser guard does not raise the viewer’s 200 KiB fetch ceiling.

## Steps

1. Open the `.vcf` file in **Files** and check that its displayed size is no more than 200 KiB for an inline contact preview.
2. Inspect the vCard preview's four-card contact peek and remaining-contact count before opening the full list.
3. Tap **View 1 contact** or **View _N_ contacts** to open the contact reader.
4. In the vCard contact reader, use its search field to find a name, phone number, email address, or organisation without importing anything into the device address book.
5. From the vCard contact reader, tap a phone number or email only when you intend to hand it to the device dialler or mail app; merely opening the VCF performs no import.
6. If the file has no lock, choose **Save changes** only when a new cloud version is intended; unchanged hidden fields remain preserved.

Full-lock files that still need a password and files above 200 KiB remain in the file viewer, where the large-text fallback offers download instead of parsing. The contact route itself has a separate 5 MiB ceiling for a direct or already-entered route. A view-only file opens read-only. A file with no lock can be edited in Dosya, but saving uploads a new VCF version; it does not silently add cards to the phone’s Contacts database.

## Expected result

A VCF within the 200 KiB viewer ceiling shows parsed contact names and usable fields without device import. Larger files stay in the download fallback, and a deliberate edit creates a new Dosya version.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Download on mobile](/files/mobile-download-file)
