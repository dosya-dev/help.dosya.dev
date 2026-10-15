---
{
  "articleId": "hc-zapier-troubleshoot",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot a Zapier file automation",
  "summary": "Check the connected account, key restrictions, Zap history, field mapping and file availability when a Dosya step fails.",
  "category": "troubleshooting",
  "articleSlug": "zapier",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-zapier-connect",
    "hc-api-key-scopes",
    "hc-api-key-revoke"
  ],
  "keywords": [
    "Zapier failed",
    "Zap history",
    "Zapier authentication",
    "file upload"
  ]
}
---
Use Zap history and a single test record to isolate authentication, mapping and file-transfer problems.

Zap history identifies the failing step and input data. Account connection, key scope, folder restriction and mapped file content can each cause a different failure.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/zapier-workflow-map-2026-10-14.webp" data-light-href="/screenshots/zapier-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/zapier-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/zapier-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/zapier-workflow-map-2026-10-14.webp" alt="Workflow for “Troubleshoot a Zapier file automation”: compare key scope, protocol and folder restrictions with the action; turn the Zap back on only after the test succeeds." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Troubleshoot a Zapier file automation”: compare key scope, protocol and folder restrictions with the action; turn the Zap back on only after the test succeeds. <a class="workflow-map-full" href="/screenshots/zapier-workflow-map-2026-10-14.webp" data-light-href="/screenshots/zapier-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/zapier-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: troubleshoot a zapier file automation

1. Open the failed Zap run and note the Dosya step.
2. Confirm the connected account and active key.
3. Compare key scope, protocol and folder restrictions with the action.
4. Inspect required mapped fields and file content source.
5. Retest the step with one small item.
6. Turn the Zap back on only after the test succeeds.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Reference for “Troubleshoot a Zapier file automation”: Integrations &gt; Zapier setup page with API-key guidance and the Zapier invite button." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Reference for “Troubleshoot a Zapier file automation”: Integrations &gt; Zapier setup page with API-key guidance and the Zapier invite button. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** For “Troubleshoot a Zapier file automation”, copy connection values from the current integration page and keep secrets private.

## Verify the result

Retest only the Dosya step with one small item and confirm it creates one expected result before turning the Zap back on.

## Expected result

The troubleshoot a zapier file automation workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Connect Zapier](/integrations/zapier)
- [Choose key permission](/developers/api-key-scopes)
- [Revoke a key](/developers/revoke-api-key)
