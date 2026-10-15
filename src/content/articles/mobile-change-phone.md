---
{
  "articleId": "hc-mobile-change-phone",
  "locale": "en",
  "revision": 6,
  "title": "Change phones without losing cloud copies",
  "summary": "Confirm the old phone finished uploading, revoke its session, sign in on the replacement, and restore device-only backup settings without duplicates.",
  "category": "account",
  "articleSlug": "mobile-change-phone",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14 against apps/mobile/app/(tabs)/backup.tsx, apps/mobile/app/backup-settings.tsx, apps/mobile/src/backup/settings.ts, apps/mobile/src/backup/ledger.ts, apps/mobile/src/backup/orchestrator.ts, apps/mobile/app/sessions.tsx, apps/mobile/src/auth/purge.ts, and the sessions API. No real handset migration or production workspace was exercised.",
  "related": [
    "hc-mobile-backup-progress",
    "hc-sessions",
    "hc-review-duplicates"
  ],
  "keywords": [
    "change phone cloud backup",
    "move Dosya to new iPhone",
    "Android photo backup migration",
    "keep cloud photos",
    "revoke old phone session"
  ]
}
---
Files that reached a Dosya workspace belong to the account, not the phone that uploaded them. A replacement handset can browse those cloud copies after sign-in. The old device's upload queue, backup ledger, permissions, selected folders and backup switches are local state and must not be treated as proof that the server has every item.

Finish verification before erasing or trading in the old phone. Deleting a local original that never reached **Backed up** can be irreversible if no other copy exists.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-change-phone-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-change-phone-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-change-phone-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-change-phone-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-change-phone-workflow-map-2026-10-14.webp" alt="Phone replacement workflow covering backup completion, cloud verification, new-device setup, and old-session revocation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Verify the remote copies first, configure the new library deliberately, and revoke the retired phone only after the replacement works. <a class="workflow-map-full" href="/screenshots/mobile-change-phone-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-change-phone-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-change-phone-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Keep both phones powered and connected until the important cloud files have been checked from another signed-in client.
- On the old phone, open **Backup** and resolve any storage, network, permission or membership pause shown in the engine status.
- Leave **Delete originals after backup** off while checking the move unless you already understand and want its operating-system deletion confirmation.
- Know which Dosya account and workspace receive the backups. A second account or similarly named workspace will show a different file set.

## Steps

1. On the old device, open **Backup** and wait until scanning and uploads are idle. Review the latest activity entry for **backed up**, **already backed up**, **failed** and **skipped large** counts.
2. Open several recent and important files from the web app or another trusted Dosya client. Confirm their filenames, previews and intended workspace rather than relying only on a completion percentage.
3. Install Dosya on the replacement phone from its supported platform channel and sign in with the same account. Complete 2FA if requested.
4. In **Files**, select the original workspace and open the same sample items. Cloud content should be available before photo permission is granted on the new phone.
5. Open **Backup** and choose the new device's photo access. The phone may expose a different library, album list or selected-photo scope than the old one.
6. Enter **Settings → Backup**. Recreate **Photos**, **Videos**, **Device folders**, **Start from**, **Skip large files**, **Automatic backup**, **Wi-Fi only**, **Only while charging** and the destination workspaces as needed. These settings do not roam with the account.
7. Run a small manual backup and inspect its activity. Dosya checks file fingerprints against each destination workspace; an existing match is counted as **already backed up** and linked instead of sending the bytes again.
8. When the new phone can browse and back up correctly, open **Settings**, tap the name-and-email account card, then choose **Sessions**. Locate the old mobile session by device label and last activity, then use its sign-out icon. The current row is marked **This device** and cannot be revoked from that row.
9. If you still hold the old phone, use **Settings → Sign out** there as well. Only after the cloud checks and session cleanup should you erase the handset.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Platform availability reference used when installing Dosya on a replacement iPhone or Android phone." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Install the correct platform build on the replacement, then reuse the verified Dosya account. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The replacement phone opens the verified cloud files, uses a newly reviewed permission and backup configuration, and records its own mobile session. The retired phone loses future account access after its session is revoked. Server-side files remain in their workspaces throughout this process.

## What does not transfer automatically

- The per-workspace backup ledger and history live on the handset. The new device reconstructs coverage by scanning its library and checking fingerprints with the server.
- Cached thumbnails, downloaded file bytes, staged uploads, contact-backup state, active workspace selection and pending queue entries are local.
- Biometric-lock preference is device-wide. Configure it separately on the new phone; removing the old app or wiping the old handset removes that device's local preference.
- Photo and notification grants belong to each operating-system installation. A grant on one phone gives the other no access.
- Revoking a session blocks that credential; it does not delete the account or cloud storage. **Sign out all other devices** removes every other browser and mobile session while keeping the phone performing the action signed in.

## Troubleshooting

**Recent photos are absent in the cloud.** Return to the old phone and inspect failed, skipped or pending work. Do not erase it until another client can open the missing items.

**The new scan finds thousands of candidates.** Recheck **Start from**, media types and device folders before continuing. A fresh local ledger is expected, while server fingerprint matching prevents verified existing content from uploading again.

**A duplicate appears anyway.** The source may have changed, lost readable bytes, or landed in another workspace. Compare file size and destination, then use the duplicate review instead of deleting blindly.

**The old phone still opens cached content.** A remote session revocation stops authenticated server requests; erase the old device or uninstall the app to remove bytes already cached locally.

## Related guides

- [Monitor mobile backup progress](/files/mobile-backup-progress)
- [Review and revoke sessions](/account/sessions)
- [Review duplicate files](/files/review-duplicates)
