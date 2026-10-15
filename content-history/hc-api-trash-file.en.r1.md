---
{"articleId":"hc-api-trash-file","locale":"en","revision":1,"title":"Move a file to Deleted items through the API","summary":"Move a file to Deleted items through the API with a controlled test, clear verification, limits, and recovery steps.","category":"developers","articleSlug":"api-trash-file","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the move a file to deleted items through the api workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-api-folder-operations","hc-rest-api-connect"],"keywords":["api trash file","REST API mutation safeguards","Dosya help"]}
---
Move a file to Deleted items through the API is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya REST API and a disposable folder in the current released client.
- Confirm the active account and workspace, then identify disposable file and its recorded original location.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: move a file to Deleted items through the API

1. Open the Dosya REST API and a disposable folder and confirm the active account and workspace.
2. Locate disposable file and its recorded original location and verify its name or identifying details.
3. Send the documented delete or trash operation, then confirm it leaves the active folder and appears in Deleted items when supported.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the item enters the recoverable deleted state.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for controlled file and folder changes." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use disposable data and a narrowly scoped key before automating mutations. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the item enters the recoverable deleted state. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya REST API and a disposable folder, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Use folder operations](/developers/api-folder-operations)
- [REST API quickstart](/developers/rest-api-quickstart)
