---
{
  "articleId": "hc-mobile-backup-attention",
  "locale": "en",
  "revision": 2,
  "title": "Review mobile backup items needing attention",
  "summary": "Open each warning, correct one recoverable issue and retry, then verify that the corrected item leaves the attention list.",
  "category": "files",
  "articleSlug": "mobile-backup-attention",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current review mobile backup items needing attention workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-backup-setup",
    "hc-mobile-backup-settings"
  ],
  "keywords": [
    "mobile backup attention",
    "mobile backup controls",
    "Dosya help",
    "cloud storage",
    "file backup"
  ]
}
---
Use this workflow to review mobile backup items needing attention in the intended workspace. Start with a harmless test item when the action changes stored data or access.

The attention list groups items that need a decision or a corrected condition. Resolve one cause at a time so the result is clear.

<figure class="help-screenshot"><a href="/screenshots/mobile-backup-attention-workflow-map-2026-10-14.webp"><img src="/screenshots/mobile-backup-attention-workflow-map-2026-10-14.webp" alt="Four-step interface map for review mobile backup items needing attention, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a href="/screenshots/mobile-backup-attention-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Mobile Backup → Needs attention in the current released Dosya client.
- Confirm the active account and workspace, then identify the current warning list.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: review mobile backup items needing attention

1. Open Mobile Backup → Needs attention and confirm the active workspace.
2. Select the current warning list and check its name or identifying details.
3. Open each warning, correct one recoverable issue and retry.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the corrected item leaves the attention list.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel used before configuring backup on a supported device." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Keep the app updated and review operating-system photo and background permissions. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Retry one item after correcting its displayed issue and confirm it leaves the list or returns with a more specific error.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and the corrected item leaves the attention list. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Backup → Needs attention, confirm the active workspace and check that your role permits the action.

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
