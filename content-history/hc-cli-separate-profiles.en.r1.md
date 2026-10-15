---
{"articleId":"hc-cli-separate-profiles","locale":"en","revision":1,"title":"Separate Dosya CLI profiles","summary":"Separate Dosya CLI profiles with a controlled test, clear verification, limits, and recovery steps.","category":"developers","articleSlug":"cli-separate-profiles","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the separate dosya cli profiles workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-cli-auth","hc-cli-json-output"],"keywords":["cli separate profiles","Dosya CLI automation details","Dosya help"]}
---
Separate Dosya CLI profiles is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a terminal running the Dosya CLI in the current released client.
- Confirm the active account and workspace, then identify two accounts or automation environments.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: separate Dosya CLI profiles

1. Open a terminal running the Dosya CLI and confirm the active account and workspace.
2. Locate two accounts or automation environments and verify its name or identifying details.
3. Create distinct named profiles or isolated configuration paths, authenticate each deliberately, and print nonsecret account context.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that each command targets the selected account and workspace without credential overlap.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview for authentication, structured output, and transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use restricted profiles, structured output, and exit codes so scripts can fail safely. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and each command targets the selected account and workspace without credential overlap. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a terminal running the Dosya CLI, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Authenticate the Dosya CLI](/developers/cli-authenticate)
- [Use CLI JSON output](/developers/cli-json-output)
