---
{"articleId":"hc-mobile-biometric-lock","locale":"en","revision":6,"title":"Turn on biometric app lock","summary":"Protect the signed-in mobile app with an enrolled device biometric, test the lock after backgrounding, and recover safely if biometrics become unavailable.","category":"account","articleSlug":"mobile-biometric-lock","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed on 2026-10-14 against local sources apps/mobile/app/security.tsx, apps/mobile/src/auth/biometric.ts, apps/mobile/src/auth/BiometricGate.tsx, apps/mobile/src/auth/purge.ts, and their focused Jest tests. The biometric prompt and OS fallback were not tried on a physical device or production service.","related":["hc-mobile-signin","hc-sessions","hc-mobile-switch-account"],"keywords":["Dosya biometric lock","Face ID cloud storage app","Android fingerprint app lock","mobile account security","unlock Dosya"]}
---
**Unlock with biometrics** protects the signed-in Dosya interface on one phone. It uses biometric hardware already enrolled with the operating system and does not replace the account password, enable two-factor authentication, encrypt cloud files differently or revoke any session.

The control is available to every signed-in account regardless of plan or workspace role. Dosya hides the entire **App lock** section when the device reports no biometric hardware or no enrolled identity.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" alt="Biometric app-lock workflow from the Security switch to a background-and-return unlock test." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Enable the local preference, send Dosya to the background, and return to verify the actual unlock gate. <a class="workflow-map-full" href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Add Face ID, Touch ID or a supported Android biometric in the phone's security settings.
- Sign in to the Dosya account whose open app you want to protect.
- Remember the Dosya account password and keep any 2FA recovery method available. App lock is not an account-recovery method.
- Finish or pause sensitive file work before testing so a canceled biometric prompt does not interrupt an action you were reviewing.

## Steps

1. In Dosya, open **Settings**.
2. Select **Security**, whose description is **Password, 2FA & biometric unlock**. The destination screen is titled **Password & 2FA**.
3. Under **App lock**, turn on **Unlock with biometrics**. The switch stores the preference immediately; the current implementation does not show an enrollment confirmation prompt at this moment.
4. Send Dosya fully to the background by opening another app. Merely displaying the system biometric sheet creates an inactive state, not a real background event, so Dosya intentionally does not loop another prompt after a successful unlock.
5. Return to Dosya. The operating system shows the prompt with **Unlock dosya.dev**.
6. Complete the enrolled biometric. If authentication is canceled or fails, Dosya displays **Locked** with an **Unlock** button; tap it to try again.
7. Reopen **Settings → Security** and confirm **Unlock with biometrics** remains on after a normal app restart.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity view used to verify which signed-in account the local app lock is covering." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Check the profile identity before testing a device-level lock on a shared handset. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Returning from a genuine background state invokes local authentication before Dosya renders the signed-in tabs. A successful check opens the app immediately. A canceled or unsuccessful attempt leaves the **Locked** screen visible and offers another **Unlock** action.

## Device and account consequences

- The preference is stored in secure device storage under the installation. Explicit sign-out and account-switch cleanup deliberately keep it, so the next signed-in account on that phone is protected too.
- If biometric hardware becomes unavailable or all enrolled biometrics are removed, Dosya fails open instead of trapping the user behind an impossible gate. Re-enroll at the OS level, then revisit the switch.
- The app does not send a biometric template to Dosya. The Expo local-authentication bridge returns only whether the system check succeeded.
- The lock applies after the app returns from the background and on startup. It is separate from the one-hour access token and the renewable 60-day mobile session.
- Turning the switch off removes the local preference. That action is immediate and does not require a workspace permission.

## Troubleshooting

**The App lock section is missing.** The source displays it only when the OS reports both compatible hardware and an enrolled biometric. Configure one in system security settings and reopen **Password & 2FA**.

**No prompt appeared when the switch moved.** This is expected. Background Dosya, open it again, and test the gate on return.

**The screen stays on Locked.** Tap **Unlock** and complete the OS dialog. If the enrolled identity no longer works, close Dosya, repair or remove that enrollment in system settings, and reopen the app. With no usable biometric, Dosya opens without the gate so you can revisit the switch.

**Changing accounts did not turn the option off.** App lock is intentionally device-level. Disable **Unlock with biometrics** in the new session if that is not appropriate for the new user.

## Related guides

- [Sign in to Dosya on mobile](/account/mobile-sign-in)
- [Review and revoke sessions](/account/sessions)
- [Switch accounts in the mobile app](/account/mobile-switch-account)
