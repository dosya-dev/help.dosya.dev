---
{"articleId":"hc-n8n-list-files-node","locale":"en","revision":1,"title":"List Dosya files in n8n","summary":"List Dosya files in n8n with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"n8n-list-files-node","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the list dosya files in n8n workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-n8n-connect","hc-n8n-workflow"],"keywords":["n8n list files node","n8n workflow operation details","Dosya help"]}
---
List Dosya files in n8n is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open an n8n workflow with Dosya credentials in the current released client.
- Confirm the active account and workspace, then identify known test folder and read-scoped credential.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: list Dosya files in n8n

1. Open an n8n workflow with Dosya credentials and confirm the active account and workspace.
2. Locate known test folder and read-scoped credential and verify its name or identifying details.
3. Configure the folder or workspace input, execute the list operation, and compare representative IDs with Dosya.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the node returns files only from the intended scope.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/n8n-integration-overview-2026-10-13.webp"><img src="/screenshots/n8n-integration-overview-2026-10-13.webp" alt="Dosya integration overview for connecting and running n8n workflows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a restricted credential and disposable workflow data while validating every node. <a href="/screenshots/n8n-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the node returns files only from the intended scope. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to an n8n workflow with Dosya credentials, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Connect Dosya to n8n](/integrations/n8n-connect)
- [Build an n8n workflow](/integrations/n8n-workflow)
