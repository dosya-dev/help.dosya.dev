---
{
  "articleId": "hc-rclone-copy",
  "locale": "en",
  "revision": 1,
  "title": "Copying files with rclone over WebDAV",
  "summary": "Configure a WebDAV remote, preview a copy, transfer a sample into All and check a separate downloaded copy.",
  "category": "integrations",
  "articleSlug": "rclone",
  "status": "published",
  "lastReviewed": "2026-10-11",
  "verification": "Verified official rclone v1.75.2 macOS ARM64 release checksum and actual interactive configuration in native Terminal on 2026-10-11. Current web UI generated a Full access, workspace-pinned, WebDAV-only key against isolated current-source API/D1/R2 fixtures. HTTPS used the known fixture CA file with certificate checks enabled. Actual rclone listed six root collections, copied a 56-byte sample into All/rclone-checks while preserving a preexisting remote-only file, and downloaded both files into a separate local folder. Sample cloud bytes and native downloaded bytes matched the source; the preexisting file also matched its fixture. A separate dry run exited 0 and left the client-reported destination listing unchanged without creating its sample. Native Dosya/S3/SFTP backends, mount, sync deletion, production and other operating systems remain unverified. Initial direct Node fixture checks encountered local ProxyWorker 500s; subsequent requests and actual rclone operations passed. Screenshots use real sample controls and native command output.",
  "related": ["hc-webdav-connect", "hc-api-key", "hc-upload-files", "hc-desktop-sync-folder"],
  "keywords": ["rclone", "WebDAV", "copy files", "dry run", "remote", "All folder", "command line"]
}
---
Create an rclone remote with **WebDAV**, your workspace's copied HTTPS address, your account email and an API key. For an ordinary workspace connection, send your first sample to **All** or a folder beneath it. Preview with `--dry-run`, run `copy`, then check the destination and a separate downloaded copy.

## Before you start

- Install rclone for your operating system from the [official downloads page](https://rclone.org/downloads/) and confirm that `rclone version` runs in your terminal. This walkthrough was checked with version 1.75.2 on macOS; prompts can vary between versions.
- Sign in to Dosya and select the intended workspace. Your role must allow WebDAV and the operations you plan to use.
- Prepare a local folder named `sample-source` containing one harmless, nonempty, uniquely named sample. Keep the original. Run the commands from the directory that contains this folder, or substitute your actual source path.
- Choose a separate test destination. This guide uses an existing workspace folder named `rclone-checks`; create it in **Files** if needed.
- This workflow reaches ordinary workspace files. Vault has its own workflow.

## Steps: prepare the key and address

1. **Create a dedicated key in Profile → API keys.** Give it a recognizable label, such as **rclone on this Mac**. Choose **Full access** for the upload walkthrough. That permission also allows moving and deleting within your account's allowed reach. **Read only** is sufficient for listing and downloading; **Upload only** cannot browse folders.
2. **Limit its reach.** Open **Restrictions and expiry**, choose **Only the ones I pick** under **Protocols**, check **WebDAV** and select the intended **Workspace**. Review any other limits before generating the key.

<figure class="help-screenshot">
  <a href="/screenshots/rclone-key-restrictions-2026-10-11.webp"><img src="/screenshots/rclone-key-restrictions-2026-10-11.webp" alt="The sample rclone API-key form with WebDAV as its selected protocol and the rclone help samples workspace pinned." width="1160" height="850" loading="lazy" decoding="async" /></a>
  <figcaption>For this WebDAV remote, select <strong>WebDAV</strong> and the intended workspace. Permission, protocol and workspace restrictions are separate settings. <a href="/screenshots/rclone-key-restrictions-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

3. **Save the full key privately.** Select **Generate key** and copy it before closing the result dialog. You will enter it into rclone's password prompt. The label or saved prefix cannot authenticate the client. See [Creating and managing an API key](/developers/api-key).
4. **Copy the workspace's WebDAV address.** Open **Integrations → WebDAV** and copy the complete URL under **Endpoint & credentials**, including the mount path, encoded spaces and trailing slash.

<figure class="help-screenshot">
  <a href="/screenshots/rclone-endpoint-2026-10-11.webp"><img src="/screenshots/rclone-endpoint-2026-10-11.webp" alt="The sample workspace's WebDAV integration page with its complete mount address and account-email/API-key credentials." width="1160" height="850" loading="lazy" decoding="async" /></a>
  <figcaption>Copy the address from <strong>Integrations → WebDAV</strong> for the current workspace. The account email is your username; the API key is your password. <a href="/screenshots/rclone-endpoint-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: configure the remote

1. **Start the setup wizard.** Run `rclone config`, choose **New remote** and name it `dosya-webdav`. If that name already exists, choose a new name and use it consistently in the commands below.
2. **Choose the backend and credentials.** Type the textual option values rather than copying a provider number from a screenshot; numbers can change. Follow [rclone's WebDAV setup](https://rclone.org/webdav/) with these values:

| Prompt | What to enter |
| --- | --- |
| Storage | `webdav` |
| URL | Your complete copied Dosya HTTPS mount address |
| Vendor | `other` |
| User | The email of the account that owns the API key |
| Password | Choose to enter your own password, then enter the full API key and confirm it |
| Bearer token | Leave empty |
| Edit advanced config? | No for this first connection |
| Keep this remote? | Yes, then quit the wizard |

Use the hidden password prompts. Keep the resulting configuration file private; rclone's password obscuring is reversible and does not protect the file as an encrypted secret store. See [rclone's explanation of obscuring](https://rclone.org/commands/rclone_obscure/). Avoid putting the key in a command argument, a shared config snippet or a screenshot.

3. **Check the remote and folder listing.** Run:

```sh
rclone listremotes
rclone lsf dosya-webdav:
```

For an ordinary workspace connection, expect **All**, **Documents**, **Videos**, **Images**, **Shared** and **Deleted**. The colon separates the remote name from its path. A folder-restricted key has a different root; see the limits below.

<figure class="help-screenshot">
  <a href="/screenshots/rclone-config-list-2026-10-11.webp"><img src="/screenshots/rclone-config-list-2026-10-11.webp" alt="Actual Terminal output showing the WebDAV remote with rclone's credential redaction and the six Dosya root collections." width="2360" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>The actual client lists six collections. This diagnostic capture uses <strong>rclone config redacted</strong>, which hides the username and password. Its local sample URL must be replaced by your own copied Dosya HTTPS address. <a href="/screenshots/rclone-config-list-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: preview and copy the sample

1. **Check both paths.** The local `./sample-source` folder must exist in your current terminal directory. `dosya-webdav:All/rclone-checks` means the `rclone-checks` folder beneath the writable **All** collection. Quote a path containing spaces.
2. **Preview the operation.** Run:

```sh
rclone copy ./sample-source dosya-webdav:All/rclone-checks --dry-run --progress
```

Review the filenames and direction. A dry run may show planned transfer totals or 100% progress. Look for the **Skipped copy as --dry-run is set** message: it is a preview, not evidence that a file arrived.

<figure class="help-screenshot">
  <a href="/screenshots/rclone-copy-dry-run-2026-10-11.webp"><img src="/screenshots/rclone-copy-dry-run-2026-10-11.webp" alt="Native rclone dry-run output explicitly saying the 56-byte sample copy was skipped because dry-run is set." width="2360" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption><strong>Skipped copy as --dry-run is set</strong> identifies the preview. The sample is listed in the plan but has not been uploaded by this command. <a href="/screenshots/rclone-copy-dry-run-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

3. **Run the copy.** Once the paths and preview are correct, remove `--dry-run`:

```sh
rclone copy ./sample-source dosya-webdav:All/rclone-checks --progress
rclone lsf dosya-webdav:All/rclone-checks
```

Wait for the command to finish and review any errors. `copy` can update matching destination filenames, but it does not delete other destination files. It places the files inside `sample-source` into the selected destination; it does not add another `sample-source` folder there. [rclone's copy reference](https://rclone.org/commands/rclone_copy/) explains this behavior.

<figure class="help-screenshot">
  <a href="/screenshots/rclone-copy-complete-2026-10-11.webp"><img src="/screenshots/rclone-copy-complete-2026-10-11.webp" alt="Actual rclone copy completing with exit zero and listing both the uploaded sample and an existing remote-only file." width="2360" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>The completed sample copy is followed by a destination listing. <strong>existing-remote-only.txt</strong> is still present alongside the new sample. <a href="/screenshots/rclone-copy-complete-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

4. **Verify in Dosya.** Open **Files → rclone-checks** in the same workspace and refresh if necessary. Confirm the sample's filename and size. The WebDAV **All** collection corresponds to the ordinary workspace tree in Files.

<figure class="help-screenshot">
  <a href="/screenshots/rclone-destination-2026-10-11.webp"><img src="/screenshots/rclone-destination-2026-10-11.webp" alt="Dosya Files inside rclone-checks with the 56-byte uploaded sample and the preserved existing-remote-only.txt file." width="1440" height="900" loading="lazy" decoding="async" /></a>
  <figcaption>The sample appears in the intended workspace folder as <strong>rclone-upload-check.txt</strong>, at 56 bytes. The existing remote file remains beside it. <a href="/screenshots/rclone-destination-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

5. **Check a separate downloaded copy.** Choose a new, empty local folder and copy from the remote into it:

```sh
rclone copy dosya-webdav:All/rclone-checks ./sample-download --progress
```

This direction downloads the files in the remote folder. Open your own downloaded sample and confirm it is the file you expected. Keep the original source while checking.

<figure class="help-screenshot">
  <a href="/screenshots/rclone-download-complete-2026-10-11.webp"><img src="/screenshots/rclone-download-complete-2026-10-11.webp" alt="Actual rclone download from the workspace test folder into sample-download, completing two transfers with exit zero." width="2360" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>The source is now the remote folder and the destination is a separate local directory. This example downloads both files from <strong>rclone-checks</strong>. <a href="/screenshots/rclone-download-complete-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The intended sample appears in rclone's destination listing and Dosya's **Files** page. Existing destination files that were absent from the source remain after `copy`, and your downloaded sample matches your original.

## Limits and choosing another operation

- **Copy and sync have different effects.** `sync` updates the destination to match the source, including deletion when necessary. Do a dry run and review the direction and destination before choosing it. This guide's walkthrough uses `copy`; see the [sync reference](https://rclone.org/commands/rclone_sync/) before running a mirror operation.
- **The normal root is a collection directory.** Upload into **All** or a folder beneath it. The connection root and **Documents**, **Videos**, **Images**, **Shared** and **Deleted** are read-only views.
- **Folder-restricted roots differ.** With an anchored key, the permitted folder's children appear directly and there is no **All** collection. Do not add `All/` blindly. See [WebDAV folder restrictions](/integrations/webdav#folder-restricted-keys-and-other-limits).
- **Metadata support varies.** Generic WebDAV does not supply rclone's full checksum and modification-time features. A successful listing or progress display is insufficient to prove your downloaded copy matches. Check your sample before relying on repeat-transfer behavior.
- **Other backends have other settings.** Dosya's **Integrations → rclone** page describes its native backend setup. This guide chooses `webdav`; a `dosya`, S3 or SFTP remote uses different credentials/options and paths.
- **A copy command does not schedule itself.** Automatic jobs, mounts and bidirectional sync need their own configuration. This walkthrough does not establish a desktop folder-sync pairing.

## Troubleshooting

**Command not found.** Check the executable's installation and PATH using the official installation instructions. Open a new terminal if its PATH was changed.

**Unknown remote or config file not found.** Run `rclone listremotes` and `rclone config file` in the same account/environment that runs the command. Check the chosen name, colon and any custom `--config` path. Another shell, scheduled job or container can use a different config.

**Source directory not found.** Confirm your current terminal directory and the local folder path. A relative path such as `./sample-source` is resolved from the current directory. Quote paths with spaces.

**Unauthorized or repeated authentication failures.** Use the key owner's email and the full API key in the wizard's password prompt. Check expiry/revocation and update this remote if the key was replaced. Pasting a raw key directly into a config's `pass` field is not the same as completing the password prompt.

**Forbidden or an upload refusal.** Check key permission, selected WebDAV protocol, workspace reach and your role. For an ordinary connection, use **All** rather than a smart view. Address, schedule, usage and destination restrictions still apply.

**A certificate error.** Check the copied HTTPS address and intended host. Do not disable certificate checks to make an unexplained production error disappear. Share the error privately with support.

**The dry run says 100%, but no file appears.** The dry run planned the transfer. Run the reviewed copy without `--dry-run`, then verify the actual destination.

For a persistent problem, send [private support](https://app.dosya.dev/support) the rclone version, backend, operation and error. Remove credentials and private paths from diagnostics; double-check even a redacted config before sharing it.

## Frequently asked questions

### Is WebDAV the same as the native Dosya backend?

They are different rclone backends. This guide uses `type = webdav`, the workspace's WebDAV address and the **All** path for an ordinary root.

### Will copy remove files that are only in Dosya?

`copy` leaves other destination files in place. It can still update a matching filename. `sync` has deletion behavior, so review that operation separately.

### Where should I upload if All is missing?

Check whether the key or workspace membership is folder-restricted. Its allowed folder is the root, so its children appear directly.

## Related guides

- [Connecting to Dosya with WebDAV](/integrations/webdav)
- [Creating and managing an API key](/developers/api-key)
- [Uploading files and folders](/uploading/files-and-folders)
- [Setting up a desktop sync folder](/desktop/sync-folder)
