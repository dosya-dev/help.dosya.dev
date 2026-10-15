---
{
  "articleId": "hc-mobile-backup-network",
  "locale": "en",
  "revision": 3,
  "title": "Choose Wi-Fi or cellular backup",
  "summary": "Select the allowed network types and save, then verify that the backup waits or runs according to the saved policy.",
  "category": "files",
  "articleSlug": "mobile-backup-network",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current choose wi-fi or cellular backup workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-backup-setup",
    "hc-mobile-backup-settings"
  ],
  "keywords": [
    "mobile backup network",
    "mobile backup controls",
    "Dosya help",
    "cloud storage",
    "file backup"
  ]
}
---
Use this workflow to choose Wi-Fi or cellular backup in the intended workspace. Start with a harmless test item when the action changes stored data or access.

The network policy controls when eligible transfers may run. Cellular backup can use a meaningful amount of mobile data.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-backup-network-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-network-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-network-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-backup-network-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-backup-network-workflow-map-2026-10-14.webp" alt="Four-step interface map for choose wi-fi or cellular backup, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/mobile-backup-network-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-network-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-network-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Mobile Backup settings in the current released Dosya client.
- Confirm the active account and workspace, then identify the network policy.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: choose Wi-Fi or cellular backup

1. Open Mobile Backup settings and confirm the active workspace.
2. Select the network policy and check its name or identifying details.
3. Select the allowed network types and save.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the backup waits or runs according to the saved policy.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel used before configuring backup on a supported device." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Keep the app updated and review operating-system photo and background permissions. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Test with one pending item and observe whether it waits or transfers on the currently allowed connection type.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and the backup waits or runs according to the saved policy. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Backup settings, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Set up mobile backup](/files/mobile-photo-backup)
- [Change backup settings](/files/mobile-backup-settings)
