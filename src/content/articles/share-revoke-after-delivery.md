---
{
  "articleId": "hc-share-revoke-after-delivery",
  "locale": "en",
  "revision": 5,
  "title": "Revoke a sharing link after delivery",
  "summary": "Review a delivered link's access history, revoke it from Shared, and understand the permanent recipient cutoff plus the retained audit record afterward.",
  "category": "sharing",
  "articleSlug": "share-revoke-after-delivery",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally on 2026-10-14 against apps/web/src/pages/shared.tsx, apps/web/src/pages/share-analytics.tsx, apps/mobile/app/shares/[id].tsx, and apps/api/src/pages/api/shares/[id]/revoke.ts. Production status: no URL was revoked.",
  "related": [
    "hc-create-link",
    "hc-password-link"
  ],
  "keywords": [
    "revoke share link",
    "stop file sharing",
    "disable delivered link",
    "file sharing"
  ]
}
---
Revoke a link when its delivery has finished, the wrong audience received it, or access must stop before expiry. Revocation is a terminal write: the same URL cannot be restored, although its access history remains available to authorized workspace members.

<figure class="help-screenshot"><a href="/screenshots/share-revoke-after-delivery-help-workflow-2026-10-14.webp"><img src="/screenshots/share-revoke-after-delivery-help-workflow-2026-10-14.webp" alt="Delivered-link shutdown sequence showing access review, the Revoke confirmation, and the former URL returning Gone." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Inspect the activity record first, then use the irreversible control only on the link whose delivery should end. <a href="/screenshots/share-revoke-after-delivery-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Permission and scope rules

The creator may revoke their own link when their role includes **View own shared links**. A role with **View all shared links** can stop a colleague's link. Workspace membership by itself is insufficient, and a member confined to a folder subtree cannot manage a target outside that subtree. Hidden targets can make a record appear as **Share link not found** rather than disclose its existence.

Revocation is available on the web **Shared** list, on the web link analytics page, and in the mobile link detail screen. The two web confirmation dialogs use **Revoke** or **Revoke link**; mobile asks **Revoke this link?**.

## Steps

1. Open **Shared** and use **By me**, status filters, and the file name to locate the delivered URL.
2. Select the row to inspect analytics when deciding whether delivery is complete. Review **Access log**, **Opens**, and **Downloads**; the log lists events newest first.
3. Confirm the displayed file name and link status. Do not revoke a similarly named active delivery.
4. On the web list, press the row's **Revoke share link** action; from analytics use **Revoke link**. In the mobile detail screen, tap **Revoke**.
5. Read the warning that every holder loses access immediately and the operation cannot be undone.
6. Confirm **Revoke**, then wait for **Link revoked — The share link no longer works.** on web or **Revoked** on mobile.
7. Open the old URL in a signed-out window. The recipient endpoint now returns `410 Gone`; creating another link later produces a different address.

<figure class="help-screenshot"><a href="/screenshots/share-links-overview-2026-10-13.webp"><img src="/screenshots/share-links-overview-2026-10-13.webp" alt="Dosya Shared overview with active and revoked statuses plus the per-row revoke control for a delivered link." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use the status and target name together before invoking the destructive row action. <a href="/screenshots/share-links-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## After revocation

The recipient loses previews and downloads at once, even if the link had time or downloads remaining. The analytics record stays visible, the chart can mark the revoke date, and the access log survives. This retained record is why revocation should be used instead of deleting evidence after delivery.

**Already revoked** with status 409 means another session completed the action first. **You don't have permission to revoke this share link** means the role lacks the necessary own-link or all-link access. **Associated resource not found** indicates that the target needed for authorization has been removed. A failed request does not change the link.

## Expected result

The Shared record shows **Revoked**, its previous URL answers `410 Gone`, and earlier opens and downloads remain readable to members who still have permission to view that link's analytics.

## Related guides

- [Create a sharing link](/sharing/create-link)
- [Add a password](/sharing/password-link)
