---
{
  "articleId": "hc-rclone-sync-dry-run",
  "locale": "en",
  "revision": 5,
  "title": "Run an rclone sync dry-run",
  "summary": "Preview a one-way rclone mirror with sync --dry-run, interpret planned transfers and deletions, then run the real command only after review.",
  "category": "integrations",
  "articleSlug": "rclone-sync-dry-run",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/rclone.tsx; apps/web/src/lib/integrations.ts; src/pages/developer/rclone.astro; apps/help/src/content/articles/rclone-copy-vs-sync.md; apps/api/src/lib/webdav/methods/delete.ts; and packages/prod-smoke/src/rclone-config.ts. Dry-run examples were reviewed locally; no production sync was executed.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-download"
  ],
  "keywords": [
    "rclone sync dry run",
    "cloud storage mirror preview",
    "rclone deletion plan",
    "Dosya rclone remote"
  ]
}
---
`rclone sync` makes its second path match its first path. Destination-only files can be removed, so confirm direction and preview the exact pair every time. `--dry-run` asks rclone to report intended work without applying copies, replacements, or deletions.

<figure class="help-screenshot"><a href="/screenshots/rclone-sync-dry-run-help-workflow-2026-10-14.webp"><img src="/screenshots/rclone-sync-dry-run-help-workflow-2026-10-14.webp" alt="Terminal workflow comparing an rclone source and Dosya destination, dry-run output, deletion review, and the separately approved live sync." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Read the first path as source and the second as destination, then approve every planned deletion before removing `--dry-run`. <a href="/screenshots/rclone-sync-dry-run-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Configure the current Dosya backend

Install the Dosya rclone build with:

```sh
go install github.com/dosya-dev/rclone@latest
```

Create an API key that has the permissions needed by the chosen direction. A cloud destination that may receive uploads and deletions needs **Full access** plus the corresponding workspace role permissions; a cloud source used only for local download can use **Read only**. Keep the key out of terminal history and shared logs.

Add this remote to the rclone configuration, substituting the intended workspace ID and API key:

```ini
[dosya]
type = dosya
api_key = dos_your_api_key
workspace_id = WORKSPACE_ID
api_url = https://api.dosya.dev
```

Confirm you can list it before planning a mirror:

```sh
rclone lsf dosya:
```

## Steps

1. Create a small, known local source such as `./sample-source` and an isolated cloud destination such as `dosya:/mirror-check`. Back up anything already in that destination.
2. List the local source and `dosya:` destination recursively, then save the output:

   ```sh
   rclone lsf ./sample-source --recursive
   rclone lsf dosya:/mirror-check --recursive
   ```

3. Run the preview with verbose operation lines:

   ```sh
   rclone sync ./sample-source dosya:/mirror-check --dry-run --progress -vv
   ```

4. Review every path marked for copy, replacement, or deletion. Output such as **Skipped copy as --dry-run is set** confirms an operation was simulated, not completed.
5. If any cloud-only file must remain, stop. Use `rclone copy` for additive behavior or move that item outside the mirror destination.
6. Re-run the preview after changing filters, source contents, current directory, or destination. Relative paths and shell quoting can point at a different tree than expected.
7. Only after the second review, run the live command by removing `--dry-run` yourself:

   ```sh
   rclone sync ./sample-source dosya:/mirror-check --progress -vv
   ```

<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Dosya rclone integration page showing native backend installation, remote configuration fields, and example commands." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The native `dosya:` remote takes an API key, workspace ID, and `https://api.dosya.dev` base URL before any dry-run can inspect cloud paths. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Deletion and recovery rules

An empty or mistaken source makes all destination entries candidates for removal. Filters also redefine the mirror set; `--delete-excluded` permits removal of excluded destination content. Rclone normally avoids destination deletion after transfer errors, while `--ignore-errors` relaxes that protection. Do not add either flag to bypass an unexplained plan.

Reversing the paths changes the risk. This command makes a local directory match Dosya and can remove local-only files:

```sh
rclone sync dosya:/mirror-check ./sample-download --dry-run --progress -vv
```

Dosya cannot restore data deleted only from your computer. Keep an independent local backup before approving that direction. A live sync to the native `dosya:` destination deletes each removed item twice: the first request moves it to Dosya Trash, and the second purges it permanently to free storage. Trash cannot recover a destination-only item removed by this backend, so preserve an independent copy before approving the live command.

The dry-run itself is reversible because it writes nothing. The live command is not transactional: transfers can succeed before a later error, and a retry does not roll back earlier changes.

## Verify the live run

Capture the command's exit status, list the destination again, and compare bytes without modifying either side:

```sh
echo $?
rclone lsf dosya:/mirror-check --recursive
rclone check ./sample-source dosya:/mirror-check --download
```

An exit status of `0` means the command reported no remaining errors; it does not prove files were transferred. A nonzero result can leave partial successful work. Inspect the Dosya folder and compare it with the saved pre-run listing before retrying; native-backend deletions are already purged from Trash.

## Expected result

The dry-run reports the exact one-way mirror plan while leaving both trees unchanged. If the approved live sync is later run, the destination matches the source, including intentional removal of destination-only entries, and `rclone check` finds no content differences.

## Related guides

- [Copy with rclone](/integrations/rclone)
- [Download with rclone](/integrations/rclone-download)
