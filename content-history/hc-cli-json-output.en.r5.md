---
{
  "articleId": "hc-cli-json-output",
  "locale": "en",
  "revision": 5,
  "title": "Use JSON output from the Dosya CLI",
  "summary": "Use --json for command-specific Dosya CLI receipts, keep warnings off stdout, and inspect each command’s documented object instead of one schema.",
  "category": "developers",
  "articleSlug": "cli-json-output",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/cli/src/parse-args.ts, apps/cli/src/output.ts, apps/cli/src/commands/whoami.ts, and apps/cli/src/commands/config-cmd.ts. Production commands were not run.",
  "related": [
    "hc-cli-install",
    "hc-cli-transfer"
  ],
  "keywords": [
    "cli json output",
    "Advanced Dosya CLI workflows",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Pass `--json` or `-j` to request pretty-printed JSON on stdout. Dosya does not wrap every command in a universal `{ok,data}` schema: `whoami` emits the user object, listing commands retain their API shape, and usage builds its own report.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-json-output-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cli-json-output-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cli-json-output-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-json-output-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-json-output-help-workflow-2026-10-14.webp" alt="Four workflow panels show requesting JSON with separate streams, saving the process status, parsing the command-specific shape, and validating required fields." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers requesting JSON with separate streams, saving the process status, parsing the command-specific shape, and validating required fields. <a class="workflow-map-full" href="/screenshots/cli-json-output-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cli-json-output-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cli-json-output-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Confirm the chosen command supports the fields your script needs by running it once against disposable or read-only data.
- Capture stderr separately; warnings and debug information remain there even in JSON mode.
- `config get` redacts the stored API key, so its JSON is safe for diagnosis but cannot reproduce the credential.

## Steps

1. Run a read-only probe such as `dosya whoami --json`, redirecting stdout and stderr to separate files.
2. Save the exit code before parsing. A nonzero command can leave empty or incomplete stdout even when stderr clearly explains the failure.
3. Parse the actual top-level shape. For `whoami`, read user fields directly; for `ls`, inspect its listing wrapper rather than expecting the same keys.
4. Select only required values with `jq -e` so a missing field makes the script fail. Avoid storing the entire account or file response when one ID is enough.
5. Keep stderr with the job log and JSON stdout with the machine receipt. Never merge them with `2>&1` before a JSON parser.
6. Validate the command result semantically, such as the intended workspace ID or returned file ID, before starting a dependent command.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview with installation and command references for use json output from the dosya cli." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The CLI overview supplies the installation and command references used by “Use JSON output from the Dosya CLI”. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A successful command writes one valid, command-specific JSON document to stdout while progress and warnings remain on stderr. The script checks both exit status and required fields.

## Troubleshooting

**`jq` reports invalid JSON.** Confirm stdout and stderr were not merged, then inspect the original exit code.

**A field from another command is absent.** Read this command’s output shape; there is no universal result envelope.

**The key value is masked.** That is expected for `config get`. Obtain secrets from the secret store that provisioned them, not from CLI diagnostic output.

## Related guides

- [Install the CLI](/developers/cli-install)
- [Transfer with the CLI](/developers/cli-transfer)
