---
{
  "articleId": "hc-sessions-verify-revoked-device",
  "locale": "en",
  "revision": 5,
  "title": "Verify that a revoked session is closed",
  "summary": "Confirm a revoked Dosya browser or mobile credential disappears, fails its next authenticated request, and requires a fresh sign-in on every device.",
  "category": "account",
  "articleSlug": "sessions-verify-revoked-device",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/api/src/pages/api/me/sessions/[id].ts, apps/api/src/pages/api/me/sessions/index.ts, and apps/api/src/lib/mobile-auth.ts. Production session behavior was not exercised.",
  "related": [
    "hc-sessions",
    "hc-revoke-other-sessions"
  ],
  "keywords": [
    "sessions verify revoked device",
    "Active-session management details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
A successful revocation removes a browser session row or marks a mobile token family revoked, then invalidates the matching authentication cache. The target cannot be the credential currently making the request.

<figure class="help-screenshot"><a href="/screenshots/sessions-verify-revoked-device-help-workflow-2026-10-14.webp"><img src="/screenshots/sessions-verify-revoked-device-help-workflow-2026-10-14.webp" alt="Revocation-verification map from refreshed session list through an authenticated request on the removed device and sign-in failure." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Verification requires both an absent target row and a rejected server request because a previously rendered screen can remain visible. <a href="/screenshots/sessions-verify-revoked-device-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. On the trusted device, reload **Profile → Sessions** after revocation and check that the target row no longer appears.
2. If you used **Revoke all other sessions**, confirm the list retains **Current**. It may also preserve extensions linked to the caller because they represent the same device.
3. On the revoked device, refresh a private route or attempt another authenticated action. An already rendered screen can remain visible until it contacts the server; visibility alone is not proof of access.
4. Expect a sign-in requirement or authentication failure on that next request. A revoked phone loses its token family, including linked Files-extension credentials.
5. Review the **A session was signed out** in-app notice or push. It names the target using its stored browser/OS, age, and location or IP fallback; this routine event is not emailed.
6. If a row returns after a new login, compare its new time. Signing in legitimately creates a new credential.

<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Active sessions page containing two Unknown device browser rows, a Current badge, and the Revoke all other sessions button." width="1160" height="730" loading="lazy" decoding="async" /></a><figcaption>The pictured list contains two Firefox credentials with location, IP, and active-now details beneath the bulk-revocation control. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

Revocation stops future server access but cannot recall content already cached or downloaded on that machine. Use device-level remote erase when local possession is the concern.

## Expected result

The revoked entry is absent on a fresh list, its old credential cannot complete an authenticated request, and a new login is required. A single-device notice describes the credential ended rather than the trusted device that initiated revocation; bulk revocation instead reports the combined device count.

## Related guides

- [Review active sessions](/account/sessions)
- [Revoke other sessions](/account/revoke-other-sessions)
