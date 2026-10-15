---
{
  "articleId": "hc-cloud-import-verify-folders",
  "locale": "en",
  "revision": 5,
  "title": "Verify imported folder structure",
  "summary": "Validate imported hierarchy with source-to-Dosya checkpoints, including merged names, skipped objects, conversions, and terminal job counts.",
  "category": "integrations",
  "articleSlug": "cloud-import-verify-folders",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/cloud-import/discover.ts, apps/api/src/lib/cloud-import/discover-d1.ts, apps/api/src/lib/cloud-import/transfer.ts, apps/web/src/lib/cloud-import-toasts.ts. Production behavior for “Verify imported folder structure” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-progress"
  ],
  "keywords": [
    "cloud import verify folders",
    "Cloud import operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Verify folder structure after the terminal toast, not during discovery, because totals grow while the provider tree is walked. Use several checkpoints across depth rather than trusting a single top-level count.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cloud-import-verify-folders-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-verify-folders-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-verify-folders-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cloud-import-verify-folders-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cloud-import-verify-folders-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Verify imported folder structure: Record root middle and deepest source-folder checkpoints. Save the terminal completed skipped and failed totals. Compare all three Dosya checkpoints with source names and conversions. Open one file at each checkpoint, verify transferred contents." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Record root middle and deepest source-folder checkpoints.” and ends with “Open one file at each checkpoint, verify transferred contents.” <a class="workflow-map-full" href="/screenshots/cloud-import-verify-folders-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-verify-folders-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-verify-folders-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Record the source’s selected roots and a child-count checkpoint at the root, a middle folder, and the deepest meaningful branch.
2. Wait for **Import complete** or another terminal toast, and save its completed, skipped, and failed numbers.
3. Open the active Dosya workspace root and match each selected remote folder to its created or reused top-level folder.
4. Follow the three imported folder checkpoints; compare names, unsupported skips, and native-document export extensions.
5. Open at least one file from each checkpoint and verify its contents; a visible filename alone does not prove transfer integrity.
6. Investigate absent imported files for same-name collisions and workspace policies before disconnecting the cloud provider or deleting its source.

A selected folder is mapped before its descendants are discovered, and live same-name folders under the same parent are reused. Provider source timestamps are stored when available, but Dropbox folders do not supply them and directly selected roots lack transmitted dates. Terminal cards are not retained as history in the web UI.

## Expected result

Every reviewed source path resolves to the intended Dosya folder, supported files open, and differences are accounted for by conversion, skip, collision, cancellation, or policy. The provider stays connected until that reconciliation is complete.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Monitor an import](/integrations/import-progress)
