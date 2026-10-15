---
{
  "articleId": "hc-share-investigate-unexpected-activity",
  "locale": "en",
  "revision": 5,
  "title": "Investigate unexpected sharing-link activity",
  "summary": "Preserve the newest event evidence, interpret anonymous visitor and country fields correctly, revoke the link, and verify access is contained.",
  "category": "sharing",
  "articleSlug": "share-investigate-unexpected-activity",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: apps/web/src/pages/share-analytics.tsx, apps/api/src/pages/api/shares/[id]/analytics.ts, apps/api/src/pages/api/shares/[id]/revoke.ts, src/components/share/ShareShell.astro, src/pages/report-abuse.astro.",
  "related": [
    "hc-share-analytics",
    "hc-link-activity"
  ],
  "keywords": [
    "share investigate unexpected activity",
    "Sharing analytics details",
    "Dosya help",
    "file sharing"
  ]
}
---
Unexpected analytics can establish that a link was opened or downloaded, but not who did it. Preserve the visible evidence and revoke before investigating attribution elsewhere.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-investigate-unexpected-activity-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-investigate-unexpected-activity-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-investigate-unexpected-activity-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-investigate-unexpected-activity-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-investigate-unexpected-activity-help-workflow-2026-10-14.webp" alt="Four-step map for recording link controls and event evidence, permanently revoking the URL, and confirming Link revoked in a private window." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Capture the privacy-limited activity evidence first, then contain the exact token and verify its permanent revoked response. <a class="workflow-map-full" href="/screenshots/share-investigate-unexpected-activity-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-investigate-unexpected-activity-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-investigate-unexpected-activity-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the link from **Shared** → **By me** and confirm its URL, access rule, password state, expiry, and **Downloads** setting in **Link controls**.
2. Choose the relevant 7-, 30-, or 90-day range and filter the newest log rows by **Opens** or **Downloads**. Record timestamp, opaque visitor handle, device label, and country or **Unknown**.
3. For restricted links, compare **Verified** recipient rows separately. A verified address proves inbox control, but no individual access-log row can be assigned to that person.
4. Note the evidence boundary: the table loads 25 newest events, repeat visits do not add first-open rows, public visitors are anonymous, and reach may be truncated after 5,000 distinct visitors.
5. Choose **Revoke**, confirm **Revoke link**, and preserve the **Revoked** timestamp. Revocation is permanent, closes the URL immediately, and keeps the analytics record.
6. Test the URL in a private window for **Link revoked**. Contact intended recipients separately; if the content or URL is abusive, the public page’s **Report abuse** link opens a form prefilled with that share URL.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Sharing activity overview with recipient access and download events." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use the activity overview to preserve event time, visitor handle, location availability, and device before permanently revoking the affected URL. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The suspicious URL is permanently closed, the available event evidence remains in analytics, and any attribution conclusion stays within the data Dosya records.

**Changing a password is available in the mobile editor, but revocation is the decisive response when continued access is unacceptable.**
**Other active links to the same content require separate review.**

## Related guides

- [Read sharing analytics](/sharing/analytics)
- [Read link activity](/sharing/link-activity)
