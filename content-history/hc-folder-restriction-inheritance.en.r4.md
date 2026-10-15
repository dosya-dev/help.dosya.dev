---
{
  "articleId": "hc-folder-restriction-inheritance",
  "locale": "en",
  "revision": 4,
  "title": "Understand inherited folder restrictions",
  "summary": "Compare the parent restriction with the child access result, then verify that the effective access matches the parent boundary.",
  "category": "files",
  "articleSlug": "folder-restriction-inheritance",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-lock-hide",
    "hc-workspace-policies"
  ],
  "keywords": [
    "folder restriction inheritance",
    "file and folder protection",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to understand inherited folder restrictions in the intended account or workspace.

The main checks are the active workspace, folder path and target item. Start with one harmless item and compare the source and destination after refreshing the view.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14.webp" data-light-href="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14.webp" alt="Four-step interface map for understand inherited folder restrictions, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14.webp" data-light-href="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Files and workspace access settings in the current released Dosya client.
- Confirm the active account and workspace, then identify a child item inside a restricted folder.

## Steps: understand inherited folder restrictions

1. Open Files and workspace access settings and confirm the active workspace.
2. Select a child item inside a restricted folder and check its name or identifying details.
3. Compare the parent restriction with the child access result.
4. Verify that the effective access matches the parent boundary.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya protection dialog showing file lock choices and access controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Check the protection mode and affected roles before saving. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that the effective access matches the parent boundary.

## Expected result

The workflow completes for the controlled test and the effective access matches the parent boundary.

## Troubleshooting

**The expected control is missing.** Return to Files and workspace access settings, confirm the active workspace and check that your role permits the action.

## Related guides

- [Lock and hide files](/files/lock-and-hide)
- [Workspace policies](/workspaces/policies)
