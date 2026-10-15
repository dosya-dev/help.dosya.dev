---
{
  "articleId": "hc-hide-folder",
  "locale": "en",
  "revision": 4,
  "title": "Hide a folder from selected roles",
  "summary": "Choose the roles that should not see it and save, then verify that a permitted test role can see it while a hidden role cannot.",
  "category": "files",
  "articleSlug": "hide-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-lock-hide",
    "hc-workspace-policies"
  ],
  "keywords": [
    "hide folder",
    "file and folder protection",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to hide a folder from selected roles in the intended account or workspace.

The main checks are the active workspace, folder path and target item. Start with one harmless item and compare the source and destination after refreshing the view.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/hide-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/hide-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/hide-folder-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/hide-folder-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/hide-folder-workflow-map-2026-10-14.webp" alt="Four-step interface map for hide a folder from selected roles, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/hide-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/hide-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/hide-folder-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Files → Hide in the current released Dosya client.
- Confirm the active account and workspace, then identify a non-sensitive test folder.

## Steps: hide a folder from selected roles

1. Open Files → Hide and confirm the active workspace.
2. Select a non-sensitive test folder and check its name or identifying details.
3. Choose the roles that should not see it and save.
4. Verify that a permitted test role can see it while a hidden role cannot.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya protection dialog showing file lock choices and access controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Check the protection mode and affected roles before saving. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that a permitted test role can see it while a hidden role cannot.

## Expected result

The workflow completes for the controlled test and a permitted test role can see it while a hidden role cannot.

## Troubleshooting

**The expected control is missing.** Return to Files → Hide, confirm the active workspace and check that your role permits the action.

## Related guides

- [Lock and hide files](/files/lock-and-hide)
- [Workspace policies](/workspaces/policies)
