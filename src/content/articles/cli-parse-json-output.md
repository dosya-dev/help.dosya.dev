---
{
  "articleId": "hc-cli-parse-json-output",
  "locale": "en",
  "revision": 5,
  "title": "Parse Dosya CLI JSON in a script",
  "summary": "Preserve the Dosya CLI exit status, parse valid command-specific JSON even for partial failures, and gate dependent work on a verified success.",
  "category": "developers",
  "articleSlug": "cli-parse-json-output",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/cli/src/output.ts, apps/cli/src/commands/whoami.ts, apps/cli/src/commands/ls.ts, apps/cli/src/commands/rm.ts, apps/cli/src/commands/mv.ts, apps/cli/src/commands/download.ts, and apps/cli/src/commands/sync.ts. Production commands were not run.",
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
A robust shell wrapper preserves the Dosya process status before running `jq`. JSON output is command-specific, and batch commands normally emit usable success and failure receipts before exiting 1 when any member failed.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-parse-json-output-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cli-parse-json-output-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cli-parse-json-output-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-parse-json-output-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-parse-json-output-help-workflow-2026-10-14.webp" alt="Four workflow panels show separating output, preserving the CLI exit class, validating command-specific JSON, and inspecting batch failure receipts." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers separating output, preserving the CLI exit class, validating command-specific JSON, and inspecting batch failure receipts before dependent work. <a class="workflow-map-full" href="/screenshots/cli-parse-json-output-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cli-parse-json-output-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cli-parse-json-output-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Use temporary files with restrictive permissions for outputs that may contain names or IDs.
- Keep `set -o pipefail` when using a pipeline, or avoid a pipeline so the parser cannot hide the CLI status.
- Choose a precise `jq -e` assertion for the command’s documented response.

## Steps

1. Create separate stdout and stderr files, then run the command with `--json`; for example, `dosya whoami --json >result.json 2>result.err`.
2. Capture `status=$?` immediately and classify it without replacing it with `jq`’s status. Keep stderr beside that original numeric result.
3. When stdout is nonempty, run `jq -e . result.json` even after a nonzero exit. Preserve valid command output; if parsing fails, report that separately without losing the Dosya status.
4. Apply a command-specific selector, such as the required user identifier from `whoami` or the expected item collection from `ls`. There is no universal response envelope.
5. For `mv`, `rm`, recursive download, trash, star, or sync batches, inspect the command’s `failures` entries and successful counts. Partial work normally produces valid JSON and exits 1.
6. Start dependent work only when the Dosya status is 0 and the command-specific postcondition passes. Retain a sanitized partial receipt for recovery, then remove sensitive temporary files.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview with installation and command references for parse dosya cli json in a script." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The CLI overview supplies the installation and command references used by “Parse Dosya CLI JSON in a script”. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The wrapper preserves the CLI failure class, extracts useful receipts from valid nonzero output, and starts dependent work only after exit 0 and the command-specific postcondition both pass.

## Troubleshooting

**The JSON file is empty.** Read stderr and the saved process status; do not let `jq` become the reported failure.

**A batch exits 1 with valid JSON.** Preserve successful counts and failure entries, repair or report each failed member, and keep the overall task unsuccessful.

**Warnings break parsing.** They should be on stderr. Remove stream merging and confirm the wrapper invokes the current CLI binary.

## Related guides

- [Authenticate the Dosya CLI](/developers/cli-authenticate)
- [Use CLI JSON output](/developers/cli-json-output)
