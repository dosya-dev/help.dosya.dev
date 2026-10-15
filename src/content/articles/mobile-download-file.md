---
{
  "articleId": "hc-mobile-download-file",
  "locale": "en",
  "revision": 6,
  "title": "Download a Dosya file on mobile",
  "summary": "Download a cloud file from Dosya mobile, monitor or cancel large transfers, and understand permissions, cache limits, retries, and save locations.",
  "category": "files",
  "articleSlug": "mobile-download-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/mobile/app/(tabs)/(files)/file/[id].tsx, apps/mobile/src/viewer/ViewerActions.tsx, apps/mobile/src/viewer/ViewerSheet.tsx, apps/mobile/src/files/byteStore.ts, apps/mobile/src/files/saveToDevice.ts, apps/api/src/lib/files/download-grant-core.ts, and packages/test-harness/tests/roles-enforcement.int.test.ts. Production behavior was not tested during this documentation update.",
  "related": ["hc-mobile-browse", "hc-mobile-permissions"],
  "keywords": ["mobile download file", "mobile file actions", "Dosya help", "cloud storage", "file backup"]
}
---
The mobile **Download** action fetches the current cloud version to Dosya’s local cache, then hands that copy to the phone’s save flow. It does not remove or relocate the cloud file.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-download-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-download-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-download-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-download-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-download-file-workflow-map-2026-10-14.webp" alt="Dosya mobile file viewer with Download progress states from Preparing through Saved." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The file viewer keeps one transfer per file and exposes progress, cancellation, and retry from the same action. <a class="workflow-map-full" href="/screenshots/mobile-download-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-download-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-download-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the intended file from **Files** and confirm its workspace and current version in the viewer.
- The viewer decides whether **Download** is available from lock state: **View only** disables it and shows “The owner turned off downloads for this file. You can view it and share a link, but not save a copy.” A **Full lock** file keeps it unavailable until its password produces a current unlock token.
- The action does not pre-check the workspace role. After a press, the download-grant API requires file access, membership and confinement, then `download_files`; a role refusal preserves the exact message **You don't have download permission**.
- Ensure the phone has room for the file and a destination copy. Dosya’s ordinary-file cache is capped at 1 GiB and evicts least-recently-used items; the exported copy consumes storage separately.

## Steps

1. In the file viewer, tap **Download**. Its label advances through **Preparing**, **Downloading**, **Saving**, and **Saved**.
2. For a file of at least 25 MiB, read the progress line for transferred bytes, average speed, and estimated time remaining. Smaller files still display the circular progress indicator.
3. Tap the active download action to reveal the sheet again. Choose **Cancel** to stop a running native transfer.
4. When Dosya reaches the save phase, complete the platform prompt:
   - Images and videos request add-to-library access and save to Photos or Gallery.
   - On Android, other files up to and including 64 MiB open a folder picker and are written to the chosen folder.
   - On iOS, non-media files open the system share sheet; choose **Save to Files**.
   - Android non-media files over 64 MiB also use the streaming system share sheet instead of a buffered direct write.
5. Open the result from Photos, Gallery, Files, Downloads, an SD card, or the provider selected in the system sheet. Compare the filename and content with the Dosya item.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability cards for the iPhone and Android clients used by the download workflow." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Android and iOS finish the same cloud download through different native destination controls. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The phone receives a plaintext copy in the selected external location. Dosya keeps the original cloud object, version history, sharing state, and workspace storage unchanged. The cache may retain an unrestricted current-version copy for faster reopening until eviction, cache clearing, or sign-out.

## Troubleshooting

**Download is dimmed.** The file is **View only**, or a **Full lock** has no current unlock token. A missing `download_files` grant does not dim this client-side control; pressing it returns **You don't have download permission**. Ask a workspace owner or role manager to change that role grant.

**The progress line says “Stopped at … · tap to resume.”** Tap **Retry**. The UI preserves the received byte count, although actual continuation depends on the native resumable task and server URL; verify the final file rather than assuming a partial copy is complete.

**You see an API refusal before bytes move.** The URL request preserves server text such as **You don't have download permission**, **This file is locked. Enter the lock password to access it.**, or **Invalid or expired unlock token. Please re-enter the password.** Correct the named role or lock condition before retrying.

**You see “Download failed (403).”** The native file transfer received HTTP 403 after Dosya had already obtained a URL, for example because that presigned URL was invalid or expired. It is not the missing-token or role-denial message. Refresh the file to obtain a new URL, then restart the download.

**No destination appears.** On Android, selecting no folder produces “No folder chosen.” For photos or videos, denied library access produces “dosya needs permission to add photos to your gallery.” Grant the relevant permission in system settings or choose another supported route.

**The transfer reports Saved but you cannot find it.** A gallery result says **Saved to your gallery**; an Android folder write says **Saved to your phone**; a share-sheet handoff says **Choose where to save it**. The last outcome is not complete until you select a destination in the system sheet.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Mobile permissions](/account/mobile-permissions)
