---
{
  "articleId": "hc-lightroom-connection-code-expired",
  "locale": "en",
  "revision": 3,
  "title": "Fix an expired Lightroom connection code",
  "summary": "Cancel the old request, choose Connect again, and approve the newly displayed code before it expires. Verify that the catalog reports the selected workspace as connected.",
  "category": "integrations",
  "articleSlug": "lightroom-connection-code-expired",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-lightroom-connect-catalog",
    "hc-lightroom-publish-gallery"
  ],
  "keywords": [
    "lightroom connection code expired",
    "Lightroom connection and publish troubleshooting",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Fix an expired Lightroom connection code** in Dosya. The main action is to cancel the old request, choose Connect again, and approve the newly displayed code before it expires; the decisive check is whether the catalog reports the selected workspace as connected.

<figure class="help-screenshot"><a href="/screenshots/lightroom-connection-code-expired-help-workflow-2026-10-14.webp"><img src="/screenshots/lightroom-connection-code-expired-help-workflow-2026-10-14.webp" alt="Four-step workflow map for fix an expired lightroom connection code, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for fix an expired lightroom connection code: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/lightroom-connection-code-expired-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Lightroom Classic and Integrations > Lightroom Classic in the current released client.
- Confirm the active account and workspace, then identify connection code shown in Plug-in Manager.

## Steps: fix an expired Lightroom connection code

1. Open Lightroom Classic and Integrations > Lightroom Classic and confirm the active account and workspace.
2. Locate connection code shown in Plug-in Manager and verify its name or identifying details.
3. Cancel the old request, choose Connect again, and approve the newly displayed code before it expires.
4. Confirm that the catalog reports the selected workspace as connected.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Dosya Lightroom Classic integration overview used to diagnose catalog connections and publishing." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Keep Lightroom open, preserve the exact error, and test with one photo before retrying a large publish. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The catalog reports the selected workspace as connected.

## Expected result

The controlled workflow completes and the catalog reports the selected workspace as connected.

## Troubleshooting

**The expected control is missing.** Return to Lightroom Classic and Integrations > Lightroom Classic, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect Lightroom](/integrations/lightroom-connect-catalog)
- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
