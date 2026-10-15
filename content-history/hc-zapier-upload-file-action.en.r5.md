---
{
  "articleId": "hc-zapier-upload-file-action",
  "locale": "en",
  "revision": 5,
  "title": "Upload a file to Dosya from Zapier",
  "summary": "Use Dosya Upload File with a downloadable file reference, explicit name and destination. Check the 50 MiB limit, outputs, retries and safe Zap publishing.",
  "category": "integrations",
  "articleSlug": "zapier-upload-file-action",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14; no production account or native client installation performed. Product claims checked against apps/zapier/package.json; apps/zapier/src/authentication.js; apps/zapier/src/creates/upload-file.js; apps/zapier/src/creates/upload-file-from-url.js; apps/zapier/src/lib/files.js; apps/zapier/src/http.js; apps/zapier/src/lib/samples.js; apps/zapier/test/creates.upload-file.test.js; apps/api/src/lib/upload/open.ts; apps/api/src/lib/upload/finalize-session.ts; apps/api/src/lib/access/rest-scope.ts; apps/zapier/test/authentication.test.js; apps/zapier/test/connect-help.test.js. External client procedure checked against https://help.zapier.com/hc/en-us/articles/8496288813453-Send-files-in-Zap-workflows; https://docs.zapier.com/integrations/build/troubleshoot-action-timeouts. Light/dark process diagrams depict documented controls and outcomes, not captured UI.",
  "related": [
    "hc-zapier-connect",
    "hc-api-key"
  ],
  "keywords": [
    "Zapier upload file to cloud storage",
    "Upload File",
    "Zapier 50 MB upload limit",
    "Zapier File name",
    "Zapier timeout"
  ]
}
---
Use the **dosya** app's **Upload File** action to copy a file from a Zap trigger or previous action into Dosya cloud storage. The **File** input is a Zapier file reference or downloadable URL, not n8n binary data or pasted base64 text.

## Connect the Dosya account

Add Dosya to the Zap and connect it with **dosya API key**. Create the key at [Profile → API keys](https://app.dosya.dev/profile/api): choose **Full access**, enable **API** and leave the folder anchor empty. Pin it to a workspace if the Zap should access only that workspace. Do not use your Dosya password. The connection is labelled with the key owner's email.

The authentication check requires full scope because the integration also subscribes to file events. Its scope error reads **This key has “…” scope. dosya needs a key with full scope to subscribe to file events. Create a full-scope key and reconnect.** A Full access key still needs the member's upload permission for the destination; workspace pinning, expiry and any explicit key limits are enforced. Folder-anchored WebDAV/S3 keys are unsuitable for this REST integration.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/zapier-upload-file-action-process-2026-10-14.webp" data-light-href="/screenshots/zapier-upload-file-action-process-2026-10-14.webp" data-dark-href="/screenshots/zapier-upload-file-action-process-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/zapier-upload-file-action-process-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/zapier-upload-file-action-process-2026-10-14.webp" alt="Zapier Upload File process: choose a downloadable File, select Workspace and Folder, supply File name and inspect the returned File ID." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Zapier fetches the source first; explicit File name avoids the action’s upload fallback and the destination is checked before publishing. <a class="workflow-map-full" href="/screenshots/zapier-upload-file-action-process-2026-10-14.webp" data-light-href="/screenshots/zapier-upload-file-action-process-2026-10-14.webp" data-dark-href="/screenshots/zapier-upload-file-action-process-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: configure and test Upload File

1. Test a trigger or file-producing action with a fresh, non-confidential file. Inspect the sample for an actual file reference or a direct-download URL. A preview page, login page or ordinary cloud-sharing page may return HTML rather than the desired file.
2. Add **dosya → Upload File** and select the connected account. Configure the fields below.

| Action field | What to select |
| --- | --- |
| **Workspace** (required) | The intended workspace from the account's available list. |
| **Folder** (optional) | A folder in that workspace; empty means workspace root. |
| **File** (required) | The previous step's file reference, or a URL that Zapier can download without an interactive login. |
| **File name** (optional) | An explicit name with extension, such as `zap-proof-20261014.pdf`. |

3. Use a unique File name for the first check. Although the field hint says the incoming name is retained, the current action actually defaults to **upload** if File name is empty. Map the upstream filename or enter one to preserve its extension and type.
4. Run the action's test once. Read **File ID**, **File name**, **Size in bytes** and **Folder ID** in the result, then inspect that file in Dosya before running the test again.
5. Check the entire Zap's trigger filters and downstream actions. Publish/turn on the Zap only after confirming its real destination and repeat-run behavior. A successful setup test already writes a real file; publishing does not undo it.

Zapier resolves file objects into URLs for the action. Dosya's integration downloads the source without sending your Dosya API key to that external host, then uploads the received bytes. A public URL must return file content directly and remain valid when the Zap runs. For expiring references, refresh old test data. Avoid links requiring browser cookies; use your source app's file/download output. An HTTP 200 login/preview page can still be saved as a file, so verify the contents, not just success status.

## Verify the result and downstream mapping

The result includes `id`, `file_id`, `name`, `size` and `folder_id`; `file_id` duplicates `id`. The selectable fields expose File ID, File name, Size in bytes and Folder ID. An upload to the top level has a null Folder ID. This action returns no `version` field and no dehydrated `file` pointer for another app to download. Do not map either from its sample. Use File ID in another Dosya action when you need an operation on the saved file.

Open **Files** in the chosen Dosya workspace, locate the target folder and check the exact name/size. Download the sample to confirm its contents. Upload File does not create a public share link; recipients receive nothing unless another Zap step deliberately sends or shares it.

## Upload limits and retries

The action accepts at most **52,428,800 bytes (50 MiB)**. The displayed message calls this **50 MB**. Declared source size is checked before buffering; actual downloaded size is checked too. Missing Content-Length and decompressed responses are measured from their real bytes. For a larger file choose **Upload File From URL**, which imports on Dosya's side instead of passing the file through this action; plan storage and upload policies still apply to that import.

Zapier actions have a **30-second** execution deadline, so even a file under the ceiling can time out when download plus upload is slow. After **The app did not respond in-time. It may or may not have completed successfully.**, inspect Dosya and the run history before replaying. A run-based idempotency key allows retrying the same upload to reuse its saved result. A new run is distinct, and an intentional replay must not be assumed to reuse the original run identity. If the same visible filename already exists in that folder, Dosya writes a new version rather than another file with that name. Use stable naming when versioning is wanted and an event-specific name when separate files are wanted.

A revoked key cannot authorize future runs; removing a connected account does not delete files already saved. Same-name updates change the current contents, so test in a dedicated folder before mapping production filenames.

## Recover from a failed test

| Failure | Recovery |
| --- | --- |
| **Could not fetch the file: the source at … answered with status …** | Repair the source URL/access or refresh the source file reference. A 404/500 response is rejected before a Dosya upload. |
| File contains a web page | Replace the preview/login URL with a direct file output and verify a new test name. A 200 response alone cannot establish correct contents. |
| **This file is larger than 50 MB, which is the limit for the Upload File action.** | Switch to Upload File From URL; confirm the source is accessible to the import service and the plan has capacity. |
| Authentication failure or full-scope message | Reconnect with a complete, valid Full access API key, without a folder anchor. |
| Workspace/Folder missing or 403 | Check account email, pin and member permissions, then reload the field choices. Do not select a similarly named folder in another workspace. |
| Storage or file-policy refusal | Resolve the actual account/workspace/key limit shown in the response before replaying. |
| Timeout | Check whether a file/version was already saved; use a smaller/faster source or the asynchronous URL action. |

## Expected result

The tested Zap action returns a real File ID whose bytes match the source in the chosen Dosya folder. After publishing, monitor the first live run and its filename/version behavior before relying on unattended uploads.

## Related guides

- [Connect Zapier](/integrations/zapier)
- [Manage API keys](/developers/api-key)
