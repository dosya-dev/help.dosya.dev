---
{
  "articleId": "hc-share-confirm-first-access",
  "locale": "en",
  "revision": 5,
  "title": "Confirm the first recipient access",
  "summary": "Confirm a first open from sharing analytics without mistaking a hashed visitor, recipient verification, or download row for named access proof.",
  "category": "sharing",
  "articleSlug": "share-confirm-first-access",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: apps/web/src/pages/share-analytics.tsx, apps/api/src/pages/api/shares/[id]/analytics.ts, apps/api/src/pages/api/share/[token].ts, apps/api/src/pages/api/share/[token]/verify-code.ts.",
  "related": [
    "hc-create-link",
    "hc-share-delivery-audit"
  ],
  "keywords": [
    "share confirm first access",
    "Sharing-link delivery lifecycle",
    "Dosya help",
    "file sharing"
  ]
}
---
Analytics distinguishes first opens, downloads, and recipient verification. Use the correct signal: individual event rows are never attributable to a named invited address.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-confirm-first-access-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-confirm-first-access-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-confirm-first-access-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-confirm-first-access-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-confirm-first-access-help-workflow-2026-10-14.webp" alt="Four-step map for opening owner analytics, selecting a time range, checking restricted-recipient verification, and keeping anonymous events unattributed." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Confirm access with the evidence Dosya exposes while keeping invited-address verification separate from anonymous open and download rows. <a class="workflow-map-full" href="/screenshots/share-confirm-first-access-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-confirm-first-access-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-confirm-first-access-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Shared** → **By me** and select the link. The analytics page is owner-side; recipients do not receive its workspace-wide counters.
2. Choose **7d**, **30d**, or **90d** under **Access over time**. A first public open should appear within a minute; returning from the same hashed IP is not counted as another first open.
3. For a public link, inspect the newest **Opened** row, its time, opaque eight-character visitor handle, country when known, and device label. None of those fields identifies a person.
4. For a restricted link, check **Invited** for **Verified**. That timestamp proves an invited address completed its one-time code, but it is not a per-open timestamp.
5. Do not assign a specific **Opened** or **Downloaded** event to an invited address. The event table has no recipient field, and the recipient grant cookie does not identify which address verified.
6. Compare the expected time and channel with the recipient through a separate conversation. If activity is unexplained, preserve the displayed rows and revoke the link.

<figure class="help-screenshot"><a href="/screenshots/share-created-2026-10-10.webp"><img src="/screenshots/share-created-2026-10-10.webp" alt="Share creation confirmation used to copy the exact URL delivered to the intended recipient." width="454" height="331" loading="lazy" decoding="async" /></a><figcaption>Keep the created URL with the delivery record, then compare that exact link’s owner-side analytics with the recipient’s confirmation. <a href="/screenshots/share-created-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A matching first-open or verification signal appears, with named-recipient proof kept separate from anonymous access events and download counts.

The UI loads the newest 25 event rows; **Showing N of total events** discloses when older rows are outside the current table.
Country is based only on loaded events and can be **Unknown**.

## Related guides

- [Create a link](/sharing/create-link)
- [Audit delivery](/sharing/audit-delivery)
