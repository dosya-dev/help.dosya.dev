---
{"articleId":"hc-activity-inspect-event-details","locale":"en","revision":1,"title":"Inspect activity event details","summary":"Inspect activity event details with a controlled test, clear verification, limits, and recovery steps.","category":"workspaces","articleSlug":"activity-inspect-event-details","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the inspect activity event details workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-workspace-activity","hc-workspace-roles"],"keywords":["activity inspect event details","Workspace activity log","Dosya help"]}
---
Inspect activity event details is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Activity log in the current released client.
- Confirm the active account and workspace, then identify activity row for the time and resource in question.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: inspect activity event details

1. Open Activity log and confirm the active account and workspace.
2. Locate activity row for the time and resource in question and verify its name or identifying details.
3. Expand the row and review outcome, source, device, resource, and available request details.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the event details provide enough context to identify the operation without exposing restricted fields.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/workspace-activity-log-2026-10-12.webp"><img src="/screenshots/workspace-activity-log-2026-10-12.webp" alt="Dosya workspace Activity log with category, member, and action filters." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>You need the workspace activity permission; use the time and resource name to distinguish similar events. <a href="/screenshots/workspace-activity-log-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the event details provide enough context to identify the operation without exposing restricted fields. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Activity log, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Read workspace activity](/workspaces/activity)
- [Understand workspace roles](/workspaces/roles)
