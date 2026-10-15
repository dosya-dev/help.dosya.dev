---
{
  "articleId": "hc-remote-download-quota-locked",
  "locale": "en",
  "revision": 5,
  "title": "Fix remote-download quota or locked-destination errors",
  "summary": "Resolve storage-cap and locked-backup destination failures, account for the completion-time quota check, and retry safely into a writable folder.",
  "category": "integrations",
  "articleSlug": "remote-download-quota-locked",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Fix remote-download quota or locked-destination errors” against the released implementation on 2026-10-14: `apps/web/src/pages/integrations/remote-download.tsx`, `apps/api/src/pages/api/remote-downloads/index.ts`, `apps/api/src/lib/remote-download/durable-object.ts`, `apps/api/src/lib/ingest/register.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
  "related": [
    "hc-remote-download-errors",
    "hc-remote-download-start"
  ],
  "keywords": [
    "remote download quota locked",
    "Remote download failure details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A remote download checks storage before it starts, checks again when it enters **Finalizing**, and performs an atomic reservation while registering the file. Capacity consumed by other work during the transfer can therefore produce **Not enough storage** at the end.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/remote-download-quota-locked-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-quota-locked-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-quota-locked-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/remote-download-quota-locked-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/remote-download-quota-locked-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Fix remote-download quota or locked-destination errors: Compare destination free space with job size, allow for concurrent uploads. Choose outside any live locked backup tree, locked folders reject registration. Create a new job after fixing capacity or lock, failed rows cannot resume. Wait through Finalizing and require Done, verify the complete stored byte size." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows fix remote-download quota or locked-destination errors from “Compare destination free space with job size, allow for concurrent uploads.” through “Choose outside any live locked backup tree, locked folders reject registration.” and “Create a new job after fixing capacity or lock, failed rows cannot resume.”, ending with “Wait through Finalizing and require Done, verify the complete stored byte size.”. <a class="workflow-map-full" href="/screenshots/remote-download-quota-locked-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-quota-locked-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-quota-locked-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

A different terminal check protects WordPress backup trees. If the selected folder is under a live backup lock, the row reports **Destination is a locked backup** and no file is registered there.

## Before you start

Record the destination workspace, folder, source size, and the failed row’s exact label. An owner-plan cap, workspace cap, file-size policy, extension policy, or upload role can block the request, but the Remote download table groups storage-cap failures under **Not enough storage**.

## Steps

1. Open the destination workspace’s storage view and compare available capacity with the failed job’s total bytes, allowing room for other active uploads.
2. Delete unneeded data or increase the applicable capacity, then refresh until the new free-space figure is visible.
3. If the row says **Destination is a locked backup**, choose a folder outside that backup tree or wait for its lock to end; repeated jobs to the same locked folder will fail again.
4. Return to **Integrations > Remote download**, reselect the active workspace and the verified writable folder.
5. Submit the direct URL as a new job; failed jobs cannot be resumed or retargeted, and their terminal X only removes them from the list.
6. Wait through **Finalizing**, require **Done**, and confirm the file’s full byte size inside the chosen folder before dismissing the failure.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Reference for “Fix remote-download quota or locked-destination errors”: Dosya Remote Downloads overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Fix remote-download quota or locked-destination errors”: Dosya Remote Downloads overview page. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The replacement job passes the initial check, the completion-time check, and the final atomic reservation. The file is registered once in an unlocked destination, and the failed job remains only as removable history.

If capacity still appears sufficient, check the workspace’s file-size and extension policies and confirm that your current membership can upload. The initial API toast preserves the detailed quota sentence even though a terminal row uses the shorter storage label.

## Related guides

- [Troubleshoot remote downloads](/integrations/remote-download-errors)
- [Start a remote download](/integrations/remote-download-start)
