---
{
  "articleId": "hc-mcp-list-tools-resources",
  "locale": "en",
  "revision": 4,
  "title": "List Dosya MCP tools and resources",
  "summary": "Refresh available capabilities, inspect tool names and input schemas, and review resource scope before invocation. Verify that the client shows the expected Dosya capabilities for the current connection.",
  "category": "developers",
  "articleSlug": "mcp-list-tools-resources",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-mcp-connect",
    "hc-mcp-troubleshoot"
  ],
  "keywords": [
    "mcp list tools resources",
    "MCP client operation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **List Dosya MCP tools and resources** in Dosya. The main action is to refresh available capabilities, inspect tool names and input schemas, and review resource scope before invocation; the decisive check is whether the client shows the expected Dosya capabilities for the current connection.

<figure class="help-screenshot"><a href="/screenshots/mcp-list-tools-resources-help-workflow-2026-10-14.webp"><img src="/screenshots/mcp-list-tools-resources-help-workflow-2026-10-14.webp" alt="Workflow for “List Dosya MCP tools and resources”: refresh available capabilities, inspect tool names and input schemas, and review resource scope before invocation; the client shows the expected Dosya capabilities for the current connection." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “List Dosya MCP tools and resources”: refresh available capabilities, inspect tool names and input schemas, and review resource scope before invocation; the client shows the expected Dosya capabilities for the current connection. <a href="/screenshots/mcp-list-tools-resources-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a supported MCP client configured for Dosya in the current released client.
- Confirm the active account and workspace, then identify connected MCP session.

## Steps: list Dosya MCP tools and resources

1. Open a supported MCP client configured for Dosya and confirm the active account and workspace.
2. Locate connected MCP session and verify its name or identifying details.
3. Refresh available capabilities, inspect tool names and input schemas, and review resource scope before invocation.
4. Confirm that the client shows the expected Dosya capabilities for the current connection.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “List Dosya MCP tools and resources”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “List Dosya MCP tools and resources”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Start with a restricted credential and one read-only tool call in a disposable workspace.

## Verify the result

After completing the steps, check the expected result: The client shows the expected Dosya capabilities for the current connection.

## Expected result

The controlled workflow completes and the client shows the expected Dosya capabilities for the current connection.

## Troubleshooting

**The expected control is missing.** Return to a supported MCP client configured for Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect an MCP client](/developers/mcp-connect)
- [Troubleshoot MCP](/troubleshooting/mcp)
