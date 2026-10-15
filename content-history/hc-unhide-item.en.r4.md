---
{
  "articleId": "hc-unhide-item",
  "locale": "en",
  "revision": 4,
  "title": "Make a hidden item visible again",
  "summary": "Remove the relevant hidden rule and save, then verify that the test role can locate the item again.",
  "category": "files",
  "articleSlug": "unhide-item",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-lock-hide",
    "hc-workspace-policies"
  ],
  "keywords": [
    "unhide item",
    "file and folder protection",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to make a hidden item visible again in the intended workspace.

Removing a hidden rule makes the item visible only to people who otherwise have workspace and folder access. It does not grant a new role.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/unhide-item-workflow-map-2026-10-14.webp" data-light-href="/screenshots/unhide-item-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/unhide-item-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/unhide-item-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/unhide-item-workflow-map-2026-10-14.webp" alt="Four-step interface map for make a hidden item visible again, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/unhide-item-workflow-map-2026-10-14.webp" data-light-href="/screenshots/unhide-item-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/unhide-item-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Files → Hide in the current released Dosya client.
- Confirm the active account and workspace, then identify an item hidden from a test role.

## Steps: make a hidden item visible again

1. Open Files → Hide and confirm the active workspace.
2. Select an item hidden from a test role and check its name or identifying details.
3. Remove the relevant hidden rule and save.
4. Verify that the test role can locate the item again.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya protection dialog showing file lock choices and access controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Check the protection mode and affected roles before saving. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Test with the intended role after refresh and confirm the item appears in its normal folder without exposing unrelated content.

## Expected result

The workflow completes for the controlled test and the test role can locate the item again.

## Troubleshooting

**The expected control is missing.** Return to Files → Hide, confirm the active workspace and check that your role permits the action.

## Related guides

- [Lock and hide files](/files/lock-and-hide)
- [Workspace policies](/workspaces/policies)
