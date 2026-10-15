---
{
  "articleId": "hc-upload-prepare-file-names",
  "locale": "en",
  "revision": 5,
  "title": "Prepare file names before uploading",
  "summary": "Prepare names for Dosya sanitization, the 255-character limit, extension rules, and same-name versioning before starting a large upload batch.",
  "category": "uploading",
  "articleSlug": "upload-prepare-file-names",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-15; production behavior was not exercised for this revision. Verified against: apps/web/src/lib/upload-limits.ts; apps/web/src/lib/validation-policy.generated.ts; apps/web/src/lib/dropped-entries.ts; apps/api/src/pages/api/upload/init.ts; apps/api/src/lib/workspace-do/durable-object.ts.",
  "related": [
    "hc-upload-files",
    "hc-upload-states"
  ],
  "keywords": [
    "upload prepare file names",
    "Upload preparation and preflight",
    "Dosya help",
    "file upload"
  ]
}
---

The web uploader sanitizes incoming names before validating them. Leading and trailing whitespace is trimmed, `/` and `\\` become `_`, ASCII control characters are removed, and the complete names `.` or `..` become `_`. The result must be at most 255 characters.

Workspace upload rules can allow or block extensions. Dosya derives the extension from the final suffix in lowercase. A same-name file in the same destination normally becomes a new version of the existing file; rename one source first when both should remain separate live items.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/upload-prepare-file-names-help-workflow-2026-10-14.webp" data-light-href="/screenshots/upload-prepare-file-names-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/upload-prepare-file-names-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/upload-prepare-file-names-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/upload-prepare-file-names-help-workflow-2026-10-14.webp" alt="Four-step file-name preflight showing collision review, the 255-character ceiling, workspace extension rules, and one sample stored-name check." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Check collisions, length, and extensions before the batch, then upload one sample and confirm its stored name through <strong>View file</strong>. <a class="workflow-map-full" href="/screenshots/upload-prepare-file-names-help-workflow-2026-10-14.webp" data-light-href="/screenshots/upload-prepare-file-names-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/upload-prepare-file-names-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the final Dosya folder and compare source names with existing live files; choose new names when a new version is not the intended outcome.
2. Keep each file name at 255 characters or fewer after trimming, including the extension; longer results are rejected as **Name too long (max 255)**.
3. Replace path separators and ASCII control characters yourself when the exact stored spelling matters, because ingest would otherwise sanitize them automatically.
4. Leave ordinary quotes, apostrophes, `<`, and `>` intact when the local platform permits them; Dosya's current single-segment policy does not reject those characters.
5. Confirm every final suffix satisfies the workspace's allowlist or blocklist; files without an extension are reported as **(no extension)** when an allowlist requires one.
6. Upload one sample, wait for **Done**, and choose **View file** to inspect the stored name; rename the local source before the larger batch if sanitization changed the intended label.

<figure class="help-screenshot"><a href="/screenshots/files-upload-2026-10-10.webp"><img src="/screenshots/files-upload-2026-10-10.webp" alt="Dosya Files view showing existing file names and a highlighted Upload button used after collision checks." width="1440" height="520" loading="lazy" decoding="async" /></a><figcaption>Review existing names in the destination before using <strong>Upload</strong>, because an exact collision is handled as versioning. <a href="/screenshots/files-upload-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Each accepted queue row has a recognizable, valid name and allowed extension. Distinct source names create distinct live items; an intentional exact match updates the existing item's version history.

Folder uploads automatically skip `.DS_Store`, `Thumbs.db`, `desktop.ini`, and AppleDouble names beginning `._`. A blocked suffix stays as an error row with **File type .ext is not allowed in this workspace**; an allowlist miss says it **is not in the allowed list**. Correct the local name, remove the refused row, and add the renamed source as a new upload rather than pressing Retry on unchanged input.

## Related guides

- [Uploading files and folders to Dosya](/uploading/files-and-folders)
- [Read rejection and completion states for renamed files](/uploading/progress-and-states)
