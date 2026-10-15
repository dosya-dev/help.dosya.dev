---
{
  "articleId": "hc-import-google-drive",
  "locale": "en",
  "revision": 3,
  "title": "Importing files and folders from Google Drive",
  "summary": "Import Google Drive copies into the selected workspace, understand document conversions and exact transfer limits, and recover incomplete jobs without resubmitting successful files.",
  "category": "integrations",
  "articleSlug": "google-drive",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified in production on 2026-10-11 with an existing connected Google account: account selection, root browsing, unsupported-item labels, one-file submission, a 1.3 MB ODT transfer into the selected workspace root, and the completed Files row with Import origin. Reviewed source for connection consent, Google-native export mappings, cancellation, disconnect, shortcuts and limits; the provider OAuth grant screen and Google-native document export were not repeated. Production screenshots replace account identifiers and source names for privacy. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed. Supplemental source review 2026-10-14: src/pages/integration/google-drive.astro; apps/web/src/pages/integrations/google.tsx; apps/web/src/components/cloud-import/provider-picker-dialog.tsx; apps/web/src/components/cloud-import/use-cloud-browser.ts; apps/web/src/components/cloud-import/import-progress-card.tsx; apps/api/src/lib/cloud-import/adapters/google.ts; apps/api/src/lib/cloud-import/adapters/google.unit.test.ts; apps/api/src/lib/cloud-import/constants.ts; apps/api/src/lib/cloud-import/transfer.ts; apps/api/src/lib/cloud-import/durable-object.ts; apps/api/src/lib/cloud-import/tick.ts; apps/api/src/lib/cloud-import/discover-d1.ts; apps/api/src/pages/api/cloud/imports/index.ts; apps/api/src/pages/api/cloud/connect/[provider].ts; apps/api/src/pages/api/cloud/callback/[provider].ts; apps/api/src/pages/api/cloud/accounts/[id].ts; apps/api/src/lib/upload/extension-policy.ts; apps/api/src/lib/quota.ts; apps/api/src/lib/oauth-state.ts. Preserve four production captures and original narrow verification scope; new details source-reviewed, no new production mutation. Official references: https://developers.google.com/workspace/drive/api/reference/rest/v3/files/export; https://support.google.com/drive/answer/9700156?hl=en; https://developers.google.com/identity/protocols/oauth2/scopes#drive.",
  "related": [
    "hc-upload-files",
    "hc-api-key"
  ],
  "keywords": [
    "Google Drive",
    "import",
    "migration",
    "Google Docs",
    "Google Sheets",
    "PDF",
    "XLSX",
    "shared drive",
    "shortcut",
    "workspace"
  ]
}
---
In the web app, open **Integrations → Google Drive**, select **Connect Google Drive**, then use **Import from Google Drive** to choose files or folders. Imports from this setup page go to the selected workspace's top level. Check the completed copies in **Files** before treating your migration as finished.

## Before you start

- Sign in to [the Dosya app](https://app.dosya.dev) and select the workspace that should receive the import.
- Have the Google account containing the items you want to copy. Connecting Drive is a separate step from signing in to Dosya with Google.
- Your workspace role needs upload permission. Available storage and workspace file-type and size policies also apply to imports.
- Start with a small folder or a few disposable files with names that are not already present at the destination.
- This workflow adds ordinary workspace files. It does not place imports in the Vault, and it does not require you to create a Dosya API key.

## Steps: connect Google Drive

1. **Open the setup page.** Select **Integrations** in the sidebar, then **Google Drive**, or open [Google Drive setup](https://app.dosya.dev/integrations/google).
2. **Check the workspace.** Confirm the selected workspace before importing. The setup page does not include a destination-folder chooser.
3. **Select Connect Google Drive.** The requested Drive permission is read-only, with email/profile identity and offline access so background imports can use a refreshed token. Continue through Google's sign-in and connection screens using the intended Google account. Review the provider's request and complete the connection if it matches your intent.
4. **Check Connected accounts on return.** The account's email and Connected time label should appear on the setup page. A successful connection returns you here; it does not start an import by itself.
5. **Connect another account if needed.** Repeat **Connect Google Drive** for another account. Each connected account is listed separately. Connections belong to your Dosya user, so selecting a different workspace does not create another Google connection; choose the destination workspace separately for each import.

<figure class="help-screenshot">
  <a href="/screenshots/import-google-setup-2026-10-11.webp">
    <img src="/screenshots/import-google-setup-2026-10-11.webp" alt="Google Drive setup page in the Dosya web app with Connect Google Drive, Connected accounts and Import from Google Drive controls." width="1160" height="800" loading="lazy" decoding="async" />
  </a>
  <figcaption>Use <strong>Connect Google Drive</strong> to link an account, then <strong>Import from Google Drive</strong> to choose what to copy. This capture shows the Dosya setup page. <a href="/screenshots/import-google-setup-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: select and import

1. **Open the picker.** Select **Import from Google Drive**, or **Import** beside a connected account to start with that account selected.
2. **Choose the source account when offered.** If more than one Google account is connected, the selector shows their email addresses. Switching accounts clears the current selection.
3. **Browse from Home.** Select a folder's name to open it. Use the breadcrumb buttons to return to a parent folder, and **Load more** when another page of items is available. A listing requests up to 100 entries per page; an empty or short page is not a complete directory while another page is offered.
4. **Use the checkboxes to select items.** Checking a folder selects its whole subtree, including the selected folder itself. You can keep selections while browsing other folders. Items marked **Cannot be imported** have disabled checkboxes.
5. **Review Google document conversions.** Supported Google documents show a **will import as** extension. Check the format table below before selecting them.
6. **Check the footer.** It shows the number selected and **importing into workspace root**. This means the selected workspace's top level, not whichever Dosya folder you last viewed.
7. **Select Import.** The picker closes after the job starts, and **Import started** identifies the source account. Closing the picker with **Cancel** before this step abandons the selection without starting a job.

<figure class="help-screenshot">
  <a href="/screenshots/import-google-picker-selected-2026-10-11.webp">
    <img src="/screenshots/import-google-picker-selected-2026-10-11.webp" alt="Google Drive import picker with one item selected and the workspace-root destination shown in the footer." width="1429" height="799" loading="lazy" decoding="async" />
  </a>
  <figcaption>Select files or folders with the checkboxes, then confirm the destination in the footer before choosing <strong>Import</strong>. This production capture replaces the account identifier and source names for privacy. <a href="/screenshots/import-google-picker-selected-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: confirm the result

1. **Check progress.** The setup page shows that provider's active imports; **Files** shows active cloud imports across providers. Preparation counts can grow while the folder tree is being prepared. Transfer progress can show file counts, bytes and, once enough progress samples exist, speed and an estimated remaining time.
2. **Return when needed.** A started cloud import runs in the background, so it can continue after the browser tab closes. Reopen the provider setup page or Files to check its current state.
3. **Check the completion message.** **Import complete** can include failed or skipped counts. It does not establish that every selected item succeeded when those counts are present.
4. **Open Files in the destination workspace.** Check the top level, folder structure, filenames and the converted document formats. Open a few imported copies and check that they match your intended result.

<figure class="help-screenshot">
  <a href="/screenshots/import-google-import-result-2026-10-11.webp">
    <img src="/screenshots/import-google-import-result-2026-10-11.webp" alt="Dosya Files page showing a completed Google Drive test import with its size and Import origin." width="1429" height="799" loading="lazy" decoding="async" />
  </a>
  <figcaption>The completed test copy appears in <strong>Files</strong> at the workspace root. Its source name was replaced in this production capture; the size and <strong>Import</strong> origin are unchanged. <a href="/screenshots/import-google-import-result-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

Selected files appear at the workspace's top level. Selected folders appear there with their nested folder structure. Original items remain in Google Drive. The imported copies do not automatically follow later changes in Drive.

The import creates new files; it does not recreate Google sharing settings, document revision history or the surrounding Google collaboration workflow. Keep your original copies until you have checked the result.

## Google documents, shortcuts and limits

The current importer chooses these export formats automatically:

<div class="help-table" role="region" aria-label="Google document import formats; scroll horizontally on narrow screens" tabindex="0">
<table>
<thead><tr><th scope="col">Google item</th><th scope="col">Imported format</th></tr></thead>
<tbody>
<tr><th scope="row">Google Docs</th><td>PDF (.pdf)</td></tr>
<tr><th scope="row">Google Sheets</th><td>Excel workbook (.xlsx)</td></tr>
<tr><th scope="row">Google Slides</th><td>PDF (.pdf)</td></tr>
<tr><th scope="row">Google Drawings</th><td>PDF (.pdf)</td></tr>
</tbody>
</table>
</div>

There is no export-format selector in the import dialog. Other Google-native types, including Google Forms, are unsupported. Ordinary uploaded files retain their existing file format.

The Drive connection requests read-only access, so this import cannot delete or edit your Google originals. Google limits the exported result from the document-export endpoint to **10 MB**. This is a Google document-export limit, not a general 10 MB limit for ordinary Drive files. If a document export fails, try downloading an appropriate format through Google and then [uploading it to Dosya](/uploading/files-and-folders). See [Google's export endpoint documentation](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/export).

The picker starts from your Drive root. It has no separate **Shared with me** or **Shared drives** selector. The importer supports a reachable shortcut's target, including a folder, but the original target must still be available to the connected Google account. A shortcut in My Drive can make a shared item reachable; it does not change the original item's Google permissions. Follow [Google's shortcut guidance](https://support.google.com/drive/answer/9700156?hl=en) and confirm the item appears in the picker before relying on it. A broken shortcut may be unavailable or fail during import.

Folders reuse an existing live destination folder with the same name. Two source folders with the same name at the same destination can therefore merge into that one folder. A file with the same destination name as an existing file can fail; the importer does not offer an overwrite or automatic rename choice. Use a clear destination and check results before submitting the same selection again.

You can select up to **500 files or folders** in one submission. A selected folder can contain more items; the limit counts the selected starting items, not every nested file. Storage, file policies, Google restrictions and temporary service throttling can still prevent individual transfers. The importer checks workspace file extensions and maximum size against the final exported filename, and checks actual transferred bytes against available storage. Ordinary known-size files use ranged transfer from 10 MiB upward; streamed exports or unreported-size content have a 32 MiB safety bound in the importer, in addition to Google’s export limit. These are transfer-path limits, not a 32 MiB cap on every Drive file.

## Cancel, retry or disconnect

Use **Cancel** on an active import's progress card to stop that job. Completed files and created folders remain in Dosya; cancellation does not undo the imported copies. Check Files before starting another job.

Temporary throttling waits and retries automatically. A Google 429 uses its Retry-After delay, or 30 seconds when none is supplied; recognized Google quota-related 403 responses also wait 30 seconds. These delays do not consume an item’s three ordinary failure attempts. The picker shows a retry notice for a throttled listing and **Retry** for an ordinary listing error. Transfer items also retry ordinary temporary failures automatically, up to three attempts. File-type/size policy refusals and backup-lock errors fail the affected item immediately. Lost workspace membership stops the job. Progress and completion have no fixed timing guarantee: folder discovery, provider delays, file bytes and destination checks determine duration. A failed or cancelled job has no manual **Resume** or **Retry** button in this interface. Correct the cause, check completed files, then start a new selection for the missing items.

To remove the connection, use **Disconnect** beside the account on this setup page or in **Profile → Integrations**. Cancel an active import first. Disconnect removes the saved connection and its import history; completed files remain. Deleting completed copies afterward uses Dosya’s ordinary file/Trash controls and does not remove the originals from Drive. Permanent purge of a Dosya copy is irreversible. Provider-side app permissions are managed separately in Google, so do not treat this button as confirmation that Google's grant was revoked.

## Troubleshooting

**The picker says No account connected yet.** Select **Connect an account**, finish the Google connection, and check Connected accounts before trying again. A Google sign-in to Dosya alone does not complete this connection.

<figure class="help-screenshot">
  <a href="/screenshots/import-google-connect-2026-10-11.webp">
    <img src="/screenshots/import-google-connect-2026-10-11.webp" alt="Import from Google Drive dialog with No account connected yet and a Connect an account button." width="384" height="258" loading="lazy" decoding="async" />
  </a>
  <figcaption><strong>No account connected yet</strong> means the picker needs a Drive connection before it can offer a selection. Use <strong>Connect an account</strong>. This capture does not show Google's sign-in screen or a completed transfer. <a href="/screenshots/import-google-connect-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

**The connection returns an error.** An expired sign-in attempt needs a fresh **Connect Google Drive** attempt. If you declined the connection, try again only when you intend to complete it. For a repeated provider or saving error, record the displayed message and time for [private support](https://app.dosya.dev/support).

**The account needs reconnecting.** A message such as **Google Drive access was revoked or is insufficient for download. Please reconnect.** means provider authentication needs attention. Use **Reconnect** when the picker offers it. An import already failed because its connection expired does not resume automatically after reconnection; check its completed files before starting another selection.

**Import is unavailable or fails to start.** **Select at least one file or folder**, **Select at most 500 items at once**, **No upload permission** and **Not a member of this workspace** identify selection or access refusals. Select at least one supported item and a workspace. Check upload permission, whether the account is still connected and any error message. A start failure keeps the picker open so you can correct the issue without losing the current selection.

**An item is missing or skipped.** Confirm the source account, folder and any Google shortcut target. Check the supported-type table and Google download/export restrictions. Items found inside a selected folder can be skipped even though the parent folder was selectable.

**The result is incomplete.** Check failed and skipped counts, storage and workspace policies. Existing filenames and failed Google exports are possible causes. Do not resubmit a whole large folder without checking the copies already present.

## Frequently asked questions

### Can I import directly into a chosen Dosya folder?

The current Google setup page imports into the selected workspace's root. It does not offer a destination-folder chooser. Organize completed copies in Files afterward, subject to your role's permissions.

### Can I close the tab during an import?

Yes, after **Import started**. The background job continues independently of that tab. Return to the setup page or Files to check completion and any failures.

### Will Google Docs stay editable as Google Docs?

The current importer creates PDFs for Docs, Slides and Drawings, and XLSX workbooks for Sheets. It does not create a Google-native editing session in Dosya or offer other export formats in this picker.

### Does cancelling or disconnecting remove completed copies?

No. Completed files remain. Cancel stops an active job; Disconnect removes the saved account connection and import history. Check the destination separately if you want to organize or remove its copies.

## Related guides

- [Uploading files and folders](/uploading/files-and-folders), for files you downloaded or exported separately.
- [API key management](/developers/api-key), for separate protocol or tool integrations; the built-in Drive importer does not need one.
