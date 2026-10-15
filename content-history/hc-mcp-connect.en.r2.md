---
{
  "articleId": "hc-mcp-connect",
  "locale": "en",
  "revision": 2,
  "title": "Connect an MCP client to Dosya",
  "summary": "Use the current Dosya MCP connection instructions, authorize the client with limited workspace access, and test a read-only tool call.",
  "category": "developers",
  "articleSlug": "mcp-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current connect an mcp client to dosya workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-ai-app-permissions",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "MCP server",
    "Model Context Protocol",
    "AI file tools",
    "cloud storage"
  ]
}
---
Model Context Protocol clients can expose Dosya tools to an AI application. Follow the current server and authorization instructions literally.

MCP authorization connects a client to a selected Dosya workspace and tool set. Begin with read-only access and non-confidential data.

<figure class="help-screenshot"><a href="/screenshots/mcp-connect-workflow-map-2026-10-14.webp"><img src="/screenshots/mcp-connect-workflow-map-2026-10-14.webp" alt="Four-step interface map for connect an mcp client to dosya, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/mcp-connect-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: connect an mcp client to dosya

1. Open the current MCP integration documentation.
2. Create or choose a dedicated limited connection.
3. Enter the documented server address in the client.
4. Complete authorization for one workspace.
5. List or read one non-confidential test item.
6. Review and disconnect the grant after testing.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

List or inspect one test item and confirm the client reports the intended workspace. Review the saved grant and disconnect it when the test is finished.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The connect an mcp client to dosya workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Review AI app permissions](/integrations/ai-app-permissions)
- [Choose least privilege](/developers/api-key-scopes)
