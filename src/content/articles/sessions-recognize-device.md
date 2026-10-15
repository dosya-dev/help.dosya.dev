---
{
  "articleId": "hc-sessions-recognize-device",
  "locale": "en",
  "revision": 5,
  "title": "Recognize devices in your Dosya session list",
  "summary": "Decode Dosya session device and browser labels, compare app rows with web rows, and decide which credentials belong to you before revocation.",
  "category": "account",
  "articleSlug": "sessions-recognize-device",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/api/src/pages/api/me/sessions/index.ts and apps/api/src/lib/share/user-agent.ts. Production session behavior was not exercised.",
  "related": [
    "hc-sessions",
    "hc-suspicious-activity"
  ],
  "keywords": [
    "sessions recognize device",
    "Account session and security review",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Dosya derives browser device labels from the stored user-agent string. These labels describe software claims, not a verified hardware identity, and privacy tools can reduce their accuracy.

<figure class="help-screenshot"><a href="/screenshots/sessions-recognize-device-help-workflow-2026-10-14.webp"><img src="/screenshots/sessions-recognize-device-help-workflow-2026-10-14.webp" alt="Device-recognition map comparing Current, browser and platform labels, mobile app rows, IP context, and credential age." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The recognition sequence treats parsed user-agent labels as clues and escalates an unexplained row to password change or revocation. <a href="/screenshots/sessions-recognize-device-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Profile → Sessions** and first mark the row carrying **Current**.
2. Browser parsing recognizes Firefox, Edge, Chrome, and Safari. If none matches, the browser field becomes **Unknown**.
3. Device classification recognizes iPhone, iPad, Android phone/tablet, Mac, Windows PC, and Linux. Everything else is listed as **Unknown device**.
4. A native-token row is normalized to **Mobile app** with **dosya.dev app**, even when its user agent cannot name the phone model.
5. Compare the label with location/IP context and time. Two browsers on one computer can be separate credentials, and signing in again can create another row.
6. Do not use order alone as identity. The list is sorted by creation time, while mobile metadata can use later token activity.
7. If a row is unknown, secure the account rather than waiting for its 30-day web expiry or 60-day mobile refresh window.

<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Dosya Active sessions page with two Unknown device entries, Firefox, Brisbane, IP addresses, active now, and one Current badge." width="1160" height="730" loading="lazy" decoding="async" /></a><figcaption>The screenshot's device labels are paired with visible browser, city, IP, and activity fields for each of the two rows. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

Dosya does not display serial numbers, operating-system device names, or precise hardware models in this web list.

## Expected result

Every familiar row has an explainable credential type, device class, browser/app label, and time context. Any unexplained entry is treated as a security incident and removed through password change or bulk revocation.

## Related guides

- [Review active sessions](/account/sessions)
- [Report suspicious activity](/account/suspicious-activity)
