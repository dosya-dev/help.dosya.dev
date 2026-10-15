---
{
  "articleId": "hc-share-file-bundle",
  "locale": "en",
  "revision": 6,
  "title": "Share several files with one link",
  "summary": "Select up to 100 files in one workspace, create one bundle URL on the web, and verify that its recipient page shows exactly the intended file set.",
  "category": "sharing",
  "articleSlug": "share-file-bundle",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally on 2026-10-14 against apps/web/src/pages/files.tsx, apps/web/src/components/share-modal.tsx, apps/api/src/pages/api/files/share-bundle.ts, apps/api/src/lib/share/lock-gate.ts, and apps/api/src/lib/share/access.bundle-lock.unit.test.ts. Production status: no bundle was created.",
  "related": [
    "hc-create-link",
    "hc-link-activity"
  ],
  "keywords": [
    "share file bundle",
    "multiple files one link",
    "cloud file bundle",
    "file sharing"
  ]
}
---
A bundle places several selected files behind one URL and one access policy. Create it from the Dosya web Files page when separate links would be hard to manage. The mobile creation sheet currently handles one file or one folder, so multi-file bundle creation is a web task.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-file-bundle-workflow-map-2026-10-14.webp" data-light-href="/screenshots/share-file-bundle-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/share-file-bundle-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-file-bundle-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-file-bundle-workflow-map-2026-10-14.webp" alt="Web bundle workflow showing a multi-file selection, one Share dialog, and a recipient page containing the selected file set." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Review the complete selection before generating the single address that will expose those files together. <a class="workflow-map-full" href="/screenshots/share-file-bundle-workflow-map-2026-10-14.webp" data-light-href="/screenshots/share-file-bundle-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/share-file-bundle-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Bundle rules

A bundle contains between 1 and 100 unique, live files from the same workspace. It cannot mix files and folders, and it cannot include a file outside the member's assigned subtree. The Files toolbar prevents a mixed selection; the API separately rejects cross-workspace members with **All files must be in the same workspace** and missing, duplicate, deleted, or hidden choices with **Some files were not found**.

The sender must hold **Create share links**. Workspace policies can disable link creation, force an eight-character password, or shorten the expiry. A free-plan creator can have five active links and receives a maximum seven-day lifetime even if the picker requests longer.

## Steps

1. In the web app, open **Files** inside the workspace that contains every item.
2. Select only the files for this delivery. Clear all selected folders; a folder must use its own folder link.
3. Use the bulk **Share** action. The dialog should identify the target as **N files · one link for all of them**.
4. Choose **By link** for a URL you will deliver yourself, or **By email** to enter up to 50 recipients.
5. Set **Expires in** and an optional password. For named-recipient access, enable **Only these people can open it.** on the email tab.
6. Recheck the selected count before submitting. Choose **Generate link** or **Send**.
7. For a link-only bundle, copy the address from **Share link created**. For email delivery, wait for **Shared with N recipients.** or the partial-delivery notice.
8. Open the bundle URL in a signed-out browser and compare every displayed file name with the selection from step 2.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Share activity screen for a multi-file link with aggregate opens, downloads, and the bundle access event list." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>A bundle is tracked as one share record, so its link-level activity covers access to the combined delivery. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What changes after creation

The bundle membership is stored when the URL is created; selecting another file later does not add it. The record also keeps its first member in the legacy `file_id` field. If that first file becomes fully locked, the target gate refuses the entire bundle with **This content has been locked by its owner**. A later member that becomes fully locked is omitted individually from the recipient listing, and a direct request for that member returns **File not found or has been deleted**. Neither case changes the link address. Recipient mail and notifications still describe the original delivery by its total file count.

If no files reach the request, Dosya returns **file_ids array is required**. Selecting 101 or more produces **Maximum 100 files per share link**. These refusals happen without creating the bundle. If all outgoing emails fail after creation, the API reports **Could not send email**; the link record may already exist, so check **Shared** before retrying.

## Expected result

One live URL opens a recipient page containing the reviewed file set under the selected expiry, password, and recipient policy. The Shared area records the delivery as one bundle link rather than one link per file.

## Related guides

- [Create a link](/sharing/create-link)
- [Read link activity](/sharing/link-activity)
