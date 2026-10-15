---
{"articleId":"hc-api-list-files","locale":"en","revision":1,"title":"List files with the REST API","summary":"List files with the REST API. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"developers","articleSlug":"api-list-files","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the list files with the rest api workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-rest-api-connect","hc-api-key-scopes"],"keywords":["api list files","REST API file workflows","Dosya help"]}
---
List files with the REST API is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open the REST API files endpoint in the current released Dosya client.
- Confirm the active account and workspace, then identify a read-scoped test key.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: list files with the REST API

1. Open the REST API files endpoint and confirm the active workspace.
2. Select a read-scoped test key and check its name or identifying details.
3. Send a workspace-scoped list request and inspect the response.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the response contains only accessible items.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/api-key-permission-2026-10-10.webp"><img src="/screenshots/api-key-permission-2026-10-10.webp" alt="Dosya API-key permission selector showing the access granted to an integration." width="582" height="666" loading="lazy" decoding="async" /></a><figcaption>Use a disposable key with the narrowest scope and a non-production workspace. <a href="/screenshots/api-key-permission-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the response contains only accessible items. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the REST API files endpoint, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [API-key scopes](/developers/api-key-scopes)
