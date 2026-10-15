---
{"articleId":"hc-cloud-import-destination","locale":"en","revision":1,"title":"Choose a cloud-import destination","summary":"Select provider files and folders, choose the correct Dosya workspace folder, and verify the destination before starting a cloud import.","category":"integrations","articleSlug":"import-destination","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed provider selection, multi-item selection and destination-folder controls against the local current cloud-import picker on 2026-10-12. The screenshot uses isolated sample folders.","related":["hc-cloud-import-connect","hc-cloud-import-progress","hc-import-google-drive","hc-organize-files"],"keywords":["import destination","cloud import folder","select import files","Google Drive destination","OneDrive destination","Dropbox destination"]}
---
An import has two locations to check: the selected provider items and the destination in the active Dosya workspace. Confirm both before starting because switching the visible workspace later does not relocate a running job.

## Before you start

- Connect the provider account and select the intended Dosya workspace.
- Create the destination folder first when you need a specific structure.
- Check available storage and your upload permission.
- Avoid importing the same source selection twice unless duplicate copies are intentional.

## Steps: select source items and destination

1. Open the provider integration and select **Import** for the correct connected account.
2. Browse the provider folders and select the required files or folders.
3. Review the selection count and remove any unintended item.
4. Choose the Dosya destination folder. Confirm its name and active workspace.
5. Start the import and wait for the job confirmation.
6. Open the import progress view rather than starting a second job when the picker closes.

<figure class="help-screenshot"><a href="/screenshots/import-google-picker-selected-2026-10-11.webp"><img src="/screenshots/import-google-picker-selected-2026-10-11.webp" alt="Dosya cloud-import picker with representative Google Drive files selected and controls for confirming the import destination." width="1429" height="799" loading="lazy" decoding="async" /></a><figcaption>Review every selected provider item and the Dosya destination before starting the import. <a href="/screenshots/import-google-picker-selected-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Dosya creates an import job for the selected items and records the chosen workspace folder as its destination. Completed items appear there with their imported names and supported folder structure.

## Limits and destination rules

- The destination must be writable by your current role.
- Changing the active workspace after starting does not safely move the job.
- Provider shortcuts, shared items and unsupported item types can behave differently from ordinary files and folders.
- An existing item with the same name may create a collision or duplicate; inspect the result before deleting either copy.

## Troubleshooting

**The destination folder is missing.** Confirm the active workspace and your access to that folder. Create it in **Files** first if needed.

**The Import button remains disabled.** Select at least one supported source item and a valid writable destination.

**The wrong destination was chosen.** Let the current result finish or cancel it when the job offers cancellation. Verify completed files before moving or deleting them.

**A shared provider item is absent.** Confirm the connected provider account can open it directly and that the provider exposes it through the authorized connection.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Monitor cloud-import progress](/integrations/import-progress)
- [Import from Google Drive](/integrations/google-drive)
- [Organize files after import](/files/organize-files)
