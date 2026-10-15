---
{
  "articleId": "hc-cli-handle-exit-codes",
  "locale": "en",
  "revision": 2,
  "title": "Handle Dosya CLI exit codes",
  "summary": "Capture the exit code immediately, branch on success or failure, and preserve redacted standard error for diagnosis. Verify that the script stops or retries according to the actual command result.",
  "category": "developers",
  "articleSlug": "cli-handle-exit-codes",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Handle Dosya CLI exit codes” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-cli-auth",
    "hc-cli-json-output"
  ],
  "keywords": [
    "cli handle exit codes",
    "Dosya CLI automation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Handle Dosya CLI exit codes** in Dosya. The main action is to capture the exit code immediately, branch on success or failure, and preserve redacted standard error for diagnosis; the decisive check is whether the script stops or retries according to the actual command result.

Keep the environment, endpoint, credential scope, resource identifier, response status, and request ID in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/cli-handle-exit-codes-help-workflow-2026-10-14.webp"><img src="/screenshots/cli-handle-exit-codes-help-workflow-2026-10-14.webp" alt="Four-step workflow map for handle dosya cli exit codes, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for handle dosya cli exit codes: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/cli-handle-exit-codes-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a terminal running the Dosya CLI in the current released client.
- Confirm the active account and workspace, then identify scripted CLI command with success and controlled failure cases.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: handle Dosya CLI exit codes

1. Open a terminal running the Dosya CLI and confirm the active account and workspace.
2. Locate scripted CLI command with success and controlled failure cases and verify its name or identifying details.
3. Capture the exit code immediately, branch on success or failure, and preserve redacted standard error for diagnosis.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the script stops or retries according to the actual command result.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview for authentication, structured output, and transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use restricted profiles, structured output, and exit codes so scripts can fail safely. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The script stops or retries according to the actual command result. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Read the response body and retrieve the affected resource again instead of treating a successful request submission as final proof. If the result differs from what you expected, stop before repeating the action. Log the method, endpoint, status, request ID, and a redacted response; never record bearer tokens, secrets, or signed URLs.

## Expected result

The controlled workflow completes and the script stops or retries according to the actual command result. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Practical checks

- Confirm you are working in the intended account and workspace before selecting the target.
- Re-read the exact target name, folder path, member, endpoint, or provider shown by the interface.
- Complete one controlled example first when the action can affect access, create copies, move data, or start a transfer.
- Verify the final state after a refresh; keep only nonsecret timestamps, statuses, and request identifiers for support.

## Troubleshooting

**The expected control is missing.** Return to a terminal running the Dosya CLI, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Authenticate the Dosya CLI](/developers/cli-authenticate)
- [Use CLI JSON output](/developers/cli-json-output)
