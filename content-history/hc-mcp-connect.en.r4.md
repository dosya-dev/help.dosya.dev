---
{
  "articleId": "hc-mcp-connect",
  "locale": "en",
  "revision": 4,
  "title": "Connect an MCP client to Dosya",
  "summary": "Use the current Dosya MCP connection instructions, authorize the client with limited workspace access, and test a read-only tool call.",
  "category": "developers",
  "articleSlug": "mcp-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-ai-app-permissions",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "MCP server",
    "Model Context Protocol",
    "AI file tools",
    "cloud storage"
  ]
}
---
Model Context Protocol clients can expose Dosya tools to an AI application. Follow the current server and authorization instructions literally.

MCP authorization connects a client to a selected Dosya workspace and tool set. Begin with read-only access and non-confidential data.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mcp-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mcp-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mcp-connect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mcp-connect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mcp-connect-workflow-map-2026-10-14.webp" alt="Four-step interface map for connect an mcp client to dosya, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/mcp-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mcp-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mcp-connect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: connect an mcp client to dosya

1. Open the current MCP integration documentation.
2. Create or choose a dedicated limited connection.
3. Enter the documented server address in the client.
4. Complete authorization for one workspace.
5. List or read one non-confidential test item.
6. Review and disconnect the grant after testing.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

List or inspect one test item and confirm the client reports the intended workspace. Review the saved grant and disconnect it when the test is finished.

## Expected result

The connect an mcp client to dosya workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Review AI app permissions](/integrations/ai-app-permissions)
- [Choose least privilege](/developers/api-key-scopes)
