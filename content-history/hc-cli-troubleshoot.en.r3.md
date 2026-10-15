---
{
  "articleId": "hc-cli-troubleshoot",
  "locale": "en",
  "revision": 3,
  "title": "Troubleshoot CLI authentication and transfers",
  "summary": "Diagnose CLI version, account, workspace, credential, permission, path and quota errors with a minimal safe command.",
  "category": "troubleshooting",
  "articleSlug": "cli",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current troubleshoot cli authentication and transfers workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-cli-install",
    "hc-cli-auth",
    "hc-cli-workspace"
  ],
  "keywords": [
    "CLI error",
    "CLI unauthorized",
    "CLI upload failed",
    "cloud storage"
  ]
}
---
CLI errors become easier to isolate when you reduce the task to version, authentication, context and one harmless listing request.

CLI failures are easier to diagnose with one harmless command before a transfer. Version, account, workspace, key scope, destination and quota are independent boundaries.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-workflow-map-2026-10-14.webp" alt="Four-step interface map for troubleshoot cli authentication and transfers, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/cli-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: troubleshoot cli authentication and transfers

1. Run version and built-in help.
2. Confirm authentication status and account.
3. List and select the workspace again.
4. Run one harmless list command.
5. Compare a failed transfer with role, quota and destination policy.
6. Retry only after correcting the identified boundary.

<figure class="help-screenshot"><a href="/screenshots/api-key-listed-2026-10-10.webp"><img src="/screenshots/api-key-listed-2026-10-10.webp" alt="Dosya API-key list showing named technical credentials that can be identified and revoked independently." width="1160" height="750" loading="lazy" decoding="async" /></a><figcaption>Name each credential for the client and task it serves. <a href="/screenshots/api-key-listed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Run a list command and compare its context with the web app. Retry the failed transfer only after the specific boundary in the error has been corrected.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The troubleshoot cli authentication and transfers workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Install the CLI](/developers/cli-install)
- [Authenticate the CLI](/developers/cli-authenticate)
- [Select a workspace](/developers/cli-workspace)
