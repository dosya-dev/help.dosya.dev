---
{"articleId":"hc-api-create-upload-session","locale":"en","revision":1,"title":"Create a REST API upload session","summary":"Create a REST API upload session with a controlled test, clear verification, limits, and recovery steps.","category":"developers","articleSlug":"api-create-upload-session","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the create a rest api upload session workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-api-upload-file","hc-rest-api-connect"],"keywords":["api create upload session","REST API upload sessions","Dosya help"]}
---
Create a REST API upload session is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya REST API in the current released client.
- Confirm the active account and workspace, then identify upload endpoint and destination identifiers.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: create a REST API upload session

1. Open the Dosya REST API and confirm the active account and workspace.
2. Locate upload endpoint and destination identifiers and verify its name or identifying details.
3. Send the authenticated create request with filename, size, workspace, and folder information.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the API returns an upload session for the intended destination.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for authenticated file upload workflows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a small test file, an upload-scoped key, and a unique idempotency value while developing. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the API returns an upload session for the intended destination. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya REST API, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Upload through the API](/developers/api-upload-file)
- [REST API quickstart](/developers/rest-api-quickstart)
