---
{"articleId":"hc-share-email-message","locale":"en","revision":1,"title":"Email a share link with a message","summary":"Email a share link with a message. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"sharing","articleSlug":"share-email-message","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the email a share link with a message workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-create-link","hc-link-activity"],"keywords":["share email message","advanced sharing delivery","Dosya help"]}
---
Email a share link with a message is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Share → Email in the current released Dosya client.
- Confirm the active account and workspace, then identify one test recipient.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: email a share link with a message

1. Open Share → Email and confirm the active workspace.
2. Select one test recipient and check its name or identifying details.
3. Add a short non-sensitive message and send the link.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the recipient activity records the delivery attempt.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Dosya share activity overview showing recipient access and delivery events." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use a controlled recipient and non-confidential files when testing delivery settings. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the recipient activity records the delivery attempt. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Share → Email, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Create a link](/sharing/create-link)
- [Read link activity](/sharing/link-activity)
