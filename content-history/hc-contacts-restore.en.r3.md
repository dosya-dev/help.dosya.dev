---
{
  "articleId": "hc-contacts-restore",
  "locale": "en",
  "revision": 3,
  "title": "Restore contacts to a phone",
  "summary": "Review the backup date and restore to the intended account, then verify that the restored contacts appear in the device contacts app.",
  "category": "files",
  "articleSlug": "contacts-restore",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current restore contacts to a phone workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-permissions",
    "hc-mobile-backup-settings"
  ],
  "keywords": [
    "contacts restore",
    "mobile contact backup",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to restore contacts to a phone in the intended account or workspace.

The main checks are the mobile account, workspace and device permission. Use a non-confidential mobile test and confirm the cloud result from Files before removing device data.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/contacts-restore-workflow-map-2026-10-14.webp" data-light-href="/screenshots/contacts-restore-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/contacts-restore-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/contacts-restore-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/contacts-restore-workflow-map-2026-10-14.webp" alt="Four-step interface map for restore contacts to a phone, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/contacts-restore-workflow-map-2026-10-14.webp" data-light-href="/screenshots/contacts-restore-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/contacts-restore-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Mobile Contacts restore in the current released Dosya client.
- Confirm the active account and workspace, then identify a test contact backup.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: restore contacts to a phone

1. Open Mobile Contacts restore and confirm the active workspace.
2. Select a test contact backup and check its name or identifying details.
3. Review the backup date and restore to the intended account.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the restored contacts appear in the device contacts app.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel used before starting a device-only contacts workflow." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use a small test contact set and confirm the device contact account before a restore. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that the restored contacts appear in the device contacts app. Refresh or reopen the view once to confirm the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The workflow completes for the controlled test and the restored contacts appear in the device contacts app. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Contacts restore, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Mobile permissions](/account/mobile-permissions)
- [Mobile backup settings](/files/mobile-backup-settings)
