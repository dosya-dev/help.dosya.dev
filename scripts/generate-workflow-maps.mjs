import {readdir,readFile,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {chromium} from '@playwright/test';
import sharp from 'sharp';

const root=resolve(import.meta.dirname,'..');
const articleDir=resolve(root,'src/content/articles');
const screenshotDir=resolve(root,'public/screenshots');
const only=process.argv.find(arg=>arg.startsWith('--only='))?.slice(7);
const categoryTitles={uploading:'File uploads and downloads',sharing:'File sharing',files:'Files and folders',account:'Account and security',workspaces:'Workspaces',developers:'Developers',desktop:'Desktop app',extension:'Browser extension',integrations:'Integrations',troubleshooting:'Troubleshooting'};
const stepOverrides={
  'text-editor-open-file':[
    {index:0,text:'Open the intended text file from Files, confirm its full filename in the preview.'},
    {index:2,text:'Choose the latest or historical preview version, keep the intended version selected.'},
    {index:3,text:'Select Edit to load that selected version, wait for CodeMirror to open.'},
    {index:4,text:'Compare the selected preview text in CodeMirror, save only after the content matches.'},
  ],
  'text-editor-unavailable':[
    {index:0,text:'Confirm the file uses a supported text type, compare its extension with the editor list.'},
    {index:1,text:'Keep the file within the editor size limit, use download for an oversized file.'},
    {index:2,text:'Check that protection is not full lock, unlocking does not enable Edit.'},
    {index:3,text:'Read Editor unavailable — Could not open the text editor, then refresh and retry once.'},
  ],
  'text-editor-version-conflict':[
    {index:0,text:'Stop before replacing either version, preserve both sources for comparison.'},
    {index:1,text:'Copy the unsaved draft somewhere safe, keep it outside the stale editor.'},
    {index:2,text:'Reopen Latest from the file preview, treat it as the current server version.'},
    {index:4,text:'Merge the draft into Latest, save the combined text once.'},
  ],
  'vault-clear-device-cache':[
    {index:0,text:'Wait for Uploaded or Upload failed, do not clear state during a transfer.'},
    {index:1,text:'Choose Lock in the Vault header, drop the current in-memory session.'},
    {index:3,text:'Clear Dosya site data in browser settings, expect to sign in again.'},
    {index:5,text:'Download a known file from the expected Space, confirm the fresh session decrypts it.'},
  ],
  'vault-lost-passphrase-plan':[
    {index:0,text:'Check the saved passphrase and recovery key, keep the offline copy available.'},
    {index:2,text:'Choose Use recovery key, paste the key and select Unlock.'},
    {index:3,text:'Open a Space and download a known file, confirm that it decrypts.'},
    {index:5,text:'Destroy the Vault identity only as a last resort, other shared members keep access.'},
  ],
  'automation-rotate-api-key':[
    {index:0,text:'Open Settings and expand the automation key, record every current restriction.'},
    {index:1,text:'Choose Duplicate settings, keep or narrow the copied permissions and limits.'},
    {index:3,text:'Replace the secret in the automation, run one scope-matched operation.'},
    {index:5,text:'Revoke the old key, prove the same automation works only with the replacement.'},
  ],
  'cloud-import-browse-provider':[
    {index:0,text:'Open Import files for the intended provider, confirm the picker title.'},
    {index:1,text:'Match the provider account email, reset to Home after any account switch.'},
    {index:3,text:'Select only importable rows, note every provider-document conversion label.'},
    {index:5,text:'Reconcile the selected count, confirm the destination is workspace root.'},
  ],
  'cloud-import-cancel-before-transfer':[
    {index:0,text:'Confirm no Import started toast exists, keep the create request unsent.'},
    {index:2,text:'Choose Cancel in the picker, do not press Import while it closes.'},
    {index:3,text:'Reopen the provider picker, verify Home and 0 selected.'},
    {index:5,text:'If Import started appeared, use active-job cancellation instead.'},
  ],
  'cloud-import-cancel':[
    {index:0,text:'Find the active import by provider and source account email.'},
    {index:1,text:'Read Preparing import or Importing counts before canceling.'},
    {index:2,text:'Choose Cancel once, wait for the request to resolve.'},
    {index:4,text:'Open workspace root, keep files that completed before cancellation.'},
  ],
  'cloud-import-choose-provider-account':[
    {index:0,text:'Review Connected accounts, match the intended provider email.'},
    {index:2,text:'Choose the same email in the picker account selector.'},
    {index:3,text:'Confirm the switch returned to Home and cleared prior selections.'},
    {index:5,text:'Start import, verify the receipt names the reviewed email.'},
  ],
  'connect-cloud-account':[
    {index:0,text:'Choose Connect account for the intended cloud provider.'},
    {index:1,text:'Verify the provider email and requested read access before approval.'},
    {index:2,text:'Find the same email under Connected accounts as the saved receipt.'},
    {index:4,text:'Open Import for that account, prove the picker lists a known item.'},
  ],
  'import-destination':[
    {index:0,text:'Switch to the receiving Dosya workspace before opening cloud import.'},
    {index:1,text:'Confirm membership and upload permission for that workspace.'},
    {index:3,text:'Require the picker footer to say importing into workspace root.'},
    {index:5,text:'After completion, locate the imported root item in the active workspace.'},
  ],
  'cloud-import-disconnect-after-verify':[
    {index:0,text:'Wait for a terminal import result, never disconnect an active transfer.'},
    {index:1,text:'Verify folder names, item counts and one file before disconnecting.'},
    {index:3,text:'Open Settings and match the exact provider account email.'},
    {index:5,text:'Open the verified Dosya copy again after account removal.'},
  ],
  'disconnect-cloud-account':[
    {index:0,text:'Check for an active import tied to the account email.'},
    {index:1,text:'Finish or cancel that job, wait for its terminal toast.'},
    {index:3,text:'Choose Disconnect once, wait while the control is disabled.'},
    {index:4,text:'Require Account disconnected and confirm the account row disappears.'},
  ],
  'cloud-import-duplicate-names':[
    {index:0,text:'Choose a provider folder containing a name already used in Dosya.'},
    {index:1,text:'Record both files before import, compare size or content.'},
    {index:3,text:'Read the terminal failed count for the duplicate name.'},
    {index:4,text:'Open the existing Dosya file, prove the import left it unchanged.'},
  ],
  'import-progress':[
    {index:0,text:'Identify the progress card by provider and source account email.'},
    {index:1,text:'During discovery, read Preparing import and files found so far.'},
    {index:2,text:'During transfer, follow file counts, bytes, speed and time remaining.'},
    {index:4,text:'Read the terminal toast, preserve complete failed and skipped counts.'},
  ],
  'cloud-import-reconnect-expired':[
    {index:0,text:'Confirm This account needs to be reconnected before you can import.'},
    {index:1,text:'Choose Reconnect, begin a fresh provider authorization.'},
    {index:3,text:'Verify the same email appears once under Connected accounts.'},
    {index:5,text:'Browse one known item, prove the refreshed token works end to end.'},
  ],
  'cloud-import-retry-failed-items':[
    {index:0,text:'Record the prior failed and skipped counts before the toast disappears.'},
    {index:1,text:'Fix storage policy name-conflict or provider-access causes first.'},
    {index:3,text:'Select only the failed or absent sources, never the original folder.'},
    {index:5,text:'Verify recovered files, confirm completed originals were not reselected.'},
  ],
  'cloud-import-review-duplicates':[
    {index:0,text:'Save the terminal failed count before leaving the import result.'},
    {index:2,text:'Compare the provider children with the merged Dosya folder.'},
    {index:3,text:'Inspect every same-named destination file for size date and content.'},
    {index:5,text:'Rename deliberately, import only the missing source and verify it.'},
  ],
  'cloud-import-review-picker-selection':[
    {index:0,text:'Confirm the provider email and begin from the Home breadcrumb.'},
    {index:1,text:'Load every page, note unsupported and converted provider rows.'},
    {index:3,text:'Uncheck mistakes, watch the selected count update immediately.'},
    {index:5,text:'Import only when email roots and workspace-root destination agree.'},
  ],
  'cloud-import-test-folder':[
    {index:0,text:'Choose a small non-confidential provider folder with a known count.'},
    {index:1,text:'Switch to the target workspace, confirm upload permission.'},
    {index:3,text:'Select the folder root, require 1 selected and workspace root.'},
    {index:5,text:'Traverse the Dosya copy, open representative files before scaling up.'},
  ],
  'cloud-import-verify-folders':[
    {index:0,text:'Record root middle and deepest source-folder checkpoints.'},
    {index:1,text:'Save the terminal completed skipped and failed totals.'},
    {index:3,text:'Compare all three Dosya checkpoints with source names and conversions.'},
    {index:4,text:'Open one file at each checkpoint, verify transferred contents.'},
  ],
  'lightroom-archive-xmp-sidecars':[
    {index:0,text:'Choose dosya Archive originals, confirm the intended workspace.'},
    {index:1,text:'Set Folder in dosya, keep Include XMP sidecar files checked.'},
    {index:2,text:'Choose skip rules, require identical content for existing XMP files.'},
    {index:5,text:'Verify each original and current XMP in the mirrored Dosya folder.'},
  ],
  'lightroom-catalog-busy':[
    {index:0,text:'Read the full catalog-busy message, identify the deferred operation.'},
    {index:1,text:'Finish the Lightroom task holding catalog write access.'},
    {index:3,text:'Retry selection sync, fetch current gallery choices again.'},
    {index:5,text:'Verify flags or gallery registration, confirm the queue clears.'},
  ],
  'lightroom-choose-workspace':[
    {index:0,text:'Choose Connect in Lightroom, keep the matching code visible.'},
    {index:1,text:'Sign in normally, compare the browser and Lightroom codes.'},
    {index:2,text:'Choose the exact Publish galleries to workspace value.'},
    {index:4,text:'After Allow, return to Lightroom or close the tab while polling continues.'},
  ],
  'lightroom-client-selection-collections':[
    {index:0,text:'Select the target Dosya collection, limit the sync to the intended gallery.'},
    {index:2,text:'Read Client selections synced, reconcile marked and cleared counts.'},
    {index:4,text:'Compare the client collection, match its photos to the live choices.'},
    {index:5,text:'Read aggregate photo metadata, submitted means any selecting client submitted.'},
  ],
  'lightroom-collect-client-favourites':[
    {index:0,text:'Open the published gallery privately, follow the recipient access flow.'},
    {index:2,text:'Favourite a known photo set, add a short client note if offered.'},
    {index:4,text:'Sync selections from dosya, target the matching published collection.'},
    {index:5,text:'Open the per-client collection, compare it with the test favourites.'},
  ],
  'lightroom-configure-publish-service':[
    {index:0,text:'Open the dosya.dev publish service, confirm its user and workspace.'},
    {index:2,text:'Choose the removal policy, keep the file or move it to Dosya trash.'},
    {index:4,text:'Set Uploads at once from 1 to 4, use 3 as the default.'},
    {index:5,text:'Save JPEG output settings, verify quality 85 and long edge 2560.'},
  ],
  'lightroom-connect-catalog':[
    {index:0,text:'Choose Connect in Plug-in Manager, start a ten-minute request.'},
    {index:2,text:'Sign in as the account holder, avoid impersonated or key sessions.'},
    {index:4,text:'Keep Lightroom polling for approval, allow three seconds between checks.'},
    {index:5,text:'Read Connected as and workspace, run Check connection once.'},
  ],
  'lightroom-connection-browser-not-open':[
    {index:0,text:'Keep the connect dialog open, copy its XXXX-XXXX code by hand.'},
    {index:2,text:'Sign in on the official route, preserve the code query value.'},
    {index:4,text:'Return to the polling dialog, wait for Connected to dosya.'},
    {index:5,text:'Replace a ten-minute expired request, never reuse its old code.'},
  ],
  'lightroom-connection-code-expired':[
    {index:0,text:'Close the expired request, note that its old code is terminal.'},
    {index:2,text:'Match the new browser code, ignore any earlier approval tab.'},
    {index:4,text:'Wait for Connected to dosya, do not reuse a consumed request.'},
    {index:5,text:'Run Check connection after approval, confirm the new workspace credential.'},
  ],
  'lightroom-copy-gallery-link':[
    {index:0,text:'Select one Dosya published collection, avoid a regular collection.'},
    {index:2,text:'Read Gallery link copied, confirm the HTTPS URL in the receipt.'},
    {index:4,text:'Test the URL in a private browser, verify the intended gallery.'},
    {index:5,text:'Send the validated address, replace it after any relink notice.'},
  ],
  'lightroom-create-published-collection':[
    {index:0,text:'Create a new published Gallery, start from the Client gallery default.'},
    {index:2,text:'Choose access settings before publish, set expiry from 0 to 365.'},
    {index:4,text:'Review New Photos to Publish, confirm order and intended cover.'},
    {index:5,text:'Pause before Publish, recheck folder path and client access.'},
  ],
  'lightroom-delete-published-collection':[
    {index:0,text:'Copy the existing gallery link, record its folder and collection.'},
    {index:2,text:'Read The dosya gallery stays online, then confirm deletion.'},
    {index:4,text:'Open Shared → By me, match the saved gallery link and revoke it.'},
    {index:5,text:'Remove retained cloud files separately, reclaim storage if needed.'},
  ],
  'lightroom-edit-gallery-options':[
    {index:0,text:'Open Edit Gallery for the target collection, verify its live link.'},
    {index:2,text:'Choose full downloads or view only, decide metadata stripping.'},
    {index:4,text:'Set or remove the password, use at least eight trimmed characters.'},
    {index:5,text:'Save and test the client link, read any settings update error.'},
  ],
  'lightroom-enable-client-favourites':[
    {index:0,text:'Open Edit Gallery for the intended collection, confirm its title.'},
    {index:2,text:'Save the favourites setting, check for an update refusal.'},
    {index:4,text:'Choose optional Pick or color marks, apply them during sync.'},
    {index:5,text:'Run Sync client selections, verify the per-client collection.'},
  ],
  'lightroom-export-create-gallery':[
    {index:0,text:'Choose the dosya.dev export service, verify the target workspace.'},
    {index:2,text:'Enable Create a client gallery, enter a distinctive title.'},
    {index:4,text:'Export the rendered photos, allow suffixes for folder conflicts.'},
    {index:5,text:'Open Your dosya link, verify title and complete photo count.'},
  ],
  'lightroom-export-to-dosya':[
    {index:0,text:'Open Export with dosya.dev, verify the connected workspace.'},
    {index:2,text:'Choose plain folder upload, request a share link only if needed.'},
    {index:4,text:'Watch the live Uploading X of N count, keep Lightroom open through completion.'},
    {index:5,text:'Reconcile the upload receipt, verify cloud filenames and sizes.'},
  ],
  'lightroom-gallery-collection-sets':[
    {index:0,text:'Confirm the service Folder in dosya, use Lightroom as the default root.'},
    {index:2,text:'Keep collection-set nesting at four levels, avoid deeper paths.'},
    {index:4,text:'Publish the child Gallery, let Dosya sanitize unsafe segments.'},
    {index:5,text:'Verify the full folder hierarchy, note any collision suffix.'},
  ],
  'lightroom-gallery-downloads':[
    {index:0,text:'Open Edit Gallery for the target collection, note its client link.'},
    {index:2,text:'Choose metadata stripping, apply it only to eligible downloads.'},
    {index:4,text:'Test the gallery privately, distinguish preview from download.'},
    {index:5,text:'Read any settings update error, retry only after fixing its cause.'},
  ],
  'lightroom-gallery-expiry':[
    {index:0,text:'Open the collection Edit Gallery dialog, record the current share URL before changes.'},
    {index:2,text:'Save the selected expiry value in Lightroom, update only when the setting changed.'},
    {index:4,text:'Record a policy-shortened date, treat it as the real deadline.'},
    {index:5,text:'Verify the effective expiry in Dosya, replace any relinked URL.'},
  ],
  'lightroom-gallery-missing-online':[
    {index:0,text:'Open dosya gallery from Plug-in Extras; record the publish-first cue or dead URL.'},
    {index:2,text:'Inspect the Dosya gallery record; distinguish missing gallery data from a dead share.'},
    {index:3,text:'Publish once to recreate missing gallery data, relink an existing dead share when needed.'},
    {index:5,text:'Copy or open the current URL, test it privately before sending.'},
  ],
  'lightroom-gallery-password':[
    {index:0,text:'Open the collection Edit Gallery dialog, locate the collection password controls.'},
    {index:2,text:'Correct short or mismatched entries, keep eight trimmed characters.'},
    {index:4,text:'Test the password in a private browser, avoid a cached session.'},
    {index:5,text:'Share the secret separately, verify removal in a fresh session.'},
  ],
  'lightroom-publish-gallery':[
    {index:0,text:'Review both Lightroom publish queues, confirm the workspace.'},
    {index:2,text:'Click Publish and watch progress, allow 1 to 4 uploads in flight.'},
    {index:4,text:'Reconcile published and retry counts, keep failed photos queued.'},
    {index:5,text:'Open the gallery privately, compare order cover and access.'},
  ],
  'lightroom-publish-network-failure':[
    {index:0,text:'Record published failed and unattempted counts, keep exact reasons.'},
    {index:2,text:'Leave completed photos published, do not remove and add them again.'},
    {index:4,text:'Inspect both retry queues, identify failed and unattempted photos.'},
    {index:5,text:'Publish again after recovery, reduce concurrency if instability persists.'},
  ],
  'lightroom-remove-gallery-photo':[
    {index:0,text:'Open the intended Dosya published collection, confirm the correct client gallery.'},
    {index:2,text:'Remove the published photo, leave Lightroom to queue the pending removal.'},
    {index:4,text:'Open the gallery while signed out, confirm the photo is no longer visible.'},
    {index:5,text:'Check Dosya Files or Trash, match the saved removal policy and any warning.'},
  ],
  'lightroom-republish-edits':[
    {index:0,text:'Open the collection, confirm the edit is under Modified Photos to Re-Publish.'},
    {index:2,text:'Select the modified photo and choose Publish, wait for rendered work to finish.'},
    {index:4,text:'Open the gallery, confirm one item remains in its previous position.'},
    {index:5,text:'Read the dosya summary, keep failed or unattempted photos queued.'},
  ],
  'lightroom-resume-archive-upload':[
    {index:0,text:'Keep the original path, size and modification time unchanged after interruption.'},
    {index:2,text:'Restart dosya Archive within 23 idle hours, reuse already accepted parts.'},
    {index:4,text:'Read archived, skipped, failed and not-attempted counts in the summary.'},
    {index:5,text:'Confirm exact filename and byte size, treat Size check failed as a refusal.'},
  ],
  'lightroom-review-connections':[
    {index:1,text:'Match each Computer name to a Lightroom Classic installation you control.'},
    {index:2,text:'Read connection age, distinguish API-key creation from catalog age.'},
    {index:3,text:'Compare Last used with recent publishing, investigate Never carefully.'},
    {index:5,text:'Record the exact stale row, match its computer name before immediate revocation.'},
  ],
  'lightroom-review-gallery-status':[
    {index:0,text:'Switch to the receiving workspace, open Integrations and Lightroom Classic.'},
    {index:1,text:'Read the gallery photo count, compare it with the published collection.'},
    {index:3,text:'Interpret Live, Password protected, expired, revoked or removed exactly.'},
    {index:5,text:'Open the link while signed out, compare title and visible photos.'},
  ],
  'lightroom-revoke-connection':[
    {index:1,text:'Match Computer, Connected and Last used to the catalog that must stop.'},
    {index:2,text:'Open that row actions menu, choose Revoke for that connection only.'},
    {index:3,text:'Read the revoke warning, note that published galleries stay online.'},
    {index:4,text:'Confirm Revoke once, wait for Connection revoked and row removal.'},
  ],
  'lightroom-selected-by-field':[
    {index:0,text:'Publish favourites, collect a known pick and sync client selections.'},
    {index:2,text:'Expose plug-in metadata, choose Selected by (dosya) in the Library filter.'},
    {index:4,text:'Read aggregate submitted or in progress, use per-client collections for identity.'},
    {index:5,text:'Deselect a photo and resync, confirm names and collection membership clear.'},
  ],
  'lightroom-set-gallery-cover':[
    {index:0,text:'Select the intended Dosya published collection in the Library module.'},
    {index:2,text:'Target one already-published photo, not an unpublished local image.'},
    {index:3,text:'Choose Library, Plug-in Extras, Set as gallery cover.'},
    {index:4,text:'Separate Gallery cover updated from the unpublished-photo Publish first error.'},
  ],
  'lightroom-sync-client-selections':[
    {index:0,text:'Choose optional Pick or color-label changes in publish-service settings.'},
    {index:2,text:'Choose Library, Plug-in Extras, Sync client selections from dosya.'},
    {index:4,text:'Read gallery, client, selected and cleared counts in the sync summary.'},
    {index:5,text:'Inspect per-client collections and Selected by metadata on known photos.'},
  ],
  'n8n-create-share-link-node':[
    {index:0,text:'Add dosya.dev Share Link Create, select the tested API credential.'},
    {index:1,text:'Choose File or Folder, map its stable identifier from an earlier node.'},
    {index:3,text:'Set expiry and View Only, use zero days for the workspace default.'},
    {index:5,text:'Open the returned URL while signed out, verify the intended resource.'},
  ],
  'n8n-create-share-link':[
    {index:0,text:'Map one non-confidential file or folder identifier from the prior node.'},
    {index:2,text:'Configure access code, expiry and View Only for the real recipient.'},
    {index:4,text:'Run one manual test, remember that it creates a real active link.'},
    {index:5,text:'Verify the URL while signed out, activate only after the result matches.'},
  ],
  'n8n-handle-dosya-node-error':[
    {index:0,text:'Record node, item, HTTP code and message, redact keys and public URLs.'},
    {index:2,text:'For 403, act on the exact scope, anchor, role or workspace refusal.'},
    {index:4,text:'For 429, honor Retry-After and the three-attempt, 30-second boundary.'},
    {index:5,text:'Replay only when the operation is idempotent, never replay share creation blindly.'},
  ],
  'n8n-list-files-node':[
    {index:0,text:'Choose dosya.dev File Get Many, select the intended workspace.'},
    {index:2,text:'Keep Return All off for a bounded test, set Limit to at least one.'},
    {index:4,text:'Include subfolders only when downstream logic expects folder records.'},
    {index:5,text:'Execute once, compare representative identifiers and metadata with Dosya.'},
  ],
  'n8n-test-dosya-credential':[
    {index:0,text:'Create a named API key for this n8n instance in Dosya Profile.'},
    {index:2,text:'Generate the key, copy the complete one-time secret directly into n8n.'},
    {index:3,text:'Create dosya.dev API credentials, paste the key and test the connection.'},
    {index:5,text:'Open a Workspace list, confirm the expected workspace before saving.'},
  ],
  'rclone-check-transfer':[
    {index:0,text:'Preserve the exact source and destination, including All or an anchored root.'},
    {index:2,text:'Run rclone check with download, compare the remote bytes read-only.'},
    {index:4,text:'Read every mismatch, capture the comparison process status immediately.'},
    {index:5,text:'Verify one downloaded file, open it before removing any local source.'},
  ],
  'rclone-create-dedicated-remote':[
    {index:0,text:'Create a job-specific API key, choose Read only or Full access deliberately.'},
    {index:2,text:'Copy the complete WebDAV mount URL, including its path and trailing slash.'},
    {index:3,text:'Run rclone config, select webdav vendor other, user email and hidden password.'},
    {index:5,text:'Run rclone lsf on the remote, verify ordinary or anchored root contents.'},
  ],
  'rclone-limit-transfer-concurrency':[
    {index:1,text:'Preview the same paths with dry-run, confirm source and destination direction.'},
    {index:2,text:'Start with one transfer and two checkers, increase only after a clean run.'},
    {index:3,text:'Disable multi-thread streams when one download must use one range stream.'},
    {index:4,text:'Preserve HTTP 429 and Retry-After, do not treat concurrency as a quota bypass.'},
  ],
  'rclone-retry-timeout':[
    {index:0,text:'Capture one verbose failure in a protected log, preserve the first HTTP status.'},
    {index:1,text:'Repair HTTP 401 403 404 and 423 refusals, correct credentials permissions path or locks.'},
    {index:2,text:'Honor Retry-After for 429, remove overlap and reduce parallel requests.'},
    {index:4,text:'List the destination before replaying a write, check for an existing version.'},
  ],
  'rclone-schedule-copy-job':[
    {index:0,text:'Run the exact copy manually with dry-run, then test one harmless file.'},
    {index:2,text:'Put absolute rclone, source, remote, config and log paths in a protected script.'},
    {index:4,text:'Create cron or Task Scheduler under the intended account, prevent overlap.'},
    {index:5,text:'Trigger once now, capture status and log, verify one downloaded sample.'},
  ],
  'rclone-sync-dry-run':[
    {index:0,text:'Run rclone config and choose dosya, use the S3 gateway only when dosya is absent.'},
    {index:2,text:'Save recursive source and destination listings, confirm the exact mirror direction.'},
    {index:3,text:'Run sync with dry-run and verbose output, inspect every planned copy replacement and deletion.'},
    {index:5,text:'Repeat the preview after changes, remove dry-run only after the second review.'},
  ],
  'rclone-verify-exit-status':[
    {index:0,text:'Run the copy with a durable log, keep source and destination explicit.'},
    {index:1,text:'Capture the immediate POSIX or PowerShell process status before another command.'},
    {index:4,text:'When copy status is zero, run a separate downloaded-byte comparison.'},
    {index:5,text:'Report success only when both statuses are zero and destination bytes match.'},
  ],
  'rclone-write-safe-job-logs':[
    {index:0,text:'Review the dedicated key’s boundaries, confirm workspace folder and protocol scope.'},
    {index:2,text:'Run a harmless lsf check with finite timeouts, record rclone version and exit status.'},
    {index:4,text:'Redact keys signed URLs and sensitive paths, preserve timing and error text.'},
    {index:5,text:'Search the final log for authentication secrets, retain useful counts and status.'},
  ],
  'remote-download-address-not-allowed':[
    {index:0,text:'Inspect the rejected URL and redirects, record scheme host port and final address.'},
    {index:2,text:'Remove local and private destinations, require public HTTPS on port 443.'},
    {index:4,text:'Submit the public file URL once, choose Fetch file and await the toast.'},
    {index:5,text:'Require Download started as the receipt, match a new Queued row.'},
  ],
  'remote-download-cancel':[
    {index:0,text:'Match the active row by filename and start time, confirm the current workspace.'},
    {index:2,text:'Choose the row’s X while its tooltip says Cancel download, click only once.'},
    {index:4,text:'For Cancelled verify the destination, require that no partial file was registered.'},
    {index:5,text:'For Done keep or delete the destination file, dismissal removes only history.'},
  ],
  'remote-download-destination':[
    {index:0,text:'Switch to the receiving workspace before entry, confirm it should own downloaded bytes.'},
    {index:2,text:'Use Choose folder and select the destination, confirm its name beside the URL field.'},
    {index:3,text:'Compare the workspace and selected folder, submit only when both are correct.'},
    {index:5,text:'Open the destination after Done, compare stored byte size with the source.'},
  ],
  'remote-download-direct-url':[
    {index:0,text:'Open the candidate URL without provider cookies, confirm it returns file bytes.'},
    {index:2,text:'Inspect each redirect in the chain, require public HTTPS and port 443.'},
    {index:3,text:'Check the final response size headers, require total Content-Range or Content-Length.'},
    {index:5,text:'Compare the queued filename and size, match them to the provider file.'},
  ],
  'remote-download-errors':[
    {index:0,text:'Separate a startup toast from a job failure, a rejected create has no job row.'},
    {index:2,text:'Check size and validators for a resumable source, require ranges and a strong ETag.'},
    {index:4,text:'Repair the retryable origin or network cause, create a new job after the fix.'},
    {index:5,text:'Verify Done and the destination bytes, dismiss history only after the file check.'},
  ],
  'remote-download-quota-locked':[
    {index:0,text:'Compare destination free space with job size, allow for concurrent uploads.'},
    {index:2,text:'Choose outside any live locked backup tree, locked folders reject registration.'},
    {index:4,text:'Create a new job after fixing capacity or lock, failed rows cannot resume.'},
    {index:5,text:'Wait through Finalizing and require Done, verify the complete stored byte size.'},
  ],
  'remote-download-source-changed':[
    {index:0,text:'Record expected size and current progress, keep the failed row as evidence.'},
    {index:2,text:'Obtain a URL for one immutable revision, avoid a mutable latest-file link.'},
    {index:4,text:'Start a fresh transfer from byte zero, changed-source partials cannot resume.'},
    {index:5,text:'Compare stored length with the final source, clean up only after a byte match.'},
  ],
  'remote-download-unknown-size':[
    {index:0,text:'Inspect the final response after redirects, note status and size headers.'},
    {index:1,text:'For 206 require a positive total Content-Range, an asterisk total is unknown.'},
    {index:2,text:'For 200 require a positive Content-Length, zero or missing size is rejected.'},
    {index:5,text:'Submit once and inspect the Queued row, require a real total byte count.'},
  ],
  'rotate-protocol-key':[
    {index:0,text:'Duplicate the old key after reviewing restrictions, preserve required protocol boundaries.'},
    {index:2,text:'Copy the replacement secret before closing, store it in the client vault.'},
    {index:4,text:'Move every client to the new credential, retest a scope-matched read or write.'},
    {index:5,text:'Revoke the old key after migration proof, confirm the retired credential is refused.'},
  ],
  's3-correct-endpoint-region':[
    {index:0,text:'Set the endpoint to https://api.dosya.dev/s3, preserve the /s3 base path.'},
    {index:1,text:'Use published value us-east-1, another consistently signed region is accepted.'},
    {index:2,text:'Enable path-style bucket addressing, send /s3/{workspace-id}/{key}.'},
    {index:5,text:'List one permitted prefix after correction, verify returned object keys.'},
  ],
  's3-endpoint-region':[
    {index:0,text:'Enable S3 in the API key settings, require the S3 gateway restriction.'},
    {index:1,text:'Copy the access ID and one-time secret, save both before closing the dialog.'},
    {index:2,text:'Configure endpoint /s3 and us-east-1, select path-style addressing.'},
    {index:4,text:'List a permitted key prefix, require both API scope and member role.'},
  ],
  's3-list-prefixes':[
    {index:0,text:'Use the exact workspace ID as the bucket, do not substitute its display name.'},
    {index:1,text:'List with slash delimiter and page limit, request no more than 1,000 keys.'},
    {index:3,text:'Narrow to a child prefix with exact case, keep its trailing slash.'},
    {index:4,text:'Follow continuation tokens page by page, stop when IsTruncated is false.'},
  ],
  's3-path-style-troubleshoot':[
    {index:0,text:'Inspect the request path for /s3 and workspace ID, preserve both path segments.'},
    {index:1,text:'Replace an AWS or bare API endpoint, use https://api.dosya.dev/s3.'},
    {index:2,text:'Turn on path-style addressing in the client, keep the bucket inside the request path.'},
    {index:4,text:'Retry a shallow list request, capture the exact S3 status and error code.'},
  ],
  's3-resolve-prefix-denied':[
    {index:0,text:'Match the bucket to the key’s pinned workspace, use its exact wks_… workspace ID.'},
    {index:1,text:'Resolve the requested key under its folder anchor, keep the key relative to the anchor.'},
    {index:3,text:'Use read or full key scope for listing, the member role must also permit read.'},
    {index:5,text:'Duplicate settings only for wider access, never broaden the old key in place.'},
  ],
  's3-rotate-access-key-safely':[
    {index:0,text:'Duplicate the old API key restrictions, preserve workspace folder scope and limits.'},
    {index:2,text:'Enable S3 on the replacement and generate it, save the access ID and one-time secret.'},
    {index:4,text:'Migrate every S3 client to the new key, prove a scoped request succeeds.'},
    {index:5,text:'Revoke the retired key after migration, require its access ID to be refused.'},
  ],
  's3-upload-object':[
    {index:0,text:'Record the test file size and object key, choose an overwrite-safe destination.'},
    {index:2,text:'Upload once with secrets outside shell history, address the bucket by workspace ID.'},
    {index:3,text:'Require HTTP 200 from PutObject, retain the returned ETag as the receipt.'},
    {index:4,text:'Issue HEAD for the same key, compare the stored size and ETag.'},
  ],
  's3-verify-large-transfer':[
    {index:0,text:'Set multipart cutoff to 64Mi in the rclone profile, force the tested multipart path.'},
    {index:2,text:'Keep part numbers within 1–10,000, keep each part at or below 5 GiB.'},
    {index:4,text:'Complete only after every part ETag exists, otherwise abort the upload.'},
    {index:5,text:'HEAD the completed object and compare length, require source byte count and ETag.'},
  ],
  'sftp-disconnect-safely':[
    {index:0,text:'Wait for every queued transfer to finish, keep the final close result visible.'},
    {index:2,text:'Close remote editors and file handles, use the client\'s normal disconnect command.'},
    {index:4,text:'Remove the saved dos_ credential from this device, leave unrelated system logins intact.'},
    {index:5,text:'Revoke the dedicated key when access must end, reconnect after the 60-second cache window.'},
  ],
  'sftp-download-file':[
    {index:0,text:'Record the remote path and listed byte size, keep its workspace and folder together.'},
    {index:1,text:'Download into a new local pathname, avoid confusing an older partial copy.'},
    {index:3,text:'Compare the final byte count with the listing, calculate SHA-256 against trusted bytes.'},
    {index:4,text:'Resume only an unchanged remote download, restart after a name size or version change.'},
  ],
  'sftp-filezilla-connect':[
    {index:0,text:'Create a FileZilla SFTP site for port 2222, keep the API key out of labels.'},
    {index:2,text:'Inspect the SSH host-key prompt before authentication, compare through a trusted channel.'},
    {index:4,text:'Open one workspace listed at the remote root, confirm the role allows SFTP there.'},
    {index:5,text:'Transfer one harmless known sample, verify its name and byte size in Dosya Files.'},
  ],
  'sftp-fix-restricted-folder':[
    {index:0,text:'Inspect the failing key\'s reach and protocols, record restrictions without exposing its secret.'},
    {index:1,text:'Identify any folder anchor on the credential, stop retrying it through SFTP.'},
    {index:2,text:'Create an SFTP key pinned to the workspace, leave folder and allowed-IP restrictions empty.'},
    {index:5,text:'Test the intended workspace path and revoke the old key, keep the replacement narrowly scoped.'},
  ],
  'sftp-host-key-warning':[
    {index:0,text:'Cancel before accepting or authenticating, record the host port algorithm and fingerprint.'},
    {index:1,text:'Require sftp.dosya.dev on port 2222, reject saved profiles aimed elsewhere.'},
    {index:3,text:'Obtain the current fingerprint through a separate trusted channel, compare every character.'},
    {index:4,text:'Accept only an exact trusted match, keep mismatched sessions closed and credentials unsent.'},
  ],
  'sftp-resolve-authentication-failure':[
    {index:0,text:'Require SFTP password authentication at port 2222, disable public-key-only login.'},
    {index:1,text:'Match the exact API-key owner email and active key, preserve the secret outside logs.'},
    {index:2,text:'Remove incompatible folder or IP restrictions, keep SFTP and the intended workspace allowed.'},
    {index:4,text:'Stop after repeated credential failures, wait through the full 15-minute address ban.'},
  ],
  'sftp-retry-interrupted-transfer':[
    {index:0,text:'Classify the failed transfer direction and visible sizes, do not press Resume yet.'},
    {index:1,text:'Resume only an unchanged remote download, restart after any remote state change.'},
    {index:3,text:'Inspect Dosya before replaying an upload, restart incomplete writes from byte zero.'},
    {index:4,text:'Wait for the restarted upload\'s CLOSE result, verify the downloaded bytes afterward.'},
  ],
  'sftp-upload-file':[
    {index:0,text:'Choose an existing writable Dosya folder, confirm the workspace before selecting a file.'},
    {index:1,text:'Keep the source within the active SFTP file limit, account for lower policy and quota caps.'},
    {index:2,text:'Upload under a unique name from byte zero, never use append or resume.'},
    {index:3,text:'Wait beyond the progress counter for CLOSE, preserve any final refusal message.'},
  ],
  'sftp-verify-host-key-change':[
    {index:0,text:'Cancel the changed-key connection before authentication, record both endpoint and fingerprint.'},
    {index:2,text:'Request the production fingerprint separately, ask whether rotation was planned.'},
    {index:3,text:'Compare algorithm and fingerprint character for character, treat any difference as failure.'},
    {index:4,text:'Replace only the verified host-and-port record, keep every unrelated trust entry intact.'},
  ],
  'webdav-clear-stale-credentials':[
    {index:0,text:'Finish writes and disconnect the affected mount, close its authenticated client session.'},
    {index:1,text:'Remove only the stale api.dosya.dev credential, keep unrelated system logins intact.'},
    {index:3,text:'Confirm the replacement key permits WebDAV and this workspace, match its owner email.'},
    {index:4,text:'Reconnect with the labelled endpoint and full API key, never use the account password.'},
  ],
  'webdav-correct-workspace-endpoint':[
    {index:0,text:'Copy the labelled WebDAV endpoint, include the full URL and trailing slash.'},
    {index:1,text:'Match the ws_ identifier to the intended workspace, treat the final label as cosmetic.'},
    {index:2,text:'Disconnect the old mount and replace its saved URL, keep credentials separate.'},
    {index:4,text:'Open the remounted root and inspect its expected collections, distinguish anchored mounts.'},
  ],
  'webdav-diagnose-read-only':[
    {index:0,text:'Capture one rejected WebDAV action and exact status, identify the verb and target path.'},
    {index:1,text:'Match API-key scope to the requested operation, require Full access for MOVE and DELETE.'},
    {index:3,text:'Repeat the test in All or the anchored real tree, avoid read-only smart views.'},
    {index:4,text:'Inspect the target and ancestors for product locks, unlock through the owning Dosya flow.'},
  ],
  'webdav-lock-permission-errors':[
    {index:0,text:'Stop automatic retries and capture the WebDAV status, redact authorization and API keys.'},
    {index:1,text:'Read the exact 403 response body, repair only the named permission or policy.'},
    {index:2,text:'Refresh after a 412 precondition failure, reconcile the changed ETag or existing name.'},
    {index:3,text:'Resolve a 423 lock through the content\'s Dosya control, never bypass it with UNLOCK.'},
  ],
  'webdav-refresh-stale-listing':[
    {index:0,text:'Verify the current item path in Dosya Files, record its exact workspace and folder.'},
    {index:1,text:'Open the matching WebDAV location under All, avoid comparing a flat smart view.'},
    {index:3,text:'Wait through the 60-second listing-cache backstop, refresh the exact folder again.'},
    {index:5,text:'Inspect PROPFIND when entries remain missing, recognize the 25,000-item truncation header.'},
  ],
  'webdav-remount-safely':[
    {index:0,text:'Pause sync and close files opened from the mount, prevent background saves during unmount.'},
    {index:1,text:'Wait for every transfer to finish and verify recent writes, preserve ambiguous local sources.'},
    {index:3,text:'Unmount through the normal client or operating-system action, resolve any busy-file warning.'},
    {index:5,text:'Reconnect once to the verified workspace ID, check a known file and recent write.'},
  ],
  'webdav-rename-move':[
    {index:0,text:'Require Full access and role permissions, separate rename move and overwrite.'},
    {index:1,text:'Choose an unused destination name and record both paths, avoid accidental overwrite semantics.'},
    {index:3,text:'Perform one WebDAV MOVE inside the mounted workspace, wait for its final status.'},
    {index:4,text:'Refresh source and destination folders after MOVE, confirm exactly one final item.'},
  ],
  'webdav-transfer-files':[
    {index:0,text:'Open a writable location under All or the anchor, choose a uniquely named local sample.'},
    {index:1,text:'Upload once and wait for the final PUT response, respect size quota and concurrency gates.'},
    {index:2,text:'Compare the committed name size and optional checksum, preserve any mismatch response.'},
    {index:3,text:'Download a known remote file to a new local name, wait for complete ranged bytes.'},
  ],
  'wordpress-backup-failed':[
    {index:0,text:'Open the dosya Backup page, read the exact failed-run headline.'},
    {index:1,text:'Choose View log, separate archive failure from upload failure.'},
    {index:2,text:'Correct the logged failure cause, preserve the last good backup.'},
    {index:5,text:'Retry the same scope once, require a completed row badge.'},
  ],
  'wordpress-backup-protection-window':[
    {index:0,text:'Find the stored backup row, match its created time and note.'},
    {index:1,text:'Confirm a dosya storage badge, exclude local-only rows.'},
    {index:2,text:'Read the folder-lock deadline, keep site-key route limits separate.'},
    {index:5,text:'Separate local wp-admin Delete, it does not remove the locked cloud folder.'},
  ],
  'wordpress-backup-retention':[
    {index:0,text:'Read Keep on this server, record the local count from 1 to 30.'},
    {index:1,text:'Read Retention on the dosya card, treat it as the remote window.'},
    {index:3,text:'Complete a successful backup, let local pruning run afterward.'},
    {index:5,text:'Read an automatic full restart, wp-admin has no force-full control.'},
  ],
  'wordpress-connect-workspace':[
    {index:1,text:'Choose Connect to dosya in wp-admin, start from the WordPress dosya tab.'},
    {index:2,text:'Select from every workspace membership, expect permission checks on Allow.'},
    {index:3,text:'Review the confined site-folder grant, choose Allow once.'},
    {index:5,text:'Confirm Folder Retention and Protection, run one test backup.'},
  ],
  'wordpress-copy-detected-warning':[
    {index:0,text:'Record Copy detected check the site, preserve the row URL and time.'},
    {index:1,text:'Identify original migration or staging clone, keep both URLs distinct.'},
    {index:3,text:'Disconnect the copied credential, retain its existing cloud backups.'},
    {index:5,text:'Verify the intended site row, require a separate backup folder.'},
  ],
  'wordpress-full-vs-incremental':[
    {index:0,text:'Compare Type Contents Size and Stored, use two completed rows.'},
    {index:1,text:'Read incremental new bytes, separate them from restore-set size.'},
    {index:3,text:'Keep the prior chain and local volumes, preserve every dependency.'},
    {index:5,text:'Read the dependent-delete refusal, count the newer dependent backups.'},
  ],
  'wordpress-plugin-update':[
    {index:0,text:'Record Schedule and connection facts, keep a pre-update receipt.'},
    {index:2,text:'Install the official plugin package, preserve existing data.'},
    {index:4,text:'Reopen dosya Backup, compare the saved schedule and workspace.'},
    {index:5,text:'Run one database backup, inspect its badge and log.'},
  ],
  'wordpress-reconnect-site':[
    {index:0,text:'Identify unreadable or revoked state, preserve the old folder details.'},
    {index:2,text:'Choose Connect again in wp-admin, approve the intended workspace.'},
    {index:4,text:'Confirm the fresh connected card, record its new site folder.'},
    {index:5,text:'Run one manual test backup, require an off-site storage badge.'},
  ],
  'wordpress-site-limit':[
    {index:0,text:'Read the active-site count, compare it with the plan cap.'},
    {index:2,text:'Match the unused row, verify URL status and last backup.'},
    {index:3,text:'Disconnect only the confirmed site, keep its stored backups.'},
    {index:5,text:'Connect the intended site, require the count to increase once.'},
  ],
  'wordpress-status-load-error':[
    {index:0,text:'Copy the account-wide load alert, identify a site-list failure.'},
    {index:1,text:'Isolate the site’s Unknown row, separate its backup-list request.'},
    {index:4,text:'Compare wp-admin connection and backups, keep local evidence.'},
    {index:5,text:'Preserve request status and response, redact session credentials.'},
  ],
  'wordpress-verify-backup':[
    {index:0,text:'Locate the completed row, match time note type and contents.'},
    {index:2,text:'Read the remote badge, distinguish uploading uploaded and verified.'},
    {index:3,text:'Run wp dosya verify with the exact ID, check every local volume.'},
    {index:5,text:'Restore on a disposable site, verify application behavior separately.'},
  ],
  'zapier-inspect-failed-run':[
    {index:0,text:'Open the first failed Dosya step, ignore later skipped steps.'},
    {index:1,text:'Record run ID time status and response, redact every secret.'},
    {index:2,text:'Classify 401 as reconnect required, replace the expired key.'},
    {index:5,text:'Check Dosya before replay, detect an already-created result.'},
  ],
  'zapier-map-file-identifier':[
    {index:0,text:'Test one uniquely named file, inspect its returned fields.'},
    {index:1,text:'Map File ID or file_id downstream, keep the stable record identity.'},
    {index:3,text:'Treat null folder_id as root, never label it unknown.'},
    {index:5,text:'Compare downstream File ID, require an exact source match.'},
  ],
  'zapier-new-file-trigger':[
    {index:0,text:'Connect a full unanchored key, pin only the intended workspace.'},
    {index:2,text:'Choose the required Workspace field, create one webhook for this Zap.'},
    {index:3,text:'Upload one genuinely new file, avoid an existing-file version update.'},
    {index:5,text:'Verify File ID Folder ID Version and name, then publish.'},
  ],
  'zapier-reconnect-dosya-account':[
    {index:0,text:'List Zaps using the expired connection, preserve their scope.'},
    {index:1,text:'Create a full unanchored key, pin its intended workspace.'},
    {index:3,text:'Run the Dosya connection test, resolve any scope refusal.'},
    {index:5,text:'Retest every dependent Zap, revoke the old key only afterward.'},
  ],
  'zapier-refresh-trigger-sample':[
    {index:0,text:'Confirm the saved New File workspace, leave live scope unchanged.'},
    {index:1,text:'Create a unique root sample, make bounded discovery reliable.'},
    {index:3,text:'Run the Zapier trigger test, select the current file sample.'},
    {index:5,text:'Test one mapped action, verify its File ID before publishing.'},
  ],
  'zapier-retry-without-duplicates':[
    {index:0,text:'Capture run ID step target and status, do not replay yet.'},
    {index:1,text:'Search Dosya in the failure window, match stable identity.'},
    {index:2,text:'Replay the same Upload File run, reuse its idempotency key.'},
    {index:4,text:'Retry only after proving no side effect exists, avoid duplicate links.'},
  ],
  'mcp-connect-restricted-credential':[
    {index:0,text:'Enter the Dosya MCP server URL, use https://mcp.dosya.dev/mcp and browser OAuth.'},
    {index:2,text:'Choose one readable workspace, exclude Vault and end-to-end encrypted Spaces.'},
    {index:3,text:'Limit optional account access, keep files.read and clear unused account.read.'},
    {index:4,text:'Allow the OAuth connection, finish before the ten-minute consent expires.'},
  ],
  'mcp-disconnect-rotate-credential':[
    {index:1,text:'Match the Connected AI apps row, compare client workspace age and scope chips.'},
    {index:2,text:'Disconnect the exact OAuth grant, require the App disconnected receipt.'},
    {index:3,text:'Wait for the validation cache, retest the retired token after 60 seconds.'},
    {index:4,text:'Reconnect with fresh consent, choose the workspace and optional scope again.'},
  ],
  'mcp-list-tools-resources':[
    {index:0,text:'Refresh Dosya MCP capabilities, confirm authentication and files.read access.'},
    {index:2,text:'Check all nine tool names, include navigation content account and research tools.'},
    {index:4,text:'Inspect read-only annotations, require readOnlyHint true and destructiveHint false.'},
    {index:5,text:'Confirm the resources view is empty, Dosya publishes tools but no MCP resources.'},
  ],
  'mcp-test-read-only-operation':[
    {index:0,text:'Call list_workspaces without arguments, record the single consented workspace ID.'},
    {index:1,text:'List the selected workspace root, omit folder_id for the top level.'},
    {index:3,text:'Follow the structured paging fields, continue until next_page becomes null.'},
    {index:5,text:'Confirm stored content remains unchanged, refresh Dosya after the read-only calls.'},
  ],
  'revoke-api-key':[
    {index:0,text:'Match the API key row, compare its name visible prefix permissions and reach.'},
    {index:1,text:'Prepare the replacement order, prove allowed and denied operations before routine revocation.'},
    {index:3,text:'Initiate irreversible revocation, understand that cached authorization can persist briefly.'},
    {index:5,text:'Verify the retired secret is refused, allow up to five minutes for cached authorization.'},
  ],
  'webhook-acknowledge-promptly':[
    {index:0,text:'Check timestamp and raw-body signature, reject values over 300 seconds from receiver time.'},
    {index:2,text:'Commit the event to durable work, store event and delivery identifiers atomically.'},
    {index:3,text:'Return a 2xx after commit, keep the complete request under ten seconds.'},
    {index:5,text:'Check Success in Deliveries, confirm response status and one attempt.'},
  ],
  'webhook-deduplicate-deliveries':[
    {index:0,text:'Read both webhook identifiers, match the event header with the body ID.'},
    {index:1,text:'Claim the event ID transactionally, enforce uniqueness before applying work.'},
    {index:2,text:'Skip a repeated event safely, return 2xx from the committed idempotency record.'},
    {index:4,text:'Trace each delivery separately, keep delivery IDs only for diagnostics.'},
  ],
  'webhook-delete-endpoint':[
    {index:1,text:'Open the exact endpoint, match URL description subscriptions and state.'},
    {index:2,text:'Export required delivery evidence, deletion removes every endpoint delivery row.'},
    {index:3,text:'Review the Delete webhook warning, confirm the irreversible history loss.'},
    {index:5,text:'Confirm endpoint removal, reload and verify other endpoints remain unchanged.'},
  ],
  'webhook-handle-out-of-order':[
    {index:1,text:'Compare event occurrence data, treat created as time rather than total order.'},
    {index:2,text:'Reject an older file version, retain the highest accepted integer version.'},
    {index:4,text:'Reconcile an unversioned deletion, read current Dosya state before destructive work.'},
    {index:5,text:'Commit the newest accepted state, release a delayed older event as the test.'},
  ],
  'webhook-log-safe-diagnostics':[
    {index:0,text:'Select safe webhook identifiers, log event delivery and internal trace IDs.'},
    {index:1,text:'Redact signature and payload material, exclude secrets tokens and full bodies.'},
    {index:3,text:'Return a sanitized acknowledgement, remember Dosya stores 500 response characters.'},
    {index:5,text:'Trace the delivery in Dosya, correlate status attempts and next retry.'},
  ],
  'webhook-payload-versioning':[
    {index:0,text:'Validate the current envelope, require id type created workspace_id and data.'},
    {index:1,text:'Branch on the event type, quarantine malformed or unsupported input durably.'},
    {index:2,text:'Distinguish file version from schema version, order only revisions of that file.'},
    {index:5,text:'Accept additive payload fields, quarantine a sample missing a required field.'},
  ],
  'webhook-recover-after-downtime':[
    {index:0,text:'Restore the HTTPS receiver, verify the secret durable intake and fast 2xx.'},
    {index:2,text:'Prove recovery while still disabled, require Success for one signed test.'},
    {index:3,text:'Re-enable future delivery, understand that failed rows remain failed.'},
    {index:4,text:'Replay only required failed events, rely on event-ID deduplication during redelivery.'},
  ],
  'webhook-redeliver-event':[
    {index:1,text:'Choose one failed delivery, match event type time response and attempts.'},
    {index:3,text:'Queue Redeliver deliberately, avoid replaying a successful row by accident.'},
    {index:4,text:'Distinguish replay identifiers, retain the event ID and receive a new delivery ID.'},
    {index:5,text:'Verify the new delivery row, require Success without a duplicate business effect.'},
  ],
  'webhook-reenable-endpoint':[
    {index:1,text:'Repair the auto-disabled receiver, restore public HTTPS signature checks and fast 2xx.'},
    {index:2,text:'Send a test while disabled, create one real signed file.uploaded sample.'},
    {index:3,text:'Confirm Success in Deliveries, treat the initial toast as scheduling only.'},
    {index:4,text:'Choose Re-enable for future events, clear the failure counter and disabled time.'},
  ],
  'webhook-retry-idempotency':[
    {index:1,text:'Claim the event ID transactionally, enforce uniqueness beside the downstream mutation.'},
    {index:2,text:'Apply one downstream effect, return the committed result on a duplicate.'},
    {index:3,text:'Acknowledge only after commit, close the crash window before returning 2xx.'},
    {index:4,text:'Survive the six-attempt schedule, expect delays of 30s 2m 10m 1h and 6h.'},
  ],
  'webhook-rotate-secret':[
    {index:2,text:'Review the immediate cutover warning, the old signing secret stops at once.'},
    {index:3,text:'Roll and copy the replacement, store the one-time whsec value securely.'},
    {index:4,text:'Deploy the new secret promptly, pending retries use the endpoint current secret.'},
    {index:5,text:'Verify a newly signed test, require Success and a valid replacement signature.'},
  ],
  'webhook-send-test':[
    {index:2,text:'Select Send test event, create the fixed signed file.uploaded sample.'},
    {index:3,text:'Identify the scheduling receipt, do not mistake the toast for receiver success.'},
    {index:4,text:'Open Recent deliveries, match event and delivery IDs at the receiver.'},
    {index:5,text:'Confirm the receiver result, require Success or repair the recorded failure.'},
  ],
  'api-move-file':[
    {index:0,text:'Read the file and destination first, record the current parent and exact destination ID.'},
    {index:1,text:'Build the move body deliberately, set the destination to null only for workspace root.'},
    {index:3,text:'Require the 200 move receipt, distinguish conflict permission and missing-resource refusals.'},
    {index:4,text:'Fetch the same file ID after moving, confirm the returned parent and optional name.'},
  ],
  'api-rate-limit-handling':[
    {index:0,text:'Inspect every response header, record limit remaining and reset before pressure rises.'},
    {index:1,text:'Read Retry-After on a 429, keep the key-level refusal separate from general limits.'},
    {index:3,text:'Retry only a safe operation, verify uncertain mutations instead of replaying them.'},
    {index:4,text:'Bound the retry schedule, use at most three waits capped at 60 seconds.'},
  ],
  'api-rename-file':[
    {index:0,text:'Read the file before renaming, preserve its ID parent and current extension.'},
    {index:1,text:'Build the exact name body, include the desired extension and valid characters.'},
    {index:3,text:'Require the 200 rename receipt, separate invalid lock missing and conflict responses.'},
    {index:4,text:'Re-read the same file ID, confirm the new name and unchanged parent.'},
  ],
  'api-resume-upload-session':[
    {index:0,text:'Load the upload session status, read uploaded part numbers and total parts instead of a byte offset.'},
    {index:2,text:'Upload only missing part numbers, seek the unchanged source by its 10 MiB part size.'},
    {index:3,text:'Treat a repeated part as confirmation, re-read status after an uncertain transport result.'},
    {index:4,text:'Complete only with every expected part, return to missing parts after the exact refusal.'},
  ],
  'api-stream-download':[
    {index:0,text:'Fetch file metadata before download, record the intended name version and byte size.'},
    {index:1,text:'Request the guarded download route, require its 302 and five-minute Location URL.'},
    {index:2,text:'Stream the signed URL separately, never forward the Dosya Authorization header.'},
    {index:5,text:'Compare the completed byte count, rename the temporary file only after validation.'},
  ],
  'api-trash-file':[
    {index:0,text:'Read the target before deletion, confirm its ID workspace parent and live state.'},
    {index:1,text:'Send the recoverable DELETE with its safety flag, exclude permanent deletion from this request.'},
    {index:2,text:'Accept a recoverable or already-trashed receipt, never replay with a bare second DELETE.'},
    {index:3,text:'Search the deleted listing by ID, prove the recoverable item exists there.'},
  ],
  'api-upload-idempotency':[
    {index:0,text:'Create one UUID-v4 upload key, bind it to the logical file and destination.'},
    {index:2,text:'Store the first 201 receipt, retain its completed record for safe recovery.'},
    {index:3,text:'Replay the identical one-shot request, require status 200 and the replay header.'},
    {index:5,text:'Stop when the idempotency key was reused, never attach one key to a changed fingerprint.'},
  ],
  'api-upload-size-validation':[
    {index:0,text:'Measure the source before transfer, choose one-shot or resumable at the 50 MiB boundary.'},
    {index:1,text:'Send a digits-only Content-Length, route larger files through upload init and sessions.'},
    {index:2,text:'Attach the SHA-256 digest, stop when the received hash differs from expected.'},
    {index:5,text:'Read the stored file receipt, verify its measured size and returned file ID.'},
  ],
  'api-usage-analytics':[
    {index:0,text:'Open Analytics from the API key card, preserve the account-owned key context.'},
    {index:1,text:'Choose all keys or one owned key, do not treat workspace switching as a filter.'},
    {index:2,text:'Select 24h 7d or 30d, read Requests and status-400-or-higher Errors.'},
    {index:4,text:'Inspect Recent requests in 50-row pages, keep IP details out of public reports.'},
  ],
  'api-verify-mutation':[
    {index:0,text:'Read the resource before writing, define the exact postcondition for its stable ID.'},
    {index:1,text:'Send one scoped mutation, require the route-specific status and receipt fields.'},
    {index:2,text:'Retain X-D1-Bookmark when present, use it only to order D1-backed reads.'},
    {index:4,text:'Compare the route-specific read with the postcondition, pause instead of replaying uncertain writes.'},
  ],
  'cli-handle-exit-codes':[
    {index:0,text:'Capture stdout stderr and process status separately, preserve the original CLI result.'},
    {index:1,text:'Treat zero as success, when --json batch exits one parse its partial receipt.'},
    {index:2,text:'Classify usage auth and forbidden exits, correct configuration instead of retrying.'},
    {index:4,text:'Reschedule maintenance exit 75, preserve signal exits 130 and 143 as cancellation.'},
  ],
  'cli-json-output':[
    {index:0,text:'Run the command with --json, keep stdout and stderr in separate files.'},
    {index:1,text:'Save the process status before parsing, stop when the Dosya command failed.'},
    {index:2,text:'Parse the command-specific top level, never assume a universal ok-data wrapper.'},
    {index:5,text:'Validate the required result fields, confirm the intended account workspace or file ID.'},
  ],
  'cli-parse-json-output':[
    {index:0,text:'Redirect JSON and diagnostics separately, protect both temporary output files.'},
    {index:1,text:'Capture the Dosya exit status immediately, classify it before invoking jq.'},
    {index:3,text:'Apply a command-specific jq selector, fail when the required field is absent.'},
    {index:4,text:'Parse valid nonzero batch JSON, retain successful counts and every failure entry.'},
  ],
  'cli-separate-profiles':[
    {index:0,text:'Create one private XDG root per identity, isolate work and personal config files.'},
    {index:1,text:'Set an isolated XDG config root before login, use stdin instead of an unsupported --profile flag.'},
    {index:2,text:'Run whoami with JSON output, assert the expected account before any mutation.'},
    {index:3,text:'Pin or verify the target workspace, config isolation alone does not select it.'},
  ],
  'cli-update-version':[
    {index:0,text:'Record the current CLI version and path, reject a development source checkout.'},
    {index:1,text:'Run dosya upgrade deliberately, use --force only for approved reinstall or downgrade.'},
    {index:3,text:'Verify the published SHA-256 digest, leave the installed binary untouched on mismatch.'},
    {index:5,text:'Start a fresh CLI process, confirm its version and a read-only whoami result.'},
  ],
  'cli-use-secret-without-printing':[
    {index:0,text:'Load the API key from a secret manager, keep shell tracing and echo disabled.'},
    {index:1,text:'Pass the key by environment or stdin, never expose a literal secret in argv.'},
    {index:3,text:'Unset the transient secret after use, prevent environment dumps in job logs.'},
    {index:4,text:'Choose local logout or server revocation, preserve the key after a failed revoke.'},
  ],
  'cli-verify-scheduled-job':[
    {index:0,text:'Record the scheduler runtime context, use absolute binary and input paths.'},
    {index:1,text:'Verify whoami and target workspace, stop when the scheduled identity differs.'},
    {index:3,text:'Save the original process status, classify auth network permission maintenance and cancellation.'},
    {index:5,text:'Perform a read-only remote check, require the expected resource postcondition before success.'},
  ],
  'mcp-choose-client-config':[
    {index:0,text:'Choose a remote HTTP OAuth client, reject local-command and static-token-only formats.'},
    {index:1,text:'Enter https://mcp.dosya.dev/mcp, leave API key secret command and environment fields empty.'},
    {index:2,text:'Complete the OAuth consent flow, inspect scopes and select one intended workspace.'},
    {index:4,text:'Run a read-only file search, confirm the pinned workspace and absence of write tools.'},
  ],
  'api-complete-upload-session':[
    {index:0,text:'Compare uploaded part numbers, require every number from 1 through total parts.'},
    {index:2,text:'POST the session complete URL, send no JSON body after all parts exist.'},
    {index:4,text:'Recover a missing completion receipt, read complete status and file ID.'},
    {index:5,text:'Fetch the returned file id, confirm destination name and exact byte count.'},
  ],
  'api-create-folder-verify-parent':[
    {index:0,text:'Copy the intended parent folder ID, omit the parent only for workspace root.'},
    {index:2,text:'POST workspace parent and unique name, keep the name within 100 characters.'},
    {index:3,text:'Read the HTTP 201 folder receipt, save its ID parent ID and created count.'},
    {index:5,text:'List direct children of the parent, match the new folder ID exactly once.'},
  ],
  'api-create-upload-session':[
    {index:0,text:'Choose workspace and folder destination, record the folder ID for a non-root upload.'},
    {index:1,text:'POST upload-init name size and destination, declare the file size in bytes.'},
    {index:3,text:'Check the HTTP 201 session receipt, match sanitized name size MIME and region.'},
    {index:4,text:'Follow the returned transfer mode, use one PUT or 10 MiB multipart parts.'},
  ],
  'api-errors-pagination':[
    {index:0,text:'Request page 1 with fixed query values, preserve one stable traversal.'},
    {index:2,text:'Advance numeric pages through total pages, never wait for a cursor field.'},
    {index:4,text:'Classify 429 or 503 before retrying, obey Retry-After and inspect mutations.'},
    {index:5,text:'Reconcile unique file ids after the run, keep unresolved failures visible.'},
  ],
  'api-file-not-found-vs-forbidden':[
    {index:0,text:'Start from a trusted file id, retain its expected workspace and key identity.'},
    {index:1,text:'Check credential scope surface expiry and anchor, resolve its effective boundary.'},
    {index:3,text:'Preserve the exact GET status and body, never collapse 403 and 404 together.'},
    {index:4,text:'Resolve the named rule without probing ids, use trusted state for a private 404.'},
  ],
  'api-folder-operations':[
    {index:0,text:'Create a disposable source folder, retain its ID and original parent ID.'},
    {index:1,text:'Rename through the folder rename endpoint, require the returned final name.'},
    {index:3,text:'Move and optionally rename in one request, use null only for workspace root.'},
    {index:5,text:'List both parent locations, find the same ID once under its final parent.'},
  ],
  'api-get-file-metadata':[
    {index:0,text:'Obtain a trusted file id, keep its expected workspace beside it.'},
    {index:1,text:'GET the file metadata endpoint, require the JSON response for that id.'},
    {index:3,text:'Compare byte type version etag and hash fields, match the operation being checked.'},
    {index:5,text:'Handle nullable locked hidden and denied results, preserve the exact 403 or 404 body.'},
  ],
  'api-key-expiry-rotation':[
    {index:1,text:'Duplicate the expiring key settings, give the replacement a rotation-specific name.'},
    {index:2,text:'Restore every usage ceiling and expiry, choose 30 days 90 days or never.'},
    {index:4,text:'Deploy the replacement one client at a time, prove one allowed request.'},
    {index:5,text:'Revoke after cutover, allow five minutes for caches and verify the old key fails.'},
  ],
  'api-key-folder-access':[
    {index:1,text:'Choose a workspace and folder anchor, allow only WebDAV or S3 for that reach.'},
    {index:2,text:'Use the dosya key for WebDAV, or enable and save one-time S3 credentials.'},
    {index:3,text:'Confirm the role permits the protocol, then open the gateway at the anchor.'},
    {index:5,text:'Request a sibling path outside the subtree, require denial before revoking.'},
  ],
  'api-key-full-access':[
    {index:1,text:'Select Full access deliberately, acknowledge the most permissive badge.'},
    {index:2,text:'Limit protocol reach, avoid IP restrictions for SFTP and enable S3 credentials.'},
    {index:4,text:'Test one required read and one mutation, prove the client can do its job.'},
    {index:5,text:'Cross one harmless configured boundary, require refusal before production use.'},
  ],
  'api-key-last-used':[
    {index:0,text:'Find the exact key by name or masked prefix, expand that credential row.'},
    {index:2,text:'Read the approximate Last used time, note any 90-day stale indicator.'},
    {index:3,text:'Correlate client logs and API-key Analytics, keep secrets out of diagnostics.'},
    {index:5,text:'Revoke only after an appropriate quiet period, monitor the client for refusal.'},
  ],
  'api-key-naming':[
    {index:0,text:'Name one application environment and owner, make the credential accountable.'},
    {index:2,text:'Enter the label under What is it for, keep it within 64 characters.'},
    {index:4,text:'Search the key table by name or prefix, confirm the row is unambiguous.'},
    {index:5,text:'Replace a stale label through duplication, migrate then revoke the old key.'},
  ],
  'api-key-protocols':[
    {index:2,text:'Choose Only the ones I pick, tick each required protocol surface.'},
    {index:3,text:'Prepare role access and separate S3 credentials, never mix anchors with REST or SFTP.'},
    {index:4,text:'Run a non-destructive checked-surface request, require success.'},
    {index:5,text:'Test an unchecked door, require its REST JSON DAV S3 or client refusal.'},
  ],
  'api-key-read-only':[
    {index:1,text:'Choose Read only for the client, open Restrictions and expiry.'},
    {index:2,text:'Allow REST and pin the intended workspace, add suitable origin and usage guards.'},
    {index:4,text:'GET the expected workspace files, confirm the allowed listing succeeds.'},
    {index:5,text:'POST one disposable folder request, require scope 403 and no created folder.'},
  ],
  'api-key-scopes':[
    {index:1,text:'Compare Read only and Upload only, match the client methods to one class.'},
    {index:2,text:'Reserve Full access for management work, include rename move share or delete.'},
    {index:4,text:'Run one intended request with the new key, prove the chosen capability.'},
    {index:5,text:'Run one harmless out-of-scope request, require the exact scope refusal.'},
  ],
  'api-key-upload-only':[
    {index:0,text:'Create an Upload only key for the ingest job, use a distinct credential name.'},
    {index:2,text:'Initialize one uniquely named test upload, target the intended folder ID.'},
    {index:3,text:'Complete the returned transfer path, save the file ID and actual size bytes.'},
    {index:4,text:'Try GET files with the upload key, require the scope refusal instead of data.'},
  ],
  'api-list-files-pagination':[
    {index:0,text:'Freeze one listing query and per-page value, keep the traversal stable.'},
    {index:1,text:'Request page 1 and read pagination, retain page size totals and count.'},
    {index:3,text:'Advance the numeric page through total pages, repeat identical query values.'},
    {index:5,text:'Reconcile unique file ids and page failures, preserve recovery evidence.'},
  ],
  'api-list-folder-children':[
    {index:1,text:'Choose a trusted parent folder ID, omit the parent only for workspace root.'},
    {index:2,text:'Request direct children with the workspace ID, require HTTP 200 and ok true.'},
    {index:3,text:'Match every returned parent ID, use has children to offer expansion.'},
    {index:5,text:'Switch to GET files when file rows are needed, reconcile its separate arrays.'},
  ],
  'desktop-choose-update-path':[
    {index:0,text:'Read Version and Channel in About dosya, match the updater to that packaged distribution.'},
    {index:1,text:'For Direct download, choose Check for updates and follow the exact status text.'},
    {index:3,text:'For Linux AppImage, replace the downloaded image manually and retain executable permission.'},
    {index:4,text:'For Microsoft or Mac App Store, open that store instead of a direct package.'},
  ],
  'desktop-collect-system-context':[
    {index:0,text:'Record Version Channel System and Engine in About dosya, distinguish platform from OS release.'},
    {index:1,text:'Choose Copy Details and wait for Copied, retain only support-relevant account context.'},
    {index:3,text:'Inspect every visible Diagnostics row, capture the kernel-bearing System value.'},
    {index:5,text:'Remove unnecessary context before sharing, arbitrary secrets are not guaranteed redacted.'},
  ],
  'desktop-deep-link-troubleshoot':[
    {index:0,text:'Classify the link as auth callback or sync path, reject every unsupported host or route.'},
    {index:1,text:'Start Dosya once and retry protocol delivery, let the packaged OS handler receive it.'},
    {index:2,text:'Restart authentication for an old callback, require its pending single-use state.'},
    {index:4,text:'Validate an absolute sync path under 1000 characters, reject controls NUL and dot-dot.'},
  ],
  'desktop-find-installed-version':[
    {index:0,text:'Open About dosya from the application menu, use its dedicated information panel.'},
    {index:1,text:'Read the running Version value, record the executable currently in use.'},
    {index:2,text:'Record Direct Store or Snap Channel, identify who owns future updates.'},
    {index:5,text:'Choose Copy Details and wait 1.5 seconds for Copied before pasting privately.'},
  ],
  'desktop-inspect-issue-details':[
    {index:0,text:'Open Issues and read the pair card itself, no separate details drawer exists.'},
    {index:1,text:'For the macOS permission message, choose Reselect folder rather than Retry.'},
    {index:3,text:'Expand files not synced from Overview, retain the true count above the 200-row view.'},
    {index:5,text:'Fix the named cause before Retry, use Clear only to dismiss the error ledger.'},
  ],
  'desktop-open-from-tray':[
    {index:0,text:'Read the dosya tray tooltip, distinguish no status from the current sync summary.'},
    {index:1,text:'Click the tray icon or choose Open dosya, request the resident window directly.'},
    {index:2,text:'Wait for show or recreation after five-minute reclaim, require visible focused window.'},
    {index:5,text:'Use Quit dosya only to end the process, ordinary window close returns to background.'},
  ],
  'desktop-prepare-safe-problem-report':[
    {index:0,text:'Open Report a Problem and identify the Report a bug ticket dialog.'},
    {index:1,text:'Enter the smallest repeatable sequence plus expected and actual behavior.'},
    {index:3,text:'Review each enabled Diagnostics row, untick Include when context is unnecessary.'},
    {index:4,text:'Include the last 200 log lines only when needed, they can contain synced filenames.'},
  ],
  'desktop-read-activity-row':[
    {index:0,text:'Open Activity and distinguish the empty state from a populated sync log.'},
    {index:1,text:'Read the local timestamp as log time, not a server completion receipt.'},
    {index:2,text:'Match the remote folder column, fall back to the first eight pair-id characters.'},
    {index:5,text:'Use Overview for direction bytes speed and ETA, Activity rows do not carry them.'},
  ],
  'desktop-restart-safely':[
    {index:0,text:'Record active pair and error state in Sync Overview before ending the process.'},
    {index:1,text:'Choose Quit dosya from tray or the OS menu, window close does not prove exit.'},
    {index:2,text:'Allow up to five seconds for watchers pollers and transfer sinks to stop.'},
    {index:4,text:'Reopen Sync Overview and verify abandoned running operations returned to pending.'},
  ],
  'desktop-search-shortcut':[
    {index:0,text:'Press Command K or Control K, use Search dosya from the menu as fallback.'},
    {index:1,text:'Require the Search files folders shares field to receive focus on the search route.'},
    {index:2,text:'Enter a distinctive name and wait 250 milliseconds, or submit immediately with Enter.'},
    {index:4,text:'Confirm result type and metadata before opening, file rows navigate to their folder.'},
  ],
  'desktop-switch-workspaces':[
    {index:0,text:'Open the current workspace control, review only authorized account workspaces.'},
    {index:1,text:'Compare name storage and sync indicator, do not infer unlimited space from no subline.'},
    {index:2,text:'Choose the intended row and wait through the Switching workspace overlay.'},
    {index:4,text:'Open Files Dashboard or Search, verify content uses the new workspace id.'},
  ],
  'desktop-sync-check-storage':[
    {index:0,text:'Read Storage used on Dashboard, include trash bytes in cloud capacity.'},
    {index:2,text:'Open Add sync folder and Advanced, treat its estimate as counts without byte size.'},
    {index:4,text:'Acknowledge 50000 files or a truncated estimate only after checking the source.'},
    {index:5,text:'Reserve the entire download batch total plus 256 MiB before any bytes are written.'},
  ],
  'desktop-sync-conflict-loop':[
    {index:0,text:'Pause the affected pair and stop every competing writer before resolution.'},
    {index:2,text:'Choose Show both versions and compare the original with its timestamped conflict copy.'},
    {index:4,text:'Choose Keep remote only after accepting trash-first then permanent-unlink fallback.'},
    {index:5,text:'Resume with one writer and require the next cycle to stay conflict-free.'},
  ],
  'desktop-sync-exclude-temporary':[
    {index:0,text:'Start Add sync folder and continue to Advanced before saving the pair.'},
    {index:1,text:'Review the shipped exclusion list, distinguish visible defaults from technical skips.'},
    {index:2,text:'Add one exact suffix prefix or anchored path, do not assume arbitrary glob syntax.'},
    {index:5,text:'Remove and recreate an existing pair, expect its saved index state to be deleted.'},
  ],
  'extension-capture-visible-page':[
    {index:0,text:'Prepare the exact visible viewport, close private overlays before any pixels are captured.'},
    {index:1,text:'Confirm the Saving to destination, change folder before creating the queue item.'},
    {index:2,text:'Choose Save visible screenshot, use the button when page text remains selected.'},
    {index:3,text:'Read the exact upload refusal above 50 MiB, use the resumable route named by the server.'},
  ],
  'extension-confirm-workspace':[
    {index:0,text:'Read the Account email in the popup, match the browser profile to the intended owner.'},
    {index:1,text:'Inspect the Saving to label, require the intended workspace and folder together.'},
    {index:2,text:'Choose the destination in the folder dialog, switch workspace before selecting its folder.'},
    {index:5,text:'Open the completed test row, confirm its folder label matches the reviewed destination.'},
  ],
  'extension-destination-missing':[
    {index:0,text:'Open Choose a folder, confirm which workspace the picker is currently listing.'},
    {index:2,text:'Search the exact folder name, respect confinement and hidden-folder visibility.'},
    {index:4,text:'Account for the one-hour folder cache, create in the picker or wait for expiry.'},
    {index:5,text:'Select the recovered destination, verify one harmless completed save there.'},
  ],
  'extension-edit-save-name':[
    {index:0,text:'Save once with the generated filename, no pre-save filename field exists.'},
    {index:2,text:'Open the completed Recent saves row, follow its exact Dosya file ID.'},
    {index:3,text:'Choose Rename in Dosya, require the workspace rename_files permission.'},
    {index:5,text:'Reopen the renamed file, verify its extension content and destination stayed correct.'},
  ],
  'extension-page-permission-denied':[
    {index:0,text:'Read the exact failed-row message, separate an unsupported page from a blocked image.'},
    {index:2,text:'Review every image host named in the banner, reject the batch if one is unexpected.'},
    {index:3,text:'Choose Allow for the complete displayed list, or Not now to dismiss that batch.'},
    {index:5,text:'Open the completed image row, verify the expected source was saved.'},
  ],
  'extension-popup-not-opening':[
    {index:0,text:'Confirm the active profile and extension version, use the published browser target.'},
    {index:1,text:'Enable and pin the toolbar extension, check Chrome or Edge controls directly.'},
    {index:3,text:'Enable Safari through its containing app, require macOS 13 or later.'},
    {index:5,text:'Record browser profile and version before reset, protect unfinished local captures.'},
  ],
  'extension-save-confirmation-missing':[
    {index:0,text:'Locate the generated name in Recent saves, do not search for a user-entered name.'},
    {index:1,text:'Read the existing queue state, wait through network rate-limit or finishing messages.'},
    {index:3,text:'Choose Retry now on the failed upload row, avoid repeating the page capture.'},
    {index:5,text:'Open the completed file ID in Dosya, treat the row as the authoritative receipt.'},
  ],
  'extension-save-page-image':[
    {index:0,text:'Set the Saving to destination first, return to the webpage after it is correct.'},
    {index:1,text:'Choose Save image to dosya on the source image, queue that exact URL once.'},
    {index:2,text:'Review every blocked host shown together, allow the batch only when all are expected.'},
    {index:5,text:'Open the completed Recent saves row, compare stored dimensions and visible content.'},
  ],
  'extension-save-selection':[
    {index:0,text:'Highlight the exact non-sensitive webpage text, exclude surrounding private content.'},
    {index:1,text:'Choose Save selection after checking Saving to, require an active text selection.'},
    {index:4,text:'Wait for the generated page-title text file, respect the one-million-character cap.'},
    {index:5,text:'Open the text result, verify Title Source and the selected content in order.'},
  ],
  'extension-session-expired':[
    {index:0,text:'Identify Signed out rather than a network wait, keep the failed queue row.'},
    {index:1,text:'Choose Sign in with dosya, complete normal authentication on the Dosya page.'},
    {index:3,text:'Confirm Account and Saving to after sign-in, restore the intended destination.'},
    {index:4,text:'Choose Retry now on the original row, authentication alone does not resume it.'},
  ],
  'extension-verify-saved-item':[
    {index:0,text:'Find the completed Recent saves row, require its green completion check.'},
    {index:1,text:'Open the row body by exact file ID, confirm its folder label and save time.'},
    {index:3,text:'Compare screenshot pixels with the captured viewport, do not expect source metadata.'},
    {index:5,text:'Keep or share only after verification, Copy link does not validate stored bytes.'},
  ],
  'billing':[
    {index:0,text:'Open Billing and record any load error, do not infer that the subscription vanished.'},
    {index:2,text:'Reconcile every Storage ledger line, allow a few seconds for a recent source.'},
    {index:3,text:'Compare Next invoice with the invoice list, retain the exact invoice receipt.'},
    {index:5,text:'Escalate with safe invoice references, never send a full card number or portal URL.'},
  ],
  'cloud-imports':[
    {index:0,text:'Confirm the connected provider email, reconnect only when the picker requires it.'},
    {index:2,text:'Read the importing-into footer before Import, require the intended Dosya destination.'},
    {index:4,text:'Follow the five-second job updates, preserve completed failed and skipped counts.'},
    {index:5,text:'Verify completed Dosya files first, retry only a new narrow source selection.'},
  ],
  'referral-rewards':[
    {index:0,text:'Locate the masked invited email, confirm the invite link was used during signup.'},
    {index:1,text:'Read the public referral label, keep private anti-abuse reasons hidden.'},
    {index:3,text:'Allow the daily qualification sweep to run, repeated reloads do not force settlement.'},
    {index:4,text:'Verify Counted and Referral bonus together, apply the five-friend 25 GB cap.'},
  ],
  'desktop-sync-existing-folder':[
    {index:0,text:'Back up the existing local folder, keep the copy outside every Dosya sync root.'},
    {index:1,text:'Choose Cloud folder and Local folder, confirm both existing paths before pairing.'},
    {index:2,text:'Select Protect & Upload or Full Sync, match the mode to the authoritative side.'},
    {index:5,text:'Inspect Activity and Issues, verify a known file at the expected cloud path.'},
  ],
  'desktop-sync-invalid-name':[
    {index:0,text:'Expand the pair failed-file list, locate the exact invalid-name item.'},
    {index:2,text:'Shorten Name too long items, keep the final name within 255 characters.'},
    {index:4,text:'Choose pair-level Retry after every listed error is ready, do not Clear evidence first.'},
    {index:5,text:'Verify the corrected cloud path, compare file size and readable contents.'},
  ],
  'desktop-sync-local-disk-space':[
    {index:0,text:'Record free and required megabytes, keep the affected path with the error.'},
    {index:1,text:'Pause the affected sync pair, prevent new cloud changes from adding downloads.'},
    {index:2,text:'Free the reported requirement on this volume; it already includes 256 MiB, so delete data or move it to another volume.'},
    {index:5,text:'Open the downloaded file, verify its size and absence of temporary-only data.'},
  ],
  'desktop-sync-local-permission':[
    {index:0,text:'Distinguish Needs permission from a failed-file list, follow the matching recovery.'},
    {index:1,text:'Choose Reselect folder for a lost grant, authorize the intended local root.'},
    {index:4,text:'Read will retry or won\'t retry, repair all causes before pair-level Retry.'},
    {index:5,text:'Confirm the status or failed row clears, verify the destination file.'},
  ],
  'desktop-sync-offline':[
    {index:0,text:'Record Offline and the latest Activity entry, preserve the affected pair name.'},
    {index:1,text:'Check internet VPN proxy and captive portal access, remove the actual network block.'},
    {index:3,text:'Bring Dosya online or wake the device, otherwise allow the 30-second recovery probe.'},
    {index:5,text:'Verify current pair status and a pending change, keep the earlier Activity receipt.'},
  ],
  'desktop-sync-plan-mode':[
    {index:0,text:'Choose which side may originate changes, local cloud or both.'},
    {index:2,text:'Use Protect & Upload or Push to Cloud, decide whether local deletions propagate.'},
    {index:3,text:'Use Save to Device or Pull from Cloud, decide whether cloud deletions propagate.'},
    {index:4,text:'Use Full Sync for two-way ownership, choose Keep both copies or Last write wins.'},
  ],
  'desktop-sync-review-first-plan':[
    {index:0,text:'Confirm Cloud folder and Local folder, notice Root for an entire workspace.'},
    {index:1,text:'Restate the selected mode\'s deletion behavior, do not rely on its name alone.'},
    {index:3,text:'Review Excluded files & folders, keep secrets caches and generated data outside sync.'},
    {index:5,text:'Select Start syncing for the controlled scope, inspect the first Activity operations.'},
  ],
  'desktop-sync-workspace-quota':[
    {index:0,text:'Copy the complete quota message, retain the file path and byte size.'},
    {index:1,text:'Identify the full owner workspace or member limit, inspect the named storage scope.'},
    {index:2,text:'Delete confirmed Trash items permanently, understand that recovery is impossible.'},
    {index:5,text:'Verify the cloud path and expected size, confirm the quota issue clears.'},
  ],
  'desktop-system-tray':[
    {index:0,text:'Read the disabled Sync summary, identify the desktop engine\'s current state.'},
    {index:1,text:'Match the pair label to its status, find the workspace and folder needing attention.'},
    {index:2,text:'Choose the intended sync control; use Pause Sync, Resume Sync, or Sync All Now.'},
    {index:5,text:'Open Sync in Dosya, confirm the same pair status and activity.'},
  ],
  'desktop-uninstall-preserve-cloud-files':[
    {index:0,text:'List every pair and failed item, preserve each local and cloud destination.'},
    {index:1,text:'Open the web app, verify important cloud objects without the desktop client.'},
    {index:3,text:'Choose Remove for every pair, confirm it leaves local and cloud files intact.'},
    {index:5,text:'Sign in on the web again, verify the same cloud paths after uninstall.'},
  ],
  'desktop-unsupported-media':[
    {index:0,text:'Record the exact preview or decode message, do not assume stored bytes are corrupt.'},
    {index:2,text:'Choose Download in the desktop viewer, select a trusted local destination.'},
    {index:3,text:'Wait for Downloaded and its saved path, use Show in Folder if needed.'},
    {index:4,text:'Open the saved copy in a compatible app, test the actual contents.'},
  ],
  'desktop-vault-save-local':[
    {index:0,text:'Unlock Vault and select the encrypted item, confirm the active Vault workspace.'},
    {index:1,text:'Choose Download and review Save decrypted file, use the operating-system dialog.'},
    {index:3,text:'Wait for 4 MiB plaintext chunks to decrypt, keep the destination protected.'},
    {index:5,text:'Move encrypt or delete the plaintext copy, follow local policy after verification.'},
  ],
  'desktop-verify-recovery-restart':[
    {index:0,text:'Capture Activity and files not synced, preserve the pre-restart evidence.'},
    {index:1,text:'Restart once and read Resuming N operations, do not start duplicate work.'},
    {index:2,text:'Allow queue and multipart recovery to finish, avoid a second upload for the path.'},
    {index:5,text:'Verify cloud path version and size, or capture the repeated timestamped error.'},
  ],
  'download-archive-preparation':[
    {index:0,text:'Open Files in the source workspace, confirm Download ZIP is available.'},
    {index:2,text:'Choose Download ZIP once, start the direct streamed archive response.'},
    {index:4,text:'Check the browser download list, require dosya-download.zip or record the JSON refusal.'},
    {index:5,text:'Open the finished ZIP, compare top-level names before changing originals.'},
  ],
  'download-retry-prepared-archive':[
    {index:0,text:'Preserve the failed response, close the error tab or browser transfer.'},
    {index:2,text:'Rebuild a smaller current selection, split content past 10000 entries or 5 GiB.'},
    {index:4,text:'Let split parts start automatically, allow up to 11.6 seconds for 20 parts.'},
    {index:5,text:'Compare every completed ZIP, counts do not identify a failed chunk or source ID.'},
  ],
  'download-verify-file':[
    {index:0,text:'Open File details for the current item, record the exact name extension and size.'},
    {index:2,text:'Choose Download and wait for completion, restart after an expired 300-second redirect.'},
    {index:4,text:'Compare the local byte count with File details, allow only display-unit rounding.'},
    {index:5,text:'Open the local copy in a trusted app, inspect content before relying on it.'},
  ],
  'folder-download-troubleshoot':[
    {index:0,text:'Check the folder Download action, an absent action indicates missing permission.'},
    {index:2,text:'Read the exact empty or No items found response, verify content visibility and locks.'},
    {index:3,text:'Split a tree above 10000 files, download smaller child folders.'},
    {index:4,text:'Split source data above 5 GiB, local browser cleanup cannot change the server total.'},
  ],
  'upload-estimate-storage':[
    {index:0,text:'Total every source file in bytes, count folder contents rather than the folder entry.'},
    {index:1,text:'Read free of in the workspace switcher, verify the destination workspace name.'},
    {index:3,text:'Reserve margin for concurrent uploads versions and Trash, none are free capacity.'},
    {index:5,text:'Finish one representative upload, a per-member refusal uses one workspace-wide setting.'},
  ],
  'upload-prepare-file-names':[
    {index:0,text:'Compare destination names first, an exact live-name match can create a version.'},
    {index:1,text:'Keep the trimmed name within 255 characters, include the extension in the count.'},
    {index:4,text:'Check the workspace extension rules, allowlisted files need an accepted suffix.'},
    {index:5,text:'Upload one sample and open View file, verify the stored name before the batch.'},
  ],
  'upload-preserve-folder-structure':[
    {index:0,text:'Set the destination Folder first, choose the parent for the uploaded tree.'},
    {index:1,text:'Choose Select folder for file paths, use drag and drop to retain wholly empty folders.'},
    {index:3,text:'Expand Upload queue, inspect nested rows and every failed subtree count.'},
    {index:5,text:'Use Go to location on sample rows, compare parent and child paths with the source.'},
  ],
  'upload-record-failure-details':[
    {index:0,text:'Keep the failed row visible, do not clear or remove the evidence.'},
    {index:1,text:'Copy the exact red error message, preserve its numbers and punctuation.'},
    {index:4,text:'Capture only the failed row and destination, redact unrelated private names.'},
    {index:5,text:'After reload choose Retry all failed, then Resume the intended Interrupted row.'},
  ],
  'upload-retry-one-item':[
    {index:0,text:'Read the complete Error row, identify the cause before another attempt.'},
    {index:1,text:'Correct connectivity storage policy lock or permission, retry only after the fix.'},
    {index:3,text:'After reload choose Retry all failed, change byte-less Error rows to Interrupted.'},
    {index:5,text:'Resume the intended row and verify Done, leave earlier completed rows untouched.'},
  ],
  'upload-test-one-file':[
    {index:0,text:'Choose one small representative source, avoid a live destination-name collision.'},
    {index:1,text:'Open Uploads and set Folder, confirm the final workspace and destination.'},
    {index:3,text:'Watch Queued become progress and Done, stop the larger batch on Error.'},
    {index:5,text:'Open Go to location and download the sample, verify its final path and bytes.'},
  ],
  'request-remove-uploader':[
    {index:0,text:'Open File requests for the intended request, confirm permission and folder scope.'},
    {index:1,text:'Open Recipients and match the email row, note Pending or Uploaded before removal.'},
    {index:3,text:'Treat recipient removal as record cleanup only, the bearer request URL still accepts anonymous uploads.'},
    {index:4,text:'Choose Revoke when the old URL must stop, confirm This request was closed privately.'},
  ],
  'request-resend-invitation':[
    {index:0,text:'Open the active request and choose Recipients, keep the correct workspace and request selected.'},
    {index:1,text:'Find the intended Pending email row, Uploaded rows do not offer Resend.'},
    {index:3,text:'Choose Resend or Resend all, reuse the current recipient URL and expiry.'},
    {index:4,text:'Reopen Recipients and require a recent Sent time, then verify the newest email arrived.'},
  ],
  'request-uploader-check-limits':[
    {index:0,text:'Open the complete active request URL, stop on expired closed or missing states.'},
    {index:1,text:'Read Accepts Per file and Slots, treat each displayed term as a separate limit.'},
    {index:3,text:'Compare every file with Per file, multipart transfer does not raise the ceiling.'},
    {index:5,text:'Stage the selection and read every ledger message, server gates can still refuse a valid local row.'},
  ],
  'request-uploader-replace-rejected':[
    {index:0,text:'Read the rejected row message first, identify empty slot extension or size failure.'},
    {index:1,text:'Remove a preflight-rejected row, no bytes or request slot were consumed.'},
    {index:3,text:'Add a corrected replacement and inspect its row, require the cannot be sent message to disappear.'},
    {index:5,text:'Use Retry only after transfer failure, reuse large-file parts or Discard the session.'},
  ],
  'request-uploader-save-receipt':[
    {index:0,text:'Keep the request tab open through Uploading, wait for every row to settle.'},
    {index:1,text:'Require each intended row to show Received, failed paused or rejected is not delivery proof.'},
    {index:2,text:'Read the receipt stamp below the ledger, record recipient count bytes time and reference.'},
    {index:4,text:'Save the stamp and filename list safely, omit passwords codes and the full private URL.'},
  ],
  'request-uploader-stage-files':[
    {index:0,text:'Read the request destination sender message and terms, enter optional uploader identity only if wanted.'},
    {index:1,text:'Choose Files Folder Photo library camera drop or paste, use the controls available on this device.'},
    {index:2,text:'Inspect every staged ledger row, confirm retained folder paths and skipped duplicates.'},
    {index:5,text:'Choose Upload N files after review, expect three files and three multipart parts in flight.'},
  ],
  'share-close-after-review':[
    {index:0,text:'Open Shared By me and match the exact link, confirm its displayed name and URL.'},
    {index:1,text:'Record the needed analytics before closure, retain the selected range and newest event rows.'},
    {index:2,text:'Choose Revoke and confirm Revoke link, accept that the token cannot be restored.'},
    {index:4,text:'Open the old URL privately after Link revoked, require the HTTP 410 revoked page.'},
  ],
  'share-confirm-first-access':[
    {index:0,text:'Open the exact link under Shared By me, use the owner-only analytics page.'},
    {index:1,text:'Choose 7d 30d or 90d, allow up to one minute for a first public open.'},
    {index:3,text:'For a restricted link inspect Invited for Verified, treat it as inbox proof only.'},
    {index:4,text:'Keep recipient identity separate from event rows, opens and downloads have no recipient field.'},
  ],
  'share-deliver-file-bundle':[
    {index:0,text:'Select 1 to 100 visible live files in one workspace, stay inside permitted folder scope.'},
    {index:2,text:'Choose By email or By link, restrict email delivery to at most 50 deduplicated addresses.'},
    {index:4,text:'Create the bundle and inspect partial email failures, check Shared before retrying.'},
    {index:5,text:'Open the Bundle URL privately and verify every tile, do not promise one combined archive.'},
  ],
  'share-export-analytics-details':[
    {index:0,text:'Open the exact link analytics under Shared By me, confirm its URL and status.'},
    {index:2,text:'Filter All Opens or Downloads, the table contains only the newest 25 loaded events.'},
    {index:3,text:'Record When Event Visitor Country and Device, Unknown includes old or locationless rows.'},
    {index:4,text:'Capture the page with browser tools, the current web client has no CSV export.'},
  ],
  'share-investigate-unexpected-activity':[
    {index:0,text:'Confirm the exact URL and Link controls, record access password expiry and download rules.'},
    {index:1,text:'Filter the relevant analytics range and event type, preserve time visitor device and country.'},
    {index:4,text:'Choose Revoke and confirm Revoke link, preserve the permanent Revoked timestamp.'},
    {index:5,text:'Test the URL privately for Link revoked, use Report abuse when the content is harmful.'},
  ],
  'share-preflight-private-window':[
    {index:0,text:'Copy the exact active share URL, never substitute a newly created token.'},
    {index:2,text:'Complete invited-email verification before Password, follow the server gate order.'},
    {index:4,text:'Inspect representative items and the recipient dock, View only provides no download action.'},
    {index:5,text:'Repeat the critical gate in another clean session, then send the tested URL.'},
  ],
  'share-recipient-download-file':[
    {index:0,text:'Open the full URL and complete required access gates, no Dosya account is needed.'},
    {index:2,text:'Choose Download for one item or Download all for a folder, respect 10000-entry and 5 GiB limits.'},
    {index:3,text:'Read View only when no download action exists, ask the sender for a downloadable link.'},
    {index:5,text:'Wait for browser completion and compare filename and bytes, retry only while the link stays active.'},
  ],
  'share-recipient-email-verification':[
    {index:0,text:'Enter the exact invited email and choose Send code, use the inbox that received the invitation.'},
    {index:1,text:'Read the generic six-digit confirmation, uninvited addresses receive no message.'},
    {index:3,text:'Enter the newest code within 15 minutes, five wrong attempts require a new code.'},
    {index:5,text:'Let the share reload after Verify, the browser receives a 30-minute recipient grant.'},
  ],
  'share-recipient-open-link':[
    {index:0,text:'Check the complete dosya.dev/s/ URL and token, repair links broken across email lines.'},
    {index:2,text:'Complete invited-email verification first when the link is restricted, then continue to any password.'},
    {index:3,text:'Enter the separately delivered Password and choose Unlock, full lock hides metadata beforehand.'},
    {index:5,text:'Verify name size type expiry and sender after access, forward only with sender permission.'},
  ],
  'share-recipient-password':[
    {index:0,text:'Confirm the protected or fully locked gate and sender brand, expect full lock to hide file details.'},
    {index:1,text:'Obtain the secret through a separate channel and paste Password, surrounding whitespace is trimmed.'},
    {index:3,text:'Stop guessing before five attempts in 15 minutes, repeated failures lock the link for 15 minutes.'},
    {index:5,text:'Confirm the expected content after Unlock, the signed browser grant lasts 30 minutes.'},
  ],
  'share-recipient-report-problem':[
    {index:0,text:'Capture the exact error time zone device and browser, exclude passwords and one-time codes.'},
    {index:2,text:'Retry one transient Network or folder error once, preserve terminal link states without looping.'},
    {index:4,text:'Choose Contact for a Dosya service problem, include only the safe diagnostic context.'},
    {index:5,text:'Choose Report abuse for harmful content, review the prefilled share URL before submission.'},
  ],
  'share-send-updated-settings':[
    {index:0,text:'Open Shares then Shared by me and Edit this link, keep the existing share URL.'},
    {index:1,text:'Change only intended controls in mobile, the editor cannot add or remove invited addresses.'},
    {index:3,text:'Know that switching public clears the invited list, mobile cannot re-restrict that link.'},
    {index:5,text:'Test in a fresh private session after saving, older grants can remain valid for 30 minutes.'},
  ],
  'activity-inspect-event-details':[
    {index:0,text:'Filter the activity event list, Member choices need roster access; Action does not.'},
    {index:2,text:'Expand the selected activity row, read When as absolute and relative time.'},
    {index:3,text:'Record only displayed forensic fields, missing Where Device Source or Outcome is not reconstructed.'},
    {index:5,text:'Compare the linked resource now, keep the recorded event outcome as historical evidence.'},
  ],
  'workspace-assign-custom-role':[
    {index:0,text:'Confirm the target member row, never change the owner or your own assignment.'},
    {index:1,text:'Review the custom role permissions, include access conditions and usage limits.'},
    {index:3,text:'Wait for the Role updated receipt, match the named member and chosen role.'},
    {index:5,text:'Test from the member session, verify one permitted and one withheld operation.'},
  ],
  'workspace-invite-link-policy-test':[
    {index:1,text:'Configure the disposable invite link, set role maximum uses and expiry.'},
    {index:2,text:'Review the active link row, match role use count and expiry before copying.'},
    {index:3,text:'Open as an eligible nonmember, current members and the link creator cannot test acceptance.'},
    {index:5,text:'Remove the test member and revoke the link, never reuse the retired bearer URL.'},
  ],
  'workspace-invite-resend-existing':[
    {index:0,text:'Match the pending invitation email, do not create a duplicate row.'},
    {index:1,text:'Confirm the invitation is active, accepted revoked or expired rows cannot be resent.'},
    {index:3,text:'Wait for Invite resent, require the receipt to name the destination address.'},
    {index:5,text:'Use the newest message to accept, sign in with the exact invited email.'},
  ],
  'workspace-invite-revoke-stale':[
    {index:1,text:'Match the stale pending row, verify email role inviter and remaining expiry.'},
    {index:2,text:'Open the Revoke invite dialog, reread the recipient before confirming.'},
    {index:3,text:'Wait for Invite revoked, require The invitation is no longer valid.'},
    {index:5,text:'Test the saved URL privately, require This invite has been revoked.'},
  ],
  'workspace-member-add-folder-access':[
    {index:0,text:'Confirm the target member row, require Whole workspace and exclude the owner.'},
    {index:2,text:'Choose one live folder in Folder access, keep the anchor inside the current workspace.'},
    {index:3,text:'Save the folder boundary change, wait for Folder access updated.'},
    {index:5,text:'Test both sides of the subtree, repeat on every surface the member uses.'},
  ],
  'workspace-member-choose-role':[
    {index:0,text:'List the recipient job requirements, include pages actions team duties and protocols.'},
    {index:1,text:'Inspect every candidate role permission, include restrictions and usage limits.'},
    {index:4,text:'Choose the reviewed Role and send, bind the invitation to the exact email.'},
    {index:5,text:'Verify Pending invites and Team, the public acceptance page may label a custom role Member.'},
  ],
  'workspace-member-verify-accepted':[
    {index:0,text:'Record Team counts before acceptance, note Members and Pending invites totals.'},
    {index:2,text:'Confirm the pending row disappears, this alone does not prove effective access.'},
    {index:3,text:'Inspect the accepted member row, match email role and workspace or folder scope.'},
    {index:5,text:'Test the recipient session after reload, verify one allowed and one excluded action.'},
  ],
  'workspace-member-verify-removal':[
    {index:0,text:'Verify the member is not owner, match the exact name and email.'},
    {index:1,text:'Review residual public access first, record live share links and open file requests.'},
    {index:3,text:'Wait for Member removed, require They no longer have access to this workspace.'},
    {index:5,text:'Verify the former session is denied, file-request cleanup is best effort and share links stay live.'},
  ],
  'workspace-member-verify-role-change':[
    {index:0,text:'Read the saved Team role badge, require the intended new role.'},
    {index:1,text:'Check the folder boundary line, a role-only update must preserve its scope.'},
    {index:3,text:'Wait up to one minute and reload, reconnect every protocol client under test.'},
    {index:5,text:'Attempt one newly withheld action, preserve the absent control or exact refusal.'},
  ],
  'workspace-policy-file-requests':[
    {index:0,text:'Restrict file-request capabilities by role, require Upload files and intended listing access.'},
    {index:2,text:'Create a disposable request in scope, use a live non-Vault unlocked destination.'},
    {index:3,text:'Set every per-request safeguard, negative or non-integer file counts are refused.'},
    {index:5,text:'Verify the allowed upload then revoke, require the public request URL to close.'},
  ],
  'workspace-policy-member-test':[
    {index:0,text:'Save exactly one policy change, wait for Settings updated, Role updated, or Limit updated — Your hard limit has been saved.'},
    {index:1,text:'Verify the member role and scope, match Whole workspace or the folder label.'},
    {index:2,text:'Wait roughly 60 seconds then reload, reconnect a protocol client before testing.'},
    {index:4,text:'Perform one representative action, capture the exact success or refusal once.'},
  ],
  'workspace-policy-public-links':[
    {index:1,text:'Choose one public-link security rule, disable links require passwords or cap expiry.'},
    {index:2,text:'Save the security rule change, wait for Settings updated before testing.'},
    {index:4,text:'Test a disposable link privately, password refusal says This workspace requires a password on all share links.'},
    {index:5,text:'Review older links in Shared, revoke each URL that no longer meets policy.'},
  ],
  'workspace-role-activity-access':[
    {index:1,text:'Enable View activity log only, this permission gates the Activity route itself.'},
    {index:2,text:'Save the custom role change, wait for the full Role updated receipt.'},
    {index:4,text:'Filter by Action without roster access, Member choices also require View team members.'},
    {index:5,text:'Expand one known activity event, hidden or locked resource names stay withheld.'},
  ],
  'workspace-role-file-access':[
    {index:1,text:'Enable Access Files for browsing, page access alone grants no file operation.'},
    {index:2,text:'Select the required file actions, separate upload download rename and folder rights.'},
    {index:3,text:'Choose the deletion boundary carefully, own files differs from any file.'},
    {index:5,text:'Test every intended operation safely, require refusal for one withheld action.'},
  ],
  'workspace-storage-calculate-headroom':[
    {index:0,text:'Read account totals from the account menu, Dashboard storage covers the active workspace.'},
    {index:2,text:'Record workspace usage and optional cap, a blank cap adds no workspace ceiling.'},
    {index:3,text:'Compute owner account headroom, subtract usage across every owned workspace.'},
    {index:5,text:'Use the smaller displayed remainder, keep margin because hidden allowances can reduce gate headroom.'},
  ],
  'workspace-storage-change-allocation':[
    {index:0,text:'Open Hard limits for the workspace, locate Total workspace storage cap.'},
    {index:1,text:'Record usage cap and GB left to allocate, explicit caps share the owner pool.'},
    {index:3,text:'Save the whole-GB value or blank, require Limit updated — Your hard limit has been saved.'},
    {index:5,text:'Run one small disposable upload, verify the new boundary without filling capacity.'},
  ],
  'workspace-storage-member-quota':[
    {index:0,text:'Match the exact per-member refusal, one workspace-wide Storage per member setting applies to members.'},
    {index:3,text:'Trash that uploader’s disposable files, live attributed usage drops immediately.'},
    {index:4,text:'Purge only for broader storage space, workspace and account totals charge Trash until purge.'},
    {index:5,text:'Retry one failed upload after cleanup, verify every applicable storage gate passes.'},
  ],
  'workspace-storage-verify-cleanup':[
    {index:0,text:'Record workspace used bytes before cleanup, keep an exact baseline.'},
    {index:1,text:'Move the intended item to Trash, workspace and account storage do not drop yet.'},
    {index:3,text:'Confirm permanent deletion of reviewed Trash rows, this purge cannot be undone.'},
    {index:5,text:'Reconcile refreshed storage against baseline, include purged bytes and concurrent changes.'},
  ],
};
const phaseDescriptions=['Start in the intended account or workspace.','Use the exact control or value shown in the guide.','Keep the first change limited and reversible.','Confirm the result before relying on it.'];
const iconPaths={
  document:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 5.5v15A2.5 2.5 0 0 1 6.5 18"/>',
  select:'<path d="M12 3 5 6v5c0 4.6 2.8 7.7 7 10 4.2-2.3 7-5.4 7-10V6z"/><path d="m9 12 2 2 4-4"/>',
  input:'<path d="M5 5h14v14H5z"/><path d="M8 9h8M8 13h5"/>',
  file:'<path d="M4 7h6l2 2h8v10H4z"/>',
  progress:'<path d="M4 12h16"/><path d="m15 7 5 5-5 5"/><path d="M4 7v10"/>',
  review:'<path d="m7 12 3 3 7-7"/><path d="M5 5h14v14H5z"/>',
  alert:'<path d="M12 3 2.8 19h18.4z"/><path d="M12 9v4M12 16h.01"/>',
  toggle:'<path d="M7 7h10a5 5 0 0 1 0 10H7A5 5 0 0 1 7 7z"/><path d="M17 12h.01"/>',
};
const icon=kind=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[kind]??iconPaths.document}</svg>`;
const esc=value=>value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const clean=value=>value.replace(/<[^>]+>/g,'').replace(/!\[([^\]]*)\]\([^)]*\)/g,'$1').replace(/\[([^\]]+)\]\([^)]*\)/g,'$1').replace(/[*_`#]/g,'').replace(/\s+/g,' ').trim();
function splitStep(value){
  const text=clean(value).replace(/[.;:]$/,'');
  const candidates=[...text.matchAll(/[,;:]\s+|\s+(?:and then|then|and)\s+/gi)].map(match=>match.index).filter(index=>index>=24&&index<=64);
  let cut=candidates[0]??-1;
  if(cut<0&&text.length>60){cut=text.lastIndexOf(' ',58);if(cut<24)cut=58;}
  const title=(cut>0?text.slice(0,cut):text).trim();
  const remainder=(cut>0?text.slice(cut).replace(/^[,;:]?\s*(?:and then|then|and)?\s*/i,''):'').trim();
  return {title:title.length>60?`${title.slice(0,57).trim()}…`:title,detail:remainder};
}
function kindFor(text,index){
  const value=text.toLowerCase();
  if(/error|fail|warning|missing|wrong|unavailable|reject|problem/.test(value))return 'alert';
  if(/upload|download|import|transfer|backup|sync|progress|wait/.test(value))return 'progress';
  if(/remove|disconnect|revoke|delete|verify|confirm|review|check|test|inspect|compare/.test(value))return 'review';
  if(/enable|disable|turn on|turn off|permission|access|scope|policy/.test(value))return 'toggle';
  if(/choose|select|pick|switch|filter|sort|set /.test(value))return 'select';
  if(/enter|paste|type|name|rename|create|add|invite|write/.test(value))return 'input';
  if(/find|list|search|locate|browse|file|folder|item/.test(value))return 'file';
  if(index===3)return 'review';
  return 'document';
}
function visual(kind,label,detail){
  const safeLabel=esc(label);
  const safeDetail=esc(detail);
  return `<div class="ui-pad"><small data-fit data-min="8">Step focus</small><div class="task-card"><span class="task-glyph">${icon(kind)}</span><strong data-fit data-min="9">${safeLabel}</strong></div><div class="task-detail" data-fit data-min="8">${safeDetail}</div></div>`;
}
function renderFrame(data,theme){
  const steps=data.steps.map((step,index)=>{const copy=splitStep(step),kind=kindFor(step,index),detail=copy.detail||phaseDescriptions[index];return `<article class="step"><div class="step-top"><span class="step-no">${index+1}</span><span class="mini-icon">${icon(kind)}</span></div><h2 data-fit data-min="12">${esc(copy.title)}</h2><p data-fit data-min="10">${esc(detail)}</p><div class="ui">${visual(kind,copy.title,detail)}</div></article>`}).join('');
  return `<section class="frame ${theme==='dark'?'theme-dark':''}"><header><div><div class="brand"><span class="brand-mark">${icon('file')}</span>dosya.dev help</div><h1 data-fit data-min="24">${esc(data.title)}</h1><p class="subtitle" data-fit data-min="11">${esc(data.summary)}</p></div><div class="kind"><i></i><span data-fit data-min="9">${esc(data.category)}</span></div></header><div class="board">${steps}</div><footer><strong data-fit data-min="10">Verify before relying on the result</strong><div class="verify"><span>${check()}Correct context</span><span>${check()}Expected state</span><span>${check()}Saved result</span></div></footer></section>`;
}
const check=()=>`<b class="check">${icon('review')}</b>`;
const css=`
@font-face{font-family:SpaceGrotesk;src:url('file://${resolve(root,'public/fonts/space-grotesk-latin.woff2')}') format('woff2');font-weight:300 700;font-style:normal;font-display:swap}
@font-face{font-family:SpaceMono;src:url('file://${resolve(root,'public/fonts/space-mono-latin.woff2')}') format('woff2');font-weight:400 700;font-style:normal;font-display:swap}
*{box-sizing:border-box}html,body{margin:0;width:1200px;height:675px;overflow:hidden}.frame{--base:#f5f5f5;--surface:#fff;--panel:#fafafa;--text:#181818;--muted:#6b6b6b;--line:#dedede;--soft-line:#e4e4e4;--accent:#22c55e;--accent-text:#15803d;--accent-soft:#dcfce7;--accent-ink:#052e16;--danger:#b91c1c;position:relative;width:1200px;height:675px;overflow:hidden;padding:38px 48px 34px;background:var(--base);color:var(--text);font-family:SpaceGrotesk,Arial,sans-serif}.frame.theme-dark{--base:#131313;--surface:#1d1d1d;--panel:#212121;--text:#ededed;--muted:#a1a1a1;--line:#383838;--soft-line:#333;--accent:#22c55e;--accent-text:#4ade80;--accent-soft:#163c22;--accent-ink:#052e16;--danger:#f87171}.icon{display:block;width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}header{display:flex;align-items:flex-start;justify-content:space-between;height:142px}.brand{display:inline-flex;align-items:center;gap:9px;font-size:15px;font-weight:650}.brand-mark{display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:var(--text);color:var(--surface)}.brand-mark .icon{width:16px;height:16px}h1{width:830px;height:45px;overflow:hidden;margin:20px 0 4px;font-size:36px;line-height:1.08;letter-spacing:-.025em}.subtitle{width:790px;height:36px;overflow:hidden;margin:0;color:var(--muted);font-size:15px;line-height:1.35}.kind{display:flex;align-items:center;gap:8px;max-width:235px;height:34px;padding:8px 12px;border:1px solid var(--soft-line);border-radius:999px;background:var(--surface);font-size:12px;font-weight:600}.kind i{flex:0 0 auto;width:7px;height:7px;border-radius:50%;background:var(--accent)}.kind span{display:block;max-width:185px;overflow:hidden;white-space:nowrap}.board{display:grid;grid-template-columns:repeat(4,1fr);height:369px;border:1px solid var(--line);border-radius:16px;background:var(--surface);overflow:hidden}.step{display:flex;flex-direction:column;min-width:0;padding:20px}.step+.step{border-left:1px solid var(--soft-line)}.step-top{display:flex;align-items:center;justify-content:space-between;height:38px;margin-bottom:9px}.step-no{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:var(--text);color:var(--surface);font-size:13px;font-weight:700}.mini-icon{display:grid;place-items:center;width:36px;height:36px;border:1px solid var(--soft-line);border-radius:10px;background:var(--surface);color:var(--text)}.step h2{height:64px;overflow:hidden;margin:0 0 5px;font-size:17px;line-height:1.28;letter-spacing:-.01em}.step>p{height:47px;overflow:hidden;margin:0;color:var(--muted);font-size:12.5px;line-height:1.4}.ui{height:145px;margin-top:auto;border:1px solid var(--soft-line);border-radius:12px;background:var(--panel);overflow:hidden}.ui-pad{padding:13px}.ui small{display:block;height:14px;overflow:hidden;color:var(--muted);font-size:10px;text-transform:uppercase;letter-spacing:.08em}.task-card{display:flex;align-items:center;gap:9px;min-height:44px;margin-top:8px;padding:8px 9px;border:1px solid var(--soft-line);border-radius:9px;background:var(--surface)}.task-card strong{display:block;max-height:30px;overflow:hidden;font-size:10.5px;line-height:1.35}.task-glyph{display:grid;place-items:center;flex:0 0 auto;width:27px;height:27px;border-radius:7px;background:var(--accent-soft);color:var(--accent-text)}.task-glyph .icon{width:15px;height:15px}.task-detail{max-height:43px;overflow:hidden;margin-top:9px;padding-left:9px;border-left:2px solid var(--accent);color:var(--muted);font-size:9.5px;line-height:1.45}footer{display:flex;align-items:center;justify-content:space-between;height:58px}footer>strong{display:block;max-width:340px;overflow:hidden;font-size:13px;white-space:nowrap}.verify{display:flex;gap:21px}.verify>span{display:flex;align-items:center;gap:7px;color:var(--muted);font-size:11px}.check{display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--accent-soft);color:var(--accent-text)}.check .icon{width:13px;height:13px}
`;

function parseArticle(raw,file){
  const front=raw.match(/^---\s*\n([\s\S]*?)\n---/)?.[1];if(!front)throw Error(`${file}: missing frontmatter`);
  const meta=JSON.parse(front);
  const lightPath=raw.match(/<img src="\/screenshots\/([^"]*(?:workflow-map|help-workflow)-[^"]*\.webp)"/)?.[1];if(!lightPath)return null;
  const section=raw.match(/^## Steps[^\n]*\n([\s\S]*?)(?=^## )/m)?.[1]??'';
  const allSteps=[...section.matchAll(/^\d+\.\s+(.+)$/gm)].map(match=>match[1]);
  if(allSteps.length!==6)throw Error(`${file}: expected 6 workflow steps, found ${allSteps.length}`);
  const overrides=stepOverrides[meta.articleSlug];
  let steps;
  if(overrides){
    const indexes=overrides.map(entry=>entry.index);
    if(overrides.length!==4||new Set(indexes).size!==4||indexes.some(index=>index<0||index>=allSteps.length))throw Error(`${file}: invalid workflow-map step overrides`);
    steps=overrides.map(entry=>entry.text);
  }else{
    steps=[allSteps[0],allSteps[2],allSteps[4],allSteps[5]];
  }
  return {file,raw,meta,lightPath,darkPath:lightPath.replace(/\.webp$/,'-dark.webp'),steps};
}
function updateMarkup(article){
  if(article.raw.includes('<picture class="workflow-map">'))return article.raw;
  const path=`/screenshots/${article.lightPath}`,dark=`/screenshots/${article.darkPath}`;
  const escaped=path.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const linked=new RegExp(`<a href="${escaped}"><img src="${escaped}" alt="([^"]+)" width="1200" height="675" loading="lazy" decoding="async" \\/><\\/a>`);
  const match=article.raw.match(linked);if(!match)throw Error(`${article.file}: workflow image markup did not match`);
  const replacement=`<a class="workflow-map-link" href="${path}" data-light-href="${path}" data-dark-href="${dark}"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="${dark}" type="image/webp" /><img src="${path}" alt="${match[1]}" width="1200" height="675" loading="lazy" decoding="async" /></picture></a>`;
  let next=article.raw.replace(linked,replacement);
  const captionLink=new RegExp(`<a href="${escaped}">Open full-size screenshot<\\/a>`);
  next=next.replace(captionLink,`<a class="workflow-map-full" href="${path}" data-light-href="${path}" data-dark-href="${dark}">Open full-size screenshot</a>`);
  const frontmatter=next.match(/^---\s*\n([\s\S]*?)\n---/);
  if(!frontmatter)throw Error(`${article.file}: missing frontmatter while bumping revision`);
  const meta=JSON.parse(frontmatter[1]);
  meta.revision+=1;
  next=next.replace(frontmatter[0],`---\n${JSON.stringify(meta,null,2)}\n---`);
  return next;
}

const files=(await readdir(articleDir)).filter(file=>file.endsWith('.md')).sort();
const articles=[];
for(const file of files){if(only&&file.replace(/\.md$/,'')!==only)continue;const raw=await readFile(resolve(articleDir,file),'utf8');const article=parseArticle(raw,file);if(article)articles.push(article);}
if(!articles.length)throw Error(`No workflow maps matched${only?` --only=${only}`:''}.`);
const browser=await chromium.launch({headless:true});const page=await browser.newPage({viewport:{width:1200,height:675},deviceScaleFactor:1});
await page.setContent(`<style>${css}</style><body></body>`);await page.evaluate(()=>document.fonts.ready);
let completed=0;
try{
  for(const article of articles){
    const data={title:article.meta.title,summary:article.meta.summary,category:categoryTitles[article.meta.category]??article.meta.category,steps:article.steps};
    for(const [theme,name] of [['light',article.lightPath],['dark',article.darkPath]]){
      await page.evaluate(({html})=>{document.body.innerHTML=html},{html:renderFrame(data,theme)});
      const problems=await page.evaluate(()=>{
        for(const element of document.querySelectorAll('[data-fit]')){
          const min=Number(element.getAttribute('data-min')??9);let size=parseFloat(getComputedStyle(element).fontSize);
          while((element.scrollWidth>element.clientWidth+1||element.scrollHeight>element.clientHeight+1)&&size>min){size-=.5;element.style.fontSize=`${size}px`;}
        }
        return [...document.querySelectorAll('[data-fit]')].filter(element=>element.scrollWidth>element.clientWidth+1||element.scrollHeight>element.clientHeight+1).map(element=>element.textContent?.trim());
      });
      if(problems.length)throw Error(`${article.file} (${theme}) overflow: ${problems.join(' | ')}`);
      const png=await page.locator('.frame').screenshot({type:'png'});
      await sharp(png).webp({quality:92,smartSubsample:true}).toFile(resolve(screenshotDir,name));
      const metadata=await sharp(resolve(screenshotDir,name)).metadata();if(metadata.width!==1200||metadata.height!==675)throw Error(`${name}: unexpected dimensions`);
    }
    const next=updateMarkup(article);if(next!==article.raw)await writeFile(resolve(articleDir,article.file),next);
    completed++;if(completed%20===0||completed===articles.length)console.log(`Workflow maps: ${completed}/${articles.length}`);
  }
}finally{await browser.close();}
console.log(`Generated ${articles.length*2} theme-aware workflow-map assets with no text overflow.`);
