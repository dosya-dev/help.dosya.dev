---
{
  "articleId": "hc-request-uploader-stage-files",
  "locale": "en",
  "revision": 5,
  "title": "Stage several files for a request",
  "summary": "Stage files from picker, folder, drop, paste, photo library, or camera; inspect paths and rejections before starting the three-file upload queue.",
  "category": "sharing",
  "articleSlug": "request-uploader-stage-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: src/pages/upload-request/[token].astro, apps/api/src/lib/upload-request/relative-path.ts, apps/api/src/lib/upload-request/uploader-folder.ts, apps/api/src/pages/api/upload-request/[token]/multipart/init.ts.",
  "related": [
    "hc-request-upload",
    "hc-request-troubleshoot"
  ],
  "keywords": [
    "request uploader stage files",
    "File-request uploader workflow",
    "Dosya help",
    "file sharing"
  ]
}
---
Staging is reversible and sends no bytes. Add files through the controls available on your device, inspect every ledger row, and remove unintended items before choosing **Upload**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/request-uploader-stage-files-help-workflow-2026-10-14.webp" data-light-href="/screenshots/request-uploader-stage-files-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/request-uploader-stage-files-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/request-uploader-stage-files-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/request-uploader-stage-files-help-workflow-2026-10-14.webp" alt="Four-step map for reviewing request context, choosing a device-specific source, inspecting staged paths and rejections, and starting the approved queue." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Build and inspect the local queue before upload, including preserved paths and per-row refusal text, then send only the reviewed files. <a class="workflow-map-full" href="/screenshots/request-uploader-stage-files-help-workflow-2026-10-14.webp" data-light-href="/screenshots/request-uploader-stage-files-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/request-uploader-stage-files-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the active request and read its destination, sender, message, and terms. Enter **Your name (optional)** and **Your email (optional)** only if you want them used for the uploader folder label.
2. On desktop, click the drop area, choose **Files** or **Folder**, drag a tree onto the page, or paste copied files. Touch devices show **Photo library**, **Take a photo**, and **Browse files** instead of drag and drop.
3. Inspect the ledger after each addition. Folder picks and drops retain relative directories; byte-identical selections are skipped only when name, size, modified time, and path all match.
4. Remove any unintended waiting row with its × control. This changes only the local queue; nothing reaches Dosya until you press the upload button.
5. Correct all rows marked **cannot be sent**. Accepted staged rows consume provisional slots, while rejected and failed rows do not reduce the local remaining-slot calculation.
6. Choose **Upload N files**. Dosya runs at most three files concurrently; files over 50 MiB split into 10 MiB parts with up to three parts in flight for that file.

<figure class="help-screenshot"><a href="/screenshots/request-upload-ready-2026-10-12.webp"><img src="/screenshots/request-upload-ready-2026-10-12.webp" alt="Public request page showing several files ready for review before upload." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The staging ledger exposes names, retained folder paths, byte sizes, and any refusal before the three-file queue starts. <a href="/screenshots/request-upload-ready-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Only reviewed, accepted rows enter the transfer queue; folder structure is retained, and rejected or removed items send no content.

**Cancel all** aborts current requests and returns canceled rows to the staged state.
**When uploader folders are enabled, Dosya chooses the folder from name, invited recipient email resolved from the bearer `?r=` token, typed email, dropped root folder, then guest code.**

## Related guides

- [Upload to a request](/sharing/request-upload)
- [Troubleshoot a request](/sharing/troubleshoot-file-request)
