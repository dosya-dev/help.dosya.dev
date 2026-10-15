---
{
  "articleId": "hc-desktop-vcard-preview",
  "locale": "en",
  "revision": 5,
  "title": "Preview a vCard in the desktop app",
  "summary": "Review one or many contacts in a VCF preview, search parsed fields, copy exact values, and understand when external contact links share data.",
  "category": "desktop",
  "articleSlug": "desktop-vcard-preview",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/desktop/src/renderer/components/files/VCardView.tsx, apps/desktop/src/renderer/lib/vcard.ts, apps/desktop/src/renderer/lib/file-type.ts and apps/desktop/src/main/index.ts. Verified VCF/VCard routing, renderer-side parsing, multi-contact search fields, 1.2-second copy feedback, HTTP/HTTPS external-link policy and exact loading/error states. No dedicated desktop vCard test was found; production behavior was not re-tested.",
  "related": [
    "hc-desktop-install",
    "hc-preview-files"
  ],
  "keywords": [
    "desktop vcard preview",
    "Desktop file viewer",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
The vCard viewer fetches a `.vcf` or `.vcard` file and parses its contacts inside the desktop renderer. Reviewing or searching is read-only; it does not import contacts into an address book.

<figure class="help-screenshot"><a href="/screenshots/desktop-vcard-preview-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-vcard-preview-help-workflow-2026-10-14.webp" alt="vCard preview with multi-contact search, parsed details, copy actions, and external links." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Parsed contact cards stay read-only; clipboard and external-link actions have separate privacy effects. <a href="/screenshots/desktop-vcard-preview-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Open a contact file you are permitted to view. Treat contact details as sensitive: copying places the exact value on the system clipboard, and opening a map or website can disclose that value to an external service.

## Steps

1. Open the file and wait while the surface shows **Loading contact…**.
2. Review the selected card's name, job title, organization, phone numbers, email addresses, postal addresses, websites, birthday, note and embedded photo when those fields exist.
3. If the file contains multiple contacts, use **Search contacts**. Matching checks full name, email, phone and organization; an empty result displays **No matches**.
4. Select an address to open its HTTP/HTTPS Google Maps destination, or select a website to open it in the system browser. The desktop navigation policy blocks `tel:` and `mailto:` destinations, so use the phone or email field's copy button instead of expecting a dialer or mail app to launch.
5. Use a field's copy button when you need the literal value. The success check remains for about **1.2 seconds**.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop file browser used to choose the VCF source without importing it as contacts." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reviewing this file does not create address-book records or a new Dosya version. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

Google Maps receives the address embedded in its URL, and websites receive an ordinary browser visit. Clear the clipboard afterward when copied contact data should not remain available to other local applications.

## Expected result

The viewer separates each parsed contact and exposes only fields present in the file. No Dosya file, contact record or version is created by previewing.

## Troubleshooting

**“This contact file couldn't be read.”** means the raw request or vCard parsing failed. Confirm that the stored file is valid vCard text and that your session can access it, then reopen the preview.

If expected details are absent, inspect the source in another vCard tool; the viewer cannot display a field that was missing or malformed in the uploaded card.

If selecting a phone number or email address does nothing, that is the desktop app's external-navigation restriction. Hover the row and select **Copy** to use the value in another application.

## Related guides

- [Install the desktop app](/desktop/install-and-sign-in)
- [Preview files](/files/preview-files)
