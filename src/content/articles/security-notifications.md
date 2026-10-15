---
{
  "articleId": "hc-security-notifications",
  "locale": "en",
  "revision": 6,
  "title": "Review security notifications",
  "summary": "Interpret mandatory Dosya security alerts, compare device and location evidence, and respond to password, session, 2FA, or recovery-code changes.",
  "category": "account",
  "articleSlug": "security-notifications",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/api/src/lib/auth-login.ts, apps/api/src/lib/notifications/failed-attempts.ts, apps/api/src/lib/notifications/catalog.ts, apps/api/src/lib/notifications/security-login.ts, and apps/api/src/lib/notifications/notify.ts. Production security events were not triggered.",
  "related": [
    "hc-profile-settings",
    "hc-sessions"
  ],
  "keywords": [
    "security notifications",
    "account privacy and access",
    "Dosya help",
    "cloud storage"
  ]
}
---
Security notices cover new-device sign-ins, failed-attempt thresholds, password and email changes, two-factor changes, recovery-code regeneration, and session revocation. Most of these entries are mandatory, so email is forced on even when notification preferences are disabled. A single-session revocation is the exception: it uses in-app and push, with no email.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/security-notifications-workflow-map-2026-10-14.webp" data-light-href="/screenshots/security-notifications-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/security-notifications-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/security-notifications-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/security-notifications-workflow-map-2026-10-14.webp" alt="Four-step alert map showing Notifications and Profile to Security, evidence comparison, recognized or suspicious branches, and refresh or reopen." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The cards visibly compare device, time, and location before branching between recognized and suspicious activity and checking the saved result. <a class="workflow-map-full" href="/screenshots/security-notifications-workflow-map-2026-10-14.webp" data-light-href="/screenshots/security-notifications-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/security-notifications-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the notification and match its exact title and time to an action you performed. New-device mail includes city, country, IP address, browser, operating system, and an absolute timestamp.
2. Treat geography as context rather than proof. VPNs, mobile carriers, corporate gateways, and IP databases can make a legitimate sign-in appear in another place.
3. For **New sign-in from …**, use **Review sessions**. If you do not recognize it, use **Change password** and then verify the remaining session list.
4. A failed-attempt alert is emitted when a sign-in lockout threshold is crossed. The first password rung is 5 failures for the same account and IP while its one-hour counter record remains live; that rung locks the pair for 15 minutes. The notice reports the measured failure span from audit history, using **15 minutes** only when that lookup cannot supply a start time. Its copy says nobody gained access; enable 2FA if those attempts were not yours.
5. Password-change notices state that every other signed-in session ended. Email-change notices distinguish a requested change from a completed one; the completed alert says the old address no longer signs in.
6. For an unexpected 2FA enable/disable, recovery-code regeneration, or session revocation, contact support after securing the password and current session.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Profile Identity page with sidebar entries for Password and 2FA, Sessions, and Notifications beside the signed-in account details." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The screenshot shows the security destinations in the left navigation alongside the account name, verified email, and membership information. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

A mandatory notice can still appear in-app and by push according to its catalog entry, but those transports are best effort. The security email is the channel the preference gate cannot turn off.

## Expected result

A recognized action matches the alert's device, time, and account change. An unrecognized event results in a new password, revoked other credentials, reviewed 2FA state, and a support record where needed. Mandatory security emails have no unsubscribe control and explicitly state why they were sent; a routine single-session revocation remains visible through its enabled non-email channels.

## Related guides

- [Changing profile details and account settings](/account/profile-settings)
- [Review active sessions](/account/sessions)
