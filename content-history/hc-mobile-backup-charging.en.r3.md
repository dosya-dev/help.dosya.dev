---
{
  "articleId": "hc-mobile-backup-charging",
  "locale": "en",
  "revision": 3,
  "title": "Keep backup running while charging",
  "summary": "Set the desired charging rule and test with a few items, then verify that the run state explains when the rule pauses work.",
  "category": "files",
  "articleSlug": "mobile-backup-charging",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current keep backup running while charging workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-backup-setup",
    "hc-mobile-backup-settings"
  ],
  "keywords": [
    "mobile backup charging",
    "mobile backup controls",
    "Dosya help",
    "file transfer"
  ]
}
---
Use this workflow to keep backup running while charging in the intended account or workspace.

The main checks are the mobile account, workspace and device permission. Use a non-confidential mobile test and confirm the cloud result from Files before removing device data.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-backup-charging-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-charging-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-charging-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-backup-charging-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-backup-charging-workflow-map-2026-10-14.webp" alt="Four-step interface map for keep backup running while charging, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/mobile-backup-charging-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-charging-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-charging-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Mobile Backup settings in the current released Dosya client.
- Confirm the active account and workspace, then identify the charging and background options.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: keep backup running while charging

1. Open Mobile Backup settings and confirm the active workspace.
2. Select the charging and background options and check its name or identifying details.
3. Set the desired charging rule and test with a few items.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the run state explains when the rule pauses work.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel used before configuring backup on a supported device." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Keep the app updated and review operating-system photo and background permissions. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that the run state explains when the rule pauses work. Refresh or reopen the view once to confirm the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The workflow completes for the controlled test and the run state explains when the rule pauses work. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Backup settings, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Set up mobile backup](/files/mobile-photo-backup)
- [Change backup settings](/files/mobile-backup-settings)
