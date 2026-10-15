---
{
  "articleId": "hc-mcp-choose-client-config",
  "locale": "en",
  "revision": 5,
  "title": "Choose a Dosya MCP client configuration",
  "summary": "Choose a remote OAuth-capable MCP client, add Dosya’s connector URL, approve one workspace, and verify read-only file tools without API keys.",
  "category": "developers",
  "articleSlug": "mcp-choose-client-config",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against src/lib/mcp-integration.ts, src/lib/mcp-integration.unit.test.ts, apps/web/src/pages/profile/ai-apps.tsx, apps/mcp/src/index.ts, apps/mcp/src/server.ts, apps/mcp/src/tools/index.ts, apps/api/src/mcp-gateway.ts, apps/api/src/middleware.ts, and apps/api/src/lib/oauth/token-shape.ts. Production OAuth was not authorized.",
  "related": [
    "hc-mcp-connect",
    "hc-mcp-troubleshoot"
  ],
  "keywords": [
    "mcp choose client config",
    "MCP client operation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Dosya MCP is a hosted remote OAuth connector at `https://mcp.dosya.dev/mcp`. It is not a local stdio server and does not accept a Dosya REST API key, client secret, or shell command in client configuration.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mcp-choose-client-config-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mcp-choose-client-config-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mcp-choose-client-config-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mcp-choose-client-config-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mcp-choose-client-config-help-workflow-2026-10-14.webp" alt="Four workflow panels show choosing a remote OAuth client, entering the single MCP URL, approving one workspace, and testing a read-only search." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers choosing a remote OAuth client, entering the single MCP URL, approving one workspace, and testing a read-only search. <a class="workflow-map-full" href="/screenshots/mcp-choose-client-config-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mcp-choose-client-config-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mcp-choose-client-config-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Choose a client that supports remote HTTP MCP servers and OAuth. Claude exposes **Settings → Connectors → Add custom connector**. ChatGPT uses custom connectors or apps after developer mode is enabled, subject to plan availability.
- Authorization pins one Dosya workspace to the connection.
- The connector exposes nine read-only tools. Baseline file operations use `files.read`; account information needs the separate `account.read` step-up grant.

## Steps

1. Open the client’s connector settings. If it only accepts a local command, stdio executable, or static bearer token, select a remote OAuth-capable client instead.
2. Add one custom connector whose server URL is exactly `https://mcp.dosya.dev/mcp`. Leave API-key, client-secret, command, and environment fields empty.
3. Start the OAuth flow, sign in to Dosya, inspect the requested scopes, and select the intended workspace. Do not authorize a convenient workspace without checking its name.
4. Return to the client and confirm the connector reports connected. If the client displays available tools, verify the expected read-only set before sharing context with a model.
5. Run a low-impact file listing or search. Confirm results belong to the pinned workspace and that no create, rename, move, upload, share, or delete tool is offered.
6. Request account information only when needed and approve the `account.read` step-up deliberately. Remove and reconnect the connector to change its pinned workspace.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer overview with API and SDK entry points for choose a dosya mcp client configuration." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The developer overview supplies the API and SDK entry points referenced by “Choose a Dosya MCP client configuration”. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The client completes remote OAuth, lists Dosya’s read-only tools, and returns data only from the workspace approved during connection. No REST API key appears in client configuration.

## Troubleshooting

**The client asks for a command or stdio package.** It does not support Dosya’s remote connector format; use a client with remote HTTP MCP and OAuth.

**REST API authentication fails at the MCP URL.** Remove the API key. MCP tokens are audience-bound to `mcp.dosya.dev` and REST API middleware rejects them in the opposite direction.

**The wrong workspace appears.** Disconnect and authorize again, selecting the correct workspace during OAuth. A tool argument cannot escape the pinned grant.

## Related guides

- [Connect an MCP client](/developers/mcp-connect)
- [Troubleshoot MCP](/troubleshooting/mcp)
