---
{"articleId":"hc-share-recipient-verification","locale":"en","revision":1,"title":"Use a recipient verification code","summary":"Use a recipient verification code. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"sharing","articleSlug":"share-recipient-verification","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the use a recipient verification code workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-create-link","hc-link-activity"],"keywords":["share recipient verification","advanced sharing delivery","Dosya help"]}
---
Use a recipient verification code is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open the recipient share page in the current released Dosya client.
- Confirm the active account and workspace, then identify a named-recipient test link.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: use a recipient verification code

1. Open the recipient share page and confirm the active workspace.
2. Select a named-recipient test link and check its name or identifying details.
3. Request and enter the current verification code.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the share opens only for the intended recipient.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Dosya share activity overview showing recipient access and delivery events." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use a controlled recipient and non-confidential files when testing delivery settings. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the share opens only for the intended recipient. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the recipient share page, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Create a link](/sharing/create-link)
- [Read link activity](/sharing/link-activity)
