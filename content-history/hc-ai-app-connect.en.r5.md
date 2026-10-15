---
{
  "articleId": "hc-ai-app-connect",
  "locale": "en",
  "revision": 5,
  "title": "Connect an AI app to Dosya",
  "summary": "Review the app identity, choose a workspace and scopes, approve the connection, and verify a harmless read before sharing sensitive files.",
  "category": "integrations",
  "articleSlug": "ai-app-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-ai-app-permissions",
    "hc-ai-app-disconnect",
    "hc-suspicious-activity"
  ],
  "keywords": [
    "connect AI app",
    "ChatGPT connection",
    "Claude connection",
    "cloud storage"
  ]
}
---
AI app authorization grants selected access to a third-party client. Confirm the client, workspace and scopes on every approval.

An AI connection grants an external client access within the selected workspace and scopes. Start with the smallest useful permission set and harmless content.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/ai-app-connect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/ai-app-connect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" alt="Workflow for “Connect an AI app to Dosya”: choose the intended workspace; test with one non-confidential file and review the connection list." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Connect an AI app to Dosya”: choose the intended workspace; test with one non-confidential file and review the connection list. <a class="workflow-map-full" href="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/ai-app-connect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: connect an ai app to dosya

1. Open the supported AI app connection request.
2. Verify the client name and callback context.
3. Choose the intended workspace.
4. Review each requested scope.
5. Approve only the access needed.
6. Test with one non-confidential file and review the connection list.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Reference for “Connect an AI app to Dosya”: New API key dialog with Protocols, Workspace and expiration controls." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Reference for “Connect an AI app to Dosya”: New API key dialog with Protocols, Workspace and expiration controls. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** For “Connect an AI app to Dosya”, use a separate least-privilege credential for each client.

## Verify the result

Read one non-confidential item, then inspect Connected AI apps to confirm the client name, workspace and saved permissions match the authorization screen.

## Expected result

The connect an ai app to dosya workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Review AI app permissions](/integrations/ai-app-permissions)
- [Disconnect an AI app](/integrations/disconnect-ai-app)
- [Respond to suspicious activity](/account/suspicious-activity)
