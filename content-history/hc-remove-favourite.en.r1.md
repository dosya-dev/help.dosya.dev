---
{"articleId":"hc-remove-favourite","locale":"en","revision":1,"title":"Remove an item from Favourites","summary":"Remove an item from Favourites. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"remove-favourite","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the remove an item from favourites workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-organize-files","hc-search-files"],"keywords":["remove favourite","favourites and groups","Dosya help"]}
---
Remove an item from Favourites is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Favourites in the current released Dosya client.
- Confirm the active account and workspace, then identify one test favourite.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: remove an item from Favourites

1. Open Favourites and confirm the active workspace.
2. Select one test favourite and check its name or identifying details.
3. Choose Remove from Favourites without deleting the item.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the shortcut disappears while the item remains in Files.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/organize-create-group-2026-10-12.webp"><img src="/screenshots/organize-create-group-2026-10-12.webp" alt="Dosya organization controls showing group creation and file grouping." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Use Favourites and groups as views; removing an item from them does not delete the file. <a href="/screenshots/organize-create-group-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the shortcut disappears while the item remains in Files. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Favourites, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Organize files](/files/organize-files)
- [Search files](/files/search-files)
