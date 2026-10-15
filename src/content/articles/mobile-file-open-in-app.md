---
{
  "articleId": "hc-mobile-file-open-in-app",
  "locale": "en",
  "revision": 5,
  "title": "Open a Dosya file in another mobile app",
  "summary": "Hand a downloadable Dosya file to another mobile app through Share via, understand the local-cache step, and handle lock, network, and app support limits.",
  "category": "files",
  "articleSlug": "mobile-file-open-in-app",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/(tabs)/(files)/file/[id].tsx, apps/mobile/src/files/download.ts, apps/mobile/src/files/byteStore.ts, apps/mobile/src/files/lock.ts, apps/mobile/src/viewer/ViewerMoreSheet.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile file open in app",
    "Mobile file handling details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya uses the operating-system share sheet for opening a cloud file in another app. The exact menu label in the viewer is **More** → **Share via…**; there is no separate **Open in** button.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-file-open-in-app-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-file-open-in-app-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-file-open-in-app-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-file-open-in-app-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-file-open-in-app-help-workflow-2026-10-14.webp" alt="Open-in-app workflow showing a file in the viewer, More and Share via, download to the Dosya cache, the operating-system chooser, and verification in the selected app." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Open-in-app workflow: confirm the file, choose **More** and **Share via…**, wait for a local copy, select a compatible app in the system chooser, and verify the handoff. <a class="workflow-map-full" href="/screenshots/mobile-file-open-in-app-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-file-open-in-app-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-file-open-in-app-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The file bytes are downloaded into Dosya’s cache first. If an unrestricted current-version copy is already cached, Dosya reuses it instead of downloading again.

## Steps

1. Open the file and confirm its filename, type, size, preview, and workspace context.
2. If the file is fully locked, enter its password before trying to hand off the bytes.
3. Tap **More**, then choose **Share via…**; this action is absent when downloads are not allowed.
4. Keep Dosya available while it retrieves the file; a large item can take time even before the system chooser appears.
5. Select a trusted app that supports the file type in the iOS or Android share sheet.
6. In the receiving app, verify the filename and content before editing, sending, or deleting any source copy.

### Access behavior

A `view_only` file can be previewed in Dosya but cannot use **Share via…** because that would create a downloadable copy. A `full_lock` file hides byte-dependent actions until a successful unlock token exists. If the server refuses the download or the network fails, Dosya shows the returned error or **Couldn’t share this file.**

The receiving app gets a local file copy, not ongoing access to the Dosya workspace. Changes made there do not update the cloud file unless that app later exports or uploads a replacement.

### Cache and privacy

Unrestricted files may remain in Dosya’s bounded byte cache for reuse. View-only and locked bytes use transient storage and are swept between sessions. You can clear reconstructible cached content from **Settings** → **Storage** without deleting the cloud file.

The system chooser controls which destinations appear. If a desired app is absent, confirm that it is installed and supports the file’s extension or MIME type; Dosya cannot force an incompatible target to register.

## Expected result

The chosen compatible app receives the complete intended file through the system share flow. The original remains in Dosya, the handoff copy is independent, and restricted files do not expose **Share via…**.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Download a file on mobile](/files/mobile-download-file)
