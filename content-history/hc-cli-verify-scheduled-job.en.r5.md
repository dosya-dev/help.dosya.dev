---
{
  "articleId": "hc-cli-verify-scheduled-job",
  "locale": "en",
  "revision": 5,
  "title": "Verify a scheduled CLI job",
  "summary": "Run a Dosya CLI job with explicit paths, secret, and workspace, preserve JSON and exit evidence, then verify its remote result before success.",
  "category": "developers",
  "articleSlug": "cli-verify-scheduled-job",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/cli/src/index.ts, apps/cli/src/runtime.ts, apps/cli/src/config.ts, apps/cli/src/output.ts, and packages/prod-smoke. Production schedules were not run.",
  "related": [
    "hc-cli-auth",
    "hc-cli-json-output"
  ],
  "keywords": [
    "cli verify scheduled job",
    "Dosya CLI automation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Schedulers provide a sparse environment and may run from an unexpected directory. A reliable Dosya job uses absolute paths, explicit credential isolation, structured output, and a separate verification read.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-verify-scheduled-job-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cli-verify-scheduled-job-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cli-verify-scheduled-job-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-verify-scheduled-job-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-verify-scheduled-job-help-workflow-2026-10-14.webp" alt="Four workflow panels show recording scheduler context, verifying identity and workspace, classifying the original exit status, and checking remote state." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers recording scheduler context, verifying identity and workspace, classifying the original exit status, and checking remote state. <a class="workflow-map-full" href="/screenshots/cli-verify-scheduled-job-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cli-verify-scheduled-job-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cli-verify-scheduled-job-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Use the absolute CLI binary and local input path. The default request timeout is 30 seconds; set a positive `--timeout` only when the operation needs a different bound.
- Inject `DOSYA_API_KEY` from the scheduler or assign a private `XDG_CONFIG_HOME`; there is no `--profile` option.
- Pin and verify the intended workspace before changing data.

## Steps

1. At job start, record the UTC time, CLI version, absolute executable, nonsecret job name, and expected workspace. Do not log the secret or full environment.
2. Run `whoami --json` with the scheduled credential and reject an unexpected account. Confirm the target workspace through an explicit read.
3. Invoke the business command with absolute paths, `--json`, and the approved timeout. Redirect stdout and stderr to separate protected files.
4. Save the original process status. Classify 3 as auth, 4 as network, 5 as forbidden, 75 as maintenance, and 130 or 143 as cancellation; retry only operations safe to repeat.
5. Parse the command-specific receipt and extract its resource ID. Check partial batch failures rather than trusting a generic success assumption.
6. Perform a read-only remote verification for the expected ID, parent, name, size, or deleted state. Mark the schedule successful only after that postcondition matches.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview with installation and command references for verify a scheduled cli job." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The CLI overview supplies the installation and command references used by “Verify a scheduled CLI job”. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The scheduler records identity, command receipt, exit status, and a read-only remote postcondition. A local zero exit without the expected remote state cannot become a successful run.

## Troubleshooting

**It works interactively but not on schedule.** Compare executable path, working directory, XDG root, secret injection, and network access.

**The job times out.** Increase a positive `--timeout` only after confirming the operation and scheduler deadline permit it.

**A mutation has network exit 4.** Read remote state before retrying. A transport failure does not prove the server rejected the write.

## Related guides

- [Authenticate the Dosya CLI](/developers/cli-authenticate)
- [Use CLI JSON output](/developers/cli-json-output)
