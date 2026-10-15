---
{
  "articleId": "hc-mcp-choose-client-config",
  "locale": "en",
  "revision": 3,
  "title": "Choose a Dosya MCP client configuration",
  "summary": "Identify the client configuration format, add the documented Dosya server command or endpoint, and keep secrets in its protected field. Verify that the client loads the Dosya server without exposing credentials in shared configuration.",
  "category": "developers",
  "articleSlug": "mcp-choose-client-config",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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
This guide covers **Choose a Dosya MCP client configuration** in Dosya. The main action is to identify the client configuration format, add the documented Dosya server command or endpoint, and keep secrets in its protected field; the decisive check is whether the client loads the Dosya server without exposing credentials in shared configuration.

<figure class="help-screenshot"><a href="/screenshots/mcp-choose-client-config-help-workflow-2026-10-14.webp"><img src="/screenshots/mcp-choose-client-config-help-workflow-2026-10-14.webp" alt="Four-step workflow map for choose a dosya mcp client configuration, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for choose a dosya mcp client configuration: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/mcp-choose-client-config-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a supported MCP client configured for Dosya in the current released client.
- Confirm the active account and workspace, then identify supported MCP client and its server settings.

## Steps: choose a Dosya MCP client configuration

1. Open a supported MCP client configured for Dosya and confirm the active account and workspace.
2. Locate supported MCP client and its server settings and verify its name or identifying details.
3. Identify the client configuration format, add the documented Dosya server command or endpoint, and keep secrets in its protected field.
4. Confirm that the client loads the Dosya server without exposing credentials in shared configuration.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer overview used when connecting an MCP-compatible client." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Start with a restricted credential and one read-only tool call in a disposable workspace. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The client loads the Dosya server without exposing credentials in shared configuration.

## Expected result

The controlled workflow completes and the client loads the Dosya server without exposing credentials in shared configuration.

## Troubleshooting

**The expected control is missing.** Return to a supported MCP client configured for Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect an MCP client](/developers/mcp-connect)
- [Troubleshoot MCP](/troubleshooting/mcp)
