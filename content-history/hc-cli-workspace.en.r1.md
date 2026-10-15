---
{"articleId":"hc-cli-workspace","locale":"en","revision":1,"title":"Select the correct CLI workspace","summary":"List available workspaces, select the intended destination, and confirm context before a CLI upload, copy or destructive command.","category":"developers","articleSlug":"cli-workspace","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current select the correct cli workspace workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-switch-workspaces","hc-cli-auth"],"keywords":["CLI workspace","select workspace","CLI context"]}
---
CLI commands act in a workspace context. Confirm it explicitly when accounts contain similarly named workspaces.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: select the correct cli workspace

1. Authenticate the CLI.
2. List workspaces with the documented command.
3. Select the intended workspace identifier.
4. Run a harmless list operation.
5. Compare a known folder with the web app.
6. Check context again before a write or delete command.

<figure class="help-screenshot"><a href="/screenshots/api-key-listed-2026-10-10.webp"><img src="/screenshots/api-key-listed-2026-10-10.webp" alt="Dosya API-key list showing named technical credentials that can be identified and revoked independently." width="1160" height="750" loading="lazy" decoding="async" /></a><figcaption>Name each credential for the client and task it serves. <a href="/screenshots/api-key-listed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The select the correct cli workspace workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Related guides

- [Switch web workspaces](/account/switch-workspaces)
- [Authenticate the CLI](/developers/cli-authenticate)
