---
{"articleId":"hc-api-key-revoke","locale":"en","revision":1,"title":"Revoke and replace an API key","summary":"Identify the exact client credential, revoke it, confirm requests fail, and issue a narrowly scoped replacement when the integration must continue.","category":"developers","articleSlug":"revoke-api-key","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed current API-key creation, restriction, display and revocation behavior against the local current web app, API implementation and tests on 2026-10-12. Examples contain no live secret.","related":["hc-api-key","hc-api-key-scopes","hc-suspicious-activity"],"keywords":["revoke API key","rotate key","replace credential","compromised token"]}
---
Revocation stops that credential without changing your Dosya sign-in password or unrelated keys. Replace it only after identifying the client that uses it.

## Before you start

- Use a disposable workspace and non-confidential test file.
- Choose the smallest permissions and surfaces the task requires.
- Prepare a password manager or secret store; never place a real key in a screenshot, URL or repository.
- Plan to revoke the test key after verification.

## Steps: revoke and replace an api key

1. Open Profile → API keys and match the key name, creation time and restrictions to the client.
2. Stop the client or job that currently uses it.
3. Select Revoke for the exact row and confirm.
4. Run a harmless request and confirm the old key is rejected.
5. Create a replacement with corrected least-privilege settings if needed.
6. Update the client secret store and test before deleting any temporary fallback.

<figure class="help-screenshot"><a href="/screenshots/api-key-listed-2026-10-10.webp"><img src="/screenshots/api-key-listed-2026-10-10.webp" alt="Dosya API-key list showing named credentials and their management controls for identifying the correct key to revoke." width="1160" height="750" loading="lazy" decoding="async" /></a><figcaption>Use descriptive names so a compromised or retired client can be revoked precisely. <a href="/screenshots/api-key-listed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The test key performs its allowed operation, rejects an operation outside its boundary, and can be identified and revoked without changing the account password.

## Limits and important details

- Revocation cannot erase data a client already downloaded.
- A cached client may continue retrying and produce errors until its configuration changes.
- Rotating one key does not invalidate separate keys or browser sessions.

## Troubleshooting

**The request returns unauthorized.** Check the complete secret, API endpoint and whether the key was revoked.

**The request returns forbidden.** Compare the operation with the key permission, protocol surface, workspace and folder anchor.

**A secret was exposed.** Revoke it immediately, create a replacement with least privilege and remove the exposed value from logs and history.

## Related guides

- [Create and manage an API key](/developers/api-key)
- [Choose key permission](/developers/api-key-scopes)
- [Respond to suspicious activity](/account/suspicious-activity)
