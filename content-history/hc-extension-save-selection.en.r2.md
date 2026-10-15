---
{
  "articleId": "hc-extension-save-selection",
  "locale": "en",
  "revision": 2,
  "title": "Save selected text from a webpage",
  "summary": "Select text, open the extension and choose the text save action, then verify that the saved item contains the selected text and source context.",
  "category": "extension",
  "articleSlug": "extension-save-selection",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current save selected text from a webpage workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-extension-connect",
    "hc-extension-save"
  ],
  "keywords": [
    "extension save selection",
    "browser extension workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to save selected text from a webpage in the intended account or workspace.

The main checks are the browser profile, signed-in workspace and destination folder. Review captured page content before saving and keep private browser data out of support screenshots.

<figure class="help-screenshot"><a href="/screenshots/extension-save-selection-workflow-map-2026-10-14.webp"><img src="/screenshots/extension-save-selection-workflow-map-2026-10-14.webp" alt="Four-step interface map for save selected text from a webpage, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/extension-save-selection-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Save to Dosya extension in the current released Dosya client.
- Confirm the active account and workspace, then identify a short non-sensitive text selection.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: save selected text from a webpage

1. Open Save to Dosya extension and confirm the active workspace.
2. Select a short non-sensitive text selection and check its name or identifying details.
3. Select text, open the extension and choose the text save action.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the saved item contains the selected text and source context.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/extension-save-controls-2026-10-10-r2.webp"><img src="/screenshots/extension-save-controls-2026-10-10-r2.webp" alt="Save to Dosya extension showing capture type and destination controls." width="360" height="560" loading="lazy" decoding="async" /></a><figcaption>Use a non-sensitive test page and confirm the extension destination before saving. <a href="/screenshots/extension-save-controls-2026-10-10-r2.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that the saved item contains the selected text and source context. Refresh or reopen the view once to confirm the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The workflow completes for the controlled test and the saved item contains the selected text and source context. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Save to Dosya extension, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Connect the extension](/extension/install-and-connect)
- [Save from the browser](/extension/save-from-browser)
