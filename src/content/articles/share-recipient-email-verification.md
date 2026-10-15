---
{
  "articleId": "hc-share-recipient-email-verification",
  "locale": "en",
  "revision": 5,
  "title": "Complete named-recipient verification",
  "summary": "Use the invited address, request a six-digit code, enter it within 15 minutes and five attempts, and recover without exposing recipient membership.",
  "category": "sharing",
  "articleSlug": "share-recipient-email-verification",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: src/components/share/ShareShell.astro, apps/api/src/pages/api/share/[token]/request-code.ts, apps/api/src/pages/api/share/[token]/verify-code.ts, apps/api/src/lib/share/recipients.ts, apps/api/src/lib/auth.ts.",
  "related": [
    "hc-unavailable-link",
    "hc-share-recipient-verification"
  ],
  "keywords": [
    "share recipient email verification",
    "Sharing-link recipient access",
    "Dosya help",
    "file sharing"
  ]
}
---
Private shares require proof of an invited inbox. Dosya always gives the same send-code response, so the page never reveals whether an address is on the recipient list.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-recipient-email-verification-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-recipient-email-verification-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-recipient-email-verification-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-recipient-email-verification-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-recipient-email-verification-help-workflow-2026-10-14.webp" alt="Four-step map for entering the invited address, reading the generic code response, verifying within 15 minutes and five attempts, and receiving a 30-minute grant." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the invited inbox and newest six-digit message, then let Verify reload the restricted share with its temporary browser grant. <a class="workflow-map-full" href="/screenshots/share-recipient-email-verification-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-recipient-email-verification-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-recipient-email-verification-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. At **This file was shared privately**, enter the exact email address that received the invitation and choose **Send code**.
2. Read the unconditional confirmation: **If address was invited, a 6-digit code is on its way. It expires in 15 minutes.** An uninvited address receives the same on-screen response but no email.
3. Open the newest **Your dosya.dev access code** message and confirm it describes the expected sender or shared item. Requesting another code replaces any still outstanding code.
4. Enter the six digits and choose **Verify** before 15 minutes pass. The code permits five wrong attempts; afterward the page requires a new code.
5. For **That code has expired. Request a new one.**, choose **Use a different email**, re-enter the address, and request again. For **That code is not correct**, clear the field and use only the newest message.
6. After success, let the page reload the share. The browser receives a 30-minute recipient grant; the sender can see that the address verified, but individual open and download rows remain anonymous.

<figure class="help-screenshot"><a href="/screenshots/password-recipient-2026-10-10.webp"><img src="/screenshots/password-recipient-2026-10-10.webp" alt="Recipient page showing the access gate that precedes a protected share." width="660" height="600" loading="lazy" decoding="async" /></a><figcaption>For a private link, the first gate is **This file was shared privately**; use the invited inbox and current six-digit code before any password prompt. <a href="/screenshots/password-recipient-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The invited address reaches the shared content with a 30-minute browser grant, and neither the request response nor the access log exposes recipient membership.

**Code requests are limited to five per link and IP in 15 minutes; code verification is limited to ten requests per link and IP in that window.**
**The code itself is single-purpose and should never be sent to the sharer or support.**

## Related guides

- [Open an unavailable link](/sharing/unavailable-link)
- [Use recipient verification](/sharing/share-recipient-verification)
