---
{
  "articleId": "hc-desktop-launch-login",
  "locale": "en",
  "revision": 6,
  "title": "Start Dosya automatically after sign-in",
  "summary": "Enable Dosya at operating-system sign-in, verify its hidden macOS or Windows start, and keep sync pairs ready without reopening the app manually.",
  "category": "desktop",
  "articleSlug": "desktop-launch-login",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the setting label and login-item registration to `apps/desktop/src/renderer/pages/SyncPage.tsx`, `main/ipc.ts`, and `main/window-show.ts` on 2026-10-14. Production startup remains untested.",
  "related": [
    "hc-desktop-install",
    "hc-desktop-sync-issues"
  ],
  "keywords": [
    "desktop launch login",
    "desktop app lifecycle",
    "Dosya help",
    "cloud storage"
  ]
}
---
Enable **Launch at login** when this computer should start Dosya automatically after the operating-system user signs in. On macOS and Windows, the automatic start is deliberately hidden so sync can initialize without placing the main window in front of other apps.

<figure class="help-screenshot">
  <a class="workflow-map-link" href="/screenshots/desktop-launch-login-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-launch-login-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-launch-login-workflow-map-2026-10-14-dark.webp">
    <picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-launch-login-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-launch-login-workflow-map-2026-10-14.webp" alt="Desktop workflow map for enabling Launch at login and confirming a hidden Dosya start after signing back in." width="1200" height="675" loading="lazy" decoding="async" /></picture>
  </a>
  <figcaption>Enable the operating-system login item in Dosya Settings, perform one sign-in test, then inspect Sync Overview. <a class="workflow-map-full" href="/screenshots/desktop-launch-login-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-launch-login-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-launch-login-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Before you start

- Sign in to the Dosya desktop app and make sure its current sync pairings are the ones this computer should run.
- Use the operating-system account that needs the startup entry. The setting is per computer user, not per Dosya workspace.
- On the Mac App Store build, macOS 13 or later is required. Direct-download macOS builds and non-Apple-store builds use the regular login helper.
- Save open work before the verification sign-out. Pausing sync first is sensible when files are actively changing.

## Steps

1. Open **Sync** in the desktop sidebar, select **Settings**, and scroll to **Desktop app**.
2. Turn on **Launch at login**. The description below it reads **Start dosya automatically when you sign in**. This toggle applies immediately; the separate **Save settings** button controls sync values such as concurrency and does not need to be pressed for startup registration.
3. Leave Settings and reopen it. Confirm the toggle remains on. The app reads the state back from the operating system, so an off state means registration was not applied.
4. Sign out of the current operating-system session and sign in again. On macOS and Windows, do not expect the main window to open: the login entry uses hidden startup.
5. Open the tray or menu-bar icon and bring up Dosya. Navigate to **Sync → Overview** and confirm each pairing shows its expected state. **Synced**, **Syncing**, **Paused**, **Offline**, **Waiting**, **Needs attention**, and **Needs permission** are distinct outcomes; automatic launch does not override a pause or error.

<figure class="help-screenshot">
  <a href="/screenshots/desktop-workspace-2026-10-10.webp"><img src="/screenshots/desktop-workspace-2026-10-10.webp" alt="Dosya desktop workspace after a login launch, showing navigation used to open Sync Overview and inspect pair status." width="1100" height="800" loading="lazy" decoding="async" /></a>
  <figcaption>Open the hidden background app after signing in and verify the intended workspace before relying on automatic sync. <a href="/screenshots/desktop-workspace-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

Dosya starts once after the operating-system sign-in. On macOS or Windows, it remains in the tray or menu bar until opened. Existing enabled pairings become available to the sync engine, subject to their mode, permissions, battery preference, network and any saved pause. Enabling startup creates no new pairing and moves no file by itself.

Turning **Launch at login** off later only changes future computer sign-ins. It does not quit the current process, disable a saved pairing, revoke the Dosya session or remove local and cloud content.

## Troubleshooting

**Launch at login is missing.** The Mac App Store build cannot register its required service on macOS 12, so the app hides the toggle. Upgrade that computer to macOS 13 or newer or open Dosya manually after sign-in.

**The toggle will not stay enabled.** The operating system did not report the login item as active. Check its login-item or startup-app settings and device policy, then repeat the in-app action.

**Sync stayed Paused after startup.** A manual global pause persists. Use **Resume all**. A timed snooze of 30 minutes, 1 hour, 4 hours or 8 hours resumes at its saved deadline; startup does not cancel it.

**The app opens in front after login.** On supported macOS and Windows paths, login startup carries a hidden signal. Confirm Dosya was started by its registered login item rather than another shortcut or launcher.

## Related guides

- [Install the desktop app](/desktop/install-and-sign-in)
- [Diagnose desktop sync](/desktop/sync-issues)
