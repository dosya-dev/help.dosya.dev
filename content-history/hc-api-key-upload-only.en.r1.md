---
{"articleId":"hc-api-key-upload-only","locale":"en","revision":1,"title":"Create an upload-only Dosya API key","summary":"Create an upload-only Dosya API key with a controlled test, clear verification, limits, and recovery steps.","category":"developers","articleSlug":"api-key-upload-only","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the create an upload-only dosya api key workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-api-key","hc-api-key-scopes"],"keywords":["api key upload only","API key operations","Dosya help"]}
---
Create an upload-only Dosya API key is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Profile > Integrations > API keys in the current released client.
- Confirm the active account and workspace, then identify permission selector for an ingest integration.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: create an upload-only Dosya API key

1. Open Profile > Integrations > API keys and confirm the active account and workspace.
2. Locate permission selector for an ingest integration and verify its name or identifying details.
3. Choose Upload and add the narrowest folder and surface restrictions.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the key can send data only to its permitted destination.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for creating and restricting integration credentials." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Create a separate narrowly scoped key for each integration and never paste it into screenshots. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the key can send data only to its permitted destination. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Profile > Integrations > API keys, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Create an API key](/developers/api-key)
- [Choose key scopes](/developers/api-key-scopes)
