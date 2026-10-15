---
{
  "articleId": "hc-mcp-disconnect-rotate-credential",
  "locale": "en",
  "revision": 3,
  "title": "Disconnect MCP and rotate its credential",
  "summary": "Stop the server or remove the client entry, revoke the old Dosya key, create a replacement only if needed, and retest the old key. Verify that the retired connection and credential can no longer access Dosya.",
  "category": "developers",
  "articleSlug": "mcp-disconnect-rotate-credential",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-mcp-connect",
    "hc-mcp-troubleshoot"
  ],
  "keywords": [
    "mcp disconnect rotate credential",
    "MCP client operation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Disconnect MCP and rotate its credential** in Dosya. The main action is to stop the server or remove the client entry, revoke the old Dosya key, create a replacement only if needed, and retest the old key; the decisive check is whether the retired connection and credential can no longer access Dosya.

<figure class="help-screenshot"><a href="/screenshots/mcp-disconnect-rotate-credential-help-workflow-2026-10-14.webp"><img src="/screenshots/mcp-disconnect-rotate-credential-help-workflow-2026-10-14.webp" alt="Four-step workflow map for disconnect mcp and rotate its credential, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for disconnect mcp and rotate its credential: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/mcp-disconnect-rotate-credential-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a supported MCP client configured for Dosya in the current released client.
- Confirm the active account and workspace, then identify MCP connection that should be retired.

## Steps: disconnect MCP and rotate its credential

1. Open a supported MCP client configured for Dosya and confirm the active account and workspace.
2. Locate MCP connection that should be retired and verify its name or identifying details.
3. Stop the server or remove the client entry, revoke the old Dosya key, create a replacement only if needed, and retest the old key.
4. Confirm that the retired connection and credential can no longer access Dosya.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer overview used when connecting an MCP-compatible client." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Start with a restricted credential and one read-only tool call in a disposable workspace. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The retired connection and credential can no longer access Dosya.

## Expected result

The controlled workflow completes and the retired connection and credential can no longer access Dosya.

## Troubleshooting

**The expected control is missing.** Return to a supported MCP client configured for Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect an MCP client](/developers/mcp-connect)
- [Troubleshoot MCP](/troubleshooting/mcp)
