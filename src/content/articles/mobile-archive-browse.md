---
{
  "articleId": "hc-mobile-archive-browse",
  "locale": "en",
  "revision": 5,
  "title": "Browse an archive on mobile",
  "summary": "Browse ZIP, ISO, and IMG folders on Dosya mobile, preview images, transfer other entries, and save eligible files into cloud storage safely.",
  "category": "files",
  "articleSlug": "mobile-archive-browse",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/mobile/app/file/[id]/archive.tsx, apps/mobile/src/archive/ArchiveList.tsx, apps/mobile/app/pick-archive-destination.tsx, apps/mobile/src/archive/archiveSave.ts, and apps/api/src/pages/api/files/[id]/archive/entry.ts. Production behavior was not re-tested.",
  "related": ["hc-mobile-browse", "hc-review-duplicates"],
  "keywords": ["mobile archive browse", "Mobile file tools", "Dosya help", "cloud storage"]
}
---
Dosya mobile browses `.zip`, `.iso`, and ISO 9660 `.img` containers one folder level at a time. Opening the archive directory does not extract every member or download the full source file.

<figure class="help-screenshot"><a href="/screenshots/mobile-archive-browse-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-archive-browse-help-workflow-2026-10-14.webp" alt="Mobile archive workflow showing root and folder chips, an entry list, image preview, transfer, and cloud-save choices." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Move through one archive level at a time, then choose between an image preview, an operating-system transfer, or a new Dosya copy. <a href="/screenshots/mobile-archive-browse-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Navigation and availability

The header shows the current directory and **in archive-name**. A chip row begins with **Root**, followed by each directory in the current path, and reports the number of rows at that level. Tapping a folder drills down. The header Back button and Android hardware Back first move up one level; only Back at root leaves the archive. Swipe-back is disabled while you are inside a nested folder so it cannot discard the entire browsing context.

STORE and DEFLATE members can open. Encrypted rows say **Password-protected** and unsupported methods say **Unsupported compression**; both are disabled. Folder rows display their item count, while an eligible file displays its uncompressed size.

## Steps

1. In the iOS or Android app, open a ZIP, ISO, or IMG file from the intended workspace.
2. Wait for the root list. The top strip identifies it as **Archive** or **Disk image**.
3. Tap a folder to enter it. Use a path chip to jump directly to any earlier level without repeatedly pressing Back.
4. Tap an image member to open the in-app dark preview. Its footer shows the member name and size; use **Close preview** to return.
5. Tap another eligible file type to download it to the app cache and open the operating system share sheet. The access token travels in the request header rather than in the URL.
6. To keep a member in cloud storage, use its **Save name to dosya** action, choose a folder in **Save to…**, and press **Save here**.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile platform overview for identifying the supported iPhone and Android clients used to browse archives." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The archive route is part of the Dosya mobile clients; browser and desktop archive controls use a two-pane tree instead. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Preview, transfer, and save rules

Images use the preview permission path and can remain visible under view-only access. Every non-image tap invokes an export-capable request with `dl=1` because the operating-system sheet can offer Save to Files or AirDrop. If download access is blocked, the app says **You don't have permission to save or share this entry.** Other cache or network failures produce **This entry could not be transferred.**

Saving into Dosya also requires upload permission and an allowed destination. Folder-confined members remain inside their assigned folder tree. For one item, success reports **Saved name to dosya**. A server refusal for a lock, quota, permission, or file limit is displayed in the picker.

**Save all to dosya** is available at archive root and also requires **create folders** permission because it wraps the extracted hierarchy in a folder named after the archive. A folder plan can contain at most 500 eligible files. Above that, the app says **This folder has N files. Save smaller folders (up to 500), or transfer the archive.** Progress reads **Saving N of M** and offers **Cancel**. Cancellation and later failures do not remove directories or members already saved.

If no safe rows exist, root says **There is nothing inside this archive.** Nested emptiness says **There is nothing in this folder.** A truncated index reports **Showing the first X of Y entries. Transfer the whole archive to get the rest.** A 413 list refusal becomes **This archive is too large to list. Download it to open its contents.**

## Expected result

The path chips and header identify the current level. An image opens inside Dosya, another eligible format reaches the system share sheet when export is allowed, or a saved member appears as a separate file in the selected workspace folder. Merely browsing leaves the container unchanged.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Review duplicates](/files/review-duplicates)
