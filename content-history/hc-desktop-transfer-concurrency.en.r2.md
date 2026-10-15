---
{
  "articleId": "hc-desktop-transfer-concurrency",
  "locale": "en",
  "revision": 2,
  "title": "Adjust desktop transfer concurrency",
  "summary": "Choose a supported concurrency level and observe activity, then verify that transfers continue within the selected resource setting.",
  "category": "desktop",
  "articleSlug": "desktop-transfer-concurrency",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current adjust desktop transfer concurrency workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-sync-modes"
  ],
  "keywords": [
    "desktop transfer concurrency",
    "advanced desktop sync",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to adjust desktop transfer concurrency in the intended account or workspace.

The main checks are the active workspace, local path and desktop sync state. Use a small local test and distinguish the device copy from the cloud copy before approving a broader change.

<figure class="help-screenshot"><a href="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14.webp"><img src="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14.webp" alt="Four-step interface map for adjust desktop transfer concurrency, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Desktop Sync advanced settings in the current released Dosya client.
- Confirm the active account and workspace, then identify a busy test sync pair.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: adjust desktop transfer concurrency

1. Open Desktop Sync advanced settings and confirm the active workspace.
2. Select a busy test sync pair and check its name or identifying details.
3. Choose a supported concurrency level and observe activity.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that transfers continue within the selected resource setting.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Verified Dosya desktop Sync Activity view showing transfer and connection state." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Use a small test pair and let its current activity settle before changing advanced sync behavior. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that transfers continue within the selected resource setting. Refresh or reopen the view once to confirm the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The workflow completes for the controlled test and transfers continue within the selected resource setting. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Desktop Sync advanced settings, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Diagnose sync](/desktop/sync-issues)
- [Choose a sync mode](/desktop/sync-modes)
