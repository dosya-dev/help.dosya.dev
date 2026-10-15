---
{
  "articleId": "hc-s3-rotate-access-key-safely",
  "locale": "en",
  "revision": 5,
  "title": "Rotate an S3 access key without interruption",
  "summary": "Create and enable a separate S3-capable API key, save its one-time secret, migrate and test every client, then revoke the retired key safely.",
  "category": "integrations",
  "articleSlug": "s3-rotate-access-key-safely",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Rotate an S3 access key without interruption” against the released implementation on 2026-10-14: `apps/web/src/components/api-keys/api-keys-section.tsx`, `apps/api/src/pages/api/me/api-keys/s3-credentials.ts`, `apps/api/src/pages/api/me/api-keys/[id].ts`, `apps/web/src/lib/api-keys.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
  "related": [
    "hc-s3-connect",
    "hc-s3-troubleshoot"
  ],
  "keywords": [
    "s3 rotate access key safely",
    "S3-compatible connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
An S3 credential belongs to one Dosya API key and cannot be regenerated in place. The safe rotation sequence creates another API key, enables a new S3 pair, proves it, migrates clients, and only then revokes the old row.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-rotate-access-key-safely-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-rotate-access-key-safely-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-rotate-access-key-safely-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-rotate-access-key-safely-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-rotate-access-key-safely-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Rotate an S3 access key without interruption: Duplicate the old API key restrictions, preserve workspace folder scope and limits. Enable S3 on the replacement and generate it, save the access ID and one-time secret. Migrate every S3 client to the new key, prove a scoped request succeeds. Revoke the retired key after migration, require its access ID to be refused." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows rotate an s3 access key without interruption from “Duplicate the old API key restrictions, preserve workspace folder scope and limits.” through “Enable S3 on the replacement and generate it, save the access ID and one-time secret.” and “Migrate every S3 client to the new key, prove a scoped request succeeds.”, ending with “Revoke the retired key after migration, require its access ID to be refused.”. <a class="workflow-map-full" href="/screenshots/s3-rotate-access-key-safely-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-rotate-access-key-safely-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-rotate-access-key-safely-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Inventory every use of the old access key ID. Record the parent key’s scope, S3 surface, workspace or folder anchor, IP ranges, active hours, expiry, and any usage limits. **Duplicate settings** copies visible restrictions, but usage limits start blank and expiry resets to **Never expires**.

The new 40-character S3 secret is shown only once. Store it in the client’s secret manager rather than a command line, screenshot, or ticket.

## Steps

1. Open **Profile > API keys**, expand the old key, and choose **Duplicate settings**.
2. Give the new key a rotation-specific name, restore any required usage limit and expiry, keep **S3 gateway** enabled, and choose **Generate key**.
3. Expand the new row, select **Enable**, and save the new **Access key ID**, **Secret access key**, endpoint, and region from **S3 credentials**.
4. Configure one test client with the new pair and verify an operation allowed by its scope against the intended workspace or prefix.
5. Replace the old pair in every production client, restart or reload each client as needed, and confirm successful requests use the new key.
6. On the retired API-key row choose **Revoke** and confirm the irreversible dialog, then prove the old S3 ID now returns **InvalidAccessKeyId**.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Reference for “Rotate an S3 access key without interruption”: Dosya S3-compatible access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Rotate an S3 access key without interruption”: Dosya S3-compatible access overview page. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

New requests authenticate with the replacement pair, and deleting the old API key immediately invalidates both its normal API secret and linked S3 credential cache. There is no downtime when the overlap is kept until testing finishes.

If a new S3 pair cannot be enabled, verify that the replacement includes S3, has not expired, and is pinned to a workspace where the user’s role allows S3. **S3 credentials already exist for this API key. Delete and recreate to regenerate.** confirms that in-place secret rotation is unsupported.

## Related guides

- [Connect with S3-compatible tools](/integrations/s3-connect)
- [Troubleshoot S3 access](/troubleshooting/s3)
