---
{
  "articleId": "hc-s3-permissions",
  "locale": "en",
  "revision": 4,
  "title": "Restrict S3 client permissions",
  "summary": "Combine API-key operation, protocol and folder restrictions for an S3 client and prove an outside request is denied.",
  "category": "developers",
  "articleSlug": "s3-permissions",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-s3-connect",
    "hc-api-key-scopes",
    "hc-api-key-folder"
  ],
  "keywords": [
    "S3 permissions",
    "S3 access denied",
    "S3 scoped key",
    "cloud storage"
  ]
}
---
S3 access follows the credential permission, S3 surface, workspace anchor, folder anchor and account role together.

S3 access should combine operation, protocol, workspace and folder restrictions. Testing a denied request proves the boundary as clearly as testing an allowed one.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-permissions-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-permissions-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-permissions-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-permissions-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-permissions-workflow-map-2026-10-14.webp" alt="Four-step interface map for restrict s3 client permissions, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/s3-permissions-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-permissions-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-permissions-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: restrict s3 client permissions

1. Create a credential limited to S3.
2. Choose read, upload or full operation permission.
3. Anchor it to the required workspace and folder.
4. Configure the client with that key.
5. Perform one allowed object operation.
6. Attempt one outside the anchor and confirm denial.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

List or transfer one object inside the anchor, then attempt a harmless request outside it and confirm the client receives an authorization failure.

## Expected result

The restrict s3 client permissions workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Connect S3](/integrations/s3-connect)
- [Choose key permission](/developers/api-key-scopes)
- [Restrict a folder](/developers/api-key-folder-access)
