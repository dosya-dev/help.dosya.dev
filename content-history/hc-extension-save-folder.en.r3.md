---
{
  "articleId": "hc-extension-save-folder",
  "locale": "en",
  "revision": 3,
  "title": "Choose an extension save folder",
  "summary": "Open the folder picker and save the destination, then verify that the next test capture lands in that folder.",
  "category": "extension",
  "articleSlug": "extension-save-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current choose an extension save folder workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-extension-connect",
    "hc-extension-save"
  ],
  "keywords": [
    "extension save folder",
    "browser extension workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to choose an extension save folder in the intended account or workspace.

The saved extension destination controls where the next capture or page file appears. Similar folder names in different workspaces are separate locations.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-save-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/extension-save-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/extension-save-folder-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-save-folder-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-save-folder-workflow-map-2026-10-14.webp" alt="Four-step interface map for choose an extension save folder, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/extension-save-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/extension-save-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/extension-save-folder-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Save to Dosya extension in the current released Dosya client.
- Confirm the active account and workspace, then identify the intended workspace folder.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: choose an extension save folder

1. Open Save to Dosya extension and confirm the active workspace.
2. Select the intended workspace folder and check its name or identifying details.
3. Open the folder picker and save the destination.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the next test capture lands in that folder.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/extension-save-controls-2026-10-10-r2.webp"><img src="/screenshots/extension-save-controls-2026-10-10-r2.webp" alt="Save to Dosya extension showing capture type and destination controls." width="360" height="560" loading="lazy" decoding="async" /></a><figcaption>Use a non-sensitive test page and confirm the extension destination before saving. <a href="/screenshots/extension-save-controls-2026-10-10-r2.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Save one harmless capture and verify it appears once under the selected workspace breadcrumb.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The workflow completes for the controlled test and the next test capture lands in that folder. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Save to Dosya extension, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Connect the extension](/extension/install-and-connect)
- [Save from the browser](/extension/save-from-browser)
