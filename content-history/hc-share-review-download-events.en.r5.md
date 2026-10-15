---
{
  "articleId": "hc-share-review-download-events",
  "locale": "en",
  "revision": 5,
  "title": "Review file download events for a share",
  "summary": "Filter the newest 25 access rows for downloads, compare the selected-range chart with Shared-list counts, and interpret anonymous evidence accurately.",
  "category": "sharing",
  "articleSlug": "share-review-download-events",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified against local analytics filters, endpoint limits, download counting, bundle naming, and repository tests: apps/web/src/pages/share-analytics.tsx; apps/api/src/pages/api/shares/[id]/analytics.ts; apps/api/src/lib/share/downloads.ts; apps/api/src/lib/repo/repo-d1/shares.ts; apps/api/src/lib/repo/contract/shares.contract.unit.test.ts. Production downloads were not reviewed.",
  "related": [
    "hc-share-analytics",
    "hc-link-activity"
  ],
  "keywords": [
    "share review download events",
    "share download log",
    "download activity",
    "file sharing"
  ]
}
---
The **Downloads** event filter shows downloads among the newest 25 access rows for one link. It cannot filter by file or recipient, and a row never names the person who downloaded.

<figure class="help-screenshot"><a href="/screenshots/share-review-download-events-help-workflow-2026-10-14.webp"><img src="/screenshots/share-review-download-events-help-workflow-2026-10-14.webp" alt="Download-review workflow linking one Shared-list lifetime count with the range chart, newest-25 filter, and anonymous event fields." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Capture the list-row count before opening analytics, then interpret the chart and loaded download rows within their separate scopes. <a href="/screenshots/share-review-download-events-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the web app, choose **Shared → By me** and locate the exact link. Its **Views** cell shows lifetime views and a download count underneath; record the download count before opening analytics. For a bundle, the row uses the first file as its display name, so keep the link URL or ID in your review note.
2. Check **Link controls → Downloads**. **Allowed** means recipients can download under the link’s current policy, while **View only** means the recipient interface does not provide that action. An expired or revoked URL cannot serve a new download even if the historical policy says Allowed.
3. Note that the analytics detail does not render the lifetime download count, a maximum-download setting or `downloads_left`. Return to the selected **Shared** row whenever you need to recheck its lifetime count.
4. Under **Access over time**, choose **7d**, **30d** or **90d**. The **Downloads** bars report download events within that period; unlike first opens, downloads are not deduplicated by visitor. They can differ from the list-row lifetime count when older events exist.
5. Go to **Access log** and select **Downloads**. The browser filters only the newest 25 rows fetched for the page. It has no server request for “all downloads” and no next-page control, so **Showing X of Y events** can reveal that relevant older downloads are off-screen.
6. Read each visible row across **When**, **Event**, **Visitor**, **Country** and **Device**. Event should be **Downloaded**. Visitor is an eight-character prefix of a non-reversible IP hash or `unknown`; country is the edge code when available; device is parsed from user-agent data.
7. Do not assign the event to an invited email. On restricted shares, **Invited → Verified** confirms which addresses completed a one-time code, but access-log storage does not connect an event with that address. There is no supported recipient filter or per-recipient download report.
8. If no row remains after choosing **Downloads**, distinguish “none among the 25 loaded rows” from “none ever.” Compare the selected timeline and the download count back on **Shared**. Older download rows may have fallen beyond the current access-log page.
9. For an unexpected download, compare its time and approximate device/country context with the link’s expiry, password, audience mode and **Allowed** or **View only** policy. Revoke the link if future access must end, while remembering that revocation cannot delete a copy already downloaded.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Per-link activity overview separating the selected-range download bars, Allowed or View only policy, and filtered anonymous rows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The analytics chart answers when recent downloads occurred, the rail states policy, and the table details only the loaded events. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Access and errors

Your workspace role needs **view_own_shares** for a link you made or **view_all_shares** for another creator’s link. Folder-confined members can inspect only targets inside their subtree, and hidden targets return the same missing result as unknown links.

If analytics cannot load, the page says **This share link is not available** and may show **Share link not found**, **Associated resource not found**, **You don't have permission to view share links**, or **You don't have permission to view this share link**. Use **Back to Shared** to select a visible row again.

## Expected result

You can identify the visible download rows for the chosen share and explain how they differ from the selected-range bars and the lifetime count on **Shared**. The review remains anonymous and may be incomplete once total events exceed 25.

## Related guides

- [Read sharing-link analytics](/sharing/analytics)
- [Inspect a share access event](/sharing/share-access-event)
- [Read visitor counts](/sharing/share-read-visitors)
- [Audit a sensitive delivery](/sharing/audit-delivery)
