---
{"articleId":"hc-cloud-import-choose-provider-account","locale":"en","revision":1,"title":"Choose the correct cloud-provider account","summary":"Choose the correct cloud-provider account with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"cloud-import-choose-provider-account","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the choose the correct cloud-provider account workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-cloud-import-connect","hc-cloud-import-browse-provider"],"keywords":["cloud import choose provider account","Cloud-import provider controls","Dosya help"]}
---
Choose the correct cloud-provider account is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Integrations > Cloud import in the current released client.
- Confirm the active account and workspace, then identify provider authorization page with the signed-in identity.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: choose the correct cloud-provider account

1. Open Integrations > Cloud import and confirm the active account and workspace.
2. Locate provider authorization page with the signed-in identity and verify its name or identifying details.
3. Compare the provider email or organization, switch if needed, and authorize only the intended account.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the connected source belongs to the expected provider account.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/import-google-picker-selected-2026-10-11.webp"><img src="/screenshots/import-google-picker-selected-2026-10-11.webp" alt="Cloud provider picker with reviewed files and folders selected for import." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a disposable provider folder first and grant only the access requested by the picker. <a href="/screenshots/import-google-picker-selected-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the connected source belongs to the expected provider account. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Integrations > Cloud import, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Browse provider files](/integrations/cloud-import-browse-provider)
