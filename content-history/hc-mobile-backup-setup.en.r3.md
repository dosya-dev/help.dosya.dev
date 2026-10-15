---
{
  "articleId": "hc-mobile-backup-setup",
  "locale": "en",
  "revision": 3,
  "title": "Set up automatic mobile photo backup",
  "summary": "Choose a destination, grant the required photo access, enable backup and verify one harmless photo reaches the intended workspace.",
  "category": "files",
  "articleSlug": "mobile-photo-backup",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current set up automatic mobile photo backup workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-permissions",
    "hc-mobile-backup-settings",
    "hc-storage-usage"
  ],
  "keywords": [
    "automatic photo backup",
    "phone backup",
    "camera roll backup",
    "cloud storage",
    "file backup"
  ]
}
---
Automatic backup needs photo-library permission, a fixed destination and enough storage. Test one recent item before relying on background operation.

The first run proves permission, destination, workspace and available storage together. Background behaviour can differ after the app leaves the foreground.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-photo-backup-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-photo-backup-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-photo-backup-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-photo-backup-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-photo-backup-workflow-map-2026-10-14.webp" alt="Four-step interface map for set up automatic mobile photo backup, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/mobile-photo-backup-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-photo-backup-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-photo-backup-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: set up automatic mobile photo backup

1. Sign in and select the intended workspace.
2. Open mobile backup setup.
3. Choose the destination folder or backup area.
4. Grant the minimum photo-library access needed.
5. Enable photo and video choices intentionally.
6. Keep the app open for the first test and verify the cloud copy.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel showing the supported mobile download choices reviewed before installation." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the current official store listing for the device platform. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Use one recent harmless photo, keep the app open for its first transfer, then open the cloud copy from Files in the same workspace.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The set up automatic mobile photo backup workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Manage mobile permissions](/account/mobile-permissions)
- [Change backup settings](/files/mobile-backup-settings)
- [Understand storage usage](/uploading/storage-usage)
