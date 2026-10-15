---
{
  "articleId": "hc-s3-resolve-prefix-denied",
  "locale": "en",
  "revision": 5,
  "title": "Resolve denied access to an S3 prefix",
  "summary": "Match the bucket and relative prefix to the API key’s workspace or folder anchor, role permissions, and read scope before safely widening access.",
  "category": "integrations",
  "articleSlug": "s3-resolve-prefix-denied",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Resolve denied access to an S3 prefix” against the released implementation on 2026-10-14: `apps/web/src/components/api-keys/create-key-dialog.tsx`, `apps/api/src/pages/s3/[...path].ts`, `apps/api/src/lib/s3/operations/list-objects.ts`, `apps/api/src/lib/s3/operations/put-object.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
  "related": [
    "hc-s3-connect",
    "hc-s3-troubleshoot"
  ],
  "keywords": [
    "s3 resolve prefix denied",
    "S3-compatible connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
S3 reach is the intersection of the API key’s surface, scope, workspace and folder anchor; the user’s membership role; IP and active-hour conditions; and usage limits. Existing keys cannot be edited to widen that intersection.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-resolve-prefix-denied-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-resolve-prefix-denied-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-resolve-prefix-denied-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-resolve-prefix-denied-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-resolve-prefix-denied-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Resolve denied access to an S3 prefix: Match the bucket to the key’s pinned workspace, use its exact wks_… workspace ID. Resolve the requested key under its folder anchor, keep the key relative to the anchor. Use read or full key scope for listing, the member role must also permit read. Duplicate settings only for wider access, never broaden the old key in place." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows resolve denied access to an s3 prefix from “Match the bucket to the key’s pinned workspace, use its exact wks_… workspace ID.” through “Resolve the requested key under its folder anchor, keep the key relative to the anchor.” and “Use read or full key scope for listing, the member role must also permit read.”, ending with “Duplicate settings only for wider access, never broaden the old key in place.”. <a class="workflow-map-full" href="/screenshots/s3-resolve-prefix-denied-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-resolve-prefix-denied-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-resolve-prefix-denied-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Expand the key under **Profile > API keys** and read its **Protocols**, **Workspace**, and optional **Folder** values. A folder anchor is presented as the S3 root, so object keys are relative to it.

Common refusals include **This API key is pinned to a different workspace**, **This API key’s anchor folder is no longer available**, **This role cannot list files**, and **API key scope 'upload' cannot list files**.

## Steps

1. Compare the configured bucket with the key’s pinned workspace ID and correct the client if it names another workspace or a display name.
2. Remove the anchor’s parent path from the requested prefix; for a key anchored at `Projects`, request `2026/report.pdf`, not `Projects/2026/report.pdf`.
3. Verify that the anchor folder still exists and is not trashed, and that the current member confinement still contains the credential anchor.
4. Match the operation to the key scope: use read or full access for listing, and upload or full access for new objects.
5. Check the member role for S3 access, file access when listing, upload permission when writing, and folder-creation permission for missing prefix segments.
6. If broader reach is truly required, use **Duplicate settings**, choose the minimum new workspace or folder boundary, generate and enable S3 credentials, then retest before revoking the old key.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Reference for “Resolve denied access to an S3 prefix”: Dosya S3-compatible access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Resolve denied access to an S3 prefix”: Dosya S3-compatible access overview page. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The client operates inside the approved workspace subtree without gaining access above it. A replacement key is required for a different anchor because Dosya keys have create-and-revoke semantics rather than editable reach.

When only writes are required, an upload-only key can be correct even though listing remains denied. Verify the created object from the Dosya web app or another read-authorized identity instead of broadening that upload credential solely for confirmation.

## Related guides

- [Connect with S3-compatible tools](/integrations/s3-connect)
- [Troubleshoot S3 access](/troubleshooting/s3)
