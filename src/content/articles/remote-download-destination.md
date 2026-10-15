---
{
  "articleId": "hc-remote-download-destination",
  "locale": "en",
  "revision": 5,
  "title": "Choose a folder for a remote download",
  "summary": "Choose Home or a permitted folder in the active workspace, confirm the picker result before fetching, and find the completed file at that destination.",
  "category": "integrations",
  "articleSlug": "remote-download-destination",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Choose a folder for a remote download” against the released implementation on 2026-10-14: `apps/web/src/pages/integrations/remote-download.tsx`, `apps/api/src/pages/api/remote-downloads/index.ts`, `apps/api/src/lib/ingest/register.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
  "related": [
    "hc-remote-download",
    "hc-storage-usage"
  ],
  "keywords": [
    "remote download destination",
    "Remote download operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A remote download is submitted to the active workspace and either **Home** or one live folder chosen through **Download into folder**. The destination is fixed in the job when **Fetch file** succeeds.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/remote-download-destination-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-destination-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-destination-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/remote-download-destination-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/remote-download-destination-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Choose a folder for a remote download: Switch to the receiving workspace before entry, confirm it should own downloaded bytes. Use Choose folder and select the destination, confirm its name beside the URL field. Compare the workspace and selected folder, submit only when both are correct. Open the destination after Done, compare stored byte size with the source." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows choose a folder for a remote download from “Switch to the receiving workspace before entry, confirm it should own downloaded bytes.” through “Use Choose folder and select the destination, confirm its name beside the URL field.” and “Compare the workspace and selected folder, submit only when both are correct.”, ending with “Open the destination after Done, compare stored byte size with the source.”. <a class="workflow-map-full" href="/screenshots/remote-download-destination-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-destination-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-destination-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Your workspace role must allow file uploads. A folder-confined member is automatically limited to that subtree: selecting Home with such a membership resolves to the member’s anchor rather than the literal workspace root.

Changing workspaces after selecting a folder can leave a stale folder name in the form. The API refuses that combination with **Folder not found in this workspace**, so reselect the destination after every workspace switch.

## Steps

1. Switch to the workspace that should own the downloaded bytes before opening **Integrations > Remote download**.
2. Choose the folder button, initially labelled **Home**, and use the **Download into folder** dialog to browse only the permitted tree.
3. Highlight the intended folder and choose **Select**; confirm that its name replaces **Home** beside the URL field.
4. Paste the direct HTTPS file URL, recheck the active workspace and displayed folder together, then choose **Fetch file**.
5. Require **Download started** and note the queued row’s filename and byte total; the page can close while the server fetch continues.
6. After the badge reaches **Done**, open the chosen folder and verify the saved byte size. If that name already existed, look for the numeric suffix such as `report (2).pdf`.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Reference for “Choose a folder for a remote download”: Dosya Remote Downloads overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Choose a folder for a remote download”: Dosya Remote Downloads overview page. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The completed file is registered in the folder captured at submission. A same-name file is preserved and the imported file receives a suffix rather than becoming a new version. Upload policy, storage quota, and backup locks still apply to this server-side ingest.

If a folder was moved, trashed, or belongs to another workspace, select a current destination and create a new job. The existing job cannot be retargeted after submission.

## Related guides

- [Download a remote URL](/integrations/remote-download)
- [Understand storage limits](/uploading/storage-usage)
