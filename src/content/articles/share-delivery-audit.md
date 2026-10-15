---
{
  "articleId": "hc-share-delivery-audit",
  "locale": "en",
  "revision": 6,
  "title": "Audit a sensitive file delivery",
  "summary": "Check one sensitive share's audience, password, expiry, download policy, recipient verification, event evidence, and final revocation state.",
  "category": "sharing",
  "articleSlug": "audit-delivery",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified from the local share list, analytics, revoke route, public resolver, and authorization tests: apps/web/src/pages/shared.tsx; apps/web/src/pages/share-analytics.tsx; apps/api/src/pages/api/shares/[id]/analytics.ts; apps/api/src/pages/api/shares/[id]/revoke.ts; apps/api/src/lib/repo/contract/shares.contract.unit.test.ts. No live production delivery was altered.",
  "related": [
    "hc-link-activity",
    "hc-named-recipients",
    "hc-revoke-link"
  ],
  "keywords": [
    "delivery audit",
    "sensitive share",
    "link access review",
    "file sharing"
  ]
}
---
A delivery audit connects one link’s current controls with the evidence Dosya retained. It can show that an address verified a restricted share and that opens or downloads occurred, but it cannot establish who held the device or recover a downloaded copy.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audit-delivery-workflow-map-2026-10-14.webp" data-light-href="/screenshots/audit-delivery-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/audit-delivery-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audit-delivery-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audit-delivery-workflow-map-2026-10-14.webp" alt="Sensitive delivery audit workflow covering link identity, recipient restrictions, security controls, event limits, and terminal revocation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Anchor the review to one link, distinguish configuration from observed events, then end access only when the evidence and business decision support it. <a class="workflow-map-full" href="/screenshots/audit-delivery-workflow-map-2026-10-14.webp" data-light-href="/screenshots/audit-delivery-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/audit-delivery-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Shared → By me** in the browser and locate the exact delivery. Match its file name, region, expiry and status, and record the lifetime view and download counts from the row’s **Views** cell. Where similar names exist, retain the `/shared/{link_id}` route or displayed share URL as the audit key.
2. Select the row and verify the header’s item, creator and creation age. Check whether the URL is **Open to anyone with the URL** or **Restricted to N invited addresses**. For confidential material, a public link does not identify its audience, even if a password was separately communicated.
3. Read **Link controls**. Record the end or expiry time, **Password** state, **Access** mode and **Downloads** value. **View only** means the recipient UI does not allow a download; **Allowed** permits it. Analytics does not show a configured maximum, downloads remaining or the lifetime count captured from **Shared**.
4. On a restricted share, compare the **Invited** list with the approved addresses. **Verified** means that address accepted its one-time code at least once before bytes were served. **Not opened** means no verification is stored. It does not guarantee that an invitation email was delivered or read.
5. Set **Access over time** to the relevant **7d**, **30d** or **90d** period. Treat the chart as daily first opens and downloads within that window. Do not substitute it for the lifetime counts recorded on **Shared**: first opens are deduplicated, and the selected range does not filter the remaining analytics panels.
6. Inspect **Access log**. It is newest first and returns a maximum of 25 rows, with **Showing X of Y events** disclosing whether older evidence is omitted from the screen. Capture the time, **Opened** or **Downloaded** event, opaque eight-character visitor handle, country availability and parsed device label needed for your private audit note.
7. Keep recipient verification separate from events. The database does not attach an invited email address to a view/download row, so no individual access event proves which named recipient acted. Public links provide even less identity: distinct reach is derived from a non-reversible IP hash.
8. Reconcile anomalies with expiration, download policy and expected recipient timing. A country may be absent for older or unplaceable traffic, a returning hash does not add another first open, and the country summary covers only loaded access rows. Document these limits beside any conclusion.
9. If the delivery should remain available, leave the link unchanged and record its current status. If it must end, select **Revoke**, open **Revoke this link**, and read the confirmation: link holders lose access the moment you confirm, the access log is kept, and **This cannot be undone.**
10. Confirm with **Revoke link**. Success reports **Link revoked — The share link no longer works.** The public URL then returns `410 Gone`; the analytics record stays available to authorized reviewers. Revocation cannot recall files already saved on recipient devices.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Delivery evidence overview used to compare recipient verification, anonymous events, current controls, and retained history after revocation." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Record the evidence boundary along with the result: verification names an address, while individual open and download rows remain anonymous. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Roles and failures

The reviewer must be a member and remain inside any assigned folder subtree. **view_own_shares** covers a link the member created; **view_all_shares** covers another member’s delivery. A hidden or removed target returns **Share link not found** or **Associated resource not found** rather than disclosing inaccessible content.

Revocation applies the same scope and ownership rules and also requires share permission. A denied request can report **You don't have permission to revoke this share link**. If it fails in the UI, Dosya shows **Revoke failed** and the API message or **The share link could not be revoked.** Reopen analytics before retrying so you do not mistake a stale button for a completed action.

## Expected result

The audit identifies the exact delivery, records controls and qualified evidence, and leaves a clear live, expired or revoked disposition. If revoked, recipient access ends permanently while prior log rows remain for authorized review.

## Related guides

- [Read sharing-link analytics](/sharing/analytics)
- [Use named recipients](/sharing/named-recipients)
- [Review download events](/sharing/share-review-download-events)
- [Revoke a sharing link](/sharing/revoke-link)
