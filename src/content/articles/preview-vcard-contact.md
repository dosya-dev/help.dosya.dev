---
{
  "articleId": "hc-preview-vcard-contact",
  "locale": "en",
  "revision": 5,
  "title": "Preview a vCard contact file",
  "summary": "Preview one or many vCard contacts, verify parsed fields, edit supported values safely, and preserve unshown contact data when saving a new version.",
  "category": "files",
  "articleSlug": "preview-vcard-contact",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/vcard-viewer.tsx, apps/web/src/lib/vcard.ts, apps/web/src/lib/vcard.test.ts and apps/mobile/src/contacts/vcardFile.ts. Production contact files were not modified and no production action was performed.",
  "related": [
    "hc-preview-files",
    "hc-archive-preview"
  ],
  "keywords": [
    "preview vcard contact",
    "Document and data previews",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya recognizes files ending in VCF or vCard before the general text viewer. The web contact view parses one or many cards and can display names, organization, title, phones, emails, addresses, URLs, birthday, notes, and an embedded photo.

<figure class="help-screenshot"><a href="/screenshots/preview-vcard-contact-help-workflow-2026-10-14.webp"><img src="/screenshots/preview-vcard-contact-help-workflow-2026-10-14.webp" alt="vCard preview workflow showing contact search, parsed fields, Edit, Save, and new-version confirmation." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Review parsed fields before choosing Edit because Save uploads a new version of the contact file. <a href="/screenshots/preview-vcard-contact-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Confirm the active workspace, filename, and selected version. Previewing alone is read-only, while **Save** in the contact editor replaces the current content with a new file version.
- Treat phone numbers, addresses, notes, birthdays, and embedded photos as personal data. Opening links can pass information to the phone, mail, map, or browser application.
- Mobile parses a vCard into its contact interface only when the file is 5 MiB or smaller; larger files avoid synchronous contact parsing. The web viewer fetches the vCard body and does not apply that mobile limit.

## Steps

1. Open the VCF or vCard file from **Files** and wait for **Loading contact…** to clear.
2. For a multi-contact file, use **Search contacts**. Search matches the displayed name, email, phone, or organization and reports **No matches** when the filter returns none.
3. Select a contact and compare its visible name, organization or title, phones, emails, address, URL, birthday, note, and photo with the source you expect.
4. Use a phone, email, map, or URL link only after checking its destination. Hover a field and choose **Copy** when you need the literal value instead.
5. To change supported fields, select **Edit**. Web editing covers **Name**, **Phone**, and **Email** rows, with phone types mobile, home, work, main, fax, or other and email types home, work, or other.
6. Select **Save**. Success reports **Saved** and **Contact saved as new version.** Address, organization, notes, photo, and other untouched properties are preserved in the serialized vCard.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya file viewer frame used to confirm a selected vCard's name and version before editing contact data." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use the surrounding viewer identity to avoid changing a same-named contact backup from another folder or version. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Errors and recovery

**This contact file couldn't be read.** appears when download fails or parsing returns no recognizable vCard entry. Download the original and look for `BEGIN:VCARD`. A matching `END:VCARD` is standard but not required by this viewer: an unterminated begun card is accepted when it contains at least one colon-delimited property, and an empty closed `BEGIN:VCARD`/`END:VCARD` block is recognized as an unnamed card.

Save initialization can report **Save failed** with **Could not start upload**; the upload step can instead say **Failed to save**. The displayed contact stays unchanged when either request fails. After a successful save, use **Versions** if you need to inspect or restore the previous file version.

## Expected result

Dosya presents the expected contacts and fields without importing them into the device address book. A successful edit creates a recoverable new cloud version while preserving fields the editor did not expose.

## Related guides

- [Preview files](/files/preview-files)
- [Inspect an archive](/files/archive-preview)
