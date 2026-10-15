---
{
  "articleId": "hc-sessions-compare-last-active",
  "locale": "en",
  "revision": 5,
  "title": "Compare session last-active times",
  "summary": "Compare browser creation time with mobile last-use time so Dosya session ages help identify devices without overstating live activity safely.",
  "category": "account",
  "articleSlug": "sessions-compare-last-active",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/web/src/pages/profile/sessions.tsx, apps/api/src/pages/api/me/sessions/index.ts, and apps/api/src/lib/auth.ts. Production session behavior was not exercised.",
  "related": [
    "hc-sessions",
    "hc-revoke-other-sessions"
  ],
  "keywords": [
    "sessions compare last active",
    "Active-session management details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
The age shown on **Active sessions** is not one uniform last-activity measurement. A browser row uses its session creation time. A mobile row uses its recorded last-used time when available, otherwise its creation time. The current credential is always labeled **active now**.

<figure class="help-screenshot"><a href="/screenshots/sessions-compare-last-active-help-workflow-2026-10-14.webp"><img src="/screenshots/sessions-compare-last-active-help-workflow-2026-10-14.webp" alt="Active-session timing map separating browser creation age, mobile last-used age, active now, and the seven-day date switch." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The timing comparison reads Current first, then interprets browser and mobile ages by their different server fields. <a href="/screenshots/sessions-compare-last-active-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Profile → Sessions** and find the **Current** badge before comparing ages.
2. Browser rows show browser, stored location, stored IP, then an age. Mobile rows show **dosya.dev app** and an age, without browser-location fields.
3. Treat **active now** only as confirmation that Dosya matched the credential used for this request.
4. Interpret browser ages as “session created this long ago.” They do not update on each click, so an old-looking browser can still be in use.
5. Interpret a non-current mobile age as the last recorded token use, falling back to sign-in time if no use was stored.
6. Compare the age with your sign-in history and device type. Web sessions expire after 30 days; mobile access tokens last 1 hour and can refresh within a 60-day window unless revoked.

<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Active sessions list with two Unknown device browser rows, Firefox metadata, Brisbane and IP details, active now text, and Current." width="1160" height="730" loading="lazy" decoding="async" /></a><figcaption>The visible list places Firefox, Brisbane, an IP address, and active now beside both browser entries; the second also carries Current. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

The display rounds down to minutes, hours, or days, then switches to a calendar date after seven days. Refresh before using a boundary value in a security decision.

## Expected result

You can explain why each age appears and avoid treating a browser creation timestamp as continuous activity. A row that remains unfamiliar should be handled as an unknown credential by changing the password and revoking other sessions.

## Related guides

- [Review active sessions](/account/sessions)
- [Revoke other sessions](/account/revoke-other-sessions)
