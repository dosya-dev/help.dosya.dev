---
{
  "articleId": "hc-hide-folder",
  "locale": "en",
  "revision": 2,
  "title": "Hide a folder from selected roles",
  "summary": "Choose the roles that should not see it and save, then verify that a permitted test role can see it while a hidden role cannot.",
  "category": "files",
  "articleSlug": "hide-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current hide a folder from selected roles workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
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

<figure class="help-screenshot"><a href="/screenshots/hide-folder-workflow-map-2026-10-14.webp"><img src="/screenshots/hide-folder-workflow-map-2026-10-14.webp" alt="Four-step interface map for hide a folder from selected roles, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/hide-folder-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Files → Hide in the current released Dosya client.
- Confirm the active account and workspace, then identify a non-sensitive test folder.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: hide a folder from selected roles

1. Open Files → Hide and confirm the active workspace.
2. Select a non-sensitive test folder and check its name or identifying details.
3. Choose the roles that should not see it and save.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that a permitted test role can see it while a hidden role cannot.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya protection dialog showing file lock choices and access controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Check the protection mode and affected roles before saving. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that a permitted test role can see it while a hidden role cannot. Refresh or reopen the view once to confirm the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The workflow completes for the controlled test and a permitted test role can see it while a hidden role cannot. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Hide, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Lock and hide files](/files/lock-and-hide)
- [Workspace policies](/workspaces/policies)
