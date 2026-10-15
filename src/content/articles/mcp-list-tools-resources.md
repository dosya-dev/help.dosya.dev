---
{
  "articleId": "hc-mcp-list-tools-resources",
  "locale": "en",
  "revision": 5,
  "title": "List Dosya MCP tools and resources",
  "summary": "Inspect Dosya’s nine read-only MCP tools, their schemas and scope needs, and understand why the server currently publishes no MCP resources.",
  "category": "developers",
  "articleSlug": "mcp-list-tools-resources",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mcp/src/server.ts, apps/mcp/src/tools/index.ts, apps/mcp/src/tools/simple-tools.ts, apps/mcp/src/tools/list-folder.ts, apps/mcp/src/tools/search-files.ts, apps/mcp/src/tools/read-file.ts, apps/mcp/src/tools/research.ts, apps/mcp/src/tools/paging.ts, apps/mcp/src/index.ts, apps/api/src/mcp-gateway.ts. Production behavior for “List Dosya MCP tools and resources” was not exercised; this revision is awaiting publication.",
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
Dosya currently publishes MCP tools, not MCP resource objects. The protected resource URL `https://mcp.dosya.dev/mcp` identifies the OAuth audience; it does not imply that `resources/list` contains files.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mcp-list-tools-resources-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mcp-list-tools-resources-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mcp-list-tools-resources-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mcp-list-tools-resources-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mcp-list-tools-resources-help-workflow-2026-10-14.webp" alt="Four panels show refreshing Dosya MCP capabilities, checking all nine tool names, inspecting read-only annotations, and confirming that no MCP resources are published." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show refreshing Dosya MCP capabilities, checking all nine tool names, inspecting read-only annotations, and confirming that no MCP resources are published. <a class="workflow-map-full" href="/screenshots/mcp-list-tools-resources-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mcp-list-tools-resources-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mcp-list-tools-resources-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the connected Dosya server in the MCP client and refresh its capabilities. Confirm the server identifies itself as **dosya** and the connection is authenticated with required `files.read` access.
2. Check for the core navigation tools: `list_workspaces`, `list_folder`, `search_files`, and `get_file_info`. `list_folder` accepts an omitted `folder_id` for the top level and an optional `workspace_id` returned by `list_workspaces`.
3. Check the content tools: `read_file` and `get_download_link`. `read_file` returns bounded text with a continuation cursor; `get_download_link` creates a new five-minute bearer URL and is therefore read-only but not idempotent.
4. Check `get_account_info`. It is the only current tool requiring optional `account.read`; a client may open an OAuth scope prompt if that permission was not granted initially.
5. Check the research adapters `search` and `fetch`. They expose name search and document text in the shapes required by research clients; they do not add write capability beyond `search_files` and `read_file`.
6. Inspect the annotations and resource view. All nine tools declare `readOnlyHint: true` and `destructiveHint: false`; a blank or unsupported MCP resources view is expected because the server registers no resources.

Listing defaults are bounded. `list_folder` returns 25 combined entries by default and accepts at most 100. `search_files` pages folders and files independently, so its default is up to 25 folders plus 25 files and its maximum is 100 folders plus 100 files.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “List Dosya MCP tools and resources”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “List Dosya MCP tools and resources”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The client displays nine Dosya tools with input schemas and read-only annotations. No mutation tool appears, and the absence of MCP resource objects is recognized as the current server design rather than a connection failure.

**A tool is missing.** Refresh the server definition or reconnect the client. If only `get_account_info` fails, grant **See your plan and storage** instead of replacing the whole connection blindly.

**Files do not appear under Resources.** Use `list_folder` or `search_files`; Dosya files are returned through tools in this release.

## Related guides

- [Connect an MCP client](/developers/mcp-connect)
- [Troubleshoot MCP](/troubleshooting/mcp)
