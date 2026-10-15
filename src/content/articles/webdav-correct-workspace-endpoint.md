---
{
  "articleId": "hc-webdav-correct-workspace-endpoint",
  "locale": "en",
  "revision": 5,
  "title": "Correct a WebDAV workspace endpoint",
  "summary": "Replace an incorrect WebDAV URL with Dosya’s labelled workspace endpoint, verify its workspace ID, and avoid ambiguous mounts based on display names.",
  "category": "integrations",
  "articleSlug": "webdav-correct-workspace-endpoint",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/webdav.tsx, apps/web/src/lib/integrations.ts, apps/api/src/lib/webdav/mount-token.ts, apps/api/src/lib/webdav/utils.ts, apps/api/src/pages/webdav/[...path].ts, and apps/web/src/lib/integrations.test.ts. No production mount was changed.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-lock-permission-errors"
  ],
  "keywords": [
    "webdav correct workspace endpoint",
    "WebDAV connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The preferred Dosya WebDAV address is `https://api.dosya.dev/webdav/mount/{workspace_id}/{label}/`. The `ws_…` ID chooses the workspace; the final label is cosmetic text used by Finder and Explorer to name the volume. Renaming the workspace or editing that label does not redirect the mount to another workspace.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webdav-correct-workspace-endpoint-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-correct-workspace-endpoint-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-correct-workspace-endpoint-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webdav-correct-workspace-endpoint-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webdav-correct-workspace-endpoint-help-workflow-2026-10-14.webp" alt="Four-step workflow for copying the labelled WebDAV URL, matching its workspace ID, replacing the saved endpoint, and checking the correct real or anchored root." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for copying the labelled WebDAV URL, matching its workspace ID, replacing the saved endpoint, and checking the correct real or anchored root. <a class="workflow-map-full" href="/screenshots/webdav-correct-workspace-endpoint-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-correct-workspace-endpoint-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-correct-workspace-endpoint-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Legacy URLs can use a workspace ID, exact name, or slug as the first token. Exact names become ambiguous when two accessible workspaces share a name; Dosya answers 409 and lists labelled ID-based alternatives. Copying the URL from the active workspace avoids that collision.

## Steps

1. In the web app, switch to the workspace you want and open **Integrations → WebDAV**. Copy the complete **Endpoint & credentials** URL, including `https://`, `/webdav/mount/`, the `ws_…` ID, label, and trailing slash.
2. Compare the `ws_…` segment with the workspace you intended. The label may be stale or customized; do not use it as the security boundary or replace the ID with a display name.
3. Finish pending writes, disconnect the old mount, and edit or recreate its connection profile with the copied URL. Keep the key-owner email and API key separate from the endpoint.
4. Confirm the API key includes WebDAV and is either unpinned or pinned to this same workspace. A mismatched pin returns **This API key is pinned to a different workspace**.
5. Reconnect and inspect the root. An unanchored mount shows **All**, **Documents**, **Videos**, **Images**, **Shared**, and **Deleted**; a folder-anchored key opens directly at that folder and has no smart-view namespace.
6. Open **All**, locate a known item, and compare it with Dosya **Files** in the same workspace. Remove the obsolete mount after the correct volume has passed this check.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV overview showing the labelled `/webdav/mount/[workspace_id]/[name]/` connection pattern." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya WebDAV overview showing the labelled `/webdav/mount/[workspace_id]/[name]/` connection pattern. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

Error text narrows endpoint mistakes: **Workspace ID is required** means the URL stopped before a valid mount token; **A labelled mount needs a name segment** means the label is missing; **Unknown workspace** means the ID/name/slug did not resolve; and **Multiple of your workspaces are named…** provides usable ID-based URLs. A 403 after correct resolution points to membership, key pin, anchor, role, or condition rather than URL syntax.

Changing the endpoint creates or alters a client mount only. It does not move files, rename the workspace, or modify stored data.

## Expected result

The saved connection uses the labelled URL for the intended `ws_…` ID, opens the matching workspace or anchored folder, and shows a known item from that location. Any old wrong-root mount is disconnected without changing cloud content.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Troubleshoot WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
