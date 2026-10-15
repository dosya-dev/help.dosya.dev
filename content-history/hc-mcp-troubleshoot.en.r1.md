---
{"articleId":"hc-mcp-troubleshoot","locale":"en","revision":1,"title":"Troubleshoot an MCP connection","summary":"Check client version, server address, authorization, scopes, workspace and tool errors when a Dosya MCP client cannot connect or act.","category":"troubleshooting","articleSlug":"mcp","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current troubleshoot an mcp connection workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-mcp-connect","hc-ai-app-disconnect","hc-contact-support"],"keywords":["MCP error","MCP unauthorized","MCP tools missing"]}
---
Reduce MCP diagnosis to connection, authorization, tool discovery and one harmless read operation.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: troubleshoot an mcp connection

1. Check the client supports the current MCP transport.
2. Copy the server address from current documentation.
3. Reconnect authorization for the intended workspace.
4. List available tools and compare requested scope.
5. Run one harmless read call.
6. Disconnect and reauthorize only after preserving the nonsecret error.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The troubleshoot an mcp connection workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Related guides

- [Connect MCP](/developers/mcp-connect)
- [Disconnect an AI app](/integrations/disconnect-ai-app)
- [Contact support](/troubleshooting/contact-support)
