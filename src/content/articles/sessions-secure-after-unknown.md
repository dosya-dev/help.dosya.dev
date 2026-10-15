---
{
  "articleId": "hc-sessions-secure-after-unknown",
  "locale": "en",
  "revision": 5,
  "title": "Secure your account after an unknown session",
  "summary": "Respond to an unknown Dosya session by preserving evidence, changing the password, revoking other credentials, and reviewing identity security.",
  "category": "account",
  "articleSlug": "sessions-secure-after-unknown",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/api/src/pages/api/me/password.ts, apps/api/src/pages/api/me/sessions/index.ts, and apps/api/src/lib/notifications/catalog.ts. Production session behavior was not exercised.",
  "related": [
    "hc-sessions",
    "hc-suspicious-activity"
  ],
  "keywords": [
    "sessions secure after unknown",
    "Account session and security review",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
An unknown session means someone may hold a live cookie or mobile refresh token. Work from a trusted device and preserve the notification or session details before removing access.

<figure class="help-screenshot"><a href="/screenshots/sessions-secure-after-unknown-help-workflow-2026-10-14.webp"><img src="/screenshots/sessions-secure-after-unknown-help-workflow-2026-10-14.webp" alt="Unknown-session response map from capturing device and IP evidence through Change password, bulk revocation, and 2FA review." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The remediation sequence saves the suspicious row details before ending other credentials and checking identity and factor changes. <a href="/screenshots/sessions-secure-after-unknown-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Capture the unfamiliar row's device label, browser/app label, location or IP when present, and displayed age. Keep any **New sign-in from …** email because it includes an absolute time and fuller context.
2. Check whether a VPN, travel, another browser profile, or a recently reinstalled app explains it. Do not dismiss the event solely because the city is familiar.
3. Open **Profile → Password & 2FA → Change password** and choose a new password of at least 8 characters that differs from the current one.
4. The update preserves your current credential and revokes all other web and mobile credentials. Verify the **Password changed** toast.
5. Visit **Profile → Sessions** and use **Revoke all other sessions** if an unexpected row remains.
6. Review **Profile → Identity** for email-change notices and **Password & 2FA** for an unknown method change or recovery-code regeneration.
7. Contact support if the account email changed, you cannot verify your current device, or suspicious activity continues.

<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Active sessions screen showing two Unknown device Firefox rows with Brisbane, IP addresses, active now, and Current on the lower row." width="1160" height="730" loading="lazy" decoding="async" /></a><figcaption>The captured list visibly exposes the browser, city, IP, activity text, and Current marker available for comparing the two credentials. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

Changing the password cannot erase data an intruder already downloaded. It also does not reverse file edits or shares; review workspace activity separately when the credential had time to act.

## Expected result

Only the trusted credential remains active, password and 2FA settings match your choices, and mandatory security mail records the remediation. Escalate any data-control issue with the saved device, IP, and timestamp evidence.

## Related guides

- [Review active sessions](/account/sessions)
- [Report suspicious activity](/account/suspicious-activity)
