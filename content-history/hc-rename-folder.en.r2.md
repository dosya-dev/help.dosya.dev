---
{
  "articleId": "hc-rename-folder",
  "locale": "en",
  "revision": 2,
  "title": "Rename a folder without losing contents",
  "summary": "Change only the folder name and confirm, then verify that the child file remains available under the new path.",
  "category": "files",
  "articleSlug": "rename-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current rename a folder without losing contents workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-organize-files",
    "hc-move-rename"
  ],
  "keywords": [
    "rename folder",
    "folder management",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to rename a folder without losing contents in the intended account or workspace.

The main checks are the active workspace, folder path and target item. Start with one harmless item and compare the source and destination after refreshing the view.

<figure class="help-screenshot"><a href="/screenshots/rename-folder-workflow-map-2026-10-14.webp"><img src="/screenshots/rename-folder-workflow-map-2026-10-14.webp" alt="Four-step interface map for rename a folder without losing contents, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/rename-folder-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Files → Rename in the current released Dosya client.
- Confirm the active account and workspace, then identify a test folder with a small file inside.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: rename a folder without losing contents

1. Open Files → Rename and confirm the active workspace.
2. Select a test folder with a small file inside and check its name or identifying details.
3. Change only the folder name and confirm.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the child file remains available under the new path.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Dosya destination picker showing workspace folders before a move operation." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Use the destination picker to confirm the parent folder before saving. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that the child file remains available under the new path. Refresh or reopen the view once to confirm the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The workflow completes for the controlled test and the child file remains available under the new path. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Rename, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files](/files/move-and-rename)
