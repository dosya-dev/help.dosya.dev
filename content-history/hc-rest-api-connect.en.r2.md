---
{
  "articleId": "hc-rest-api-connect",
  "locale": "en",
  "revision": 2,
  "title": "Connect a small integration to the REST API",
  "summary": "Create a test credential, read the official endpoint and current API reference, send a harmless request, and handle authentication or quota errors safely.",
  "category": "developers",
  "articleSlug": "rest-api-quickstart",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current connect a small integration to the rest api workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-api-key",
    "hc-api-key-scopes",
    "hc-api-key-revoke"
  ],
  "keywords": [
    "REST API",
    "API quickstart",
    "Bearer token",
    "API integration",
    "HTTP request",
    "cloud storage"
  ]
}
---
Build the first REST API test with a disposable workspace and an environment-held key. Copy endpoint paths and request fields from the current reference rather than guessing them.

A small integration should begin with a narrow test key, an HTTPS request from the current API reference and a harmless read. Keep secrets out of source and shell history.

<figure class="help-screenshot"><a href="/screenshots/rest-api-quickstart-workflow-map-2026-10-14.webp"><img src="/screenshots/rest-api-quickstart-workflow-map-2026-10-14.webp" alt="Four-step interface map for connect a small integration to the rest api, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/rest-api-quickstart-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use a disposable workspace and non-confidential test file.
- Choose the smallest permissions and surfaces the task requires.
- Prepare a password manager or secret store; never place a real key in a screenshot, URL or repository.
- Plan to revoke the test key after verification.

## Steps: connect a small integration to the rest api

1. Open Integrations → REST API and the current API reference.
2. Create a narrowly scoped key for the test workspace.
3. Store the secret in an environment variable or secret manager.
4. Send a documented harmless listing request over HTTPS.
5. Check the structured response and request identifier when present.
6. Test one known denied operation, then revoke the disposable key.

<figure class="help-screenshot"><a href="/screenshots/api-key-listed-2026-10-10.webp"><img src="/screenshots/api-key-listed-2026-10-10.webp" alt="Dosya API-key list used to manage a dedicated credential for a small REST API integration." width="1160" height="750" loading="lazy" decoding="async" /></a><figcaption>Give each integration its own named key and revoke it after a disposable test. <a href="/screenshots/api-key-listed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm the response structure and workspace data, then test a known denied operation. Record any request identifier without logging the authorization header.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The test key performs its allowed operation, rejects an operation outside its boundary, and can be identified and revoked without changing the account password.

## Limits and important details

- Use only endpoints and fields in the current reference.
- Keep secrets out of query strings, source control and logs.
- Handle rate, quota and network errors explicitly; do not retry every response indefinitely.

## Troubleshooting

**The request returns unauthorized.** Check the complete secret, API endpoint and whether the key was revoked.

**The request returns forbidden.** Compare the operation with the key permission, protocol surface, workspace and folder anchor.

**A secret was exposed.** Revoke it immediately, create a replacement with least privilege and remove the exposed value from logs and history.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Create an API key](/developers/api-key)
- [Choose key permission](/developers/api-key-scopes)
- [Revoke a key](/developers/revoke-api-key)
