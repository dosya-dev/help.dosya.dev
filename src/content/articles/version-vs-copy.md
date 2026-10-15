---
{
  "articleId": "hc-version-vs-copy",
  "locale": "en",
  "revision": 5,
  "title": "Distinguish a file version from a copied file",
  "summary": "Distinguish a new version from a copied record by file ID, folder location, independent timeline, uploader, origin, and later edit histories.",
  "category": "files",
  "articleSlug": "version-vs-copy",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/file-viewer.tsx, apps/web/src/pages/files.tsx, apps/api/src/pages/api/files/[id]/versions.ts, and apps/api/src/pages/api/files/[id]/versions/restore.ts, and apps/api/src/pages/api/files/[id]/copy.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-version-history",
    "hc-file-details"
  ],
  "keywords": [
    "version vs copy",
    "Version history operations",
    "Dosya help",
    "cloud storage"
  ]
}
---
A version belongs to one file ID and one Versions timeline. **Copy** creates another file record with its own ID and future history, even when both records initially have identical bytes and names.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/version-vs-copy-workflow-map-2026-10-14.webp" data-light-href="/screenshots/version-vs-copy-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/version-vs-copy-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/version-vs-copy-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/version-vs-copy-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for locating two same-named records, comparing their details and version timelines, and confirming which is the copy." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map uses durable record identity rather than filename alone. <a class="workflow-map-full" href="/screenshots/version-vs-copy-workflow-map-2026-10-14.webp" data-light-href="/screenshots/version-vs-copy-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/version-vs-copy-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Locate both candidate records. Record each folder or group context and open them separately so a repeated filename does not collapse your investigation.
2. Compare file IDs through the file URL or information surface. Different IDs prove separate records; version rows never change their parent file ID.
3. Open **Versions** for each record. An uploaded replacement increments one timeline, while a copy begins and evolves independently.
4. Compare **Created**, **Modified**, **Uploaded by**, and **Origin** as supporting evidence. Copy preserves source timestamps and content hash internally but records the copying client and actor for the new record.
5. Make a harmless test only when necessary: upload a tiny replacement to the known disposable copy, then confirm only its Versions count changes.
6. Remove the test record or restore its previous bytes after identification. Do not permanently delete either candidate until its ID and timeline are unambiguous.

<figure class="help-screenshot"><a href="/screenshots/file-versions-2026-10-10.webp"><img src="/screenshots/file-versions-2026-10-10.webp" alt="Versions panel for one file ID showing a single three-row timeline from v1 through v3 Latest." width="400" height="560" loading="lazy" decoding="async" /></a><figcaption>Every row in this inspector belongs to one file record; a copy has a different inspector and file ID. <a href="/screenshots/file-versions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Moves are different again.** Moving changes only the folder reference for the same file record, so its ID and version timeline continue. Copy creates another record; Upload new version appends bytes to the existing one.

## Expected result

You can name which record continues the original timeline and which is the independent copy using IDs and version histories, without relying on matching names or bytes.

## Related guides

- [Inspect a file’s complete version timeline](/files/version-history)
- [Read identity and location details](/files/file-details)
