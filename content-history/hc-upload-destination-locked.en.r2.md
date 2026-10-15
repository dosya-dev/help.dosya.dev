---
{"articleId":"hc-upload-destination-locked","locale":"en","revision":2,"title":"Fix an upload blocked by the destination","summary":"Check the destination's lock and role restrictions, then choose a writable folder and restart the affected upload deliberately.","category":"uploading","articleSlug":"upload-destination-locked","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed the upload destination picker, upload permission gate, folder lock behavior, queued-item destination fields, and retry controls against current local web and API source on 2026-10-14. The screenshot uses an isolated sample file.","related":["hc-failed-upload","hc-lock-folder","hc-workspace-folder-access"],"keywords":["upload destination locked","upload permission denied","writable cloud folder","folder access upload","Dosya cloud storage"]}
---
An upload cannot write through a full folder lock, a role restriction, or a destination that no longer exists. Confirm the exact folder and access rule first. If you choose another folder, add the source file again after changing **Upload options** because retrying the existing row keeps its original destination.

## Before you start

- Open the Dosya upload queue in the current released client.
- Confirm the active account and workspace, then identify upload error naming a locked, restricted, or unavailable destination.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: fix an upload blocked by the destination

1. Open the Dosya upload queue and confirm the active account and workspace.
2. Locate upload error naming a locked, restricted, or unavailable destination and verify its name or identifying details.
3. Verify the folder lock and role restrictions. Have an owner change access, or select an authorized writable folder under **Upload options** and add the source file again.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the test upload can write to its selected destination.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/upload-error-retry-2026-10-11.webp"><img src="/screenshots/upload-error-retry-2026-10-11.webp" alt="Dosya upload queue showing a failed item and its retry control." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Retry one item first and preserve the exact error when a transfer keeps failing. <a href="/screenshots/upload-error-retry-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the test upload can write to its selected destination. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.
- **Retry** keeps the destination recorded on the failed row. Use a new queue item when you intentionally choose a different folder.

## Troubleshooting

**The expected control is missing.** Return to the Dosya upload queue, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**Retry returns the same destination error.** The row still points to the original folder. Remove it, select a writable destination under **Upload options**, and add the source file as a new upload.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Troubleshoot a failed upload](/troubleshooting/failed-upload)
- [Lock a folder with a password](/files/lock-folder)
- [Restrict a workspace member to one folder](/workspaces/folder-access)
