---
{
  "articleId": "hc-storage-usage",
  "locale": "en",
  "revision": 2,
  "title": "Understanding storage usage and failed quota checks",
  "summary": "Read the active workspace’s storage total, account for retained versions and trash, and choose a safe cleanup or capacity action.",
  "category": "uploading",
  "articleSlug": "storage-usage",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14 against apps/web/src/pages/dashboard.tsx, apps/web/src/components/layout/dashboard-sidebar.tsx, apps/web/src/pages/settings.tsx, apps/api/src/lib/quota.ts, apps/api/src/pages/api/workspaces/[id]/upload-limits.ts, apps/api/src/pages/api/internal/files/purge-trash.ts, apps/api/src/pages/api/internal/files/trim-versions.ts, apps/api/src/lib/plans.ts, and their quota and retention tests. Screenshots use an isolated fictional 5 GB fixture; production billing data was not accessed.",
  "related": ["hc-free-plan", "hc-large-upload", "hc-upload-files", "hc-version-history", "hc-restore-deleted"],
  "keywords": ["storage full", "storage usage", "quota exceeded", "trash storage", "version storage", "workspace limit", "member storage limit", "free space"]
}
---
The storage indicator describes the active workspace, while its owner's entitlement is one pool shared by every workspace that person owns. The server accepts new bytes only when both the account pool and the active workspace have enough room. A **Storage per member** limit can narrow that answer again.

Every retained file version counts at its full stored size. Items in **Deleted** also consume quota so they can be restored. Automatic trash retention is **7 days** for an effectively Free owner and **30 days** for a paid owner; manual **Delete permanently** ends recovery earlier.

## Before you start

- Confirm the active workspace name. Switching workspaces changes the sidebar and dashboard figures you are viewing.
- Keep a copy of anything you may need. Permanent deletion and expired retention cannot be undone through the restore workflow.
- Record the exact upload error before clearing its queue row.
- Check **Billing** for the current plan, add-ons and grants. The source fallback for Free is **5 GB**, but the live catalog and account-specific entitlements determine the amount shown to you.
- Ask an owner or admin about **Hard limits** when you cannot view workspace settings.

## Steps: inspect the active workspace

1. Read **Storage** at the bottom of the sidebar. It shows used and effective total capacity for the active workspace.
2. Open **Dashboard** and find **Storage used** and **Storage breakdown**.
3. Note any explicit amount **in trash**. Deleted items remain restorable because they still occupy storage.
4. Compare the category bars with the total. The bars group current and trashed bytes by type; retained historical versions can make the total exceed the sum you estimate from current filenames.
5. If the workspace belongs to a team, review **Team usage** and any per-member storage policy. Your own visible files may not be the only use of the pool.

<figure class="help-screenshot">
  <a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Dosya Dashboard for a fictional Storage review workspace showing 5 GB used, 1 GB in trash and category breakdown bars." width="1160" height="900" loading="lazy" decoding="async" /></a>
  <figcaption>This controlled example is full at 5 GB and explicitly identifies 1 GB in trash. Its retained older archive version accounts for usage beyond the two current files. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: identify which limit refused the upload

1. Read the upload row's complete error in **Uploads → Upload queue**.
2. If it says you have used the plan capacity **across all your workspaces**, check every workspace you own. A nearly empty active workspace can still be blocked by account-wide usage elsewhere.
3. If it names **this workspace** and a storage limit, ask an owner or admin to review **Settings → Hard limits → Total workspace storage cap**.
4. If it names a member limit, review **Storage per member** and which member uploaded the retained data.
5. If it names a maximum file size or blocked type, storage cleanup will not resolve that different policy. Follow the stated rule.
6. After correcting the applicable limit, retry the failed row once while the original file is still available.

<figure class="help-screenshot">
  <a href="/screenshots/storage-quota-error-2026-10-12.webp"><img src="/screenshots/storage-quota-error-2026-10-12.webp" alt="Dosya Upload queue showing an exact account-wide storage refusal for a fictional new-export ZIP in a full 5 GB account." width="1160" height="900" loading="lazy" decoding="async" /></a>
  <figcaption>The error names the account-wide limit: <strong>5 GB of 5 GB across all your workspaces</strong>. Read the current message because the suggested plan and values can change. <a href="/screenshots/storage-quota-error-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: free storage safely

1. **Review current files first.** Download or otherwise preserve anything required by your retention policy.
2. **Review version history.** Open a file's menu and choose **Version history**. The workspace keeps at most **10 versions per file** by default unless its setting uses another positive cap or unlimited mode. Free-plan versions older than **7 days** are also eligible for pruning, while the newest version is always retained.
3. **Review Deleted.** Open **Files → Deleted**. Ordinary Delete moved these items to trash and did not free their bytes.
4. **Restore mistakes before purging.** A restore does not need extra quota because the trashed bytes never left the storage count.
5. **Permanently delete only verified items.** Use **Delete permanently** for selected trash items when immediate removal is intended. The purge removes the stored versions and releases their measured bytes; it cannot be reversed through Dosya.
6. Refresh the workspace figures after cleanup settles. If policy requires keeping the data, add capacity or have an owner adjust a tighter workspace allocation instead of deleting it.

<figure class="help-screenshot">
  <a href="/screenshots/file-versions-2026-10-10.webp"><img src="/screenshots/file-versions-2026-10-10.webp" alt="Dosya Version history dialog listing retained versions of a sample file with their version numbers, sizes and actions." width="400" height="560" loading="lazy" decoding="async" /></a>
  <figcaption>Review retained versions before cleanup. The newest file and every older version still inside policy consume storage. <a href="/screenshots/file-versions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

You can reconcile the active workspace's current files, retained versions and trash with the storage total, then identify whether the upload was blocked by account capacity, a workspace cap, a member limit or a different file policy.

After a successful permanent purge or capacity change, the relevant headroom increases and a permitted upload can start. A normal download can remain available while uploads are blocked because reading an existing file does not add stored bytes.

## Limits and accounting behavior

- The owner's plan entitlement is account-wide across workspaces they own. An explicit workspace cap limits that workspace further; it does not create extra plan storage or reserve bytes from sibling workspaces.
- Every retained version counts. Uploading a new version adds the full size of that version, rather than only the difference from the previous version.
- Soft-deleted files and folders count until permanent purge. This guarantees that restoring them does not need capacity that may have been reused meanwhile.
- Scheduled retention removes Free-plan versions older than 7 days while always preserving the newest. Trash becomes eligible after 7 days on Free or 30 days on paid plans; the daily job does not promise deletion at an exact minute.
- Workspace storage hints and quota rows can be cached for up to **60 seconds**. Refresh after a purge completes, but do not create duplicate cleanup actions during that window.
- Cached previews and transfer fragments are implementation details. Use the product's storage figure and exact refusal rather than estimating from local filenames alone.
- Storage capacity is separate from daily transfer or request allowances. Free plan protocol and share-link limits can pause transfer without saying the storage is full.

## Troubleshooting

**The dashboard total is larger than my current files.** Check retained versions, Deleted, other team members and other file categories. Historical versions and trash can explain bytes that are not visible in the main live-file list.

**I deleted files but storage did not fall.** Ordinary **Delete** moves them to Deleted, where they still count. Use **Delete permanently** only after verification, then allow up to the quota cache window before assuming the counter is stale.

**The active workspace looks empty but the error says all workspaces.** The owner's plan is shared across owned workspaces. Switch through those workspaces and inspect their storage, versions and trash.

**I can download but cannot upload.** A download reads an existing object; an upload needs new capacity and passes workspace policy checks. Read the upload refusal for the limiting condition.

**The file is smaller than the displayed free space but is refused.** Check the account-wide headroom, workspace total cap, per-member storage, maximum file size and file-type rules. The smallest applicable headroom wins.

**Permanent deletion completed but the value still looks wrong.** Refresh once after the operation settles and confirm the active workspace. Record the time, workspace, deleted items and current figures, then [contact support](/troubleshooting/contact-support) without sending private file contents.

**The refusal says the workspace has a limit.** The exact form is `This workspace has a N GB storage limit and this doesn't fit.` An owner or a role holding **Change total storage cap** can raise that value only within the owner's unallocated entitlement.

**The message mentions all your workspaces.** That wording identifies the owner account pool. Deleting data from the active workspace helps, but bytes in another owned workspace, its versions, and its Deleted area also consume the same entitlement.

## Frequently asked questions

### Do old versions count toward storage?

Yes. Every retained version counts by its full stored size until version pruning or permanent file purge removes it.

### Do deleted files count toward storage?

Yes while they remain in Deleted. Their bytes are released when the items are permanently purged, either by an authorized action or the applicable retention process.

### Why can I download files but not upload more?

Downloading reads data already stored. Uploading adds bytes and is refused when the account, workspace, member or file policy would be exceeded.

### Does restoring a deleted file need free space?

No additional storage reservation is needed for the restore because the trashed file continued counting while it was deleted.

### When does deleted data stop counting?

Immediately after an authorized permanent purge updates the measured usage, or when the scheduled retention job purges an eligible item. Moving a file to Deleted alone does not reduce the count.

## Related guides

- [Understanding Free-plan allowances](/account/free-plan-allowances)
- [Uploading large files with available storage](/uploading/large-files)
- [Uploading files and folders](/uploading/files-and-folders)
- [Using version history](/files/version-history)
- [Restoring a deleted file or folder](/files/restore-deleted)
