---
{
  "articleId": "hc-remote-download-cancel",
  "locale": "en",
  "revision": 5,
  "title": "Cancel an active remote download",
  "summary": "Cancel a queued or transferring remote download, understand the completion race, and remove its terminal row without deleting a file that already finished.",
  "category": "integrations",
  "articleSlug": "remote-download-cancel",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Cancel an active remote download” against the released implementation on 2026-10-14: `apps/web/src/pages/integrations/remote-download.tsx`, `apps/api/src/pages/api/remote-downloads/[id].ts`, `apps/api/src/lib/remote-download/durable-object.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
  "related": [
    "hc-remote-download",
    "hc-storage-usage"
  ],
  "keywords": [
    "remote download cancel",
    "Remote download operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The X control has two meanings on the released Remote download table: an active row uses **Cancel download**, while a completed, failed, or cancelled row uses **Remove from list**. There is no confirmation dialog.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/remote-download-cancel-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-cancel-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-cancel-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/remote-download-cancel-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/remote-download-cancel-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Cancel an active remote download: Match the active row by filename and start time, confirm the current workspace. Choose the row’s X while its tooltip says Cancel download, click only once. For Cancelled verify the destination, require that no partial file was registered. For Done keep or delete the destination file, dismissal removes only history." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows cancel an active remote download from “Match the active row by filename and start time, confirm the current workspace.” through “Choose the row’s X while its tooltip says Cancel download, click only once.” and “For Cancelled verify the destination, require that no partial file was registered.”, ending with “For Done keep or delete the destination file, dismissal removes only history.”. <a class="workflow-map-full" href="/screenshots/remote-download-cancel-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-cancel-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-cancel-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Use the same Dosya account that started the job. Another workspace member receives **Only the person who started this download can remove it** even when they can see the workspace.

Queued, downloading, and finalizing jobs are active. Cancellation is best effort at a defined commit boundary: a request that loses the race to completion leaves the row **Done** and preserves the registered file.

## Steps

1. Open **Integrations > Remote download** in the workspace shown when the job was submitted, then match the filename and start time.
2. Verify that the badge reads **Queued**, **Downloading**, or **Finalizing** and that the X tooltip says **Cancel download**.
3. Choose the X once; the page immediately sends the cancellation request without asking for another confirmation.
4. Wait for the next refresh, which occurs every three seconds while the page has an active job, and read the resulting badge instead of assuming cancellation won.
5. If the badge becomes **Cancelled**, verify that no file with this job’s result was registered in the selected folder; partial remote-download storage is cleaned up.
6. If the row is **Done**, keep or delete the completed file separately. Choose the terminal row’s X only when you want **Remove from list** to hide the job.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Reference for “Cancel an active remote download”: Dosya Remote Downloads overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Cancel an active remote download”: Dosya Remote Downloads overview page. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A cancellation that wins stops the transfer, removes partial storage, and leaves a **Cancelled** row. A completion that wins stays **Done** with its file intact. Removing either terminal row only dismisses history; it does not delete a finished file and does not restore one of the 20 jobs allowed in the rolling 24-hour count.

If the X reports **Could not remove download**, reload the workspace and check that you are signed in as the starter. Do not repeatedly click while the finalizing race is settling.

## Related guides

- [Download a remote URL](/integrations/remote-download)
- [Understand storage limits](/uploading/storage-usage)
