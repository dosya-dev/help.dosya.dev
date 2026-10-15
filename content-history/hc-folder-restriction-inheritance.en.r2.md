---
{
  "articleId": "hc-folder-restriction-inheritance",
  "locale": "en",
  "revision": 2,
  "title": "Understand inherited folder restrictions",
  "summary": "Compare the parent restriction with the child access result, then verify that the effective access matches the parent boundary.",
  "category": "files",
  "articleSlug": "folder-restriction-inheritance",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current understand inherited folder restrictions workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
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

<figure class="help-screenshot"><a href="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14.webp"><img src="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14.webp" alt="Four-step interface map for understand inherited folder restrictions, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Files and workspace access settings in the current released Dosya client.
- Confirm the active account and workspace, then identify a child item inside a restricted folder.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: understand inherited folder restrictions

1. Open Files and workspace access settings and confirm the active workspace.
2. Select a child item inside a restricted folder and check its name or identifying details.
3. Compare the parent restriction with the child access result.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the effective access matches the parent boundary.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya protection dialog showing file lock choices and access controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Check the protection mode and affected roles before saving. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that the effective access matches the parent boundary. Refresh or reopen the view once to confirm the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The workflow completes for the controlled test and the effective access matches the parent boundary. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files and workspace access settings, confirm the active workspace and check that your role permits the action.

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
