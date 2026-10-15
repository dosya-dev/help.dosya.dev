---
{"articleId":"hc-contacts-source","locale":"en","revision":2,"title":"Control which phone contacts Dosya backs up","summary":"Understand the contact scope used by Dosya mobile backup, review the phone address book before export, and create a verified vCard copy in your active cloud workspace.","category":"files","articleSlug":"contacts-source","status":"published","lastReviewed":"2026-10-14","verification":"Verified against current local product source for the Contacts screen, device permission flow, paged address-book reader, vCard export, workspace folder path, and restore behavior on 2026-10-14.","related":["hc-mobile-permissions","hc-mobile-backup-settings"],"keywords":["choose contact account backup","phone contacts cloud backup","vCard backup","mobile contact backup","Dosya contacts"]}
---
Dosya backs up the contacts that the phone exposes through its system address book permission. The current Dosya mobile app does not include an account picker for Google, iCloud, Exchange, SIM, or local-only contact sources. When you tap **Back up contacts now**, Dosya reads all contacts available to the app and writes them into one `.vcf` file.

<figure class="help-screenshot"><a href="/screenshots/mobile-contacts-backup-map-2026-10-14.webp"><img src="/screenshots/mobile-contacts-backup-map-2026-10-14.webp" alt="Interface map for granting contacts access and creating a vCard backup." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the workspace, allow contact access, start the backup, and verify the dated vCard file. <a href="/screenshots/mobile-contacts-backup-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

### Review the source before backing up

1. Open the phone's Contacts app and review the contacts currently available on the device.
2. If your Contacts app can filter by account or list, use that view to understand which accounts contribute records. A filtered view in the Contacts app does not necessarily change what other apps can read.
3. Merge or remove unwanted duplicates in the phone's address book before the backup if you do not want them included.
4. In Dosya, confirm the active workspace. Contact backups are written to that workspace under **Mobile Backup / [device name] / Contacts**.
5. Open **Settings → Contacts** in Dosya.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile download choices for iPhone and Android." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the current released mobile app for contact backup. The Contacts workflow runs on the phone because it needs the device address-book permission. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: allow access and create the vCard backup

1. Read the permission explanation on the **Contacts** screen.
2. Tap **Allow contacts access**, then approve the operating-system prompt. Dosya asks from this screen so you can see why access is needed before the OS dialog appears.
3. Tap **Back up contacts now**.
4. Wait for the confirmation showing how many contacts were queued and the generated filename, such as `contacts-2026-10-14.vcf`.
5. Check **Last backup** on the Contacts screen, then browse the active workspace to confirm the new file exists in the Contacts folder.

The vCard contains contact names plus available phone numbers and email addresses. Photos and account-provider metadata are not part of this export. Dosya reads the address book in pages, so a large contact list is still exported into a single file.

## Back up only one account

Because Dosya has no source selector, do not assume choosing a filtered list in the phone's Contacts app limits the export. If you require a backup from only one provider, export that account from the provider or the phone's contact-management tools as a separate `.vcf`, then upload that file to Dosya. This preserves the intended scope without temporarily deleting contacts from the device.

## Troubleshooting

### If contacts access is missing

If access was declined, the Dosya screen tells you to enable it in device settings. Open the operating-system app settings for Dosya, allow Contacts access, return to Dosya, and reopen **Contacts**. The screen checks permission again whenever it receives focus.

Before using **Restore from latest backup**, remember that restore adds records to the phone and does not merge them with existing contacts. Review the latest `.vcf` first because restoring the same backup twice can create duplicates.

## Expected result

The Contacts screen shows a recent **Last backup** time and the active workspace contains one dated vCard in **Mobile Backup / [device name] / Contacts**.

## Limits and important details

Dosya exports all contacts exposed by the operating system and has no per-account selector. Restore adds records without merging, so duplicate contacts are possible.

## Related guides

- [Manage mobile permissions](/account/mobile-permissions)
- [Choose mobile backup settings](/files/mobile-backup-settings)
