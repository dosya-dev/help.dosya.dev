---
{
  "articleId": "hc-desktop-sync-invalid-name",
  "locale": "en",
  "revision": 3,
  "title": "Fix a desktop sync invalid-name error",
  "summary": "Rename the local item to a portable unique name, keep its extension, and retry. Verify that the renamed item enters the sync queue.",
  "category": "desktop",
  "articleSlug": "desktop-sync-invalid-name",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-sync-conflicts"
  ],
  "keywords": [
    "desktop sync invalid name",
    "Desktop sync failure details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
This guide covers **Fix a desktop sync invalid-name error** in Dosya. The main action is to rename the local item to a portable unique name, keep its extension, and retry; the decisive check is whether the renamed item enters the sync queue.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-invalid-name-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-sync-invalid-name-help-workflow-2026-10-14.webp" alt="Four-step workflow map for fix a desktop sync invalid-name error, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for fix a desktop sync invalid-name error: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/desktop-sync-invalid-name-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Issues and Activity in the Dosya desktop app in the current released client.
- Confirm the active account and workspace, then identify issue identifying an unsupported or ambiguous file name.

## Steps: fix a desktop sync invalid-name error

1. Open Issues and Activity in the Dosya desktop app and confirm the active account and workspace.
2. Locate issue identifying an unsupported or ambiguous file name and verify its name or identifying details.
3. Rename the local item to a portable unique name, keep its extension, and retry.
4. Confirm that the renamed item enters the sync queue.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-issues-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-issues-verified-2026-10-11.webp" alt="Dosya desktop Issues view listing files that need attention." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Fix one representative issue and confirm it clears before changing many files. <a href="/screenshots/desktop-sync-issues-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The renamed item enters the sync queue.

## Expected result

The controlled workflow completes and the renamed item enters the sync queue.

## Troubleshooting

**The expected control is missing.** Return to Issues and Activity in the Dosya desktop app, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Diagnose sync issues](/desktop/sync-issues)
- [Resolve conflicts](/desktop/sync-conflicts)
