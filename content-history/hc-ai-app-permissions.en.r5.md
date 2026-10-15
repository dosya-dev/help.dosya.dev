---
{
  "articleId": "hc-ai-app-permissions",
  "locale": "en",
  "revision": 5,
  "title": "Review AI app permissions",
  "summary": "Understand requested file and account scopes, select the correct workspace, and reject a connection that asks for unnecessary access.",
  "category": "integrations",
  "articleSlug": "ai-app-permissions",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-ai-app-connect",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "AI app scopes",
    "files read scope",
    "account access",
    "cloud storage"
  ]
}
---
Scopes describe what the connected AI app can read or do. Workspace choice limits which data set those scopes apply to.

The authorization screen defines what the AI application can access now. Approve only the scopes and workspace needed for the stated task.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/ai-app-permissions-workflow-map-2026-10-14.webp" data-light-href="/screenshots/ai-app-permissions-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/ai-app-permissions-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/ai-app-permissions-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/ai-app-permissions-workflow-map-2026-10-14.webp" alt="Workflow for “Review AI app permissions”: read every requested scope; after approval, test and review the saved connection." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Review AI app permissions”: read every requested scope; after approval, test and review the saved connection. <a class="workflow-map-full" href="/screenshots/ai-app-permissions-workflow-map-2026-10-14.webp" data-light-href="/screenshots/ai-app-permissions-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/ai-app-permissions-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: review ai app permissions

1. Open the authorization screen.
2. Verify the application name.
3. Read every requested scope.
4. Choose the smallest suitable workspace.
5. Reject or cancel when access is broader than the task.
6. After approval, test and review the saved connection.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Reference for “Review AI app permissions”: New API key dialog with Protocols, Workspace and expiration controls." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Reference for “Review AI app permissions”: New API key dialog with Protocols, Workspace and expiration controls. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** For “Review AI app permissions”, use a separate least-privilege credential for each client.

## Verify the result

Use a non-confidential file for the first request, then review Connected AI apps and confirm the saved client, workspace and permission set.

## Expected result

The review ai app permissions workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Connect an AI app](/integrations/ai-app-connect)
- [Understand least privilege](/developers/api-key-scopes)
