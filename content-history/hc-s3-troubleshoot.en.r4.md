---
{
  "articleId": "hc-s3-troubleshoot",
  "locale": "en",
  "revision": 4,
  "title": "Troubleshoot S3 signatures and access",
  "summary": "Check endpoint, workspace addressing, clock, credential surface and permission when an S3-compatible request fails.",
  "category": "troubleshooting",
  "articleSlug": "s3",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-s3-connect",
    "hc-s3-permissions"
  ],
  "keywords": [
    "S3 signature error",
    "S3 forbidden",
    "S3 troubleshooting",
    "cloud storage"
  ]
}
---
Separate signature and endpoint problems from an authorization boundary by testing one current client profile and a harmless list request.

Signature errors commonly reflect endpoint, addressing, clock or signing differences; authorization errors point to credential scope or policy. Read the exact HTTP response first.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-workflow-map-2026-10-14.webp" alt="Four-step interface map for troubleshoot s3 signatures and access, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/s3-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: troubleshoot s3 signatures and access

1. Read the exact client and HTTP error.
2. Copy the endpoint and workspace value again.
3. Confirm system clock and HTTPS use.
4. Check that the key permits S3 and the requested operation.
5. Test a root or anchored-folder listing.
6. Capture redacted request metadata for support.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Use a harmless root or anchored-folder listing to verify the corrected profile before retrying an upload or delete.

## Expected result

The troubleshoot s3 signatures and access workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Connect S3](/integrations/s3-connect)
- [Restrict S3 permissions](/developers/s3-permissions)
