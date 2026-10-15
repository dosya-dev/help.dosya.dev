---
{
  "articleId": "hc-sessions-revoke-one",
  "locale": "en",
  "revision": 5,
  "title": "Revoke one unfamiliar Dosya session",
  "summary": "Sign out one unfamiliar device from the Dosya mobile Sessions screen while keeping your current device and every unrelated session signed in.",
  "category": "account",
  "articleSlug": "sessions-revoke-one",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed and validated locally from apps/mobile/app/sessions.tsx, apps/mobile/src/profile/api.ts, apps/api/src/pages/api/me/sessions/[id].ts, and packages/test-harness/tests/me-sessions.int.test.ts. Inspection made no production account or service request.",
  "related": [
    "hc-sessions",
    "hc-suspicious-activity"
  ],
  "keywords": [
    "revoke one Dosya session",
    "sign out unfamiliar device",
    "mobile session security",
    "secure cloud storage account"
  ]
}
---
Use single-device revocation when one entry is unfamiliar and the rest of your signed-in devices are trusted. The current Dosya mobile app exposes this action on each non-current row. The web **Active sessions** page currently offers only **Revoke all other sessions**, so use the mobile Sessions screen for a targeted revocation.

The list includes browser sessions and mobile app tokens. The mobile app labels its own row **This device** and hides the sign-out control on that row. This prevents a session revocation from being used as a disguised logout.

<figure class="help-screenshot"><a href="/screenshots/sessions-revoke-one-help-workflow-2026-10-14.webp"><img src="/screenshots/sessions-revoke-one-help-workflow-2026-10-14.webp" alt="Mobile Sessions workflow for matching one unfamiliar device row and using its sign-out control without ending the current device." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Match the unfamiliar device using its label and activity details, then use only that row's sign-out control. <a href="/screenshots/sessions-revoke-one-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the Dosya mobile app, open **Profile → Sessions**.
2. Locate **This device** first. Keep that row as your trusted reference.
3. Compare every other row's device name and metadata. Browser metadata can include browser, stored location or IP, and last activity; app entries identify the **dosya.dev app**.
4. On the one row you do not recognize, select the sign-out icon. Its accessibility label is **Sign out [device]**.
5. Wait for the confirmation toast **Device signed out**.
6. Refresh the list. The selected row should be gone, while **This device** and unrelated trusted rows remain.

<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Active session details used to distinguish an unfamiliar device from the currently trusted Dosya login." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use the device and recent-activity text as evidence; similar device names alone may describe more than one browser profile. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## What happens to the selected device

Revoking a browser session deletes that session and clears its authentication cache. Revoking a phone token revokes that token family, including linked sessions it created, such as its Files extension access. The selected device must sign in again before it can reach protected files or account data.

The server refuses the current browser or mobile credential with **Cannot revoke your current session. Use logout instead.** A missing or already-ended row returns **Session not found**. Session IDs are scoped to the current account, so another account's session is also reported as not found.

Revocation does not erase local downloads already stored on that device. If the row represents a lost or stolen device, also change the account password and review public links, API keys, and connected applications.

## Troubleshooting

If the app says **Couldn't load sessions.**, choose **Retry**. If a targeted sign-out is unavailable in the web app, do not assume the row is protected; use the mobile screen or choose the broader web action to end all other sessions.

If the row reappears after a successful revocation, the person or device signed in again. Treat a repeated unfamiliar login as suspicious activity and secure the identity method immediately.

## Expected result

The chosen device disappears from Sessions and must authenticate again, while the current device and every other session you did not select remain active.

## Related guides

- [Review sessions](/account/sessions)
- [Respond to suspicious activity](/account/suspicious-activity)
