---
{"articleId":"hc-cli-download-folder","locale":"en","revision":1,"title":"Download a folder with the Dosya CLI","summary":"Download a folder with the Dosya CLI with a controlled test, clear verification, limits, and recovery steps.","category":"developers","articleSlug":"cli-download-folder","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the download a folder with the dosya cli workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-cli-install","hc-cli-transfer"],"keywords":["cli download folder","Advanced Dosya CLI workflows","Dosya help"]}
---
Download a folder with the Dosya CLI is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya CLI in the current released client.
- Confirm the active account and workspace, then identify small remote folder and empty local destination.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: download a folder with the Dosya CLI

1. Open the Dosya CLI and confirm the active account and workspace.
2. Locate small remote folder and empty local destination and verify its name or identifying details.
3. Run the recursive download and compare file names and sizes.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the local tree matches the remote selection.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview for terminal-based file operations and automation." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a test profile and avoid exposing credentials through command history or verbose logs. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the local tree matches the remote selection. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya CLI, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Install the CLI](/developers/cli-install)
- [Transfer with the CLI](/developers/cli-transfer)
