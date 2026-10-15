---
{"articleId":"hc-remove-from-group","locale":"en","revision":1,"title":"Remove a file from a group","summary":"Remove a file from a group. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"remove-from-group","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the remove a file from a group workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-organize-files","hc-search-files"],"keywords":["remove from group","favourites and groups","Dosya help"]}
---
Remove a file from a group is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

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

## Related guides

- [Organize files](/files/organize-files)
- [Search files](/files/search-files)
