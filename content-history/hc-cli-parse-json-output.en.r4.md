---
{
  "articleId": "hc-cli-parse-json-output",
  "locale": "en",
  "revision": 4,
  "title": "Parse Dosya CLI JSON in a script",
  "summary": "Request structured output, validate the expected fields and types, and select records by stable identifier. Verify that the script consumes machine-readable data without scraping display text.",
  "category": "developers",
  "articleSlug": "cli-parse-json-output",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-cli-auth",
    "hc-cli-json-output"
  ],
  "keywords": [
    "cli parse json output",
    "Dosya CLI automation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Parse Dosya CLI JSON in a script** in Dosya. The main action is to request structured output, validate the expected fields and types, and select records by stable identifier; the decisive check is whether the script consumes machine-readable data without scraping display text.

<figure class="help-screenshot"><a href="/screenshots/cli-parse-json-output-help-workflow-2026-10-14.webp"><img src="/screenshots/cli-parse-json-output-help-workflow-2026-10-14.webp" alt="Workflow for “Parse Dosya CLI JSON in a script”: request structured output, validate the expected fields and types, and select records by stable identifier; the script consumes machine-readable data without scraping display text." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Parse Dosya CLI JSON in a script”: request structured output, validate the expected fields and types, and select records by stable identifier; the script consumes machine-readable data without scraping display text. <a href="/screenshots/cli-parse-json-output-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a terminal running the Dosya CLI in the current released client.
- Confirm the active account and workspace, then identify read-only CLI command supporting JSON.

## Steps: parse Dosya CLI JSON in a script

1. Open a terminal running the Dosya CLI and confirm the active account and workspace.
2. Locate read-only CLI command supporting JSON and verify its name or identifying details.
3. Request structured output, validate the expected fields and types, and select records by stable identifier.
4. Confirm that the script consumes machine-readable data without scraping display text.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Reference for “Parse Dosya CLI JSON in a script”: Dosya CLI overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Parse Dosya CLI JSON in a script”: Dosya CLI overview page. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use restricted profiles, structured output, and exit codes so scripts can fail safely.

## Verify the result

After completing the steps, check the expected result: The script consumes machine-readable data without scraping display text.

## Expected result

The controlled workflow completes and the script consumes machine-readable data without scraping display text.

## Troubleshooting

**The expected control is missing.** Return to a terminal running the Dosya CLI, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Authenticate the Dosya CLI](/developers/cli-authenticate)
- [Use CLI JSON output](/developers/cli-json-output)
