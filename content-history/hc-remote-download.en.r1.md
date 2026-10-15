---
{"articleId":"hc-remote-download","locale":"en","revision":1,"title":"Download a direct URL into your workspace","summary":"Give Dosya a direct HTTPS file URL, choose the destination folder, monitor the server-side transfer, and resolve common source or quota failures.","category":"integrations","articleSlug":"remote-download","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current Remote download form, destination picker, transfer states, progress, cancellation and source error labels against the local current web app and API on 2026-10-12. The screenshot uses isolated fictional URLs.","related":["hc-upload-files","hc-download-files","hc-storage-usage","hc-import-google-drive"],"keywords":["remote download","direct URL","fetch file","server-side download","download into workspace","HTTPS file link"]}
---
Remote download lets Dosya fetch a file from a direct HTTPS URL into an ordinary workspace folder. The source transfer runs on Dosya's servers, so the file does not pass through your local connection.

## Before you start

- Use a direct HTTPS link that returns the file itself. A Google Drive, Dropbox or other share page is not a direct file link.
- Select the destination workspace and confirm you have upload access there.
- Check available storage and workspace file-size or file-type policies.
- Use only a source you are authorized to copy.
- These steps create an ordinary workspace file. They do not place the result in Vault.

## Steps: start and monitor a remote download

1. Open **Integrations → Remote download**.
2. Confirm the active workspace above the sidebar.
3. Paste the complete direct HTTPS file URL.
4. Select the folder button, choose the destination, and verify its name. **Home** is the workspace root.
5. Select **Fetch file**.
6. Watch the job move through **Queued**, **Downloading** and **Finalizing** until it shows **Done**. You may close this page after the job starts and return to review it.
7. Open **Files**, go to the destination and confirm the downloaded name and size.

<figure class="help-screenshot"><a href="/screenshots/remote-download-jobs-2026-10-12.webp"><img src="/screenshots/remote-download-jobs-2026-10-12.webp" alt="Dosya Remote download page with direct-link field, destination folder, Fetch file action and representative downloading, done and failed jobs." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Remote download shows progress and a final status. The URLs and files shown here are fictional isolated examples; a share page fails because it is not a direct file link. <a href="/screenshots/remote-download-jobs-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The job reaches **Done**, and the completed file appears in the chosen ordinary workspace folder. The local device did not need to relay the source bytes.

## Limits and source requirements

- Only direct HTTPS file links are accepted. Web pages that require a click, cookie, interactive login or provider share flow may fail.
- The source must report enough information for a safe download. A source with unknown size can be refused.
- Workspace storage, file-size, file-type, permission and locked-destination rules still apply.
- If the source changes during transfer, Dosya can stop rather than store an inconsistent result.
- Removing a completed job from the list is separate from deleting its stored file in **Files**.

## Troubleshooting

**Not a direct file link.** Open the provider's supported import integration, or obtain an authorized URL that returns the file body directly. Copying a browser share page is not enough.

**Address not allowed.** Use a normal public HTTPS file source. Private, local or otherwise restricted network destinations are refused.

**Unknown file size or File too large.** Use a source that reports its size and confirm the resulting file fits current account and workspace limits.

**Not enough storage.** Check workspace usage, deleted items and applicable caps. Free space or choose a workspace with enough allowance before retrying.

**File changed on the source server.** Wait for the source to stabilize, obtain a fresh direct link and start a new job.

**Connection to the source failed or Source returned HTTP error.** Check that the source is online and the URL remains valid without your signed-in browser session.

**The destination is a locked backup.** Choose a writable ordinary folder permitted by your role.

## Related guides

- [Upload files and folders from your device](/uploading/files-and-folders)
- [Download files from Dosya](/uploading/download-files)
- [Understand storage usage and quota checks](/uploading/storage-usage)
- [Import from Google Drive](/integrations/google-drive)
