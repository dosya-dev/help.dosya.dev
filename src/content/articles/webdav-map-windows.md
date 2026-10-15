---
{
  "articleId": "hc-webdav-map-windows",
  "locale": "en",
  "revision": 5,
  "title": "Map Dosya WebDAV in Windows",
  "summary": "Map the copied HTTPS WebDAV URL in Windows File Explorer, check WebClient limits, and verify the correct remote tree without assuming tested compatibility.",
  "category": "integrations",
  "articleSlug": "webdav-map-windows",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source reviewed 2026-10-14: apps/web/src/pages/integrations/webdav.tsx; apps/web/src/components/api-keys/create-key-dialog.tsx; apps/api/src/lib/webdav/auth.ts; apps/api/src/pages/webdav/[...path].ts; apps/api/src/lib/webdav/path-resolver.ts; apps/api/src/lib/webdav/methods/propfind.ts; apps/api/src/lib/webdav/methods/put.ts; apps/api/src/lib/webdav/methods/get.ts; apps/api/src/lib/webdav/methods/delete.ts; apps/api/src/lib/webdav/views.ts; apps/api/src/lib/usage/plan-limits.ts; apps/api/src/lib/versioned-write.ts; apps/api/src/lib/folder-trash.ts; apps/api/src/pages/api/internal/files/purge-trash.ts; apps/api/src/pages/api/internal/files/trim-versions.ts; apps/api/src/lib/repo/repo-d1/files.ts. Windows native mapping not tested; process map illustrates sourced steps, not Windows UI. Official references: https://learn.microsoft.com/en-us/iis/publish/using-webdav/using-the-webdav-redirector; https://support.microsoft.com/en-us/windows/experience/connectivity-networking/file-sharing-over-a-network-in-windows; https://learn.microsoft.com/en-us/windows/whats-new/deprecated-features; https://docs.cyberduck.io/cyberduck/bookmarks/.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-cyberduck"
  ],
  "keywords": [
    "webdav map windows",
    "WebDAV mounted-drive operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Windows File Explorer can map an HTTPS WebDAV address when its **WebClient** service and redirector are available. Use the complete Dosya mount URL and an API key as the password. Microsoft has deprecated WebClient, so this built-in route depends on your Windows installation and policy; [Cyberduck](/integrations/webdav-cyberduck) is an alternative if the redirector is unavailable.

This procedure combines Microsoft's documented WebDAV mapping with current Windows File Explorer controls. It has not been exercised against Dosya on a Windows computer. The diagram below is a process map, not a captured Windows dialog.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webdav-map-windows-process-2026-10-14.webp" data-light-href="/screenshots/webdav-map-windows-process-2026-10-14.webp" data-dark-href="/screenshots/webdav-map-windows-process-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webdav-map-windows-process-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webdav-map-windows-process-2026-10-14.webp" alt="Windows WebDAV process: check WebClient, map the copied HTTPS URL, authenticate with email and API key, and verify the All tree." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Mapping creates a remote drive connection; test the All destination before opening important cloud files. <a class="workflow-map-full" href="/screenshots/webdav-map-windows-process-2026-10-14.webp" data-light-href="/screenshots/webdav-map-windows-process-2026-10-14.webp" data-dark-href="/screenshots/webdav-map-windows-process-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Prepare the Windows connection

Open Dosya **Integrations → WebDAV** in the correct workspace. Copy the whole URL under **Endpoint & credentials**, including the mount path and trailing slash. Use `https://api.dosya.dev/…`, not a marketing page, share link, or the hostname alone.

Create a dedicated key in **Profile → API keys → New API key**. For browsing, choose **Read only**; for uploads and management, choose **Full access**. Select **Restrictions and expiry → Protocols → Only the ones I pick → WebDAV** and pin the intended **Workspace**. Copy the full secret after **Generate key**. Your workspace role must separately allow WebDAV and the requested file actions.

On Windows, open **Services** and inspect **WebClient**. If it is present but stopped, an administrator can start it when organizational policy permits. If the service is absent or policy disables it, use another HTTPS WebDAV client rather than assuming every current Windows edition provides it. Microsoft lists WebClient as deprecated in its [Windows feature notice](https://learn.microsoft.com/en-us/windows/whats-new/deprecated-features).

## Steps: map a drive letter in File Explorer

1. Open **File Explorer → This PC**. Choose **More (…) → Map network drive**, or right-click **This PC** for that command. These current controls are described in [Microsoft's network-drive instructions](https://support.microsoft.com/en-us/windows/experience/connectivity-networking/file-sharing-over-a-network-in-windows).
2. Select an unused **Drive** letter. In **Folder**, paste the copied HTTPS WebDAV URL with its full path. Microsoft's [WebDAV redirector procedure](https://learn.microsoft.com/en-us/iis/publish/using-webdav/using-the-webdav-redirector) specifically documents a web URL in this wizard.
3. Use **Connect using different credentials** where offered. Decide whether to request **Reconnect at sign-in**; that setting asks Windows to reconnect later, but expired keys, unavailable network access or policy can still prevent it.
4. Select **Finish**. When credentials are requested, enter the exact key-owner email as username and the full `dos_…` API key as password. Do not use a Windows account password or Dosya sign-in password. Avoid remembering the credential on a shared computer.
5. Open the resulting drive. For a normal mount, enter **All** to reach the actual file tree. **Documents**, **Videos**, **Images**, **Shared** and **Deleted** are read-only views. An anchored key instead shows its allowed folder's children directly.

**Add a network location** creates a named location rather than this drive-letter mapping. It is not necessary for the documented **Map network drive** procedure; do not switch between the two and then assume a drive letter was assigned. If your Windows wizard cannot accept the copied HTTPS URL, stop and use Cyberduck instead of guessing an SMB share address.

## Expected result: verify the remote location

First open a known small file and download a copy to a separate local directory. Compare its byte size and contents. With Full access and upload permission, copy a uniquely named disposable text file into **All** or a permitted folder. Wait for the copy to finish, refresh **Files** in Dosya's matching workspace, and check the filename, size and downloaded contents there.

Explorer is accessing cloud files. A mapped drive alone does not establish offline synchronization. Opening an editor and saving an existing remote filename may replace its content; test your application's saving behavior on a disposable file first. Versions have retention limits, so keep independent originals for recovery. Deleting cloud items can move them to Dosya Trash and revoke share links; permanently purged copies cannot be restored.

## Windows limits and errors

Microsoft documents WebClient's default **FileSizeLimitInBytes** as **50,000,000 bytes** for transfers and **FileAttributesLimitInBytes** as **1,000,000 bytes** for a collection's properties. These are Windows client settings, not Dosya storage allowances. A small sample succeeding does not prove large files or a large listing will work. Use Cyberduck for those cases before considering administrator-managed registry changes.

The documented **BasicAuthLevel** default of **1** permits Basic authentication over HTTPS only; **0** disables it. Keep HTTPS for Dosya's email/API-key authentication. Setting **2** would also permit unencrypted HTTP and is unnecessary for this endpoint. Local policy may differ from the documented defaults.

| Symptom | What to check |
| --- | --- |
| **System error 67** / **The network name cannot be found** | Check WebClient availability and the full HTTPS URL; do not treat this message as proof that the key is wrong. |
| **System error 5** / **Access is denied** or repeated login | Reenter owner email/full key, then check expiry, WebDAV protocol permission and role access. |
| Works for small files only | Inspect Windows transfer/collection limits and retry the same task with a dedicated client. |
| Can browse but cannot copy into the drive root | Enter All, or the anchored destination; read-only views refuse writes. |
| **429**, **413**, **423** or **507** from Dosya | Respect retry delay, size policy, locks or storage refusal rather than altering Windows authentication settings. |

Microsoft's redirector documentation targets older Windows releases. The current File Explorer control names and deprecation notice are separately sourced; neither establishes tested Dosya compatibility on your device. Capture the exact local error and time if further diagnosis is needed.

## Disconnect without deleting cloud files

In This PC, disconnect the mapped drive when finished; `net use Z: /delete` is an alternative for a mapping you created as Z:. If Windows saved the login, remove the relevant saved entry through **Credential Manager → Windows Credentials**. Revoke the dedicated key in Dosya to prevent its future use. These connection-removal actions do not erase uploaded files; keep cloud deletion separate.

## Related guides

- [Cyberduck WebDAV setup](/integrations/webdav-cyberduck)
- [Complete WebDAV limits and recovery](/integrations/webdav)
