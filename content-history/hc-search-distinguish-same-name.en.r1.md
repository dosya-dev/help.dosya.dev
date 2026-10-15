---
{"articleId":"hc-search-distinguish-same-name","locale":"en","revision":1,"title":"Distinguish files with the same name","summary":"Distinguish files with the same name with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"search-distinguish-same-name","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the distinguish files with the same name workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-search-files","hc-search-file-type"],"keywords":["search distinguish same name","Advanced file search details","Dosya help"]}
---
Distinguish files with the same name is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya file search in the current released client.
- Confirm the active account and workspace, then identify two or more same-named results.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: distinguish files with the same name

1. Open the Dosya file search and confirm the active account and workspace.
2. Locate two or more same-named results and verify its name or identifying details.
3. Compare workspace, full folder path, size, modified time, owner, and file identifier where available.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the correct same-named file is opened without changing the others.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/search-files-results-2026-10-12.webp"><img src="/screenshots/search-files-results-2026-10-12.webp" alt="Dosya search results showing file names, types, and folder context." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use folder context and file details to distinguish similar results. <a href="/screenshots/search-files-results-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the correct same-named file is opened without changing the others. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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
