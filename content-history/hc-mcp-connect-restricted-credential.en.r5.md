---
{
  "articleId": "hc-mcp-connect-restricted-credential",
  "locale": "en",
  "revision": 5,
  "title": "Connect MCP with a restricted credential",
  "summary": "Connect an AI client through Dosya OAuth, pin it to one readable workspace, limit optional account data, and verify the granted read boundary.",
  "category": "developers",
  "articleSlug": "mcp-connect-restricted-credential",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/connect/ai.tsx, apps/web/src/pages/profile/ai-apps.tsx, apps/api/src/lib/oauth/consent.ts, apps/api/src/pages/api/oauth/consent.ts, apps/api/src/lib/oauth/server.ts, apps/api/src/mcp-principal.ts, apps/api/src/mcp-gateway.ts, apps/mcp/src/tools/index.ts. Production behavior for “Connect MCP with a restricted credential” was not exercised; this revision is awaiting publication.",
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
Dosya MCP uses OAuth rather than a pasted API key. The resulting grant is pinned to one readable workspace, requires file-reading access, and cannot change, share, or delete stored content.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mcp-connect-restricted-credential-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mcp-connect-restricted-credential-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mcp-connect-restricted-credential-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mcp-connect-restricted-credential-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mcp-connect-restricted-credential-help-workflow-2026-10-14.webp" alt="Four panels show entering the Dosya MCP server URL, choosing one readable workspace, limiting optional account access, and allowing the OAuth connection." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show entering the Dosya MCP server URL, choosing one readable workspace, limiting optional account access, and allowing the OAuth connection. <a class="workflow-map-full" href="/screenshots/mcp-connect-restricted-credential-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mcp-connect-restricted-credential-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mcp-connect-restricted-credential-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the MCP client, add the server URL `https://mcp.dosya.dev/mcp`. Follow the browser sign-in opened by the client; do not create or paste a `dos_…` API key because Dosya rejects API keys and mobile tokens as MCP credentials.
2. On the consent screen, confirm the requesting app and its destination. A recognized callback shows **Verified**; a local client warns that access goes to an app on your computer, while any other self-registered app shows **Not verified** and names its redirect host.
3. Under **Workspace it can read**, choose the single workspace this connection needs. End-to-end encrypted Spaces are excluded because Dosya cannot decrypt their files; there is no folder-level MCP grant in the current release.
4. Keep the required **Find and read files in _workspace_** permission. Clear optional **See your plan and storage** unless the client needs `get_account_info`; selecting it adds `account.read` to the mandatory `files.read` scope.
5. Select **Allow _app_** before the ten-minute consent transaction expires. **Deny** returns control without creating a grant, and an expired request shows `This request expired. Go back to your AI app and connect again.`
6. Return to the client and run `list_workspaces`. The structured result should name only the workspace selected during consent, proving that the connection cannot enumerate another workspace or the Vault.

The OAuth access token stays in the MCP client. Dosya’s consent page never reveals a reusable secret for manual storage, and unknown scopes submitted by a client are discarded rather than granted.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Connect MCP with a restricted credential”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Connect MCP with a restricted credential”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The client connects to the Dosya MCP resource with `files.read`, sees one chosen non-encrypted workspace, and has no mutation capability. `get_account_info` works only when **See your plan and storage** was granted.

**No workspace is available.** The consent page says `You have no workspace this app can read. End-to-end encrypted Spaces cannot be connected.` Join or create a standard workspace before restarting from the AI client.

**The callback looks unfamiliar.** Choose **Deny**. Restart only from a client and redirect destination you recognize.

## Related guides

- [Connect an MCP client](/developers/mcp-connect)
- [Troubleshoot MCP](/troubleshooting/mcp)
