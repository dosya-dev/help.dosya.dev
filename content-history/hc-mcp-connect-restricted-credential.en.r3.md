---
{
  "articleId": "hc-mcp-connect-restricted-credential",
  "locale": "en",
  "revision": 3,
  "title": "Connect MCP with a restricted credential",
  "summary": "Store the key through the client supported secret mechanism, start the connection, and verify nonsecret account context. Verify that the MCP session can access only the intended Dosya scope.",
  "category": "developers",
  "articleSlug": "mcp-connect-restricted-credential",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-mcp-connect",
    "hc-mcp-troubleshoot"
  ],
  "keywords": [
    "mcp connect restricted credential",
    "MCP client operation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Connect MCP with a restricted credential** in Dosya. The main action is to store the key through the client supported secret mechanism, start the connection, and verify nonsecret account context; the decisive check is whether the MCP session can access only the intended Dosya scope.

<figure class="help-screenshot"><a href="/screenshots/mcp-connect-restricted-credential-help-workflow-2026-10-14.webp"><img src="/screenshots/mcp-connect-restricted-credential-help-workflow-2026-10-14.webp" alt="Four-step workflow map for connect mcp with a restricted credential, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for connect mcp with a restricted credential: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/mcp-connect-restricted-credential-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a supported MCP client configured for Dosya in the current released client.
- Confirm the active account and workspace, then identify Dosya key limited to a disposable workspace or folder.

## Steps: connect MCP with a restricted credential

1. Open a supported MCP client configured for Dosya and confirm the active account and workspace.
2. Locate Dosya key limited to a disposable workspace or folder and verify its name or identifying details.
3. Store the key through the client supported secret mechanism, start the connection, and verify nonsecret account context.
4. Confirm that the MCP session can access only the intended Dosya scope.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer overview used when connecting an MCP-compatible client." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Start with a restricted credential and one read-only tool call in a disposable workspace. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The MCP session can access only the intended Dosya scope.

## Expected result

The controlled workflow completes and the MCP session can access only the intended Dosya scope.

## Troubleshooting

**The expected control is missing.** Return to a supported MCP client configured for Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect an MCP client](/developers/mcp-connect)
- [Troubleshoot MCP](/troubleshooting/mcp)
