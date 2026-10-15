---
{
  "articleId": "hc-workspace-policy-file-requests",
  "locale": "en",
  "revision": 5,
  "title": "Review file-request controls under workspace policy",
  "summary": "Control file-request exposure through role permissions and per-request limits, then verify guest uploads obey the folder, count, size, type and expiry.",
  "category": "workspaces",
  "articleSlug": "workspace-policy-file-requests",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/file-requests.tsx, apps/api/src/pages/api/file-requests/create.ts, apps/api/src/pages/api/file-requests/index.ts, and packages/test-harness/tests/file-requests.int.test.ts. No production request was created.",
  "related": [
    "hc-workspace-policies",
    "hc-workspace-roles"
  ],
  "keywords": [
    "workspace policy file requests",
    "Workspace policy enforcement",
    "Dosya help",
    "team cloud storage"
  ]
}
---
Dosya has no workspace-wide “disable file requests” switch. Control this public upload channel through role permissions, destination scope, and limits saved on each request.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-policy-file-requests-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-policy-file-requests-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-policy-file-requests-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-policy-file-requests-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-policy-file-requests-help-workflow-2026-10-14.webp" alt="Four-step file-request policy map showing role gates, a scoped safe destination, per-request safeguards, and allowed upload verification followed by revocation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Apply least privilege and explicit limits; negative or non-integer file counts are refused before the disposable public URL is tested. <a class="workflow-map-full" href="/screenshots/workspace-policy-file-requests-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-policy-file-requests-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-policy-file-requests-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Creating a request requires **Upload files** because its URL delegates upload rights to unauthenticated guests.
- Listing requests uses **View own shared links** or **View all shared links**; folder confinement also filters visible destinations.
- Use a disposable destination outside Vault and any full-lock folder.

## Steps

1. Open the custom role editor and decide which roles may hold **Upload files** and inspect their own or all shared records.
2. Save the least-privilege role, then reload a test member assigned to it.
3. Open **File requests** and create a disposable request aimed at a live folder inside that member’s scope.
4. Set a clear title plus needed expiry, maximum files, maximum file size, extension allowlist, password, and recipient addresses.
5. Open the returned guest URL in a private session and upload one allowed sample plus one sample designed to exceed a chosen limit.
6. Verify only the allowed upload appears in the destination, then revoke the request so its public URL stops accepting files.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Reference for “Review file-request controls under workspace policy”: Dosya workspace policy controls for sharing, security, and member actions." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Review file-request controls under workspace policy”: Dosya workspace policy controls for sharing, security, and member actions. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Enforced boundaries

A password must contain at least eight characters. Negative expiry or size values and negative or non-integer file counts are refused. Up to 100 valid recipient addresses are processed, and reserved service addresses are rejected rather than silently skipped.

A request cannot point at a missing, foreign, hidden, Vault, or full-lock destination. A folder-confined creator is anchored to their subtree. Guest uploads also face workspace extension, file-size, storage, concurrency, and lock gates.

## Expected result

The authorized member can create and view only the intended request records, the guest’s valid file lands in the chosen subtree, the invalid sample is refused, and revocation closes the URL.

## Troubleshooting

**You don’t have upload permission in this workspace.** Add **Upload files** only if the role should delegate guest uploads.

**Destination folder not found** or **folder_locked.** Choose a visible, live destination outside Vault and full locks.

**The member sees an empty request list.** They hold neither **View own shared links** nor **View all shared links**, or their folder scope excludes those destinations.

## Related guides

- [Set workspace policies](/workspaces/policies)
- [Choose roles](/workspaces/roles)
