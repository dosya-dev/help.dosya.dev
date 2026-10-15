---
{
  "articleId": "hc-webhook-delete-endpoint",
  "locale": "en",
  "revision": 2,
  "title": "Delete an unused webhook endpoint",
  "summary": "Record any needed delivery evidence, choose Delete, and confirm, then Confirm that the endpoint stops receiving future events.",
  "category": "developers",
  "articleSlug": "webhook-delete-endpoint",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current delete an unused webhook endpoint workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-webhook-create",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook delete endpoint",
    "Webhook endpoint management",
    "Dosya help",
    "cloud storage"
  ]
}
---
Delete an unused webhook endpoint is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide covers how to delete an unused webhook endpoint and verify the resulting state.

The main checks are the credential scope, endpoint and requested operation. Use a narrowly scoped test credential and keep secrets out of commands, logs and screenshots.

<figure class="help-screenshot"><a href="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14.webp"><img src="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14.webp" alt="Four-step interface map for delete an unused webhook endpoint, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Integrations > Webhooks in the current released client.
- Confirm the active account and workspace, then identify endpoint confirmed unused by any integration.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: delete an unused webhook endpoint

1. Open Integrations > Webhooks and confirm the active account and workspace.
2. Locate endpoint confirmed unused by any integration and verify its name or identifying details.
3. Record any needed delivery evidence, choose Delete, and confirm.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the endpoint stops receiving future events.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for managing webhook endpoints and delivery health." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a test endpoint that logs delivery identifiers without logging secrets or private payload data. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm that the endpoint stops receiving future events. Refresh or reopen the relevant view once to verify the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The controlled workflow completes and the endpoint stops receiving future events. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Integrations > Webhooks, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Inspect deliveries](/developers/webhook-deliveries)
