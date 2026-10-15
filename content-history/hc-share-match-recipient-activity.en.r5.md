---
{
  "articleId": "hc-share-match-recipient-activity",
  "locale": "en",
  "revision": 5,
  "title": "Match a recipient to sharing activity",
  "summary": "Use recipient verification and the anonymous access log correctly, without assigning individual opens or downloads to a named person without evidence.",
  "category": "sharing",
  "articleSlug": "share-match-recipient-activity",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally on 2026-10-14 against apps/web/src/pages/share-analytics.tsx, apps/api/src/pages/api/shares/[id]/analytics.ts, and apps/api/src/lib/repo/repo-d1/shares.unit.test.ts. Production status: no recipient activity was generated.",
  "related": [
    "hc-share-analytics",
    "hc-link-activity"
  ],
  "keywords": [
    "share recipient activity",
    "file link access log",
    "recipient verification analytics",
    "sharing privacy"
  ]
}
---
Dosya can show which invited addresses completed verification and can separately show anonymous link events. It cannot prove that a particular **Opened** or **Downloaded** row belongs to one named recipient. Use the two panels together without joining facts the product does not store.

<figure class="help-screenshot"><a href="/screenshots/share-match-recipient-activity-help-workflow-2026-10-14.webp"><img src="/screenshots/share-match-recipient-activity-help-workflow-2026-10-14.webp" alt="Analytics interpretation workflow separating named recipient verification from anonymous open and download event rows." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Confirm who passed the inbox challenge in Invited, then treat Access log rows as anonymous activity rather than named-person evidence. <a href="/screenshots/share-match-recipient-activity-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## What the data means

For a restricted link, **Invited** lists each email as **Verified** or **Not opened**. The verified timestamp is written when that address's one-time code succeeds. It proves control of the inbox and that the person reached the share gate; it is not a timestamp for every later open.

The **Access log** stores event time, **Opened** or **Downloaded**, an eight-character prefix of a hashed network address, country when the edge supplied it, and parsed device information. It has no recipient-email column. The 30-minute recipient grant cookie also does not name the verified address in an event, so even restricted traffic remains unattributed row by row.

For a public link there is no invited list at all. Anyone with the URL may use it, and the analytics headline correctly says that the owner does not know who those people are.

## Steps

1. Open **Shared**, select the relevant link, and enter its analytics page.
2. Confirm whether **Access** says **N invited people** or **Anyone with the link**. Only the first mode has named verification data.
3. On a restricted link, inspect **Invited**. Record only whether each address is **Verified** or **Not opened**.
4. Review the headline showing how many invited people verified. Do not treat that count as total visits.
5. Use **7 days**, **30 days**, or **90 days** to inspect first opens and downloads in the chosen chart window.
6. Under **Access log**, filter with **All**, **Opens**, or **Downloads**. Read the opaque visitor handle, country, and device as event context.
7. If an individual recipient asks whether their download succeeded, use their own confirmation or a separate controlled link. Do not assign an anonymous row to them based only on timing, location, or device.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Dosya sharing analytics with the Invited recipient panel beside an anonymous Access log of open and download events." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The side panel answers who verified; the event table answers what happened, when, and from which opaque visitor handle. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Counting and privacy limits

An open is deduplicated by the stored address hash, so the chart reports first opens rather than repeat visits. Downloads are not deduplicated. Reach breakdowns read at most 5,000 visitors and display **Counted from the first 5,000 visitors.** when truncated. The access-log API returns 25 rows at a time; the screen states how many loaded events it is showing out of the total.

Country can be `-` when the edge could not place an event or the row predates country capture. Browser and device labels are inferred from the recorded user agent. None of these fields is reliable enough to turn the anonymous visitor handle into an identity.

Viewing this page requires **View own shared links** for the creator's record or **View all shared links** for another member's record, plus workspace and target scope. A hidden target returns the same not-found response as an unknown link.

## Expected result

The review distinguishes verified invitees from anonymous access events. Reports may state who completed email verification and how the link was used, but they do not attribute a specific open or download to a named person.

## Related guides

- [Read sharing analytics](/sharing/analytics)
- [Read link activity](/sharing/link-activity)
