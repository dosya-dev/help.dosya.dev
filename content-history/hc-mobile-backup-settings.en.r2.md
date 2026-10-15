---
{
  "articleId": "hc-mobile-backup-settings",
  "locale": "en",
  "revision": 2,
  "title": "Change mobile backup settings",
  "summary": "Change photo or video inclusion, network behavior and destination carefully, then verify which new items use the updated configuration.",
  "category": "files",
  "articleSlug": "mobile-backup-settings",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current change mobile backup settings workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-backup-setup",
    "hc-upload-states"
  ],
  "keywords": [
    "mobile backup settings",
    "Wi-Fi backup",
    "video backup",
    "cloud storage",
    "file backup"
  ]
}
---
Backup settings affect future selection and transfer behavior; changing a destination does not move copies already uploaded.

New settings govern later backup selection and transfers. They do not relocate uploads that already exist or recreate device originals that were removed.

<figure class="help-screenshot"><a href="/screenshots/mobile-backup-settings-workflow-map-2026-10-14.webp"><img src="/screenshots/mobile-backup-settings-workflow-map-2026-10-14.webp" alt="Four-step interface map for change mobile backup settings, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a href="/screenshots/mobile-backup-settings-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: change mobile backup settings

1. Open mobile Backup settings.
2. Review the active workspace and destination.
3. Change photo, video or network choices.
4. Save and keep the app open for a controlled test.
5. Verify the next eligible item in the destination.
6. Check existing copies separately before cleaning the device.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel showing the supported mobile download choices reviewed before installation." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the current official store listing for the device platform. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Keep one eligible photo as a test. Confirm that its network, media-type and destination behavior matches the saved choices.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The change mobile backup settings workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Set up mobile backup](/files/mobile-photo-backup)
- [Monitor mobile backup](/files/mobile-backup-progress)
