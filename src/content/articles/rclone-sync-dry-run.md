---
{
  "articleId": "hc-rclone-sync-dry-run",
  "locale": "en",
  "revision": 6,
  "title": "Run an rclone sync dry-run",
  "summary": "Preview a one-way rclone mirror with sync --dry-run, interpret planned transfers and deletions, then run the real command only after review.",
  "category": "integrations",
  "articleSlug": "rclone-sync-dry-run",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Source-reviewed locally on 2026-10-15 against apps/web/src/pages/integrations/rclone.tsx; apps/web/src/lib/integrations.ts; src/pages/developer/rclone.astro; apps/help/src/content/articles/rclone-copy-vs-sync.md; apps/api/src/lib/webdav/methods/delete.ts; and packages/prod-smoke/src/rclone-config.ts. Native and S3 fallback configuration plus dry-run examples were reviewed locally; no production sync was executed.",
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

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/rclone-sync-dry-run-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-sync-dry-run-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-sync-dry-run-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/rclone-sync-dry-run-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rclone-sync-dry-run-help-workflow-2026-10-14.webp" alt="Four-step rclone mirror check: choose the built-in Dosya provider or S3 fallback, record both trees, review sync dry-run output, and approve the live command separately." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Configure the backend available in your rclone build, save both listings, and approve every planned deletion before removing <code>--dry-run</code>. <a class="workflow-map-full" href="/screenshots/rclone-sync-dry-run-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-sync-dry-run-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-sync-dry-run-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Configure rclone without a fork

The Dosya backend ships inside current rclone releases. Do not install a Dosya-specific fork. Run the standard configuration command:

```sh
rclone config
```

Create an API key that has the permissions needed by the chosen direction. A cloud destination that may receive uploads and deletions needs **Full access** plus the corresponding workspace role permissions; a cloud source used only for local download can use **Read only**. Keep the key out of terminal history and shared logs.

Choose a new remote, name it `dosya`, and select **dosya** from the storage-provider list. Enter the intended workspace ID and API key when prompted. Confirm the native remote before planning a mirror:

```sh
rclone lsf dosya:
```

If **dosya** is absent from the provider list, update rclone or configure the stock S3 backend as the fallback described in the [Dosya rclone documentation](https://dosya.dev/developer/rclone/):

```sh
rclone config create dosya s3 \
  provider=Other \
  access_key_id=dos_your_access_key \
  secret_access_key=your_secret_access_key \
  endpoint=https://api.dosya.dev/s3 \
  region=us-east-1

rclone lsf dosya:WORKSPACE_ID
```

The remaining commands use the native path `dosya:/mirror-check`. With the S3 fallback, use `dosya:WORKSPACE_ID/mirror-check` because the workspace ID is the bucket.

## Steps

1. Run `rclone config`, choose the built-in **dosya** provider, and confirm `rclone lsf dosya:` works. If the provider is absent, configure the S3 fallback and list `dosya:WORKSPACE_ID` instead.
2. Create a small, known local source such as `./sample-source` and an isolated cloud destination such as `dosya:/mirror-check`. Back up anything already in that destination.
3. List the local source and `dosya:` destination recursively, then save the output:

   ```sh
   rclone lsf ./sample-source --recursive
   rclone lsf dosya:/mirror-check --recursive
   ```

4. Run the preview with verbose operation lines:

   ```sh
   rclone sync ./sample-source dosya:/mirror-check --dry-run --progress -vv
   ```

5. Review every path marked for copy, replacement, or deletion. **Skipped copy as --dry-run is set** confirms simulation. If a destination-only file must remain, stop and use `rclone copy` or move it outside the mirror.
6. Re-run the preview after changing filters, source contents, current directory, or destination. Only after that second review, run the live command by removing `--dry-run` yourself:

   ```sh
   rclone sync ./sample-source dosya:/mirror-check --progress -vv
   ```

<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Dosya rclone integration page showing the built-in Dosya provider, remote configuration fields, S3 fallback, and example commands." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Current rclone releases include the native <code>dosya:</code> provider; the S3 gateway remains available when an older build does not list it. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

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
