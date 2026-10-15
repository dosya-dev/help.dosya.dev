---
{
  "articleId": "hc-mobile-file-details",
  "locale": "en",
  "revision": 5,
  "title": "Review mobile file details and actions",
  "summary": "Open the mobile file record, distinguish visible preview metadata from expanded details, and understand which rows appear only when data exists.",
  "category": "files",
  "articleSlug": "mobile-file-details",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/(tabs)/(files)/file/[id].tsx, apps/mobile/src/viewer/ViewerSheet.tsx, apps/mobile/src/viewer/ViewerDetails.tsx, apps/mobile/src/viewer/ViewerMoreSheet.tsx, apps/mobile/src/viewer/viewerModel.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-review-duplicates"
  ],
  "keywords": [
    "mobile file details",
    "Mobile file tools",
    "Dosya help",
    "cloud storage"
  ]
}
---
The mobile viewer separates a short metadata line from the expanded **Details** record. Unknown fields are omitted rather than displayed as **Unknown**, so two files can show different rows.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-file-details-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-file-details-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-file-details-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-file-details-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-file-details-help-workflow-2026-10-14.webp" alt="Mobile file-details workflow showing the viewer sheet, metadata line, File details action, expanded rows, and nearby files in the same folder when available." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Mobile file-details workflow: open the file, read its summary and lock badge, expand **File details**, inspect available rows, and verify the selected filename before acting. <a class="workflow-map-full" href="/screenshots/mobile-file-details-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-file-details-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-file-details-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The viewer’s summary starts with size and a readable type such as **JPEG image**, **PDF**, **Markdown**, or **Word document**, then adds type-specific facts when measured and the added date.

## Steps

1. Open the file from **Files** and confirm its filename at the bottom of the viewer.
2. Read the badge beside the name: **Locked** requires a password; **View only** permits viewing but disables saving.
3. Read the summary for size, kind, and added date; images may add dimensions, media duration, documents pages or lines, contacts a count, and books reading progress.
4. Drag the bottom sheet upward, or choose **More** → **File details** while the sheet is collapsed.
5. Inspect the rows that exist: **Kind**, **Size**, **Added**, and optional **Modified**, **Added by**, **Stored in**, **Version**, **Links**, and **Extension**.
6. Recheck the filename and preview before choosing Save, Link, Versions, More, or a destructive action.

### Detail rules

**Modified** appears only when it differs from **Added**. **Stored in** names the storage region’s city, not a folder path. **Version** appears only above version 1, and **Links** appears only when at least one active share link exists.

If the viewer was opened from a folder list, expanding Details can also show **In this folder** thumbnails. Selecting one changes the current file without adding another route to Back history. A deep link or search result may not have that neighbor context.

### Actions in More

The menu can include **Rename**, **Move to folder**, **Make a copy**, **Share via…**, **Restore to phone** for VCF, **File details**, **Edit document** for Office formats, **Comments**, and **Move to trash**. Availability depends on the file type, lock mode, expanded state, and permissions. Moving a Live Photo still to trash asks whether its paired video should also be deleted.

## Expected result

The expanded record identifies the selected file with every metadata value the API supplied, while absent values stay hidden. Any action you take is tied to the filename shown in the viewer and More sheet.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Review duplicates](/files/review-duplicates)
