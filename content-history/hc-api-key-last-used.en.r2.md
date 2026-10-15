---
{
  "articleId": "hc-api-key-last-used",
  "locale": "en",
  "revision": 2,
  "title": "Review when a Dosya API key was last used",
  "summary": "Compare its name, creation time, last-used time, expiry, scope, and restrictions with the owning integration. Verify that unused or unexpected credentials are identified for rotation or revocation.",
  "category": "developers",
  "articleSlug": "api-key-last-used",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Review when a Dosya API key was last used” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-api-key",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api key last used",
    "API key operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Review when a Dosya API key was last used** in Dosya. The main action is to compare its name, creation time, last-used time, expiry, scope, and restrictions with the owning integration; the decisive check is whether unused or unexpected credentials are identified for rotation or revocation.

Keep the environment, endpoint, credential scope, resource identifier, response status, and request ID in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/api-key-last-used-help-workflow-2026-10-14.webp"><img src="/screenshots/api-key-last-used-help-workflow-2026-10-14.webp" alt="Four-step workflow map for review when a dosya api key was last used, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for review when a dosya api key was last used: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/api-key-last-used-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Profile > Integrations > API keys in the current released client.
- Confirm the active account and workspace, then identify existing key row in API key settings.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: review when a Dosya API key was last used

1. Open Profile > Integrations > API keys and confirm the active account and workspace.
2. Locate existing key row in API key settings and verify its name or identifying details.
3. Compare its name, creation time, last-used time, expiry, scope, and restrictions with the owning integration.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that unused or unexpected credentials are identified for rotation or revocation.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for creating and restricting integration credentials." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Create a separate narrowly scoped key for each integration and never paste it into screenshots. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Unused or unexpected credentials are identified for rotation or revocation. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Read the response body and retrieve the affected resource again instead of treating a successful request submission as final proof. If the result differs from what you expected, stop before repeating the action. Log the method, endpoint, status, request ID, and a redacted response; never record bearer tokens, secrets, or signed URLs.

## Expected result

The controlled workflow completes and unused or unexpected credentials are identified for rotation or revocation. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Practical checks

- Confirm you are working in the intended account and workspace before selecting the target.
- Re-read the exact target name, folder path, member, endpoint, or provider shown by the interface.
- Complete one controlled example first when the action can affect access, create copies, move data, or start a transfer.
- Verify the final state after a refresh; keep only nonsecret timestamps, statuses, and request identifiers for support.

## Troubleshooting

**The expected control is missing.** Return to Profile > Integrations > API keys, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Create an API key](/developers/api-key)
- [Choose key scopes](/developers/api-key-scopes)
