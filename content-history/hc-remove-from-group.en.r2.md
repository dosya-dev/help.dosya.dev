---
{
  "articleId": "hc-remove-from-group",
  "locale": "en",
  "revision": 2,
  "title": "Remove a file from a group",
  "summary": "Remove it from the group without choosing Delete, then verify that the file remains in its folder and leaves only the group.",
  "category": "files",
  "articleSlug": "remove-from-group",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current remove a file from a group workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-organize-files",
    "hc-search-files"
  ],
  "keywords": [
    "remove from group",
    "favourites and groups",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to remove a file from a group in the intended account or workspace.

The main checks are the active workspace, folder path and target item. Start with one harmless item and compare the source and destination after refreshing the view.

<figure class="help-screenshot"><a href="/screenshots/remove-from-group-workflow-map-2026-10-14.webp"><img src="/screenshots/remove-from-group-workflow-map-2026-10-14.webp" alt="Four-step interface map for remove a file from a group, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/remove-from-group-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Groups in the current released Dosya client.
- Confirm the active account and workspace, then identify one grouped test file.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: remove a file from a group

1. Open Groups and confirm the active workspace.
2. Select one grouped test file and check its name or identifying details.
3. Remove it from the group without choosing Delete.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the file remains in its folder and leaves only the group.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/organize-create-group-2026-10-12.webp"><img src="/screenshots/organize-create-group-2026-10-12.webp" alt="Dosya organization controls showing group creation and file grouping." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Use Favourites and groups as views; removing an item from them does not delete the file. <a href="/screenshots/organize-create-group-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that the file remains in its folder and leaves only the group. Refresh or reopen the view once to confirm the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The workflow completes for the controlled test and the file remains in its folder and leaves only the group. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Groups, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Organize files](/files/organize-files)
- [Search files](/files/search-files)
