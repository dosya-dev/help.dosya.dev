---
{
  "articleId": "hc-mobile-image-zoom-pan",
  "locale": "en",
  "revision": 5,
  "title": "Zoom and pan an image on mobile",
  "summary": "View a full mobile image accurately, understand that pinch zoom and pan are not implemented, and use Save or Share via for detailed inspection.",
  "category": "files",
  "articleSlug": "mobile-image-zoom-pan",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/(tabs)/(files)/file/[id].tsx, apps/mobile/src/viewer/stages/ImageStage.tsx, apps/mobile/src/viewer/ViewerChrome.tsx, apps/mobile/src/files/saveToDevice.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-media-preview",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile image zoom pan",
    "Mobile media viewing",
    "Dosya help",
    "cloud storage"
  ]
}
---
The current mobile image stage fits the complete image inside the viewer with `contain`. It does not implement pinch-to-zoom or drag-to-pan, so those gestures cannot reveal more detail inside Dosya.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-image-zoom-pan-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-image-zoom-pan-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-image-zoom-pan-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-image-zoom-pan-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-image-zoom-pan-help-workflow-2026-10-14.webp" alt="Mobile image inspection workflow showing contain-fit preview, a tap to hide viewer chrome, the absence of pinch zoom, Save or Share via, and inspection in another app." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Mobile image inspection workflow: open the contain-fit preview, hide chrome for more room, recognize the current zoom limitation, export when allowed, and verify details elsewhere. <a class="workflow-map-full" href="/screenshots/mobile-image-zoom-pan-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-image-zoom-pan-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-image-zoom-pan-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The viewer reports natural pixel dimensions after the native image loader succeeds. It can cache unrestricted images on disk, while view-only and fully locked images use memory-only caching.

## Steps

1. Open the image and confirm its filename, type, size, and lock badge.
2. Wait for the spinner to clear and read the measured dimensions in the metadata line.
3. Tap the stage once to hide the top and bottom viewer chrome and use the maximum available fit-to-screen area.
4. Do not rely on pinch or drag gestures; the released stage has no zoom or pan handler.
5. If downloads are allowed, use **Save** or **More** → **Share via…** and open the local copy in a photo app that supports detailed zoom.
6. Compare the inspected detail with the original filename and dimensions before taking any action on the cloud file.

### If the image does not decode

The viewer separates a transfer failure from an unsupported decoder. A failed byte fetch offers **Try again**. A format the phone cannot decode should be saved and opened in a compatible app instead of repeatedly retried; Android, for example, may lack TIFF or older HEIC decoding even though Dosya recognizes the file as an image.

**View only** intentionally disables Save and Share via. It can still show a reduced-size preview, and screenshots remain possible. A fully locked image must be unlocked before its bytes are available.

### Swiping is file navigation

When opened from a folder list, a horizontal swipe moves to neighboring files; it does not pan the current image. Images on either side may be prefetched, but only the active page resolves its full stage. Use the bottom sheet or filename to confirm which file is current.

## Expected result

Dosya shows the whole image uncropped and reports its dimensions when decoding succeeds. Fine-detail zoom requires an external viewer after an allowed Save or Share via handoff; restricted files remain viewable without an export control.

## Related guides

- [Use media previews](/files/media-preview-controls)
- [Download on mobile](/files/mobile-download-file)
