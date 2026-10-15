---
{
  "articleId": "hc-sessions-identify-current-session",
  "locale": "en",
  "revision": 5,
  "title": "Identify the current Dosya session",
  "summary": "Find the Current badge in Dosya, understand cookie and mobile-token matching, and avoid trying to revoke the credential you are using on this device.",
  "category": "account",
  "articleSlug": "sessions-identify-current-session",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/web/src/pages/profile/sessions.tsx and apps/api/src/pages/api/me/sessions/index.ts. Production session behavior was not exercised.",
  "related": [
    "hc-sessions",
    "hc-revoke-other-sessions"
  ],
  "keywords": [
    "sessions identify current session",
    "Active-session management details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Dosya marks the credential that loaded **Active sessions** with a green **Current** badge. The server checks the browser session cookie and mobile bearer token separately, so the current row can be a browser or the Dosya app.

<figure class="help-screenshot"><a href="/screenshots/sessions-identify-current-session-help-workflow-2026-10-14.webp"><img src="/screenshots/sessions-identify-current-session-help-workflow-2026-10-14.webp" alt="Current-session identification map using the Current badge, active now metadata, device label, and logout rule." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The identification path finds the credential that loaded the page before any single-session or bulk revocation action. <a href="/screenshots/sessions-identify-current-session-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Profile → Sessions** from the device you want to keep signed in.
2. Locate **Current** beside a device label. Its metadata ends with **active now**.
3. For a browser, compare browser name and platform-derived label: **Mac**, **Windows PC**, **Linux**, **iPhone**, **iPad**, **Android Phone**, or **Android Tablet**. Unrecognized agents show **Unknown device**.
4. A native phone credential can appear as **Mobile app** and **dosya.dev app** when its user agent cannot name the phone model.
5. If no row is current after loading, do not assume the newest one is yours. Reload and sign in again; bulk revocation can return **No active session** when neither credential is valid.
6. Use normal sign-out to end the current credential. Direct revocation refuses it with **Cannot revoke your current session. Use logout instead.**

<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Active sessions page with two browser entries; the second Unknown device row has a green Current badge and both show active now." width="1160" height="730" loading="lazy" decoding="async" /></a><figcaption>The illustrated second browser row is visibly labeled Current, while each row includes Firefox, Brisbane, an IP address, and active now. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

A linked iOS Files or macOS File Provider credential belongs to its parent device. Bulk revocation preserves linked credentials minted by the caller while removing children of other devices.

## Expected result

The credential making the request is identified as **Current** and reads **active now**. You can choose the device to preserve before using **Revoke all other sessions**, rather than guessing from recency.

## Related guides

- [Review active sessions](/account/sessions)
- [Revoke other sessions](/account/revoke-other-sessions)
