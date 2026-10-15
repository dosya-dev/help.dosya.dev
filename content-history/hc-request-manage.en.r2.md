---
{
  "articleId": "hc-request-manage",
  "locale": "en",
  "revision": 2,
  "title": "Edit or close a file request",
  "summary": "Change a file request’s instructions, password, deadline, destination or limits, then revoke it safely without losing files already received.",
  "category": "sharing",
  "articleSlug": "manage-file-request",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/web/src/pages/file-request-detail.tsx, apps/web/src/pages/file-requests.tsx, apps/web/src/components/file-request-edit-dialog.tsx, apps/api/src/pages/api/file-requests/[id].ts, apps/api/src/lib/access/manage-own.ts, apps/api/src/lib/upload-request/guard.ts, apps/api/src/lib/notifications/requests.ts and focused request route tests. Verified owner labels, role gates, editable fields, deadline notification behavior, destination containment/hidden/full-lock refusals, live max-files accounting including reserved in-progress slots and the distinct counter effects of owner Trash deletion versus public permanent withdrawal, terminal revocation, the rendered closed-page heading versus its API error, one-hour account-scoped personal unlocks, retained uploads and existing multipart sessions preserving their recorded destination. Existing edit and revoked-state captures were inspected and remain accurate.",
  "related": [
    "hc-file-request",
    "hc-request-limits",
    "hc-request-change-destination",
    "hc-request-recipients",
    "hc-request-troubleshoot"
  ],
  "keywords": [
    "edit file request settings",
    "close client upload request",
    "revoke file request link",
    "change file request destination",
    "extend file request expiry",
    "stop client uploads"
  ]
}
---
Open **File requests**, choose the request, and use **Edit** for future submissions or **Revoke** to close the public upload URL permanently. Received files are normal workspace files: neither action moves or deletes them.

## Before you start

- Check the status shown beside the request: **Active**, **Expired** or **Revoked**.
- Wait for any transfer you intend to keep. Every multipart step rechecks the request, so revoking or expiring it can stop an unfinished large upload.
- Note the current destination and the request’s server-side upload counter. **Max files** includes completed submissions plus slots reserved by uploads still in progress, so the visible received-file rows can be lower than the enforced count.
- Roles with permission to manage every share can edit colleagues’ requests. A role limited to its own shares can manage only requests it created. A Viewer normally sees neither action.
- Changing the deadline, password, destination or upload rules also requires **upload files** permission because those settings delegate upload rights to outside visitors. A creator who later loses that permission may still change the title or message, or revoke their request.

## Steps

### Edit the request

1. Open **File requests**, select the request title, and verify the target workspace.
2. Select **Edit**. A revoked request has no Edit action.
3. Change the fields that should apply to later attempts:
   - **Title (optional)** and **Message (optional)** replace the public instructions.
   - **Password** accepts a new value of at least eight characters. Leave **Leave blank to keep** empty to preserve the current secret, or select **Remove password** to make the link unprotected.
   - **Expires** offers **Keep current**, **Never**, **1 day**, **7 days**, **30 days** and **90 days** as applicable. Changing the deadline sends a deadline-change notification to recorded recipients; other edits do not send that notification.
   - **Upload destination** sends newly started uploads to the selected folder. A multipart upload already initialized before the edit keeps its original session destination and can finish there; earlier completed submissions also stay where they landed.
   - **Advanced options** contains **Allowed extensions**, **Max file size (MB)** and **Max files**. Clearing a value removes that request-specific restriction, while the owner plan and workspace total-storage cap still apply.
4. Select **Save changes** and wait for **Request updated — Your changes have been saved.**
5. Reload the public URL in a private window. Confirm its visible instructions and, when appropriate, stage a harmless file that meets the new rules.

<figure class="help-screenshot">
  <a href="/screenshots/request-edit-controls-2026-10-12.webp">
    <img src="/screenshots/request-edit-controls-2026-10-12.webp" alt="Edit request dialog for changing client instructions, password, deadline, upload destination, allowed extensions, file-size limit and file-count limit." width="1440" height="1000" loading="lazy" decoding="async" />
  </a>
  <figcaption>The owner’s <strong>Edit request</strong> dialog changes instructions and acceptance rules for subsequent client attempts; leaving the existing password field empty keeps that password. <a href="/screenshots/request-edit-controls-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

### Close the upload URL

1. Return to the active request’s detail header and select **Revoke** beside **Edit**.
2. Wait until its badge reads **Revoked**. Recorded recipients are notified that the request ended; email delivery can finish after the status change.
3. Paste the request URL into a private window. The page must render **This request was closed** instead of the upload controls. Its metadata request returns **This file request has been revoked**, which the public page translates into that visitor-facing heading.
4. Review the request’s upload table and destination folder. Keep, move, rename or delete received files separately according to your retention needs. An owner-side **Delete** moves a file to **Deleted** and does not return a slot to this request’s **Max files** counter.

<figure class="help-screenshot">
  <a href="/screenshots/request-revoked-owner-2026-10-12.webp">
    <img src="/screenshots/request-revoked-owner-2026-10-12.webp" alt="Owner file-request detail showing the permanent Revoked status while previously received client files remain listed." width="1440" height="1000" loading="lazy" decoding="async" />
  </a>
  <figcaption>A closed request keeps its received-file ledger but removes its editing and revocation controls. The same public token cannot be reactivated. <a href="/screenshots/request-revoked-owner-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

An edited request reloads with the saved instructions and acceptance rules. Newly started uploads use its current destination, while an already initialized multipart session can still complete in the folder recorded when that session began. A closed request shows **Revoked**, refuses every new upload attempt and leaves previously received workspace files available to the owner.

## What each change does

| Change | Effect on later use | Existing material |
| --- | --- | --- |
| Title or message | New page loads show the revised instructions | Does not rename received files or folders |
| Password | New unlocks require the replacement, or no password after removal | An already issued password grant can remain valid for up to 30 minutes |
| Expiry | The public route opens or closes at the new time | Does not alter files already stored |
| Destination | Newly started uploads land in the new folder | Completed files and already initialized multipart sessions retain their recorded destination |
| Allowed extensions or size | Subsequent upload checks use the revised values | Completed files are not revalidated |
| Max files | Remaining capacity uses the server counter, including completed uploads and in-progress reserved slots | Lowering it does not delete submissions; owner-side Trash deletion does not decrement the counter |
| Revoke | Every future upload hop is refused immediately | Received files and owner-side records remain |

An expired request is still editable. Set **Expires** to a future preset or **Never** to accept uploads again. The web interface shows **Revoke** only while the request is active; reopening an expired request first makes that control available again.

## Destination locks and visibility

The destination must be live, inside a folder-confined member’s allowed subtree, and visible to the editor. A hidden or missing folder is reported as **Folder not found in workspace**. A configured **Full lock** on the destination or an ancestor returns `folder_locked` and blocks the change.

Unlocking that folder for your own browser does not authorize a public upload channel. Personal folder unlock grants are scoped to the signed-in account and last one hour. They are deliberately ignored when a request is created, moved or used. An authorized owner must remove or change the configured lock, or choose another destination.

## Troubleshooting

**Edit or Revoke is missing.** Confirm the request is yours or that your role can manage all shares. Revoked requests cannot be edited. Expired requests retain **Edit**, but the web app withholds **Revoke** until the deadline is moved forward.

**Saving access rules says you lack upload permission.** Your role may still manage wording or revoke the request, but it cannot extend public upload rights. Ask an Owner or Admin with the appropriate custom-role permissions.

**The public page shows old instructions.** Reload the URL. A page already open can display cached wording, while every upload call still enforces current server rules.

**No file slots remain after lowering Max files.** The server counter includes completed submissions and slots reserved by active uploads. Raise the maximum, clear the field to remove that request-specific cap, or create a new request. Deleting a received file from **Files** only moves it to **Deleted** and does not restore a request slot. Only the original public visitor’s **Remove** action decrements the counter, and that withdrawal permanently purges the file without Dosya Trash recovery.

**Files now appear in two destinations.** This is expected after moving the request. Use the upload ledger to identify submissions, then organize the old and new folders without assuming the edit migrated anything.

**A client was uploading when the request closed.** Do not assume partial progress created a usable file. Check the owner ledger and destination. If no completed receipt exists, create a new request when the client should retry.

## Frequently asked questions

### Can a revoked request be reopened?

No. Revocation is irreversible for that token. Create another request and send its new URL.

### Does closing a request free workspace storage?

No. An owner’s ordinary **Delete** moves stored files to **Deleted**, where they continue to use workspace allocation until retention or a later purge removes them. A public uploader’s **Remove** action is different: it permanently purges that submission and decrements the request counter immediately.

### Does editing the password encrypt previous uploads?

No. The password controls entry to the public request page. It does not retroactively encrypt workspace files.

## Related guides

- [Create a client file request](/sharing/file-request)
- [Set request file types, sizes and counts](/sharing/request-limits)
- [Change a request destination](/sharing/request-change-destination)
- [Invite uploaders and track submissions](/sharing/request-recipients)
- [Troubleshoot a rejected request upload](/sharing/troubleshoot-file-request)
