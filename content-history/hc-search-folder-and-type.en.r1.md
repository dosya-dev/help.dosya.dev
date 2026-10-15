---
{"articleId":"hc-search-folder-and-type","locale":"en","revision":1,"title":"Combine a folder scope with a file-type filter","summary":"Combine a folder scope with a file-type filter with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"search-folder-and-type","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the combine a folder scope with a file-type filter workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-search-files","hc-search-file-type"],"keywords":["search folder and type","Advanced file search details","Dosya help"]}
---
Combine a folder scope with a file-type filter is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya file search in the current released client.
- Confirm the active account and workspace, then identify known parent folder and target file type.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: combine a folder scope with a file-type filter

1. Open the Dosya file search and confirm the active account and workspace.
2. Locate known parent folder and target file type and verify its name or identifying details.
3. Open or select the folder scope, apply the type filter, enter the search term, and review the active filters.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that results are limited to the intended folder context and file type.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/search-files-results-2026-10-12.webp"><img src="/screenshots/search-files-results-2026-10-12.webp" alt="Dosya search results showing file names, types, and folder context." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use folder context and file details to distinguish similar results. <a href="/screenshots/search-files-results-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and results are limited to the intended folder context and file type. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya file search, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Search files](/files/search-files)
- [Filter search by file type](/files/search-file-type)
