---
{
  "articleId": "hc-api-key-folder",
  "locale": "en",
  "revision": 5,
  "title": "Restrict an API key to a workspace folder",
  "summary": "Anchor an API key to one workspace and folder, verify access inside the subtree, and confirm files outside it remain unavailable.",
  "category": "developers",
  "articleSlug": "api-key-folder-access",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-api-key",
    "hc-api-key-scopes",
    "hc-workspace-folder-access"
  ],
  "keywords": [
    "folder-scoped API key",
    "workspace key",
    "folder anchor",
    "restricted credential",
    "cloud storage"
  ]
}
---
A workspace and folder anchor limits where a credential can reach. Use it for applications that should see only one project tree.

A folder anchor covers the selected subtree inside one workspace. It should prevent the same key from reaching siblings or another workspace.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-key-folder-access-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-key-folder-access-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-key-folder-access-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-key-folder-access-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-key-folder-access-workflow-map-2026-10-14.webp" alt="Workflow for “Restrict an API key to a workspace folder”: choose the required operation permission and protocol surfaces; attempt access outside the subtree and confirm it is denied." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Restrict an API key to a workspace folder”: choose the required operation permission and protocol surfaces; attempt access outside the subtree and confirm it is denied. <a class="workflow-map-full" href="/screenshots/api-key-folder-access-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-key-folder-access-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-key-folder-access-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Use a disposable workspace and non-confidential test file.
- Choose the smallest permissions and surfaces the task requires.
- Prepare a password manager or secret store; never place a real key in a screenshot, URL or repository.
- Plan to revoke the test key after verification.

## Steps: restrict an api key to a workspace folder

1. Create a key and choose the intended workspace under Where can it reach.
2. Select the folder anchor and verify its displayed path.
3. Choose the required operation permission and protocol surfaces.
4. Save the one-time secret.
5. List or upload inside the anchored folder.
6. Attempt access outside the subtree and confirm it is denied.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya API-key restriction controls for workspace, folder and protocol boundaries." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Combine the folder anchor with an appropriate operation permission. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Perform one allowed operation inside the subtree, then request an outside path and confirm denial. Revoke the test key after verification.

## Expected result

The test key performs its allowed operation, rejects an operation outside its boundary, and can be identified and revoked without changing the account password.

## Limits and important details

- Moving or deleting the anchor can affect the integration.
- The anchor does not grant access that the owning account lacks.
- A folder anchor is separate from a human member folder restriction.

## Troubleshooting

**The request returns unauthorized.** Check the complete secret, API endpoint and whether the key was revoked.

**The request returns forbidden.** Compare the operation with the key permission, protocol surface, workspace and folder anchor.

**A secret was exposed.** Revoke it immediately, create a replacement with least privilege and remove the exposed value from logs and history.

## Related guides

- [Create and manage an API key](/developers/api-key)
- [Choose key permission](/developers/api-key-scopes)
- [Restrict a member to a folder](/workspaces/folder-access)
