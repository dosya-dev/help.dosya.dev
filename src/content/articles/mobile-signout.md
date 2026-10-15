---
{
  "articleId": "hc-mobile-signout",
  "locale": "en",
  "revision": 6,
  "title": "Sign out and clear mobile account data",
  "summary": "Sign out of Dosya mobile, understand the four-second server-revocation attempt and local data purge, then verify the next account starts clean.",
  "category": "account",
  "articleSlug": "mobile-signout",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/(tabs)/settings.tsx, apps/mobile/src/auth/authStore.ts, apps/mobile/src/auth/api.ts, apps/mobile/src/auth/purge.ts, apps/mobile/app/_layout.tsx, and sign-out/purge tests. No production session was revoked.",
  "related": [
    "hc-mobile-signin",
    "hc-sessions"
  ],
  "keywords": [
    "mobile signout",
    "mobile account security",
    "Dosya help",
    "cloud storage"
  ]
}
---
**Sign out** starts a bounded sign-out sequence before showing the signed-out screen, then schedules broad local cleanup so another account cannot inherit cached data.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-signout-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-signout-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-signout-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-signout-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-signout-workflow-map-2026-10-14.webp" alt="Mobile sign-out sequence covering push unregister, bounded server revocation, token removal, and account-scoped local cleanup." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Sign-out completes locally even if the network cannot confirm server revocation. <a class="workflow-map-full" href="/screenshots/mobile-signout-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-signout-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-signout-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Finish or deliberately stop active uploads and note any backup configuration you will need later. Signing out clears queued and persisted transfer state from this device.
2. Open **Settings** and confirm the email on the account card.
3. Scroll to **Sign out** and tap it. The current mobile UI has no confirmation dialog.
4. Dosya first gives registered pre-sign-out hooks up to **3 seconds** to unregister push while the access token still works.
5. It then presents the latest stored refresh token to `/api/auth/mobile/logout`, waiting at most **4 seconds** for server revocation. Offline, timeout, or server failure does not keep the phone signed in.
6. Confirm that the app returns to **Welcome back** (or the once-per-device welcome deck on a new installation).

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity view used to verify the account before ending its mobile session." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Check the account email before Sign out starts irreversible local cleanup. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

Local tokens and cached API responses are cleared before the signed-out shell appears. Best-effort cleanup then stops audio and backup, cancels background uploads, clears upload queues, active workspace, backup ledger/history/settings, contacts state, CarPlay history, Vault session/decrypted cache, file bytes, image caches, account onboarding, and the linked iOS Files location. Device-level theme, biometric preference, reader presentation settings, and **Last used** sign-in hint remain.

Server logout revokes this mobile session and its linked Files-provider child session when reachable. It does not delete the Dosya account, workspaces, cloud files, shares, or other devices’ independent sessions.

## Expected result

The signed-out authentication screen replaces the account UI, this device no longer has usable local account tokens, and a later different account starts without the previous account’s cached workspace state.

## Troubleshooting

**The phone was offline.** Local sign-out still completes. Because the server revocation attempt may have failed, use the web session-management page when online if you need to revoke sessions centrally.

**Backup preferences disappeared after signing in again.** That is the documented local purge. Re-select destinations, folders, network policy, and photo permission as needed; cloud backups already uploaded remain stored.

**The app appears signed out after a locked-keychain launch.** A background start can temporarily fail to read secure storage. That path records no explicit sign-out and avoids purging account data; unlock/restart before assuming the session was revoked.

## Related guides

- [Sign back in after local cleanup](/account/mobile-sign-in)
- [Reviewing active sessions](/account/sessions)
