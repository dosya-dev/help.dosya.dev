---
{
  "articleId": "hc-cli-auth",
  "locale": "en",
  "revision": 6,
  "title": "Authenticate the Dosya CLI safely",
  "summary": "Sign in interactively, through stdin, or with DOSYA_API_KEY; verify the account, understand credential precedence, and revoke stored access safely.",
  "category": "developers",
  "articleSlug": "cli-authenticate",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14. Verified login forms, key validation, credential precedence, config storage, file permissions, account output, logout and server-side revocation in apps/cli/src/commands/auth.ts; apps/cli/src/commands/whoami.ts; apps/cli/src/config.ts; apps/cli/src/output.ts; apps/cli/tests/integration/auth.test.ts; apps/cli/tests/integration/whoami.test.ts; and apps/cli/README.md. Local repository evidence only; no production request was made.",
  "related": [
    "hc-cli-install",
    "hc-cli-workspace",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "Dosya CLI login",
    "DOSYA_API_KEY",
    "CLI authentication",
    "dosya auth login",
    "revoke CLI API key"
  ]
}
---
The Dosya CLI authenticates with a `dos_` API key. Use the hidden interactive prompt on a personal terminal, pipe the key through standard input for a setup script, or provide `DOSYA_API_KEY` to an automation environment. Avoid putting a reusable secret directly after `--key`, where shell history and the process list can expose it.

## Create a key for this CLI installation

Open [Profile → API keys](https://app.dosya.dev/profile/api), select **New API key**, and label it for this machine or automation job. Choose the smallest permission that supports the intended commands:

- **Read only** can list and download but cannot upload, move, or delete.
- **Upload only** can add files but cannot list or download stored files.
- **Full access** supports commands that read and modify content, subject to workspace role permissions.

Under **Protocols**, include **REST API** because the CLI calls REST endpoints. Add a workspace pin, IP ranges, active hours, usage limits, or expiry when those restrictions fit the job. Save the one-time full token; the key table shows only a prefix afterward.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-authenticate-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-authenticate-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-authenticate-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-authenticate-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-authenticate-workflow-map-2026-10-14.webp" alt="Dosya CLI authentication choices for a hidden prompt, standard input, or an environment secret followed by an identity check." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Choose the credential source for the environment, verify it with `dosya whoami`, and keep revocation available through the named API-key record. <a class="workflow-map-full" href="/screenshots/cli-authenticate-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-authenticate-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-authenticate-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

Run the interactive command and paste the key when the hidden prompt appears:

```bash
dosya auth login
dosya whoami
```

Successful login prints `Authenticated as NAME (EMAIL)`. `dosya whoami` then prints the account name, email, user ID, and workspace count; `dosya whoami --json` emits the account object for a script.

The CLI stores the token and API base in `~/.dosya/config.json`, or `$XDG_CONFIG_HOME/dosya/config.json` when `XDG_CONFIG_HOME` is set. The directory is created with mode `0700` and the file with `0600` on Unix-like systems. The key is plain text inside that protected file. If restored permissions allow group or other users to read it, the CLI warns with a corrective `chmod 600` command.

## Authenticate a setup script without argv exposure

Pipe the key through stdin:

```bash
printf '%s\n' "$MY_KEY" | dosya auth login --key -
dosya whoami --json
```

An empty pipe fails with `No API key on stdin.` A non-interactive run without `--key -` or `DOSYA_API_KEY` fails with `Cannot prompt for API key in non-interactive mode.` A value that does not begin with `dos_` is rejected before the network request.

For CI or a short-lived container, inject the key as an environment secret and skip writing it to disk:

```bash
export DOSYA_API_KEY="$MY_KEY"
dosya whoami --json
```

Credential precedence is `--key`, then `DOSYA_API_KEY`, then the stored config. API endpoint precedence is `DOSYA_API_BASE`, then the config file, then `https://api.dosya.dev`. Know which source wins before diagnosing a surprising account or environment.

<figure class="help-screenshot"><a href="/screenshots/api-key-listed-2026-10-10.webp"><img src="/screenshots/api-key-listed-2026-10-10.webp" alt="Dosya Profile API-key list with separate named credentials that can be recognized and revoked per CLI installation." width="1160" height="750" loading="lazy" decoding="async" /></a><figcaption>Name each CLI credential for its machine or job so the correct key can be revoked without changing unrelated integrations. <a href="/screenshots/api-key-listed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Fix common authentication failures

| CLI output | What to do |
| --- | --- |
| `Authentication failed: invalid API key.` | Copy the complete one-time token or create a replacement if the original value is no longer available. |
| `Not authenticated. Run: dosya auth login` | Supply `DOSYA_API_KEY` or complete a stored login. |
| `Authentication failed. Run 'dosya auth login' to re-authenticate.` | The server returned 401; check expiry or revocation and replace the credential. |
| `Permission denied. You don't have access to this resource (403).` | The key remains live, but its scope, protocol, source conditions, workspace pin, or current role refused the operation. |
| A key works locally but fails in CI | Compare the injected key, `DOSYA_API_BASE`, source IP allowlist, active-hours timezone, and selected workspace membership. |

Exit code **3** means authentication failure, **5** means a live credential was forbidden, **4** means a network failure, and **2** means invalid CLI usage. Automation should not respond to exit 5 by repeatedly logging in again.

## Log out or revoke the key

`dosya auth logout` removes the local config file only. The API key continues working elsewhere until it expires or is revoked:

```bash
dosya auth logout
```

To destroy the stored key on the server and then clear the local file, run:

```bash
dosya auth logout --revoke
```

Server-side revocation is irreversible and immediately breaks every process using that key. If revocation fails, the CLI keeps the local credential so the command can be retried. A 401 means the stored key is already invalid, so the CLI safely clears it. An environment-only `DOSYA_API_KEY` is not managed by logout; revoke that credential from **Profile → API keys**.

## Expected result

`dosya whoami` identifies the intended account without printing the key. The credential source and endpoint are known, the stored file is owner-readable only when used, and the key can be independently revoked when this CLI installation is retired.

## Related guides

- [Install the Dosya CLI](/developers/cli-install)
- [Select the default CLI workspace](/developers/cli-workspace)
- [Choose API-key permission](/developers/api-key-scopes)
