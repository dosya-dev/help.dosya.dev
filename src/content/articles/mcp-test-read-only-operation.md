---
{
  "articleId": "hc-mcp-test-read-only-operation",
  "locale": "en",
  "revision": 5,
  "title": "Test a read-only Dosya MCP operation",
  "summary": "Run list_workspaces and list_folder against the pinned workspace, inspect structured paging fields, and confirm that no stored content changes.",
  "category": "developers",
  "articleSlug": "mcp-test-read-only-operation",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mcp/src/tools/list-folder.ts, apps/mcp/src/tools/simple-tools.ts, apps/mcp/src/tools/paging.ts, apps/mcp/src/tools/result.ts, apps/mcp/src/tools/index.unit.test.ts, apps/mcp/src/index.ts, apps/api/src/mcp-gateway.ts, apps/api/src/lib/plans.ts. Production behavior for “Test a read-only Dosya MCP operation” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mcp-connect",
    "hc-mcp-troubleshoot"
  ],
  "keywords": [
    "mcp test read only operation",
    "MCP client operation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Use a listing call for the first MCP test. It proves authentication, workspace confinement, structured output, and read-only behavior without downloading file bytes or spending the daily content-read allowance.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mcp-test-read-only-operation-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mcp-test-read-only-operation-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mcp-test-read-only-operation-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mcp-test-read-only-operation-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mcp-test-read-only-operation-help-workflow-2026-10-14.webp" alt="Four panels show calling list_workspaces, listing the selected workspace root, reading the structured paging fields, and confirming that stored files remain unchanged." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show calling list_workspaces, listing the selected workspace root, reading the structured paging fields, and confirming that stored files remain unchanged. <a class="workflow-map-full" href="/screenshots/mcp-test-read-only-operation-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mcp-test-read-only-operation-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mcp-test-read-only-operation-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the connected MCP client, call `list_workspaces` with no arguments. Record the returned `workspace_id`; a valid grant lists only the workspace chosen on the OAuth consent screen.
2. Call `list_folder` with that `workspace_id` and omit `folder_id` to request the workspace top level. Also omit paging values for the default page 1 and 25-entry window.
3. Inspect `structuredContent.entries`. Folder rows and file rows include `kind`, `id`, `name`, `folder_id`, and an app URL; files also report byte size, MIME type, and modification time when available.
4. Read `page` and `next_page`. If `next_page` is a number, call the same tool with that page; stop when it is `null`. A client may request 1 through 100 entries per page.
5. Open Dosya separately and compare the returned names with the selected workspace root. Hidden and deleted content is excluded, and the connection must not reveal another workspace or an end-to-end encrypted Space.
6. Refresh the web listing and confirm no file, folder, share, or version changed. The MCP server exposes no mutation tool, and every registered operation declares itself read-only and non-destructive.

`list_folder` uses API request capacity but does not count as a content read. If you later test `read_file`, the current defaults are a 100,000-character window, a 25 MiB conversion ceiling, and a 45-second conversion deadline. The Free plan defaults to 100 file reads and 25 image conversions per UTC day; paid plan defaults are unlimited.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Test a read-only Dosya MCP operation”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Test a read-only Dosya MCP operation”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

`list_workspaces` returns the pinned workspace and `list_folder` returns a structured, paginated snapshot of its visible root. Rechecking Dosya shows that the operation created, changed, shared, and deleted nothing.

**The result says `Not visible to this connection.`** Confirm the identifier belongs to the workspace selected during OAuth consent and that the signed-in member still has access.

**The service says it is unavailable.** Retry shortly without reconnecting; temporary gateway failures deliberately produce `dosya could not be reached just now` rather than invalidating the credential.

## Related guides

- [Connect an MCP client](/developers/mcp-connect)
- [Troubleshoot MCP](/troubleshooting/mcp)
