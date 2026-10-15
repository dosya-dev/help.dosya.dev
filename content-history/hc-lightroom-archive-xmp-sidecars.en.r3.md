---
{
  "articleId": "hc-lightroom-archive-xmp-sidecars",
  "locale": "en",
  "revision": 3,
  "title": "Archive Lightroom XMP sidecars with originals",
  "summary": "Run dosya Archive for the selected originals and verify their sidecars. Verify that each applicable original and current XMP sidecar appears in the mirrored folder.",
  "category": "integrations",
  "articleSlug": "lightroom-archive-xmp-sidecars",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-lightroom-configure-publish-service",
    "hc-upload-states"
  ],
  "keywords": [
    "lightroom archive xmp sidecars",
    "Lightroom export and archive",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Archive Lightroom XMP sidecars with originals** in Dosya. The main action is to run dosya Archive for the selected originals and verify their sidecars; the decisive check is whether each applicable original and current XMP sidecar appears in the mirrored folder.

<figure class="help-screenshot"><a href="/screenshots/lightroom-archive-xmp-sidecars-help-workflow-2026-10-14.webp"><img src="/screenshots/lightroom-archive-xmp-sidecars-help-workflow-2026-10-14.webp" alt="Four-step workflow map for archive lightroom xmp sidecars with originals, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for archive lightroom xmp sidecars with originals: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/lightroom-archive-xmp-sidecars-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Lightroom Classic Export in the current released client.
- Confirm the active account and workspace, then identify photos whose develop metadata is stored in XMP sidecars.

## Steps: archive Lightroom XMP sidecars with originals

1. Open Lightroom Classic Export and confirm the active account and workspace.
2. Locate photos whose develop metadata is stored in XMP sidecars and verify its name or identifying details.
3. Run dosya Archive for the selected originals and verify their sidecars.
4. Confirm that each applicable original and current XMP sidecar appears in the mirrored folder.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Dosya Lightroom Classic export and original-file archive workflows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a small catalog sample and keep originals backed up independently while testing. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Each applicable original and current XMP sidecar appears in the mirrored folder.

## Expected result

The controlled workflow completes and each applicable original and current XMP sidecar appears in the mirrored folder.

## Troubleshooting

**The expected control is missing.** Return to Lightroom Classic Export, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Configure Lightroom publishing](/integrations/lightroom-configure-publish-service)
- [Resume an interrupted upload](/uploading/progress-and-states)
