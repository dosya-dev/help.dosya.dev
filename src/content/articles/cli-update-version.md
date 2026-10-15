---
{
  "articleId": "hc-cli-update-version",
  "locale": "en",
  "revision": 5,
  "title": "Update the Dosya CLI",
  "summary": "Check the installed Dosya CLI version, verify the trusted release checksum, and replace only a supported compiled binary with an approved build.",
  "category": "developers",
  "articleSlug": "cli-update-version",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/cli/src/commands/upgrade.ts, apps/cli/src/commands/upgrade-policy.ts, apps/cli/src/runtime.ts, and apps/cli/package.json. Production binaries were not replaced.",
  "related": [
    "hc-cli-install",
    "hc-cli-transfer"
  ],
  "keywords": [
    "cli update version",
    "Advanced Dosya CLI workflows",
    "Dosya help",
    "cloud storage API"
  ]
}
---
`dosya upgrade` is for an installed compiled binary, not a source checkout. Supported release targets are Linux x64, macOS arm64 or x64, and Windows x64.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-update-version-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cli-update-version-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cli-update-version-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-update-version-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-update-version-help-workflow-2026-10-14.webp" alt="Four workflow panels show recording version and path, running upgrade deliberately, verifying the release SHA-256, and retesting from a fresh process." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers recording version and path, running upgrade deliberately, verifying the release SHA-256, and retesting from a fresh process. <a class="workflow-map-full" href="/screenshots/cli-update-version-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cli-update-version-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cli-update-version-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Run `dosya --version` and record the current binary path before changing it.
- Use the official trusted API origin. A custom release host requires the explicit custom-host allowance and should be approved by your organization.
- The release manifest request times out after 30 seconds; the binary download allows 300 seconds.

## Steps

1. Run `dosya --version` and confirm the active executable with the operating system’s path lookup. Stop if the job is invoking a development checkout.
2. Invoke `dosya upgrade` from an interactive maintenance window. Use `--force` only to reinstall the same version or make an intentionally approved downgrade.
3. Let the updater select the platform artifact. Reject an unsupported architecture instead of substituting a similarly named binary.
4. Require the downloaded SHA-256 to match the release manifest. A checksum failure must leave the installed binary untrusted and unchanged.
5. Allow the updater to stage an executable temporary file with mode 0755 and replace the target through rename or its copy fallback.
6. Run `dosya --version` again from a fresh shell, then perform a read-only `whoami --json` check before re-enabling scheduled jobs.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview with installation and command references for update the dosya cli." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The CLI overview supplies the installation and command references used by “Update the Dosya CLI”. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The supported compiled binary is replaced only after manifest and SHA-256 verification. A fresh invocation reports the approved version and can authenticate for a read-only check.

## Troubleshooting

**Upgrade says the runtime is unsupported.** Install a published compiled binary for the supported operating system and architecture.

**The checksum differs.** Delete the staged artifact and retry from the trusted origin; never bypass verification.

**The old version still runs.** Inspect command lookup order and long-lived processes. A successful file replacement does not change an already running process.

## Related guides

- [Install the CLI](/developers/cli-install)
- [Transfer with the CLI](/developers/cli-transfer)
