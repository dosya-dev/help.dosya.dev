---
{
  "articleId": "hc-lightroom-catalog-busy",
  "locale": "en",
  "revision": 3,
  "title": "Retry Lightroom when the catalog is busy",
  "summary": "Finish other catalog writes, wait briefly, and run the same plug-in command again. Verify that the deferred catalog update completes.",
  "category": "integrations",
  "articleSlug": "lightroom-catalog-busy",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/lightroom-catalog-busy-help-workflow-2026-10-14.webp"><img src="/screenshots/lightroom-catalog-busy-help-workflow-2026-10-14.webp" alt="Four-step workflow map for retry lightroom when the catalog is busy, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for retry lightroom when the catalog is busy: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/lightroom-catalog-busy-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Lightroom Classic and Integrations > Lightroom Classic in the current released client.
- Confirm the active account and workspace, then identify catalog-busy warning from publishing or selection sync.

## Steps: retry Lightroom when the catalog is busy

1. Open Lightroom Classic and Integrations > Lightroom Classic and confirm the active account and workspace.
2. Locate catalog-busy warning from publishing or selection sync and verify its name or identifying details.
3. Finish other catalog writes, wait briefly, and run the same plug-in command again.
4. Confirm that the deferred catalog update completes.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Dosya Lightroom Classic integration overview used to diagnose catalog connections and publishing." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Keep Lightroom open, preserve the exact error, and test with one photo before retrying a large publish. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The deferred catalog update completes.

## Expected result

The controlled workflow completes and the deferred catalog update completes.

## Troubleshooting

**The expected control is missing.** Return to Lightroom Classic and Integrations > Lightroom Classic, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect Lightroom](/integrations/lightroom-connect-catalog)
- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
