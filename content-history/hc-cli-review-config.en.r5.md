---
{
  "articleId": "hc-cli-review-config",
  "locale": "en",
  "revision": 5,
  "title": "Review Dosya CLI configuration",
  "summary": "Locate the active config, inspect the API endpoint and workspace without exposing the stored key, and identify environment or flag overrides before a command.",
  "category": "developers",
  "articleSlug": "cli-review-config",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14. Verified supported config keys, redaction, file location, API-base precedence, workspace precedence, sync settings and permission warnings in apps/cli/src/commands/config-cmd.ts; apps/cli/src/config.ts; apps/cli/src/resolver.ts; apps/cli/src/commands/auth.ts; apps/cli/tests/integration/config.test.ts; apps/cli/tests/unit/resolver.test.ts; and apps/cli/README.md. Local repository evidence only; no production request was made.",
  "related": [
    "hc-cli-auth",
    "hc-cli-workspace",
    "hc-cli-transfer"
  ],
  "keywords": [
    "dosya config get",
    "Dosya CLI config path",
    "DOSYA_API_BASE",
    "default_workspace",
    "CLI configuration"
  ]
}
---
Review the CLI configuration before diagnosing an unexpected account, workspace, or server. The safe commands redact the stored API key while showing the API base, default workspace, and sync options that influence later operations.

## Steps

```bash
dosya config path
dosya config get
dosya config get --json
```

`config path` prints `~/.dosya/config.json` unless `XDG_CONFIG_HOME` redirects it to `$XDG_CONFIG_HOME/dosya/config.json`. `config get` displays these supported values:

- `api_base`: server used for REST requests.
- `default_workspace`: workspace inherited by commands without an explicit context.
- `sync_delta`: `true` enables opt-in block-level delta uploads for eligible sync changes.
- `sync_parallel`: concurrent sync transfers, with a default of 8 and a maximum of 16.

The no-argument and JSON forms never print the token; they return `api_key: "<redacted>"` when a stored key exists. An unknown name fails with `Unknown config key: NAME. Available keys: api_base, default_workspace, sync_delta, sync_parallel`.

<figure class="help-screenshot"><a href="/screenshots/cli-review-config-help-workflow-2026-10-14.webp"><img src="/screenshots/cli-review-config-help-workflow-2026-10-14.webp" alt="Dosya CLI configuration review showing the config path, redacted values, environment overrides, and a harmless identity check." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Inspect supported values through CLI commands, then account for environment and command-line overrides before testing the effective context. <a href="/screenshots/cli-review-config-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Determine the effective endpoint and credential

The default API base is `https://api.dosya.dev`. Effective endpoint precedence is:

1. `DOSYA_API_BASE` in the process environment.
2. The stored `api_base` value.
3. The built-in production default.

Credential precedence is different:

1. `--key` or `-k` on the command.
2. `DOSYA_API_KEY` in the environment.
3. `api_key` in the config file.

Check whether the shell is overriding stored values without printing their contents:

```bash
if test -n "${DOSYA_API_KEY+x}"; then echo 'DOSYA_API_KEY is set'; else echo 'DOSYA_API_KEY is not set'; fi
if test -n "${DOSYA_API_BASE+x}"; then printf 'DOSYA_API_BASE=%s\n' "$DOSYA_API_BASE"; else echo 'DOSYA_API_BASE is not set'; fi
dosya whoami
```

`dosya whoami` is the effective credential test. It prints the account identity reached by the winning key and endpoint. A successful stored login does not prove a later shell without the same home directory or `XDG_CONFIG_HOME` will read that file.

## Review workspace resolution

```bash
dosya config get default_workspace
dosya ls
```

For normal path references, `ws_ID:path` overrides `--workspace`, which overrides `default_workspace`. The default affects future CLI commands only; it does not change the active workspace in the browser. If the listing is unfamiliar, compare its `workspace_id` in `dosya ls --json` with the ID returned by `dosya workspace list`.

## Change only supported values

```bash
dosya config set default_workspace ws_REPLACE_ME
dosya config set api_base https://api.dosya.dev
dosya config set sync_delta true
dosya config set sync_parallel 12
```

`config set` requires an existing config; otherwise it returns `Not authenticated. Run: dosya auth login`. Values are written as strings. Re-run `config get KEY` and one harmless command after changing context. Use an explicit `--workspace` in deployment scripts when the destination should remain fixed even if a machine default changes.

Do not hand-edit `api_key` through `config set`; it is intentionally excluded from allowed keys. Use `dosya auth login` for stored authentication or `DOSYA_API_KEY` for an injected secret.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview page used to confirm production installation and command documentation after reviewing local configuration." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Compare the installed CLI behavior with the current CLI overview when a local configuration appears to use an obsolete endpoint or command. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Protect the config file

The file contains the stored API key in plain text. On Unix-like systems, login creates it with mode `0600` inside a `0700` directory. If a backup, copy, or archive loosens the file mode, the CLI emits a warning naming the path and recommended `chmod 600` correction. Windows does not use that mode check.

Do not attach the raw file to a support request. Prefer `dosya config get --json`, `dosya whoami --json`, the command line with its key removed, the exit code, and sanitized error output. Debug logs must never include `DOSYA_API_KEY` or a literal `--key` value.

## Resolve mismatches

**`config get` says no configuration exists.** Confirm the current home directory and `XDG_CONFIG_HOME`, then run `dosya auth login` for this environment.

**The displayed `api_base` is production but requests reach another server.** Check `DOSYA_API_BASE`, which takes precedence over the file.

**`whoami` shows a different account.** Remove a command-line key override or check which `DOSYA_API_KEY` the process inherited.

**The correct account lists the wrong workspace.** Inspect a `ws_ID:` path prefix and `--workspace` before changing the saved default.

**Changing `api_base` breaks authentication.** API keys belong to the service that issued them. Restore `https://api.dosya.dev` unless a trusted Dosya environment explicitly gave you another endpoint.

## Expected result

The config path is known, the key remains redacted, and `dosya whoami` plus a read-only listing confirm the effective endpoint, account, and workspace. Environment and command-line overrides are either deliberate or removed before production commands run.

## Related guides

- [Authenticate without exposing a token](/developers/cli-authenticate)
- [Choose and verify a workspace](/developers/cli-workspace)
- [Upload and download with the CLI](/developers/cli-transfer)
