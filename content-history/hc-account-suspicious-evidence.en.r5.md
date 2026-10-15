---
{
  "articleId": "hc-account-suspicious-evidence",
  "locale": "en",
  "revision": 5,
  "title": "Document suspicious account activity for support",
  "summary": "Capture the session time, device, browser, available IP and location evidence support needs while keeping passwords, codes, cookies and keys private.",
  "category": "account",
  "articleSlug": "account-suspicious-evidence",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/pages/profile/sessions.tsx, apps/web/src/pages/profile/shared.tsx, and apps/api/src/pages/api/me/sessions/index.ts on 2026-10-14. Production support intake was not exercised.",
  "related": [
    "hc-sessions",
    "hc-suspicious-activity"
  ],
  "keywords": [
    "account suspicious evidence",
    "Account session and security review",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Use **Profile → Sessions** to identify an unfamiliar login before contacting support. The list is account-wide and requires an authenticated browser session.


<figure class="help-screenshot"><a href="/screenshots/account-suspicious-evidence-help-workflow-2026-10-14.webp"><img src="/screenshots/account-suspicious-evidence-help-workflow-2026-10-14.webp" alt="Active sessions workflow showing an unfamiliar device review, the Current badge, and Revoke all other sessions." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Capture the questionable session details first, then use Revoke all other sessions and wait for Sessions revoked. <a href="/screenshots/account-suspicious-evidence-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Find the questionable row under **Active sessions**. Record its displayed device, browser, available IP/location, and relative activity time; note whether another row carries the **Current** badge.
2. Capture the time zone shown by your device and the exact Dosya URL or workspace/file identifier involved. Describe the action you observed and its first and most recent occurrence.
3. Save relevant notification or error text verbatim. Include a redacted screenshot when it clarifies which row or resource is affected.
4. Select **Revoke all other sessions** when you do not recognize one or more noncurrent sessions. Success reports **Sessions revoked** and signs those sessions out; the current session remains.
5. Send support the evidence through the private support route. Exclude passwords, email verification codes, two-factor codes, recovery keys, API keys, session cookies, share passwords, and full payment-card details.

A successful bulk action deletes other browser sessions, marks other mobile tokens revoked, and schedules their cache invalidation; it cannot restore work an affected device had not saved. If the suspicious row is the current session, secure the account from another trusted device and change the password, because the bulk control intentionally preserves the session making the request.


<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Sessions page with device, browser, IP or location, last-active time, and Current status for evidence collection." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The session rows provide the account evidence to record while keeping passwords, codes, cookies, and security keys out of the report. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Support receives a reproducible timeline tied to a specific session and resource, while reusable credentials remain undisclosed. After revocation, the current browser session remains, as do caller-linked Files or File Provider credentials for that same device and any sessions authenticated afterward.

If Sessions shows **No sessions** or does not load, reload while still signed in and record the failure time. A failed bulk action reports **Revoke failed** with the server message; do not assume the other devices were signed out until **Sessions revoked** appears.

## Related guides

- [Review active sessions](/account/sessions)
- [Respond to suspicious activity](/account/suspicious-activity)
