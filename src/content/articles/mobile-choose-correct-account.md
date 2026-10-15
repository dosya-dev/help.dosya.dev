---
{
  "articleId": "hc-mobile-choose-correct-account",
  "locale": "en",
  "revision": 5,
  "title": "Choose the correct account on mobile",
  "summary": "Confirm the signed-in email and active workspace on mobile, then switch accounts safely without carrying cached files, backup state, or push routing.",
  "category": "account",
  "articleSlug": "mobile-choose-correct-account",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally on 2026-10-14 against apps/mobile/app/(tabs)/settings.tsx, apps/mobile/app/profile.tsx, apps/mobile/src/files/WorkspaceSwitcher.tsx, apps/mobile/src/auth/authStore.ts, apps/mobile/src/auth/purge.ts, and workspace-store tests. No live account switch was performed.",
  "related": [
    "hc-mobile-install",
    "hc-mobile-permissions"
  ],
  "keywords": [
    "mobile choose correct account",
    "Mobile setup and permission details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Dosya mobile has one signed-in account at a time. Confirm the account card and workspace context before uploading, opening a private notification, or configuring backup.

<figure class="help-screenshot"><a href="/screenshots/mobile-choose-correct-account-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-choose-correct-account-help-workflow-2026-10-14.webp" alt="Mobile account check from Settings email through workspace selection and a clean sign-in when identity is wrong." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Verify identity before selecting the workspace that will receive uploads and backup activity. <a href="/screenshots/mobile-choose-correct-account-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Settings**. The account card at the top shows the current name and email; select it to open **Profile** for the same identity.
2. Under **Workspace**, choose **My workspaces**. This screen is read-only and lists each workspace, its **Owner**, **Admin**, **Member**, or **Viewer** role, and when the account joined.
3. Return to a tab and inspect the workspace name in the header. Tap it to open **Your workspaces** and choose the intended one. The selected workspace is stored securely for later launches.
4. If the email is wrong, return to **Settings** and choose **Sign out**. There is no in-session account picker that swaps identities without signing out.
5. On **Welcome back**, select **Continue with Google**, **Sign in with Apple**, **Continue with GitHub**, or enter the correct **Email** and **Password**. A **Last used** marker identifies the previously successful method on this device; it does not prove which provider account will be chosen.
6. After authentication and any two-factor step, recheck the account card and workspace list before resuming backup or opening files.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile availability reference paired with account and workspace identity checks." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Install from the maintained mobile page before validating the signed-in identity. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

A workspace switch and an account switch have different effects. Changing workspaces keeps the session and shows a two-second **Switching workspace…** cover. Signing into a different account clears the previous account’s query cache immediately, then purges its active workspace, upload queue, backup history/settings, contacts state, audio history, Vault session, cached bytes, and iOS Files-provider link.

## Expected result

The email in **Settings**, the entries under **My workspaces**, and the workspace shown in the header all belong to the intended identity. New uploads and account-wide notifications now use that session.

## Troubleshooting

**The provider chose the wrong identity.** Sign out, reopen the same provider, and use its account chooser. Dosya cannot change the Google, Apple, or GitHub selection inside its own UI.

**A workspace is missing.** Confirm the signed-in email first. Then refresh **My workspaces**; **Couldn't load workspaces.** with **Retry** indicates a load failure, while **No workspaces** means the API returned none.

**Old content briefly appears after switching accounts.** Stop using the screen and restart the app. The implementation clears in-memory responses before exposing the new session; persistent account data is then removed best-effort.

## Related guides

- [Install the verified mobile client](/account/mobile-install)
- [Review permissions after changing accounts](/account/mobile-permissions)
