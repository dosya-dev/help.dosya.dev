---
{"articleId":"hc-api-key-scopes","locale":"en","revision":1,"title":"Choose read, upload or full API-key permission","summary":"Select the least powerful key permission, prove an allowed and denied operation, and avoid granting write or delete access unnecessarily.","category":"developers","articleSlug":"api-key-scopes","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed current API-key creation, restriction, display and revocation behavior against the local current web app, API implementation and tests on 2026-10-12. Examples contain no live secret.","related":["hc-api-key","hc-api-key-folder","hc-api-key-protocols"],"keywords":["API key scope","read key","upload key","full access","least privilege"]}
---
API-key permission defines the operation class the credential may perform. Start with read or upload when full management is unnecessary.

## Before you start

- Use a disposable workspace and non-confidential test file.
- Choose the smallest permissions and surfaces the task requires.
- Prepare a password manager or secret store; never place a real key in a screenshot, URL or repository.
- Plan to revoke the test key after verification.

## Steps: choose read, upload or full api-key permission

1. Open Profile → API keys and select Create API key.
2. Name the key for one client and purpose.
3. Choose Read for listing and downloading, Upload for ingest, or Full only when the workflow truly needs broader changes.
4. Create the key and save the one-time secret privately.
5. Run one intended request and one deliberately disallowed request.
6. Revoke the key when the test ends.

<figure class="help-screenshot"><a href="/screenshots/api-key-permission-2026-10-10.webp"><img src="/screenshots/api-key-permission-2026-10-10.webp" alt="Dosya API-key permission step with read, upload and full access choices for a least-privilege credential." width="582" height="666" loading="lazy" decoding="async" /></a><figcaption>Choose the narrowest permission and validate both sides of its boundary. <a href="/screenshots/api-key-permission-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The test key performs its allowed operation, rejects an operation outside its boundary, and can be identified and revoked without changing the account password.

## Limits and important details

- Permission combines with the account role, workspace policy and folder anchor.
- Full access should not be used merely to avoid diagnosing a denied request.
- The secret is shown once and cannot be recovered later.

## Troubleshooting

**The request returns unauthorized.** Check the complete secret, API endpoint and whether the key was revoked.

**The request returns forbidden.** Compare the operation with the key permission, protocol surface, workspace and folder anchor.

**A secret was exposed.** Revoke it immediately, create a replacement with least privilege and remove the exposed value from logs and history.

## Related guides

- [Create and manage an API key](/developers/api-key)
- [Restrict a key to a folder](/developers/api-key-folder-access)
- [Limit protocol surfaces](/developers/api-key-protocols)
