---
{
  "articleId": "hc-api-key-expiry-rotation",
  "locale": "en",
  "revision": 5,
  "title": "Rotate an expiring API key",
  "summary": "Duplicate an expiring key’s available settings, restore omitted limits and expiry, validate the replacement, then revoke the old secret without downtime.",
  "category": "developers",
  "articleSlug": "api-key-expiry-rotation",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/web/src/components/api-keys/api-keys-section.tsx, apps/web/src/lib/api-keys.ts, apps/api/src/pages/api/me/api-keys/[id].ts, apps/api/src/lib/api-key-auth.ts, apps/api/src/lib/kv-cache.ts, apps/api/src/lib/kv-defer.ts, apps/api/src/lib/api-key-limits.ts, and apps/api/src/lib/api-key-limits.unit.test.ts. Production status: this replacement and revocation sequence has not yet been rerun live.",
  "related": [
    "hc-rest-api-connect",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "api key expiry rotation",
    "Developer operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Rotation requires an overlap: create and validate the replacement while the existing key still works, then revoke the old credential after every client has moved.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-key-expiry-rotation-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-key-expiry-rotation-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-key-expiry-rotation-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-key-expiry-rotation-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-key-expiry-rotation-help-workflow-2026-10-14.webp" alt="Four panels show duplicating settings, restoring limits and expiry, deploying the replacement secret, and allowing five minutes before verifying the revoked key fails." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show duplicating settings, restoring limits and expiry, deploying the replacement secret, and allowing five minutes before verifying the revoked key fails. <a class="workflow-map-full" href="/screenshots/api-key-expiry-rotation-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-key-expiry-rotation-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-key-expiry-rotation-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you rotate

Open **Profile → API keys** at `/profile/api` and expand the expiring key. The UI marks future dates as **Expires _date_** and highlights keys expiring within 30 days. Expired keys still count toward the free-plan cap of 3 and the absolute cap of 20.

Keys cannot be edited. **Duplicate settings** opens a replacement draft, but the expiry starts at **Never expires** and stored usage limits start blank because the list endpoint does not return them. S3 secret material is not copied.

## Steps

1. Inventory every client using the old key, including its protocol, workspace, folder reach, IP or active-hours guard, and any usage ceiling recorded outside Dosya.
2. Select **Duplicate settings**, change the name to identify the rotation, then review **Restrictions and expiry** instead of assuming every field was cloned.
3. Re-enter requests per minute, download per day, maximum file size, and concurrent-transfer limits; choose **Expires in 30 days**, **Expires in 90 days**, or **Never expires** deliberately.
4. Press **Generate key**, copy the `dos_…` secret from the one-time **is ready** dialog, and create new S3 credentials separately when the client uses that gateway.
5. Deploy the replacement to one client at a time and prove an actual allowed request plus its expected reach before removing the former secret.
6. Expand the old row, choose **Revoke**, read the irreversible warning, confirm, and verify the retired credential is refused while the replacement continues.

## Timing and recovery

Authentication checks expiry when loading a key, while the auth cache lives for 300 seconds. Treat the displayed deadline as the stop time and rotate early; do not depend on a warm cache extending access. Revocation irreversibly deletes the row and schedules deletion of REST and S3 cache entries. Stop the old client, allow up to five minutes for cached authentication, and verify refusal before treating the retired secret as unusable everywhere.

If a Free account has 3 keys, deleting an unused key or upgrading can create room. The absolute limit is 20 keys on every plan, so reaching 20 requires deleting a confirmed-unused credential; an upgrade cannot raise that ceiling. Do not revoke the active key merely to make room until a safe replacement path exists.

## Expected result

The integration operates with the newly generated secret and restored restrictions. The old key is absent from active use and returns an authentication failure after irrevocable revocation.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Rotate an expiring API key”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Rotate an expiring API key”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [Inspect webhook deliveries](/developers/webhook-deliveries)
