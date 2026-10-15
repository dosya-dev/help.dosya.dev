---
{
  "articleId": "hc-sessions-revoke-all-others",
  "locale": "en",
  "revision": 5,
  "title": "Revoke every other active session",
  "summary": "Keep the Current Dosya credential while revoking every other browser, mobile, and linked device session, then verify the final list and access.",
  "category": "account",
  "articleSlug": "sessions-revoke-all-others",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/web/src/pages/profile/sessions.tsx, apps/api/src/pages/api/me/sessions/index.ts, and apps/api/src/lib/notifications/catalog.ts. Production session behavior was not exercised.",
  "related": [
    "hc-sessions",
    "hc-revoke-other-sessions"
  ],
  "keywords": [
    "sessions revoke all others",
    "Active-session management details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
**Revoke all other sessions** removes every active browser session and mobile token family except the credential making the request. The button appears only when the loaded list contains more than one row.

<figure class="help-screenshot"><a href="/screenshots/sessions-revoke-all-others-help-workflow-2026-10-14.webp"><img src="/screenshots/sessions-revoke-all-others-help-workflow-2026-10-14.webp" alt="Four-step session map showing Active sessions, the revoke-other-sessions control, one intended session remaining, and a refresh check." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The pictured sequence opens Active sessions, reads and confirms the bulk control, checks the remaining intended session, and reopens the view. <a href="/screenshots/sessions-revoke-all-others-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. From the device you intend to keep, open **Profile → Sessions** and confirm its green **Current** badge.
2. Review how many other rows are present. If only the caller remains, the bulk-revoke button is hidden.
3. Select **Revoke all other sessions**. The interface disables the control while the request runs.
4. On success, read **Sessions revoked — You are now signed out everywhere else.** The page reloads its list.
5. If it shows **Revoke failed**, retain the server message; the fallback is **The other sessions could not be revoked.** A caller without a live cookie or bearer receives **No active session**.
6. Confirm that only the intended current device and its linked extensions remain usable. Other session cookies are deleted, mobile tokens are revoked, and both cache types are invalidated immediately.

<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Active sessions page with Revoke all other sessions, two Unknown device browser rows, and Current on the second row." width="1160" height="730" loading="lazy" decoding="async" /></a><figcaption>The screenshot visibly places the bulk-revocation button above two browser credentials, with the lower entry marked Current. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

This action does not delete cloud files, workspace content, or copies already downloaded. It is irreversible for those credentials: each removed device must sign in again.

## Expected result

The current browser or mobile app continues working while all other devices lose authenticated access. Dosya emits a mandatory **All sessions were signed out** security notice whose count includes browser sessions and mobile tokens.

## Related guides

- [Review active sessions](/account/sessions)
- [Revoke other sessions](/account/revoke-other-sessions)
