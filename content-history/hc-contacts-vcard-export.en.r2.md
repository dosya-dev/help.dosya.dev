---
{
  "articleId": "hc-contacts-vcard-export",
  "locale": "en",
  "revision": 2,
  "title": "Export contacts as a vCard",
  "summary": "Choose vCard export and save or share the file, then verify that the .vcf file opens with the expected contact count.",
  "category": "files",
  "articleSlug": "contacts-vcard-export",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current export contacts as a vcard workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-permissions",
    "hc-mobile-backup-settings"
  ],
  "keywords": [
    "contacts vcard export",
    "mobile contact backup",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to export contacts as a vCard in the intended workspace. Start with a harmless test item when the action changes stored data or access.

A vCard export can contain personal contact data. Save or share it only to an intended destination and remove disposable test exports afterward.

<figure class="help-screenshot"><a href="/screenshots/contacts-vcard-export-workflow-map-2026-10-14.webp"><img src="/screenshots/contacts-vcard-export-workflow-map-2026-10-14.webp" alt="Four-step interface map for export contacts as a vcard, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a href="/screenshots/contacts-vcard-export-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Mobile Contacts in the current released Dosya client.
- Confirm the active account and workspace, then identify a small contact selection.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: export contacts as a vCard

1. Open Mobile Contacts and confirm the active workspace.
2. Select a small contact selection and check its name or identifying details.
3. Choose vCard export and save or share the file.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the .vcf file opens with the expected contact count.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel used before starting a device-only contacts workflow." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use a small test contact set and confirm the device contact account before a restore. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Open the .vcf with a compatible contacts app and compare its contact count and sample fields before relying on the export.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and the .vcf file opens with the expected contact count. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Contacts, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Mobile permissions](/account/mobile-permissions)
- [Mobile backup settings](/files/mobile-backup-settings)
