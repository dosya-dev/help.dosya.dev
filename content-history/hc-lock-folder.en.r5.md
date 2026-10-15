---
{
  "articleId": "hc-lock-folder",
  "locale": "en",
  "revision": 5,
  "title": "Lock a folder with a password",
  "summary": "Choose a strong unique password and save the lock, then verify that opening the protected folder requires the password.",
  "category": "files",
  "articleSlug": "lock-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-lock-hide",
    "hc-workspace-policies"
  ],
  "keywords": [
    "lock folder",
    "file and folder protection",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to lock a folder with a password in the intended workspace.

A folder lock adds a password check to the protected location while normal workspace permissions still apply. Store the password safely before enabling it.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lock-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/lock-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/lock-folder-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lock-folder-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lock-folder-workflow-map-2026-10-14.webp" alt="Workflow for “Lock a folder with a password”: choose a strong unique password and save the lock; verify that opening the protected folder requires the password." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Lock a folder with a password”: choose a strong unique password and save the lock; verify that opening the protected folder requires the password. <a class="workflow-map-full" href="/screenshots/lock-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/lock-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/lock-folder-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Files → Lock in the current released Dosya client.
- Confirm the active account and workspace, then identify a test folder.

## Steps: lock a folder with a password

1. Open Files → Lock and confirm the active workspace.
2. Select a test folder and check its name or identifying details.
3. Choose a strong unique password and save the lock.
4. Verify that opening the protected folder requires the password.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Reference for “Lock a folder with a password”: Dosya protection dialog showing file lock choices and access controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Lock a folder with a password”: Dosya protection dialog showing file lock choices and access controls. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Check the protection mode and affected roles before saving.

## Verify the result

Leave the folder, reopen it and confirm the password prompt appears. Also confirm that the correct password opens the intended folder tree.

## Expected result

The workflow completes for the controlled test and opening the protected folder requires the password.

## Troubleshooting

**The expected control is missing.** Return to Files → Lock, confirm the active workspace and check that your role permits the action.

## Related guides

- [Lock and hide files](/files/lock-and-hide)
- [Workspace policies](/workspaces/policies)
