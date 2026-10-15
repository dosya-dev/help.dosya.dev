---
{
  "articleId": "hc-webdav-cyberduck",
  "locale": "en",
  "revision": 6,
  "title": "Connect Cyberduck with WebDAV",
  "summary": "Save a Cyberduck HTTPS bookmark with the exact Dosya mount fields, choose All or an anchored root, and verify both transfer directions.",
  "category": "integrations",
  "articleSlug": "webdav-cyberduck",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/integrations/webdav.tsx; apps/web/src/components/api-keys/create-key-dialog.tsx; apps/api/src/lib/webdav/auth.ts; apps/api/src/pages/webdav/[...path].ts; apps/api/src/lib/webdav/path-resolver.ts; apps/api/src/lib/webdav/methods/propfind.ts; apps/api/src/lib/webdav/methods/put.ts; apps/api/src/lib/webdav/methods/get.ts; apps/api/src/lib/webdav/methods/delete.ts; apps/api/src/lib/webdav/views.ts; apps/api/src/lib/usage/plan-limits.ts; apps/api/src/lib/versioned-write.ts; apps/api/src/lib/folder-trash.ts; apps/api/src/pages/api/internal/files/purge-trash.ts; apps/api/src/pages/api/internal/files/trim-versions.ts; apps/api/src/lib/repo/repo-d1/files.ts; src/pages/developer/cyberduck.astro. Native figures and the 58-byte Cyberduck check retain the 2026-10-11 isolated-source/macOS verification from hc-webdav-connect; no new production or Windows-client verification. Official references: https://docs.cyberduck.io/protocols/webdav/; https://docs.cyberduck.io/cyberduck/bookmarks/; https://docs.cyberduck.io/cyberduck/connection/.",
  "related": [
    "hc-webdav-connect",
    "hc-api-key-protocols"
  ],
  "keywords": [
    "webdav cyberduck",
    "protocol client workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
To connect Cyberduck to Dosya cloud storage, save a **WebDAV HTTPS** bookmark using the address from **Integrations → WebDAV**. The login is your Dosya email plus an API key. A normal mount opens a collection list; its **All** collection is the writable folder tree.

## Prepare the key and address

Select the destination workspace in the Dosya web app before opening **Integrations → WebDAV**. Copy the full address under **Endpoint & credentials**, including its `/webdav/mount/…/` path and trailing slash. The workspace ID identifies the storage; the final name segment labels the mount. A share URL is not a WebDAV endpoint.

In **Profile → API keys → New API key**, give this computer's Cyberduck connection a recognizable label under **What is it for?**. Choose **Read only** for browsing/downloads or **Full access** for the upload check below. **Upload only** cannot list your folders. Under **Restrictions and expiry → Where can it reach? → Protocols**, choose **Only the ones I pick**, select **WebDAV**, and pin **Workspace** to the intended workspace. Select **Generate key** and copy the complete `dos_…` secret before **Done**: the saved prefix is insufficient and the secret cannot be shown again.

Your role must permit WebDAV and each requested file action. A Full access key cannot expand a viewer's workspace permissions. Review expiry, allowed addresses, active hours and usage limits before saving the bookmark.

<figure class="help-screenshot"><a href="/screenshots/webdav-endpoint-2026-10-11.webp"><img src="/screenshots/webdav-endpoint-2026-10-11.webp" alt="Dosya WebDAV setup with a sample workspace mount address and email/API-key credential guidance." width="1160" height="850" loading="lazy" decoding="async" /></a><figcaption>The copied mount path belongs to the selected workspace; keep it when splitting the address into Cyberduck fields. <a href="/screenshots/webdav-endpoint-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: create the Cyberduck bookmark

1. Open Cyberduck's **Bookmarks** view and use **Bookmark → New Bookmark**. Choose the secure **WebDAV (HTTPS)** protocol; versions using **WebDAV (HTTP/SSL)** mean HTTPS. Do not select plain HTTP, FTP or SFTP for this address.
2. Give **Nickname** a name that identifies the workspace and computer. Enter these connection values, with **Path** separate from **Server**.

| Bookmark field | Value |
| --- | --- |
| Server | `api.dosya.dev` |
| Port | `443` |
| Username | The key owner's Dosya account email |
| Password, when prompted | The full API-key secret |
| Path | The entire path after the hostname in the copied endpoint |
| Anonymous Login | Off |

3. Retain the copied path's encoded characters and workspace label. If a version accepts the complete URL, check the resulting Server and Path before connecting. Do not put the key into a URL or bookmark nickname.
4. Close the editor and open the bookmark. Enter the API key in the password prompt. Choose credential saving only for a computer whose user account you trust. Cyberduck stores saved passwords in macOS Keychain or Windows Credential Manager; deleting a bookmark should not be treated as revoking its secret.

<figure class="help-screenshot"><a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp"><img src="/screenshots/webdav-cyberduck-connection-2026-10-11.webp" alt="Native Cyberduck connection dialog separating the HTTPS server, port, username and path; the password is masked." width="1040" height="750" loading="lazy" decoding="async" /></a><figcaption>This verified dialog used a local test transport. For the live bookmark, replace the sample server with api.dosya.dev, use 443 and retain your copied mount path. <a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

This connection capture is from Cyberduck 9.5.4 on macOS against an isolated current-source Dosya API. The same local check listed six collections and transferred a 58-byte sample; it did not certify a Windows client or production certificate behavior. A real connection must validate the certificate for `api.dosya.dev`; investigate certificate or hostname warnings before providing a key.

## Choose the correct root

An ordinary workspace bookmark lists **All**, **Documents**, **Videos**, **Images**, **Shared** and **Deleted**. Open **All**, then the destination folder, before uploading. The mount root and the other five collections are read-only views, even with Full access. **All** represents the workspace's actual tree, so it is not an extra folder inside Dosya Files.

<figure class="help-screenshot"><a href="/screenshots/webdav-cyberduck-collections-2026-10-11.webp"><img src="/screenshots/webdav-cyberduck-collections-2026-10-11.webp" alt="Cyberduck connected to the sample mount, with the All, Deleted, Documents, Images, Shared and Videos collections listed." width="2200" height="1600" loading="lazy" decoding="async" /></a><figcaption>Double-click All to reach folders that accept Cyberduck uploads; Deleted is a browsing view rather than a restore control. <a href="/screenshots/webdav-cyberduck-collections-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

If the key also uses **Choose folder…**, that selected folder becomes the root and its children appear immediately. There is no All collection in this case. Use the same copied workspace mount URL; do not append the anchor's name again. Trashing the anchor blocks the connection until it is restored. Workspace pinning alone does not imply a folder anchor.

## Check an upload and download

1. Make a small local text file with a unique name, such as `cyberduck-check-20261014.txt`. Keep the original outside your download destination.
2. Open an allowed folder in **All**, or inside the anchored root. Use **File → Upload…**, select the sample, and wait for Cyberduck's transfer completion. Stop at any overwrite prompt during this first test.
3. Refresh the browser listing. In Dosya **Files**, open the same workspace/folder and compare the name and byte size. A completed client transfer alone does not identify the intended destination.
4. Download the remote sample into another local directory. Compare its bytes with your original using a file comparison or SHA-256 tool. For read-only bookmarks, use a known existing file instead of uploading.
5. Close the connection and reopen the saved bookmark to confirm its path. This is an online file connection, not an offline folder-sync setup.

## Expected result

The bookmark reopens the intended root, and the test file downloaded through Cyberduck matches your original. Your cloud copy is available in the same Dosya workspace; saving the bookmark does not create an offline backup.

## Limits and consequences

WebDAV is available to free and paid accounts. Storage capacity, workspace extension/size policy and explicit role/key limits still apply. Protocol plan ceilings do not count WebDAV requests or concurrency at the door, but daily download egress still matters. Separate throttles allow 600 requests/minute per user and 1,200 per IP. On **429**, wait for **Retry-After** and reduce parallel transfers; repeated reconnects do not repair throttling.

An upload to a new path returns 201; replacing an existing path returns 204 and writes a new Dosya version. History defaults to 10 versions unless the workspace changes it; free-owner versions are also subject to the seven-day retention sweep. Keep an independent copy before an intentional overwrite. A client delete moves eligible items to Trash and revokes their share links. Trash consumes storage until purge; retention is seven days for free owners and 30 days for other plans. Permanent purge cannot be undone, and restore does not recreate a revoked share link.

## Resolve the actual failure

| Response | Recovery |
| --- | --- |
| **401 Unauthorized** or another password prompt | Check the full secret, owner email, expiry and revocation. A WordPress site key cannot authenticate WebDAV. |
| **500 Internal Server Error** at login | Wait for the credential service; do not assume a valid secret changed. |
| **403 This API key is not permitted to use WebDAV** | Select WebDAV in that key's protocol restrictions or create a replacement for this client. |
| **403 This role is not permitted to use WebDAV** | Ask the workspace owner/admin to permit this door. |
| **403 This API key is pinned to a different workspace** | Match the bookmark path to the key's pinned workspace. |
| **411 Content-Length header is required** | The upload request needs its byte length; retry with a client mode that sends it. |
| **409 Parent folder does not exist** | Refresh and open a real destination beneath All or the anchor. |
| **423 Locked** | Resolve the file/folder lock in Dosya before retrying. |
| **413** or **507** | Check the displayed size refusal or storage availability; changing the bookmark cannot raise workspace limits. |

Cyberduck may wrap a server response in its own error dialog. Record the numeric response, filename and time, with the key redacted. Upload failures at the root require entering **All**; read-only smart views do not become writable by reconnecting.

## Remove this computer's access

Disconnect the Cyberduck session and remove its bookmark when no longer needed. Delete its saved credential separately from Keychain Access or **Control Panel → User Accounts → Credential Manager → Windows Credentials** as applicable. In Dosya **Profile → API keys**, revoke the dedicated Cyberduck key to prevent its reuse. Removing the bookmark or key leaves existing cloud files in place; deleting files is a separate cloud action.

## Related guides

- [WebDAV connection and protocol behavior](/integrations/webdav)
- [API-key controls](/developers/api-key)
