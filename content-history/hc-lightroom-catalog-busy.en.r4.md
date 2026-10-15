---
{
  "articleId": "hc-lightroom-catalog-busy",
  "locale": "en",
  "revision": 4,
  "title": "Retry Lightroom when the catalog is busy",
  "summary": "Finish other catalog writes, wait briefly, and run the same plug-in command again. Verify that the deferred catalog update completes.",
  "category": "integrations",
  "articleSlug": "lightroom-catalog-busy",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-lightroom-connect-catalog",
    "hc-lightroom-publish-gallery"
  ],
  "keywords": [
    "lightroom catalog busy",
    "Lightroom connection and publish troubleshooting",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Retry Lightroom when the catalog is busy** in Dosya. The main action is to finish other catalog writes, wait briefly, and run the same plug-in command again; the decisive check is whether the deferred catalog update completes.

<figure class="help-screenshot"><a href="/screenshots/lightroom-catalog-busy-help-workflow-2026-10-14.webp"><img src="/screenshots/lightroom-catalog-busy-help-workflow-2026-10-14.webp" alt="Workflow for “Retry Lightroom when the catalog is busy”: finish other catalog writes, wait briefly, and run the same plug-in command again; the deferred catalog update completes." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Retry Lightroom when the catalog is busy”: finish other catalog writes, wait briefly, and run the same plug-in command again; the deferred catalog update completes. <a href="/screenshots/lightroom-catalog-busy-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Lightroom Classic and Integrations > Lightroom Classic and locate the catalog-busy warning from publishing or selection sync.
- Confirm the active account and workspace, then identify catalog-busy warning from publishing or selection sync.

## Steps: retry Lightroom when the catalog is busy

1. Confirm the account and workspace in Lightroom Classic and Integrations > Lightroom Classic when reviewing the catalog-busy warning from publishing or selection sync.
2. Locate catalog-busy warning from publishing or selection sync and verify its name or identifying details.
3. Finish other catalog writes, wait briefly, and run the same plug-in command again.
4. Confirm that the deferred catalog update completes.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Reference for “Retry Lightroom when the catalog is busy”: Lightroom Classic integration title card with a camera aperture illustration." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Retry Lightroom when the catalog is busy”: Lightroom Classic integration title card with a camera aperture illustration. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The deferred catalog update completes.

## Expected result

The controlled workflow completes and the deferred catalog update completes.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the catalog-busy warning from publishing or selection sync, check the active workspace, your role and the client version.

## Related guides

- [Connect Lightroom](/integrations/lightroom-connect-catalog)
- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
