---
{
  "articleId": "hc-rclone-transfer-filters",
  "locale": "en",
  "revision": 5,
  "title": "Filter files in an rclone transfer",
  "summary": "Exclude files with rclone rules, inspect selected paths, dry-run a Dosya WebDAV copy and verify bytes without accidental sync deletion.",
  "category": "integrations",
  "articleSlug": "rclone-transfer-filters",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed 2026-10-14 against local repository implementation and tests. Local evidence: src/pages/developer/rclone.astro; apps/web/src/components/api-keys/create-key-dialog.tsx; apps/web/src/pages/integrations/webdav.tsx; apps/api/src/pages/webdav/[...path].ts; apps/api/src/lib/webdav/methods/put.ts; apps/api/src/lib/webdav/methods/get.ts; apps/api/src/lib/webdav/methods/delete.ts; apps/api/src/lib/versioned-write.ts. Official references: https://rclone.org/filtering/; https://rclone.org/webdav/; https://rclone.org/commands/rclone_copy/; https://rclone.org/commands/rclone_sync/; https://rclone.org/commands/rclone_check/; https://rclone.org/docs/; https://rclone.org/commands/rclone_obscure/. External commands are source-derived and checked on temporary local fixtures where reported; no production credentials or remote writes used. Existing captures retain their original verification scope. Review correction: replaced the earlier illustration with a source-derived process diagram following the current guide, inspected both 1200x675 themes with no text clipping and narrow-page/full-size behavior; diagrams show command stages, not an invented app UI.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-download"
  ],
  "keywords": [
    "rclone exclude files from transfer",
    "rclone filter-from",
    "include exclude rules",
    "WebDAV upload"
  ]
}
---
Use rclone filters to leave backup files, temporary folders or unwanted extensions out of a transfer. First list the selected paths, then preview **copy** with the identical rules. A filter narrows a client command; it does not restrict what a stolen Dosya credential can access.

<figure class="help-screenshot"><a class="process-diagram-link" href="/screenshots/rclone-transfer-filters-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-transfer-filters-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-transfer-filters-help-workflow-2026-10-14-dark.webp"><picture class="process-diagram"><source data-theme-source="dark" media="not all" srcset="/screenshots/rclone-transfer-filters-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rclone-transfer-filters-help-workflow-2026-10-14.webp" alt="Process diagram: list the paths selected by transfer.rules, preview and run the same filtered copy, then compare selected destination bytes." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Process diagram: list the paths selected by transfer.rules, preview and run the same filtered copy, then compare selected destination bytes. <a class="process-diagram-full" href="/screenshots/rclone-transfer-filters-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-transfer-filters-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-transfer-filters-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

The examples upload the **contents** of `./sample-source` into an existing `filter-checks` folder through a WebDAV remote named `dosya-webdav`. Create a harmless source tree with `report.pdf`, `draft.bak`, `tmp/cache.txt` and `photos/photo.jpg`; choose a destination that contains no important files.

To configure a fresh remote, create a key in **Profile → API keys → New API key**. Choose **Full access**, select your **Workspace**, and under **Restrictions and expiry → Protocols → Only the ones I pick**, permit **WebDAV**. Save the full `dos_…` key when you generate it. In **Integrations → WebDAV**, copy the entire HTTPS mount URL. Run `rclone config`, choose a new `webdav` remote, Vendor `other`, that URL, your key owner's email as User and the API key in the hidden Password prompt. Keep the configuration private: rclone's obscured password is reversible.

A normal mount lists six collections; write through `All`, not a smart view such as `Images`. For a folder-anchored key, the selected folder's children are already the root: replace `dosya-webdav:All/filter-checks` below with `dosya-webdav:filter-checks`. Create that destination first in Files or with `rclone mkdir`. Key permissions and your workspace role must both permit WebDAV and the transfer; selecting Full access cannot widen your role.

## Steps: exclude files and preview the transfer

1. **Confirm the two paths.** The first copy argument is the source; the second receives the files. For a download, reverse them and choose an empty local target. These examples never use `sync`.
2. **List the selected source files.** Repeated `--exclude` options omit `.bak` files anywhere and the top-level `tmp` subtree:

```sh
rclone lsf ./sample-source --recursive --files-only --exclude '*.bak' --exclude '/tmp/**'
```

Expect `report.pdf` and `photos/photo.jpg` from the sample tree. No `draft.bak` or `tmp/cache.txt` should appear. A leading `/` anchors the rule at **the source argument's root**; `/tmp/**` does not exclude `photos/tmp/cache.txt`. `**` crosses directory separators, whereas `*` stays within a path segment. Use forward slashes in patterns on every platform. Matching is case-sensitive unless you deliberately add `--ignore-case`.

3. **Preview without writing.** Keep exactly those filters:

```sh
rclone copy ./sample-source dosya-webdav:All/filter-checks --exclude '*.bak' --exclude '/tmp/**' --dry-run -vv
```

Read the planned paths and any errors. A dry run can contact/list the destination but does not upload the planned files; its simulated transferred counters are not proof that bytes arrived. If an unexpected filename is selected, fix the rule and repeat the listing and preview.

4. **Run the checked copy.** Remove only `--dry-run` and retain the paths/rules:

```sh
rclone copy ./sample-source dosya-webdav:All/filter-checks --exclude '*.bak' --exclude '/tmp/**' --progress
```

Quote patterns so the shell passes the wildcard to rclone. Single quotes work for these examples in POSIX shells and PowerShell; use double quotes in Windows Command Prompt. Do not write `dosya-webdav:*.pdf` as a substitute for a filter.

## Include selected types or order mixed rules

For PDFs only, use an include family on its own:

```sh
rclone lsf ./sample-source --recursive --files-only --include '*.pdf'
```

`--include` adds a final exclude-all rule implicitly. When you need both allowed types and exceptions, use **only** the filter family, rather than mixing `--include`, `--exclude` and `--filter`. Create `transfer.rules` outside the source tree with this content:

```text
# Drop private and temporary material before allowing document types.
- /private/**
- *.bak
+ *.pdf
+ *.jpg
- **
```

Rules run top to bottom; the first match wins. `+ *.pdf` alone does not reject everything else, so the explicit final `- **` is essential here. Whole-line `#` and `;` comments are supported; an inline comment becomes part of the pattern. Keep the same file throughout the workflow:

```sh
rclone lsf ./sample-source --recursive --files-only --filter-from ./transfer.rules
rclone copy ./sample-source dosya-webdav:All/filter-checks --filter-from ./transfer.rules --dry-run -vv --dump filters
rclone copy ./sample-source dosya-webdav:All/filter-checks --filter-from ./transfer.rules --progress
rclone check ./sample-source dosya-webdav:All/filter-checks --filter-from ./transfer.rules --one-way --download
```

For the sample tree, that rule file selects `report.pdf` and `photos/photo.jpg`. `check --download` reads bytes to compare them and consumes download allowance. `--one-way` checks source-selected files without demanding that the destination have no extras. An exit status of zero plus the expected candidate list and successful byte check establish this filtered copy's result; a nonzero status needs investigation.

## Expected result and deletion risks

Only the files your checked rules select are copied. Excluded local files remain on your computer, and ordinary **copy** does not delete destination-only objects. Matching destination names can still be replaced when rclone decides a transfer is needed; Dosya writes a new file version, with finite history retention, rather than guaranteeing permanent recovery.

If you change the command to **sync**, destination files inside its selected scope can be deleted to match the source. Normally excluded destination paths are protected from sync deletion; `--delete-excluded` removes that protection and can delete the very files your filters hide. `rclone purge` ignores filters. Do not use either as a shortcut to clean this test. Remote deletion moves eligible files to Trash and revokes their share links; local destination deletion has no Dosya Trash recovery.

## Troubleshooting

**Nothing is selected.** Check the root-relative slash, filename case and whether you accidentally matched only a directory (`/photos/`) instead of its files (`/photos/**`). `--dump filters -vv` shows the applied rules; do not change transfer direction while debugging patterns.

**An exception is ignored.** Put the exclusion before the broader inclusion in a filter file. Mixing filter families does not preserve your visual command-line order; convert the command to one `--filter-from` file.

**403, Locked, or a quota refusal.** Filters do not bypass role/key restrictions, locked destinations, blocked extensions or storage allowance. WebDAV upload requires Content-Length and an existing parent folder. For a 429, respect Retry-After and reduce client concurrency; multiple GET range streams may require `--multi-thread-streams 0` as well as `--transfers 1` when downloading.

## Related guides

- [Configure a Dosya rclone remote](/integrations/rclone)
- [Understand copy versus sync deletion](/integrations/rclone-copy-vs-sync)
- [Official rclone filter rules](https://rclone.org/filtering/)
