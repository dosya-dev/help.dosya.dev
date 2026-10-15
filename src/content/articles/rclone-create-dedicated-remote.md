---
{
  "articleId": "hc-rclone-create-dedicated-remote",
  "locale": "en",
  "revision": 5,
  "title": "Create a dedicated rclone remote",
  "summary": "Create a task-specific rclone WebDAV remote with a protocol- and workspace-limited key, then verify its root without exposing the saved secret.",
  "category": "integrations",
  "articleSlug": "rclone-create-dedicated-remote",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/help/src/content/articles/rclone-copy.md, apps/web/src/pages/integrations/webdav.tsx, apps/api/src/lib/webdav/auth.ts, and apps/api/src/pages/webdav/[...path].ts. Production behavior for “Create a dedicated rclone remote” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-sync-dry-run"
  ],
  "keywords": [
    "rclone create dedicated remote",
    "rclone automation details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Create a separate WebDAV remote for each unattended job or trust boundary. A descriptive remote name plus a protocol- and workspace-limited API key makes the effective destination reviewable without sharing one broad credential.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/rclone-create-dedicated-remote-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-create-dedicated-remote-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-create-dedicated-remote-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/rclone-create-dedicated-remote-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rclone-create-dedicated-remote-help-workflow-2026-10-14.webp" alt="Four-step workflow for creating a dedicated key, copying the WebDAV URL, configuring vendor other with user and hidden password, and listing the remote root." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for creating a dedicated key, copying the WebDAV URL, configuring vendor other with user and hidden password, and listing the remote root. <a class="workflow-map-full" href="/screenshots/rclone-create-dedicated-remote-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-create-dedicated-remote-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-create-dedicated-remote-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In Dosya **Profile → API keys**, create a key labelled for the machine and job. Choose **Read only** for retrieval or **Full access** when the job uploads, moves or deletes.
2. Under **Restrictions and expiry**, allow **WebDAV**, pin the intended workspace and add an expiry when rotation is planned. Save the complete key once.
3. Open that workspace’s **Integrations → WebDAV** and copy the entire HTTPS mount address, including mount path, encoded characters and trailing slash.
4. Run `rclone config`, choose **New remote**, and use a unique name such as `dosya-archive`. Select `webdav`, vendor `other`, the copied URL, the key owner’s email, and the API key through the hidden password prompt.
5. Keep **Bearer token** empty, decline advanced changes for the first test, save the remote, then run `rclone config redacted dosya-archive` before sharing any diagnostic.
6. Run `rclone lsf dosya-archive:`. An ordinary root lists **All**, **Documents**, **Videos**, **Images**, **Shared**, and **Deleted**; an anchored key exposes its permitted folder directly.

Rclone’s obscured password in its config is reversible protection, not encryption. Restrict the config file to the job account and never paste a raw key into logs or command-line arguments.


<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Reference for “Create a dedicated rclone remote”: Dosya rclone overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Create a dedicated rclone remote”: Dosya rclone overview page. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The named remote lists only the intended Dosya reach, uses the dedicated key owner’s email, and can perform no operation outside its key scope, protocol selection, workspace/folder pin or membership permissions.

`401 Unauthorized` points to the email/key pair, expiry or revocation. **This API key is not permitted to use WebDAV** and **This role is not permitted to use WebDAV** identify separate gates. A missing **All** can be correct for an anchored remote.

## Related guides

- [Use rclone with Dosya](/integrations/rclone)
- [Run an rclone sync dry run](/integrations/rclone-sync-dry-run)
