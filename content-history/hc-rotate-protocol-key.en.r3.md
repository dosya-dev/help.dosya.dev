---
{
  "articleId": "hc-rotate-protocol-key",
  "locale": "en",
  "revision": 3,
  "title": "Rotate a protocol credential safely",
  "summary": "Create a replacement key, test it, then revoke the old key, then verify that the client works with the new credential and the old one fails.",
  "category": "integrations",
  "articleSlug": "rotate-protocol-key",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current rotate a protocol credential safely workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-webdav-connect",
    "hc-api-key-protocols"
  ],
  "keywords": [
    "rotate protocol key",
    "protocol client workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to rotate a protocol credential safely in the intended account or workspace.

The main checks are the credential scope, endpoint and requested operation. Use a narrowly scoped test credential and keep secrets out of commands, logs and screenshots.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" data-light-href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/rotate-protocol-key-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" alt="Four-step interface map for rotate a protocol credential safely, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" data-light-href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/rotate-protocol-key-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open API key settings and a protocol client in the current released Dosya client.
- Confirm the active account and workspace, then identify one non-production client connection.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: rotate a protocol credential safely

1. Open API key settings and a protocol client and confirm the active workspace.
2. Select one non-production client connection and check its name or identifying details.
3. Create a replacement key, test it, then revoke the old key.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the client works with the new credential and the old one fails.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp"><img src="/screenshots/webdav-cyberduck-connection-2026-10-11.webp" alt="Cyberduck connection configured for the Dosya WebDAV endpoint." width="1040" height="750" loading="lazy" decoding="async" /></a><figcaption>Use a restricted test credential and keep its secret out of screenshots and logs. <a href="/screenshots/webdav-cyberduck-connection-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that the client works with the new credential and the old one fails. Refresh or reopen the view once to confirm the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The workflow completes for the controlled test and the client works with the new credential and the old one fails. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to API key settings and a protocol client, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Restrict protocol access](/developers/api-key-protocols)
