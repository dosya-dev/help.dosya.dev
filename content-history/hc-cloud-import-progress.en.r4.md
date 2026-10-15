---
{
  "articleId": "hc-cloud-import-progress",
  "locale": "en",
  "revision": 4,
  "title": "Monitor and verify a cloud import",
  "summary": "Read cloud-import progress, distinguish completed and failed items, and verify imported files before removing the source or retrying.",
  "category": "integrations",
  "articleSlug": "import-progress",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-cloud-import-destination",
    "hc-cloud-import-troubleshoot",
    "hc-review-duplicates",
    "hc-storage-usage"
  ],
  "keywords": [
    "import progress",
    "cloud import job",
    "verify import",
    "failed import item",
    "import completed",
    "duplicate import",
    "file transfer"
  ]
}
---
Cloud imports run as jobs. Use the progress view to tell whether the whole selection completed, partially completed or stopped before you retry or remove anything from the provider.

The main checks are the signed-in account, current setting and expected result. Record the current state first and keep recovery, payment and identity secrets out of screenshots.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/import-progress-workflow-map-2026-10-14.webp" data-light-href="/screenshots/import-progress-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/import-progress-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/import-progress-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/import-progress-workflow-map-2026-10-14.webp" alt="Four-step interface map for monitor and verify a cloud import, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/import-progress-workflow-map-2026-10-14.webp" data-light-href="/screenshots/import-progress-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/import-progress-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Keep the connected provider account active until the job finishes.
- Leave the source files in place during transfer.
- Know the selected Dosya workspace and destination folder.
- For important data, plan to compare representative files after completion.

## Steps: monitor and verify the job

1. Start the import from the provider picker.
2. Open the import progress card or indicator for the active workspace.
3. Read the total, completed and failed counts instead of relying on a single overall label.
4. Wait until no item remains active.
5. Open the destination in **Files** and compare names, folder placement and representative file sizes.
6. Open or download an important sample before treating the migration as complete.

<figure class="help-screenshot"><a href="/screenshots/import-google-import-result-2026-10-11.webp"><img src="/screenshots/import-google-import-result-2026-10-11.webp" alt="Dosya file browser showing the completed result of an isolated Google Drive import in the selected workspace destination." width="1429" height="799" loading="lazy" decoding="async" /></a><figcaption>Verify the completed files in their destination. A finished job summary alone does not confirm the contents of every important file. <a href="/screenshots/import-google-import-result-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Open the destination in Files and compare names, folder placement and representative file sizes. Open or download an important sample before treating the migration as complete.

## Expected result

The job reaches a terminal state, and each successful item appears in the intended destination. Any failure remains identifiable so you can retry only what is missing.

## Limits and verification scope

- A job can partially succeed. Do not restart the whole selection without checking completed items.
- Provider access can expire while a long import is running.
- Import completion does not prove that an unsupported provider object was converted into a normal file.
- Imported copies consume Dosya storage and remain separate from the provider originals.

## Troubleshooting

**Progress stopped changing.** Check service status and the provider connection, then reload the job view once. Do not immediately create a duplicate job.

**Some items failed.** Record their names and errors, verify successful items, then retry only the missing selection.

**Files are not in the expected folder.** Confirm the active workspace and the destination recorded when the job started.

**Storage usage increased more than expected.** Check for repeated imports, retained duplicates and the actual sizes of imported folders.

## Related guides

- [Choose an import destination](/integrations/import-destination)
- [Troubleshoot cloud imports](/troubleshooting/cloud-imports)
- [Review exact duplicates](/files/review-duplicates)
- [Understand storage usage](/uploading/storage-usage)
