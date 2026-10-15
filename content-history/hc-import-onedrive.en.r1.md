---
{
  "articleId": "hc-import-onedrive",
  "locale": "en",
  "revision": 1,
  "title": "Importing files and folders from OneDrive",
  "summary": "Connect a Microsoft account, choose OneDrive files or folders, and check the imported copies in the selected Dosya workspace.",
  "category": "integrations",
  "articleSlug": "onedrive",
  "status": "published",
  "lastReviewed": "2026-10-11",
  "verification": "Verified in production on 2026-10-11 with an existing connected personal Microsoft account: root browsing, a successful Retry after a temporary listing error, unsupported Personal Vault handling, one-file submission, a 29 KB PPTX transfer into the selected workspace root, and the completed Files row with Import origin. Reviewed source for connection consent, cancellation and disconnect. The provider OAuth grant screen and a work/school account were not repeated. Production screenshots replace account identifiers and source names for privacy.",
  "related": ["hc-upload-files", "hc-api-key"],
  "keywords": ["OneDrive", "Microsoft", "import", "migration", "Office", "OneNote", "personal account", "work account", "school account", "workspace"]
}
---
Open **Integrations → OneDrive** in the web app, select **Connect OneDrive**, then use **Import from OneDrive** to choose files or folders. Imports from this setup page go to the selected workspace's top level. Check the completed copies in **Files** before treating your migration as finished.

## Before you start

- Sign in to [the Dosya app](https://app.dosya.dev) and select the workspace that should receive the import.
- Have the Microsoft account containing the OneDrive items. The connection is designed for personal and work/school accounts; an organization's sign-in or app policies can still affect completion.
- Your workspace role needs upload permission. Available storage and workspace file-type and size policies also apply to imports.
- Start with a small folder or a few disposable files whose names are not already present at the destination.
- This workflow adds ordinary workspace files. It does not place imports in the Vault, and it does not require a Dosya API key.

## Steps: connect OneDrive

1. **Open the setup page.** Select **Integrations** in the sidebar, then **OneDrive**, or open [OneDrive setup](https://app.dosya.dev/integrations/onedrive).
2. **Check the workspace.** Confirm the selected workspace before importing. The setup page does not include a destination-folder chooser.
3. **Select Connect OneDrive.** Continue through Microsoft's sign-in and connection screens with the intended personal or work/school account. Review the provider's request and complete the connection if it matches your intent.
4. **Check Connected accounts on return.** The account email and Connected time label should appear on the setup page. A successful connection returns you here; it does not start an import by itself.
5. **Connect another account if needed.** Repeat **Connect OneDrive**. Each connected Microsoft account is listed separately.

<figure class="help-screenshot">
  <a href="/screenshots/import-onedrive-setup-2026-10-11.webp">
    <img src="/screenshots/import-onedrive-setup-2026-10-11.webp" alt="OneDrive setup page in the Dosya web app with Connect OneDrive, Connected accounts and Import from OneDrive controls." width="1160" height="800" loading="lazy" decoding="async" />
  </a>
  <figcaption>Use <strong>Connect OneDrive</strong> to link a Microsoft account, then <strong>Import from OneDrive</strong> to choose what to copy. This capture shows the Dosya setup page. <a href="/screenshots/import-onedrive-setup-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: select and import

1. **Open the picker.** Select **Import from OneDrive**, or **Import** beside a connected account to start with that account selected.
2. **Choose the source account when offered.** If more than one Microsoft account is connected, the selector shows their email addresses. Switching accounts clears the current selection.
3. **Browse from Home.** Select a folder's name to open it. Use the breadcrumb buttons to return to a parent folder, and **Load more** when another page of items is available.
4. **Select files or folders with the checkboxes.** Checking a folder selects its whole subtree, including the selected folder itself. Selections remain while you browse other folders. Items marked **Cannot be imported** have disabled checkboxes.
5. **Review the destination footer.** It shows the number selected and **importing into workspace root**. This means the selected workspace's top level, not whichever Dosya folder you last viewed.
6. **Select Import.** The picker closes after the job starts, and **Import started** identifies the source account. Using **Cancel** in the picker before starting abandons the selection without creating a job.

<figure class="help-screenshot">
  <a href="/screenshots/import-onedrive-picker-selected-2026-10-11.webp">
    <img src="/screenshots/import-onedrive-picker-selected-2026-10-11.webp" alt="OneDrive import picker with one PowerPoint file selected and the workspace-root destination shown." width="1429" height="799" loading="lazy" decoding="async" />
  </a>
  <figcaption>Select the items to copy, check the workspace-root destination, then choose <strong>Import</strong>. The disabled row demonstrates an unsupported OneDrive item. Source names were replaced in this production capture. <a href="/screenshots/import-onedrive-picker-selected-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: confirm the result

1. **Check progress.** The setup page shows active OneDrive imports; **Files** shows active cloud imports across providers. Preparation counts can increase as the folder tree is prepared. Transfer progress can show file counts, bytes and, once enough samples exist, speed and an estimated remaining time.
2. **Return when needed.** A started cloud import runs in the background and can continue after the browser tab closes. Reopen the OneDrive setup page or Files to check its current state.
3. **Check the completion message.** **Import complete** can include failed or skipped counts. Review those counts before assuming that every selected item succeeded.
4. **Open Files in the destination workspace.** Check the top level, selected folders and nested structure. Open a few imported copies to check the result, including an Office file if you selected one.

<figure class="help-screenshot">
  <a href="/screenshots/import-onedrive-import-result-2026-10-11.webp">
    <img src="/screenshots/import-onedrive-import-result-2026-10-11.webp" alt="Dosya Files page showing a completed OneDrive PowerPoint test import with its size and Import origin." width="1429" height="799" loading="lazy" decoding="async" />
  </a>
  <figcaption>The completed PowerPoint test copy appears in <strong>Files</strong> with its size and <strong>Import</strong> origin. The source name was replaced in this production capture. <a href="/screenshots/import-onedrive-import-result-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

Selected files appear at the workspace's top level. Selected folders appear there with their nested folder structure. Original items remain in OneDrive. The imported copies do not automatically follow later changes in OneDrive.

Ordinary Word, Excel and PowerPoint files retain their existing file formats. This import does not recreate Microsoft sharing settings, version history or the surrounding Microsoft collaboration workflow. Keep your original copies until you have checked the result.

## Limitations

The current picker browses the connected account's own OneDrive. It does not provide a SharePoint site, Teams library or shared-drive chooser. Do not assume that every item shown elsewhere in Microsoft 365 will appear here.

OneNote notebooks and other package items are unsupported. Items without a recognized downloadable file or folder type are also marked **Cannot be imported**. An unsupported item inside a selected folder can be skipped even though the folder itself was selectable. For material the picker cannot import, export or download an appropriate file through Microsoft when available, then [upload that file to Dosya](/uploading/files-and-folders).

Folders reuse an existing live destination folder with the same name. Two source folders with the same name at the same destination can therefore merge into that one folder. A file with the same destination name as an existing file can fail; the importer does not offer an overwrite or automatic rename choice. Check existing copies before submitting the same selection again.

You can select up to **500 files or folders** in one submission. A selected folder can contain more items; the limit counts the selected starting items, not every nested file. Storage, workspace file policies, Microsoft restrictions and temporary throttling can still prevent individual transfers.

## Cancel, retry or disconnect

Use **Cancel** on an active import's progress card to stop that job. Completed files and created folders remain in Dosya. Cancellation does not undo those copies.

Temporary throttling waits and retries automatically. The picker shows a retry notice for a throttled listing and **Retry** for an ordinary listing error. Transfer items retry ordinary temporary failures automatically, up to three attempts. A failed or cancelled job has no manual **Resume** or **Retry** button in this interface. Correct the cause, check completed files, then start a new selection for the missing items.

Use **Disconnect** beside the account on this setup page or in **Profile → Integrations** to remove the saved connection. Cancel an active import first. Disconnect removes that connection and its import history; completed files remain. Microsoft's own app permissions are managed separately, so do not treat this button as confirmation that Microsoft's grant was revoked.

## Troubleshooting

**The picker says No account connected yet.** Select **Connect an account**, finish the Microsoft connection, and check Connected accounts before trying again.

<figure class="help-screenshot">
  <a href="/screenshots/import-onedrive-connect-2026-10-11.webp">
    <img src="/screenshots/import-onedrive-connect-2026-10-11.webp" alt="Import from OneDrive dialog with No account connected yet and a Connect an account button." width="384" height="258" loading="lazy" decoding="async" />
  </a>
  <figcaption><strong>No account connected yet</strong> means the picker needs a OneDrive connection before it can offer a selection. Use <strong>Connect an account</strong>. This capture does not show Microsoft's sign-in screen or a completed transfer. <a href="/screenshots/import-onedrive-connect-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

**Microsoft sign-in or connection is refused.** Check that you selected the intended account. A work/school organization may have its own app policy; ask its administrator about the displayed Microsoft error. An expired sign-in attempt needs a fresh **Connect OneDrive** attempt. Persistent configuration errors should go to [private support](https://app.dosya.dev/support) with the time and displayed message.

**The account needs reconnecting.** Use **Reconnect** when the picker offers it. A job already failed because its connection expired does not resume automatically after reconnection. Check its completed files before starting another selection.

**Import is unavailable or fails to start.** Select at least one supported item and a workspace. Check upload permission and whether the account is still connected. A start failure keeps the picker open and shows an error, preserving the current selection.

**A OneNote notebook or shared library is missing.** Check the limits above. Repeatedly selecting its parent folder does not make an unsupported item importable. For a missing ordinary file, confirm the account, source folder and any Microsoft download restriction.

**The result is incomplete.** Check failed and skipped counts, storage and workspace policies. Existing filenames and unavailable source items can prevent a transfer. Check the files already present before starting another job.

## Frequently asked questions

### Can I use a personal Microsoft account?

The connection is designed for both personal and work/school accounts. Complete the connection with the account that contains the OneDrive files, and check its email under Connected accounts.

### Do Office files need conversion?

Ordinary Word, Excel and PowerPoint files are imported in their existing file formats. OneNote notebooks are a separate unsupported package type.

### Can I close the tab or resume a cancelled job?

A started import can continue after the tab closes. Cancellation is different: it stops that job, and there is no Resume control. Check completed copies and start a new selection for missing items when appropriate.

### Can I choose a destination folder or preserve Microsoft sharing?

This setup page imports into the selected workspace's root and does not offer a destination-folder chooser. It creates file copies without recreating Microsoft sharing settings. Organize or share completed copies in Dosya separately.

## Related guides

- [Uploading files and folders](/uploading/files-and-folders), for files you downloaded or exported separately.
- [Creating and managing an API key](/developers/api-key), for separate protocol or tool integrations; the built-in OneDrive importer does not need one.
