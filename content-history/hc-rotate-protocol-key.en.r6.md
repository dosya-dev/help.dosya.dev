---
{
  "articleId": "hc-rotate-protocol-key",
  "locale": "en",
  "revision": 6,
  "title": "Rotate a protocol credential safely",
  "summary": "Duplicate a protocol key’s restrictions, test the replacement secret on its intended surface, migrate every client, and revoke the old key safely.",
  "category": "integrations",
  "articleSlug": "rotate-protocol-key",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Rotate a protocol credential safely” against the released implementation on 2026-10-14: `apps/web/src/components/api-keys/api-keys-section.tsx`, `apps/web/src/components/api-keys/create-key-dialog.tsx`, `apps/web/src/lib/api-keys.ts`, `apps/api/src/pages/api/me/api-keys/[id].ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
  "related": [
    "hc-webdav-connect",
    "hc-api-key-protocols"
  ],
  "keywords": [
    "rotate protocol key",
    "protocol client workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya API keys cannot be edited. Rotation uses **Duplicate settings** to create a separate key, a controlled protocol test, client migration, and the irreversible **Revoke** action on the retired row.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" data-light-href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/rotate-protocol-key-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" alt="Four-step workflow map for Rotate a protocol credential safely: Duplicate the old key after reviewing restrictions, preserve required protocol boundaries. Copy the replacement secret before closing, store it in the client vault. Move every client to the new credential, retest a scope-matched read or write. Revoke the old key after migration proof, confirm the retired credential is refused." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows rotate a protocol credential safely from “Duplicate the old key after reviewing restrictions, preserve required protocol boundaries.” through “Copy the replacement secret before closing, store it in the client vault.” and “Move every client to the new credential, retest a scope-matched read or write.”, ending with “Revoke the old key after migration proof, confirm the retired credential is refused.”. <a class="workflow-map-full" href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" data-light-href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Inventory every client using the old key and identify whether it authenticates with the `dos_…` secret over REST, WebDAV, or SFTP, or with a separate S3 access-key pair. The new-key dialog can preserve scope, protocols, workspace or folder reach, IP ranges, and active hours; usage limits return blank and expiry returns to **Never expires**, so review those manually.

Each API-key secret is shown once. S3 additionally creates a 21-character `DOSYA…` access key ID and a 40-character secret that is also shown once.

## Steps

1. Open **Profile > API keys**, expand the old row, record its visible restrictions and **Last used** value, then choose **Duplicate settings**.
2. Give the replacement a distinct name, verify **What can it do?** and every item under **Restrictions and expiry**, and select **Generate key**.
3. Copy the one-time secret into the client’s protected credential store; for S3, choose **Enable** on the new row and save both values from **S3 credentials**.
4. Test a read or write permitted by the new key against the exact workspace, folder, protocol, address, and time window it is meant to use.
5. Update every scheduled job and interactive client, then repeat the test with only the replacement credential configured.
6. Open the old row, choose **Revoke**, read **Anything still using it stops working immediately. This can’t be undone.**, and confirm only after migration evidence is complete.

<figure class="help-screenshot"><a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp"><img src="/screenshots/webdav-cyberduck-connection-2026-10-11.webp" alt="Reference for “Rotate a protocol credential safely”: Cyberduck connection configured for the Dosya WebDAV endpoint." width="1040" height="750" loading="lazy" decoding="async" /></a><figcaption>Reference for “Rotate a protocol credential safely”: Cyberduck connection configured for the Dosya WebDAV endpoint. <a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The replacement authenticates within the same intended boundaries, every client has moved, and the old API key is deleted. Dosya invalidates both its API-key cache and any linked S3 credential cache immediately; a later request with the retired credential is refused.

If **Generate key** is refused, the account may have reached its cap: 20 keys generally and three under free-plan fair use. Revoke an unrelated stale key only after verifying it is unused.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Restrict protocol access](/developers/api-key-protocols)
