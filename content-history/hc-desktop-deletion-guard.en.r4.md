---
{
  "articleId": "hc-desktop-deletion-guard",
  "locale": "en",
  "revision": 4,
  "title": "Protect against unexpected mass deletion",
  "summary": "Review a deletion warning before approving or rejecting it, then verify that large unexpected deletion does not proceed silently.",
  "category": "desktop",
  "articleSlug": "desktop-deletion-guard",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

## Steps: protect against unexpected mass deletion

1. Open Desktop Sync issues and confirm the active workspace.
2. Select a test sync pair and check its name or identifying details.
3. Review a deletion warning before approving or rejecting it.
4. Verify that large unexpected deletion does not proceed silently.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Verified Dosya desktop Sync Activity view showing transfer and connection state." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Use a small test pair and let its current activity settle before changing advanced sync behavior. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm the deletion remains paused, compare both sides of the sync pair and approve only a controlled test after the cause is understood.

## Expected result

The workflow completes for the controlled test and large unexpected deletion does not proceed silently.

## Troubleshooting

**The expected control is missing.** Return to Desktop Sync issues, confirm the active workspace and check that your role permits the action.

## Related guides

- [Diagnose sync](/desktop/sync-issues)
- [Choose a sync mode](/desktop/sync-modes)
