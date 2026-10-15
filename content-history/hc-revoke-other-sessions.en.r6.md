---
{
  "articleId": "hc-revoke-other-sessions",
  "locale": "en",
  "revision": 6,
  "title": "Revoke every other signed-in session",
  "summary": "Use Revoke all other sessions to end browser and mobile access on every other device while preserving the credential on your current device.",
  "category": "account",
  "articleSlug": "revoke-other-sessions",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified by tracing apps/web/src/pages/profile/sessions.tsx, apps/api/src/pages/api/me/sessions/index.ts, apps/api/src/lib/auth/credential-revocation.ts, and packages/test-harness/tests/me-sessions.int.test.ts. No production account, notification channel, or external provider was contacted.",
  "related": [
    "hc-profile-settings",
    "hc-sessions"
  ],
  "keywords": [
    "revoke other sessions",
    "sign out other devices",
    "Dosya account security",
    "secure cloud storage"
  ]
}
---
**Revoke all other sessions** signs out every other active browser session and mobile app token for your account. The credential making the request stays active, so complete this from a device you trust. This is an account-security action and does not depend on the active workspace or workspace role.

The **Active sessions** list combines browser and mobile access. Browser rows can show a device class, browser, stored location or IP address, and sign-in time. Mobile rows show **dosya.dev app** plus their latest activity. The current row has a **Current** badge in the web app.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/revoke-other-sessions-workflow-map-2026-10-14.webp" data-light-href="/screenshots/revoke-other-sessions-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/revoke-other-sessions-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/revoke-other-sessions-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/revoke-other-sessions-workflow-map-2026-10-14.webp" alt="Active sessions workflow that identifies the Current row and revokes all browser and mobile credentials belonging to other devices." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Confirm the <strong>Current</strong> session on a trusted device before ending every other browser and app login. <a class="workflow-map-full" href="/screenshots/revoke-other-sessions-workflow-map-2026-10-14.webp" data-light-href="/screenshots/revoke-other-sessions-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/revoke-other-sessions-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. On the trusted device you want to keep, open **Profile → Sessions**.
2. Find the row marked **Current** and compare its device, browser, location or IP, and activity text with the device in your hand.
3. Review the other rows. If more than one session exists, the web page shows **Revoke all other sessions** beneath the list.
4. Select **Revoke all other sessions**. The web action runs immediately; it does not open a confirmation dialog.
5. Wait for **Sessions revoked — You are now signed out everywhere else.**
6. Let the page reload and confirm that the current device remains. A controlled browser or app on another device should require sign-in on its next authenticated request.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Profile navigation reference for reaching the account-level Active sessions security page." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Session revocation belongs to the signed-in account shown in Profile; switching workspaces does not change which devices are ended. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What gets revoked

The operation removes other browser sessions and marks other mobile tokens revoked, then clears their authentication caches so access stops immediately rather than waiting for cache expiry. Linked Files extension credentials created by a revoked device are revoked with that device. Linked credentials belonging to the current browser or mobile session are preserved because they represent the machine you chose to keep.

The action succeeds even when no other session remains. The button is hidden in the web interface when the list contains only one entry.

This action does not change the password, disable API keys, revoke public share links, or remove workspace memberships. If access is suspicious, change the password after reviewing the device list; a password change also ends other account sessions.

## Troubleshooting

**Revoke failed** means the server did not complete the operation. If the underlying request no longer has a usable cookie or mobile token, the API can return **No active session**. Sign in again on the trusted device and repeat the review.

If the current device disappears from the list or is signed out, sign back in and check whether you performed the action from a different browser profile or app installation than expected.

## Expected result

Only the requesting device and its directly linked local credential remain usable; every other listed browser or mobile device must authenticate again.

## Related guides

- [Update profile settings](/account/profile-settings)
- [Review active sessions](/account/sessions)
