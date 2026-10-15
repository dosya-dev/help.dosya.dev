---
{
  "articleId": "hc-profile-settings",
  "locale": "en",
  "revision": 5,
  "title": "Changing profile details and account settings",
  "summary": "Navigate Dosya profile settings, update identity details, understand OAuth-only accounts, and know which security changes sign out devices safely.",
  "category": "account",
  "articleSlug": "profile-settings",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/web/src/pages/profile/index.tsx, apps/web/src/pages/profile/identity.tsx, apps/web/src/pages/profile/password.tsx, apps/api/src/pages/api/me/name.ts, apps/api/src/pages/api/me/avatar.ts, apps/api/src/lib/access/rest-scope.ts, and apps/api/src/lib/auth-guards.ts. Production profile writes were not performed.",
  "related": [
    "hc-two-factor",
    "hc-sessions",
    "hc-api-key"
  ],
  "keywords": [
    "profile",
    "change name",
    "change email",
    "avatar",
    "account settings",
    "notifications",
    "secure cloud storage",
    "Dosya help"
  ]
}
---
Dosya splits account settings into dedicated profile pages. On desktop, the left rail groups **Identity**, **Appearance**, **Password & 2FA**, **API keys**, **Sessions**, **Notifications**, **Integrations**, **Connected AI apps**, workspace membership, privacy, and account deletion. On a phone-width browser, /profile shows the same destinations as a list. The web settings screens use the signed-in session. At the API boundary, full-scope keys can currently update the display name with `PUT /api/me/name` and upload an avatar with `POST /api/me/avatar`; restricted keys cannot make those writes, and the email, password, 2FA, session, privacy, and deletion flows apply their own session-only guards.

<figure class="help-screenshot"><a href="/screenshots/profile-settings-help-workflow-2026-10-14.webp"><img src="/screenshots/profile-settings-help-workflow-2026-10-14.webp" alt="Four-step profile map showing the Profile menu, an avatar image under 2MB, the Change email control, and a current-password prompt." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The illustrated cards move from opening Profile to choosing a small avatar, changing the email address, and entering the current password. <a href="/screenshots/profile-settings-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Profile → Identity** to review the signed-in name, email, avatar, membership month, and workspace count.
2. Edit the name and select **Save**. A blank trimmed name is not submitted. A successful change shows **Saved — Your name has been updated.**
3. To replace the avatar, select the photo. Accepted browser pickers are PNG, JPEG, WebP, or GIF; the client refuses files over 2 MB with **File too large — Image must be under 2 MB**.
4. Treat an email change as a security operation. Enter the new address, confirm the current password, then use the six-digit code sent to the new inbox. It expires after 10 minutes and permits 5 attempts; code requests have a 30-second cooldown. The old address remains the sign-in identity until confirmation. OAuth-only accounts must set a password before changing email.
5. Use **Password & 2FA** for passwords and second factors. An account created only with Google, GitHub, or Apple shows **Not set** and **Set a password**; setting one adds email/password sign-in.
6. Review **Sessions** after changing a password. Password updates preserve the caller's credential and revoke other browser and mobile credentials immediately.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya Identity page with the Full name field, Save button, verified email address, member-since date, and workspace count." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The visible identity card places the saved account name above a read-only verified email and membership details. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

The interface is currently English-only; there is no working preferred-language control. Account deletion lives on its own danger page and is outside an ordinary profile edit.

## Expected result

Each saved change refreshes the profile and displays its success toast. Identity edits affect the account across workspaces. Security operations can email the account owner and revoke other devices, while changing the avatar or display name does not alter stored files or workspace roles.

## Related guides

- [Set up two-factor authentication](/account/two-factor)
- [Review active sessions](/account/sessions)
- [Create an API key](/developers/api-key)
