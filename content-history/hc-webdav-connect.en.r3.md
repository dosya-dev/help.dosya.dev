---
{
  "articleId": "hc-webdav-connect",
  "locale": "en",
  "revision": 3,
  "title": "Connecting to Dosya with WebDAV",
  "summary": "Create a WebDAV key, copy your workspace address, connect a client and verify a sample upload in the writable All folder.",
  "category": "integrations",
  "articleSlug": "webdav",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified current web UI key creation and native Cyberduck 9.5.4 on macOS on 2026-10-11 against isolated current-source API/D1/R2 through a local HTTPS transport. A workspace-pinned Full access key limited to WebDAV listed all six collections, created a sample folder, uploaded a 58-byte sample into All and downloaded it through the native client. Both the API/cloud download and native download matched the original bytes. Protocol checks verified read-only root/smart-view refusals, invalid-key rejection and REST exclusion. Four existing integration suites passed 37 tests without retries for methods, role access, folder anchors and labelled mounts. The known local fixture certificate was accepted for each connection without installing permanent trust; production certificate behavior was not certified. Finder, Windows Explorer, Linux mounts, other client versions, native anchored/read-only mounts and production remain unverified. All captures use sample accounts and actual controls. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-api-key",
    "hc-upload-files",
    "hc-version-history",
    "hc-desktop-sync-folder"
  ],
  "keywords": [
    "WebDAV",
    "Cyberduck",
    "connect storage",
    "API key",
    "All folder",
    "network drive",
    "workspace address"
  ]
}
---
Open **Integrations → WebDAV** in the intended workspace and copy its address. Connect using **WebDAV over HTTPS**, your account email as the username and a full `dos_…` API key as the password. For a normal workspace connection, open **All** before uploading: the other collections at the connection root are read-only views.

## Before you start

- Sign in to Dosya and select the workspace you want to reach. Your workspace role must allow WebDAV and the file operations you intend to use.
- Use a WebDAV client that supports HTTPS and username/password authentication. The walkthrough below uses Cyberduck on macOS; another client's fields may have different names.
- Decide whether the client only needs listing and downloading, or also uploads and file management. Keep a separate key for this client so you can replace or revoke it independently.
- Prepare a harmless, uniquely named sample file for your first transfer. Keep your original local copy while checking the destination.
- This connection is for ordinary workspace files. Vault uses its own workflow and is not exposed through WebDAV.

## Steps: create the client's key

1. **Open Profile → API keys.** Select **New API key**. Enter a recognizable label in **What is it for?**, such as the client and computer name.
2. **Choose What can it do?** Select **Read only** for listing and downloading. The upload walkthrough needs **Full access**, which also permits moving and deleting within your account's allowed reach. **Upload only** cannot list folders, so it is unsuitable for this browsing workflow.

<figure class="help-screenshot">
  <a href="/screenshots/webdav-key-permission-2026-10-11.webp"><img src="/screenshots/webdav-key-permission-2026-10-11.webp" alt="The New API key form with a sample WebDAV client label and the Read only, Upload only and Full access permission choices." width="1160" height="850" loading="lazy" decoding="async" /></a>
  <figcaption>Choose the permission for the task. This sample uses <strong>Full access</strong> for an upload check; <strong>Read only</strong> is sufficient for listing and downloading. <a href="/screenshots/webdav-key-permission-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

3. **Limit its protocols and workspace.** Open **Restrictions and expiry**. Under **Where can it reach? → Protocols**, select **Only the ones I pick** and check **WebDAV**. Choose the intended **Workspace**. Review any expiry, address, schedule or usage limits you set; those restrictions continue to apply in the client.

<figure class="help-screenshot">
  <a href="/screenshots/webdav-key-restrictions-2026-10-11.webp"><img src="/screenshots/webdav-key-restrictions-2026-10-11.webp" alt="API-key restrictions with Only the ones I pick selected, WebDAV checked and the sample workspace selected." width="1160" height="850" loading="lazy" decoding="async" /></a>
  <figcaption>This sample key allows <strong>WebDAV</strong> in one workspace. A protocol restriction and a workspace restriction are separate choices. <a href="/screenshots/webdav-key-restrictions-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

4. **Generate and save it privately.** Check the form's summary, then select **Generate key**. Copy the full key from the result dialog before selecting **Done**; it is shown only once. The label and prefix in the saved list cannot authenticate a client. See [API key management](/developers/api-key) for the complete key workflow.

## Steps: connect to the workspace

1. **Copy the workspace address.** Return to **Integrations → WebDAV** and copy the URL under **Endpoint & credentials**. Copy the complete address, including its path and trailing slash. The workspace ID selects the workspace; the name segment supplies the connection's label. Keep encoded spaces such as `%20` when copying a URL.

<figure class="help-screenshot">
  <a href="/screenshots/webdav-endpoint-2026-10-11.webp"><img src="/screenshots/webdav-endpoint-2026-10-11.webp" alt="Dosya's WebDAV integration page showing the sample workspace endpoint and the account email plus API-key authentication instructions." width="1160" height="850" loading="lazy" decoding="async" /></a>
  <figcaption>Copy the address for the <strong>currently selected workspace</strong>. Your account email is the username; your API key is the password. <a href="/screenshots/webdav-endpoint-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

2. **Open the client's connection dialog.** In Cyberduck, select **Open Connection** and choose **WebDAV (HTTPS)**. If your version calls it **WebDAV (HTTP/SSL)**, that is its secure WebDAV option. [Cyberduck's WebDAV documentation](https://docs.cyberduck.io/protocols/webdav/) explains HTTPS authentication.
3. **Enter the address and credentials.** If the client accepts a complete URL, paste the copied address. If it separates the settings, use the following fields. In Cyberduck, enter the path in **Path**; it is separate from **Server**.

| Field | What to enter |
| --- | --- |
| Protocol | WebDAV over HTTPS |
| Server | `api.dosya.dev` |
| Port | `443` |
| Path | Everything after the host in your copied URL, including `/webdav/mount/…/` |
| Username | The email of the account that owns the API key |
| Password | The full `dos_…` API key |

Leave **Anonymous Login** off. Use your API key in the password field, rather than your account password or a share-link password. Save the credential in the client's private credential storage only if that is appropriate for this computer.

<figure class="help-screenshot">
  <a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp"><img src="/screenshots/webdav-cyberduck-connection-2026-10-11.webp" alt="Cyberduck's WebDAV HTTPS connection dialog with separate Server, Port, Username, masked Password and Path fields." width="1040" height="750" loading="lazy" decoding="async" /></a>
  <figcaption>The native dialog separates <strong>Server</strong> from <strong>Path</strong>. This capture uses a local sample server; for your Dosya address use <strong>api.dosya.dev</strong>, port <strong>443</strong> and your copied path. <a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

4. **Connect and inspect the result.** Select **Connect**, and enter the same email and API key if a login dialog follows. For a normal workspace connection, the root lists **All**, **Documents**, **Videos**, **Images**, **Shared** and **Deleted**. Open **All** to browse the real folder tree and choose an upload destination.

<figure class="help-screenshot">
  <a href="/screenshots/webdav-cyberduck-collections-2026-10-11.webp"><img src="/screenshots/webdav-cyberduck-collections-2026-10-11.webp" alt="The connected native Cyberduck client listing All, Deleted, Documents, Images, Shared and Videos at the sample workspace root." width="2200" height="1600" loading="lazy" decoding="async" /></a>
  <figcaption>The ordinary connection root lists six collections. Open <strong>All</strong> for the writable folder tree; the five other collections are read-only views. <a href="/screenshots/webdav-cyberduck-collections-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: verify a sample transfer

1. **Choose the destination in All.** Use **All** itself for the ordinary workspace root, or open the intended folder beneath it. You can create a sample folder if your key and workspace role allow it. The connection root and the five smart views are not upload destinations.
2. **Upload the sample.** In Cyberduck, use **File → Upload…** and select your uniquely named local sample. Wait for the transfer to finish. Avoid replacing an existing filename during this first check.

<figure class="help-screenshot">
  <a href="/screenshots/webdav-cyberduck-files-2026-10-11.webp"><img src="/screenshots/webdav-cyberduck-files-2026-10-11.webp" alt="Cyberduck inside All with the uploaded webdav-upload-check.txt sample, its 58-byte size and a separate WebDAV checks folder." width="2200" height="1600" loading="lazy" decoding="async" /></a>
  <figcaption>The sample upload appears at the root of <strong>All</strong> as <strong>webdav-upload-check.txt</strong>, with its 58-byte size beside the filename. <a href="/screenshots/webdav-cyberduck-files-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

3. **Verify it in Dosya.** Open **Files** in the same workspace and folder, refresh the listing if needed, and confirm the sample's filename and size. WebDAV's **All** collection corresponds to the ordinary workspace folder tree; it is not an additional folder you need to find in the web app.

<figure class="help-screenshot">
  <a href="/screenshots/webdav-destination-2026-10-11.webp"><img src="/screenshots/webdav-destination-2026-10-11.webp" alt="Dosya Files showing the same webdav-upload-check.txt sample uploaded through the native WebDAV client." width="1160" height="850" loading="lazy" decoding="async" /></a>
  <figcaption>Check the <strong>same workspace and destination</strong> in Dosya's Files page. This sample was uploaded into the ordinary workspace root through WebDAV's All collection. <a href="/screenshots/webdav-destination-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

4. **Check a downloaded copy.** Download the sample through the client into a separate local location and open your own copy. Confirm that it is the file you expected before relying on the connection for other work.

## Expected result

The client displays the intended workspace folders. With the required permissions, the sample appears in both the client's **All** tree and Dosya's **Files** listing, and your downloaded copy matches your source.

Disconnecting the client ends that connection; it does not remove your cloud files or revoke the key. Reconnect using the saved address and credential when needed. A WebDAV connection by itself does not set up a desktop folder-sync pairing or guarantee offline copies. See [Desktop folder sync](/desktop/sync-folder) if that is your intended workflow.

## Folder-restricted keys and other limits

If you select **Choose folder…** when creating a workspace-pinned key, that folder becomes the connection root. Its children appear directly, so the normal **All** and smart-view collections are absent. Use the workspace's copied mount address; do not append the anchor folder's name as if it were above this new root. Folder-anchored keys work over WebDAV and the S3 gateway, and are refused over REST API and SFTP. Moving the anchor to Trash makes that connection unavailable until the folder is restored.

Key permissions do not grant additional workspace-role permissions. A successful login therefore does not guarantee permission to upload, create folders, move or delete. Key expiry, selected protocols, allowed addresses, active hours, usage limits and workspace storage limits also apply.

The walkthrough above is for Cyberduck. A Finder or Explorer mount uses different controls and client-specific behavior; use the existing [WebDAV mounting tutorial](https://dosya.dev/tutorials/mount-your-storage-with-webdav/) and [protocol reference](https://dosya.dev/developer/webdav/) for those alternatives.

## Troubleshooting

**The client repeatedly asks for a password or reports Unauthorized.** Use the key owner's account email and the full API key. Check whether the key expired or was revoked. A copied label or prefix is insufficient. Replace a lost key using Profile → API keys, update the client and revoke the old credential as appropriate.

**The client reports Forbidden.** Check the key's **Permission**, **Protocols** and **Reach**, and confirm that your workspace role allows WebDAV. A workspace-pinned key cannot connect to a different workspace. Address and schedule restrictions can also refuse a valid credential. If a role needs changing, ask the workspace owner or administrator.

**Listing works, but uploads fail.** Use **All** or a folder beneath it for an ordinary connection. **Documents**, **Videos**, **Images**, **Shared** and **Deleted** are read-only views. Check whether the key is Read only, whether your role permits uploads, and whether the destination is locked or has reached a limit. A missing parent folder must be created first.

**Only one folder's children appear, without All.** Check whether the key or your workspace membership is folder-restricted. The folder is the connection root; its absence from its own listing is expected.

**The server or workspace cannot be found.** Copy the current address from the intended workspace's integration page. Keep the workspace ID and full path, rather than using a bare host or guessing a workspace name. If the service reports temporary maintenance or a rate limit, wait for the stated retry period.

**The client shows a certificate warning.** Stop and check that you used the copied HTTPS address and the intended host. Do not bypass an unexplained certificate warning to make a production connection succeed. Record the message for private support.

**The client looks successful, but the destination is missing.** Check the active workspace and folder in both interfaces, refresh the lists, and inspect the client's transfer result. Confirm the actual destination and your downloaded copy instead of relying only on a connection or completion message.

For a persistent problem, contact [private support](https://app.dosya.dev/support) with the client/version, selected protocol, operation and error message. Omit your full API key, password field, authorization headers and private filenames from shared screenshots.

## Frequently asked questions

### Do I use my Dosya account password?

No. Use your account email as the username and the full API key as the password. The key must allow WebDAV.

### Can I upload into Documents or Images?

Those root collections are read-only views for an ordinary workspace connection. Upload into **All** or an intended folder beneath it.

### Can I restrict this client to one folder?

Yes. Choose a workspace and folder when creating its key. That folder becomes the connection root; the workspace-wide collections are not shown.

### Does this connect my Vault?

No. WebDAV exposes ordinary workspace files. Use Dosya's Vault workflow for Vault content.

## Related guides

- [API key management](/developers/api-key)
- [Uploading files and folders](/uploading/files-and-folders)
- [Restoring an earlier file version](/files/version-history)
- [WebDAV protocol reference](https://dosya.dev/developer/webdav/)
- [What WebDAV is and when to use it](https://dosya.dev/blog/what-is-webdav/)
