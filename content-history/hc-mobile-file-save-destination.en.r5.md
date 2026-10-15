---
{
  "articleId": "hc-mobile-file-save-destination",
  "locale": "en",
  "revision": 5,
  "title": "Save a mobile file to a chosen device folder",
  "summary": "Save a Dosya file to the correct mobile destination by file type and platform, including Android\u2019s 64 MiB direct-write cutoff and cancellation states.",
  "category": "files",
  "articleSlug": "mobile-file-save-destination",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/(tabs)/(files)/file/[id].tsx, apps/mobile/src/files/saveToDevice.ts, apps/mobile/src/files/downloadModel.ts, apps/mobile/src/files/downloadControl.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile file save destination",
    "Mobile file handling details",
    "Dosya help",
    "cloud storage"
  ]
}
---
The viewer’s **Save** action first downloads the complete file into Dosya’s cache, then chooses a device destination according to the file type, platform, and size.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-file-save-destination-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-file-save-destination-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-file-save-destination-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-file-save-destination-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-file-save-destination-help-workflow-2026-10-14.webp" alt="Mobile save workflow showing download progress, completed Gallery or Android folder writes, a system-sheet handoff for iOS non-media or Android files above 64 MiB, and external verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Mobile save workflow: start **Save**, follow the platform branch, distinguish a completed Gallery or Android folder write from a system-sheet handoff, and verify the external copy. <a class="workflow-map-full" href="/screenshots/mobile-file-save-destination-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-file-save-destination-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-file-save-destination-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Photos and videos go to the media library on both platforms. Other files use Android’s folder picker when they are at most 64 MiB; larger Android files and non-media files on iOS use the system share sheet.

## Steps

1. Open the file and confirm its name, size, type, and lock badge.
2. Tap **Save** in the viewer action row; a view-only file keeps this control disabled.
3. Watch the ring for preparing, downloading, and saving; tap an active ring to reopen progress rather than starting a duplicate transfer.
4. For an image or video, grant photo-library access and look in Photos or Gallery.
5. For another file, choose the Android folder when offered, or choose **Save to Files** or another destination in the iOS/system sheet.
6. Verify completed saves outside Dosya. For a **Choose where to save it** handoff, finish the system sheet before checking the destination.

### Android’s 64 MiB branch

Android’s Storage Access Framework write requires Dosya to hold a base64 representation in JavaScript memory. To avoid an out-of-memory crash, files above 64 × 1024 × 1024 bytes bypass direct folder writing and open the streaming system share sheet with **Too large to save directly - choose where to put it**.

For a direct Android save, cancelling the directory picker returns **No folder chosen.** and clears the transfer row. On media saves, denying permission returns **dosya needs permission to add photos to your gallery.**

### Transfer controls

Cancelling while bytes are downloading stops the registered task. Pressing an error state restarts the transfer. A completed status remains visible briefly, then returns to the normal **Save** action. An already cached unrestricted file can skip a second network fetch.

The exported copy is independent of the workspace item. Renaming, editing, or deleting it on the device does not update Dosya, and moving the cloud file to Trash does not remove the device export.

## Expected result

The selected media reaches Gallery, or an Android file at most 64 MiB reaches the chosen folder. For iOS non-media and Android files above 64 MiB, Dosya confirms only that it handed the file to the system sheet; verify completion in the external destination. The cloud original remains unchanged and available subject to its workspace permissions.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Download a file on mobile](/files/mobile-download-file)
