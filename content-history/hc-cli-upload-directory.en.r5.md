---
{
  "articleId": "hc-cli-upload-directory",
  "locale": "en",
  "revision": 5,
  "title": "Upload a directory with the Dosya CLI",
  "summary": "Upload a folder from the command line with workspace and folder flags, recursive paths, progress, partial-failure reporting and resumable transfers.",
  "category": "developers",
  "articleSlug": "cli-upload-directory",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14: apps/cli/src/index.ts; apps/cli/src/config.ts; apps/cli/src/commands/auth.ts; apps/cli/src/commands/workspace.ts; apps/cli/src/commands/ls.ts; apps/cli/src/commands/upload.ts; apps/cli/src/batch-upload.ts; apps/cli/src/multipart.ts; apps/cli/src/output.ts; apps/cli/tests/unit/upload-folder-paths.test.ts; apps/cli/tests/unit/upload-parallel.test.ts; apps/cli/tests/unit/batch-upload.test.ts; apps/cli/tests/unit/multipart.test.ts; apps/api/src/pages/api/upload/init.ts; apps/api/src/lib/upload/body-pipeline.ts; apps/api/src/lib/upload/finalize-session.ts; apps/api/src/pages/api/upload/batch.ts; apps/api/src/lib/upload/init-gates.ts; apps/api/src/lib/access/rest-scope.ts; apps/api/src/lib/versioned-write.ts. Examples parser/help checked locally without network; retained workflow illustration, removed marketing overview figure as it does not show the transfer. Local repository review; commands checked without production credentials.",
  "related": [
    "hc-cli-install",
    "hc-cli-transfer"
  ],
  "keywords": [
    "CLI directory upload",
    "upload folder from command line",
    "recursive upload",
    "multipart upload",
    "upload resume",
    "workspace ID",
    "cloud storage"
  ]
}
---
Use `dosya upload ./sample-source --recursive --workspace ws_example` to upload a folder from the command line. Replace the workspace placeholder with your actual ID. By default Dosya creates or reuses a destination folder named `sample-source` and preserves the file paths beneath it; `--contents` instead places those contents directly into the chosen target.

<figure class="help-screenshot"><a href="/screenshots/cli-upload-directory-help-workflow-2026-10-14.webp"><img src="/screenshots/cli-upload-directory-help-workflow-2026-10-14.webp" alt="Workflow for “Upload a directory with the Dosya CLI”: run the recursive upload command and keep its transfer summary; the destination contains the expected directory structure." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Upload a directory with the Dosya CLI”: run the recursive upload command and keep its transfer summary; the destination contains the expected directory structure. <a href="/screenshots/cli-upload-directory-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

The workflow image is an illustration. The flags and limits below were checked against the current command parser and transfer implementation.

## Authenticate and choose the destination

Have the CLI installed and confirm `dosya upload --help`. In [Profile → API keys](https://app.dosya.dev/profile/api), select **New API key**, choose **Full access** for the browse-and-upload workflow, allow **REST API** under protocol restrictions, and pin the intended workspace if needed. Save the full key after **Generate key**.

```sh
dosya auth login
dosya workspace list
dosya workspace use ws_example
```

Enter the credential at the hidden **Enter API key:** prompt. Use the ID returned by the workspace list in place of `ws_example`; the last command saves that default. You can omit it and supply `--workspace` on every upload instead. An environment-supplied `DOSYA_API_KEY` takes precedence over the saved key. The CLI has one saved configuration, rather than named account profiles, so check the authenticated account and workspace before transferring private files.

Your membership must permit uploading and creating any required folders. An upload-only key cannot perform the browsing/verification sequence; a read-only key cannot upload. Workspace rules, key limits, storage allowance and any folder restriction still apply to a full-access key. To select an existing folder, get its ID from `dosya ls --workspace ws_example`, then pass `--folder fld_example`. The folder must belong to the selected workspace and be within your allowed reach.

## Review the local tree before uploading

- Nested directories are traversed recursively. Hidden regular files, including `.env` and dotfiles, are included; there is no ignore-file or exclusion flag on this command. Make a curated source directory if it contains secrets or files you do not intend to upload.
- Nested symlinks, sockets and device entries are skipped, with a **Skipping … non-regular file(s)** message in normal output. The supplied top-level path is resolved with a normal filesystem stat, so do not use a symlink as the source path if you intend to avoid its target.
- Only directories needed by accepted files are created. Empty subdirectories are not copied, and a tree with no regular files fails with **Directory is empty.**
- Matching live filenames in the same destination folder are adopted as new versions, rather than a second unrelated file. This is an upload operation, not an incremental synchronization comparison: rerunning can create versions even for unchanged files. Remote-only files are not removed.

Keep the source files unchanged until transfer and verification finish. Choose a new test folder first if the destination already contains working copies.

## Steps: run the directory upload

```sh
dosya upload ./sample-source --recursive --workspace ws_example --parallel 3
```

To nest it beneath an existing remote folder:

```sh
dosya upload ./sample-source --recursive --workspace ws_example --folder fld_example
```

To skip the extra `sample-source` level:

```sh
dosya upload ./sample-source --recursive --contents --workspace ws_example --folder fld_example
```

Quote local paths with spaces. `--recursive` has short form `-r`; `--workspace` is `-w`. File concurrency defaults to **3** and is capped at **16**; `--parallel` or `-c` sets it, and the CLI reduces directory-upload concurrency to a lower workspace session limit. For a single multipart file, this flag controls parallel parts instead.

Small regular files of at most **5 MiB** are packed into requests with at most **200 files** and **48 MiB** of file data. Up to **4** such batches run concurrently, bounded further by your selected concurrency. If a batch cannot be used, the client falls back to individual uploads. Files larger than **50 MiB** use resumable uploads with **10 MiB** parts; the last part can be smaller. These are transfer thresholds, not an entitlement to upload a file of any size: extension rules, maximum file size, member allowance and available storage can still refuse it.

The CLI reads workspace rules before creating folders. Normal output lists up to **10** rejected paths and continues with accepted files; skipped rule violations are therefore not proof that the complete directory uploaded. With `--json`, any rejected files produce `files_rejected` and exit **2** before folder creation. If the quota estimate does not fit, the client warns and lets the server decide each file; some may fail.

## Read the result and verify the remote tree

Normal output first reports the file count and total size. Interactive progress goes to stderr, followed by **Done. N uploaded, M failed.** Use JSON when a script needs file IDs and per-file outcomes:

```sh
dosya upload ./sample-source --recursive --workspace ws_example --json > upload-result.json
```

The directory result contains `uploaded`, `failed`, `failures` and `files`; successful entries include the file ID, name, size and version. Check the process exit status as well as the JSON. A transfer or folder-creation failure exits **1**, even if other files completed. Global error categories also include **2** usage, **3** authentication, **4** network, **5** forbidden and **75** maintenance; success is **0**.

Open **Files** in the same workspace and inspect the created root and nested folders. Compare filenames, sizes and expected counts with the local tree, then download and open a representative file. Review all skipped paths and warnings. A folder-creation warning can cause descendant files to fall back into a surviving parent, so a success count alone does not prove the directory structure is correct.

## Interruptions, resuming and safe retries

Ctrl+C prints **Interrupted.** and exits **130**. Completed files and created folders remain in cloud storage; interruption is not a transaction rollback and does not remove them.

For multipart files the client writes `<local-file>.dosya-upload` before sending bytes and removes it after completion. A later upload of that exact file can reuse stored parts if its byte size and modification time still match and the resume URLs belong to the configured API host. Keep the sidecar for a resumable retry and do not edit it. Single-stream uploads retry transient failures up to **3** times after waits of **1, 3 and 8 seconds**; a 4xx refusal is not replayed as a transient error.

For an interrupted directory, use the summary and destination listing to identify incomplete files, then retry those individually into their existing folder IDs. Blindly rerunning the entire tree also uploads successful files again and can create extra versions. Its scanner includes regular `.dosya-upload` sidecar files, so do not treat a recursive rerun as a filtered resume job. If an old session is no longer usable, remove only that file's sidecar when deliberately restarting it; already stored cloud files are unaffected by local sidecar removal.

## Resolve the exact refusal

| Output | Next action |
| --- | --- |
| `Use --recursive to upload a directory.` | Add `--recursive` after checking the source tree. |
| `Workspace ID required.` | Supply `--workspace` or set a default with `dosya workspace use`. |
| `Every file was refused by this workspace's upload rules.` | Review extension and size restrictions; do not retry unchanged input. |
| `--version-of can only be used with a single file.` | Use an ordinary recursive upload, or upload one replacement file with an explicit version target. |
| `Warning: failed to create folder` | Stop relying on counts, inspect where its files landed, and correct the folder permission or destination before retrying. |

The `--version-of` flag is available for one file, not a directory. It lets you target an existing file explicitly. Version recovery is limited by workspace history retention, so keep your original local folder until verification is complete.

## Expected result

Accepted files appear beneath the chosen target with their expected relative paths, or directly in the target when you used --contents. The complete result includes skipped/rejected paths and partial failures as well as uploaded files; inspect those before declaring the folder complete.

## Related guides

- [Install the Dosya CLI](/developers/cli-install)
- [File version history](/files/version-history)
