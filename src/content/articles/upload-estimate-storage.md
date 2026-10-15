---
{
  "articleId": "hc-upload-estimate-storage",
  "locale": "en",
  "revision": 5,
  "title": "Estimate storage before a large upload",
  "summary": "Total the source bytes, compare them with workspace free space, and account for versions, trash, concurrent uploads, and workspace storage caps.",
  "category": "uploading",
  "articleSlug": "upload-estimate-storage",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-15; production behavior was not exercised for this revision. Verified against: apps/web/src/components/layout/dashboard-sidebar.tsx; apps/web/src/lib/upload-limits.ts; apps/api/src/pages/api/workspaces/[id]/upload-limits.ts; apps/api/src/lib/quota.ts; apps/api/src/lib/upload/measured-quota.ts.",
  "related": [
    "hc-upload-files",
    "hc-upload-states"
  ],
  "keywords": [
    "upload estimate storage",
    "Upload preparation and preflight",
    "Dosya help",
    "file upload"
  ]
}
---

The workspace switcher shows **free of** total storage, while the sidebar shows **Storage** used and total. The upload preflight also reads a `storage_remaining_bytes` hint. That hint is based on a quota value cached for 60 seconds, so it warns rather than guarantees that a concurrent batch will fit.

The authoritative server gate uses both the account owner's total entitlement across workspaces and any lower workspace storage cap. Trashed files still consume storage until permanently removed, and a same-name upload can add a retained version instead of replacing storage byte-for-byte.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/upload-estimate-storage-help-workflow-2026-10-14.webp" data-light-href="/screenshots/upload-estimate-storage-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/upload-estimate-storage-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/upload-estimate-storage-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/upload-estimate-storage-help-workflow-2026-10-14.webp" alt="Four-step storage estimate map showing source-byte totals, workspace free space, margin for active data, and the workspace-wide Storage per member rule." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Total the sources, verify the target workspace, reserve margin, and interpret a per-member refusal as one workspace-wide setting applied to members. <a class="workflow-map-full" href="/screenshots/upload-estimate-storage-help-workflow-2026-10-14.webp" data-light-href="/screenshots/upload-estimate-storage-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/upload-estimate-storage-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the operating system, select the source files and record their combined byte size; count every file inside folders, not the folder entry alone.
2. Open the Dosya workspace switcher and read its **free of** value for the target workspace; confirm the workspace name before doing any subtraction.
3. Check the sidebar **Storage** used/total display, and investigate a mismatch caused by another active transfer, another workspace using the owner's entitlement, or a workspace cap.
4. Add margin for uploads running in other tabs or devices and for same-name items that will become new versions; trash is still charged until permanent deletion.
5. Open **Uploads**, set the final **Folder**, and add one small representative item. If a later batch exceeds the current hint, Dosya warns **This may not all fit** and reports approximately how far over it is.
6. Let the sample reach **Done**, refresh the workspace storage display, then add the remaining sources and watch each row while the server rechecks measured bytes.

<figure class="help-screenshot"><a href="/screenshots/files-upload-2026-10-10.webp"><img src="/screenshots/files-upload-2026-10-10.webp" alt="Dosya Files view with the Storage used/total meter in the sidebar and the Upload button highlighted." width="1440" height="520" loading="lazy" decoding="async" /></a><figcaption>The Files sidebar exposes workspace storage usage before the highlighted <strong>Upload</strong> action starts a transfer. <a href="/screenshots/files-upload-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The planned source total sits below the workspace's current free-space display with enough margin for concurrent changes, and the test item completes in the intended folder before the large batch proceeds.

A server refusal beginning **You've used ... across all your workspaces** means the owner's account-wide entitlement is binding; empty the trash or upgrade. **This workspace has a N GB storage limit and this doesn't fit** means the workspace cap is lower; empty trash there or ask an owner/admin to raise the cap. A per-member refusal says **You've reached your N GB per-member storage limit**. This is one workspace-wide **Storage per member** setting applied uniformly to members; ask an owner or admin to raise that workspace setting.

## Related guides

- [Uploading files and folders to Dosya](/uploading/files-and-folders)
- [Watch storage-sensitive transfers through each state](/uploading/progress-and-states)
