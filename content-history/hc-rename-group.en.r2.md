---
{
  "articleId": "hc-rename-group",
  "locale": "en",
  "revision": 2,
  "title": "Rename an organization group",
  "summary": "Edit the group name and save, then verify that the group keeps its members under the new name.",
  "category": "files",
  "articleSlug": "rename-group",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current rename an organization group workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-organize-files",
    "hc-search-files"
  ],
  "keywords": [
    "rename group",
    "favourites and groups",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to rename an organization group in the intended workspace. Start with a harmless test item when the action changes stored data or access.

Renaming a group changes its label while its membership should remain intact. Use a distinct name that teammates can recognize.

<figure class="help-screenshot"><a href="/screenshots/rename-group-workflow-map-2026-10-14.webp"><img src="/screenshots/rename-group-workflow-map-2026-10-14.webp" alt="Four-step interface map for rename an organization group, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a href="/screenshots/rename-group-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Groups in the current released Dosya client.
- Confirm the active account and workspace, then identify one test group.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: rename an organization group

1. Open Groups and confirm the active workspace.
2. Select one test group and check its name or identifying details.
3. Edit the group name and save.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the group keeps its members under the new name.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/organize-create-group-2026-10-12.webp"><img src="/screenshots/organize-create-group-2026-10-12.webp" alt="Dosya organization controls showing group creation and file grouping." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Use Favourites and groups as views; removing an item from them does not delete the file. <a href="/screenshots/organize-create-group-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Reopen the group and compare its member count and listed items with the state before the rename.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and the group keeps its members under the new name. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Groups, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Organize files](/files/organize-files)
- [Search files](/files/search-files)
