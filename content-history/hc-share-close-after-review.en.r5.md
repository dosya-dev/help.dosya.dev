---
{
  "articleId": "hc-share-close-after-review",
  "locale": "en",
  "revision": 5,
  "title": "Close a sharing link after review is complete",
  "summary": "Preserve the activity evidence you need, revoke the correct sharing link, and verify its URL returns the permanent revoked state without deleting logs.",
  "category": "sharing",
  "articleSlug": "share-close-after-review",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: apps/web/src/pages/shared.tsx, apps/web/src/pages/share-analytics.tsx, apps/api/src/pages/api/shares/[id]/revoke.ts, src/components/share/ShareShell.astro.",
  "related": [
    "hc-create-link",
    "hc-share-delivery-audit"
  ],
  "keywords": [
    "share close after review",
    "Sharing-link delivery lifecycle",
    "Dosya help",
    "file sharing"
  ]
}
---
Revoking is permanent. It disables the selected share URL immediately but does not delete its analytics record or the underlying file, folder, or bundle.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-close-after-review-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-close-after-review-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-close-after-review-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-close-after-review-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-close-after-review-help-workflow-2026-10-14.webp" alt="Four-step map for matching the exact share, preserving analytics, confirming irreversible revocation, and testing the old URL for Link revoked." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Save the needed owner-side evidence before revoking the exact token, then prove the public URL returns its permanent closed state. <a class="workflow-map-full" href="/screenshots/share-close-after-review-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-close-after-review-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-close-after-review-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Shared** → **By me**, select the exact link, and compare its displayed name and URL. You need `view_all_shares`, or `view_own_shares` plus ownership; folder scope still applies.
2. Review the link’s analytics before closure. Record the chosen 7-, 30-, or 90-day view and the newest event rows you need; revocation does not erase them, but preserving context first helps later review.
3. Choose **Revoke** on the analytics page, read **Revoke this link**, and confirm **Revoke link**. The dialog states that holders lose access immediately and the action cannot be undone.
4. Wait for **Link revoked**. The page changes to **Revoked**, removes **Copy link**, and offers **Create a new link**; a second revoke returns **Already revoked**.
5. Open the old URL in a private window. It must show **Link revoked** and **The owner revoked this share link.**; the public API returns HTTP 410.
6. Return to **Shared** and keep the revoked row as the audit record. Create a different link only if access should resume; the old token never becomes active again.

<figure class="help-screenshot"><a href="/screenshots/share-created-2026-10-10.webp"><img src="/screenshots/share-created-2026-10-10.webp" alt="Share creation confirmation with the URL and delivery controls that identify the link later being closed." width="454" height="331" loading="lazy" decoding="async" /></a><figcaption>Record the exact URL when it is created so the later **Revoke** action and private-window test target the intended link. <a href="/screenshots/share-created-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The old URL is permanently unusable, analytics and the revocation timestamp remain visible, and the source content stays in its workspace.

**Revocation is link-specific; other share links to the same content keep working.**
**A missing target can prevent owner-side revocation because the route requires its associated resource.**

## Related guides

- [Create a link](/sharing/create-link)
- [Audit delivery](/sharing/audit-delivery)
