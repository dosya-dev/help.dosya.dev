---
{
  "articleId": "hc-mcp-connect",
  "locale": "en",
  "revision": 6,
  "title": "Connect an MCP client to Dosya",
  "summary": "Connect an OAuth-capable MCP client to Dosya, authorize one workspace and verify its read-only tools. Includes scopes, limits, token timing and disconnection.",
  "category": "developers",
  "articleSlug": "mcp-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14; no production account or native client installation performed. Product claims checked against src/pages/integration/mcp.astro; apps/mcp/src/index.ts; apps/mcp/src/server.ts; apps/mcp/src/tools/index.ts; apps/mcp/src/tools/simple-tools.ts; apps/mcp/src/tools/list-folder.ts; apps/mcp/src/tools/paging.ts; apps/mcp/src/tools/listing-tools.unit.test.ts; apps/mcp/src/tools/read-file.ts; apps/mcp/src/tools/result.ts; apps/mcp/src/cache.ts; apps/api/src/mcp-gateway.ts; apps/api/src/mcp-principal.ts; apps/api/src/lib/oauth/server.ts; apps/api/src/lib/oauth/consent.ts; apps/api/src/lib/oauth/token-cache.ts; apps/api/src/lib/oauth/connections.ts; apps/api/src/lib/plans.ts; apps/web/src/pages/connect/ai.tsx; apps/web/src/pages/profile/ai-apps.tsx; apps/mcp/src/tools/research.ts; apps/mcp/src/tools/index.unit.test.ts; apps/mcp/src/cache.unit.test.ts; apps/api/src/mcp-principal.unit.test.ts; apps/api/src/mcp-gateway.meter.unit.test.ts; apps/api/src/lib/oauth/token-cache.unit.test.ts; apps/api/src/lib/download-ttl.ts. External client procedure checked against https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization; https://modelcontextprotocol.io/specification/2025-06-18/basic/transports. Light/dark process diagrams depict documented controls and outcomes, not captured UI.",
  "related": [
    "hc-ai-app-permissions",
    "hc-mcp-test-read-only-operation"
  ],
  "keywords": [
    "connect MCP client to cloud storage",
    "Streamable HTTP",
    "Dosya MCP OAuth",
    "list_workspaces",
    "Connected AI apps",
    "MCP read-only tools"
  ]
}
---
Connect your AI application's remote **Model Context Protocol (MCP)** client to **https://mcp.dosya.dev/mcp**. Dosya uses **Streamable HTTP with OAuth authorization**, not an API key. The current connector is read-only: it can find/read permitted files and provide download links, but cannot upload, change, share or delete files.

## Check client support and access

Your client needs remote HTTPS Streamable HTTP, OAuth discovery, authorization-code/PKCE support and dynamic client registration. A client offering only local command/stdio servers or only static API-key headers cannot complete this connection. Client plans and administrators may control whether remote connectors are available; check your application's current official instructions. Dosya's consent page recognizes Claude and ChatGPT callback domains, but that does not certify every client version or make a self-named client trusted.

Use a Dosya account that is a member of the workspace you intend to expose. End-to-end encrypted **Spaces** and **Vault** are not connected. A grant is pinned to one selected workspace, and file access remains subject to your membership, folder confinement, hidden/locked content and role on every tool call. An AI connection cannot reveal a file your account cannot read.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mcp-connect-process-2026-10-14.webp" data-light-href="/screenshots/mcp-connect-process-2026-10-14.webp" data-dark-href="/screenshots/mcp-connect-process-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mcp-connect-process-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mcp-connect-process-2026-10-14.webp" alt="Dosya MCP OAuth process: add the remote HTTPS server, review the callback, allow one workspace and test list_workspaces without reading a file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>OAuth fixes the workspace at approval; list_workspaces verifies that grant without supplying an API key or modifying files. <a class="workflow-map-full" href="/screenshots/mcp-connect-process-2026-10-14.webp" data-light-href="/screenshots/mcp-connect-process-2026-10-14.webp" data-dark-href="/screenshots/mcp-connect-process-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: authorize the remote server

1. In your client's remote-server/connector setup, give the connection a recognizable name and enter the complete URL `https://mcp.dosya.dev/mcp`. Select HTTP/Streamable HTTP where a transport choice exists. Do not configure a shell command or replace `/mcp` with `/sse`.
2. Start the client's connect/authorize action. It discovers the protected resource at the MCP host and the authorization server at `https://api.dosya.dev`. Dynamic registration, token exchange and refresh are handled by the client. Do not paste `dos_…` API keys, mobile tokens or your account password into a bearer-header field.
3. In the Dosya browser consent screen, check the account and callback destination. A recognized hosted client shows **Verified: …**; a local or unknown callback shows **Not verified · sends to …**. Local-loopback clients are not inherently verified: approve only if you just started that application yourself. The registered name alone is self-asserted.
4. Under **Workspace it can read**, choose the intended workspace. **Read files and folders** (`files.read`) is required. **See your plan and storage** (`account.read`) is optional when requested; leave it off unless the client needs account usage. The consent also lists excluded capabilities: changing/sharing/deleting and opening your other workspaces or Vault.
5. Choose **Allow** (or **Allow Claude/ChatGPT** for recognized clients), return to the initiating client and let it finish. **Deny** abandons the grant. Consent transactions expire after **10 minutes**; restart a stale authorization from the client.

These are connection values, not a universal client-specific JSON schema:

```text
Server URL: https://mcp.dosya.dev/mcp
Transport: Streamable HTTP
Authorization: OAuth through the browser
Required scope: files.read
Optional scope: account.read
Workspace: selected on the Dosya consent page
```

## Verify the result with a read-only call

Ask the client to run **list_workspaces** with an empty argument object `{}` and to show the returned workspace ID/name. Its `structuredContent.workspaces` should identify only the authorized workspace. This checks the connection without reading a file's contents. If it reports the wrong workspace, disconnect that grant and authorize again; adding another workspace ID to tool arguments cannot widen it.

Next, if desired, run **list_folder** with `{"page":1,"per_page":5}`. Omitting the folder uses the accessible root; a confined membership resolves to its permitted anchor. Compare the returned entry names with Dosya Files. Listings page at **25 entries** by default and accept **1–100** per page. Stop before asking the model to read confidential content merely to prove login.

## What the client can receive

| Tool | Result/capability |
| --- | --- |
| `list_workspaces` | Authorized workspace identifiers and names. |
| `list_folder`, `search_files` | Permitted folder/file entries and pagination; search is by name/query, not an unrestricted crawl of all accounts. |
| `get_file_info` | Name, byte size, type, current version, folder/workspace and web URL without reading contents. |
| `read_file` | Extracted text or an image description, with source/version metadata and a continuation cursor when truncated. |
| `get_download_link` | URL valid for **300 seconds** and `expires_in_seconds` for original-file download. Anyone holding it can use it until expiry. |
| `get_account_info` | Account plan and storage usage, requiring the optional account.read scope. |
| `search`, `fetch` | Research-compatible name search and document text, with source links. |

There are **9 tools** and no write/upload/delete tools. Download-link issuance and text conversion still create access/usage activity even though they do not alter stored files. The client receives readable content you choose to expose; that content may enter the AI application's chat/history under its own settings. Disconnecting later cannot recall bytes or transcripts already received. Keep signed download URLs out of public chats/logs.

## Limits, timing and reauthorization

Free permits **100 file reads** and **25 image conversions per connection per UTC day**. Paid plans have no daily MCP read/image count cap; request rate, download egress and other API plan limits still apply. Listing/file metadata does not perform the text-read operation. Each requested text window can count as a read, including a cached extraction. Daily counts reset at **00:00 UTC**; wait for the reset shown in a cap response rather than repeatedly retrying.

The shipped default text window is **100,000 characters**. Conversion normally accepts source files up to **26,214,400 bytes (25 MiB)** with a **45-second** conversion deadline; deployment settings can change these bounds. Oversized or unsupported types can still use get_download_link when permitted. `read_file` returns `truncated`, `cursor`, `offset`, `total_chars`, `file_version` and source information. Continue with the returned cursor, and restart without it if the file version changes; mixing windows from different versions is refused.

OAuth access tokens last **1 hour**. The client refreshes them; the connection expires after **30 days unused** and at most **180 days** overall before renewed authorization is needed. There is no persistent MCP session to manage instead of the OAuth grant. Account ban/deletion/plan changes are checked on calls, and loss of workspace membership blocks subsequent access.

## Resolve authorization and tool failures

| Response/state | Correct next step |
| --- | --- |
| Browser consent never opens | Check remote HTTP/OAuth/DCR support and network access to both MCP and API hosts. An API key is not a fallback. |
| **You have no workspace this app can read. End-to-end encrypted Spaces cannot be connected.** | Use a permitted ordinary workspace/membership, not an encrypted Space. |
| **This connection is not authenticated. Sign in to dosya again to reconnect.** | Restart client authorization after checking expiry/revocation. |
| **dosya could not be reached just now. This is temporary: try again in a moment. Do not reconnect.** | Wait and retry; an infrastructure outage is different from revoked authorization. |
| Missing account.read permission | Permit the optional scope through the client's renewed authorization if you want get_account_info; other file tools use files.read. |
| **Not visible to this connection.** | Check workspace, member confinement, role and file state in Dosya. Do not try another account's ID. |
| **dosya is rate limiting this connection right now. Wait a minute, then try again.** | Reduce parallel calls and wait at least the indicated minute. |
| Conversion/type/size refusal | Use the original download link when needed, or supply a supported smaller document. |
| Invalid/stale continuation cursor | Restart read_file without the old cursor and use the current file version. |

## Disconnect and change workspaces

Open Dosya **Settings → Connected AI apps**, identify the exact client/workspace row and click **Disconnect**. Remove the connector from the AI client too if you no longer want it offered. Revocation stops new authorization checks, but an already validated token may continue working for up to **60 seconds** because successful token validation is cached. Previously downloaded bytes, exposed text and already issued download URLs are not erased by disconnecting.

To change the selected workspace, revoke the old grant and connect again with the new selection. File storage is unchanged by granting, denying or disconnecting the AI application.

## Expected result

The client discovers Dosya's read-only tools, list_workspaces identifies the intended grant and a permitted listing matches the web app. You can inspect and revoke that specific connection in Connected AI apps without managing an API key.

## Related guides

- [Review AI app permissions](/integrations/ai-app-permissions)
- [Test an MCP read-only operation](/developers/mcp-test-read-only-operation)
