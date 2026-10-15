---
{
  "articleId": "hc-sessions-lost-device-response",
  "locale": "en",
  "revision": 5,
  "title": "Secure Dosya after losing a signed-in device",
  "summary": "Secure Dosya from a trusted device after a phone or computer is lost by changing the password, revoking credentials, and checking 2FA right away.",
  "category": "account",
  "articleSlug": "sessions-lost-device-response",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/api/src/pages/api/me/password.ts, apps/api/src/pages/api/me/sessions/index.ts, and apps/api/src/pages/api/me/sessions/[id].ts. Production session behavior was not exercised.",
  "related": [
    "hc-sessions",
    "hc-revoke-other-sessions"
  ],
  "keywords": [
    "sessions lost device response",
    "Active-session management details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Use a device you still control. A password change keeps the credential making that change and revokes every other browser and mobile credential immediately, including linked file-provider children.

<figure class="help-screenshot"><a href="/screenshots/sessions-lost-device-response-help-workflow-2026-10-14.webp"><img src="/screenshots/sessions-lost-device-response-help-workflow-2026-10-14.webp" alt="Lost-device response map from trusted-browser password change through session revocation, replacement 2FA, and remote erase." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The response order preserves the trusted caller, ends other Dosya credentials, replaces the lost factor, and addresses local device copies separately. <a href="/screenshots/sessions-lost-device-response-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Sign in on a trusted browser. If the lost device held your authenticator, use one unused recovery code.
2. Open **Profile → Password & 2FA → Change password**. Enter the current password and a new password of at least 8 characters; it must differ from the current one.
3. Confirm **Password changed — Your password has been updated.** Dosya deletes other web sessions, revokes other mobile token families, and clears their caches.
4. Open **Profile → Sessions**. If more than one credential remains, select **Revoke all other sessions** and wait for **Sessions revoked — You are now signed out everywhere else.**
5. For a lost authenticator phone, re-enroll on the replacement and regenerate recovery codes after confirming access.
6. Check security notifications for password, session, sign-in, or email changes. Contact support if an identity change was not yours.
7. Use the device vendor's remote-lock and erase tools for local files; Dosya cannot wipe the hardware.

<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Active sessions page showing two Unknown device rows, Firefox and Brisbane metadata, one Current badge, and Revoke all other sessions." width="1160" height="730" loading="lazy" decoding="async" /></a><figcaption>The visible page presents a bulk-revocation button above two browser credentials and marks the lower one Current. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

Revocation cannot retract files already downloaded to the lost device. It blocks future authenticated requests once the deleted cookie or revoked token is presented.

## Expected result

The trusted caller stays signed in, every other Dosya credential is ended, and the lost device fails on its next authenticated request. Replacement 2FA works and old recovery codes no longer grant access after regeneration.

## Related guides

- [Review active sessions](/account/sessions)
- [Revoke other sessions](/account/revoke-other-sessions)
