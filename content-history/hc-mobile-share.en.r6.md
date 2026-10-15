---
{
  "articleId": "hc-mobile-share",
  "locale": "en",
  "revision": 6,
  "title": "Share a Dosya file from your phone",
  "summary": "Create a protected Dosya link on iPhone or Android, confirm its live settings, then hand the URL to another app with the system share sheet.",
  "category": "sharing",
  "articleSlug": "mobile-share",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally on 2026-10-14 against apps/mobile/src/share/CreateShareSheet.tsx, apps/mobile/src/share/expiry.ts, apps/mobile/src/share/api.ts, and apps/api/src/lib/share/create.ts. Production status: no live link was created or sent.",
  "related": [
    "hc-create-link",
    "hc-password-link",
    "hc-unavailable-link"
  ],
  "keywords": [
    "share from phone",
    "mobile share link",
    "send file mobile",
    "file sharing"
  ]
}
---
The Dosya app for iPhone and Android creates the access-controlled URL first. Its final **Share** button then gives that URL to the phone's system share sheet. Messages, Mail, or another chosen app receives a link, not a second copy of the file.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-share-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-share-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-share-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-share-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-share-workflow-map-2026-10-14.webp" alt="Mobile sharing sequence from the Dosya file Share control through link policy selection and the iPhone or Android system share sheet." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Create the governed URL in Dosya before choosing the conversation or application that will carry it. <a class="workflow-map-full" href="/screenshots/mobile-share-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-share-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-share-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Requirements and choices

Your workspace role needs **Create share links**, and the file must be inside the part of the workspace that role can access. An administrator can disable share links, require an eight-character-or-longer password, or impose a maximum lifetime. Free-plan creators may have five active links; their requested lifetime is reduced to seven days when it is longer.

The mobile **Get a link** tab offers **1 hour**, **24 hours**, **7 days**, **30 days**, **90 days**, **Pick a date**, and **Never**. A workspace default preselects its own duration; without one, the app starts at seven days. A workspace maximum or the free-plan ceiling can make the saved expiry earlier than the option requested.

Optional controls include **Password protect**, **View only - no downloads**, **Remove photo metadata**, and **Download limit**. A limit must be a whole number of at least 1. View-only hides the download control and serves reduced-size image previews, but content visible on screen can still be captured.

## Steps

1. Open the intended file or folder in the Dosya mobile app and tap **Share**.
2. Leave **Get a link** selected. Use **Send by email** only when Dosya itself should mail recipients.
3. Under **Expires**, choose a preset, **Pick a date**, or **Never**. Review the displayed workspace default before changing it.
4. Enable the protection appropriate for this delivery. If **Password protect** is on, enter at least eight characters; if using **Download limit**, enter an integer of 1 or more.
5. Tap **Create link**. Wait for the **Link is live** confirmation, which summarizes expiry, password, view-only, and metadata behavior.
6. Use **Copy** when you want to paste the address yourself, scan the shown QR code for an in-person handoff, or tap **Share** to open the iOS or Android share sheet.
7. Pick the destination app and recipient there. Cancelling the system sheet leaves the Dosya link live even though no message was sent.
8. Tap **Done** after the destination app accepts the URL.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability screen showing the separate iPhone and Android application download choices." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>The same in-app link workflow is available on the published iPhone and Android clients. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## If creation is refused

- **Enter a password, or turn password protection off.** appears when protection is enabled with an empty value; a shorter value returns **Password must be at least 8 characters**.
- **Download limit must be a whole number of at least 1.** rejects zero, decimals, and non-numeric text.
- **Pick a date for the link to expire, or choose one of the presets.** means the calendar option has no saved date.
- **Share links are disabled for this workspace** requires an administrator to change workspace sharing policy.
- **The free plan allows 5 active share links at a time. Revoke one, let one expire, or upgrade for unlimited links.** means link creation stopped before the system share sheet opened.

## Expected result

Dosya displays **Link is live**, and the destination app receives the same URL shown beside the QR code. The recipient gets only the access allowed by that link's saved expiry, password, download, and metadata settings.

## Related guides

- [Create a sharing link](/sharing/create-link)
- [Add a password](/sharing/password-link)
- [Troubleshoot unavailable links](/sharing/unavailable-link)
