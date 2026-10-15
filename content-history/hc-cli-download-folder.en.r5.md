---
{
  "articleId": "hc-cli-download-folder",
  "locale": "en",
  "revision": 5,
  "title": "Download a folder with the Dosya CLI",
  "summary": "Resolve a remote folder, download its tree into an empty local directory, review partial failures, and compare the resulting names and sizes safely.",
  "category": "developers",
  "articleSlug": "cli-download-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14. Verified recursive command syntax, folder resolution, snapshots, relative-path containment, 500-file manifest chunks, temporary files, output and failure behavior in apps/cli/src/commands/download.ts; apps/cli/src/resolver.ts; apps/cli/src/sync/remote.ts; apps/cli/src/sync/safe-path.ts; apps/api/src/pages/api/sync/download-manifest.ts; apps/cli/tests/unit/sync-safe-path.test.ts; apps/cli/tests/unit/sync-safe-path-symlink.test.ts; and apps/cli/README.md. Local repository evidence only; no production request was made.",
  "related": [
    "hc-cli-transfer",
    "hc-cli-workspace",
    "hc-download-folder-archive"
  ],
  "keywords": [
    "Dosya CLI download folder",
    "recursive folder download",
    "download cloud folder",
    "dosya download recursive",
    "folder backup CLI"
  ]
}
---
Use `dosya download --recursive` to copy every visible file under one Dosya folder into a local directory while preserving its relative tree. Start with an empty destination: recursive mode writes each returned path without asking for per-file overwrite confirmation.

## Prepare the source and destination

The credential needs read access to the workspace, and the workspace role must permit file access and downloads. Folder confinement, hidden content, and locks can narrow what the snapshot returns.

List the parent first and copy the folder ID or confirm its exact path:

```bash
DOSYA_WORKSPACE_ID='ws_REPLACE_ME'
dosya ls --workspace "$DOSYA_WORKSPACE_ID"
```

Create a new local destination and ensure it is empty:

```bash
DEST='./dosya-folder-check'
mkdir -p "$DEST"
find "$DEST" -mindepth 1 -print -quit
```

If the last command prints anything, choose another directory. The recursive downloader does not apply the single-file command's interactive overwrite prompt, `--force` check, segmented resume sidecar, or ETag integrity verifier.

<figure class="help-screenshot"><a href="/screenshots/cli-download-folder-help-workflow-2026-10-14.webp"><img src="/screenshots/cli-download-folder-help-workflow-2026-10-14.webp" alt="Dosya CLI recursive folder download from a verified remote path into an empty destination followed by tree and size comparison." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Resolve the remote folder first, keep the local target empty, and compare its completed tree with the source after the command exits. <a href="/screenshots/cli-download-folder-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

Use a workspace-relative path:

```bash
dosya download --recursive reports/2026 \
  --workspace "$DOSYA_WORKSPACE_ID" \
  --output "$DEST"
```

You can instead use a folder ID or embed the workspace in the reference:

```bash
dosya download -r fld_REPLACE_ME -w "$DOSYA_WORKSPACE_ID" -o "$DEST"
dosya download -r "${DOSYA_WORKSPACE_ID}:reports/2026" -o "$DEST"
```

The `ws_ID:path` form overrides `--workspace`; `--workspace` overrides the saved default. A path that cannot be resolved reports `No such folder: …` or `No such file or folder: …`. Supplying a file to recursive mode fails because the resolver explicitly expects a folder.

The command takes one remote snapshot, builds paths below the chosen folder, and requests temporary download URLs in groups of at most **500 file IDs**. Each object is first written to a `.dosya-partial` path and renamed only after that response completes. Server-provided paths that escape the destination, including traversal or unsafe symlink paths, are refused.

An empty remote folder prints `No files to download.` and exits successfully. Folders themselves are represented by downloaded file paths, so an empty nested subfolder may not produce a local directory.

## Read the completion result

Interactive output ends with `Downloaded N file(s) to DEST/`. If one file fails, the command prints a line such as `Failed: relative/path: HTTP STATUS`, continues with remaining files, summarizes completed downloads, and exits nonzero.

For automation, request structured output:

```bash
dosya download --recursive reports/2026 \
  --workspace "$DOSYA_WORKSPACE_ID" \
  --output "$DEST" \
  --json > recursive-download-result.json
python3 -m json.tool recursive-download-result.json
```

The JSON has `ok`, `downloaded`, and `failures`. Treat `ok: false` or any failure item as an incomplete local copy. Because completed files remain in the destination, decide whether to retry into a new empty directory or deliberately reconcile the partial tree. Do not assume a second run is an atomic replacement.

## Compare remote and local content

Record the local tree and sizes without modifying it:

```bash
find "$DEST" -type f -print0 \
  | sort -z \
  | xargs -0 -n1 sh -c 'wc -c < "$1" | tr -d "\n"; printf "  %s\n" "$1"' sh
```

Compare the count, relative names, and byte sizes with the Dosya folder. For high-assurance backup verification, download critical files individually with `dosya download FILE -o NEW_PATH`, which performs the CLI's supported ETag content check, or compute and compare an application-level checksum you already trust. Recursive mode confirms HTTP completion and the reported failures; it does not hash every saved file.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview with the recursive folder download command documented for terminal users." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use the current CLI build and `dosya download --help` when a locally installed version lacks the recursive flags shown here. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Recover from common failures

**`Folder required.`** Place the remote folder after `--recursive`, for example `dosya download -r reports -o ./backup`.

**`No workspace for "…".`** Add `ws_ID:` to the path, pass `--workspace`, or set a default workspace.

**Some paths are missing but no HTTP error appears.** Check whether the key or member is folder-confined, whether content is hidden, and whether the current role has download access.

**A local file already existed.** Recursive mode is designed for a prepared destination and does not ask before each path. Restore the prior local copy from its backup if it was replaced, then repeat into an empty directory.

**A run stopped midway.** Review the failure array or stderr, preserve it for diagnosis, and use a new destination for a clean verification run. The single-file `.dosya-download` resume behavior does not apply to folder recursion.

## Expected result

The command exits successfully with zero failures, and the destination contains the same visible file paths and byte sizes as the selected remote subtree. The pre-existing local directory remained empty until this controlled download began.

## Related guides

- [Upload and download individual files](/developers/cli-transfer)
- [Verify the CLI workspace](/developers/cli-workspace)
- [Download a folder from the web app](/uploading/download-folder-archive)
