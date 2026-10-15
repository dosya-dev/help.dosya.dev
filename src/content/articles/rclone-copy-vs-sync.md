---
{
  "articleId": "hc-rclone-copy-vs-sync",
  "locale": "en",
  "revision": 5,
  "title": "Choose between rclone copy and sync",
  "summary": "Compare rclone copy and sync, preview destination deletions, understand Dosya versions and Trash retention, and check the completed operation.",
  "category": "integrations",
  "articleSlug": "rclone-copy-vs-sync",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14: src/pages/developer/rclone.astro; apps/api/src/lib/webdav/auth.ts; apps/api/src/pages/webdav/[...path].ts; apps/api/src/lib/webdav/views.ts; apps/api/src/lib/webdav/methods/put.ts; apps/api/src/lib/webdav/methods/delete.ts; apps/api/src/lib/webdav/methods/delete.subtree-authz.unit.test.ts; apps/api/src/lib/webdav/methods/delete.ancestor-lock.unit.test.ts; apps/api/src/lib/versioned-write.ts; apps/api/src/pages/api/internal/files/trim-versions.ts; apps/api/src/pages/api/internal/files/purge-trash.ts; apps/api/src/lib/files/purge.ts; apps/api/src/lib/usage/plan-limits.ts; apps/cron/src/index.ts. Official references: https://rclone.org/commands/rclone_copy/; https://rclone.org/commands/rclone_sync/; https://rclone.org/commands/rclone_check/; https://rclone.org/webdav/; https://rclone.org/docs/. Current 2026-10-11 rclone-copy history verifies copy preservation only, not remote sync deletion. Retained accurate copy-vs-sync illustration, removed marketing overview figure. Examples safely checked on local files, no production sync executed. Local repository review; commands checked without production credentials.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-download"
  ],
  "keywords": [
    "rclone copy vs sync",
    "rclone dry run",
    "destination deletion",
    "WebDAV sync",
    "file versions",
    "Trash retention",
    "cloud storage"
  ]
}
---
Choose `rclone copy` when destination-only files must remain. Choose `rclone sync` only when the destination should mirror a complete, trusted source. Both can replace a changed file at the same relative path; only sync also removes destination files that are missing from its source.

| Operation | Local-to-Dosya effect | Dosya-to-local effect |
| --- | --- | --- |
| `copy` | Adds or updates selected cloud files; retains cloud-only files | Adds or updates local files; retains local-only files |
| `sync` | Makes the selected cloud destination match the source, including deletion | Makes the selected local destination match the cloud source, including deletion |

The source is the **first** path and the destination is the **second** path. These are one-way operations, not a bidirectional sync pairing. See the official [copy](https://rclone.org/commands/rclone_copy/) and [sync](https://rclone.org/commands/rclone_sync/) references.

<figure class="help-screenshot"><a href="/screenshots/rclone-copy-vs-sync-help-workflow-2026-10-14.webp"><img src="/screenshots/rclone-copy-vs-sync-help-workflow-2026-10-14.webp" alt="Workflow for “Choose between rclone copy and sync”: compare commands and choose copy to preserve extra destination files or sync for an exact mirror; the selected command has the intended deletion semantics." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Choose between rclone copy and sync”: compare commands and choose copy to preserve extra destination files or sync for an exact mirror; the selected command has the intended deletion semantics. <a href="/screenshots/rclone-copy-vs-sync-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Establish a working remote before choosing an operation

Run `rclone version` after installing from [rclone downloads](https://rclone.org/downloads/). For Dosya WebDAV, create a key in [Profile → API keys](https://app.dosya.dev/profile/api) and allow **WebDAV** in its protocol restrictions. Choose **Full access** for a remote destination you intend to mirror, because deleting requires that scope; your membership still needs the upload, folder-creation and appropriate delete permissions. A read-only key is sufficient for a cloud source being downloaded locally.

Copy **Integrations → WebDAV → Endpoint & credentials** for the intended workspace. In `rclone config`, create `dosya-webdav` with Storage `webdav`, Vendor `other`, that complete HTTPS URL, the key owner's email as User, and the full API key through the hidden Password prompt. Leave bearer token empty and retain the remote. The [WebDAV reference](https://rclone.org/webdav/) documents these options; keep the private config out of shared diagnostics.

```sh
rclone lsf dosya-webdav:
rclone lsf dosya-webdav:All/rclone-checks --recursive
```

Ordinary mounts expose six collections; use **All** for the real writable tree. A folder-anchored key instead shows the permitted folder's children directly: remove the `All/` prefix and use its relative child path. Scope a mirror to a dedicated subfolder, not the connection root, a smart view, or a workspace with other people's files. Hidden or inaccessible source files can make a source listing incomplete, so establish that it contains everything your destination should retain.

## Steps: preview a harmless sample

Use a curated local `sample-source` folder and a separate test destination `rclone-checks`. A source folder's contents go into the destination, without an extra source-folder nesting level.

```sh
rclone copy ./sample-source dosya-webdav:All/rclone-checks --dry-run --progress
rclone sync ./sample-source dosya-webdav:All/rclone-checks --dry-run --progress
```

Review the reported paths and every planned deletion. A dry run can display planned totals, but no permanent copy or deletion has happened. If a remote-only file should be retained, the second plan is the wrong operation for that folder. Quote paths containing spaces and verify your terminal's current directory before using relative paths.

An empty or wrong local source is especially dangerous for a mirror: it can make destination files appear unwanted. Filters change the selected set, and `--delete-excluded` allows sync to remove excluded destination items too. Do not add it to resolve an unexplained mismatch. Rclone normally avoids destination deletions after errors; `--ignore-errors` changes that safeguard. These effects are documented in [rclone sync](https://rclone.org/commands/rclone_sync/).

## Run copy, or deliberately approve the mirror yourself

For the additive test:

```sh
rclone copy ./sample-source dosya-webdav:All/rclone-checks --progress
```

When you have reviewed the exact sync preview and every destination-only item may be removed, run:

```sh
rclone sync ./sample-source dosya-webdav:All/rclone-checks --progress
```

The second command performs real deletions; this guide does not run it for you. Existing verified Dosya screenshots establish a successful sample **copy** and preservation of a remote-only file. They do not demonstrate a completed sync deletion. Sync examples here follow the official command contract and Dosya's source-verified delete behavior.

Reversing the paths makes the local folder the destination. For example, `rclone sync dosya-webdav:All/rclone-checks ./sample-download` can delete local-only files in `sample-download`. Dosya Trash cannot restore a file removed solely from your computer; keep an independent local backup before that direction of sync.

## What replacement and deletion mean in Dosya

When rclone sends different content to a matching live filename in the same real cloud folder, WebDAV writes a **new version of the existing file**, preserving its identity. `copy` therefore does not mean "never overwrite." With Vendor `other`, rclone's metadata/hash comparisons are limited; files it decides to retransmit can produce additional versions.

The workspace history cap defaults to **10 versions**; a nonpositive configured cap disables the count limit. Free-plan owners' older versions are eligible for pruning after **7 days**, while retaining the newest version. Count limits also apply to paid workspaces, so replacement history is not an unlimited rollback promise. Original and retained version bytes use storage.

A WebDAV DELETE moves the cloud file to Trash and revokes its share links; a folder deletion trashes its subtree. Delete permissions depend on whether you own each affected item. A locked file, locked ancestor or locked backup can refuse the operation even with a full-access key. Trashed files still consume storage until permanent purge.

Restore eligible deleted cloud content through **Trash** before retention expires. The automatic purge window is **7 days** for effectively free workspace owners and **30 days** for other owners; it is based on the owner's effective plan, not the rclone operator's subscription. Permanent purge removes the data and retained versions irreversibly. A content restore should not be assumed to reactivate revoked share links.

## Check completion rather than trusting the progress bar

```sh
rclone lsf dosya-webdav:All/rclone-checks --recursive
rclone check ./sample-source dosya-webdav:All/rclone-checks --download --one-way
```

Capture the transfer command's exit status before the listing: `echo $?` in a POSIX shell or `$LASTEXITCODE` in PowerShell. Exit **0** indicates no remaining errors, but not necessarily a transfer. Review nonzero exits and errors per [rclone's exit-code list](https://rclone.org/docs/#exit-code).

`check --download --one-way` compares the source contents with downloaded destination bytes without modifying files, allowing destination-only extras after copy. After sync, omit `--one-way` if you also need differences on either side reported. See [rclone check](https://rclone.org/commands/rclone_check/). Check the Dosya folder in **Files**, and if deletion was intended inspect **Trash** and the remaining live list as well.

These checks read cloud bytes again and consume egress. Workspace storage, upload restrictions, key/role concurrency and daily egress allowances still constrain the run. If you get HTTP **429**, use the server's retry hint when supplied and investigate the applicable limit instead of looping immediately.

## Recover from a refused or partial mirror

- **API key scope must be 'full' to delete** identifies insufficient key scope; **Delete not allowed** identifies a role/ownership refusal. A successful upload does not prove you can delete every destination item.
- **Locked** (423) requires resolving the relevant file or ancestor lock; repeated commands cannot override it.
- Some transfers can complete before a later failure. Review the live destination, Trash and version history before retrying; a nonzero exit does not roll back successful uploads.
- If the wrong files were trashed, stop the job, restore eligible cloud items promptly and verify any replacement versions separately. If the local destination was damaged, recover from your local backup.

Keep copy as the default when the destination holds independently created files. Use a dedicated mirror folder and a freshly reviewed dry run whenever the source selection or destination changes.

## Expected result

Copy retains destination-only items; a deliberately approved sync removes them from the selected destination. Verify replacements and deletions separately, with no assumption that a successful transfer summary proves a complete recovery path.

## Related guides

- [Configure and test rclone](/integrations/rclone)
- [Download files with rclone](/integrations/rclone-download)
