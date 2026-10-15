---
{
  "articleId": "hc-mcp-troubleshoot",
  "locale": "en",
  "revision": 4,
  "title": "Troubleshoot an MCP connection",
  "summary": "Check client version, server address, authorization, scopes, workspace and tool errors when a Dosya MCP client cannot connect or act.",
  "category": "troubleshooting",
  "articleSlug": "mcp",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-mcp-connect",
    "hc-ai-app-disconnect",
    "hc-contact-support"
  ],
  "keywords": [
    "MCP error",
    "MCP unauthorized",
    "MCP tools missing",
    "cloud storage"
  ]
}
---
Reduce MCP diagnosis to connection, authorization, tool discovery and one harmless read operation.

MCP access depends on the client transport, server address, authorization, workspace and granted tool scope. Preserve the exact nonsecret error before reconnecting.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mcp-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mcp-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mcp-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mcp-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mcp-workflow-map-2026-10-14.webp" alt="Four-step interface map for troubleshoot an mcp connection, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/mcp-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mcp-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mcp-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: troubleshoot an mcp connection

1. Check the client supports the current MCP transport.
2. Copy the server address from current documentation.
3. Reconnect authorization for the intended workspace.
4. List available tools and compare requested scope.
5. Run one harmless read call.
6. Disconnect and reauthorize only after preserving the nonsecret error.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Run one read-only list or metadata call. Confirm the response belongs to the intended workspace before testing a tool that writes files.

## Expected result

The troubleshoot an mcp connection workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Connect MCP](/developers/mcp-connect)
- [Disconnect an AI app](/integrations/disconnect-ai-app)
- [Contact support](/troubleshooting/contact-support)
