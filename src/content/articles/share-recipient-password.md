---
{
  "articleId": "hc-share-recipient-password",
  "locale": "en",
  "revision": 5,
  "title": "Enter a sharing-link password safely",
  "summary": "Enter the sender-provided password, recover from network and lockout errors, and understand the 30-minute browser grant and full-lock privacy behavior.",
  "category": "sharing",
  "articleSlug": "share-recipient-password",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: src/components/share/ShareShell.astro, apps/api/src/pages/api/share/[token]/unlock.ts, apps/api/src/lib/unlock-throttle.ts, apps/api/src/lib/auth.ts, apps/api/src/lib/share/apply-update.ts.",
  "related": [
    "hc-unavailable-link",
    "hc-share-recipient-verification"
  ],
  "keywords": [
    "share recipient password",
    "Sharing-link recipient access",
    "Dosya help",
    "file sharing"
  ]
}
---
Password access is separate from a Dosya account. The page trims surrounding spaces, rate-limits guesses, and grants the current browser 30 minutes after a correct unlock.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-recipient-password-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-recipient-password-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-recipient-password-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-recipient-password-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-recipient-password-help-workflow-2026-10-14.webp" alt="Four-step map for confirming the password gate, obtaining the secret separately, avoiding the five-attempt lockout, and checking the 30-minute unlocked session." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Enter the separately delivered password without repeated guesses, then verify the intended content during the signed browser grant. <a class="workflow-map-full" href="/screenshots/share-recipient-password-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-recipient-password-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-recipient-password-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. At **This file is password protected** or **This file is fully locked**, confirm the brand matches the sender. Full-lock mode intentionally withholds file details until unlock.
2. Obtain the password through the separate channel agreed with the sender. Paste it into **Password**; the page trims leading and trailing whitespace.
3. Choose **Unlock** once. A wrong secret shows the API message or **Incorrect password.**; **Network error. Try again.** means the server was not reached and is safe to retry later.
4. Do not guess. Dosya allows five password attempts per share token and IP in 15 minutes, and five consecutive wrong attempts lock the link itself for 15 minutes.
5. For **Too many attempts, try again later.**, wait for the lockout or ask the sender to update the password in mobile. A password change clears the link’s stored unlock throttle.
6. After success, confirm the expected content. Dosya stores a signed 30-minute browser cookie, so refreshes skip the gate until it expires; a new private window must unlock again.

<figure class="help-screenshot"><a href="/screenshots/password-recipient-2026-10-10.webp"><img src="/screenshots/password-recipient-2026-10-10.webp" alt="Recipient password gate shown before the protected share is revealed." width="660" height="600" loading="lazy" decoding="async" /></a><figcaption>Enter the separately delivered password at this gate; a full-lock link intentionally exposes no file metadata beforehand. <a href="/screenshots/password-recipient-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The correct password reveals the intended share and grants only that browser temporary access; repeated failures stop with a named 15-minute lockout.

**Restricted-and-password-protected links require email verification before this password gate.**
**Never include the password in a problem report or send it in the same message as the share URL.**

## Related guides

- [Open an unavailable link](/sharing/unavailable-link)
- [Use recipient verification](/sharing/share-recipient-verification)
