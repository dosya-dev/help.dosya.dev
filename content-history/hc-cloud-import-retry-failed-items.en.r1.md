---
{"articleId":"hc-cloud-import-retry-failed-items","locale":"en","revision":1,"title":"Retry only failed cloud-import items","summary":"Retry only failed cloud-import items with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"cloud-import-retry-failed-items","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the retry only failed cloud-import items workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-cloud-import-progress","hc-cloud-import-verify-folders"],"keywords":["cloud import retry failed items","Cloud-import result verification","Dosya help"]}
---
Retry only failed cloud-import items is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a completed or partially completed cloud import in the current released client.
- Confirm the active account and workspace, then identify import result with completed and failed entries.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: retry only failed cloud-import items

1. Open a completed or partially completed cloud import and confirm the active account and workspace.
2. Locate import result with completed and failed entries and verify its name or identifying details.
3. Inspect the failure reason, correct access or storage, and retry only the failed subset when supported.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that completed items stay single copies while failed items are retried.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/import-google-import-result-2026-10-11.webp"><img src="/screenshots/import-google-import-result-2026-10-11.webp" alt="Dosya cloud-import result showing completed items and their destination." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Compare the result with the provider source before disconnecting the account. <a href="/screenshots/import-google-import-result-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and completed items stay single copies while failed items are retried. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a completed or partially completed cloud import, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Monitor import progress](/integrations/import-progress)
- [Verify folder structure](/integrations/cloud-import-verify-folders)
