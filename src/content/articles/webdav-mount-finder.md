---
{
  "articleId": "hc-webdav-mount-finder",
  "locale": "en",
  "revision": 5,
  "title": "Mount Dosya WebDAV in macOS Finder",
  "summary": "Mount the active workspace in macOS Finder with Dosya’s WebDAV URL, an email username, and a restricted API key, then diagnose mount failures.",
  "category": "integrations",
  "articleSlug": "webdav-mount-finder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/webdav.tsx, apps/web/src/lib/integrations.ts, apps/web/src/components/api-keys/create-key-dialog.tsx, apps/api/src/lib/webdav/auth.ts, apps/api/src/pages/webdav/[...path].ts, and WebDAV method handlers. No Finder mount or production credential was exercised.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-cyberduck"
  ],
  "keywords": [
    "webdav mount finder",
    "macOS cloud storage mount",
    "Dosya WebDAV URL",
    "restricted WebDAV key"
  ]
}
---
Finder can mount one Dosya workspace as a network volume. Use the endpoint shown for that workspace in **Integrations → WebDAV**; it contains the workspace ID, an encoded display label, and a trailing slash. The ID chooses the workspace. The final name only labels the mounted volume, so renaming the workspace does not invalidate an existing mount.

<figure class="help-screenshot"><a href="/screenshots/webdav-mount-finder-help-workflow-2026-10-14.webp"><img src="/screenshots/webdav-mount-finder-help-workflow-2026-10-14.webp" alt="Finder WebDAV sequence showing the Dosya workspace endpoint, account-email username, API-key password, and mounted workspace volume." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Use the workspace-specific HTTPS address and HTTP Basic credentials, then confirm Finder exposes the intended Dosya tree. <a href="/screenshots/webdav-mount-finder-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Your workspace role must include **WebDAV access**. When it does not, the integration page says **Your role can’t use WebDAV** and explains that credentials will be refused. Ask an owner or admin to change the role before troubleshooting Finder.

Create a separate key in **Profile → API keys**. Under **Restrictions and expiry → Where can it reach?**, choose **Only the ones I pick** and enable **WebDAV**. A **Read only** key can list and download; use **Full access** only when Finder must upload, move, rename, or delete. You may pin the key to this workspace. An optional folder anchor makes that folder the mount root and hides everything above or beside it, including the `Documents`, `Videos`, `Images`, `Shared`, and `Deleted` smart views.

Copy the key when it is shown and store it securely. Finder uses the key owner's Dosya email as the username and the complete `dos_…` key as the password.

## Steps

1. In Dosya, switch to the workspace you intend to mount and open **Integrations → WebDAV**.
2. Copy the address under **Endpoint & credentials**. Its form is `https://api.dosya.dev/webdav/mount/WORKSPACE_ID/WORKSPACE_LABEL/`; keep the trailing slash.
3. In Finder, choose **Go → Connect to Server…** or press <kbd>Command</kbd>+<kbd>K</kbd>.
4. Paste the copied HTTPS address and select **Connect**.
5. Choose registered-user authentication when Finder asks. Enter the API key owner's account email in **Name** and paste the `dos_…` key into **Password**.
6. Complete the connection, then open the new Finder volume. Check a known folder and download a small test file. For a writable key, create a disposable folder and remove it after verification.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV integration page with the workspace endpoint and macOS Finder connection instruction visible." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The integration page supplies the exact endpoint for the active workspace and identifies email-plus-API-key authentication. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Troubleshooting

- Repeated credential prompts usually mean the Basic-auth pair was refused. Confirm the username is the key owner's email, the password starts with `dos_`, the key is active, and its protocol list includes WebDAV. A malformed or invalid pair returns `Unauthorized`.
- **This API key is pinned to a different workspace** means the address and key name different workspaces. Copy the endpoint again after switching to the pinned workspace.
- **This role is not permitted to use WebDAV** is a role permission issue; changing Finder settings cannot grant access.
- **This API key's anchor folder is no longer available** means the credential's folder was trashed or removed. Restore that folder or issue a replacement key with a live anchor.
- An anchored key deliberately fails on REST and SFTP, but remains valid for WebDAV and S3. If Finder shows the workspace root instead of the expected folder, stop and inspect the key's **Workspace** and **Folder** restrictions.
- A `Read only` key refuses writes; Finder may display the volume normally while create, rename, or delete operations fail. Do not broaden scope just to clear a read test.

Disconnecting the Finder volume changes no cloud data. Deleting through a full-access mount does change Dosya content and is subject to the member's delete permissions and lock rules.

## Expected result

Finder shows a volume named from the endpoint's final label and lists only the workspace or anchored subtree allowed by the credential. The small read test succeeds; any attempted write matches both the key scope and the role's file permissions.

## Related guides

- [Connect WebDAV](/integrations/webdav)
- [Use Cyberduck](/integrations/webdav-cyberduck)
