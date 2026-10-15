---
{
  "articleId": "hc-cli-install",
  "locale": "en",
  "revision": 3,
  "title": "Install the Dosya CLI",
  "summary": "Install the official Dosya command-line client, confirm its version and built-in help, and avoid unverified package sources.",
  "category": "developers",
  "articleSlug": "cli-install",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current install the dosya cli workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-rest-api-connect",
    "hc-api-key"
  ],
  "keywords": [
    "install CLI",
    "command line",
    "CLI version",
    "cloud storage"
  ]
}
---
The CLI is for terminal-based file and workspace tasks. Install it from the current official instructions and confirm the binary before authentication.

Use the platform-specific command from current Dosya documentation and avoid unofficial binaries. The version and built-in help confirm which commands the installed client actually supports.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-install-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-install-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-install-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-install-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-install-workflow-map-2026-10-14.webp" alt="Four-step interface map for install the dosya cli, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/cli-install-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-install-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-install-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: install the dosya cli

1. Open Integrations → CLI and read the platform-specific install command.
2. Run the command in a trusted terminal.
3. Run the documented version command.
4. Open built-in help and compare the available commands with the current reference.
5. Update the shell path only when the installer requires it.
6. Remove any older unofficial binary before continuing.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya integration setup page showing the verified connection values and guidance used by an automation client." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Copy connection values from the current integration page and keep secrets private. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Run the version command from a new terminal and open built-in help. Confirm the executable path points to the official installation before authenticating.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The install the dosya cli workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [Create an API key](/developers/api-key)
