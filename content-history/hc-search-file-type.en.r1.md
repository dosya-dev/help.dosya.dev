---
{"articleId":"hc-search-file-type","locale":"en","revision":1,"title":"Filter search results by file type","summary":"Filter search results by file type. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"search-file-type","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the filter search results by file type workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-search-files","hc-organize-files"],"keywords":["search file type","search, sort and views","Dosya help"]}
---
Filter search results by file type is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Search in the current released Dosya client.
- Confirm the active account and workspace, then identify a query with several file types.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: filter search results by file type

1. Open Search and confirm the active workspace.
2. Select a query with several file types and check its name or identifying details.
3. Apply one supported type filter and review the result count.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that every visible result matches the chosen type.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/search-files-results-2026-10-12.webp"><img src="/screenshots/search-files-results-2026-10-12.webp" alt="Dosya search results with file names, locations and view controls." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Confirm the workspace, folder scope and active filters before acting on a result. <a href="/screenshots/search-files-results-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and every visible result matches the chosen type. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Search, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Search files](/files/search-files)
- [Organize files](/files/organize-files)
