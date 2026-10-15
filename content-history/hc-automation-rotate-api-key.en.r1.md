---
{"articleId":"hc-automation-rotate-api-key","locale":"en","revision":1,"title":"Rotate an automation API key","summary":"Rotate an automation API key with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"automation-rotate-api-key","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the rotate an automation api key workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-zapier-connect","hc-n8n-connect"],"keywords":["automation rotate api key","Zapier and n8n automation","Dosya help"]}
---
Rotate an automation API key is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Zapier or n8n with Dosya in the current released client.
- Confirm the active account and workspace, then identify Zapier or n8n connection using an old key.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: rotate an automation API key

1. Open Zapier or n8n with Dosya and confirm the active account and workspace.
2. Locate Zapier or n8n connection using an old key and verify its name or identifying details.
3. Create a replacement with matching narrow scope, update and test the automation, then revoke the old key.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that new runs succeed and the retired key no longer works.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/zapier-integration-overview-2026-10-13.webp"><img src="/screenshots/zapier-integration-overview-2026-10-13.webp" alt="Dosya automation integration overview for Zapier and n8n file workflows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Build with a restricted test key and non-confidential files before enabling production runs. <a href="/screenshots/zapier-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and new runs succeed and the retired key no longer works. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Zapier or n8n with Dosya, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Connect Zapier](/integrations/zapier)
- [Connect n8n](/integrations/n8n-connect)
