---
{"articleId":"hc-mobile-permissions","locale":"en","revision":6,"title":"Manage mobile photo and notification permissions","summary":"Set full, limited or denied photo access and control notification delivery on iPhone or Android without changing files already stored in Dosya.","category":"account","articleSlug":"mobile-permissions","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed on 2026-10-14 from apps/mobile/src/onboarding/permissions.ts, apps/mobile/src/onboarding/steps/PhotoAccessStep.tsx, apps/mobile/src/onboarding/steps/PermissionDeniedStep.tsx, apps/mobile/src/backup/scanner.ts, apps/mobile/app/(tabs)/backup.tsx, apps/mobile/app/notification-settings.tsx, and apps/mobile/src/notifications/push.ts. No permission prompt was exercised on physical hardware or against the production push service.","related":["hc-mobile-backup-setup","hc-mobile-backup-limited-photo-access","hc-notification-preferences"],"keywords":["Dosya mobile permissions","iPhone photo access","Android selected photos","cloud photo backup permission","push notification settings"]}
---
The phone's operating system decides whether Dosya can read photos and display notifications. Dosya then applies its own backup filters and notification preferences inside that allowed scope. Neither permission is granted by a workspace role or paid plan.

Photo access has three useful states: full access exposes the library, limited access exposes only selected items, and denied access prevents a scan. iOS calls partial access **Limited**; Android 14 presents **Select photos** and reports the same limited state to Dosya.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-permissions-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-permissions-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-permissions-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-permissions-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-permissions-workflow-map-2026-10-14.webp" alt="Permission workflow showing photo scope, notification registration, and a return to Dosya for verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Choose an operating-system scope, return to the relevant Dosya screen, and verify one safe action. <a class="workflow-map-full" href="/screenshots/mobile-permissions-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-permissions-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-permissions-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

### Set photo access

1. Open Dosya and select **Backup**.
2. If access has not been decided, tap the backup setup action and read **Turn on photo backup**. Tap **Continue** to open the one operating-system prompt used by onboarding.
3. Choose full library access for broad backup coverage, selected or limited access for a smaller OS-controlled scope, or deny the request if you do not want Dosya to read the library.
4. When access is denied, use **Open Settings** on the **Photo access is off** screen. On iPhone follow **Settings → dosya.dev → Photos → Full Access**. On Android follow **Settings → Apps → dosya.dev → Permissions → Photos and videos**.
5. Return to **Backup**. Dosya rechecks the permission whenever that tab receives focus.
6. If the attention list says **Limited photo access** and **Only selected photos back up. Tap to allow full access in Settings.**, tap it to change the OS scope.
7. Review **Backup settings → What to back up**. Photo permission exposes candidates; **Photos**, **Videos**, **Device folders**, **Start from** and **Skip large files** still determine what Dosya queues.

### Set notification access

1. Open **Settings → Notifications** in Dosya.
2. Under **Delivery**, turn on **Push notifications**. On a physical phone, Dosya asks the OS when it may still show the prompt, then registers that device's push token to the active account.
3. If the app reports **Enable notifications for dosya.dev in Settings.**, open the operating-system settings and allow notifications there. Once the OS says the app cannot ask again, toggling the Dosya switch cannot display another system prompt.
4. Set **In-app notifications** for the Dosya bell and notification inbox. Email and push use their own delivery switches and event-group rules, so either channel can continue while **In-app** is off.
5. Under **What you hear about**, enable the named Dosya event groups you expect to receive. Turning off a parent notification group also disables its child switches.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Mobile platform cards identifying the iPhone and Android apps whose permissions are managed by each operating system." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Permission wording differs by platform, while Dosya reads the resulting allowed, limited or denied state. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The **Backup** tab counts only media visible under the OS scope and then narrows that count through Dosya's filters. With push allowed, **Push notifications** remains enabled and this physical device is registered to the signed-in account. Denying either permission leaves existing cloud files unchanged.

## What changes and what stays

- Revoking photo access stops new scans from reading the library; it does not remove copies already uploaded to a workspace.
- Limited access can make a photo appear missing even when **Photos** and its device folder are enabled in Backup settings.
- The first signed-in session may ask for notification permission once. Later sessions silently reuse an existing decision rather than prompting on every launch.
- Push registration is unsupported on a simulator and reports **Push needs a physical device.** A build without an EAS project ID reports **Push isn't configured for this build (no EAS project id).**
- Turning **Push notifications** off unregisters that phone's token from server delivery. It does not turn off the notification groups themselves.
- Contacts permission is requested separately from the Contacts screen; first-run photo onboarding does not ask for it.

## Troubleshooting

**Backup still says photo access is off.** Reopen the Dosya app entry in system Settings and confirm the change was saved. Then leave and return to **Backup** so its focus check runs again.

**Only some images are counted.** Check for **Limited photo access** or Android's selected-photo mode before changing Dosya filters. The app cannot enumerate items the OS withheld.

**The push switch is on but no alert arrives.** Verify the relevant event group is enabled, the device is still registered, and system notifications are allowed. Push registration requires a physical device and an internet connection; the **In-app** switch affects the bell and inbox rather than push delivery.

**The operating system no longer presents a prompt.** Use the manual settings path. Dosya deliberately does not loop a permission request that the platform has marked as unavailable.

## Related guides

- [Set up mobile photo backup](/files/mobile-photo-backup)
- [Expand limited photo access](/files/mobile-backup-limited-photo-access)
- [Choose notification preferences](/account/notification-preferences)
