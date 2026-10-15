---
{
  "articleId": "hc-cli-handle-exit-codes",
  "locale": "en",
  "revision": 5,
  "title": "Handle Dosya CLI exit codes",
  "summary": "Branch scripts on Dosya CLI exit codes, preserve stderr, and distinguish usage, authentication, network, permission, and maintenance failures.",
  "category": "developers",
  "articleSlug": "cli-handle-exit-codes",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/cli/src/index.ts, apps/cli/src/output.ts, apps/cli/src/errors.ts, apps/cli/src/client.ts, apps/cli/src/commands/rm.ts, apps/cli/src/commands/mv.ts, apps/cli/src/commands/download.ts, and apps/cli/src/commands/sync.ts. Production commands were not executed.",
  "related": [
    "hc-cli-auth",
    "hc-cli-json-output"
  ],
  "keywords": [
    "cli handle exit codes",
    "Dosya CLI automation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Dosya CLI uses stable process statuses for automation: 0 success, 1 generic failure, 2 usage, 3 authentication, 4 network, 5 forbidden, and 75 maintenance. Signal exits remain 130 for SIGINT and 143 for SIGTERM.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-handle-exit-codes-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cli-handle-exit-codes-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cli-handle-exit-codes-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-handle-exit-codes-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-handle-exit-codes-help-workflow-2026-10-14.webp" alt="Four workflow panels show capturing streams and status, parsing an exit-1 batch receipt produced with --json, classifying usage or auth failures, and rescheduling maintenance." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers capturing streams and status, parsing command-specific batch JSON produced by a `--json` run that exits 1 on partial failure, classifying usage or auth failures, and rescheduling maintenance. <a class="workflow-map-full" href="/screenshots/cli-handle-exit-codes-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cli-handle-exit-codes-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cli-handle-exit-codes-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Capture stdout, stderr, and `$?` separately. Routine text and JSON use stdout; diagnostics, warnings, debug output, and progress use stderr.
- Decide which classes the job may retry. Authentication and permission failures need correction, not a tight retry.
- A 503 response with code `surface_disabled` maps directly to maintenance exit 75.

## Steps

1. Run the command without piping stdout directly into another process; first preserve both streams and the original exit status.
2. Treat 0 as command success. When a batch command was invoked with `--json`, one or more failed members normally produce command-specific JSON and exit 1; parse that receipt to retain successful counts and failure details.
3. Map 2 to invalid command syntax or arguments, 3 to a missing or rejected credential, and 5 to an authenticated caller lacking permission.
4. Map 4 to transport or connectivity failure. Apply bounded retry only when the command itself is safe to repeat.
5. Map 75 to temporary maintenance, including `surface_disabled`. Reschedule after an operator-approved delay rather than treating it as a permanent configuration error.
6. Record stderr and the numeric status. Preserve 130 and 143 as cancellations so a scheduler does not mislabel an interrupted job as application failure.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview with installation and command references for handle dosya cli exit codes." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The CLI overview supplies the installation and command references used by “Handle Dosya CLI exit codes”. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Automation branches on the original numeric status, retains human-readable diagnostics from stderr, and never parses an error message to guess whether failure was usage, auth, network, forbidden, or maintenance.

## Troubleshooting

**A pipeline reports the parser’s status.** Save the Dosya process status before invoking `jq`, or enable shell pipeline-status handling deliberately.

**Exit 1 has little detail.** Inspect stderr; it is the generic class for failures that do not map to a narrower status.

**A retry could mutate data twice.** Verify remote state first. An exit code identifies the failure class, not whether the server committed before the connection ended.

## Related guides

- [Authenticate the Dosya CLI](/developers/cli-authenticate)
- [Use CLI JSON output](/developers/cli-json-output)
