---
{
  "articleId": "hc-s3-list-prefixes",
  "locale": "en",
  "revision": 5,
  "title": "List folders and prefixes over S3",
  "summary": "List a Dosya workspace by prefix and slash delimiter, follow every 1,000-key page, and distinguish file objects from folder common prefixes.",
  "category": "integrations",
  "articleSlug": "s3-list-prefixes",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “List folders and prefixes over S3” against the released implementation on 2026-10-14: `apps/api/src/lib/s3/operations/list-buckets.ts`, `apps/api/src/lib/s3/operations/list-objects.ts`, `apps/api/src/pages/s3/[...path].ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
  "related": [
    "hc-s3-connect",
    "hc-s3-permissions"
  ],
  "keywords": [
    "s3 list prefixes",
    "S3-compatible client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Dosya maps each workspace to an S3 bucket named by workspace ID. File and folder names become keys; a slash delimiter returns immediate files as objects and immediate folders as `CommonPrefixes`.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-list-prefixes-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-list-prefixes-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-list-prefixes-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-list-prefixes-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-list-prefixes-help-workflow-2026-10-14.webp" alt="Four-step workflow map for List folders and prefixes over S3: Use the exact workspace ID as the bucket, do not substitute its display name. List with slash delimiter and page limit, request no more than 1,000 keys. Narrow to a child prefix with exact case, keep its trailing slash. Follow continuation tokens page by page, stop when IsTruncated is false." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows list folders and prefixes over s3 from “Use the exact workspace ID as the bucket, do not substitute its display name.” through “List with slash delimiter and page limit, request no more than 1,000 keys.” and “Narrow to a child prefix with exact case, keep its trailing slash.”, ending with “Follow continuation tokens page by page, stop when IsTruncated is false.”. <a class="workflow-map-full" href="/screenshots/s3-list-prefixes-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-list-prefixes-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-list-prefixes-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Use a read-capable or full-access API key with S3 allowed. An upload-only key can list buckets for client handshake but object listing returns **AccessDenied: API key scope 'upload' cannot list files**. The member role must allow both S3 and file access.

A folder-anchored key starts at that folder as its logical root. Prefixes are relative to the anchor, so do not prepend the hidden parent path.

## Steps

1. List buckets and select the exact `wks_…` value for the workspace; never substitute its display name.
2. Request the root with `delimiter=/` and `max-keys` at or below `1000`.
3. Separate returned `Contents` entries from `CommonPrefixes`; a common prefix ends in `/` and represents a Dosya folder.
4. Choose one child prefix such as `photos/` and issue the next listing with that exact case and trailing slash.
5. When `IsTruncated` is true, pass `NextContinuationToken` to the following V2 request; V1 clients must continue with `NextMarker`.
6. Stop only after the final page reports no truncation, then compare the complete set with the permitted folder in Dosya.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Reference for “List folders and prefixes over S3”: Dosya S3-compatible access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “List folders and prefixes over S3”: Dosya S3-compatible access overview page. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The client traverses the accessible Dosya tree without skipping entries after the first 1,000 results. Exact-file prefixes return that file alone, partial name prefixes filter siblings, and a nonexistent prefix returns an empty result rather than broadening to the bucket root.

If the bucket appears but its contents do not, check API-key scope, the member role’s file permission, hidden-file rules, and any folder anchor. A pinned key lists only its pinned workspace.

## Related guides

- [Connect an S3 client](/integrations/s3-connect)
- [Restrict S3 permissions](/developers/s3-permissions)
