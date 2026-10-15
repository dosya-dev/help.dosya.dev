---
{
  "articleId": "hc-cli-troubleshoot",
  "locale": "en",
  "revision": 6,
  "title": "Troubleshoot Dosya CLI authentication and transfers",
  "summary": "Use CLI exit codes and debug output to isolate installation, API base, credentials, workspace, permission, timeout, quota, and upload errors.",
  "category": "troubleshooting",
  "articleSlug": "cli",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14 against apps/cli/src/index.ts; apps/cli/src/config.ts; apps/cli/src/client.ts; apps/cli/src/errors.ts; apps/cli/src/output.ts; apps/cli/src/runtime.ts; apps/cli/src/commands/auth.ts; apps/cli/src/commands/whoami.ts; apps/cli/src/commands/workspace.ts; apps/cli/src/commands/ls.ts; apps/cli/src/commands/upload.ts; apps/cli/src/multipart.ts. Commands were not run with production credentials.",
  "related": [
    "hc-cli-install",
    "hc-cli-auth",
    "hc-cli-workspace"
  ],
  "keywords": [
    "Dosya CLI authentication failed",
    "Dosya CLI exit codes",
    "CLI upload failed",
    "DOSYA_API_BASE"
  ]
}
---
Run a read-only command before retrying a transfer. The Dosya CLI separates usage, authentication, network, permission and maintenance failures with exit codes, so preserve the message and `$?`/`%ERRORLEVEL%` rather than responding to every refusal by creating a new key.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-workflow-map-2026-10-14.webp" alt="CLI diagnostic sequence: confirm the binary and API origin, run whoami, list workspaces, select the explicit workspace, then retry one transfer." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>A successful `whoami` proves the credential and API origin; a workspace listing then separates context from transfer-specific policy. <a class="workflow-map-full" href="/screenshots/cli-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

Run these in order:

```sh
dosya --version
dosya --help
dosya whoami
dosya workspace list
dosya ls --workspace REPLACE_WITH_WORKSPACE_ID
```

`--version` failing means the executable is missing, blocked, or not on `PATH`. `--help` succeeding while `whoami` fails means the binary starts and the problem is configuration, network or authorization. `whoami` prints the authenticated name, email, account ID and workspace count; verify that identity before any write.

Use `--debug` to print request method, URL, attempt and HTTP status to stderr. It does not intentionally print the API key, but review output before sharing it because commands, paths and server messages can still reveal private names. `--json` keeps machine-readable results on stdout while diagnostics remain on stderr.

## Fix credential and API-origin problems

Credential precedence is `--key`, then `DOSYA_API_KEY`, then the saved config. A stale environment variable can therefore override a newly stored login. Inspect the environment and rerun `dosya whoami` without unintended overrides.

The normal API base is `https://api.dosya.dev`. `DOSYA_API_BASE` overrides both saved configuration and the default. If it points to the marketing site or another HTML endpoint, a 4xx message includes **the API returned a non-JSON response - check DOSYA_API_BASE** and the configured origin.

Use `dosya auth login` for the hidden interactive prompt, or pipe a key with `dosya auth login --key -`. Passing the literal through `--key <key>` exposes it to shell history and the process list. Keys must begin `dos_`; create them at `https://app.dosya.dev/profile/api`.

| Message / exit | Meaning | Correct action |
| --- | --- | --- |
| **Not authenticated. Run: dosya auth login** / exit 3 | No flag, environment or saved key was available | Authenticate or set `DOSYA_API_KEY` for that process. |
| **Authentication failed. Run 'dosya auth login' to re-authenticate.** / exit 3 | Server returned 401; key is invalid, expired or revoked | Replace the credential and retest `whoami`. |
| Server permission message / exit 5 | Server returned 403; credential is live but scope, protocol, IP/time rule, membership or role refused it | Fix that named restriction. Re-authenticating with the same authority will loop. |
| **Cannot reach … Check your internet connection.** / exit 4 | DNS, connectivity or transport failed | Check network and the API base, then retry a read-only request. |
| **Request timed out after …s.** / exit 4 | Request exceeded its timeout | Confirm service/network state; increase `--timeout <seconds>` only when the operation is expected to need longer. |
| **The dosya CLI is paused for maintenance.** / exit 75 | Administrative platform switch disabled CLI requests | Nothing was uploaded or changed; monitor `https://status.dosya.dev` and rerun later. |

The saved config path is shown by `dosya config path`. On macOS/Linux it normally lives under `~/.dosya/config.json` or `$XDG_CONFIG_HOME/dosya/config.json` with mode 0600. If the CLI warns that the file is readable by other users, apply the displayed `chmod 600` command and rotate a key that may have been exposed.

## Correct workspace context

Run `dosya workspace list` and copy the intended workspace ID. `dosya workspace use <id>` stores a default but does not contact the server to validate the ID, so confirm it with:

```sh
dosya ls --workspace ws_example
```

An explicit `--workspace` is safer during diagnosis than relying on a stale default. **Workspace ID required** exits with code 2 and performs no request. A 403 after selecting a real workspace indicates membership/role or key reach; a 404 can mean the resource/path no longer exists or is not visible.

## Diagnose upload failures

Before retrying, compare the local file name/size and destination with workspace upload rules and available storage. The CLI prechecks allowed/blocked extensions, maximum file size and remaining storage when that endpoint is available; the server remains authoritative.

`dosya upload` defaults to three concurrent files, accepts `--parallel` up to 16, and clamps to the workspace's active concurrent-upload limit. When no slot is available it waits 0.5, 1.5, 3, 5 and 8 seconds before returning the server refusal. Other devices and pending sessions share that capacity.

Small streamed uploads retry transport/5xx failures three times after 1, 3 and 8 seconds, rebuilding the stream each time. Files above the multipart threshold retain a `.dosya-upload` sidecar so rerunning the same source can resume uploaded parts. Keep that sidecar beside the unchanged file until completion; changing source size or API origin makes the saved session unsuitable.

Metadata requests use a 30-second default timeout. Upload/download paths use longer operation-specific defaults, including 10 minutes for a whole-file upload, unless an explicit global `--timeout` replaces them. A 4xx is a policy/input refusal and is not repaired by replaying identical bytes.

The HTTP client automatically retries GET, HEAD and PUT after eligible 5xx/transport failures using 1, 3 and 8-second delays. It does not blindly replay POST, because doing so could create duplicates, or DELETE, because a repeated delete can become permanent deletion. After an ambiguous write error, inspect Dosya before running the command again.

## Expected result

1. Confirm `dosya whoami` reports the intended account.
2. List the target with an explicit workspace ID.
3. Retry one uniquely named harmless file with the smallest practical concurrency.
4. Open Dosya **Files**, check its name, size and folder, then download/compare the sample where integrity matters.

<figure class="help-screenshot"><a href="/screenshots/api-key-listed-2026-10-10.webp"><img src="/screenshots/api-key-listed-2026-10-10.webp" alt="Dosya API-key list used to identify the dedicated CLI credential by name before reviewing, replacing, or revoking it." width="1160" height="750" loading="lazy" decoding="async" /></a><figcaption>Name CLI keys by machine or automation so a failing credential can be rotated without revoking unrelated clients. <a href="/screenshots/api-key-listed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

If the same minimal command fails, send private support the CLI version, operating system, exact command with secrets removed, exit code, approximate time/timezone, workspace ID, file size, and sanitized debug/error output. Never include a complete key, environment dump, config file or confidential file bytes.

## Related guides

- [Install the CLI](/developers/cli-install)
- [Authenticate the CLI](/developers/cli-authenticate)
- [Select a workspace](/developers/cli-workspace)
