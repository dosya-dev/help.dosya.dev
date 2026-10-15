---
{"articleId":"hc-cloud-import-troubleshoot","locale":"en","revision":1,"title":"Troubleshoot a cloud import","summary":"Resolve connection, selection, permission, quota and partial-result problems when importing from Google Drive, OneDrive or Dropbox.","category":"troubleshooting","articleSlug":"cloud-imports","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed cloud account, picker, job and destination failure paths against the local current cloud-import UI, API and tests on 2026-10-12. The screenshot uses isolated sample data.","related":["hc-cloud-import-connect","hc-cloud-import-destination","hc-cloud-import-progress","hc-storage-usage"],"keywords":["cloud import failed","Google Drive import error","OneDrive import error","Dropbox import error","partial import","import troubleshooting"]}
---
Troubleshoot cloud imports in order: connection, source access, destination permission, available storage and job result. This avoids reconnecting an account when only one selected item or destination is the problem.

## Before you start

- Record the provider, connected email, Dosya workspace, destination and visible error.
- Keep source files unchanged while diagnosing.
- Check Dosya service status and the provider's own status.
- Never send provider tokens, passwords or private file links in a public report.

## Steps: isolate the failure

1. Confirm the connected account email can open the source directly at the provider.
2. Reopen the provider picker and test one small ordinary file.
3. Choose a writable Dosya folder with enough storage.
4. Start the small import and inspect its job state.
5. If it succeeds, retry only the failed original items in smaller groups.
6. Verify completed items before removing the provider originals or restarting a whole folder.

<figure class="help-screenshot"><a href="/screenshots/import-google-picker-selected-2026-10-11.webp"><img src="/screenshots/import-google-picker-selected-2026-10-11.webp" alt="Dosya provider picker with isolated files selected for a controlled cloud-import test and destination confirmation." width="1429" height="799" loading="lazy" decoding="async" /></a><figcaption>A small controlled selection helps separate account and destination problems from one unsupported or inaccessible source item. <a href="/screenshots/import-google-picker-selected-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled file reaches the destination, or produces a narrower error tied to provider access, source type, destination permission, quota or connectivity.

## Limits and common causes

- Organization policies can block the connection or selected shared content.
- Provider-native documents, shortcuts and shared-drive objects may not import like ordinary files.
- Expired authorization can affect a previously connected account.
- A partial job can leave valid completed files beside failed items.
- Retrying an entire completed selection can create duplicates and consume storage.

## Troubleshooting by symptom

**The account cannot connect.** Check pop-ups, provider organization policy and the chosen account. Disconnect a stale row before reconnecting when appropriate.

**The picker is empty.** Confirm the connected email, provider permission and whether the content is shared with that account.

**Import cannot start.** Select a supported source item, a writable destination and the correct active workspace.

**The job partially completed.** Verify successful items and retry only failures. Keep a list of missing paths.

**The job reports quota or policy failure.** Compare available storage and workspace upload rules with the affected item.

**A repeat created duplicates.** Use the duplicate review and compare paths and sizes before removing any copy.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Choose an import destination](/integrations/import-destination)
- [Monitor and verify an import](/integrations/import-progress)
- [Understand storage usage](/uploading/storage-usage)
