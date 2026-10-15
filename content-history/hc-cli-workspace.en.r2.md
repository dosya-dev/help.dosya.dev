---
{
  "articleId": "hc-cli-workspace",
  "locale": "en",
  "revision": 2,
  "title": "Select the correct CLI workspace",
  "summary": "List available workspaces, select the intended destination, and confirm context before a CLI upload, copy or destructive command.",
  "category": "developers",
  "articleSlug": "cli-workspace",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current select the correct cli workspace workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-switch-workspaces",
    "hc-cli-auth"
  ],
  "keywords": [
    "CLI workspace",
    "select workspace",
    "CLI context",
    "cloud storage"
  ]
}
---
CLI commands act in a workspace context. Confirm it explicitly when accounts contain similarly named workspaces.

CLI commands run against the selected workspace context, which may differ from the workspace open in a browser. Check context again before uploads, moves or deletes.

<figure class="help-screenshot"><a href="/screenshots/cli-workspace-workflow-map-2026-10-14.webp"><img src="/screenshots/cli-workspace-workflow-map-2026-10-14.webp" alt="Four-step interface map for select the correct cli workspace, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/cli-workspace-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
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

## Verify the result

Run a harmless list command and compare a known folder name with the web app. Continue only when both views identify the same workspace.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

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

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email and workspace name before the action and again when verifying the result. Similar names in another workspace refer to separate cloud-storage data and access policies.

### What should I include when asking support for help?

Include the action time, client and version, active workspace, expected result and exact nonsecret error. Never include passwords, API keys, webhook secrets, recovery codes, payment details or confidential file contents.

## Related guides

- [Switch web workspaces](/account/switch-workspaces)
- [Authenticate the CLI](/developers/cli-authenticate)
