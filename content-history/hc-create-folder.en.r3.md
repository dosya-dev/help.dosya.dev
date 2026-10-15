---
{
  "articleId": "hc-create-folder",
  "locale": "en",
  "revision": 3,
  "title": "Create a folder in the right workspace",
  "summary": "Enter a clear folder name and create it, then verify that the folder appears under the chosen parent.",
  "category": "files",
  "articleSlug": "create-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current create a folder in the right workspace workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-organize-files",
    "hc-move-rename"
  ],
  "keywords": [
    "create folder",
    "folder management",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to create a folder in the right workspace in the intended account or workspace.

Folder creation uses the active workspace and selected parent. Check the breadcrumb and choose a distinct name before saving.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/create-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/create-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/create-folder-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/create-folder-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/create-folder-workflow-map-2026-10-14.webp" alt="Four-step interface map for create a folder in the right workspace, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/create-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/create-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/create-folder-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Files → New folder in the current released Dosya client.
- Confirm the active account and workspace, then identify the intended workspace and parent folder.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: create a folder in the right workspace

1. Open Files → New folder and confirm the active workspace.
2. Select the intended workspace and parent folder and check its name or identifying details.
3. Enter a clear folder name and create it.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the folder appears under the chosen parent.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Dosya destination picker showing workspace folders before a move operation." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Use the destination picker to confirm the parent folder before saving. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Refresh the parent, confirm the new empty folder appears once, then open it and verify its breadcrumb.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The workflow completes for the controlled test and the folder appears under the chosen parent. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → New folder, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files](/files/move-and-rename)
