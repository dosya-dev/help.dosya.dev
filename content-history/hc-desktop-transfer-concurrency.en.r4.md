---
{
  "articleId": "hc-desktop-transfer-concurrency",
  "locale": "en",
  "revision": 4,
  "title": "Adjust desktop transfer concurrency",
  "summary": "Choose a supported concurrency level and observe activity, then verify that transfers continue within the selected resource setting.",
  "category": "desktop",
  "articleSlug": "desktop-transfer-concurrency",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14.webp" alt="Four-step interface map for adjust desktop transfer concurrency, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Desktop Sync advanced settings in the current released Dosya client.
- Confirm the active account and workspace, then identify a busy test sync pair.

## Steps: adjust desktop transfer concurrency

1. Open Desktop Sync advanced settings and confirm the active workspace.
2. Select a busy test sync pair and check its name or identifying details.
3. Choose a supported concurrency level and observe activity.
4. Verify that transfers continue within the selected resource setting.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Verified Dosya desktop Sync Activity view showing transfer and connection state." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Use a small test pair and let its current activity settle before changing advanced sync behavior. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that transfers continue within the selected resource setting.

## Expected result

The workflow completes for the controlled test and transfers continue within the selected resource setting.

## Troubleshooting

**The expected control is missing.** Return to Desktop Sync advanced settings, confirm the active workspace and check that your role permits the action.

## Related guides

- [Diagnose sync](/desktop/sync-issues)
- [Choose a sync mode](/desktop/sync-modes)
