---
{
  "articleId": "hc-desktop-deletion-guard",
  "locale": "en",
  "revision": 3,
  "title": "Protect against unexpected mass deletion",
  "summary": "Review a deletion warning before approving or rejecting it, then verify that large unexpected deletion does not proceed silently.",
  "category": "desktop",
  "articleSlug": "desktop-deletion-guard",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current protect against unexpected mass deletion workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-sync-modes"
  ],
  "keywords": [
    "desktop deletion guard",
    "advanced desktop sync",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to protect against unexpected mass deletion in the intended account or workspace.

A mass-deletion warning protects against propagating an unexpectedly large local or cloud removal. Investigate the source before approving.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14.webp" alt="Four-step interface map for protect against unexpected mass deletion, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Desktop Sync issues in the current released Dosya client.
- Confirm the active account and workspace, then identify a test sync pair.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: protect against unexpected mass deletion

1. Open Desktop Sync issues and confirm the active workspace.
2. Select a test sync pair and check its name or identifying details.
3. Review a deletion warning before approving or rejecting it.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that large unexpected deletion does not proceed silently.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Verified Dosya desktop Sync Activity view showing transfer and connection state." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Use a small test pair and let its current activity settle before changing advanced sync behavior. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm the deletion remains paused, compare both sides of the sync pair and approve only a controlled test after the cause is understood.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The workflow completes for the controlled test and large unexpected deletion does not proceed silently. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Desktop Sync issues, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Diagnose sync](/desktop/sync-issues)
- [Choose a sync mode](/desktop/sync-modes)
