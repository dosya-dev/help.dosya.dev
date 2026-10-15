---
{
  "articleId": "hc-webdav-remount-safely",
  "locale": "en",
  "revision": 5,
  "title": "Unmount and reconnect WebDAV safely",
  "summary": "Finish active WebDAV writes, unmount the Dosya volume through the client or operating system, and reconnect without duplicate mounts or data loss.",
  "category": "integrations",
  "articleSlug": "webdav-remount-safely",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/webdav.tsx, apps/web/src/lib/integrations.ts, apps/api/src/lib/webdav/methods/put.ts, apps/api/src/lib/webdav/methods/get.ts, apps/api/src/lib/webdav/listing-cache.ts, and apps/api/src/pages/webdav/[...path].ts. No operating-system mount was unmounted in production.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-lock-permission-errors"
  ],
  "keywords": [
    "webdav remount safely",
    "WebDAV connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Unmounting while a client still sends PUT bytes can leave the local application uncertain whether the write committed. Dosya validates the declared Content-Length, optional checksum, quota, policy, locks, and preconditions before recording the final file or version, so wait for the client's completed response and verify the destination first.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webdav-remount-safely-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-remount-safely-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-remount-safely-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webdav-remount-safely-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webdav-remount-safely-help-workflow-2026-10-14.webp" alt="Four-step workflow for pausing sync and closing mounted files, verifying completed writes, unmounting normally, and reconnecting once to the verified workspace." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for pausing sync and closing mounted files, verifying completed writes, unmounting normally, and reconnecting once to the verified workspace. <a class="workflow-map-full" href="/screenshots/webdav-remount-safely-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-remount-safely-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-remount-safely-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

A remount changes the client connection, not Dosya content. It is useful for clearing client-side listing state or replacing an endpoint, but it cannot repair a revoked key, role denial, wrong workspace pin, content lock, or failed upload.

## Steps

1. Pause sync jobs and stop adding work to the volume. Close documents opened directly from the mount so their applications cannot issue another background save during unmount.
2. Wait until uploads and downloads leave active, pending, retrying, or conflict states. Verify recent writes in Dosya **Files** by exact workspace, folder, name, and size before proceeding.
3. Record the mount's labelled endpoint and account email without copying its API-key password into notes. Confirm the `ws_…` ID is the workspace you intend to reconnect.
4. Use the WebDAV client or operating system's normal **Disconnect**, **Eject**, or **Unmount** action. Do not force-quit the client unless its own recovery flow says the connection is already closed.
5. Confirm the old volume disappears and no process still reports an active transfer. If the operating system says the volume is busy, locate the open file or process instead of forcing removal.
6. Reconnect once with the verified endpoint and current key, open **All** or the anchored root, and check one known file plus the recently written item. Remove any duplicate saved connection after the correct mount is stable.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV overview with its network-drive title, labelled mount address, and Browse stage used after reconnecting." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya WebDAV overview with its network-drive title, labelled mount address, and Browse stage used after reconnecting. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

If the remount returns 401, clear or replace stale Basic credentials. A 403 identifies key, condition, workspace, membership, role, or smart-view restrictions. A 423 comes from protected content, while a stale directory can require one refresh and up to the 60-second server cache backstop.

If an upload result was ambiguous before unmount, inspect versions and byte size before uploading again. Repeating a PUT to an existing filename can make a new current version, so preserve the local source until the server state is known.

## Expected result

The original volume is cleanly disconnected with no active handles, one verified mount reconnects to the intended workspace, and known files plus any completed recent write appear at their expected paths. No duplicate replay was used to guess whether a write landed.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Troubleshoot WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
