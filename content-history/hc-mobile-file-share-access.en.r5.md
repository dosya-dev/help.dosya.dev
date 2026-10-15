---
{
  "articleId": "hc-mobile-file-share-access",
  "locale": "en",
  "revision": 5,
  "title": "Share a mobile file with the correct access",
  "summary": "Create a mobile share with the correct expiry, recipient, password, view-only, metadata, and download-limit settings, then verify the live link.",
  "category": "files",
  "articleSlug": "mobile-file-share-access",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/share/CreateShareSheet.tsx, apps/mobile/src/share/expiry.ts, apps/mobile/src/share/payload.ts, apps/mobile/src/share/api.ts, apps/mobile/src/lib/validationPolicy.generated.ts, apps/mobile/app/(tabs)/(files)/file/[id]/share.tsx, apps/mobile/app/shares/index.tsx, apps/mobile/app/shares/[id].tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile file share access",
    "Mobile file handling details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Mobile sharing has two delivery modes: **Get a link** creates a URL you copy or hand to another app, while **Send by email** can restrict access to named recipients who verify with a one-time code.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-file-share-access-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-file-share-access-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-file-share-access-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-file-share-access-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-file-share-access-help-workflow-2026-10-14.webp" alt="Mobile share workflow showing link or email delivery, access controls, link creation, server-record verification in Shares, and a signed-out recipient test." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Mobile share workflow: choose link or email delivery, set access controls, create the share, verify its server record in **Shares**, and test the recipient experience. <a class="workflow-map-full" href="/screenshots/mobile-file-share-access-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-file-share-access-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-file-share-access-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The default expiry comes from the workspace when configured; otherwise the sheet starts at 7 days. Presets are **1 hour**, **24 hours**, **7 days**, **30 days**, **90 days**, **Pick a date**, and **Never**.

## Steps

1. Open the file, choose **Link**, and select **Get a link** or **Send by email**.
2. Set **Expires**; a custom date must be picked before submission, and expiry cannot exceed 3,650 days.
3. For email delivery, add every recipient and enable **Only these people can open it** when forwarding must not grant access.
4. Configure **Password protect**, **View only - no downloads**, **Remove photo metadata**, and a whole-number **Download limit** as required.
5. Create or send the share; correct any exact validation message instead of weakening an unintended control.
6. Copy the URL from **Link is live**. Open **Settings** → **Shares**, choose the new link, verify its server settings, then test it signed out.

### What each control guarantees

A password must contain at least 8 characters. **View only - no downloads** removes the download button and serves images as reduced previews, but anything visible can still be screenshotted. When view-only is enabled, the download-limit field is hidden because no downloads are allowed.

**Remove photo metadata** strips EXIF, XMP, and IPTC information such as location, camera, and capture time from photos served through the share; the stored original remains unchanged. A download limit must be a whole number of at least 1 and makes the link stop after that many downloads.

Recipient restriction exists only in the email flow. Without it, anyone who obtains the URL can open it. Folder shares also warn how many hidden or locked items stay out of the link.

### Exact validation messages

The sheet can report **Pick a date for the link to expire, or choose one of the presets.**, **Download limit must be a whole number of at least 1.**, **Enter a password, or turn password protection off.**, **Add at least one email address.**, or name an invalid email. Workspace policy can still require a password or clamp expiry. The sentence below **Link is live** is built from the local picker labels; the create response supplies the URL but no authoritative `expires_at`. A custom date can therefore appear only as **Expires**, and a policy-clamped preset can still show the requested label. Treat the link detail under **Shares** as the record of the actual server result.

## Expected result

The new link appears under **Shares** with the server-returned expiry and access rules, and a signed-out recipient test behaves accordingly. The original cloud file remains unchanged.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Download a file on mobile](/files/mobile-download-file)
