---
{
  "articleId": "hc-share-send-updated-settings",
  "locale": "en",
  "revision": 5,
  "title": "Send an updated sharing link after changing settings",
  "summary": "Edit a live link in the Dosya mobile app, preserve its URL, retest changed access rules, and tell existing recipients exactly what now applies.",
  "category": "sharing",
  "articleSlug": "share-send-updated-settings",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: apps/mobile/src/share/EditShareSheet.tsx, apps/mobile/src/share/api.ts, apps/mobile/src/share/payload.ts, apps/api/src/pages/api/shares/[id].ts, apps/api/src/lib/share/apply-update.ts, apps/api/src/lib/share/update.ts, apps/api/src/lib/share/access.ts, apps/api/src/lib/auth.ts, apps/web/src/pages/shared.tsx.",
  "related": [
    "hc-create-link",
    "hc-share-delivery-audit"
  ],
  "keywords": [
    "share send updated settings",
    "Sharing-link delivery lifecycle",
    "Dosya help",
    "file sharing"
  ]
}
---
The current mobile app can edit a live share in place; the web Shared page cannot. Saving keeps the same URL while replacing the selected settings.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-send-updated-settings-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-send-updated-settings-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-send-updated-settings-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-send-updated-settings-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-send-updated-settings-help-workflow-2026-10-14.webp" alt="Four-step map for opening Edit this link, changing supported mobile controls, understanding recipient-list clearing, and testing the unchanged URL in a fresh session." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Save supported changes on the existing token, account for mobile recipient-list limits and 30-minute grants, then test current rules in a clean browser. <a class="workflow-map-full" href="/screenshots/share-send-updated-settings-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-send-updated-settings-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-send-updated-settings-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the Dosya mobile app, open **Shares** → **Shared by me**, select the active link, choose **Edit**, and open **Edit this link**. The sheet states **The address stays the same. Changes apply the moment you save.**
2. Change only the intended controls: **Expires**, **Password**, **View only - no downloads**, **Who can open it**, or **Download limit**. This editor cannot add or remove invited addresses.
3. For a new password, enter at least 8 characters; leave the field blank to keep an existing password. Turning password off is refused when workspace policy requires one or when full-lock mode still applies.
4. When restricting access, the existing invited list must contain at least one address. Switching a restricted link to public clears that list, so mobile cannot re-restrict it; create a new email-restricted link when that boundary is needed again. A download limit must be at least the number already taken and no more than 10,000.
5. Choose **Save changes**. The same share token remains live; changing password resets its failed-unlock throttle, while switching to public access clears the previous recipient list.
6. Open the existing URL in a fresh private window and test the new gates and download behavior, then tell recipients what changed. A browser holding an earlier recipient or password grant can retain access for up to 30 minutes because the token is unchanged; use a clean session to test current rules.

<figure class="help-screenshot"><a href="/screenshots/share-created-2026-10-10.webp"><img src="/screenshots/share-created-2026-10-10.webp" alt="Share creation confirmation showing the URL that remains unchanged when its live settings are later edited in mobile." width="454" height="331" loading="lazy" decoding="async" /></a><figcaption>Keep using the same created URL after **Save changes**; only its enforced access settings change. <a href="/screenshots/share-created-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The existing URL applies the saved settings to fresh sessions and keeps its analytics. Previously granted browsers can retain token-bound recipient or password access for up to 30 minutes.

**The current web app exposes copy, analytics, and revoke controls but no share-settings editor.**
**Revoked links are terminal and cannot be edited back to active.**

## Related guides

- [Create a link](/sharing/create-link)
- [Audit delivery](/sharing/audit-delivery)
