---
{
  "articleId": "hc-cli-transfer",
  "locale": "en",
  "revision": 6,
  "title": "Upload and download files with the Dosya CLI",
  "summary": "Transfer a test file with explicit workspace and paths, understand resume, concurrency and overwrite behavior, then verify the downloaded bytes safely.",
  "category": "developers",
  "articleSlug": "cli-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14. Verified command flags, path resolution, upload screening, retry and multipart thresholds, sidecar resume, download segmentation, URL refresh, overwrite prompts, ETag verification, JSON output and exit behavior in apps/cli/src/commands/upload.ts; apps/cli/src/batch-upload.ts; apps/cli/src/multipart.ts; apps/cli/src/commands/download.ts; apps/cli/src/resolver.ts; apps/cli/tests/integration/upload.test.ts; apps/cli/tests/integration/download.test.ts; apps/cli/tests/unit/multipart.test.ts; and apps/cli/README.md. Local repository evidence only; no production request was made.",
  "related": [
    "hc-cli-workspace",
    "hc-cli-download-folder",
    "hc-upload-files"
  ],
  "keywords": [
    "Dosya CLI upload",
    "Dosya CLI download",
    "resumable file upload",
    "command line file transfer",
    "file upload"
  ]
}
---
Start with one non-confidential file, an explicit workspace, and separate local source and download paths. A successful upload creates stored content in Dosya; a download with `--force` can replace a local file. Verify the round trip before putting either command into automation.

## Steps

Choose a workspace and, optionally, a destination folder ID:

```bash
DOSYA_WORKSPACE_ID='ws_REPLACE_ME'
DOSYA_FOLDER_ID='fld_REPLACE_ME'

printf 'Dosya CLI transfer check\n' > cli-transfer-check.txt
dosya upload ./cli-transfer-check.txt \
  --workspace "$DOSYA_WORKSPACE_ID" \
  --folder "$DOSYA_FOLDER_ID"
```

Omit `--folder` to upload to the workspace root. If neither `--workspace` nor a saved default is available, the command stops with `Workspace ID required. Use -w <id> or set default: dosya workspace use <id>`. A missing local path produces `File not found: …`; a directory without `--recursive` is refused instead of being flattened unexpectedly.

The CLI reads current workspace upload rules before transferring when that endpoint is available. Blocked extensions and files over the configured maximum are rejected locally with the server's rule. A total larger than remaining storage produces a warning, while the server remains the final quota authority. The role and key must both permit uploads.

Files above **50 MB** use multipart upload. Individual parts are retried, and a `<filename>.dosya-upload` sidecar records the resumable session. Re-run the same command after interruption; the sidecar is used only when the file size and modification time still match, and it is removed after success. Smaller files use one streamed request with retry delays of 1, 3, and 8 seconds for retryable failures.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-transfer-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-transfer-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-transfer-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-transfer-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-transfer-workflow-map-2026-10-14.webp" alt="Dosya CLI file round trip with an explicit workspace, upload result, separate download path, and size or integrity comparison." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Keep the original file, upload once, download to a new name, and compare the result before scaling the command. <a class="workflow-map-full" href="/screenshots/cli-transfer-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-transfer-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-transfer-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Capture the uploaded file ID

For scripts, use JSON rather than parsing progress text:

```bash
dosya upload ./cli-transfer-check.txt \
  --workspace "$DOSYA_WORKSPACE_ID" \
  --folder "$DOSYA_FOLDER_ID" \
  --json > upload-result.json

DOSYA_FILE_ID=$(python3 -c 'import json; print(json.load(open("upload-result.json"))["file"]["id"])')
printf '%s\n' "$DOSYA_FILE_ID"
```

The single-file response contains `file.id` and `file.name`. Preserve `upload-result.json` only if its metadata is needed; it does not contain the API key. To upload a deliberate replacement as a new version, use `--version-of` with an existing file ID or path:

```bash
dosya upload ./report-v2.pdf --workspace "$DOSYA_WORKSPACE_ID" --version-of reports/report.pdf
```

Version upload changes the stored file's current version; keep the local source until the new version appears in Dosya. Do not use `--version-of` when creating a separate file.

## Download to a new local path

Address the file by returned ID or by a workspace-relative path:

```bash
mkdir -p ./dosya-transfer-check
dosya download "$DOSYA_FILE_ID" --output ./dosya-transfer-check/received.txt
cmp ./cli-transfer-check.txt ./dosya-transfer-check/received.txt
```

When `--output` names a directory, the server's filename is used inside it. With no output flag, the current directory is used. An existing destination prompts before overwrite on an interactive terminal; JSON or non-interactive execution stops with `already exists. Use --force to overwrite.` `--force` replaces that local path without another confirmation.

Downloads use one connection for small files and up to **8 parallel connections by default** for larger objects; `--connections` accepts 1–16. Interrupted segmented downloads persist `<output>.dosya-download`; rerun the same command with the same file and path to continue completed ranges. Expired temporary URLs are refreshed up to three times.

After transfer, the CLI checks the saved content against a recognized origin ETag: a normal MD5 or Dosya's multipart composite form. Unknown ETag formats are skipped rather than guessed. `--no-verify` disables this integrity check and should be reserved for a diagnosed compatibility problem. Size alone does not detect every corruption.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya Zapier setup page, separate from the terminal commands and API key used by the Dosya CLI." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>The CLI uses its own REST-enabled API key; the Zapier invitation and setup controls do not configure terminal transfers. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Transfer folders and multiple files

Upload a directory with `--recursive`; by default Dosya creates a top-level folder named after the local directory. Add `--contents` to place only its contents into the selected destination:

```bash
dosya upload ./project --recursive --workspace "$DOSYA_WORKSPACE_ID" --parallel 3
dosya upload ./project --recursive --contents --workspace "$DOSYA_WORKSPACE_ID"
```

Upload concurrency defaults to 3 and is capped at 16, then reduced further when the workspace has a smaller concurrent-upload limit. For a remote folder download, use the dedicated recursive workflow. For several specific files in one archive, use `dosya download --zip FILE... -o bundle.zip`.

## Expected result

The upload reports a concrete file ID in the intended workspace and folder. Downloading that ID to a new local path completes without overwrite ambiguity, and `cmp` or the CLI integrity check confirms the received bytes match the source.

## Related guides

- [Select the correct CLI workspace](/developers/cli-workspace)
- [Download an entire folder tree](/developers/cli-download-folder)
- [Upload files in the web app](/uploading/files-and-folders)
