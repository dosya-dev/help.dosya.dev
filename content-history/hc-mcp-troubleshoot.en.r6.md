---
{
  "articleId": "hc-mcp-troubleshoot",
  "locale": "en",
  "revision": 6,
  "title": "Troubleshoot a Dosya MCP connection",
  "summary": "Separate MCP transport, OAuth, scope, workspace visibility, rate-limit, and file-conversion failures, then verify with a read-only tool call.",
  "category": "troubleshooting",
  "articleSlug": "mcp",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14 against apps/mcp/src/index.ts; apps/mcp/src/server.ts; apps/mcp/src/tools/result.ts; apps/mcp/src/tools/read-file.ts; apps/mcp/src/tools/list-folder.ts; apps/api/src/mcp-gateway.ts; apps/api/src/mcp-principal.ts; apps/api/src/lib/oauth/consent.ts; apps/api/src/lib/oauth/token-cache.ts; apps/api/src/lib/oauth/connections.ts; apps/web/src/pages/connect/ai.tsx; apps/web/src/pages/profile/ai-apps.tsx. No external MCP client was connected. Local repository evidence only; no production request was made.",
  "related": [
    "hc-mcp-connect",
    "hc-ai-app-disconnect",
    "hc-contact-support"
  ],
  "keywords": [
    "Dosya MCP error",
    "MCP OAuth unauthorized",
    "MCP tools missing",
    "MCP file not visible"
  ]
}
---
Start with the exact error and the first failing boundary. A client that cannot discover the server has a transport problem; a client that lists tools but cannot call one has an authorization, scope, workspace, visibility, usage, or conversion problem. Reconnecting for every error can discard useful state and will not fix a temporary service failure.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mcp-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mcp-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mcp-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mcp-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mcp-workflow-map-2026-10-14.webp" alt="MCP troubleshooting decision path from remote server discovery through OAuth, tool listing, workspace visibility, and one list_workspaces verification call." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use a harmless list_workspaces call to distinguish a working grant from a file-specific refusal before asking the client to read content. <a class="workflow-map-full" href="/screenshots/mcp-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mcp-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mcp-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

The server URL is `https://mcp.dosya.dev/mcp`, using remote HTTPS **Streamable HTTP** and browser-based OAuth. Do not configure `/sse`, a local stdio command, a `dos_…` API key, a mobile token or your Dosya password.

Your client must support OAuth discovery, authorization code with PKCE, dynamic client registration and the remote transport. If its setup accepts only a command to run locally or a static bearer header, that client mode cannot complete Dosya authorization. Confirm that the client plan or organization administrator permits remote connectors.

When consent opens, inspect the account, callback destination and **Workspace it can read**. **Read files and folders** (`files.read`) is required. **See your plan and storage** (`account.read`) is optional and needed only by `get_account_info`. The consent transaction expires after 10 minutes; restart it from the client if the browser page has been left open longer.

## Use the returned message to choose the repair

| Message or symptom | Meaning and next action |
| --- | --- |
| The browser consent page never opens | Recheck the exact server URL, remote HTTP/OAuth support, and network access to both `mcp.dosya.dev` and `api.dosya.dev`. An API key is not a fallback transport. |
| **You have no workspace this app can read. End-to-end encrypted Spaces cannot be connected.** | Join or select an ordinary readable workspace. Vault and encrypted Spaces are deliberately outside this connector. |
| **This connection is not authenticated. Sign in to dosya again to reconnect.** | The access token or grant is invalid, expired, or revoked. Start a fresh authorization in the client. |
| **dosya could not be reached just now. This is temporary: try again in a moment. Do not reconnect.** | Keep the grant and retry after the service recovers. Reauthorization does not repair the dependency failure. |
| The client lists tools but `get_account_info` is refused | Renew authorization with `account.read` only if plan/storage information is needed. File tools continue to use `files.read`. |
| **Not visible to this connection.** | Confirm the selected workspace, current membership, folder confinement, role, hidden/locked state, and current file ID in Dosya. Another workspace ID in a tool argument cannot widen the grant. |
| **dosya is rate limiting this connection right now. Wait a minute, then try again.** | Stop parallel calls and wait at least the stated minute before retrying. Reconnecting creates no extra allowance. |
| Today's read/image allowance is used | Free connections allow 100 file reads and 25 image conversions per UTC day. Wait for 00:00 UTC or use an applicable paid plan; metadata/listing calls are separate. |
| A continuation cursor is invalid or stale | Restart `read_file` without the cursor and use the current file version. Windows from different file versions cannot be combined. |

## Expected result

Ask the client to run `list_workspaces` with `{}`. A healthy response identifies exactly the workspace fixed during consent. If it shows the wrong workspace, open Dosya **Settings → Connected AI apps**, disconnect that exact client/workspace row, and authorize again with the intended selection.

Next run `list_folder` with `{"page":1,"per_page":5}` and no folder ID. The default page size is 25 and the allowed range is 1–100. A confined membership begins at its permitted anchor. Compare the returned names with the Dosya Files view for the same account instead of asking the model to read a confidential file.

Dosya currently exposes nine read-only tools. It has no MCP upload, edit, share or delete tool. If a client shows no tools after successful OAuth, remove and re-add its connector definition or refresh tool discovery; granting broader file permissions cannot make nonexistent write tools appear.

## Diagnose file reading and download-link failures

`read_file` can return text windows up to 100,000 characters by default. Conversion normally accepts supported source files up to 26,214,400 bytes (25 MiB) and has a 45-second conversion deadline; deployment settings may narrow those values. For an unsupported or oversized type, use metadata or `get_download_link` when access is permitted.

A generated original-file URL lasts 300 seconds. Anyone holding it can download until expiry, so do not paste it into public logs or support messages. Issuing a link or converting content can create access/usage activity even though the connector cannot alter stored files.

OAuth access tokens last one hour and should be refreshed by the client. A connection must be authorized again after 30 days without use or 180 days overall. Membership loss, account state and plan changes are rechecked on calls. Disconnecting can take up to 60 seconds to reach a token already accepted by the validation cache, and it cannot recall content, transcripts or download URLs already received by the external application.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya API-key restriction dialog shown only to contrast API credentials with the OAuth grant required by MCP." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>MCP does not use the API-key form shown here; remove any pasted API key from the client and restart the OAuth connection flow. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Escalate with safe evidence

If `list_workspaces` still fails, record the client name/version, server URL, approximate time and timezone, stage reached, exact nonsecret message, and whether consent appears under **Connected AI apps**. Keep bearer tokens, authorization codes, signed download URLs and file contents out of the ticket.

## Related guides

- [Connect MCP](/developers/mcp-connect)
- [Disconnect an AI app](/integrations/disconnect-ai-app)
- [Contact support](/troubleshooting/contact-support)
