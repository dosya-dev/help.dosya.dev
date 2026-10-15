---
{"articleId":"hc-mobile-switch-account","locale":"en","revision":6,"title":"Switch accounts in the mobile app","summary":"Sign out of the current Dosya account, clear its device-only data, sign in as the second account, and verify workspaces before restarting backup.","category":"account","articleSlug":"mobile-switch-account","status":"published","lastReviewed":"2026-10-14","verification":"Verified from local source on 2026-10-14 against apps/mobile/app/(tabs)/settings.tsx, apps/mobile/src/auth/authStore.ts, apps/mobile/src/auth/purge.ts, apps/mobile/src/auth/sessionDrop.ts, apps/mobile/app/_layout.tsx, and account-switch tests. No physical-device switch, production token revocation, or live cloud account was used.","related":["hc-mobile-signin","hc-sessions","hc-mobile-backup-setup"],"keywords":["switch Dosya mobile account","sign out cloud storage app","change mobile login","separate backup accounts","Dosya account cache"]}
---
The mobile app does not keep a visible list of multiple signed-in accounts. Switching means using **Sign out** for the current identity and then authenticating as the other one. This boundary prevents one account from inheriting another account's cached files, active workspace or photo-backup ledger.

Wait for important uploads before starting. Explicit sign-out clears pending device work even if the phone cannot reach the logout endpoint, while completed cloud files stay with their original account and workspace.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-switch-account-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-switch-account-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-switch-account-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-switch-account-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-switch-account-workflow-map-2026-10-14.webp" alt="Account-switch workflow showing upload completion, explicit sign-out, second-account login, and workspace confirmation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Finish local work, cross the sign-out boundary, then confirm the second identity before enabling its backup. <a class="workflow-map-full" href="/screenshots/mobile-switch-account-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-switch-account-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-switch-account-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open **Backup** and the upload queue under the first account. Let required transfers finish, because queued and staged items are discarded during cleanup.
- Verify the first account's important files from another Dosya client if this phone holds the only local originals.
- Have the second account's password or provider access and any required two-factor method ready.
- Record which workspaces and backup destinations belong to each identity. Similar names do not make them the same storage boundary.

## Steps

1. Select **Settings** and read the name and email on the account card.
2. Confirm **Backup** is idle and no manual file upload is still queued or uploading.
3. Return to **Settings** and tap **Sign out**.
4. Dosya first tries to unregister this phone from push delivery, then asks the server to revoke the current refresh session and its linked iOS Files session. The logout request waits at most four seconds; local sign-out continues when the phone is offline or the request fails.
5. At **Welcome back**, enter the second account under **Email** and **Password**, or choose its Google, GitHub or Apple provider. Complete **Two-factor authentication** when shown.
6. Open **Settings** and verify the second name and email. Do this before entering a folder or starting a backup.
7. Select **Files**, choose the intended workspace in the header, and open one known item that belongs to the second account.
8. Visit **Settings → Backup**. Recreate the second account's destinations and device-specific choices; sign-out resets photo-backup configuration to defaults.
9. Run one small test backup, then confirm its cloud copy under the selected second-account workspace.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Profile identity view for checking the email after changing the signed-in Dosya mobile account." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The profile email is the clearest checkpoint before the second account creates uploads or shares. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The account card, workspace list and file views all belong to the second identity. The first account's mobile credential is revoked when the server receives logout, and its local cached data no longer appears on the phone. Files already stored in either account are unchanged.

## Data removed from this phone

Sign-out stops playback and backup work, cancels supported background jobs, clears the upload queue, backup ledger and history, backup settings, active workspace, contacts-backup state, notification registration, persisted API responses, cached thumbnails, downloaded file bytes, CarPlay recents, Vault unlock state and the first account's onboarding record. Cleanup is best effort so one failing step cannot keep the account signed in.

Device-level preferences remain: **Unlock with biometrics**, the last sign-in-method hint, theme, and file-view presentation settings. Because biometric lock survives, it can protect the next account immediately.

## Important boundaries

- There is no role or plan requirement for signing out. Membership and permissions are evaluated again after the second account opens a workspace.
- Signing out is different from deleting an account; it does not erase server files, workspaces or billing records.
- A failed network revocation can leave the old server credential live until another control revokes or expires it, even though local tokens are gone. Use **Sessions** from another signed-in client if the device was lost or the logout happened offline.
- Switching only the active workspace does not change the account email. Use the workspace header for project boundaries and this sign-out flow for identity boundaries.

## Troubleshooting

**The first account still appears after tapping Sign out.** Wait for the screen transition and reopen Dosya. If the process was interrupted, use **Settings → Sign out** again, then review **Sessions** elsewhere.

**The second account sees empty Files.** Check its account email, then change the active workspace. An account can be valid while lacking membership in the workspace you expected.

**Previous backup settings disappeared.** That reset is intentional account isolation. Configure destinations, media types, date, size, Wi-Fi and charging rules again for the new identity.

**Biometric lock remained enabled.** The preference belongs to the installation rather than an account. Turn off **Settings → Security → Unlock with biometrics** if that is not appropriate for the new user.

## Related guides

- [Sign in to Dosya on mobile](/account/mobile-sign-in)
- [Review and revoke sessions](/account/sessions)
- [Set up mobile photo backup](/files/mobile-photo-backup)
