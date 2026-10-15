---
{
  "articleId": "hc-share-recipient-download-file",
  "locale": "en",
  "revision": 5,
  "title": "Download an allowed file from a share",
  "summary": "Complete required gates, use the exact Download control, and recognize view-only, download-cap, archive-size, and interrupted-transfer outcomes.",
  "category": "sharing",
  "articleSlug": "share-recipient-download-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: apps/api/src/lib/share/access.ts, src/components/share/ShareShell.astro, apps/api/src/pages/api/share/[token]/download.ts, apps/api/src/pages/api/share/[token]/download-all.ts, apps/api/src/lib/share/downloads.ts.",
  "related": [
    "hc-unavailable-link",
    "hc-share-recipient-verification"
  ],
  "keywords": [
    "share recipient download file",
    "Sharing-link recipient access",
    "Dosya help",
    "file sharing"
  ]
}
---
After access is granted, a downloadable item shows **Download · size**. Folder pages offer a ZIP through **Download all · size**; a bundle must currently be downloaded one file at a time.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-recipient-download-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-recipient-download-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-recipient-download-file-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-recipient-download-file-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-recipient-download-file-help-workflow-2026-10-14.webp" alt="Four-step map for completing share gates, using the available file or folder download action, handling View only, and verifying the saved filename and bytes." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use only the recipient action Dosya exposes, respect archive and policy limits, and compare the completed local file with the displayed item. <a class="workflow-map-full" href="/screenshots/share-recipient-download-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-recipient-download-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-recipient-download-file-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the full share URL. If it is private, complete the invited-email code; if it is password protected, enter the sender’s password. No Dosya account is required.
2. Confirm the name, size, and file type in the top bar. In a folder or bundle, open the intended tile first if you need one file rather than the whole collection.
3. Choose **Download · size** for one item. For a folder, **Download all · size** creates an archive limited to 10,000 entries and 5 GiB. For a bundle, open and download each tile; its current dock-level **Download all** target resolves only the first member.
4. If the dock says **View only**, the page provides no download action and there is no recipient override. Ask the sender for a new downloadable link; a screen capture is still possible but is not the original file.
5. If Dosya says **This link has reached the number of downloads its sender allowed.**, do not keep retrying. The sender must raise or clear the cap in mobile, or issue a different link.
6. Wait for the browser download to finish, then compare the local filename and byte size with the page. Retry a network interruption from the same link while it remains active.

<figure class="help-screenshot"><a href="/screenshots/password-recipient-2026-10-10.webp"><img src="/screenshots/password-recipient-2026-10-10.webp" alt="Recipient gate screen shown before a protected or restricted share can expose its download controls." width="660" height="600" loading="lazy" decoding="async" /></a><figcaption>Complete the displayed access gate first; the recipient dock then reveals either the exact download action or the view-only refusal. <a href="/screenshots/password-recipient-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The allowed file or folder archive arrives with the displayed name and size; bundle members are saved individually, and policy refusals remain explicit.

A folder archive refusal names **Too many files to archive at once (max 10000)** or **Archive too large (max 5 GiB)**.
**Deleting, revoking, expiring, or region-restricting the source can make a previously valid URL unavailable.**

## Related guides

- [Open an unavailable link](/sharing/unavailable-link)
- [Use recipient verification](/sharing/share-recipient-verification)
