---
{
  "articleId": "hc-s3-connect",
  "locale": "en",
  "revision": 4,
  "title": "Connect an S3-compatible client",
  "summary": "Configure the current Dosya S3 endpoint, workspace addressing and restricted credential, then list and transfer one sample object.",
  "category": "integrations",
  "articleSlug": "s3-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-api-key-protocols",
    "hc-api-key-folder"
  ],
  "keywords": [
    "S3 client",
    "S3 endpoint",
    "S3 compatible",
    "cloud storage"
  ]
}
---
Dosya provides an S3-compatible gateway for supported object operations; compatibility does not imply every AWS service feature.

S3-compatible clients need the current Dosya endpoint, workspace addressing and an S3-enabled credential. Generic cloud-provider defaults can produce signature or path errors.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-connect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-connect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-connect-workflow-map-2026-10-14.webp" alt="Four-step interface map for connect an s3-compatible client, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/s3-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-connect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: connect an s3-compatible client

1. Open Integrations → S3.
2. Copy the current endpoint and workspace or bucket value.
3. Create an S3-enabled restricted key.
4. Configure a new profile in the client.
5. List the workspace and upload one sample.
6. Download and compare the sample, then revoke the test key.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

List the intended workspace, upload one harmless object, download it to a new path and compare its name and size before saving the profile for broader use.

## Expected result

The connect an s3-compatible client workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Limit protocol surfaces](/developers/api-key-protocols)
- [Restrict a key to a folder](/developers/api-key-folder-access)
