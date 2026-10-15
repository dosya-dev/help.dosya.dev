---
{"articleId":"hc-mcp-choose-client-config","locale":"en","revision":1,"title":"Choose a Dosya MCP client configuration","summary":"Choose a Dosya MCP client configuration with a controlled test, clear verification, limits, and recovery steps.","category":"developers","articleSlug":"mcp-choose-client-config","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the choose a dosya mcp client configuration workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-mcp-connect","hc-mcp-troubleshoot"],"keywords":["mcp choose client config","MCP client operation details","Dosya help"]}
---
Choose a Dosya MCP client configuration is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a supported MCP client configured for Dosya in the current released client.
- Confirm the active account and workspace, then identify supported MCP client and its server settings.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: choose a Dosya MCP client configuration

1. Open a supported MCP client configured for Dosya and confirm the active account and workspace.
2. Locate supported MCP client and its server settings and verify its name or identifying details.
3. Identify the client configuration format, add the documented Dosya server command or endpoint, and keep secrets in its protected field.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the client loads the Dosya server without exposing credentials in shared configuration.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer overview used when connecting an MCP-compatible client." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Start with a restricted credential and one read-only tool call in a disposable workspace. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the client loads the Dosya server without exposing credentials in shared configuration. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a supported MCP client configured for Dosya, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Connect an MCP client](/developers/mcp-connect)
- [Troubleshoot MCP](/troubleshooting/mcp)
