---
{"articleId":"hc-preview-download-unsupported","locale":"en","revision":2,"title":"Download a file Dosya cannot preview","summary":"Verify and download an unsupported file from Dosya cloud storage, then open the original safely in a trusted mobile or desktop application.","category":"files","articleSlug":"preview-download-unsupported","status":"published","lastReviewed":"2026-10-14","verification":"Verified against current local product source for the web and mobile preview fallbacks, mobile Save to phone behavior, download permission checks, file locks, and Android/iOS save destinations on 2026-10-14.","related":["hc-preview-files","hc-preview-unsupported-download"],"keywords":["download unsupported file","cloud file preview unavailable","file download","open unknown file type","Dosya cloud storage"]}
---
Dosya can store file types that it cannot display inline. **No preview for this type** means the viewer has no compatible renderer; it does not mean the cloud-stored original is damaged. Check the file details, download the original, and open it only with an application you trust.

<figure class="help-screenshot"><a href="/screenshots/mobile-unsupported-download-map-2026-10-14.webp"><img src="/screenshots/mobile-unsupported-download-map-2026-10-14.webp" alt="Interface map for saving a file that the Dosya mobile viewer cannot preview." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: verify the file, use Save to phone, then choose the Android folder picker or iPhone Save to Files. <a href="/screenshots/mobile-unsupported-download-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

### Verify the file before downloading

1. Open the file in Dosya.
2. Check the filename, extension, MIME type, size, uploader, and workspace in the details panel.
3. Confirm you expected the file and recognize its source. Do not rename an unknown extension merely to make another application accept it.
4. If the viewer says **Could not load**, use **Try again** once. That message can indicate a network or preview-fetch failure. If it says **No preview for this type**, retrying will not add format support.

<figure class="help-screenshot"><a href="/screenshots/preview-unsupported-file-2026-10-12.webp"><img src="/screenshots/preview-unsupported-file-2026-10-12.webp" alt="Dosya viewer for a PSD file with Open as text and Download actions." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The original PSD remains downloadable even though Dosya cannot render its contents inline. Check the details panel before opening it elsewhere. <a href="/screenshots/preview-unsupported-file-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: download the original

Select **Download** in the viewer. Your browser saves the original bytes using its normal download location. If the file is a text-like format, Dosya may also offer **Open as text**; this is useful for inspection but can show binary data for formats such as PSD, so it is not a replacement for the original file.

## Save from the mobile app

In the mobile viewer, choose **Save to phone** when it appears:

- Photos and videos are saved to the phone's media library after you approve access.
- On Android, other files up to 64 MB use the system folder picker so you can choose Downloads, an SD card, or another available location.
- On iPhone, other files open the system share sheet; choose **Save to Files** or another trusted destination.
- On Android, files over 64 MB use the share sheet instead of direct folder writing because direct writing would require buffering the whole file in memory.

Wait for **Saved to your gallery**, **Saved to your phone**, or **Choose where to save it** before closing the viewer.

## Troubleshooting

### When Download or Save is unavailable

A role needs download permission to save the original. A file or parent folder in **view only** mode can allow preview while blocking download. A fully locked file requires its password before bytes are available. Ask the owner to change the access rule if you have a legitimate need for the original; repeated retries do not bypass these controls.

## Open the downloaded file safely

Use an application that explicitly supports the extension. Keep the operating system and viewer updated, scan files from unfamiliar sources, and avoid enabling macros or embedded scripts unless you have verified the sender. After opening, compare the displayed filename and size with Dosya's details to confirm you selected the intended download.

## Expected result

The original file is saved to the selected device location and opens in a trusted application that supports its format. The cloud copy remains unchanged.

## Limits and important details

Preview support and download permission are separate. View-only and full-lock rules may prevent saving even when some file details or previews remain visible.

## Related guides

- [Preview files without downloading](/files/preview-files)
- [Handle a file type Dosya cannot preview](/files/preview-unsupported-download)
