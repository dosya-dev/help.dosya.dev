---
{
  "articleId": "hc-share-preview-branding",
  "locale": "en",
  "revision": 6,
  "title": "Preview workspace sharing branding",
  "summary": "Compare desktop and phone share pages, a locked recipient view, and the real email template before saving workspace branding for recipients.",
  "category": "sharing",
  "articleSlug": "preview-branding",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed from local preview implementation and endpoint tests: apps/web/src/pages/settings/branding.tsx; apps/web/src/pages/settings/branding-share-preview.tsx; apps/web/src/pages/settings/branding.test.tsx; apps/api/src/pages/api/workspaces/[id]/branding/preview-email.ts; apps/api/src/pages/api/workspaces/[id]/branding/preview-email.unit.test.ts. The released production preview was not exercised.",
  "related": [
    "hc-share-branding",
    "hc-create-link"
  ],
  "keywords": [
    "branding preview",
    "share page preview",
    "workspace logo",
    "file sharing"
  ]
}
---
The Branding preview shows recipient presentation without creating a share, emailing anyone or changing access. Members with **access_settings** can open its local **Share page** view even when the page is read-only; eligible editors can also preview unsaved changes and request the server-rendered **Email** view.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/preview-branding-workflow-map-2026-10-14.webp" data-light-href="/screenshots/preview-branding-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/preview-branding-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/preview-branding-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/preview-branding-workflow-map-2026-10-14.webp" alt="Branding preview workflow with Share page and Email tabs, Desktop and Phone widths, and the Password protected test state." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use each preview tab and width to inspect the current draft, then save before comparing it with a signed-out share. <a class="workflow-map-full" href="/screenshots/preview-branding-workflow-map-2026-10-14.webp" data-light-href="/screenshots/preview-branding-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/preview-branding-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the Dosya web app, go to **Workspace Settings → Branding**. Loading the page requires workspace membership and **access_settings**. The **View** button remains available when `can_edit` is false, including a lapsed plan, an administrative revocation or a role without **manage_branding**; those states show stored values in read-only controls.
2. If editing is allowed, enter a proposed **Brand name**, choose the six-digit **Brand colour**, upload the logo if needed, and set **Brand the share page**, **Brand email**, and **Hide the Save to dosya button**. A read-only viewer instead previews the stored form state. When the name is blank, the sample uses Dosya presentation because incomplete branding would not resolve for real recipients.
3. Select **View** in the **Preview** panel. The modal is titled **What recipients see** and explains: **Sample file and sender. Unsaved changes are shown; recipients see them only after you save.**
4. Choose **Share page**, then alternate **Desktop** and **Phone**. Phone sets the simulated page to 390 pixels. Check the sample file `Q4-report.pdf`, its 2.4 MB size and PDF type, the sender name, **Download**, **Copy link**, and—unless hidden—**Save to dosya**. The simulated share page deliberately uses Dosya’s dark recipient-page token scope in both application themes, so use the width controls rather than expecting separate light and dark share designs.
5. Turn on **Password protected**. The locked sample must show **This file is password protected**, a password field, **Unlock**, and **No account needed.** Before unlock, the filename, size and sender are concealed while allowed brand elements stay visible. Turn the switch off to return to the open sample.
6. Select **Email**. Unlike the local Share-page simulation, this tab posts the draft to the server and requires **access_settings**, **manage_branding**, a paid branding entitlement and a non-revoked workspace. An ineligible request reports **Branding is available on paid plans.**; a revoked workspace reports **Branding has been disabled for this workspace. Contact support.**; a missing edit permission reports **You do not have permission to change branding**. The request waits 400 ms after the latest draft change. During it, the pane says **Rendering the email...**; a failed render becomes **Could not render the email preview.**
7. Inspect the email masthead, logo and workspace name. Brand colour is not applied to email, and the sample remains black and white. The sender address stays `noreply@dosya.dev`; previewing does not transmit the sample message.
8. Close the modal, correct any clipped name, low-contrast accent or unsuitable logo, and reopen **View**. When the result is acceptable, choose **Save branding** on the settings page. Uploading or removing a logo has already taken effect; the name, colour and switches need this save.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Workspace policy screen used beside the branding preview to confirm recipient security controls remain configured." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Review access policy separately because the visual preview demonstrates presentation rather than password, recipient, expiry or download enforcement. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What the preview does not prove

The Share-page sample is a browser-local mirror of the recipient screen, while the Email panel comes from the server template renderer and is limited to authorized editors. Neither panel creates access-log rows, sends an email, writes branding settings, validates a real link token or confirms delivery to a mailbox. A preview also cannot show how an unusually long real filename will fit because its sample values are fixed.

## Verify after saving

Create or reuse a non-confidential live link, open it signed out, and compare its workspace name, logo, accent, buttons and locked state with the draft. If email branding matters, send that test share to an address you control and check the received masthead, sender name and `noreply@dosya.dev` address. This live comparison is the evidence that saved settings, entitlement and recipient delivery agree.

## Expected result

The two preview tabs display the current draft without sending content or changing the workspace. After **Save branding**, permitted recipient surfaces use that draft while their access protections continue to operate independently.

## Related guides

- [Customize sharing-page branding](/sharing/custom-branding)
- [Create a sharing link](/sharing/create-link)
- [Read sharing-link analytics](/sharing/analytics)
