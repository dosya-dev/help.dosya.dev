---
{
  "articleId": "hc-mobile-recheck-permissions-after-update",
  "locale": "en",
  "revision": 5,
  "title": "Recheck mobile permissions after an OS update",
  "summary": "Recheck photo and notification permissions after a mobile update, refresh the affected feature screens, and distinguish OS denial from Dosya settings.",
  "category": "account",
  "articleSlug": "mobile-recheck-permissions-after-update",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally on 2026-10-14 with apps/mobile/app/(tabs)/backup.tsx, apps/mobile/src/backup/scanner.ts, apps/mobile/app/notification-settings.tsx, apps/mobile/src/notifications/push.ts, apps/mobile/app/_layout.tsx, and permission tests. No device settings or production state changed.",
  "related": [
    "hc-mobile-install",
    "hc-mobile-permissions"
  ],
  "keywords": [
    "mobile recheck permissions after update",
    "Mobile setup and permission details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
An app or operating-system update does not grant new access automatically. Recheck the feature screen and device settings when backup or push changes after an update.

<figure class="help-screenshot"><a href="/screenshots/mobile-recheck-permissions-after-update-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-recheck-permissions-after-update-help-workflow-2026-10-14.webp" alt="Post-update mobile permission review for photo access, notification delivery, and Android distribution channel." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Reopen each feature so Dosya rereads the operating system state after an update. <a href="/screenshots/mobile-recheck-permissions-after-update-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Settings** in Dosya and note the **Version** shown at the bottom. Direct Android builds may also show **Version X is available**; store builds rely on their store’s updater.
2. Open **Backup**. The screen rereads photo permission every time it gains focus. **Allow photo access** means no usable permission; **Limited photo access** means only selected media can be scanned.
3. If needed, tap the relevant attention row. Limited access opens system settings; a first permission request is started from Dosya’s explanatory flow.
4. Return to Backup and wait for coverage counts to refresh. Removing permission can make the library total unavailable without deleting cloud copies.
5. Open **Settings → Notifications** and review **In-app** and **Push notifications**. Compare them with the OS notification permission and, on Android, the **Notifications** channel.
6. Toggle Push off/on only when registration needs repair. This unregisters/registers the current device best-effort and may show the OS prompt if it can still be asked.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile availability page used to verify the installed platform and update channel." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Permission recovery starts by confirming which supported build is installed. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

Photo permission may be full, limited/selected, or denied. Push permission is device-wide, while Dosya’s delivery channel is stored for the signed-in account. Reinstalling resets app-local permission prompting and configuration, but can also remove tokens, cache, queued uploads, and backup settings from the phone.

## Expected result

Backup accurately reports the current photo scope, and push reflects both the account switch and OS authorization. Existing cloud files and previously recorded notifications are not modified by this review.

## Troubleshooting

**Returning from Settings shows old photo state.** Leave and reopen the Backup tab so its focus refresh runs. If the OS still says limited, add the missing photos or choose full access there.

**Push remains silent.** Test the inbox first. If the row exists, check focus mode, alert/sound configuration, Android channel importance, physical-device status, and registration. If no row exists, review In-app and the event group.

**The update came from another Android channel.** Play and direct builds have incompatible signatures. Do not try to install one over the other; switch channels only after completing uploads and accepting the local-data reset from uninstalling.

## Related guides

- [Verify the current mobile release](/account/mobile-install)
- [Revisit every post-update permission](/account/mobile-permissions)
