---
{"articleId":"hc-api-list-files-pagination","locale":"en","revision":1,"title":"Paginate through REST API file results","summary":"Paginate through REST API file results with a controlled test, clear verification, limits, and recovery steps.","category":"developers","articleSlug":"api-list-files-pagination","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the paginate through rest api file results workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-api-list-files","hc-api-errors-pagination"],"keywords":["api list files pagination","REST API read workflows","Dosya help"]}
---
Paginate through REST API file results is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya REST API and a disposable workspace in the current released client.
- Confirm the active account and workspace, then identify list-files response with a continuation or next-page value.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: paginate through REST API file results

1. Open the Dosya REST API and a disposable workspace and confirm the active account and workspace.
2. Locate list-files response with a continuation or next-page value and verify its name or identifying details.
3. Request the first page, store the returned continuation exactly, and continue until no next page remains.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that each page is processed once without assuming a fixed total.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for authenticated file and folder requests." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a read-only test key and redact authorization headers from logs. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and each page is processed once without assuming a fixed total. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya REST API and a disposable workspace, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [List files with the API](/developers/api-list-files)
- [Handle API errors](/developers/api-errors-pagination)
