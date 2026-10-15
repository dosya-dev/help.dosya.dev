---
{"articleId":"hc-webhook-payload-versioning","locale":"en","revision":1,"title":"Handle webhook payload versions","summary":"Handle webhook payload versions with a controlled test, clear verification, limits, and recovery steps.","category":"developers","articleSlug":"webhook-payload-versioning","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the handle webhook payload versions workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-rest-api-connect","hc-webhook-deliveries"],"keywords":["webhook payload versioning","Developer operations","Dosya help"]}
---
Handle webhook payload versions is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Dosya developer and integration settings in the current released client.
- Confirm the active account and workspace, then identify webhook consumer and recorded non-secret test payload.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: handle webhook payload versions

1. Open Dosya developer and integration settings and confirm the active account and workspace.
2. Locate webhook consumer and recorded non-secret test payload and verify its name or identifying details.
3. Validate required fields, tolerate documented additive fields, and route unknown versions to safe review.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that supported payloads process while incompatible changes fail visibly.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for credentials, usage, and webhook operations." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use non-production credentials and log request identifiers without logging secrets. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and supported payloads process while incompatible changes fail visibly. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Dosya developer and integration settings, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [Inspect webhook deliveries](/developers/webhook-deliveries)
