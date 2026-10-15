---
{
  "articleId": "hc-cli-json-output",
  "locale": "en",
  "revision": 2,
  "title": "Use JSON output from the Dosya CLI",
  "summary": "Enable JSON output and pipe it to a parser in a controlled test. Verify that the command returns machine-readable data and a useful exit status.",
  "category": "developers",
  "articleSlug": "cli-json-output",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Use JSON output from the Dosya CLI” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-cli-install",
    "hc-cli-transfer"
  ],
  "keywords": [
    "cli json output",
    "Advanced Dosya CLI workflows",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Use JSON output from the Dosya CLI** in Dosya. The main action is to enable JSON output and pipe it to a parser in a controlled test; the decisive check is whether the command returns machine-readable data and a useful exit status.

Keep the environment, endpoint, credential scope, resource identifier, response status, and request ID in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/cli-json-output-help-workflow-2026-10-14.webp"><img src="/screenshots/cli-json-output-help-workflow-2026-10-14.webp" alt="Four-step workflow map for use json output from the dosya cli, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for use json output from the dosya cli: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/cli-json-output-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya CLI in the current released client.
- Confirm the active account and workspace, then identify read-only list or status command.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: use JSON output from the Dosya CLI

1. Open the Dosya CLI and confirm the active account and workspace.
2. Locate read-only list or status command and verify its name or identifying details.
3. Enable JSON output and pipe it to a parser in a controlled test.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the command returns machine-readable data and a useful exit status.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview for terminal-based file operations and automation." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a test profile and avoid exposing credentials through command history or verbose logs. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The command returns machine-readable data and a useful exit status. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Read the response body and retrieve the affected resource again instead of treating a successful request submission as final proof. If the result differs from what you expected, stop before repeating the action. Log the method, endpoint, status, request ID, and a redacted response; never record bearer tokens, secrets, or signed URLs.

## Expected result

The controlled workflow completes and the command returns machine-readable data and a useful exit status. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to the Dosya CLI, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Install the CLI](/developers/cli-install)
- [Transfer with the CLI](/developers/cli-transfer)
