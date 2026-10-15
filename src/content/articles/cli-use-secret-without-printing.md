---
{
  "articleId": "hc-cli-use-secret-without-printing",
  "locale": "en",
  "revision": 5,
  "title": "Pass a CLI credential without printing it",
  "summary": "Supply a Dosya API key through stdin or a secret environment variable, retain private file modes, and revoke stored credentials without logging them.",
  "category": "developers",
  "articleSlug": "cli-use-secret-without-printing",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/cli/src/commands/auth.ts, apps/cli/src/config.ts, apps/cli/src/commands/config-cmd.ts, and apps/cli/tests. Production credentials were not created or revoked.",
  "related": [
    "hc-cli-auth",
    "hc-cli-json-output"
  ],
  "keywords": [
    "cli use secret without printing",
    "Dosya CLI automation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Dosya API keys begin with `dos_`. Avoid literal secret arguments because process listings and shell history can expose them; the CLI warns when a key is passed directly on the command line.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-use-secret-without-printing-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cli-use-secret-without-printing-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cli-use-secret-without-printing-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-use-secret-without-printing-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-use-secret-without-printing-help-workflow-2026-10-14.webp" alt="Four workflow panels show loading the key privately, passing it outside argv, clearing the transient secret, and choosing local logout or server revocation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers loading the key privately, passing it outside argv, clearing the transient secret, and choosing local logout or server revocation. <a class="workflow-map-full" href="/screenshots/cli-use-secret-without-printing-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cli-use-secret-without-printing-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cli-use-secret-without-printing-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Retrieve the key from an approved secret manager at runtime.
- Use a private `XDG_CONFIG_HOME` when saving it; config directories and files should remain 0700 and 0600.
- `config get` redacts the key. Do not build workflows that try to read it back.

## Steps

1. Load the secret into a transient environment variable without echoing it. Disable command tracing around the retrieval and CLI invocation.
2. For one command, export `DOSYA_API_KEY` only to that process. For saved authentication, pipe the secret to the supported key-from-stdin form using `--key -`.
3. Run `dosya whoami --json` and validate the expected identity. Capture stdout and stderr without printing the environment.
4. Unset the shell variable immediately after the process. Ensure job logs, crash reports, and debug wrappers do not dump the environment.
5. Use local logout when only the machine’s saved credential should be removed. Use `logout --revoke` when the server key must also be invalidated.
6. Check the revoke result: a failed server revoke retains the local key so it can be retried, while a 401 clears an already unusable local credential. Verify config output remains redacted.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview with installation and command references for pass a cli credential without printing it." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The CLI overview supplies the installation and command references used by “Pass a CLI credential without printing it”. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The CLI authenticates without placing the key in argv or logs, its stored file remains private, and logout behavior matches the chosen local-only or server-revoke intent.

## Troubleshooting

**The CLI warns about a literal key.** Rotate the exposed credential and switch to stdin or a secret environment injection.

**Revoke fails with a network error.** The local key remains so the server action can be retried; protect the config file until then.

**A CI log contains environment output.** Remove environment-dump steps and rotate the key. Redaction in `config get` cannot sanitize unrelated logging tools.

## Related guides

- [Authenticate the Dosya CLI](/developers/cli-authenticate)
- [Use CLI JSON output](/developers/cli-json-output)
