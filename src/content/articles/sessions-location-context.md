---
{
  "articleId": "hc-sessions-location-context",
  "locale": "en",
  "revision": 5,
  "title": "Review session location and IP context",
  "summary": "Interpret Dosya session location and IP fields with VPN, carrier, and geolocation caveats before deciding that a sign-in is unknown before acting.",
  "category": "account",
  "articleSlug": "sessions-location-context",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/api/src/pages/api/me/sessions/index.ts, apps/api/src/lib/geo.ts, and apps/api/src/lib/notifications/request-context.ts. Production session behavior was not exercised.",
  "related": [
    "hc-sessions",
    "hc-suspicious-activity"
  ],
  "keywords": [
    "sessions location context",
    "Account session and security review",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Browser session rows can include a stored location and IP address captured at sign-in. Mobile app rows in the current list do not expose those fields. Location is an IP-derived clue, not device GPS.

<figure class="help-screenshot"><a href="/screenshots/sessions-location-context-help-workflow-2026-10-14.webp"><img src="/screenshots/sessions-location-context-help-workflow-2026-10-14.webp" alt="Session-location review map comparing browser location, IP address, device label, age, VPN, and carrier explanations." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The location check combines stored browser metadata and notification time before deciding whether to change the password and revoke sessions. <a href="/screenshots/sessions-location-context-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Profile → Sessions** and identify your **Current** row.
2. On browser rows, read metadata after the browser name. Dosya joins available values in this order: stored location, IP address, and session age.
3. A missing location or IP is omitted. Do not interpret a shorter row as evidence that the session is safe.
4. Compare the address with your home, office, VPN exit, mobile carrier gateway, or corporate proxy. Shared networks can make different devices use one public IP.
5. Compare location with device label and time. A correct city alone cannot authenticate a session, and a distant city can be a database error.
6. If the combined evidence is unfamiliar, change the password and select **Revoke all other sessions**. Save the security notification's absolute time, browser, OS, and IP for support.

<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Two Unknown device browser rows displaying Firefox, Brisbane, an IP address, active now, and a Current badge on the lower entry." width="1160" height="730" loading="lazy" decoding="async" /></a><figcaption>The captured browser rows show their city and IP strings between the Firefox label and the active-now timestamp. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

The list may show a raw IP beside a broad location string. Neither value reveals the device's precise physical position, and the browser row does not track travel after sign-in.

## Expected result

You classify each browser location as consistent, explainable, or suspicious using several fields. Mobile rows are assessed with their app label and age. Suspicious credentials are removed without relying on geography alone.

## Related guides

- [Review active sessions](/account/sessions)
- [Report suspicious activity](/account/suspicious-activity)
