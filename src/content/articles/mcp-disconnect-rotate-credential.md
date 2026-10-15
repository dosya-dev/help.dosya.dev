---
{
  "articleId": "hc-mcp-disconnect-rotate-credential",
  "locale": "en",
  "revision": 5,
  "title": "Disconnect MCP and rotate its credential",
  "summary": "Revoke an MCP OAuth grant from Connected AI apps, allow its brief validation-cache window to close, then reconnect with a fresh grant safely.",
  "category": "developers",
  "articleSlug": "mcp-disconnect-rotate-credential",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/profile/ai-apps.tsx, apps/api/src/pages/api/me/ai-connections/[id].ts, apps/api/src/lib/oauth/token-cache.ts, apps/mcp/src/tools/result.ts, apps/api/src/lib/oauth/connections.ts. Production behavior for “Disconnect MCP and rotate its credential” was not exercised; this revision is awaiting publication.",
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
An MCP connection is an OAuth grant, not an API key. Removing a local client entry does not revoke Dosya access; use **Connected AI apps** to invalidate the server-side grant, then reconnect if the integration must continue.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mcp-disconnect-rotate-credential-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mcp-disconnect-rotate-credential-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mcp-disconnect-rotate-credential-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mcp-disconnect-rotate-credential-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mcp-disconnect-rotate-credential-help-workflow-2026-10-14.webp" alt="Four panels show locating the exact Connected AI apps row, disconnecting its OAuth grant, waiting for the validation cache, and reconnecting with fresh consent." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show locating the exact Connected AI apps row, disconnecting its OAuth grant, waiting for the validation cache, and reconnecting with fresh consent. <a class="workflow-map-full" href="/screenshots/mcp-disconnect-rotate-credential-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mcp-disconnect-rotate-credential-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mcp-disconnect-rotate-credential-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Settings → Connected AI apps** in an interactive browser session. API keys and connected AI apps cannot list or manage these grants on your behalf.
2. Match the row by client name, workspace name, connection age, and scope chips such as **Read files** or **Plan and storage**. Each row represents one grant pinned to one workspace.
3. Stop current work in that AI client, then select **Disconnect** on the exact row. Dosya revokes the grant and reports **App disconnected** with `_client_ can no longer read _workspace_.`
4. Allow up to 60 seconds before testing the retired token. A worker that validated it recently may serve that cached validation until the one-minute entry expires; after that, a tool call returns `This connection is not authenticated. Sign in to dosya again to reconnect.`
5. If continued access is required, start a new connection from the MCP client using `https://mcp.dosya.dev/mcp`. Choose the intended workspace and optional account scope again; there is no in-place rotate operation.
6. Run `list_workspaces` through the new connection, then retry the old one after the cache window. The new grant should list its selected workspace while the revoked grant remains unauthenticated.

Disconnect is reversible only by creating fresh consent. It does not delete files or change unrelated API keys, but the old OAuth grant itself cannot be restored.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Disconnect MCP and rotate its credential”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Disconnect MCP and rotate its credential”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The selected grant disappears from **Connected AI apps** and stops authorizing MCP calls no later than the validation-cache window. A replacement connection has a distinct grant with newly chosen workspace and scopes.

**Disconnect failed** means Dosya could not revoke the grant at that moment. Leave the client stopped, reload **Connected AI apps**, and retry only while the row is still present.

**The old client works briefly.** Wait the full 60 seconds before treating that as a failed revocation; the implementation deliberately caches successful token validation for one minute.

## Related guides

- [Connect an MCP client](/developers/mcp-connect)
- [Troubleshoot MCP](/troubleshooting/mcp)
