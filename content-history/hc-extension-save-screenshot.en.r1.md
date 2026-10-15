---
{"articleId":"hc-extension-save-screenshot","locale":"en","revision":1,"title":"Save a browser screenshot to Dosya","summary":"Save a browser screenshot to Dosya. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"extension","articleSlug":"extension-save-screenshot","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the save a browser screenshot to dosya workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-extension-connect","hc-extension-save"],"keywords":["extension save screenshot","browser extension workflows","Dosya help"]}
---
Save a browser screenshot to Dosya is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Save to Dosya extension in the current released Dosya client.
- Confirm the active account and workspace, then identify a non-sensitive test page.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: save a browser screenshot to Dosya

1. Open Save to Dosya extension and confirm the active workspace.
2. Select a non-sensitive test page and check its name or identifying details.
3. Choose Screenshot, review the capture and save.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that a screenshot file appears in the selected folder.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/extension-save-controls-2026-10-10-r2.webp"><img src="/screenshots/extension-save-controls-2026-10-10-r2.webp" alt="Save to Dosya extension showing capture type and destination controls." width="360" height="560" loading="lazy" decoding="async" /></a><figcaption>Use a non-sensitive test page and confirm the extension destination before saving. <a href="/screenshots/extension-save-controls-2026-10-10-r2.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and a screenshot file appears in the selected folder. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Save to Dosya extension, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Connect the extension](/extension/install-and-connect)
- [Save from the browser](/extension/save-from-browser)
