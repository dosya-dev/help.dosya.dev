---
{
  "articleId": "hc-cli-install",
  "locale": "en",
  "revision": 7,
  "title": "Install the Dosya CLI",
  "summary": "Install Dosya CLI on macOS, Linux or Windows, verify the executable, authenticate securely, and understand upgrades and removal.",
  "category": "developers",
  "articleSlug": "cli-install",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14: src/pages/developer/cli.astro; apps/cli/package.json; .github/workflows/cli-release.yml; apps/api/src/pages/api/cli/install.ts; apps/api/src/pages/api/cli/latest.ts; apps/api/src/pages/api/cli/latest.unit.test.ts; apps/api/src/middleware.ts; apps/cli/src/index.ts; apps/cli/src/config.ts; apps/cli/src/commands/auth.ts; apps/cli/src/commands/workspace.ts; apps/cli/src/commands/upgrade.ts; apps/cli/src/commands/upgrade-policy.ts; apps/cli/src/commands/uninstall.ts; apps/cli/tests/unit/upgrade-host-guard.test.ts; apps/cli/tests/unit/upgrade-manifest-guard.test.ts; apps/web/src/components/api-keys/create-key-dialog.tsx. Removed unrelated Zapier image. Regenerated existing CLI-install light/dark illustration because its former first step named a nonexistent Integrations CLI control; no production installation or authentication performed. Local repository review; commands checked without production credentials.",
  "related": [
    "hc-rest-api-connect",
    "hc-api-key"
  ],
  "keywords": [
    "install CLI",
    "command line",
    "CLI version",
    "cloud storage"
  ]
}
---
Install the Dosya CLI from the official download service, then run `dosya --version` and `dosya --help` before connecting your account. The release is a standalone executable; an installed binary does not require Node.js, npm or Bun.

## Supported platforms and prerequisites

| Computer | Release selector | Installation |
| --- | --- | --- |
| Linux x86-64 | `linux` | Shell installer or downloaded binary |
| macOS Apple Silicon | `mac-arm64` | Shell installer or downloaded binary |
| macOS Intel | `mac-x64` | Shell installer or downloaded binary |
| Windows x64 | `windows` | Download `dosya.exe` with PowerShell |

The installer and updater reject other OS/architecture combinations; Linux ARM64 and Windows ARM64 builds are not provided by this release configuration. You need an HTTPS connection and permission to write the installation directory. Installing or reading help does not require a Dosya account; file operations require an API key and the relevant workspace permissions.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-install-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-install-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-install-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-install-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-install-workflow-map-2026-10-14.webp" alt="Install workflow: choose the official download for your platform, put the executable on PATH, run dosya --version, then authenticate with the hidden key prompt." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Install workflow: choose the official download for your platform, put the executable on PATH, run dosya --version, then authenticate with the hidden key prompt. <a class="workflow-map-full" href="/screenshots/cli-install-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-install-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-install-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

This illustration summarizes the install sequence. The commands below come from the current installer and CLI reference; it is not a terminal recording of a completed installation.

## Steps: install on macOS or Linux

Run this in your ordinary terminal:

```sh
curl -fsSL https://api.dosya.dev/api/cli/install | sh
```

The script detects the platform, downloads the matching binary into `/tmp/dosya`, makes it executable and moves it to `/usr/local/bin/dosya`. If `/usr/local/bin` is not writable, it asks `sudo` to perform that move. On macOS it also attempts to remove the downloaded binary's quarantine attribute. The final installer output includes **dosya CLI installed successfully!** and runs the version command.

If you prefer to inspect the script before executing it, download it to a file first:

```sh
curl -fsSL https://api.dosya.dev/api/cli/install -o dosya-install.sh
less dosya-install.sh
sh dosya-install.sh
```

Review it before the last command. Installation replaces any executable already stored at `/usr/local/bin/dosya`; retain a trusted older binary separately if you need a local rollback. The installer does not keep a backup or provide a version-selection flag.

For a manual download, use `https://api.dosya.dev/api/cli/latest?platform=linux`, replacing `linux` with the selector in the table. Rename the downloaded file to `dosya`, make it executable on Unix, and place it in a directory already on your PATH. The public [CLI page](https://dosya.dev/developer/cli) is the installation reference, rather than an in-app **Integrations → CLI** control.

## Install on Windows

In PowerShell, download the x64 executable and move it into the documented user PATH folder:

```powershell
curl.exe -fsSL -o dosya.exe "https://api.dosya.dev/api/cli/latest?platform=windows"
Move-Item dosya.exe "$env:LOCALAPPDATA\Microsoft\WindowsApps\"
dosya --version
dosya --help
```

Use `curl.exe`, which calls the executable instead of PowerShell's `curl` alias. This user directory avoids an administrator installation. Check that it is on your PATH if `dosya` is not found. If `Move-Item` reports an existing destination, identify the current binary and retain a copy before deliberately replacing it; do not silently overwrite an unknown executable.

## Confirm which executable runs

```sh
dosya --version
dosya --help
dosya upload --help
```

The version output begins with `dosya` followed by the installed release number. Help lists commands and flags without logging in. On macOS/Linux, `command -v dosya` shows the executable selected by your shell; on PowerShell, use `Get-Command dosya`. An older binary earlier on PATH can take precedence even after a successful install.

For **command not found**, open a new terminal after a PATH change and check the installation directory. `/usr/local/bin/dosya --version` on Unix or `& "$env:LOCALAPPDATA\Microsoft\WindowsApps\dosya.exe" --version` on Windows tests the documented location directly. If it works there, fix PATH rather than reinstalling repeatedly.

## Connect your account and workspace

1. Open [Profile → API keys](https://app.dosya.dev/profile/api), select **New API key**, give it a CLI-specific name, and choose permissions for your intended tasks. For browsing and uploading, use **Full access**; that scope also permits destructive operations wherever your role allows them.
2. Under **Restrictions and expiry**, allow **REST API** if you select individual protocols. Leave **Folder** unset: an ordinary folder-anchored key cannot use the CLI’s REST requests and is refused with **This API key is anchored at a folder and can only be used over WebDAV or the S3 gateway**. Review workspace, expiry and usage restrictions, then select **Generate key**. Store the full `dos_` key while it is displayed; a row prefix cannot authenticate.
3. Run `dosya auth login` and paste the key at **Enter API key:**. The interactive prompt hides the key. Successful authentication prints **Authenticated as** with your account name and email.
4. Run `dosya workspace list`, then `dosya workspace use ws_example` using an actual returned workspace ID. This sets the default for later commands; explicit `--workspace` overrides it.

The CLI stores one local configuration, not named login profiles. By default it is `~/.dosya/config.json`; setting `XDG_CONFIG_HOME` places it in that directory's `dosya` subdirectory. Login preserves an existing default workspace. The file contains your key and is written with owner-only permissions on Unix. For automation, use a privately supplied `DOSYA_API_KEY` environment variable, or pipe a secret into `dosya auth login --key -`; avoid a literal key in command arguments or shell history. `DOSYA_API_BASE` overrides the saved API address, whose normal value is `https://api.dosya.dev`.

## Upgrade, rollback and uninstall

Run `dosya upgrade` from an installed binary. It checks the latest manifest, verifies the published SHA-256, then replaces the executable at its current location. **Already on latest version** means no replacement was needed. An upgrade refuses a missing or malformed checksum and reports **Checksum mismatch - refusing to install** if the bytes differ. It can require write permission for that location. A manifest request times out after **30 seconds**; the binary download has a **5 minute** timeout.

A configured untrusted API host is refused unless you explicitly allow it; restore the official API setting before a normal update. `--force` permits reinstallation or a downgrade reported by the configured server, but it does not select a historical version. Keep a separately saved trusted binary for rollback; replacing the executable does not migrate or remove the local configuration. Latest downloads can remain cached for up to **1 hour** after release, so confirm the actual version after an update.

`dosya uninstall` asks for confirmation and removes the installed executable plus the entire CLI configuration directory, including the saved login and default workspace. There is no undo command. It does not delete your cloud files or revoke the API key server-side; revoke the key in Profile if the computer should lose access. Running uninstall from a source checkout removes configuration only, and `dosya upgrade` refuses source execution.

**Unsupported platform** means the detected system has no matching release. **No CLI build found for** a selector means that release file is unavailable; retry the official download later. **Authentication failed: invalid API key.** requires checking the full key, expiry and revocation, rather than downloading the CLI again.

## Expected result

The official executable is selected by your shell, reports its version and help, and authenticates as the intended account. Installing alone creates no workspace files; the saved default workspace applies only after you select it.

## Related guides

- [Upload a directory with the CLI](/developers/cli-upload-directory)
- [API key management](/developers/api-key)
