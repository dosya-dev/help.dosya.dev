---
{
  "articleId": "hc-contacts-permission-troubleshoot",
  "locale": "en",
  "revision": 6,
  "title": "Troubleshoot mobile contacts permission",
  "summary": "Restore Contacts access for Dosya, understand when the prompt appears, and re-enable backup or restore without exposing the address book unexpectedly.",
  "category": "files",
  "articleSlug": "contacts-permission-troubleshoot",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/mobile/app/contacts.tsx, apps/mobile/app/(tabs)/(files)/file/[id].tsx, apps/mobile/src/contacts/contactsSource.ts, restoreContacts.ts, and their tests on 2026-10-14; production device permission prompts were not exercised.",
  "related": [
    "hc-mobile-permissions",
    "hc-mobile-backup-settings"
  ],
  "keywords": [
    "contacts permission troubleshoot",
    "mobile contact backup",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Dosya can ask for address-book access from the mobile **Contacts** screen or when you restore an opened vCard to the phone. Phone permission and workspace cloud rules are separate checks.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/contacts-permission-troubleshoot-workflow-map-2026-10-14.webp" data-light-href="/screenshots/contacts-permission-troubleshoot-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/contacts-permission-troubleshoot-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/contacts-permission-troubleshoot-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/contacts-permission-troubleshoot-workflow-map-2026-10-14.webp" alt="Contacts permission recovery from the Dosya explanation through device Settings and enabled backup controls." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Follow the permission state from Dosya to the operating-system decision, then return to confirm both contact actions are enabled. <a class="workflow-map-full" href="/screenshots/contacts-permission-troubleshoot-workflow-map-2026-10-14.webp" data-light-href="/screenshots/contacts-permission-troubleshoot-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/contacts-permission-troubleshoot-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Permission behavior

Before access is granted, the **Contacts** screen explains that the address book becomes one .vcf in the workspace and says **Access only happens when you tap Allow**. Opening that screen checks status without prompting. **Back up contacts now** and **Restore from latest backup** remain disabled until Contacts access is granted and an active workspace exists.

On the **Contacts** screen, **Allow contacts access** is the only control that can open the permission prompt before either action is enabled. Its label becomes **Requesting…**, and a concurrent second tap is ignored. After denial, that button disappears and Dosya says **Contacts access was declined. You can turn it on from your device Settings, then come back here.**

There is a second request path outside that screen: open a `.vcf` file in **Files**, open its actions, and choose **Restore to phone**. Restore requests Contacts permission before it adds anything. If access is refused, the toast reads **Contacts permission was denied** and no contact is added.

## Steps

1. Open mobile **Settings** > **Contacts**.
2. Select **Allow contacts access** once and accept the OS request.
3. After a prior refusal, enable Contacts for Dosya in device Settings.
4. Return to Dosya. The screen rechecks permission whenever focus returns.
5. Confirm a workspace is active, then start backup or restore. Both **Contacts**-screen actions require that workspace and granted Contacts permission; a lower-level refusal reads **Contacts permission was denied**.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability cards confirming contact permission belongs to the installed phone application." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Contact access is handled by the installed client and phone privacy settings rather than the browser help site. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The primer disappears when the OS reports access as granted. With an active workspace, both **Contacts**-screen actions enable. Role, lock, folder, quota, and network checks can still refuse the cloud operation.

Revoking permission later blocks new scans and restores. It does not delete existing cloud vCards, contacts already added to the phone, or copies shared from Files.

## Troubleshooting

- **The prompt does not return.** Enable access in device Settings, then reopen Contacts.
- **Buttons stay disabled.** Select an active workspace, then leave and re-enter the screen so its permission focus check finishes.
- **Backup still fails.** Confirm folder creation, upload access, and storage.
- **Latest restore fails.** Verify reachability and download access.

## Related guides

- [Mobile permissions](/account/mobile-permissions)
- [Mobile backup settings](/files/mobile-backup-settings)
