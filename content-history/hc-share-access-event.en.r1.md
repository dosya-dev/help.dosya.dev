---
{"articleId":"hc-share-access-event","locale":"en","revision":1,"title":"Inspect details for a share access event","summary":"Inspect details for a share access event. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"sharing","articleSlug":"share-access-event","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the inspect details for a share access event workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-create-link","hc-link-activity"],"keywords":["share access event","advanced sharing delivery","Dosya help"]}
---
Inspect details for a share access event is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Share analytics in the current released Dosya client.
- Confirm the active account and workspace, then identify one controlled recipient visit.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: inspect details for a share access event

1. Open Share analytics and confirm the active workspace.
2. Select one controlled recipient visit and check its name or identifying details.
3. Open the event and review time, action and device details.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the event corresponds to the controlled visit.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Dosya share activity overview showing recipient access and delivery events." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use a controlled recipient and non-confidential files when testing delivery settings. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the event corresponds to the controlled visit. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Share analytics, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Create a link](/sharing/create-link)
- [Read link activity](/sharing/link-activity)
