---
{
  "articleId": "hc-desktop-review-launch-at-login",
  "locale": "en",
  "revision": 5,
  "title": "Review launch-at-login behavior",
  "summary": "Audit Dosya's saved launch-at-login state across supported desktop builds, test one sign-in, and diagnose a missing or refused startup setting.",
  "category": "desktop",
  "articleSlug": "desktop-review-launch-at-login",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed startup support and applied-state handling in `apps/desktop/src/main/login-item.ts`, `ipc.ts`, `window-show.ts`, and their tests on 2026-10-14. No production sign-in cycle was run.",
  "related": [
    "hc-desktop-install",
    "hc-desktop-check-updates"
  ],
  "keywords": [
    "desktop review launch at login",
    "Desktop app lifecycle details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Review **Launch at login** when Dosya starts unexpectedly, fails to start, or appears to ignore its saved switch. The preference belongs to the operating-system user account. It does not depend on the active Dosya workspace, subscription or workspace role.

<figure class="help-screenshot">
  <a href="/screenshots/desktop-review-launch-at-login-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-review-launch-at-login-help-workflow-2026-10-14.webp" alt="Review workflow for reading the Launch at login switch, testing an operating-system sign-in, and comparing the applied result." width="1200" height="675" loading="lazy" decoding="async" /></a>
  <figcaption>Audit the switch, distribution and startup result in one controlled sign-in test before changing other desktop settings. <a href="/screenshots/desktop-review-launch-at-login-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Before you start

- Open **Sync → Settings** and locate the **Desktop app** section.
- Record the installed distribution and operating-system version. The Mac App Store build supports this switch on macOS 13 or later; it is hidden on macOS 12 and when that build cannot read a supported system version.
- Finish or pause important transfers before signing out of the computer. Signing out interrupts in-flight work.
- Close duplicate Dosya windows and check whether another manually created operating-system startup entry also launches the app.

## Steps

1. Read **Launch at login** and its description, **Start dosya automatically when you sign in**. The displayed switch comes from the operating system's applied login-item state, not only a local preference file.
2. Toggle the setting once, wait for the control to settle, then leave and reopen Settings. The app asks the operating system to update the login item and reads the applied state back. If the system refuses registration, the switch can remain off.
3. Test with one real operating-system sign-out and sign-in. Do not treat quitting and reopening Dosya as a login-item test.
4. On macOS or Windows, allow several seconds for the background app to initialize, then open Dosya from its tray or menu-bar icon. Login launches are intentionally hidden: macOS reports `wasOpenedAsHidden`, while Windows registers the `--hidden` argument. The main window should not steal focus.
5. On Linux and non-Apple-store distributions, registration uses Electron's regular helper mechanism. The explicit hidden-launch detection in the desktop code is implemented for macOS and Windows, so judge Linux by whether Dosya starts rather than assuming identical tray behavior.
6. Return to **Sync → Settings**. Confirm the switch still matches the result you wanted and check **Overview** for the expected pairings.

<figure class="help-screenshot">
  <a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop overview used after a launch-at-login test to confirm the app and sync workspace loaded." width="1200" height="630" loading="lazy" decoding="async" /></a>
  <figcaption>After the operating-system sign-in, open the background app and confirm the expected workspace and pairing states. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

When enabled on a supported build, Dosya registers once for the current operating-system account and launches at the next sign-in. A macOS or Windows login launch stays hidden until you open it from the tray or menu bar. Disabling the switch removes that requested login behavior; it does not sign out of Dosya, remove sync pairs or delete files.

## Troubleshooting

**The switch is absent.** A sandboxed Mac App Store build hides it on macOS 12 or when the OS version is unreadable. Update macOS to 13 or later, or start Dosya manually. Workspace permissions will not make this control appear.

**The switch returns to off.** The app reports the state accepted by the operating system. Check the system's login-item controls and security policy, then try once more. Reinstalling is unnecessary until you have ruled out an OS refusal.

**Two copies appear to start.** Remove any separate shortcut, scheduled task or manually added login item, then keep the in-app switch as the single registration. The Windows getter also recognizes an older executable login entry, which can explain a legacy setup.

**Dosya started but no window appeared on macOS or Windows.** That is the intended hidden state for an automatic login launch. Use the tray or menu-bar icon; then inspect Sync Overview for errors.

## Related guides

- [Install and sign in to the desktop app](/desktop/install-and-sign-in)
- [Check for desktop updates](/desktop/desktop-check-updates)
