---
{"articleId":"hc-zapier-inspect-failed-run","locale":"en","revision":1,"title":"Inspect a failed Zapier run","summary":"Inspect a failed Zapier run with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"zapier-inspect-failed-run","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the inspect a failed zapier run workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-zapier-connect","hc-zapier-troubleshoot"],"keywords":["zapier inspect failed run","Zapier workflow reliability details","Dosya help"]}
---
Inspect a failed Zapier run is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Zapier editor and task history for a Dosya Zap in the current released client.
- Confirm the active account and workspace, then identify failed Dosya step in Zap history.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: inspect a failed Zapier run

1. Open Zapier editor and task history for a Dosya Zap and confirm the active account and workspace.
2. Locate failed Dosya step in Zap history and verify its name or identifying details.
3. Open the task, record the step, time, status, and redacted response, then check permissions and input mapping.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the failure cause is tied to one request and safe diagnostic evidence.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/zapier-integration-overview-2026-10-13.webp"><img src="/screenshots/zapier-integration-overview-2026-10-13.webp" alt="Dosya Zapier integration overview for triggers, actions, and run history." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use one controlled Zap and inspect task history before replaying a failed step. <a href="/screenshots/zapier-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the failure cause is tied to one request and safe diagnostic evidence. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Zapier editor and task history for a Dosya Zap, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Connect Dosya to Zapier](/integrations/zapier)
- [Troubleshoot Zapier](/troubleshooting/zapier)
