---
{
  "articleId": "hc-webdav-refresh-stale-listing",
  "locale": "en",
  "revision": 5,
  "title": "Refresh a stale WebDAV directory listing",
  "summary": "Refresh a Dosya WebDAV folder after another client changes it, account for the 60-second cache backstop, and identify truncated large listings.",
  "category": "integrations",
  "articleSlug": "webdav-refresh-stale-listing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/webdav/listing-cache.ts, apps/api/src/lib/webdav/methods/propfind.ts, apps/api/src/lib/webdav/utils.ts, apps/api/src/lib/webdav/path-resolver.ts, apps/api/src/lib/webdav/views.ts, and apps/api/src/pages/webdav/[...path].ts. No production directory cache was measured.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-lock-permission-errors"
  ],
  "keywords": [
    "webdav refresh stale listing",
    "WebDAV connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Dosya invalidates WebDAV directory caches after supported mutations, while a 60-second server backstop limits stale direct-child listings when an invalidation is missed. A desktop client can keep its own cache longer, so refresh the exact folder and compare it with Dosya Files before remounting.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webdav-refresh-stale-listing-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-refresh-stale-listing-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-refresh-stale-listing-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webdav-refresh-stale-listing-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webdav-refresh-stale-listing-help-workflow-2026-10-14.webp" alt="Four-step workflow for confirming the item in Dosya Files, opening the matching folder under All, waiting 60 seconds, and checking PROPFIND truncation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for confirming the item in Dosya Files, opening the matching folder under All, waiting 60 seconds, and checking PROPFIND truncation. <a class="workflow-map-full" href="/screenshots/webdav-refresh-stale-listing-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-refresh-stale-listing-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-refresh-stale-listing-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

A cached hit can retain an old child entry until expiry, whereas a missing item is not always a permission problem. Hidden content deliberately stays absent for viewers without access, and the flat smart views can change independently of a file's real location under **All**.

## Steps

1. In Dosya **Files**, confirm the item's current workspace, real folder, exact name, and whether it was created, renamed, moved, replaced, trashed, or restored. Keep that browser view as the source of truth for this check.
2. In the WebDAV client, navigate to the matching folder under **All** or inside the anchored root. Do not compare a real-tree folder with **Documents**, **Images**, **Shared**, or another flat view.
3. Use the client's refresh/reload command on that folder, then leave and reopen it. A successful WebDAV write normally invalidates the source and destination listings immediately.
4. If the old listing remains, wait at least 60 seconds and refresh again. Dosya's server read-through cache uses that fixed expiry for directories with at most 1,000 direct children; larger folders are served fresh.
5. Disconnect and remount only after the second refresh, with no active writes. Reopen the same path and compare the name and size against the browser.
6. If entries are still missing, test direct access to one known path and capture the PROPFIND response. A Depth:1 listing caps at 25,000 visible items and reports `X-Dosya-Truncated: returned/total`; refreshing cannot reveal entries beyond that cap.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV landing page showing the labelled connection URL and the Browse stage refreshed in this guide." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya WebDAV landing page showing the labelled connection URL and the Browse stage refreshed in this guide. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Resource not found** can mean an absent or hidden path. A folder-anchored key shows only its subtree, and trashing the anchor makes the mount refuse access. Switching to a broader key to make an item appear is inappropriate unless the user's role and task genuinely require that reach.

Client refresh and remount are read operations when no file is open. They do not roll back a rename, restore a deleted item, or recreate a missing upload.

## Expected result

The mounted folder matches the verified Dosya Files location after refresh, the 60-second backstop, or a clean remount. If it cannot, the evidence identifies a hidden/anchored path, wrong workspace, missing resource, or 25,000-item truncation rather than an indefinite cache guess.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Troubleshoot WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
