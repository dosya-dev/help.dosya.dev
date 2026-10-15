---
{
  "articleId": "hc-cli-separate-profiles",
  "locale": "en",
  "revision": 5,
  "title": "Separate Dosya CLI profiles",
  "summary": "Isolate Dosya CLI credentials with separate XDG config roots or environment keys, then verify each account and target workspace before every job.",
  "category": "developers",
  "articleSlug": "cli-separate-profiles",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/cli/src/config.ts, apps/cli/src/parse-args.ts, apps/cli/src/commands/config-cmd.ts, and apps/cli/src/commands/whoami.ts. Production profiles were not changed.",
  "related": [
    "hc-cli-auth",
    "hc-cli-json-output"
  ],
  "keywords": [
    "cli separate profiles",
    "Dosya CLI automation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
The CLI has no named-profile store and no `--profile` flag. Isolate identities with different `XDG_CONFIG_HOME` directories, or inject different `DOSYA_API_KEY` values for each process.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-separate-profiles-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cli-separate-profiles-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cli-separate-profiles-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-separate-profiles-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-separate-profiles-help-workflow-2026-10-14.webp" alt="Four workflow panels show creating private XDG roots, logging in without an unsupported profile flag, checking whoami, and pinning the workspace." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers creating private XDG roots, logging in without an unsupported profile flag, checking whoami, and pinning the workspace. <a class="workflow-map-full" href="/screenshots/cli-separate-profiles-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cli-separate-profiles-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cli-separate-profiles-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- The normal XDG file is `$XDG_CONFIG_HOME/dosya/config.json`; without XDG configuration, the fallback is `~/.dosya/config.json`.
- Key precedence is command-line `--key`, then `DOSYA_API_KEY`, then config. Base URL environment configuration precedes the saved value and built-in default.
- The CLI creates its config directory with mode 0700 and file with 0600; loose existing modes produce a warning.

## Steps

1. Create one private config root per identity, for example `~/.config/dosya-work` and `~/.config/dosya-personal`, and restrict each parent to the account owner.
2. Set `XDG_CONFIG_HOME` for the desired identity, then save its key through stdin rather than a literal argument. Never invent `--profile`; argument parsing does not support it.
3. Run `XDG_CONFIG_HOME=… dosya whoami --json` and assert the expected account identifier before any mutation.
4. Pass the intended workspace explicitly to commands that accept it, or verify the current workspace returned by the relevant read command. Config isolation does not choose a workspace for you.
5. For ephemeral jobs, prefer `DOSYA_API_KEY` from the scheduler’s secret store and an isolated empty XDG root. Remember that `--key` overrides both.
6. Log the nonsecret profile label, config root, verified account ID, and workspace ID. Refuse to run if any value differs from the job definition.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview with installation and command references for separate dosya cli profiles." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The CLI overview supplies the installation and command references used by “Separate Dosya CLI profiles”. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Each process resolves one intended key from a private config root or environment, verifies its account, and acts only in the explicitly checked workspace. No unsupported profile flag is required.

## Troubleshooting

**The wrong account appears.** Check for a higher-precedence `--key` or `DOSYA_API_KEY` before editing the config file.

**The CLI warns about permissions.** Restore 0700 on the directory and 0600 on `config.json`, then verify ownership.

**Two jobs still interfere.** Give them different `XDG_CONFIG_HOME` values and avoid exporting one shared key in the parent shell.

## Related guides

- [Authenticate the Dosya CLI](/developers/cli-authenticate)
- [Use CLI JSON output](/developers/cli-json-output)
