---
{"articleId":"hc-s3-list-prefixes","locale":"en","revision":1,"title":"List folders and prefixes over S3","summary":"List folders and prefixes over S3 with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"s3-list-prefixes","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the list folders and prefixes over s3 workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-s3-connect","hc-s3-permissions"],"keywords":["s3 list prefixes","S3-compatible client operations","Dosya help"]}
---
List folders and prefixes over S3 is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open an S3-compatible client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify permitted workspace path.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: list folders and prefixes over S3

1. Open an S3-compatible client connected to Dosya and confirm the active account and workspace.
2. Locate permitted workspace path and verify its name or identifying details.
3. List objects with a delimiter and then narrow to a child prefix.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the client represents Dosya folders and objects consistently.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Dosya S3-compatible access overview for object clients and scripts." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a restricted S3-surface key and configure the documented endpoint, region, and addressing mode. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the client represents Dosya folders and objects consistently. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to an S3-compatible client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Connect an S3 client](/integrations/s3-connect)
- [Restrict S3 permissions](/developers/s3-permissions)
